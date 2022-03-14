export default {
  "vue_file": "node-red-fd-corewidgets/widgets/value-sequence.vue",
  "base_filename": "value-sequence",
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
  "name": "ValueSequence",
  "name_text": "Value Sequence",
  "name_kebab": "value-sequence",
  "help": "Input a value by clicking +/- through a sequence.\nThe range input provides an array of values from which the user can select one by\nclicking on the +/- buttons. The values are typically numeric but may be strings as well, or\na combination of both.\n\nTo facilitate the input of numeric ranges a value of \"...\" between two numbers is replaced by\nthe range between those numbers. A step may be specified after the dots, e.g. \"...10\". For example,\nthe input array `[\"off\", 20, \"...10\", 40]` results in the range: off, 20, 30, 40.",
  "help_title": "Input a value by clicking +/- through a sequence",
  "help_body": "<p>The range input provides an array of values from which the user can select one by\nclicking on the +/- buttons. The values are typically numeric but may be strings as well, or\na combination of both.</p><p>To facilitate the input of numeric ranges a value of \"...\" between two numbers is replaced by\nthe range between those numbers. A step may be specified after the dots, e.g. \"...10\". For example,\nthe input array <tt>[\"off\", 20, \"...10\", 40]</tt><tt> results in the range: off, 20, 30, 40.</tt></p>",
  "output": true,
  "payload_param": "value",
  "props": {
    "range": {
      "name": "range",
      "name_text": "Range",
      "name_kebab": "range",
      "tip": "Values to select from, use '...<step>' for a range. ",
      "default": "[\"off\",10,\"...10\",100]",
      "default_text": "Default: [\"off\",10,\"...10\",100]",
      "type": "array",
      "input_type": "json"
    },
    "value": {
      "name": "value",
      "name_text": "Value",
      "name_kebab": "value",
      "tip": "Current value selected. ",
      "default": "",
      "default_text": "",
      "type": "number",
      "input_type": "num"
    },
    "unit": {
      "name": "unit",
      "name_text": "Unit",
      "name_kebab": "unit",
      "tip": "Unit to show after numeric values. ",
      "default": "\"\"",
      "default_text": "Default: \"\"",
      "type": "string",
      "input_type": "str"
    },
    "label": {
      "name": "label",
      "name_text": "Label",
      "name_kebab": "label",
      "tip": "Label for control. ",
      "default": "\"\"",
      "default_text": "Default: \"\"",
      "type": "string",
      "input_type": "str"
    },
    "label_above": {
      "name": "label_above",
      "name_text": "Label Above",
      "name_kebab": "label-above",
      "tip": "Place label above control, else to the left. ",
      "default": "false",
      "default_text": "Default: false",
      "type": "boolean",
      "input_type": "bool"
    }
  }
}