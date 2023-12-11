// esbuild.config.js
const path = require('path');

module.exports = {
  entryPoints: [path.resolve(__dirname, 'app/javascript/packs/application.js')],
  bundle: true,
  outfile: path.resolve(__dirname, 'public/packs/application.js'),
  loader: {
    '.js': 'jsx',
  },
  jsxFactory: 'React.createElement',
};
