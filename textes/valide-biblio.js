#!/usr/bin/env node
// Valide un fichier de bibliothèque : node valide-biblio.js fichier.json [minQ] [maxQ]
const fs = require('fs');
const path = process.argv[2];
if (!path) { console.error('usage: node valide-biblio.js <fichier.json>'); process.exit(2); }
const MINQ = +(process.argv[3] || 15), MAXQ = +(process.argv[4] || 27);
const THEMES = ['sciences','nature','histoire','géographie','arts','technologie','société','santé','sport','cuisine','espace','animaux','architecture','économie'];
// fourchettes de longueur par niveau : plus de matière par texte, le niveau 5 va jusqu'au texte long
const WORDS = { 1:[180,320], 2:[260,420], 3:[350,550], 4:[450,750], 5:[600,1500] };
// un texte long a besoin de plus de questions : au moins une par 70 mots, plancher 15
const minQuestions = (w, niveau) => Math.max(MINQ, Math.min(28, Math.ceil(w / 70)));

let raw;
try {
  const txt = fs.readFileSync(path, 'utf8');
  // accepte aussi textes.js (window.BIBLIO = [...];)
  const js = txt.match(/window\.BIBLIO\s*=\s*([\s\S]*?);?\s*$/);
  raw = JSON.parse(js && /\.js$/.test(path) ? js[1].replace(/;\s*$/, '') : txt);
}
catch (e) { console.error('JSON invalide :', e.message); process.exit(1); }
if (!Array.isArray(raw)) { console.error('Le fichier doit contenir un tableau de textes'); process.exit(1); }

const errs = [], seenId = new Set(), seenTitle = new Set();
const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
const stats = {};

raw.forEach((t, i) => {
  const where = `[${i}] ${t && t.id ? t.id : 'sans id'}`;
  const need = (cond, msg) => { if (!cond) errs.push(where + ' : ' + msg); };
  if (!t || typeof t !== 'object') { errs.push(where + ' : entrée invalide'); return; }
  need(typeof t.id === 'string' && /^[a-z0-9]{2,12}$/.test(t.id), 'id court alphanumérique attendu');
  if (typeof t.id === 'string') { if (seenId.has(t.id)) errs.push(where + ' : id en double'); seenId.add(t.id); }
  need(typeof t.theme === 'string' && THEMES.includes(t.theme), 'thème hors liste : ' + t.theme);
  need(Number.isInteger(t.niveau) && t.niveau >= 1 && t.niveau <= 5, 'niveau 1..5 attendu');
  need(typeof t.titre === 'string' && t.titre.length >= 4 && t.titre.length <= 90, 'titre 4..90 caractères');
  if (typeof t.titre === 'string') { const nt = norm(t.titre); if (seenTitle.has(nt)) errs.push(where + ' : titre en double'); seenTitle.add(nt); }
  need(typeof t.corps === 'string', 'corps manquant');
  if (typeof t.corps === 'string') {
    need(!/<\/?[a-z][^>]*>/i.test(t.corps), 'pas de HTML dans le corps');
    need(!/[*_#`]/.test(t.corps), 'pas de markdown dans le corps');
    const w = t.corps.split(/\s+/).filter(Boolean).length;
    const rng = WORDS[t.niveau] || [80, 500];
    need(w >= rng[0] && w <= rng[1], `longueur ${w} mots hors fourchette niveau ${t.niveau} (${rng[0]}..${rng[1]})`);
    stats[t.niveau] = stats[t.niveau] || { n: 0, mots: 0, q: 0 };
    stats[t.niveau].n++; stats[t.niveau].mots += w;
  }
  need(Array.isArray(t.q), 'q doit être un tableau');
  if (Array.isArray(t.q)) {
    const wq = typeof t.corps === 'string' ? t.corps.split(/\s+/).filter(Boolean).length : 0;
    const qMin = minQuestions(wq, t.niveau);
    need(t.q.length >= qMin && t.q.length <= MAXQ, `${t.q.length} questions (attendu ${qMin}..${MAXQ} pour ${wq} mots)`);
    if (stats[t.niveau]) stats[t.niveau].q += t.q.length;
    const seenQ = new Set();
    t.q.forEach((q, k) => {
      const w2 = `${where}.q[${k}]`;
      need(q && typeof q.q === 'string' && q.q.length >= 6 && q.q.length <= 240, w2 + ' : énoncé 6..240 caractères');
      need(Array.isArray(q.o) && q.o.length === 3, w2 + ' : exactement 3 options');
      if (Array.isArray(q.o)) {
        need(q.o.every(o => typeof o === 'string' && o.trim().length >= 1 && o.length <= 120), w2 + ' : options courtes non vides');
        need(new Set(q.o.map(norm)).size === 3, w2 + ' : options identiques entre elles');
        need(!q.o.some(o => /^(toutes? (ces )?r[ée]ponses|aucune (de ces )?r[ée]ponse)/i.test(o)), w2 + ' : pas d\'option « toutes/aucune »');
      }
      need(Number.isInteger(q.r) && q.r >= 0 && q.r <= 2, w2 + ' : r doit valoir 0, 1 ou 2');
      need(typeof q.e === 'string' && q.e.length >= 10 && q.e.length <= 240, w2 + ' : explication 10..240 caractères');
      if (typeof q.q === 'string') { const nq = norm(q.q); if (seenQ.has(nq)) errs.push(w2 + ' : question en double dans ce texte'); seenQ.add(nq); }
    });
  }
});

console.log(`textes: ${raw.length}`);
Object.keys(stats).sort().forEach(k => {
  const s = stats[k];
  console.log(`  niveau ${k}: ${s.n} textes, ${Math.round(s.mots / s.n)} mots en moyenne, ${(s.q / s.n).toFixed(1)} questions`);
});
const th = {};
raw.forEach(t => { if (t && t.theme) th[t.theme] = (th[t.theme] || 0) + 1; });
console.log('thèmes:', JSON.stringify(th));
if (errs.length) { console.error(`\n${errs.length} erreur(s) :`); errs.slice(0, 60).forEach(e => console.error(' - ' + e)); process.exit(1); }
console.log('OK — aucune erreur');
