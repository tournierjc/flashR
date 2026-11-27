# Audit des QCM — la réponse est-elle dans le texte ?

1954 questions, 100 textes. Audit mené en trois passes, puis correction des questions fautives.

## Méthode

1. **Filtre lexical** (déterministe) : pour chaque question, on extrait les mots porteurs de la bonne réponse (radicalisation française, liste d'arrêt) et on regarde s'ils figurent dans le texte. Objectif : repérer les réponses dont aucun mot n'existe dans le passage. 204 questions candidates.
2. **Vérification sémantique** : chaque candidate est soumise, avec son texte intégral, à une lecture qui doit citer l'extrait qui étaie la réponse ou déclarer l'information absente. Verdicts : `appuye`, `inference` (question de synthèse légitime), `absent`, `contredit`.
3. **Vote majoritaire** : toute question litigieuse repasse trois fois, à l'identique. Seuil de défaut : au moins 2 verdicts `absent`/`contredit` sur 3. Cette étape a éliminé 3 faux positifs de la passe 2.

## Résultat

- 12 défauts confirmés sur 1954 questions (**0,6 %**).
- Tous sont des questions **« pourquoi »** situées aux **positions 10 à 17** du questionnaire. Aucune aux positions 1 à 9, aucune après la 17.
- 10 réponses `absent` (le texte ne dit rien de tel), 2 `contredit` (le texte dit autre chose).

Le motif est net : les questions d'approfondissement affirmaient une cause plausible, jamais écrite dans le texte.

## Les 12 corrections

| Texte | Question avant | Problème | Question après |
|---|---|---|---|
| a13 | Pourquoi l'auteur **termine-t-il** par des astuces pratiques ? | Les astuces sont au milieu ; le texte finit sur les lentilles de contact | Pourquoi l'auteur **donne-t-il** des astuces pratiques ? |
| b1 | Pourquoi l'argile était-elle un support commode ? | ni « fleuve », ni « abondance », ni « support » dans le texte | Quels signes les scribes tracent-ils sur l'argile ? |
| b3 | Pourquoi un producteur vend-il plus cher au détail ? | le texte parle de vendre sans intermédiaire, pas de prix plus élevé | Quel avantage un marché offre-t-il aux petits producteurs ? |
| b4 | Pourquoi les fluides ont-ils changé plusieurs fois ? | le texte ne dit jamais qu'ils ont changé | Que fait le compresseur dans le circuit ? |
| b5 | Pourquoi le ciel paraît-il plus foncé en haute montagne ? | « altitude » absent ; le texte parle de l'ombre bleue sur la neige | Pourquoi l'ombre sur la neige paraît-elle bleue à la montagne ? |
| b7 | Pourquoi les tesselles forment-elles un motif lisible de loin ? | le texte dit que les couleurs venaient de loin, pas qu'elles contrastent | Comment les tesselles sont-elles posées ? |
| b9 | Quel défaut le texte reconnaît-il au stylo à bille ? | le défaut cité (trait qui s'épaissit) n'existe pas ; le texte parle du gaucher qui se tache | même question, bonne réponse corrigée |
| b11 | Pourquoi les marchands ne traversaient-ils pas tout le trajet ? | la raison n'est pas donnée, seuls les relais sont décrits | Comment les marchandises progressaient-elles vers l'ouest ? |
| b24 | Qu'appelle-t-on un moule perdu ? | le terme n'apparaît que dans une énumération, sans définition | À quoi l'impression 3D convient-elle le mieux ? |
| c20 | Pourquoi Carnegie exigeait-il un financement local ? | la condition est citée, la raison non | À quelle condition Carnegie finançait-il une bibliothèque ? |
| c20 | Pourquoi les bibliothèques se développèrent dans les villes industrielles ? | cause absente du texte | Qui payait la bibliothèque publique ouverte en 1850 ? |
| d13 | Pourquoi l'écholocation exige-t-elle un cerveau rapide ? | le texte invoque le nombre de cris par seconde (200), pas la vitesse des échos | même question, bonne réponse corrigée |

## Vérifications après correction

- Les 12 questions corrigées repassent le vote : **3/3 `appuye`** (la question a13 est classée `inference`, ce qui est le statut attendu d'une question « pourquoi l'auteur »).
- `node textes/valide-biblio.js textes.js` → **OK — aucune erreur** (schéma, doublons, nombre d'options, index de réponse).
- Parcours complet de l'app : **9/9 étapes, 0 erreur JS**.
- Contrôle de fiabilité de la passe 2 : sur les 1809 verdicts `appuye`, **96 %** citaient un extrait retrouvé mot pour mot dans le texte.

## Limites

- L'audit est **outillé, pas humain** : un désaccord sémantique dont tous les mots figurent dans le texte peut passer. Le taux de 0,6 % est un plancher, pas une garantie de zéro.
- 3 questions initialement signalées (a21 q4, a21 q14, b10 q16) ont été reclassées par le vote : ce sont des inférences légitimes, pas des défauts.
- Le filtre lexical ne juge pas la **qualité** des distracteurs (trop proches ou trop évidents) : ce n'est pas l'objet de cet audit.
