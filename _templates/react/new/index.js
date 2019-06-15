/* eslint-disable @typescript-eslint/no-var-requires */
const inflection = require('inflection')

module.exports = {
  prompt: ({ prompter }) =>
    prompter
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: "What's the component's name?",
        },
        {
          type: 'select',
          name: 'folder',
          message: 'Select folder',
          choices: ['blocks', 'main'],
        },
        {
          type: 'confirm',
          name: 'graphql',
          message: 'Add graphql file?',
        },
      ])
      .then(({ name, ...rest }) => ({
        ...rest,
        camelizeName: inflection.camelize(name),
        camelizeLowerName: inflection.camelize(name, true),
      })),
}
