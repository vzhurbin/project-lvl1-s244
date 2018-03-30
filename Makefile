install: 
	npm install

lint:
	npm run eslint

start: 
	npm run babel-node -- src/bin/brain-gcd.js

publish:
	npm publish