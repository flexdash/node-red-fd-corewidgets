export default {
  "vue_file": "node-red-fd-corewidgets/widgets/popup-button.vue",
  "base_filename": "popup-button",
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
  "name": "PopupButton",
  "name_text": "Popup Button",
  "name_kebab": "popup-button",
  "help": "Button to pop-up a mardown text panel.\nPressing the button pops-up a mardown panel, useful for help or other information.\nThe button may contain an icon and/or a title string and is centered in the widget.",
  "help_title": "Button to pop-up a mardown text panel",
  "help_body": "<p>Pressing the button pops-up a mardown panel, useful for help or other information.\nThe button may contain an icon and/or a title string and is centered in the widget.</p>",
  "output": false,
  "payload_param": "value",
  "props": {
    "enabled": {
      "name": "enabled",
      "name_text": "Enabled",
      "name_kebab": "enabled",
      "tip": "",
      "default": "true",
      "default_text": "Default: true",
      "type": "boolean",
      "input_type": "bool"
    },
    "color": {
      "name": "color",
      "name_text": "Color",
      "name_kebab": "color",
      "tip": "",
      "default": "\"primary\"",
      "default_text": "Default: \"primary\"",
      "type": "string",
      "input_type": "str"
    },
    "text": {
      "name": "text",
      "name_text": "Text",
      "name_kebab": "text",
      "tip": "Markdown text to show in pop-up. ",
      "default": "\"\"",
      "default_text": "Default: \"\"",
      "input_type": "any"
    },
    "icon": {
      "name": "icon",
      "name_text": "Icon",
      "name_kebab": "icon",
      "tip": "Material-design-icon name. ",
      "default": "null",
      "default_text": "Default: null",
      "input_type": "any"
    },
    "title": {
      "name": "title",
      "name_text": "Title",
      "name_kebab": "title",
      "tip": "",
      "default": "\"Info\"",
      "default_text": "Default: \"Info\"",
      "type": "string",
      "input_type": "str"
    }
  }
}