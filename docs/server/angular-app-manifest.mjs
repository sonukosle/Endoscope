
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Endoscope/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Endoscope"
  },
  {
    "renderMode": 2,
    "route": "/Endoscope/productlist"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3388, hash: '790bbcd6604aa8b9c2e23d34993278f1e9490f0d2ff15219d92214f0496f3bbf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2695, hash: '86cf76578da768789c4f36246cf4ca397bfbca55789ee2c08455a00866592134', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'productlist/index.html': {size: 11398, hash: '360c9aa8769c295bb22b0fc54b640961537bfff8c61e0e1b09f41a634877ac1b', text: () => import('./assets-chunks/productlist_index_html.mjs').then(m => m.default)},
    'index.html': {size: 55424, hash: '219ec448e6aea5a3741307f092e249ad284d0c81865e25822450965dc9f13317', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FFMTQ6U2.css': {size: 203116, hash: '8z8pfOO90JE', text: () => import('./assets-chunks/styles-FFMTQ6U2_css.mjs').then(m => m.default)}
  },
};
