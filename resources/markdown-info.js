export default {
  "vue_file": "node-red-fd-corewidgets/widgets/markdown.vue",
  "base_filename": "markdown",
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
  "name": "Markdown",
  "name_text": "Markdown",
  "name_kebab": "markdown",
  "help": "Render text using simple MarkDown.\nThis widget supports the following MarkDown formatting:\n\n- paragraphs separated by an empty line\n- `_`_italics_`_`, `*`*italics*`*`, `__`__bold__`__`, `**`**bold**`**`, ```code```\n- unordered lists (lines starting with `- `X or `* `), ordered lists (lines starting with `[0-9]. `)\n- headings (lines starting with `# ` through `###### ` or lines followed by `==` for H1 and `--` for H2)\n- block quotes (lines starting with `> `)\n- code blocks (lines indented by 2 or more spaces, sorry, but `````` is not supported)\n- links as https://example.com or using `[alt text](url)`\n- images using `![alt text](url)` (`width:100%` is applied)\n- simple tables by starting lines with `|` and separating columns also with `|`\n",
  "help_title": "Render text using simple MarkDown",
  "help_body": "<p>This widget supports the following MarkDown formatting:</p><p>- paragraphs separated by an empty line\n- <tt>_</tt><tt>_italics_</tt><tt>_</tt><tt>, </tt><tt>*</tt><tt>*italics*</tt><tt>*</tt><tt>, </tt><tt>__</tt><tt>__bold__</tt><tt>__</tt><tt>, </tt><tt>**</tt><tt>**bold**</tt><tt>**</tt><tt>, </tt>``<tt>code</tt>```\n- unordered lists (lines starting with <tt>- </tt><tt>X or </tt><tt>* </tt><tt>), ordered lists (lines starting with </tt><tt>[0-9]. </tt><tt>)</tt>\n- headings (lines starting with <tt># </tt><tt> through </tt><tt>###### </tt><tt> or lines followed by </tt><tt>==</tt><tt> for H1 and </tt><tt>--</tt><tt> for H2)</tt>\n- block quotes (lines starting with <tt>> </tt><tt>)</tt>\n- code blocks (lines indented by 2 or more spaces, sorry, but `````<tt> is not supported)</tt>\n- links as https://example.com or using <tt>[alt text](url)</tt>`\n- images using <tt>![alt text](url)</tt><tt> (</tt><tt>width:100%</tt><tt> is applied)</tt>\n- simple tables by starting lines with <tt>|</tt><tt> and separating columns also with </tt><tt>|</tt>`</p>",
  "output": false,
  "payload_param": "value",
  "props": {
    "title": {
      "name": "title",
      "name_text": "Title",
      "name_kebab": "title",
      "tip": "",
      "default": "\"Markdown\"",
      "default_text": "Default: \"Markdown\"",
      "type": "string",
      "input_type": "str"
    },
    "text": {
      "name": "text",
      "name_text": "Text",
      "name_kebab": "text",
      "tip": "",
      "default": "\"- _Hello_ __!__\"",
      "default_text": "Default: \"- _Hello_ __!__\"",
      "type": "string",
      "input_type": "str"
    }
  }
}