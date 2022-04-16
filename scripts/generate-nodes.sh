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
# hack for uplot dependency
mkdir widgets/node_modules
cp -r ./node_modules/uplot widgets/node_modules
# generate nodes
node ./node_modules/.bin/gen-widget-nodes
# insert the generated nodes into package.json
node ./scripts/update-package-json.js
