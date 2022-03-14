export default {
  "vue_file": "node-red-fd-corewidgets/widgets/label.vue",
  "base_filename": "label",
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
  "name": "Label",
  "name_text": "Label",
  "name_kebab": "label",
  "help": "Display a label, useful in panels.\nThe Label widget displays a text string with various size and alignment options. It is very\nsimilar to the Stat widget but focuses on text positioning and size more than\nthresholds, units and such.",
  "help_title": "Display a label, useful in panels",
  "help_body": "<p>The Label widget displays a text string with various size and alignment options. It is very\nsimilar to the Stat widget but focuses on text positioning and size more than\nthresholds, units and such.</p>",
  "output": false,
  "payload_param": "value",
  "props": {
    "label": {
      "name": "label",
      "name_text": "Label",
      "name_kebab": "label",
      "tip": "",
      "default": "null",
      "default_text": "Default: null",
      "input_type": "any"
    },
    "color": {
      "name": "color",
      "name_text": "Color",
      "name_kebab": "color",
      "tip": "",
      "default": "null",
      "default_text": "Default: null",
      "type": "string",
      "input_type": "str"
    },
    "align": {
      "name": "align",
      "name_text": "Align",
      "name_kebab": "align",
      "tip": "Top/center/bottom. ",
      "default": "\"center\"",
      "default_text": "Default: \"center\"",
      "type": "string",
      "input_type": "str"
    },
    "justify": {
      "name": "justify",
      "name_text": "Justify",
      "name_kebab": "justify",
      "tip": "Left/center/right. ",
      "default": "\"center\"",
      "default_text": "Default: \"center\"",
      "type": "string",
      "input_type": "str"
    },
    "weight": {
      "name": "weight",
      "name_text": "Weight",
      "name_kebab": "weight",
      "tip": "100..400..700..900. ",
      "default": "\"400\"",
      "default_text": "Default: \"400\"",
      "type": "string",
      "input_type": "str"
    },
    "size": {
      "name": "size",
      "name_text": "Size",
      "name_kebab": "size",
      "tip": "Any font-size CSS value. ",
      "default": "\"100%\"",
      "default_text": "Default: \"100%\"",
      "type": "string",
      "input_type": "str"
    },
    "padding": {
      "name": "padding",
      "name_text": "Padding",
      "name_kebab": "padding",
      "tip": "CSS padding around label. ",
      "default": "\"4px\"",
      "default_text": "Default: \"4px\"",
      "type": "string",
      "input_type": "str"
    }
  }
}