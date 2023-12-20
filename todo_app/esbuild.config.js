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
  external: [
    'react',
    'react-dom',
    '@rails/ujs',
    'turbolinks',
    '@rails/activestorage',
    'channels',
    '../javascript/packs/index.jsx',
    'react-router-dom',
    'styled-components',
    'axios',
    'react-toastify',
    'react-icons/im',
    'react-icons/ai',
    'react-icons/fi',
  ]
};
