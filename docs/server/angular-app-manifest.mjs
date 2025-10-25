
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/productlist"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3324, hash: '6b0e8a5c792a2878e2b5e30d104dc913c33e889fec3642e915e6ccbd0e02912d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2685, hash: '88211eb6a0dd9a9d725d4726384cfa20fe48ce31a5749207826b3aacedc63827', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'productlist/index.html': {size: 11334, hash: 'a395a560d91070b289b04d85179887d862da744b051240b14ca669199e156ce7', text: () => import('./assets-chunks/productlist_index_html.mjs').then(m => m.default)},
    'index.html': {size: 56660, hash: 'a9f801d7fb9c3e2c8011a7358b0f1a618999cbd70b326260fccac0fc42b2c0c1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-56A33T4J.css': {size: 199579, hash: 'S65wfUkwwEM', text: () => import('./assets-chunks/styles-56A33T4J_css.mjs').then(m => m.default)}
  },
};
