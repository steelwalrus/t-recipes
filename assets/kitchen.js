(() => {
  const isOn = (el) => el.getAttribute('aria-checked') === 'true';
  const read = (key) => JSON.parse(sessionStorage.getItem(key) || 'null');
  const write = (key, value) => sessionStorage.setItem(key, JSON.stringify(value));

  document.querySelectorAll('#ingredients + ul, #method + ol').forEach((list) => {
    list.setAttribute('role', 'group');
    list.setAttribute('aria-labelledby', list.previousElementSibling.id);
  });

  const items = [...document.querySelectorAll('#ingredients + ul > li, #method + ol > li')];
  const ticksKey = 'ticks:' + location.pathname;
  const saved = read(ticksKey) || [];
  const toggle = (li) => {
    li.setAttribute('aria-checked', !isOn(li));
    write(ticksKey, items.flatMap((el, i) => (isOn(el) ? [i] : [])));
  };
  items.forEach((li, i) => {
    li.setAttribute('role', 'checkbox');
    li.setAttribute('aria-checked', saved.includes(i));
    li.tabIndex = 0;
    li.addEventListener('click', () => toggle(li));
    li.addEventListener('keydown', (e) => {
      if (e.key !== ' ' && e.key !== 'Enter') return;
      e.preventDefault();
      toggle(li);
    });
  });

  const wake = document.querySelector('[data-wake]');
  if (!wake || !navigator.wakeLock) return;
  wake.hidden = false;
  const wakeKey = 'wake:' + location.pathname;
  let lock = null;
  const set = (on) => {
    wake.setAttribute('aria-checked', on);
    write(wakeKey, on);
  };
  const acquire = () => navigator.wakeLock.request('screen').then((l) => (lock = l), () => set(false));

  wake.addEventListener('click', () => {
    set(!isOn(wake));
    if (isOn(wake)) acquire();
    else lock?.release();
  });
  // Chrome drops the lock whenever the tab is hidden, so take it again on return.
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && isOn(wake)) acquire();
  });
  if (read(wakeKey)) {
    set(true);
    acquire();
  }
})();
