// prefer default export if available
const preferDefault = m => (m && m.default) || m;

exports.components = {
  'component---cache-dev-404-page-js': () =>
    import(
      'D:\\Rezaul\\RedQ projects\\docs\\packages\\rnb-doc\\.cache\\dev-404-page.js' /* webpackChunkName: "component---cache-dev-404-page-js" */
    ),
  'component---src-pages-install-mdx': () =>
    import(
      'D:\\Rezaul\\RedQ projects\\docs\\packages\\rnb-doc\\src\\pages\\install.mdx' /* webpackChunkName: "component---src-pages-install-mdx" */
    ),
  'component---src-pages-index-mdx': () =>
    import(
      'D:\\Rezaul\\RedQ projects\\docs\\packages\\rnb-doc\\src\\pages\\index.mdx' /* webpackChunkName: "component---src-pages-index-mdx" */
    ),
};
