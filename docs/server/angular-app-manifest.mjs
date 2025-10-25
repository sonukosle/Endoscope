
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
    'index.csr.html': {size: 3334, hash: '816d2912ebf16ef8976874cc27f3f7435a406cb65521c404c4bbd2b52c3ca99e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2695, hash: '933cb57d9f2e083e53871571fc8d00d19d28d851960c1c27403c32d7cfd3c090', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'productlist/index.html': {size: 11345, hash: 'b5c566c0d16ad14af29a6438f3437effd38afc32e69d31b4c000e5d622c7fbd5', text: () => import('./assets-chunks/productlist_index_html.mjs').then(m => m.default)},
    'index.html': {size: 56670, hash: 'd916795d23c589e3240672f6fb87abfc69e0947943ff37fe066a82913a7914b5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-56A33T4J.css': {size: 199579, hash: 'S65wfUkwwEM', text: () => import('./assets-chunks/styles-56A33T4J_css.mjs').then(m => m.default)}
  },
};
