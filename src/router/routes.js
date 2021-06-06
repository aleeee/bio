
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/bio', component: () => import('components/Bio.vue') },
      { path: '/skills', component: () => import('components/Skills.vue') },
      { path: '/experience', component: () => import('components/Experience.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
