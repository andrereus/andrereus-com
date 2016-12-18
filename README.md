# Andre Reus COM Website V2

## Dependencies

Install Node.js (stable version): https://nodejs.org/

Alternatively you can use Node Version Manager (NVM): https://github.com/creationix/nvm

NPM is also necessary and already comes bundled with Node.js / NVM: https://www.npmjs.com/

Install global dependencies:

```
npm install -g gulp-cli
```

For reference, versions that work are:

- Node.js 4.5.0
- NPM 3.10.6
- gulp-cli 1.2.0

You can check your versions with:

```
node -v
npm ls -g --depth=0
```

## Setup

To install node_modules, go to project folder and type:

```
npm install
```

To use same coding style, set up EditorConfig in your editor: http://editorconfig.org/

## Usage

To use Gulp.js task runner, type one of the following commands:

```
gulp
gulp serve
gulp build
gulp reload:css
gulp serve:build
gulp build:css
gulp clean:build
```

**gulp:** Lists all possible commands

**gulp serve:** Compiles CSS and uses Browsersync to preview app

**gulp build:** Cleans docs, compiles CSS and saves files from app to docs

**gulp reload:css:** Compiles CSS and reloads Browsersync

**gulp serve:build:** Uses Browsersync to preview docs

**gulp build:css:** Compiles CSS

**gulp clean:build:** Deletes files in docs

## FAQ

I can't delete or move the project folder / node_modules folder. Why?

NPM version < 3.0.0 installs dependecies in a nested way. Try the following commands (carefully!):

```
rm -rf node_modules
npm install npm@latest -g
```
