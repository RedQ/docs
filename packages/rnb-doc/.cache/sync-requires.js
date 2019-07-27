const { hot } = require('react-hot-loader/root');

// prefer default export if available
const preferDefault = m => (m && m.default) || m;

exports.components = {
  'component---cache-dev-404-page-js': hot(
    preferDefault(
      require('D:\\Rezaul\\RedQ projects\\docs\\packages\\rnb-doc\\.cache\\dev-404-page.js')
    )
  ),
  'component---src-pages-install-mdx': hot(
    preferDefault(
      require('D:\\Rezaul\\RedQ projects\\docs\\packages\\rnb-doc\\src\\pages\\install.mdx')
    )
  ),
  'component---src-pages-index-mdx': hot(
    preferDefault(
      require('D:\\Rezaul\\RedQ projects\\docs\\packages\\rnb-doc\\src\\pages\\index.mdx')
    )
  ),
};
