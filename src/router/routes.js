const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      },
      {
        name: 'Materia',
        path: 'materia/:id',
        component: () => import('pages/MateriaCompleta.vue')
      }, {
        name: 'Fluxo',
        path: 'fluxo',
        component: () => import('pages/FluxoMermaid.vue')
      }, {
        name: 'Periodos',
        path: 'periodos',
        component: () => import('components/Periodos')
      }, {
        name: 'Mermaid',
        path: 'mermaid',
        component: () => import('components/TesteVueMermais')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
