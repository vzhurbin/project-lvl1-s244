install: 
	npm install

lint:
	npm run eslint

start: 
	npm run babel-node -- src/bin/brain-calc.js

test: 
	npm run babel-node -- src/bin/brain-test.js

publish:
	npm publish