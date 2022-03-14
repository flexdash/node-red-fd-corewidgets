export default {
  "vue_file": "node-red-fd-corewidgets/widgets/toggle.vue",
  "base_filename": "toggle",
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
  "name": "Toggle",
  "name_text": "Toggle",
  "name_kebab": "toggle",
  "help": "Simple on/off toggle switch.\nSends a pre-determined value when toggled on or off. The current state can be set via the\nvalue input: the toggle will be \"on\" if the value is equal to the \"on_value\" input.",
  "help_title": "Simple on/off toggle switch",
  "help_body": "<p>Sends a pre-determined value when toggled on or off. The current state can be set via the\nvalue input: the toggle will be \"on\" if the value is equal to the \"on_value\" input.</p>",
  "output": true,
  "payload_param": "value",
  "props": {
    "value": {
      "name": "value",
      "name_text": "Value",
      "name_kebab": "value",
      "tip": "Set toggle value. ",
      "default": "null",
      "default_text": "Default: null",
      "input_type": "any"
    },
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
    "on_value": {
      "name": "on_value",
      "name_text": "On Value",
      "name_kebab": "on-value",
      "tip": "Value sent when switched on. ",
      "default": "true",
      "default_text": "Default: true",
      "type": "boolean",
      "input_type": "bool"
    },
    "off_value": {
      "name": "off_value",
      "name_text": "Off Value",
      "name_kebab": "off-value",
      "tip": "Value sent when switched off. ",
      "default": "false",
      "default_text": "Default: false",
      "input_type": "any"
    },
    "show_value": {
      "name": "show_value",
      "name_text": "Show Value",
      "name_kebab": "show-value",
      "tip": "Show current value. ",
      "default": "true",
      "default_text": "Default: true",
      "type": "boolean",
      "input_type": "bool"
    }
  }
}