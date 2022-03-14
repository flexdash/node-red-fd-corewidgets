export default {
  "vue_file": "node-red-fd-corewidgets/widgets/sparkchart.vue",
  "base_filename": "sparkchart",
  "module_dir": "node-red-fd-corewidgets",
  "module_name": {
    "name": "@flexdash/node-red-fd-corewidgets",
    "version": "0.0.1",
    "description": "A set of core FlexDash widgets for Node-RED.",
    "dependencies": {
      "@flexdash/node-red-flexdash": ">=0.3.0"
    },
    "author": "Thorsten von Eicken",
    "license": "MIT",
    "keywords": [
      "dashboard",
      "flexdash",
      "node-red"
    ],
    "bugs": {
      "url": "https://github.com/flexdash/node-red-fd-corewidgets/issues"
    },
    "homepage": "https://github.com/flexdash/node-red-fd-corewidgets#README.md",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/flexdash/node-red-fd-corewidgets.git"
    },
    "node-red": {
      "version": "^2.0.0",
      "nodes": {
        "datetime.vue": "widgets/datetime.vue",
        "gauge.vue": "widgets/gauge.vue",
        "iframe.vue": "widgets/iframe.vue",
        "label.vue": "widgets/label.vue",
        "markdown.vue": "widgets/markdown.vue",
        "panel.vue": "widgets/panel.vue",
        "popup-button.vue": "widgets/popup-button.vue",
        "props-table.vue": "widgets/props-table.vue",
        "push-button.vue": "widgets/push-button.vue",
        "random-array.vue": "widgets/random-array.vue",
        "random-value.vue": "widgets/random-value.vue",
        "simple-table.vue": "widgets/simple-table.vue",
        "spark-line.vue": "widgets/spark-line.vue",
        "sparkchart.vue": "widgets/sparkchart.vue",
        "stat.vue": "widgets/stat.vue",
        "text-view.vue": "widgets/text-view.vue",
        "thermostat.vue": "widgets/thermostat.vue",
        "time-plot-raw.vue": "widgets/time-plot-raw.vue",
        "time-plot.vue": "widgets/time-plot.vue",
        "toggle.vue": "widgets/toggle.vue",
        "tree-view.vue": "widgets/tree-view.vue",
        "upload-button.vue": "widgets/upload-button.vue",
        "value-sequence.vue": "widgets/value-sequence.vue",
        "wind-plot.vue": "widgets/wind-plot.vue"
      }
    },
    "engines": {
      "node": ">=12.0.0"
    },
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    }
  },
  "resources_dir": "node-red-fd-corewidgets/resources",
  "resources_path": "resources/[object Object]",
  "name": "Sparkchart",
  "name_text": "Sparkchart",
  "name_kebab": "sparkchart",
  "help": "Sparkline chart.\nA SparkChart displays a simple graph with up to 20 past values. The values can be displayed\nusing a line or bars. When using a line the min/max auto-adjust, when using bars the min\nis fixed at 0.\n\nTo insert data send a a simple numeric value, it is appended to the chart and the oldest value\nis dropped. It is also possible to send an array, which replaces the entire chart (and can\nthereby alter the number of values shown). Note that it is not possible to show gaps using\nnull values.",
  "help_title": "Sparkline chart",
  "help_body": "<p>A SparkChart displays a simple graph with up to 20 past values. The values can be displayed\nusing a line or bars. When using a line the min/max auto-adjust, when using bars the min\nis fixed at 0.</p><p>To insert data send a a simple numeric value, it is appended to the chart and the oldest value\nis dropped. It is also possible to send an array, which replaces the entire chart (and can\nthereby alter the number of values shown). Note that it is not possible to show gaps using\nnull values.</p>",
  "output": false,
  "payload_param": "value",
  "props": {
    "value": {
      "name": "value",
      "name_text": "Value",
      "name_kebab": "value",
      "tip": "Number to append, array to replace. ",
      "default": "0",
      "default_text": "Default: 0",
      "input_type": "any"
    },
    "color": {
      "name": "color",
      "name_text": "Color",
      "name_kebab": "color",
      "tip": "",
      "default": "\"blue\"",
      "default_text": "Default: \"blue\"",
      "type": "string",
      "input_type": "str"
    },
    "fill": {
      "name": "fill",
      "name_text": "Fill",
      "name_kebab": "fill",
      "tip": "Solid fill from the line down. ",
      "default": "false",
      "default_text": "Default: false",
      "type": "boolean",
      "input_type": "bool"
    },
    "line_width": {
      "name": "line_width",
      "name_text": "Line Width",
      "name_kebab": "line-width",
      "tip": "Width of the sparkline or width between bars. ",
      "default": "4",
      "default_text": "Default: 4",
      "type": "number",
      "input_type": "num"
    },
    "bars": {
      "name": "bars",
      "name_text": "Bars",
      "name_kebab": "bars",
      "tip": "Draw bars instead of line. ",
      "default": "false",
      "default_text": "Default: false",
      "type": "boolean",
      "input_type": "bool"
    }
  }
}