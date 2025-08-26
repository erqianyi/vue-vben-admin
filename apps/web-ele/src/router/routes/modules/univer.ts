import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: $t('univer.title'),
    },
    name: 'Univer',
    path: '/univer',
    children: [
      {
        meta: {
          title: $t('univer.docs'),
        },
        name: 'DocsDemo',
        path: '/univer/univer-docs',
        component: () => import('#/views/univer/docs/index.vue'),
      },
      {
        meta: {
          title: $t('univer.sheets'),
        },
        name: 'SheetsDemo',
        path: '/univer/univer-sheets',
        component: () => import('#/views/univer/sheets/index.vue'),
      },
    ],
  },
];

export default routes;
