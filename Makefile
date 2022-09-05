install: install-deps

start:
	npm start

install-deps:
	npm ci

build:
	npm run build

test:
	npm test -s

test-coverage:
	npm test -- --coverage

lint:
	npx eslint . --ext js,jsx

publish:
	npm publish

deploy:
	git push heroku

github-deploy:
	npm run deploy

.PHONY: build test
