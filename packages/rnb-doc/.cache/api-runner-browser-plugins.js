module.exports = [
  {
    plugin: require('D:/Rezaul/RedQ projects/docs/node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
    options: {
      plugins: [],
      extensions: ['.md', '.mdx'],
      remarkPlugins: [[null, { type: 'yaml', marker: '-' }], null],
      rehypePlugins: [null, null],
      defaultLayouts: {
        default:
          'D:\\Rezaul\\RedQ projects\\docs\\node_modules\\gatsby-theme-docz\\src\\base\\Layout.js',
      },
    },
  },
  {
    plugin: require('D:/Rezaul/RedQ projects/docs/node_modules/gatsby-theme-docz/gatsby-browser.js'),
    options: { plugins: [] },
  },
];
