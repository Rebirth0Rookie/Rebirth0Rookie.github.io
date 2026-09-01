(() => {
  const updateNavigationActiveState = () => {
    const currentPath = window.location.pathname.replace(/index\.html$/, '');
    const isHome = currentPath === '/';
    const isPost = /^\/\d{4}\/\d{2}\/\d{2}\/.+/.test(currentPath);

    document.querySelectorAll('.menu').forEach((menu) => {
      const homeItem = menu.querySelector('.i-home')?.closest('.item');
      const postsItem = menu.querySelector('.i-feather')?.closest('.item');

      homeItem?.classList.toggle('active', isHome);
      postsItem?.classList.toggle('active', isPost);
    });
  };

  if (document.readyState === 'complete') {
    updateNavigationActiveState();
  } else {
    window.addEventListener('load', () => {
      updateNavigationActiveState();
      window.setTimeout(updateNavigationActiveState, 1000);
    }, { once: true });
  }
})();
