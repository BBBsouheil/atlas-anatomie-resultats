'use strict';
const views = {
  explorer: {src:'media/atlas-explorer.png', alt:'Exploration du corps et navigation par systèmes dans l’Atlas Studio V5.', caption:'Explorer — Atlas Studio V5 : navigation par systèmes et sélection 3D. Capture historique conservée.'},
  quiz: {src:'media/atlas-quiz.png', alt:'Quiz de l’Atlas Studio V5 : question de repérage avec cible 3D et fiche de la structure.', caption:'Réviser — Atlas Studio V5 : quiz de repérage, correction et fiche liée. Capture historique conservée.'},
  dissection: {src:'media/dissection-entry-c173.png', alt:'Vue d’ensemble du mode dissection C173 avant incision.', caption:'Disséquer — C173 : vue de la table avant incision. La vidéo de présentation est en reprise ; réalisme non validé.'}
};
const tabs = [...document.querySelectorAll('[role="tab"][data-view]')];
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
const scanViews = {
  overview: {title:'Les trois coupes et les surfaces',caption:'C183 · extrait de 9,4 secondes recadré sur le lecteur : rotation et visibilité des reins. Les menus périphériques sont retirés du cadrage, le contenu des coupes et des prédictions est inchangé.'},
  sagittal: {title:'Coupe sagittale agrandie',caption:'C183 · même extrait, cadrage sur la coupe sagittale. Vert et rose : prédictions du modèle. Le contenu de l’examen est inchangé.'},
  coronal: {title:'Coupe coronale agrandie',caption:'C183 · même extrait, cadrage sur la coupe coronale. Les cases de visibilité affichent ou masquent chaque prédiction ; ce ne sont pas des annotations de référence.'},
  axial: {title:'Coupe axiale agrandie',caption:'C183 · même extrait, cadrage sur la coupe axiale. Les prédictions colorées restent celles du résultat enregistré ; aucun nouveau calcul.'},
  surface: {title:'Les surfaces rénales agrandies',caption:'C183 · même extrait, cadrage sur toute la fenêtre 3D. La rotation et le masquage des côtés restent visibles, ainsi que les fragments de prédiction.'}
};
function selectScan(name, scroll=false) {
  const view=scanViews[name], video=document.querySelector('#scan-video');
  if (!view || !video) return;
  const oldTime=video.currentTime||0, playing=!video.paused;
  document.querySelector('#scan-source').src=`media/scanner-${name}-zoom.webm`;
  document.querySelector('#scan-stage').dataset.view=name;
  document.querySelector('#scan-title').textContent=view.title;
  document.querySelector('#scan-caption').textContent=view.caption;
  for(const button of document.querySelectorAll('[data-scan]'))button.setAttribute('aria-pressed',String(button.dataset.scan===name));
  video.addEventListener('loadedmetadata',()=>{video.currentTime=Math.min(oldTime,Math.max(0,video.duration-.1));if(playing)video.play().catch(()=>{});},{once:true});
  video.load();
  if(scroll)document.querySelector('.scan-workbench').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
}
for(const button of document.querySelectorAll('[data-scan]'))button.addEventListener('click',()=>selectScan(button.dataset.scan));
for(const button of document.querySelectorAll('[data-enlarge]'))button.addEventListener('click',()=>selectScan(button.dataset.enlarge,true));
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
