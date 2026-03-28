import { route } from 'quasar/wrappers';
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import routes from './routes';

const CHUNK_LOAD_ERROR = /ChunkLoadError|Failed to fetch dynamically imported module/;

export default route(() => {
  const createHistory = process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory;

  const router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  router.onError((error, to) => {
    if (CHUNK_LOAD_ERROR.test(error.message)) {
      window.location.assign(to.fullPath);
    }
  });

  return router;
});
