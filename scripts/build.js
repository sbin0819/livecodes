var esbuild = require('esbuild');
var fs = require('fs');
var path = require('path');
var URL = require('url');

var srcDir = path.resolve(__dirname + '/../src/localpen');
var outDir = path.resolve(__dirname + '/../build');
mkdirp(outDir);
fs.copyFileSync(path.resolve(srcDir + '/localpen.json'), path.resolve(outDir + '/localpen.json'));
function mkdirp(dir) {
  if (!fs.existsSync(path.resolve(dir))) {
    fs.mkdirSync(path.resolve(dir));
  }
}
function uint8arrayToString(myUint8Arr) {
  return String.fromCharCode.apply(null, myUint8Arr);
}
function iife(code) {
  return '(function(){' + code.trim() + '})();\n';
}

var childProcess = require('child_process');
var version, gitCommit, gitRemote;
try {
  version = childProcess.execSync('git describe --tags --abbrev=0').toString().replace(/\n/g, '');
  gitCommit = childProcess.execSync('git rev-parse --short=8 HEAD').toString().replace(/\n/g, '');
  gitRemote = childProcess
    .execSync('git ls-remote --get-url origin')
    .toString()
    .replace(/\n/g, '')
    .slice(0, -4) /* '.git' */;

  var url = URL.parse(gitRemote);
  if (url.auth) {
    url.auth = '';
    gitRemote = URL.format(url);
  }
} catch (error) {
  console.log(error);
}

var buildOptions = {
  entryPoints: ['src/localpen/index.ts', 'src/localpen/app.ts'],
  bundle: true,
  minify: true,
  loader: { '.html': 'text', '.ttf': 'file' },
  outdir: 'build/localpen',
  format: 'esm',
  logLevel: 'error',
  define: {
    'process.env.VERSION': `"${version || ''}"`,
    'process.env.GIT_COMMIT': `"${gitCommit || ''}"`,
    'process.env.GIT_REMOTE': `"${gitRemote || ''}"`,
  },
};
esbuild.buildSync(buildOptions);

var buildOptionsUmd = {
  entryPoints: ['src/localpen/embed.ts'],
  bundle: true,
  minify: true,
  loader: { '.html': 'text', '.ttf': 'file' },
  outfile: 'build/localpen/embed.js',
  format: 'iife',
  globalName: 'localpen',
  logLevel: 'error',
};

esbuild.buildSync(buildOptionsUmd);

var workerOptions = {
  entryPoints: [
    'src/localpen/compiler/compile.worker.ts',
    'src/localpen/formatter/format.worker.ts',
  ],
  bundle: true,
  minify: true,
  outdir: 'build/localpen',
  format: 'esm',
  write: false,
};

var worker = esbuild.buildSync(workerOptions);
for (let out of worker.outputFiles) {
  var content = uint8arrayToString(out.contents);
  var filename = path.basename(out.path);
  fs.writeFileSync(path.resolve('build/localpen', filename), iife(content));
}

esbuild.buildSync({
  entryPoints: ['src/localpen/editor/codemirror.ts'],
  bundle: true,
  minify: true,
  outfile: 'build/localpen/codemirror.js',
  format: 'esm',
});

esbuild.buildSync({
  entryPoints: ['src/localpen/result-utils.ts'],
  bundle: true,
  minify: true,
  outfile: 'build/localpen/assets/scripts/utils.js',
  format: 'iife',
});

console.log('built to: ' + buildOptions.outdir);
