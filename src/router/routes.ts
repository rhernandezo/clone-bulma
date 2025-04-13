const routes = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue'),
  },

  // Elements
  {
    path: '/elements',
    component: () => import('@/views/elements/ElementsView.vue'),
  },
  {
    path: '/elements/buttons',
    component: () => import('@/views/elements/ElementsButtons.vue'),
  },

  // Components
  {
    path: '/components',
    component: () => import('@/views/components/ComponentsView.vue'),
  },
  {
    path: '/components/card',
    component: () => import('@/views/components/ComponentsCardView.vue'),
  },
  {
    path: '/components/dropdown',
    component: () => import('@/views/components/ComponentsDropdownView.vue'),
  },
]

export default routes
