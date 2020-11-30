# DossierData Component Library
A library of Vue components used across Homeday projects - [here](https://blocks.homeday.dev)

## Local setup

Fork the main repository, clone it to your local machine and add main repo as upstream.

```
$ git clone git@github.com:YOUR_USERNAME/component.library.git
$ cd homeday-blocks
$ git remote add upstream git@github.com:dossierdata/component.library.git
```

## Prerequisites

DossierData Component Library requires [Node.js](https://nodejs.org/) version 10.22.0 (.nvmrc). It's recommended to manage multiple versions of Node on the same machine with [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows).

Don't forget to setup the [deeper shell integration](https://github.com/nvm-sh/nvm#deeper-shell-integration) in your console to take full advantage of `nvm`. You can achieve this by adding the following alias into your `~/.bashrc`, or `~/.zshrc` file:

```bash
alias cd="cdnvm(){ cd $1; if [[ -f .nvmrc && -s .nvmrc && -r .nvmrc ]]; then <.nvmrc nvm install; elif [[ $(nvm current) != $(nvm version default) ]]; then nvm use default; fi; };cdnvm"
```

## Project setup

### Download and install dependencies

For a brief explanation of what is being installed, please read our [setup documentation file](/docs/SETUP.md).

#### OSX

To install all our dependencies on OSX, run `scripts/setup.osx.sh`.

#### Ubuntu

To install all our dependencies on Ubuntu, run `scripts/setup.ubuntu.sh`.

It is recommended to run the setup script everytime you pull from the `develop` branch. This way you can always be sure to have all the project dependencies up to date.

### Lints and fixes files
```
npm run lint
```

### Storybook
#### Development
```
npm run serve:storybook
```
#### Build
```
npm run build:storybook
```
### Build as a library
```
npm run build:lib
```

## Testing

To just run all unit tests:
```bash
npm run test:unit
```

To watch for changes while writing tests:
```bash
npm run test:unit:watch
```

To watch for changes while writing tests for a single component:
```bash
npm run test:unit:watch ComponentName
```

### Screenshot tests on Percy

Make sure you've `PERCY_TOKEN` exported first and the [project is built](#build).

*The token can be obtained from Percy dashboard if you've access to it.*

```bash
npm run test:percy
```

You can also follow build statuses in https://percy.io/Homeday/homeday-blocks

#### Gotchas
- `tests/` is an alias for `<rootDir>/tests/`

## Generators

We use [Hygen](https://www.hygen.io/) as a code generator tool to save time when we need to scaffold some structure.

Just run:

```
npm run new component
npm run new service
```

And follow the wizzard in order to generate a base component structure or a service.

## Contribution guide

This project follows [forking workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow). See [project setup](#project-setup) to get started locally. That means that all code changes enter the project by PR to `develop` branch. Once you open the PR with suggested changes, the checks for `build` and `coverage` will run. If those fail, your PR needs some more work. :) 

Each PR should be reviewed by at least two team members. Once reviewed and approved, it can be merged. Please follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) specification when writing commit messages. 

If this is not followed semantic release won't be able to determine a new version automatically and tests will fail.

## Consuming in other projects

```js
import { DDButton } from 'dossierdata-component-library';
```

## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Services
Together with the components, DossierData Component Library also provides useful services that can be reused across projects. You can read more about them in the services [documentation](https://github.com/homeday-de/homeday-blocks/tree/develop/src/services).
