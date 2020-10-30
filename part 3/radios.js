function registerRadios(onChange) {
  const radios = document.querySelectorAll('input[type="radio"][name="filter"]');
  for (const radio of radios) {
    radio.addEventListener('change', ({ target: { value } }) => {
      onChange(value);
    });
  }
}
