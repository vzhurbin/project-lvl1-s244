install: 
	npm install

lint:
	npm run eslint

start: 
	npm run babel-node -- src/bin/brain-progression.js

publish:
	npm publish