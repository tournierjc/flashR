#!/usr/bin/env node
// Fusionne les parts JSON de la bibliothèque en textes.js (window.BIBLIO).
// usage: node fusionne.js
const fs = require('fs');
const path = require('path');
const dir = __dirname;
const parts = ['partA.json','partB.json','partC.json','partD.json'].filter(f => fs.existsSync(path.join(dir,f)));
if (!parts.length) { console.error('aucune part trouvée'); process.exit(1); }

let all = [];
for (const f of parts) {
  const arr = JSON.parse(fs.readFileSync(path.join(dir,f),'utf8'));
  if (!Array.isArray(arr)) { console.error(f + ' n\'est pas un tableau'); process.exit(1); }
  all = all.concat(arr.map(t => Object.assign({}, t, { part: f })));
}
// dédoublonnage : id et titre
const byId = new Map(), byTitle = new Map(), keep = [], dupes = [];
for (const t of all) {
  const nt = (t.titre||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
  if (byId.has(t.id)) { dupes.push('id ' + t.id + ' (' + t.part + ')'); continue; }
  if (byTitle.has(nt)) { dupes.push('titre « ' + t.titre + ' » (' + t.part + ')'); continue; }
  byId.set(t.id, 1); byTitle.set(nt, 1);
  delete t.part;
  keep.push(t);
}
keep.sort((a,b) => (a.niveau - b.niveau) || a.theme.localeCompare(b.theme) || a.id.localeCompare(b.id));

const json = JSON.stringify(keep, null, 1);
const out = `/* Bibliothèque de textes — Lecture éclair
 * ${keep.length} textes, ${keep.reduce((n,t)=>n+t.q.length,0)} questions.
 * Pour l'étendre : ajoute un objet dans le tableau (même schéma), puis
 * node textes/valide-biblio.js textes.js && node --check → recharger l'app.
 * Schéma : voir textes/SPEC.md. Aucune dépendance, aucun réseau.
 */
window.BIBLIO = ${json};
`;
fs.writeFileSync(path.join(dir,'..','textes.js'), out, 'utf8');
console.log(`${parts.length} parts → ${keep.length} textes, ${keep.reduce((n,t)=>n+t.q.length,0)} questions`);
if (dupes.length) console.log('doublons écartés :\n - ' + dupes.join('\n - '));
const byN = {};
keep.forEach(t => { byN[t.niveau] = byN[t.niveau] || {n:0,mots:0,q:0}; byN[t.niveau].n++; byN[t.niveau].mots += t.corps.split(/\s+/).filter(Boolean).length; byN[t.niveau].q += t.q.length; });
Object.keys(byN).sort().forEach(k => console.log(`  niveau ${k}: ${byN[k].n} textes · ${Math.round(byN[k].mots/byN[k].n)} mots · ${(byN[k].q/byN[k].n).toFixed(1)} questions`));
