import { Template } from '../../models';

export const plotlyStarter: Template = {
  name: 'plotly',
  title: 'Plotly Starter',
  thumbnail: 'assets/templates/plotly.png',
  activeEditor: 'markup',
  markup: {
    language: 'graph',
    content: `
<div class="container">
  <img data-src="box.svg" />
</div>

<script type="application/graph-plotly" data-output="box.svg">
{
  "data": [
    {
      "y": [
        0.2,
        0.2,
        0.6,
        1,
        0.5,
        0.4,
        0.2,
        0.7,
        0.9,
        0.1,
        0.5,
        0.3
      ],
      "x": [
        "day 1",
        "day 1",
        "day 1",
        "day 1",
        "day 1",
        "day 1",
        "day 2",
        "day 2",
        "day 2",
        "day 2",
        "day 2",
        "day 2"
      ],
      "name": "kale",
      "marker": {
        "color": "#3D9970"
      },
      "type": "box"
    },
    {
      "y": [
        0.6,
        0.7,
        0.3,
        0.6,
        0,
        0.5,
        0.7,
        0.9,
        0.5,
        0.8,
        0.7,
        0.2
      ],
      "x": [
        "day 1",
        "day 1",
        "day 1",
        "day 1",
        "day 1",
        "day 1",
        "day 2",
        "day 2",
        "day 2",
        "day 2",
        "day 2",
        "day 2"
      ],
      "name": "radishes",
      "marker": {
        "color": "#FF4136"
      },
      "type": "box"
    },
    {
      "y": [
        0.1,
        0.3,
        0.1,
        0.9,
        0.6,
        0.6,
        0.9,
        1,
        0.3,
        0.6,
        0.8,
        0.5
      ],
      "x": [
        "day 1",
        "day 1",
        "day 1",
        "day 1",
        "day 1",
        "day 1",
        "day 2",
        "day 2",
        "day 2",
        "day 2",
        "day 2",
        "day 2"
      ],
      "name": "carrots",
      "marker": {
        "color": "#FF851B"
      },
      "type": "box"
    }
  ],
  "layout": {
    "yaxis": {
      "title": "normalized moisture",
      "zeroline": false
    },
    "boxmode": "group"
  }
}
</script>
`.trimStart(),
  },
  style: {
    language: 'css',
    content: `
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container img {
  width: 80%;
  max-width: 600px;
}`.trimStart(),
  },
  script: {
    language: 'javascript',
    content: '',
  },
  stylesheets: [],
  scripts: [],
  cssPreset: '',
  imports: {},
  types: {},
};
