(function registerRadios() {
  const radios = document.querySelectorAll('input[type="radio"][name="filter"]');
  for (const radio of radios) {
    radio.addEventListener('change', ({ target: { checked, value } }) => {
      state.filter = value;
    });
  }
})();

