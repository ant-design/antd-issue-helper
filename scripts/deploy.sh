#!/bin/sh

git checkout gh-pages && \
npm run build && \
cp -r build/* . && \
git add . && \
git commit -m 'Deploy' && \
git push origin gh-pages && \
git checkout master
