document.querySelectorAll('.nav-products').forEach((menu) => {
  let pointerInside = false;

  menu.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse') {
      pointerInside = true;
      menu.open = true;
    }
  });

  menu.addEventListener('pointerleave', (event) => {
    if (event.pointerType === 'mouse') {
      pointerInside = false;
      if (!menu.contains(document.activeElement)) menu.open = false;
    }
  });

  menu.addEventListener('focusout', (event) => {
    if (!menu.contains(event.relatedTarget) && !pointerInside) menu.open = false;
  });

  menu.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
});
