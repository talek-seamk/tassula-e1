'use strict';
(() => {
  const available = window.tassulaAnimals.filter(animal => animal.status === 'available');
  const make = (tag, text, className) => {
    const element = document.createElement(tag);
    if (text) element.textContent = text;
    if (className) element.className = className;
    return element;
  };
  function renderAnimals(target, animals, heading) {
    target.replaceChildren();
    for (const animal of animals) {
      const card = make('article', '', 'animal-card');
      const img = make('img');
      img.src = animal.image; img.alt = animal.alt; img.width = 600; img.height = 600; img.loading = 'lazy';
      const body = make('div', '', 'card-body');
      const link = make('a', `Kysy eläimestä: ${animal.name} →`, 'text-link');
      link.href = `contact.html?animal=${encodeURIComponent(animal.id)}`;
      body.append(make('p', `${animal.label} · esimerkkieläin`, 'species'), make(heading, animal.name), make('p', animal.story, 'story'), link);
      card.append(img, body); target.append(card);
    }
  }
  const preview = document.querySelector('#animal-preview');
  if (preview) renderAnimals(preview, available.slice(0, 3), 'h3');
  const list = document.querySelector('#animal-list');
  if (list) {
    document.querySelector('#filters').hidden = false;
    const update = () => {
      const value = document.querySelector('input[name="species"]:checked').value;
      const animals = available.filter(a => value === 'all' || a.species === value);
      renderAnimals(list, animals, 'h2');
      document.querySelector('#result-count').textContent = `${animals.length} kotia odottavaa esimerkkieläintä`;
      document.querySelector('#empty-state').hidden = animals.length > 0;
    };
    document.querySelector('#filters').addEventListener('change', update);
    update();
  }
  const form = document.querySelector('#adoption-form');
  if (!form) return;
  const select = document.querySelector('#animal');
  for (const animal of available) {
    const option = make('option', `${animal.name} (${animal.label.toLowerCase()}, esimerkki)`);
    option.value = animal.id; select.append(option);
  }
  const requested = new URLSearchParams(location.search).get('animal');
  if (available.some(a => a.id === requested)) select.value = requested;
  document.querySelector('#form-fields').disabled = false;
  const fields = ['name', 'email', 'animal', 'message'].map(id => document.getElementById(id));
  const errorBox = document.querySelector('#error-summary');
  const success = document.querySelector('#success');
  function errorFor(field) {
    const value = field.value.trim();
    if (!value) return {name:'Kirjoita nimesi.',email:'Kirjoita sähköpostiosoitteesi.',animal:'Valitse eläin tai yleinen adoptiokysely.',message:'Kerro kodistasi ja arjestasi vähintään 20 merkillä.'}[field.id];
    if (field.id === 'email' && field.validity.typeMismatch) return 'Tarkista sähköpostiosoite, esimerkiksi nimi@esimerkki.fi.';
    if (field.id === 'message' && value.length < 20) return 'Kirjoita vähintään 20 merkkiä kodistasi ja arjestasi.';
    if (field.maxLength > 0 && value.length > field.maxLength) return `Lyhennä vastaus enintään ${field.maxLength} merkkiin.`;
    if (field.id === 'animal' && value !== 'general' && !available.some(a => a.id === value)) return 'Valitse listalta kotia odottava eläin tai yleinen kysely.';
    return '';
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    const errors = [];
    const summary = errorBox.querySelector('ul'); summary.replaceChildren();
    for (const field of fields) {
      field.value = field.value.trim();
      const error = errorFor(field);
      const hint = document.getElementById(`${field.id}-error`);
      hint.textContent = error; hint.hidden = !error;
      if (error) {
        field.setAttribute('aria-invalid', 'true'); errors.push(field);
        const item = make('li'); const link = make('a', error); link.href = `#${field.id}`;
        link.addEventListener('click', e => { e.preventDefault(); field.focus(); });
        item.append(link); summary.append(item);
      } else field.removeAttribute('aria-invalid');
    }
    errorBox.hidden = errors.length === 0;
    if (errors.length) { errorBox.focus(); return; }
    const result = document.querySelector('#summary-data'); result.replaceChildren();
    const labels = ['Nimi', 'Sähköposti', 'Kiinnostava eläin', 'Koti ja arki'];
    fields.forEach((field, i) => {
      const value = field === select ? select.options[select.selectedIndex].text : field.value;
      result.append(make('dt', labels[i]), make('dd', value));
    });
    form.hidden = true; success.hidden = false; success.focus();
  });
  document.querySelector('#edit-query').addEventListener('click', () => {
    success.hidden = true; form.hidden = false; fields[0].focus();
  });
})();
