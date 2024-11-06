// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './src/components/HelloWorld.vue';
import Menu from './src/components/Menu.vue';
import KnowCollage from './src/components/KnowCollage.vue';
import ActiveCollage from './src/components/ActiveCollage.vue';
import SocityCollage from './src/components/SocityCollage.vue';
import LibraryCollage from './src/components/LibraryCollage.vue';
import OutsideCollage from './src/components/OutsideCollage.vue';
import Game from './src/components/Game.vue';
import Hamburger from './src/components/Hamburger.vue';

const routes = [
  { path: '/', component: HelloWorld }, // Home route
  { path: '/menu', component: Menu },
  { path: '/know-collage', component: KnowCollage },
  { path: '/active-collage', component: ActiveCollage },
  { path: '/socity-collage', component: SocityCollage },
  { path: '/library-collage', component: LibraryCollage },
  { path: '/outside-collage', component: OutsideCollage },
  { path: '/game', component: Game },
  { path: '/hamburger', component: Hamburger },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
