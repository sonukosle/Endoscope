
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
    'index.csr.html': {size: 3388, hash: '4bc4995a72a496f2669943d2402de1ed370046b2c61e89b2325a44cba44133cc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2695, hash: '811e45139e33073131ca44797b169a1b94406f0515db5408be489e695cd1134a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'productlist/index.html': {size: 11399, hash: '7a9a3dca342c8c57c79ff6ff3f5ab1224037aced55d8d9bafefe0f1de87ab567', text: () => import('./assets-chunks/productlist_index_html.mjs').then(m => m.default)},
    'index.html': {size: 61817, hash: '0e1b88d60932243fd9eb19fcf3f0be317add9775dbbcb3dfb11e39fa46497ddd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FFMTQ6U2.css': {size: 203116, hash: '8z8pfOO90JE', text: () => import('./assets-chunks/styles-FFMTQ6U2_css.mjs').then(m => m.default)}
  },
};
