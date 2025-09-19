cp package.json package.tmp.json
jq 'del(.devDependencies, .scripts)' package.tmp.json > package.json
npm publish --access public
mv package.tmp.json package.json