
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
    'productlist/index.html': {size: 11333, hash: '240038a2480fa8588a2f7c44c13bb6da0ad7dc47cd4f631b28c3a8b8b6682b02', text: () => import('./assets-chunks/productlist_index_html.mjs').then(m => m.default)},
    'index.html': {size: 56661, hash: 'd1514a8243f5a74fbb4948f66ae06bad8a47f4678ae108b27bfbab14ae5a0942', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-56A33T4J.css': {size: 199579, hash: 'S65wfUkwwEM', text: () => import('./assets-chunks/styles-56A33T4J_css.mjs').then(m => m.default)}
  },
};
