module.exports = {
  plugins: ['plugins/markdown'],
  opts: {
    template: 'node_modules/docdash',
    recurse: true,
    verbose: true
  },
  templates: {
    cleverLinks: false,
    monospaceLinks: false,
    default: {
      outputSourceFiles: false,
      includeDate: false,
    }
  },
  docdash: {
    search: true,
    wrap: true,
    removeQuotes: 'all'
  }
};
