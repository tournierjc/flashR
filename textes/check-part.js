#!/usr/bin/env node
// Contrôle renforcé pour la partie C : node check-part.js <fichier.json>
// Vérifie schéma + longueurs + nb de questions + thème/niveau imposés par id.
const fs = require('fs');
const p = process.argv[2];
if (!p) { console.error('usage: node check-part.js <fichier.json>'); process.exit(2); }
const raw = JSON.parse(fs.readFileSync(p, 'utf8'));
if (!Array.isArray(raw)) { console.error('tableau attendu'); process.exit(1); }

const THEME = {
  c1: 'sciences', c2: 'espace', c3: 'histoire', c4: 'santé', c5: 'société',
  c6: 'sciences', c7: 'espace', c8: 'histoire', c9: 'santé', c10: 'société',
  c11: 'sciences', c12: 'espace', c13: 'histoire', c14: 'santé', c15: 'société',
  c16: 'sciences', c17: 'espace', c18: 'histoire', c19: 'santé', c20: 'société',
  c21: 'sciences', c22: 'espace', c23: 'histoire', c24: 'santé', c25: 'société'
};
const LEVEL = id => (+id.slice(1) <= 10 ? 3 : 4);
const WORDS = { 3: [350, 550], 4: [450, 750] };
const QS = { 3: [17, 19], 4: [18, 21] };
const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
const errs = [], warns = [];

raw.forEach(t => {
  const w = `[${t.id}]`;
  const E = m => errs.push(w + ' ' + m), W = m => warns.push(w + ' ' + m);
  if (!THEME[t.id]) { E('id inconnu (attendu c1..c25)'); return; }
  if (t.theme !== THEME[t.id]) E(`thème ${t.theme} au lieu de ${THEME[t.id]}`);
  if (t.niveau !== LEVEL(t.id)) E(`niveau ${t.niveau} au lieu de ${LEVEL(t.id)}`);
  if (Object.keys(t).sort().join(',') !== 'corps,id,niveau,q,theme,titre') E('champs: ' + Object.keys(t).join(','));
  if (typeof t.titre !== 'string' || t.titre.length < 6 || t.titre.length > 90) E('titre 6..90');
  if (typeof t.corps !== 'string') { E('corps manquant'); return; }
  const b = t.corps;
  if (/<\/?[a-z][^>]*>/i.test(b)) E('HTML dans le corps');
  if (/[*_#`|]/.test(b)) E('markdown dans le corps: ' + (b.match(/[*_#`|]/) || [''])[0]);
  const words = b.split(/\s+/).filter(Boolean).length;
  const [lo, hi] = WORDS[t.niveau];
  if (words < lo || words > hi) E(`corps ${words} mots (attendu ${lo}..${hi})`);
  const paras = b.split(/\n\n/).filter(x => x.trim());
  if (paras.length < 3) E(`${paras.length} paragraphe(s), 3 minimum`);
  if (/\n(?!\n)/.test(b.replace(/\n\n/g, ''))) E('saut de ligne simple dans le corps (utiliser \\n\\n)');
  if (paras[0] && norm(paras[0]).startsWith(norm(t.titre).slice(0, 25))) E('le corps commence par le titre');
  const maxSent = Math.max(...b.split(/[.!?]+/).map(s => s.split(/\s+/).filter(Boolean).length));
  if (maxSent > 48) W(`phrase de ${maxSent} mots`);
  if (!Array.isArray(t.q)) { E('q non tableau'); return; }
  const [qlo, qhi] = QS[t.niveau];
  if (t.q.length < qlo || t.q.length > qhi) E(`${t.q.length} questions (attendu ${qlo}..${qhi})`);
  const seen = new Set();
  t.q.forEach((q, k) => {
    const E2 = m => E(`q[${k}] ${m}`);
    if (!q.q || q.q.length < 8 || q.q.length > 200) E2('énoncé 8..200');
    if (!/\?$/.test(q.q || '')) E2('énoncé sans point d\'interrogation');
    if (seen.has(norm(q.q))) E2('énoncé en double');
    seen.add(norm(q.q));
    if (!Array.isArray(q.o) || q.o.length !== 3) { E2('3 options'); return; }
    if (!q.o.every(o => typeof o === 'string' && o.length >= 3 && o.length <= 100)) E2('options 3..100 caractères');
    if (new Set(q.o.map(norm)).size !== 3) E2('options identiques');
    const L = q.o.map(o => o.length), mn = Math.min(...L), mx = Math.max(...L);
    if (mx > 3 * mn) W(`q[${k}] options de longueurs très inégales (${L.join('/')})`);
    if (!Number.isInteger(q.r) || q.r < 0 || q.r > 2) E2('r invalide');
    if (typeof q.e !== 'string' || q.e.length < 20 || q.e.length > 200) E2('explication 20..200');
    if (/^(la bonne|réponse)/i.test(q.e || '')) W(`q[${k}] explication mal amorcée`);
    if (/\b(toutes? (ces )?r[ée]ponses|aucune (de ces )?r[ée]ponse)/i.test(q.o.join(' '))) E2('option toutes/aucune');
  });
  console.log(`${t.id} ${t.theme.padEnd(9)} niv${t.niveau} ${words} mots, ${t.q.length} q`);
});

if (warns.length) { console.log('\nAvertissements :'); warns.slice(0, 40).forEach(x => console.log(' ! ' + x)); }
if (errs.length) { console.error(`\n${errs.length} erreur(s) :`); errs.slice(0, 80).forEach(e => console.error(' - ' + e)); process.exit(1); }
console.log('OK — aucune erreur');
