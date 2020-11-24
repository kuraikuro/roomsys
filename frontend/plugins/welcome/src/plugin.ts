import { createPlugin } from '@backstage/core';

import Room from './components/Room';
import Create from './components/Create';

export const plugin = createPlugin({
  id: 'welcome',
  register({ router }) {
    router.registerRoute('/', Room);
    router.registerRoute('/Room', Room);
    router.registerRoute('/Save', Create);
  },
});
