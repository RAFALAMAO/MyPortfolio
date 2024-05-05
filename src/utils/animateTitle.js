export function animateTitle(duration, inView, entry, delay = 0) {
  const show = {
    x: '0px',
    opacity: 1,
    transition: {
      delay: delay,
      duration: duration
    }
  };

  const hide = {
    x: '-100px',
    opacity: 0,
    transition: {
      delay: delay,
      duration: duration
    }
  };

  if (inView) {
    return show;
  } else if (entry) {
    return entry.boundingClientRect.top > 0 ? hide : show;
  }
}
