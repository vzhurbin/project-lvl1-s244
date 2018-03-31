install: 
	npm install

lint:
	npm run eslint

start: 
	npm run babel-node -- src/bin/brain-prime.js

publish:
	npm publish