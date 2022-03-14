#! /bin/bash -ex
FLEXDASH_VERSION=0.3.16

npm install
mkdir -p flexdash-src
curl -L https://s3.amazonaws.com/s3.voneicken.com/flexdash/flexdash-${FLEXDASH_VERSION}-src.tgz | \
    tar -C flexdash-src -zxf - src/widgets
rm -rf widgets
cp -r flexdash-src/src/widgets widgets
node ./node_modules/.bin/gen-widgets
node ./scripts/update-package-json.js
