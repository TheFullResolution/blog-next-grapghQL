module.exports = {
  prompt: ({ prompter, args }) =>
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
      .then(({ name, ...rest }) => ({ ...rest, name: name.toLowerCase() })),
}
