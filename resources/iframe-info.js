export default {
  "vue_file": "node-red-fd-corewidgets/widgets/iframe.vue",
  "base_filename": "iframe",
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
  "name": "IFrame",
  "name_text": "IFrame",
  "name_kebab": "iframe",
  "help": "Embed another site.\nThe IFrame widget embeds another site. This is handy to embed a chart or image. To embed a\nfull page see the i-frame grid.",
  "help_title": "Embed another site",
  "help_body": "<p>The IFrame widget embeds another site. This is handy to embed a chart or image. To embed a\nfull page see the i-frame grid.</p>",
  "output": false,
  "payload_param": "value",
  "props": {
    "url": {
      "name": "url",
      "name_text": "Url",
      "name_kebab": "url",
      "tip": "",
      "default": "\"https://user-images.githubusercontent.com/19274367/45430032-b6a5a180-b6a4-11e8-9645-a0497ef044f3.png\"",
      "default_text": "Default: \"https://user-images.githubusercontent.com/19274367/45430032-b6a5a180-b6a4-11e8-9645-a0497ef044f3.png\"",
      "type": "string",
      "input_type": "str"
    }
  }
}