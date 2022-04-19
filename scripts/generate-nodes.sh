#! /bin/bash -ex
FLEXDASH_VERSION=0.4.5

npm install --no-progress --no-audit --no-fund
# get flexdash source since the widget sources are there
rm -rf flexdash-src
mkdir -p flexdash-src
curl -L https://s3.amazonaws.com/s3.voneicken.com/flexdash/flexdash-${FLEXDASH_VERSION}-src.tgz | \
    tar -C flexdash-src -zxf - src/widgets
rm -rf widgets
cp -r flexdash-src/src/widgets widgets
( cd widgets; rm *-widget.vue panel.vue random-*.vue thermostat.vue upload-button.vue )
# hack for uplot dependency
mkdir widgets/node_modules
cp -r ./node_modules/uplot widgets/node_modules
# generate nodes
rm *.html *.js
if [[ -f ../node-red-flexdash/gen-widget-nodes.js ]]; then
    echo Using source gen-widget-nodes
    node ../node-red-flexdash/gen-widget-nodes.js
else
    node ./node_modules/.bin/gen-widget-nodes
fi
# insert the generated nodes into package.json
node ./scripts/update-package-json.js
# clean up
rm -rf widgets
