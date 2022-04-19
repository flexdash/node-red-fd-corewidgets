#! /bin/bash -e
[[ -d widgets ]] && rm -r widgets
[[ -d resources ]] && rm -r resources
[[ -d node_modules ]] && rm -r node_modules
rm *.js *.html package-nodes.json package-lock.json || true
