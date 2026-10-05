'use strict';
const views = {
  explorer: {src:'media/atlas-explorer.png', alt:'Exploration du corps et navigation par systèmes dans l’Atlas Studio V5.', caption:'Explorer — Atlas Studio V5 : navigation par systèmes et sélection 3D. Capture historique conservée.'},
  quiz: {src:'media/atlas-quiz.png', alt:'Quiz de l’Atlas Studio V5 : question de repérage avec cible 3D et fiche de la structure.', caption:'Réviser — Atlas Studio V5 : quiz de repérage, correction et fiche liée. Capture historique conservée.'},
  dissection: {src:'media/dissection-c173.png', alt:'Prototype C173 : couches du bras écartées, biceps exposé et outil de dissection.', caption:'Disséquer — C173 : biceps gauche exposé pendant le parcours conservé. Fonctionnement local démontré ; réalisme non validé.'}
};
const tabs = [...document.querySelectorAll('[data-view]')];
function activate(tab, focus = false) {
  const view = views[tab.dataset.view];
  if (!view) return;
  for (const button of tabs) {
    const selected = button === tab;
    button.setAttribute('aria-selected', String(selected));
    button.tabIndex = selected ? 0 : -1;
  }
  document.querySelector('#capture-image').src = view.src;
  document.querySelector('#capture-image').alt = view.alt;
  document.querySelector('#capture-link').href = view.src;
  document.querySelector('#capture-caption').textContent = view.caption;
  document.querySelector('#capture-panel').setAttribute('aria-labelledby', tab.id);
  if (focus) tab.focus();
}
for (const [index, tab] of tabs.entries()) {
  tab.addEventListener('click', () => activate(tab));
  tab.addEventListener('keydown', event => {
    const offsets = {ArrowRight:1, ArrowLeft:-1};
    let next;
    if (event.key in offsets) next = (index + offsets[event.key] + tabs.length) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else return;
    event.preventDefault();
    activate(tabs[next], true);
  });
}
