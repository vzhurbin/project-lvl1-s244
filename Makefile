install: 
	npm install

lint:
	npm run eslint

start: 
	npm run babel-node -- src/bin/brain-balance.js

publish:
	npm publish