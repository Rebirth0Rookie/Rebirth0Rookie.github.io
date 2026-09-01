'use strict';

hexo.extend.filter.register('theme_inject', (injects) => {
  injects.bodyEnd.raw(
    'navigation-active-script',
    'script(src=url_for("/js/custom-navigation.js"))'
  );
});
