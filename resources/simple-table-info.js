export default {
  "vue_file": "node-red-fd-corewidgets/widgets/simple-table.vue",
  "base_filename": "simple-table",
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
  "name": "SimpleTable",
  "name_text": "Simple Table",
  "name_kebab": "simple-table",
  "help": "Display data in simple tabular form.\nYadda yadda.",
  "help_title": "Display data in simple tabular form",
  "help_body": "<p>Yadda yadda.</p>",
  "output": false,
  "payload_param": "value",
  "props": {
    "data": {
      "name": "data",
      "name_text": "Data",
      "name_kebab": "data",
      "tip": "Array of data rows, or map of rows. ",
      "default": "null",
      "default_text": "Default: null",
      "input_type": "any"
    },
    "columns": {
      "name": "columns",
      "name_text": "Columns",
      "name_kebab": "columns",
      "tip": "Per column key to index data. ",
      "default": "null",
      "default_text": "Default: null",
      "type": "array",
      "input_type": "json"
    },
    "labels": {
      "name": "labels",
      "name_text": "Labels",
      "name_kebab": "labels",
      "tip": "Array of column labels. ",
      "default": "null",
      "default_text": "Default: null",
      "type": "array",
      "input_type": "json"
    }
  }
}