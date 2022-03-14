export default {
  "vue_file": "node-red-fd-corewidgets/widgets/panel.vue",
  "base_filename": "panel",
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
  "name": "Panel",
  "name_text": "Panel",
  "name_kebab": "panel",
  "help": "Rectangular container to create a custom arrangement of widgets.\nThe panel widget contains a half-sized grid into which widgets can be placed.\nUnlike the outer grid, the panel does not resize itself with browser window\nchanges and thus the positioning of the widgets remains fixed.\n\nA solid panel has the same background as a widget, and widgets within\nthe panel are border-less. Transparent panels have no visual features and\nact only as a fixed arrangement of widgets.",
  "help_title": "Rectangular container to create a custom arrangement of widgets",
  "help_body": "<p>The panel widget contains a half-sized grid into which widgets can be placed.\nUnlike the outer grid, the panel does not resize itself with browser window\nchanges and thus the positioning of the widgets remains fixed.</p><p>A solid panel has the same background as a widget, and widgets within\nthe panel are border-less. Transparent panels have no visual features and\nact only as a fixed arrangement of widgets.</p>",
  "output": false,
  "payload_param": "value",
  "props": {
    "id": {
      "name": "id",
      "name_text": "Id",
      "name_kebab": "id",
      "tip": "",
      "default": "null",
      "default_text": "Default: null",
      "input_type": "any"
    },
    "solid": {
      "name": "solid",
      "name_text": "Solid",
      "name_kebab": "solid",
      "tip": "",
      "default": "true",
      "default_text": "Default: true",
      "type": "boolean",
      "input_type": "bool"
    },
    "widgets": {
      "name": "widgets",
      "name_text": "Widgets",
      "name_kebab": "widgets",
      "tip": "",
      "default": "[]",
      "default_text": "Default: []",
      "type": "array",
      "input_type": "json"
    }
  }
}