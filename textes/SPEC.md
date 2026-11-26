# Spécification du contenu — bibliothèque de textes

Fichier produit : **un tableau JSON** de textes, encodé UTF-8, écrit en une fois avec `write_file`.
Validateur obligatoire : `node /opt/data/flashR/textes/valide-biblio.js <fichier>` — il doit afficher **« OK — aucune erreur »**.
Si des erreurs sortent : corrige le fichier et relance. Ne rends jamais la main avec des erreurs.

## Schéma d'un texte

```json
{
  "id": "a1",
  "theme": "nature",
  "niveau": 1,
  "titre": "Pourquoi les feuilles changent de couleur",
  "corps": "Premier paragraphe…\n\nSecond paragraphe…",
  "q": [
    {
      "q": "Que se passe-t-il dans les feuilles à l'automne ?",
      "o": ["Elles cessent de produire de la chlorophylle", "Elles gèlent de l'intérieur", "Elles doublent leur production de sucre"],
      "r": 0,
      "e": "La chlorophylle se dégrade et laisse apparaître les pigments jaunes et rouges déjà présents."
    }
  ]
}
```

Champs exacts, aucun autre. `r` = index de la bonne réponse (0, 1 ou 2). `e` = explication en une phrase, 10 à 240 caractères.

## Longueur selon le niveau (comptée en mots, validée automatiquement)

| niveau | mots | questions |
|---|---|---|
| 1 | 180–320 | 15–17 |
| 2 | 260–420 | 16–18 |
| 3 | 350–550 | 17–19 |
| 4 | 450–750 | 18–21 |
| 5 | 600–1500 | 20–27 |

Un texte de 150 mots se lit en 30 secondes à 300 mots/min : trop court pour mesurer quoi que ce soit, et trop pauvre pour porter dix questions honnêtes. D'où ces planchers. Le **texte long** (niveau 5, 900 à 1500 mots) est un format à part : il sert au test de compréhension complet, pas aux lectures chronométrées. Pour lui, le validateur exige **au moins une question par 70 mots** (plafond 27).

Un texte de niveau 1 est fait de phrases courtes, de vocabulaire courant, sans subordonnées imbriquées. Un texte de niveau 5 est dense (subordonnées, chiffres, enchaînement d'idées) mais reste factuel et lisible ; au-delà de 700 mots, il tient par une progression (chronologie, enquête, explication par étapes) plutôt que par une accumulation de faits.

## Thèmes autorisés (exactement ces chaînes)

`sciences`, `nature`, `histoire`, `géographie`, `arts`, `technologie`, `société`, `santé`, `sport`, `cuisine`, `espace`, `animaux`, `architecture`, `économie`

## Les questions

15 à 20 questions par texte, dans cet ordre de priorité :
- **10 au moins factuelles** — une information explicite du texte (chiffre, nom, lieu, cause, conséquence) ;
- **3 au moins d'inférence** — la réponse découle du texte sans y être écrite mot pour mot ;
- **2 au moins sur l'idée principale ou l'intention** — « quel est le sujet du texte », « pourquoi l'auteur raconte… » ;
- si le texte contient un nombre, une date ou une comparaison, **au moins une question porte dessus**.

Règles de qualité, non négociables :
- la bonne réponse est **exacte** au regard du texte — jamais « presque » ;
- les trois options sont **plausibles** et de longueur comparable ; les mauvaises sont fausses pour une raison identifiable (mauvais nombre, mauvais lieu, cause inversée), pas absurdes ;
- les options ne sont pas des reformulations de la bonne réponse ;
- aucune question ne peut se répondre sans avoir lu le texte ;
- aucune question à double sens, aucun piège de formulation ;
- pas de « toutes ces réponses » ni « aucune de ces réponses » ;
- les questions sont toutes différentes à l'intérieur d'un texte (validé).

## Honnêteté factuelle

- N'invente aucun fait, aucune statistique, aucune citation. Si tu n'es pas certain d'un chiffre, écris une formulation qualitative (« plusieurs milliers », « au XIXe siècle »).
- Pas de conseil médical, juridique ou financier personnalisé ; reste descriptif et général.
- Pas de personne privée nommée, pas de contenu polémique, pas de politique partisane, pas de religion militante.
- Sujets universels et stables (histoire ancienne, sciences naturelles, fonctionnement des choses, géographie physique, techniques, corps humain, arts classiques).

## Style d'écriture

- Français soigné mais simple, pas de tics de style, pas de listes à puces dans le corps.
- Le corps est de la prose continue, paragraphes séparés par `\n\n` (deux sauts de ligne).
- Pas de HTML, pas de markdown (`*`, `_`, `#`, backticks interdits).
- Pas de titre répété au début du corps : le corps commence directement.
- Les titres sont spécifiques et accrocheurs, pas des titres génériques du type « La science aujourd'hui ».
- Varie les ouvertures : question, scène, constat, anecdote documentée.

## Identifiants

Chaque texte reçoit un identifiant fourni par la consigne (préfixe + numéro, ex. `b7`). Il doit être unique et respecter `^[a-z0-9]{2,12}$`.
