# Projects

A _LiveCodes_ project is a combination of markup, styles & scripts that result in a **single web page**. Check the section about the [Result Page](./result.md) to have more details about how this page is constructed.

There is no concept of file system or, for example, organizing multiple files in a directory structure of a single project.

:::info Simple Concept
code in [markup editor](#markup-editor) + code in [style editor](#style-editor) + code in [script editor](#script-editor) + [external resources](./external-resources.md) => [result page](./result.md)
:::

## Markup Editor

Code added in this editor eventually represents the page markup (HTML).

Examples for languages supported include HTML, Markdown, Pug, Haml.

## Style Editor

Code added in this editor eventually represents the page styles (CSS).

Examples for languages supported include CSS, SCSS, SASS, Less, Stylus. In addition, many CSS processors are supported (e.g. Autoprefixer, postcss-preset-env, postcss-import-url, PurgeCSS, Tailwind CSS).

## Script Editor

Code added in this editor eventually represents the page scripts.

These are either:

- Languages compiled to JavaScript (e.g TypeScript, JSX, CoffeeScript)
- Languages that are interpreted by a JavaScript runtime (e.g. PHP - interpreted by [Uniter runtime](https://github.com/asmblah/uniter), Scheme - interpreted by [BiwaScheme](https://www.biwascheme.org))
- Languages running in WASM (e.g. Python - [Pyodide](https://pyodide.org/), AssemblyScript).

For the full list of supported languages, check the [Languages section](../languages/).

## Organizing Projects
