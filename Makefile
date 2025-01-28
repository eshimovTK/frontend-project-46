lint:
	npx lint .
test:
	npm test
install:
	npm ci
publish:
	npm publish --dry-run
link:
	sudo npm link