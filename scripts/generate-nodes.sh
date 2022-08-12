#! /bin/bash -e
FLEXDASH_VERSION=0.4

npm install --no-progress --no-audit --no-fund
# get flexdash source since the widget sources are there
rm -rf flexdash-src widgets
if [[ -d ../flexdash/src/widgets ]]; then
  echo "Using FlexDash sources in ../flexdash/src"
  cp -r ../flexdash/src/widgets .
else
  mkdir -p flexdash-src
  echo Downloading FlexDash ${FLEXDASH_VERSION}
  curl -L https://s3.amazonaws.com/s3.voneicken.com/flexdash/flexdash-${FLEXDASH_VERSION}-src.tgz | \
    tar -C flexdash-src -zxf - package.json src/widgets
  echo "Got flexdash $(egrep version flexdash-src/package.json)"
  cp -r flexdash-src/src/widgets widgets
fi
( cd widgets; rm *-widget.vue panel.vue random-*.vue thermostat.vue upload-button.vue )
# hack for uplot dependency
mkdir widgets/node_modules
cp -r ./node_modules/uplot widgets/node_modules
# generate nodes
rm -f *.html *.js
if [[ -f ../node-red-flexdash/gen-widget-nodes.js ]]; then
    echo Using source gen-widget-nodes
    node ../node-red-flexdash/gen-widget-nodes.js
else
    echo Using NPM gen-widget-nodes $(egrep version ./node_modules/@flexdash/node-red-flexdash/package.json)
    node ./node_modules/.bin/gen-widget-nodes
fi
# insert the generated nodes into package.json
node ./scripts/update-package-json.js
# clean up
rm -rf widgets
