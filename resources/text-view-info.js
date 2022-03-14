export default {
  "vue_file": "node-red-fd-corewidgets/widgets/text-view.vue",
  "base_filename": "text-view",
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
  "name": "TextView",
  "name_text": "Text View",
  "name_kebab": "text-view",
  "help": "Show plain monospaced text.\n",
  "help_title": "Show plain monospaced text",
  "help_body": "<p><i>Please write some help text in the widget's help property.</i></p>",
  "output": true,
  "payload_param": "value",
  "props": {
    "title": {
      "name": "title",
      "name_text": "Title",
      "name_kebab": "title",
      "tip": "",
      "default": "\"TextView\"",
      "default_text": "Default: \"TextView\"",
      "type": "string",
      "input_type": "str"
    },
    "text": {
      "name": "text",
      "name_text": "Text",
      "name_kebab": "text",
      "tip": "",
      "default": "\"\"",
      "default_text": "Default: \"\"",
      "type": "string",
      "input_type": "str"
    },
    "editable": {
      "name": "editable",
      "name_text": "Editable",
      "name_kebab": "editable",
      "tip": "Allow editing of the text. ",
      "default": "false",
      "default_text": "Default: false",
      "type": "boolean",
      "input_type": "bool"
    }
  }
}