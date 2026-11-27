/* Bibliothèque de textes — flashR
 * 100 textes, 1954 questions.
 * Pour l'étendre : ajoute un objet dans le tableau (même schéma), puis
 * node textes/valide-biblio.js textes.js && node --check → recharger l'app.
 * Schéma : voir textes/SPEC.md. Aucune dépendance, aucun réseau.
 */
window.BIBLIO = [
 {
  "id": "a12",
  "theme": "animaux",
  "niveau": 1,
  "titre": "Le pigeon retrouve sa maison",
  "corps": "Le pigeon voyageur est capable de revenir à son pigeonnier depuis un lieu qu'il n'a jamais vu. Comment fait-il ?\n\nLes chercheurs ont proposé plusieurs explications. Le pigeon semble sensible au champ magnétique terrestre, qu'il pourrait percevoir grâce à des cellules particulières du bec. Cette information lui donnerait une sorte de boussole. Il utilise aussi le soleil comme repère, en corrigeant sa position avec l'heure de la journée.\n\nLe pigeon ne vole pas en ligne droite parfaite. Il explore d'abord les environs, en décrivant de larges cercles, comme s'il prenait des repères. Puis il s'oriente. Certains oiseaux semblent aussi sentir des odeurs familières, portées par le vent, qui complètent ces informations.\n\nEn vol, le pigeon peut atteindre environ soixante à quatre-vingts kilomètres par heure. Il ne vole pas la nuit et s'arrête pour se reposer et boire.\n\nCette aptitude a été utilisée très tôt. Les Romains s'en servaient pour transmettre des nouvelles militaires. Bien plus tard, pendant le siège de Paris en 1870, des pigeons ont transporté des messages par-dessus les lignes ennemies, parfois sous forme de pellicules photographiques miniatures.\n\nAujourd'hui, les colombophiles organisent encore des concours de vitesse. Un bon pigeon parcourt plusieurs centaines de kilomètres dans la journée. On lâche les oiseaux loin de leur colombier, et le temps de retour de chacun est enregistré.",
  "q": [
   {
    "q": "Que sait faire le pigeon voyageur ?",
    "o": [
     "Revenir à son pigeonnier depuis un lieu inconnu",
     "Trouver de l'eau à grande distance",
     "Reconnaître les couleurs des drapeaux"
    ],
    "r": 0,
    "e": "Le texte ouvre sur cette capacité : revenir au pigeonnier depuis un lieu jamais vu."
   },
   {
    "q": "Quel repère naturel le pigeon pourrait percevoir ?",
    "o": [
     "Le champ magnétique terrestre",
     "La pression de l'air",
     "Les ultrasons des insectes"
    ],
    "r": 0,
    "e": "Le pigeon serait sensible au champ magnétique, ce qui lui fournirait une boussole."
   },
   {
    "q": "Où se trouveraient les cellules sensibles au champ magnétique ?",
    "o": [
     "Dans le bec",
     "Dans les ailes",
     "Dans les pattes"
    ],
    "r": 0,
    "e": "Le texte situe ces cellules particulières dans le bec."
   },
   {
    "q": "Quel autre repère le pigeon utilise-t-il ?",
    "o": [
     "Le soleil",
     "La lune",
     "Les étoiles"
    ],
    "r": 0,
    "e": "Le soleil sert aussi de repère au pigeon."
   },
   {
    "q": "Comment corrige-t-il sa position avec le soleil ?",
    "o": [
     "Avec l'heure de la journée",
     "Avec la couleur du ciel",
     "Avec la hauteur des nuages"
    ],
    "r": 0,
    "e": "L'heure de la journée permet d'interpréter correctement la position du soleil."
   },
   {
    "q": "Quel troisième type d'indice certains oiseaux utilisent-ils ?",
    "o": [
     "Des odeurs familières portées par le vent",
     "Le bruit des villes",
     "La chaleur du sol"
    ],
    "r": 0,
    "e": "Le texte mentionne des odeurs familières qui complètent les autres repères."
   },
   {
    "q": "Comment vole-t-il au début de son trajet ?",
    "o": [
     "Il décrit de larges cercles",
     "Il file tout droit",
     "Il vole au ras du sol"
    ],
    "r": 0,
    "e": "Le pigeon commence par explorer les environs en décrivant de larges cercles."
   },
   {
    "q": "Quelle vitesse peut-il atteindre en vol ?",
    "o": [
     "Environ 60 à 80 km/h",
     "Environ 10 km/h",
     "Environ 300 km/h"
    ],
    "r": 0,
    "e": "Le texte donne une vitesse d'environ soixante à quatre-vingts kilomètres par heure."
   },
   {
    "q": "Que fait le pigeon la nuit ?",
    "o": [
     "Il s'arrête pour se reposer",
     "Il accélère",
     "Il change de direction"
    ],
    "r": 0,
    "e": "Le pigeon ne vole pas la nuit : il s'arrête pour se reposer et boire."
   },
   {
    "q": "Qui utilisait déjà des pigeons pour des nouvelles militaires ?",
    "o": [
     "Les Romains",
     "Les Égyptiens",
     "Les Vikings"
    ],
    "r": 0,
    "e": "Les Romains s'en servaient pour transmettre des nouvelles militaires."
   },
   {
    "q": "Quand les pigeons ont-ils transporté des messages au-dessus des lignes ennemies à Paris ?",
    "o": [
     "En 1870",
     "En 1950",
     "En 1750"
    ],
    "r": 0,
    "e": "Le texte cite le siège de Paris en 1870."
   },
   {
    "q": "Sous quelle forme étaient parfois réduits les messages ?",
    "o": [
     "Des pellicules photographiques miniatures",
     "Des bandes magnétiques",
     "Des signaux sonores"
    ],
    "r": 0,
    "e": "Certains messages étaient réduits en pellicules photographiques miniatures."
   },
   {
    "q": "Qui organise encore des concours de vitesse ?",
    "o": [
     "Les colombophiles",
     "Les vétérinaires",
     "Les agriculteurs"
    ],
    "r": 0,
    "e": "Le texte cite les colombophiles, éleveurs de pigeons."
   },
   {
    "q": "Quelle distance un bon pigeon parcourt-il dans la journée ?",
    "o": [
     "Plusieurs centaines de kilomètres",
     "Une dizaine de kilomètres",
     "Plusieurs milliers de kilomètres"
    ],
    "r": 0,
    "e": "Le texte parle de plusieurs centaines de kilomètres en une journée."
   },
   {
    "q": "Pourquoi un pigeon lâché loin de chez lui ne se perd-il pas ?",
    "o": [
     "Parce qu'il combine plusieurs repères",
     "Parce qu'il suit toujours les routes",
     "Parce qu'il revient en bateau"
    ],
    "r": 0,
    "e": "Le champ magnétique, le soleil et les odeurs lui fournissent des informations complémentaires."
   },
   {
    "q": "Pourquoi le seul champ magnétique ne suffit-il pas à expliquer son orientation ?",
    "o": [
     "Parce qu'il utilise aussi le soleil et les odeurs",
     "Parce qu'il vole uniquement la nuit",
     "Parce qu'il ne sent rien"
    ],
    "r": 0,
    "e": "Le texte présente plusieurs mécanismes comme complémentaires."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "Comment le pigeon s'oriente pour rentrer",
     "L'élevage des pigeons de ville",
     "La reproduction des oiseaux migrateurs"
    ],
    "r": 0,
    "e": "Le texte examine les mécanismes qui permettent au pigeon de retrouver son pigeonnier."
   }
  ]
 },
 {
  "id": "a2",
  "theme": "animaux",
  "niveau": 1,
  "titre": "L'hiver du manchot empereur",
  "corps": "Chez les manchots empereurs, la reproduction commence au début de l'hiver antarctique, quand la température descend très bas et que la nuit dure des semaines. L'espèce est la plus grande des manchots : un adulte mesure environ un mètre dix et peut peser près de quarante kilos.\n\nLa femelle pond un seul œuf. Elle le confie aussitôt au mâle, puis part vers la mer pour se nourrir. Le mâle pose l'œuf sur ses pattes et le recouvre d'un repli de peau chaud, comme une poche. Il ne peut pas le poser : s'il le laissait sur la glace, l'œuf gèlerait en quelques minutes. Le passage d'un parent à l'autre doit donc être rapide et précis.\n\nPendant environ deux mois, le mâle ne mange rien. Il reste debout, immobile, et se serre contre ses voisins pour garder la chaleur. Les mâles forment ainsi de grands groupes compacts, qui tournent lentement pour que chacun passe au centre. Là, la température reste bien plus élevée qu'à l'extérieur du groupe, où le vent souffle sans obstacle.\n\nQuand la femelle revient, elle retrouve son compagnon et reprend l'œuf. Elle a repris des forces en mer et peut nourrir le poussin qui vient d'éclore, en régurgitant de la nourriture. Le mâle part alors à son tour vers la mer, après plusieurs semaines de jeûne.\n\nLes poussins restent ensuite blottis contre les pattes d'un adulte. Les skuas, oiseaux prédateurs de la région, guettent les jeunes laissés seuls.",
  "q": [
   {
    "q": "À quelle saison commence la reproduction des manchots empereurs ?",
    "o": [
     "Au début de l'hiver antarctique",
     "Au début de l'été antarctique",
     "Au milieu du printemps austral"
    ],
    "r": 0,
    "e": "Le texte situe le début de la reproduction au commencement de l'hiver antarctique."
   },
   {
    "q": "Quelle taille atteint environ un adulte ?",
    "o": [
     "Un mètre dix",
     "Soixante centimètres",
     "Un mètre quatre-vingts"
    ],
    "r": 0,
    "e": "Le texte donne environ un mètre dix pour un adulte."
   },
   {
    "q": "Combien peut peser un manchot empereur adulte ?",
    "o": [
     "Près de quarante kilos",
     "Près de cinq kilos",
     "Près de cent kilos"
    ],
    "r": 0,
    "e": "Le texte indique un poids pouvant approcher quarante kilos."
   },
   {
    "q": "Combien d'œufs la femelle pond-elle ?",
    "o": [
     "Un seul",
     "Deux",
     "Trois"
    ],
    "r": 0,
    "e": "Le texte précise que la femelle pond un seul œuf."
   },
   {
    "q": "Où le mâle pose-t-il l'œuf ?",
    "o": [
     "Sur ses pattes",
     "Sur la glace",
     "Dans un trou creusé"
    ],
    "r": 0,
    "e": "Le mâle place l'œuf sur ses pattes et le couvre d'un repli de peau."
   },
   {
    "q": "Que fait la femelle juste après avoir confié l'œuf ?",
    "o": [
     "Elle part vers la mer pour se nourrir",
     "Elle reste près du mâle",
     "Elle cherche un abri sur la glace"
    ],
    "r": 0,
    "e": "Le texte dit qu'elle part vers la mer pour se nourrir après avoir confié l'œuf."
   },
   {
    "q": "Que se passerait-il si l'œuf restait sur la glace ?",
    "o": [
     "Il gèlerait en quelques minutes",
     "Il serait recouvert de neige",
     "Il serait pris pour un caillou"
    ],
    "r": 0,
    "e": "Le texte affirme que l'œuf posé sur la glace gèlerait en quelques minutes."
   },
   {
    "q": "Pourquoi le passage de l'œuf entre les parents doit-il être rapide ?",
    "o": [
     "Parce que l'œuf se refroidirait très vite",
     "Parce que le mâle doit partir chasser",
     "Parce que la glace se brise"
    ],
    "r": 0,
    "e": "L'œuf ne peut rester exposé au froid, ce qui impose un transfert précis."
   },
   {
    "q": "Pendant combien de temps le mâle ne mange-t-il rien ?",
    "o": [
     "Environ deux mois",
     "Environ deux semaines",
     "Environ six mois"
    ],
    "r": 0,
    "e": "Le texte indique une durée d'environ deux mois sans nourriture."
   },
   {
    "q": "Comment les mâles se réchauffent-ils ?",
    "o": [
     "Ils se serrent en groupes compacts",
     "Ils s'allongent sur le ventre",
     "Ils remuent les ailes sans arrêt"
    ],
    "r": 0,
    "e": "Les mâles se regroupent en masses compactes pour conserver la chaleur."
   },
   {
    "q": "Pourquoi les groupes de mâles tournent-ils lentement ?",
    "o": [
     "Pour que chacun passe au centre",
     "Pour suivre le soleil",
     "Pour chasser les prédateurs"
    ],
    "r": 0,
    "e": "La rotation lente permet à chaque oiseau de profiter tour à tour de la position centrale."
   },
   {
    "q": "Où fait-il le plus chaud dans un groupe de mâles ?",
    "o": [
     "Au centre",
     "Sur le bord exposé au vent",
     "Au sommet de la masse"
    ],
    "r": 0,
    "e": "Le texte précise que la température est bien plus élevée au centre qu'à l'extérieur."
   },
   {
    "q": "Qui reprend l'œuf au retour de la femelle ?",
    "o": [
     "La femelle",
     "Le mâle",
     "Un autre couple"
    ],
    "r": 0,
    "e": "Le texte indique que la femelle reprend l'œuf à son retour, puis le mâle part à son tour."
   },
   {
    "q": "Comment la femelle nourrit-elle le poussin ?",
    "o": [
     "Elle régurgite de la nourriture",
     "Elle lui apporte des poissons entiers",
     "Elle lui donne de la neige fondue"
    ],
    "r": 0,
    "e": "La femelle nourrit le poussin en régurgitant la nourriture rapportée de la mer."
   },
   {
    "q": "Quel oiseau guette les jeunes laissés seuls ?",
    "o": [
     "Le skua",
     "Le goéland argenté",
     "Le pingouin"
    ],
    "r": 0,
    "e": "Le texte cite les skuas comme prédateurs des jeunes."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "La manière dont le manchot empereur couve son œuf",
     "La chasse des manchots dans l'océan Austral",
     "Les différents oiseaux de l'Antarctique"
    ],
    "r": 0,
    "e": "Le texte décrit surtout le rôle du mâle pendant l'incubation, en hiver."
   },
   {
    "q": "Pourquoi l'auteur insiste-t-il sur le froid et la nuit ?",
    "o": [
     "Pour montrer que la couvaison est une épreuve",
     "Pour expliquer la couleur du plumage",
     "Pour décrire le paysage polaire en détail"
    ],
    "r": 0,
    "e": "Ces deux éléments soulignent la difficulté de la tâche accomplie par le mâle."
   }
  ]
 },
 {
  "id": "a7",
  "theme": "animaux",
  "niveau": 1,
  "titre": "La danse des abeilles donne la direction",
  "corps": "Une abeille butineuse qui trouve une belle source de nectar rentre à la ruche. Elle ne peut pas dire où elle est allée avec des mots. Alors elle danse.\n\nLa danse a lieu sur les rayons, dans l'obscurité. Les autres abeilles s'approchent et suivent les mouvements en touchant la danseuse avec leurs antennes.\n\nSi la nourriture est proche, à quelques dizaines de mètres, elle exécute une petite danse en rond. Les autres abeilles comprennent qu'il faut chercher tout près. L'odeur du nectar accrochée à son corps leur donne aussi une piste.\n\nSi la source est plus loin, la danse change : l'abeille parcourt une ligne droite en frétillant de l'abdomen, puis revient en cercle, et recommence. L'angle de cette ligne droite par rapport à la verticale indique la direction du soleil. La durée du frétillement renseigne sur la distance : plus la source est lointaine, plus le passage dure longtemps.\n\nLe savant autrichien Karl von Frisch a décodé ce langage dans les années 1940. Il observait des ruches vitrées et marquait les abeilles pour les suivre. Il a montré que les butineuses recrutées retrouvaient bien le nourrisseur indiqué. Il a reçu un prix Nobel en 1973 pour ces travaux.\n\nLa danse n'est pas parfaite. Les abeilles explorent parfois les alentours avant de trouver la source exacte. Mais le gain de temps reste considérable pour la colonie.",
  "q": [
   {
    "q": "Que fait la butineuse quand elle trouve du nectar ?",
    "o": [
     "Elle rentre à la ruche et danse",
     "Elle reste sur place et attend",
     "Elle creuse un nouveau trou"
    ],
    "r": 0,
    "e": "La butineuse revient à la ruche et transmet l'information par une danse."
   },
   {
    "q": "Où la danse a-t-elle lieu ?",
    "o": [
     "Sur les rayons, dans l'obscurité",
     "Devant l'entrée de la ruche",
     "Sur les fleurs butinées"
    ],
    "r": 0,
    "e": "La danse se déroule sur les rayons, à l'intérieur de la ruche."
   },
   {
    "q": "Comment les autres abeilles suivent-elles la danse ?",
    "o": [
     "En touchant la danseuse avec leurs antennes",
     "En écoutant un bourdonnement",
     "En la suivant à l'extérieur"
    ],
    "r": 0,
    "e": "Les suiveuses perçoivent les mouvements en touchant la danseuse de leurs antennes."
   },
   {
    "q": "Que fait-elle si la nourriture est proche ?",
    "o": [
     "Une petite danse en rond",
     "Une longue ligne droite",
     "Un vol en hauteur"
    ],
    "r": 0,
    "e": "Pour une source à quelques dizaines de mètres, elle exécute une danse en rond."
   },
   {
    "q": "Que comprennent les autres abeilles ?",
    "o": [
     "Qu'il faut chercher tout près",
     "Qu'il faut changer de ruche",
     "Qu'il faut attendre la nuit"
    ],
    "r": 0,
    "e": "La danse en rond indique aux autres qu'il faut chercher à proximité."
   },
   {
    "q": "Quel indice complète la danse en rond ?",
    "o": [
     "L'odeur du nectar sur le corps",
     "La couleur des rayons",
     "Le bruit des ailes"
    ],
    "r": 0,
    "e": "L'odeur du nectar apporte une indication supplémentaire aux suiveuses."
   },
   {
    "q": "Que fait l'abeille si la source est lointaine ?",
    "o": [
     "Une ligne droite en frétillant",
     "Une danse en rond plus rapide",
     "Un vol stationnaire"
    ],
    "r": 0,
    "e": "Pour une source éloignée, elle parcourt une ligne droite en frétillant de l'abdomen."
   },
   {
    "q": "Que fait-elle après la ligne droite ?",
    "o": [
     "Elle revient en cercle",
     "Elle sort de la ruche",
     "Elle s'immobilise longtemps"
    ],
    "r": 0,
    "e": "Après la ligne droite, elle revient en cercle puis recommence."
   },
   {
    "q": "Qu'indique l'angle de la ligne par rapport à la verticale ?",
    "o": [
     "La direction du soleil",
     "La quantité de miel",
     "L'âge de la butineuse"
    ],
    "r": 0,
    "e": "Cet angle donne la direction de la source par rapport au soleil."
   },
   {
    "q": "Qu'indique la durée du frétillement ?",
    "o": [
     "La distance",
     "La couleur des fleurs",
     "Le nombre d'abeilles"
    ],
    "r": 0,
    "e": "Plus la source est lointaine, plus le frétillement dure longtemps."
   },
   {
    "q": "Qui a décodé ce langage ?",
    "o": [
     "Karl von Frisch",
     "Charles Darwin",
     "Louis Pasteur"
    ],
    "r": 0,
    "e": "Le savant autrichien Karl von Frisch a décodé ce langage."
   },
   {
    "q": "Comment von Frisch observait-il les abeilles ?",
    "o": [
     "Dans des ruches vitrées",
     "Dans des ruches enfouies",
     "Sous un microscope"
    ],
    "r": 0,
    "e": "Il utilisait des ruches vitrées et marquait les abeilles pour les suivre."
   },
   {
    "q": "Qu'a montré von Frisch ?",
    "o": [
     "Les butineuses retrouvent le nourrisseur indiqué",
     "Les abeilles dansent au hasard",
     "Les reines dansent seules"
    ],
    "r": 0,
    "e": "Ses expériences ont montré que les butineuses recrutées retrouvaient la source indiquée."
   },
   {
    "q": "Quand von Frisch a-t-il reçu un prix Nobel ?",
    "o": [
     "En 1973",
     "En 1940",
     "En 1925"
    ],
    "r": 0,
    "e": "Il a reçu le prix Nobel en 1973 pour ces recherches."
   },
   {
    "q": "Pourquoi les abeilles explorent-elles parfois les alentours ?",
    "o": [
     "Parce que la danse ne donne pas une position exacte",
     "Parce qu'elles ne sentent pas le nectar",
     "Parce qu'elles préfèrent les fleurs lointaines"
    ],
    "r": 0,
    "e": "La danse indique une direction et une distance approximatives, que les abeilles ajustent en cherchant."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "Le langage dansé des abeilles butineuses",
     "La fabrication du miel dans la ruche",
     "Les maladies des colonies d'abeilles"
    ],
    "r": 0,
    "e": "Le texte décrit comment les abeilles communiquent la position d'une source de nectar."
   },
   {
    "q": "Pourquoi l'auteur mentionne-t-il le prix Nobel ?",
    "o": [
     "Pour souligner l'importance de cette découverte",
     "Pour dater la naissance de von Frisch",
     "Pour expliquer le fonctionnement d'une ruche"
    ],
    "r": 0,
    "e": "Le Nobel atteste la valeur scientifique du décodage de la danse."
   }
  ]
 },
 {
  "id": "a13",
  "theme": "cuisine",
  "niveau": 1,
  "titre": "Pourquoi l'oignon fait pleurer",
  "corps": "Couper un oignon fait pleurer presque tout le monde. La cause n'est pas une odeur, mais une réaction chimique.\n\nL'oignon contient des cellules qui gardent séparés deux composés : des enzymes et des molécules soufrées. Tant que la cellule est intacte, ils ne se rencontrent pas. Ces molécules soufrées expliquent aussi que certaines variétés piquent plus que d'autres.\n\nLe couteau brise les cellules. Les enzymes entrent alors en contact avec les composés soufrés et les transforment. Il se forme un gaz qui s'échappe dans l'air.\n\nCe gaz atteint la surface de l'œil. Au contact des larmes, il produit une très petite quantité d'acide. L'œil réagit en produisant davantage de larmes pour se laver. On pleure donc pour se protéger, et non par émotion.\n\nPlusieurs astuces limitent ce phénomène. Un couteau bien aiguisé abîme moins de cellules. Refroidir l'oignon ralentit la réaction. Le plonger dans l'eau ou le passer sous le robinet avant de le couper dissout une partie des composés. Et travailler près d'une hotte évacue le gaz.\n\nLa cuisson change tout. La chaleur détruit les enzymes et chasse les composés volatils : l'oignon cuit devient doux, parfois sucré. C'est pourquoi un oignon longuement mijoté n'a plus rien d'agressif.\n\nIl reste une conséquence moins connue : les vapeurs peuvent irriter aussi les lentilles de contact. Mieux vaut les retirer avant de commencer.",
  "q": [
   {
    "q": "Quelle est la cause des larmes quand on coupe un oignon ?",
    "o": [
     "Une réaction chimique",
     "Une odeur forte",
     "La poussière de la peau"
    ],
    "r": 0,
    "e": "Le texte écarte l'odeur et attribue les larmes à une réaction chimique."
   },
   {
    "q": "Que gardent séparés les cellules de l'oignon ?",
    "o": [
     "Des enzymes et des molécules soufrées",
     "De l'eau et de l'huile",
     "Du sucre et du sel"
    ],
    "r": 0,
    "e": "Les enzymes et les molécules soufrées sont séparées tant que la cellule est intacte."
   },
   {
    "q": "Pourquoi certaines variétés piquent-elles davantage ?",
    "o": [
     "Parce qu'elles contiennent plus de composés soufrés",
     "Parce qu'elles sont plus grosses",
     "Parce qu'elles poussent au soleil"
    ],
    "r": 0,
    "e": "Le texte relie la force du picotement à la quantité de molécules soufrées."
   },
   {
    "q": "Que se passe-t-il quand on coupe l'oignon ?",
    "o": [
     "Les cellules sont brisées",
     "Les cellules grossissent",
     "Les cellules gèlent"
    ],
    "r": 0,
    "e": "Le couteau brise les cellules, ce qui met les composés en contact."
   },
   {
    "q": "Que font alors les enzymes ?",
    "o": [
     "Elles transforment les composés soufrés",
     "Elles bloquent les composés soufrés",
     "Elles créent de nouvelles cellules"
    ],
    "r": 0,
    "e": "Les enzymes transforment les composés soufrés en un gaz irritant."
   },
   {
    "q": "Qu'est-ce qui s'échappe de l'oignon coupé ?",
    "o": [
     "Un gaz",
     "Une poudre",
     "Un liquide visqueux"
    ],
    "r": 0,
    "e": "La réaction produit un gaz qui se diffuse dans l'air."
   },
   {
    "q": "Que produit le gaz au contact des larmes ?",
    "o": [
     "Une très petite quantité d'acide",
     "Une couche grasse",
     "Du sucre dissous"
    ],
    "r": 0,
    "e": "Au contact de l'eau des larmes, le gaz forme une trace d'acide."
   },
   {
    "q": "Pourquoi l'œil produit-il davantage de larmes ?",
    "o": [
     "Pour se laver de l'acide",
     "Pour refroidir la cornée",
     "Pour mieux voir"
    ],
    "r": 0,
    "e": "Les larmes diluent et emportent l'acide qui irrite l'œil."
   },
   {
    "q": "Que fait un couteau bien aiguisé ?",
    "o": [
     "Il abîme moins de cellules",
     "Il chauffe davantage l'oignon",
     "Il ajoute du sel"
    ],
    "r": 0,
    "e": "Une lame nette écrase moins de cellules et libère donc moins de gaz."
   },
   {
    "q": "Quel effet a le froid sur la réaction ?",
    "o": [
     "Il la ralentit",
     "Il l'accélère",
     "Il l'annule totalement"
    ],
    "r": 0,
    "e": "Refroidir l'oignon ralentit la réaction chimique responsable des larmes."
   },
   {
    "q": "Que fait le passage sous l'eau avant la découpe ?",
    "o": [
     "Il dissout une partie des composés",
     "Il durcit la chair",
     "Il retire la peau"
    ],
    "r": 0,
    "e": "L'eau emporte une partie des composés responsables de l'irritation."
   },
   {
    "q": "Que fait une hotte pendant la découpe ?",
    "o": [
     "Elle évacue le gaz",
     "Elle chauffe l'air",
     "Elle humidifie la pièce"
    ],
    "r": 0,
    "e": "La hotte aspire le gaz avant qu'il n'atteigne les yeux."
   },
   {
    "q": "Que devient l'oignon à la cuisson ?",
    "o": [
     "Il devient doux, parfois sucré",
     "Il devient plus piquant",
     "Il perd toute sa couleur"
    ],
    "r": 0,
    "e": "La chaleur détruit les enzymes et chasse les composés volatils, d'où une saveur douce."
   },
   {
    "q": "Pourquoi un oignon longuement mijoté n'est-il plus agressif ?",
    "o": [
     "Parce que les composés volatils se sont évaporés",
     "Parce qu'il a absorbé de l'eau",
     "Parce que son sucre a disparu"
    ],
    "r": 0,
    "e": "La cuisson prolongée élimine les composés irritants et concentre le sucre."
   },
   {
    "q": "Quel objet peut aussi être irrité par les vapeurs ?",
    "o": [
     "Les lentilles de contact",
     "Les couteaux en acier",
     "Les planches en bois"
    ],
    "r": 0,
    "e": "Le texte signale l'irritation possible des lentilles de contact."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "Le mécanisme chimique qui fait pleurer avec l'oignon",
     "Les variétés d'oignons cultivées en Europe",
     "Les techniques de conservation des légumes"
    ],
    "r": 0,
    "e": "Le texte explique la réaction qui libère un gaz irritant pour l'œil."
   },
   {
    "q": "Pourquoi l'auteur donne-t-il des astuces pratiques ?",
    "o": [
     "Pour relier l'explication à un usage quotidien",
     "Pour vendre un ustensile de cuisine",
     "Pour décrire la récolte des oignons"
    ],
    "r": 0,
    "e": "Les astuces arrivent juste après l'explication du mécanisme : elles relient la chimie à un geste quotidien."
   }
  ]
 },
 {
  "id": "a3",
  "theme": "cuisine",
  "niveau": 1,
  "titre": "Le levain qui fait lever le pain",
  "corps": "Pour faire du pain, on mélange de la farine, de l'eau et du sel. On peut y ajouter de la levure, ou bien utiliser du levain.\n\nLe levain est une pâte gardée de côté et nourrie régulièrement avec de la farine et de l'eau. Elle abrite des levures et des bactéries venues de l'air et de la farine. Les levures mangent les sucres de la farine et rejettent du gaz carbonique. Les bactéries, elles, produisent des acides qui donnent au pain son goût légèrement acidulé.\n\nLe gaz forme des bulles dans la pâte. Une protéine de la farine, le gluten, rend la pâte élastique : elle retient les bulles au lieu de les laisser partir. La pâte gonfle donc, parfois pendant plusieurs heures. Un levain très actif peut faire lever la pâte en trois ou quatre heures ; un levain plus jeune demande une nuit entière.\n\nÀ la cuisson, la chaleur fige la structure. Les bulles restent prisonnières, et c'est ce qui donne au pain sa mie pleine de trous. La croûte se forme quand la surface sèche et brunit.\n\nLes acides du levain ont un autre effet : ils ralentissent le développement des moisissures. Un pain au levain se garde donc souvent plus longtemps qu'un pain à la levure seule.\n\nCette méthode est ancienne. Les premiers pains levés, en Égypte, utilisaient déjà des pâtes laissées à l'air libre, où les micro-organismes s'installaient seuls.",
  "q": [
   {
    "q": "Que mélange-t-on de base pour faire du pain ?",
    "o": [
     "Farine, eau et sel",
     "Farine, sucre et lait",
     "Eau, sel et beurre"
    ],
    "r": 0,
    "e": "Le texte cite la farine, l'eau et le sel comme base, avec levure ou levain en plus."
   },
   {
    "q": "Qu'est-ce que le levain ?",
    "o": [
     "Une pâte gardée et nourrie de farine et d'eau",
     "Un mélange de sel et de levure sèche",
     "Un reste de pâte cuite la veille"
    ],
    "r": 0,
    "e": "Le levain est décrit comme une pâte conservée et régulièrement nourrie."
   },
   {
    "q": "Avec quoi nourrit-on le levain ?",
    "o": [
     "De la farine et de l'eau",
     "Du sucre et du sel",
     "Du lait et du beurre"
    ],
    "r": 0,
    "e": "Le texte précise qu'on l'entretient avec de la farine et de l'eau."
   },
   {
    "q": "D'où viennent les levures et les bactéries du levain ?",
    "o": [
     "De l'air et de la farine",
     "Du sel ajouté",
     "Du four utilisé"
    ],
    "r": 0,
    "e": "Le texte les fait venir de l'air et de la farine."
   },
   {
    "q": "Que rejettent les levures ?",
    "o": [
     "Du gaz carbonique",
     "De l'acide",
     "De l'alcool pur"
    ],
    "r": 0,
    "e": "Les levures consomment les sucres de la farine et rejettent du gaz carbonique."
   },
   {
    "q": "Que produisent les bactéries du levain ?",
    "o": [
     "Des acides",
     "Des sucres",
     "Du gluten"
    ],
    "r": 0,
    "e": "Les bactéries produisent des acides qui donnent le goût acidulé."
   },
   {
    "q": "Quel effet ont ces acides sur le pain ?",
    "o": [
     "Ils lui donnent un goût légèrement acidulé",
     "Ils le rendent plus sucré",
     "Ils le colorent en brun"
    ],
    "r": 0,
    "e": "Le texte relie les acides au goût légèrement acidulé du pain."
   },
   {
    "q": "Quelle protéine rend la pâte élastique ?",
    "o": [
     "Le gluten",
     "La chlorophylle",
     "L'amidon"
    ],
    "r": 0,
    "e": "Le gluten est la protéine de la farine qui donne son élasticité à la pâte."
   },
   {
    "q": "Quel est le rôle du gluten pendant la pousse ?",
    "o": [
     "Retenir les bulles de gaz",
     "Nourrir les levures",
     "Apporter le sel"
    ],
    "r": 0,
    "e": "Le gluten retient les bulles au lieu de les laisser s'échapper."
   },
   {
    "q": "Combien de temps un levain très actif met-il à faire lever la pâte ?",
    "o": [
     "Trois ou quatre heures",
     "Trois ou quatre minutes",
     "Trois ou quatre jours"
    ],
    "r": 0,
    "e": "Le texte donne trois ou quatre heures pour un levain très actif."
   },
   {
    "q": "Combien de temps faut-il avec un levain plus jeune ?",
    "o": [
     "Une nuit entière",
     "Une heure",
     "Une semaine"
    ],
    "r": 0,
    "e": "Un levain plus jeune demande une nuit entière pour lever la pâte."
   },
   {
    "q": "Que fait la chaleur à la cuisson ?",
    "o": [
     "Elle fige la structure de la pâte",
     "Elle fait repartir les levures",
     "Elle évapore tout le gluten"
    ],
    "r": 0,
    "e": "La chaleur fige la structure et emprisonne les bulles formées pendant la pousse."
   },
   {
    "q": "Comment se forme la croûte ?",
    "o": [
     "La surface sèche et brunit",
     "Les bulles éclatent en surface",
     "Le sel remonte à la surface"
    ],
    "r": 0,
    "e": "La croûte apparaît quand la surface de la pâte sèche puis brunit."
   },
   {
    "q": "Quel effet les acides ont-ils sur la conservation ?",
    "o": [
     "Ils ralentissent les moisissures",
     "Ils accélèrent le dessèchement",
     "Ils attirent les insectes"
    ],
    "r": 0,
    "e": "Les acides freinent le développement des moisissures et prolongent la conservation."
   },
   {
    "q": "Où les premiers pains levés sont-ils apparus ?",
    "o": [
     "En Égypte",
     "En Grèce",
     "En Chine"
    ],
    "r": 0,
    "e": "Le texte situe en Égypte les premiers pains levés connus."
   },
   {
    "q": "Pourquoi le pain au levain a-t-il un goût particulier ?",
    "o": [
     "Parce que des bactéries y produisent des acides",
     "Parce qu'on y ajoute du vinaigre",
     "Parce que la farine est grillée"
    ],
    "r": 0,
    "e": "Le goût acidulé vient des acides fabriqués par les bactéries du levain."
   },
   {
    "q": "Pourquoi faut-il attendre avant d'enfourner ?",
    "o": [
     "Parce que les bulles doivent se former dans la pâte",
     "Parce que le four doit refroidir",
     "Parce que le sel doit disparaître"
    ],
    "r": 0,
    "e": "La pousse laisse le temps aux levures de produire le gaz qui gonflera la pâte."
   }
  ]
 },
 {
  "id": "a8",
  "theme": "cuisine",
  "niveau": 1,
  "titre": "Comment le sucre devient caramel",
  "corps": "Le caramel naît d'une transformation simple : on chauffe du sucre.\n\nÀ sec, dans une casserole, le sucre commence par fondre. Il passe d'un état solide et blanc à un liquide transparent. Si l'on continue à chauffer, vers 160 degrés, ses molécules se brisent et se réorganisent. C'est la caramélisation. Le liquide prend une couleur ambrée et développe des arômes de noisette et de vanille.\n\nLe danger est de dépasser le point voulu. Au-delà d'environ 180 degrés, le sucre brunit trop et devient amer. Il faut donc surveiller la couleur et retirer la casserole à temps. Un caramel trop pâle manque de goût ; un caramel trop foncé gâche tout le plat.\n\nBeaucoup de cuisiniers ajoutent un peu d'eau au début. L'eau permet une montée en température plus régulière et limite les zones trop chaudes. Elle s'évapore ensuite, et le sucre finit seul sa transformation.\n\nIl faut aussi résister à l'envie de remuer. Une cuillère qui racle les bords détache des cristaux de sucre, qui servent de germes et font prendre la masse en grains. Pour éviter cela, on incline simplement la casserole.\n\nCertaines recettes ajoutent du beurre et de la crème à la fin, pour obtenir un caramel mou. D'autres versent le caramel chaud sur une plaque huilée, où il durcit en friandise. Dans tous les cas, la marge entre le bon caramel et le sucre brûlé est étroite.",
  "q": [
   {
    "q": "Que fait-on pour obtenir du caramel ?",
    "o": [
     "On chauffe du sucre",
     "On mélange du sucre et du sel",
     "On refroidit du sirop"
    ],
    "r": 0,
    "e": "Le caramel provient simplement du sucre chauffé."
   },
   {
    "q": "Que devient le sucre en fondant ?",
    "o": [
     "Un liquide transparent",
     "Une poudre blanche",
     "Une pâte épaisse et froide"
    ],
    "r": 0,
    "e": "Le sucre passe de l'état solide blanc à un liquide transparent."
   },
   {
    "q": "Vers quelle température la caramélisation commence-t-elle ?",
    "o": [
     "Vers 160 degrés",
     "Vers 60 degrés",
     "Vers 300 degrés"
    ],
    "r": 0,
    "e": "Le texte situe le début de la caramélisation vers 160 degrés."
   },
   {
    "q": "Que se passe-t-il à cette température ?",
    "o": [
     "Les molécules se brisent et se réorganisent",
     "L'eau se transforme en sel",
     "Le sucre redevient solide"
    ],
    "r": 0,
    "e": "La caramélisation correspond à une recombination des molécules de sucre."
   },
   {
    "q": "Quelle couleur prend le liquide ?",
    "o": [
     "Ambrée",
     "Bleutée",
     "Blanche"
    ],
    "r": 0,
    "e": "Le liquide caramélisé prend une couleur ambrée."
   },
   {
    "q": "Quels arômes se développent alors ?",
    "o": [
     "Noisette et vanille",
     "Citron et menthe",
     "Poivre et cannelle"
    ],
    "r": 0,
    "e": "Le texte cite des arômes de noisette et de vanille."
   },
   {
    "q": "Que se passe-t-il au-delà de 180 degrés ?",
    "o": [
     "Le sucre brunit trop et devient amer",
     "Le sucre redevient blanc",
     "Le caramel durcit sans changer de goût"
    ],
    "r": 0,
    "e": "Trop chauffé, le sucre noircit et prend un goût amer."
   },
   {
    "q": "Que risque un caramel trop pâle ?",
    "o": [
     "De manquer de goût",
     "De devenir amer",
     "De ne pas durcir"
    ],
    "r": 0,
    "e": "Le texte oppose le caramel trop pâle, sans goût, au caramel trop foncé."
   },
   {
    "q": "Que font beaucoup de cuisiniers au début ?",
    "o": [
     "Ils ajoutent un peu d'eau",
     "Ils ajoutent de la farine",
     "Ils couvrent la casserole"
    ],
    "r": 0,
    "e": "Beaucoup ajoutent un peu d'eau au sucre en début de cuisson."
   },
   {
    "q": "À quoi sert cette eau ?",
    "o": [
     "À une montée en température plus régulière",
     "À rendre le caramel salé",
     "À colorer le sucre"
    ],
    "r": 0,
    "e": "L'eau répartit la chaleur et limite les zones trop chaudes."
   },
   {
    "q": "Pourquoi ne faut-il pas remuer avec une cuillère ?",
    "o": [
     "Parce que cela forme des cristaux",
     "Parce que cela fait brûler le sucre",
     "Parce que cela fait mousser l'eau"
    ],
    "r": 0,
    "e": "La cuillère détache des cristaux qui font prendre la masse en grains."
   },
   {
    "q": "Que devient l'eau pendant la cuisson ?",
    "o": [
     "Elle s'évapore",
     "Elle se transforme en sucre",
     "Elle devient acide"
    ],
    "r": 0,
    "e": "L'eau s'évapore et laisse le sucre poursuivre seul sa transformation."
   },
   {
    "q": "Qu'ajoute-t-on parfois à la fin pour un caramel mou ?",
    "o": [
     "Du beurre et de la crème",
     "De l'eau et du sel",
     "De la farine et du sucre"
    ],
    "r": 0,
    "e": "Le beurre et la crème donnent un caramel mou."
   },
   {
    "q": "Que fait-on du caramel chaud pour obtenir une friandise ?",
    "o": [
     "On le verse sur une plaque huilée",
     "On le met au congélateur",
     "On le mélange à de l'eau"
    ],
    "r": 0,
    "e": "Versé sur une plaque huilée, le caramel durcit en friandise."
   },
   {
    "q": "Pourquoi l'eau ne reste-t-elle pas dans le caramel final ?",
    "o": [
     "Parce qu'elle s'évapore en chauffant",
     "Parce que le sucre la boit",
     "Parce qu'elle est filtrée"
    ],
    "r": 0,
    "e": "La chaleur fait disparaître l'eau, laissant un caramel sans liquide ajouté."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "La transformation du sucre en caramel",
     "La culture de la canne à sucre",
     "Les desserts au chocolat"
    ],
    "r": 0,
    "e": "Le texte décrit les étapes et les températures de la caramélisation."
   },
   {
    "q": "Pourquoi l'auteur indique-t-il deux températures précises ?",
    "o": [
     "Pour montrer la marge étroite entre bon caramel et sucre brûlé",
     "Pour comparer deux marques de casseroles",
     "Pour expliquer le fonctionnement d'un four"
    ],
    "r": 0,
    "e": "Les deux seuils délimitent la zone utile de cuisson du caramel."
   }
  ]
 },
 {
  "id": "a10",
  "theme": "géographie",
  "niveau": 1,
  "titre": "La mer Morte, trop salée pour couler",
  "corps": "La mer Morte n'est pas vraiment une mer. C'est un lac fermé, situé entre Israël, la Jordanie et les territoires palestiniens. Aucun fleuve n'en sort : l'eau qui y entre s'évapore sous un soleil intense.\n\nEn s'évaporant, l'eau laisse sur place les sels qu'elle contenait. Le lac est donc devenu extrêmement salé, environ huit à dix fois plus que l'océan. Cette concentration empêche presque toute vie : ni poisson, ni algue, d'où son nom. Seuls quelques micro-organismes particuliers y survivent.\n\nLa forte salinité change aussi la flottaison. Le corps humain y flotte sans effort, car l'eau très dense le porte. En revanche, l'eau irrite les yeux et les plaies. Les visiteurs qui s'y baignent sont donc invités à éviter les éclaboussures.\n\nSon rivage se trouve à environ quatre cent trente mètres sous le niveau de la mer. C'est le point le plus bas à la surface du globe. Comme l'évaporation dépasse les apports, le lac baisse d'année en année. Depuis le milieu du XXe siècle, son niveau a perdu plusieurs dizaines de mètres.\n\nLes causes sont multiples. Le Jourdain, qui l'alimente, est largement détourné pour l'irrigation. L'industrie y prélève aussi de l'eau pour extraire des sels, notamment du potassium. Ce recul laisse apparaître des terrains instables, où des effondrements se creusent parfois près des routes.",
  "q": [
   {
    "q": "Qu'est-ce que la mer Morte ?",
    "o": [
     "Un lac fermé",
     "Une mer intérieure reliée à l'océan",
     "Un golfe peu profond"
    ],
    "r": 0,
    "e": "Le texte précise qu'il s'agit d'un lac fermé, sans écoulement."
   },
   {
    "q": "Où se situe la mer Morte ?",
    "o": [
     "Entre Israël, la Jordanie et les territoires palestiniens",
     "Entre l'Égypte et la Libye",
     "Entre la Turquie et la Grèce"
    ],
    "r": 0,
    "e": "Le texte la situe entre Israël, la Jordanie et les territoires palestiniens."
   },
   {
    "q": "Pourquoi l'eau disparaît-elle du lac ?",
    "o": [
     "Elle s'évapore sous un soleil intense",
     "Elle s'infiltre dans le sol",
     "Elle gèle en hiver"
    ],
    "r": 0,
    "e": "L'eau qui entre dans le lac s'évapore sous un soleil intense."
   },
   {
    "q": "Pourquoi le lac est-il devenu si salé ?",
    "o": [
     "Les sels restent quand l'eau s'évapore",
     "Des bateaux y déversent du sel",
     "Le sel vient des pluies acides"
    ],
    "r": 0,
    "e": "L'évaporation emporte l'eau mais laisse les sels sur place."
   },
   {
    "q": "Combien de fois plus salée que l'océan est-elle ?",
    "o": [
     "Huit à dix fois",
     "Deux fois",
     "Cent fois"
    ],
    "r": 0,
    "e": "Le texte donne une salinité d'environ huit à dix fois celle de l'océan."
   },
   {
    "q": "Quelles formes de vie y subsistent ?",
    "o": [
     "Quelques micro-organismes particuliers",
     "Des poissons de petite taille",
     "Des algues vertes abondantes"
    ],
    "r": 0,
    "e": "Presque toute vie est absente, sauf quelques micro-organismes adaptés."
   },
   {
    "q": "Pourquoi le corps humain flotte-t-il sans effort ?",
    "o": [
     "Parce que l'eau très dense le porte",
     "Parce qu'il est plus léger que l'air",
     "Parce que le sel le pousse vers le haut"
    ],
    "r": 0,
    "e": "La densité élevée de l'eau assure une flottaison presque sans effort."
   },
   {
    "q": "Que provoque l'eau sur les yeux et les plaies ?",
    "o": [
     "Une irritation",
     "Un apaisement",
     "Un refroidissement"
    ],
    "r": 0,
    "e": "Le texte signale que l'eau irrite les yeux et les plaies."
   },
   {
    "q": "À quelle hauteur se trouve le rivage ?",
    "o": [
     "Environ 430 mètres sous le niveau de la mer",
     "Environ 430 mètres au-dessus",
     "Au niveau exact de la mer"
    ],
    "r": 0,
    "e": "Le rivage se situe à environ quatre cent trente mètres sous le niveau de la mer."
   },
   {
    "q": "Quel record détient ce lieu ?",
    "o": [
     "Le point le plus bas à la surface du globe",
     "Le lac le plus profond du monde",
     "La température la plus élevée du globe"
    ],
    "r": 0,
    "e": "Le texte le présente comme le point le plus bas à la surface du globe."
   },
   {
    "q": "De combien le niveau a-t-il baissé depuis le milieu du XXe siècle ?",
    "o": [
     "De plusieurs dizaines de mètres",
     "De quelques centimètres",
     "De plus de cinq cents mètres"
    ],
    "r": 0,
    "e": "Le texte indique une baisse de plusieurs dizaines de mètres."
   },
   {
    "q": "Quel fleuve alimente le lac ?",
    "o": [
     "Le Jourdain",
     "Le Nil",
     "L'Euphrate"
    ],
    "r": 0,
    "e": "Le Jourdain est cité comme principal apport d'eau."
   },
   {
    "q": "Pourquoi les apports d'eau ont-ils diminué ?",
    "o": [
     "Le fleuve est détourné pour l'irrigation",
     "Le fleuve a changé de cours",
     "La pluie a cessé"
    ],
    "r": 0,
    "e": "Le Jourdain est largement détourné pour irriguer les cultures."
   },
   {
    "q": "Quel sel est extrait par l'industrie ?",
    "o": [
     "Du potassium",
     "Du fer",
     "Du soufre"
    ],
    "r": 0,
    "e": "L'industrie prélève de l'eau pour extraire notamment du potassium."
   },
   {
    "q": "Pourquoi le recul du lac est-il dangereux ?",
    "o": [
     "Il laisse des terrains instables où le sol s'effondre",
     "Il rend l'air irrespirable",
     "Il attire des animaux sauvages"
    ],
    "r": 0,
    "e": "L'assèchement découvre des terrains qui s'effondrent parfois près des routes."
   },
   {
    "q": "Pourquoi peut-on dire que ce n'est pas une mer ?",
    "o": [
     "Parce que c'est un lac sans écoulement vers l'océan",
     "Parce qu'elle est trop petite",
     "Parce qu'elle ne contient pas de sel"
    ],
    "r": 0,
    "e": "Une mer communique avec l'océan ; ici, l'eau reste enfermée et s'évapore."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "Les particularités d'un lac très salé",
     "La culture des dattes au Proche-Orient",
     "La formation des déserts de sable"
    ],
    "r": 0,
    "e": "Le texte décrit la salinité du lac, ses effets et son niveau exceptionnel."
   }
  ]
 },
 {
  "id": "a15",
  "theme": "géographie",
  "niveau": 1,
  "titre": "Pourquoi le soleil ne se couche pas au pôle Nord en été",
  "corps": "Au pôle Nord, le soleil ne se couche pas pendant plusieurs mois d'été. Ce phénomène s'appelle le soleil de minuit.\n\nIl s'explique par l'inclinaison de la Terre. Notre planète tourne sur un axe qui n'est pas vertical par rapport à son orbite autour du Soleil : cet axe est penché d'environ vingt-trois degrés et demi. Cette inclinaison est aussi la cause des saisons.\n\nEn été dans l'hémisphère nord, le pôle Nord est incliné vers le Soleil. Il reste donc éclairé même lorsque la Terre effectue sa rotation quotidienne. Le soleil descend près de l'horizon, puis remonte sans le franchir. La lumière rasante prend alors une teinte orangée qui dure longtemps.\n\nPlus on s'approche du cercle polaire, plus la période de jour continu est longue. À la latitude du cercle, elle dure environ une journée ; au pôle, elle s'étend sur plusieurs mois. En hiver, le phénomène s'inverse : la nuit devient continue, et le soleil ne se lève pas pendant des semaines.\n\nLes régions proches du cercle connaissent aussi des nuits blanches, où le ciel reste clair malgré l'absence du soleil. La lumière, diffusée par l'atmosphère, suffit à lire dehors.\n\nCe rythme particulier bouleverse la vie des plantes et des animaux. En été, la végétation pousse très vite pendant quelques semaines. Certains oiseaux profitent de la lumière continue pour nourrir leurs petits presque sans interruption.",
  "q": [
   {
    "q": "Pendant combien de temps le soleil ne se couche-t-il pas au pôle Nord en été ?",
    "o": [
     "Plusieurs mois",
     "Quelques heures",
     "Une seule journée"
    ],
    "r": 0,
    "e": "Le texte parle de plusieurs mois sans coucher du soleil."
   },
   {
    "q": "Comment s'appelle ce phénomène ?",
    "o": [
     "Le soleil de minuit",
     "L'aurore boréale",
     "L'éclipse polaire"
    ],
    "r": 0,
    "e": "Le phénomène porte le nom de soleil de minuit."
   },
   {
    "q": "Qu'est-ce qui explique ce phénomène ?",
    "o": [
     "L'inclinaison de la Terre",
     "La distance au Soleil",
     "La vitesse de rotation"
    ],
    "r": 0,
    "e": "L'inclinaison de l'axe terrestre est la cause du jour continu."
   },
   {
    "q": "De combien l'axe terrestre est-il penché ?",
    "o": [
     "D'environ 23,5 degrés",
     "D'environ 5 degrés",
     "D'environ 90 degrés"
    ],
    "r": 0,
    "e": "Le texte donne une inclinaison d'environ vingt-trois degrés et demi."
   },
   {
    "q": "Quelle autre conséquence a cette inclinaison ?",
    "o": [
     "Elle est la cause des saisons",
     "Elle provoque les marées",
     "Elle ralentit la rotation"
    ],
    "r": 0,
    "e": "L'inclinaison de l'axe produit aussi l'alternance des saisons."
   },
   {
    "q": "Vers quoi le pôle Nord est-il incliné en été ?",
    "o": [
     "Vers le Soleil",
     "Vers la Lune",
     "Vers l'équateur"
    ],
    "r": 0,
    "e": "En été boréal, le pôle Nord penche vers le Soleil."
   },
   {
    "q": "Que fait le soleil près de l'horizon ?",
    "o": [
     "Il descend puis remonte sans le franchir",
     "Il disparaît puis revient",
     "Il reste immobile"
    ],
    "r": 0,
    "e": "Le soleil s'approche de l'horizon mais ne le traverse pas."
   },
   {
    "q": "Quelle teinte prend la lumière rasante ?",
    "o": [
     "Une teinte orangée",
     "Une teinte bleutée",
     "Une teinte verte"
    ],
    "r": 0,
    "e": "Le texte décrit une lumière rasante à la teinte orangée."
   },
   {
    "q": "Où la période de jour continu est-elle la plus longue ?",
    "o": [
     "Au pôle",
     "Au cercle polaire",
     "À l'équateur"
    ],
    "r": 0,
    "e": "Le pôle connaît plusieurs mois de jour continu, plus que le cercle polaire."
   },
   {
    "q": "Combien de temps dure le jour continu à la latitude du cercle polaire ?",
    "o": [
     "Environ une journée",
     "Environ une semaine",
     "Environ six mois"
    ],
    "r": 0,
    "e": "Au cercle polaire, le soleil ne se couche pas pendant environ une journée."
   },
   {
    "q": "Que se passe-t-il en hiver ?",
    "o": [
     "La nuit devient continue",
     "Le soleil reste levé",
     "Les jours s'allongent"
    ],
    "r": 0,
    "e": "Le phénomène s'inverse : l'obscurité dure alors plusieurs semaines."
   },
   {
    "q": "Comment le texte définit-il une nuit blanche ?",
    "o": [
     "Un ciel clair malgré l'absence du soleil",
     "Une nuit sans étoiles",
     "Une nuit de tempête"
    ],
    "r": 0,
    "e": "La nuit blanche désigne ici un ciel lumineux même sans soleil."
   },
   {
    "q": "Que fait la végétation pendant l'été polaire ?",
    "o": [
     "Elle pousse très vite",
     "Elle reste dormante",
     "Elle perd ses feuilles"
    ],
    "r": 0,
    "e": "La lumière continue accélère la croissance des plantes sur quelques semaines."
   },
   {
    "q": "Comment certains oiseaux profitent-ils de la lumière continue ?",
    "o": [
     "Ils nourrissent leurs petits presque sans interruption",
     "Ils dorment plus longtemps",
     "Ils migrent vers le sud"
    ],
    "r": 0,
    "e": "Le jour permanent leur permet de chercher de la nourriture très longtemps."
   },
   {
    "q": "Pourquoi un lieu proche du cercle polaire a-t-il de très longs jours en été ?",
    "o": [
     "Parce qu'il reste plus longtemps dans la zone éclairée",
     "Parce qu'il tourne moins vite",
     "Parce qu'il est plus proche du Soleil"
    ],
    "r": 0,
    "e": "La proximité du pôle allonge la durée pendant laquelle le lieu demeure éclairé."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "Les raisons du jour continu près des pôles",
     "La vie des animaux polaires",
     "La mesure de la température en Arctique"
    ],
    "r": 0,
    "e": "Le texte explique le soleil de minuit par l'inclinaison de la Terre."
   },
   {
    "q": "Pourquoi l'auteur donne-t-il l'angle de l'axe terrestre ?",
    "o": [
     "Pour expliquer l'origine du phénomène",
     "Pour décrire la forme de la Terre",
     "Pour dater les saisons"
    ],
    "r": 0,
    "e": "L'angle d'inclinaison est la cause précise du jour continu."
   }
  ]
 },
 {
  "id": "a5",
  "theme": "géographie",
  "niveau": 1,
  "titre": "La mer monte deux fois par jour",
  "corps": "Sur presque toutes les côtes, la mer monte et descend deux fois par jour. Ce mouvement s'appelle la marée.\n\nIl est provoqué par la Lune. Notre satellite attire l'eau des océans, et cette attraction crée deux bourrelets d'eau qui se déplacent autour du globe. La Terre tourne sous ces bourrelets : un port passe donc sous une hauteur d'eau haute, puis sous une hauteur d'eau basse.\n\nLe Soleil joue aussi un rôle, plus faible : son attraction est moins de la moitié de celle de la Lune. Quand la Lune, la Terre et le Soleil sont alignés, leurs effets s'additionnent. Les marées sont alors plus fortes : on parle de grandes marées, ou marées de vive-eau. Quand les astres forment un angle droit, les effets se contrarient et les marées sont plus faibles : ce sont les marées de morte-eau.\n\nL'amplitude varie beaucoup d'un lieu à l'autre. Dans certains golfes étroits, l'eau s'engouffre et la différence de hauteur devient spectaculaire. La baie de Fundy, au Canada, connaît ainsi les plus grandes marées du monde, avec plus de quinze mètres d'écart. Ailleurs, en mer Méditerranée, l'écart dépasse rarement quelques dizaines de centimètres.\n\nEntre une pleine mer et la suivante, il s'écoule un peu plus de douze heures. C'est pourquoi les heures des marées avancent chaque jour d'environ cinquante minutes.",
  "q": [
   {
    "q": "Combien de fois par jour la mer monte-t-elle ?",
    "o": [
     "Deux fois",
     "Une fois",
     "Quatre fois"
    ],
    "r": 0,
    "e": "Le texte indique que la mer monte et descend deux fois par jour."
   },
   {
    "q": "Comment appelle-t-on ce mouvement ?",
    "o": [
     "La marée",
     "La houle",
     "Le ressac"
    ],
    "r": 0,
    "e": "Le mouvement quotidien de montée et de descente s'appelle la marée."
   },
   {
    "q": "Quel astre attire principalement l'eau des océans ?",
    "o": [
     "La Lune",
     "Le Soleil",
     "Mars"
    ],
    "r": 0,
    "e": "Le texte attribue l'attraction principale à la Lune."
   },
   {
    "q": "Que crée cette attraction ?",
    "o": [
     "Deux bourrelets d'eau",
     "Un courant unique",
     "Une vague géante"
    ],
    "r": 0,
    "e": "L'attraction lunaire forme deux bourrelets d'eau qui parcourent le globe."
   },
   {
    "q": "Que fait la Terre sous ces bourrelets ?",
    "o": [
     "Elle tourne",
     "Elle s'arrête",
     "Elle se rapproche de la Lune"
    ],
    "r": 0,
    "e": "La Terre tourne sous les bourrelets, ce qui fait alterner hauteur haute et basse."
   },
   {
    "q": "Quelle est la force d'attraction du Soleil par rapport à celle de la Lune ?",
    "o": [
     "Moins de la moitié",
     "Le double",
     "Exactement la même"
    ],
    "r": 0,
    "e": "Le texte précise que l'effet du Soleil est inférieur à la moitié de celui de la Lune."
   },
   {
    "q": "Quand les marées sont-elles plus fortes ?",
    "o": [
     "Quand les trois astres sont alignés",
     "Quand la Lune est cachée",
     "Quand le Soleil est au plus haut"
    ],
    "r": 0,
    "e": "L'alignement de la Lune, de la Terre et du Soleil additionne leurs effets."
   },
   {
    "q": "Comment appelle-t-on ces marées plus fortes ?",
    "o": [
     "Les grandes marées",
     "Les marées basses",
     "Les marées d'orage"
    ],
    "r": 0,
    "e": "Le texte nomme grandes marées, ou vives-eaux, les marées renforcées par l'alignement."
   },
   {
    "q": "Que se passe-t-il quand les astres forment un angle droit ?",
    "o": [
     "Les marées sont plus faibles",
     "Les marées disparaissent",
     "Les marées deviennent irrégulières"
    ],
    "r": 0,
    "e": "Les effets se contrarient alors et produisent des marées de morte-eau."
   },
   {
    "q": "Où trouve-t-on les plus grandes marées du monde ?",
    "o": [
     "Dans la baie de Fundy",
     "En mer Méditerranée",
     "Dans le golfe de Gascogne"
    ],
    "r": 0,
    "e": "La baie de Fundy, au Canada, connaît les plus grandes marées du monde."
   },
   {
    "q": "Quel écart de hauteur connaît la baie de Fundy ?",
    "o": [
     "Plus de quinze mètres",
     "Environ deux mètres",
     "Plus de cent mètres"
    ],
    "r": 0,
    "e": "Le texte mentionne un écart supérieur à quinze mètres."
   },
   {
    "q": "Quel écart connaît en général la Méditerranée ?",
    "o": [
     "Quelques dizaines de centimètres",
     "Plus de dix mètres",
     "Aucun écart"
    ],
    "r": 0,
    "e": "En Méditerranée, l'écart dépasse rarement quelques dizaines de centimètres."
   },
   {
    "q": "Combien de temps s'écoule entre deux pleines mers ?",
    "o": [
     "Un peu plus de douze heures",
     "Environ six heures",
     "Environ vingt-quatre heures"
    ],
    "r": 0,
    "e": "Le texte donne un peu plus de douze heures entre deux pleines mers."
   },
   {
    "q": "De combien les heures de marée avancent-elles chaque jour ?",
    "o": [
     "D'environ cinquante minutes",
     "D'environ cinq minutes",
     "D'environ trois heures"
    ],
    "r": 0,
    "e": "Le décalage quotidien est d'environ cinquante minutes."
   },
   {
    "q": "Pourquoi l'amplitude varie-t-elle selon les lieux ?",
    "o": [
     "Parce que la forme des côtes modifie la hauteur d'eau",
     "Parce que la Lune change de distance chaque jour",
     "Parce que le sel alourdit l'eau"
    ],
    "r": 0,
    "e": "Dans les golfes étroits, l'eau s'engouffre et l'écart augmente fortement."
   },
   {
    "q": "Pourquoi un port n'a-t-il pas pleine mer à la même heure chaque jour ?",
    "o": [
     "Parce que les marées avancent d'environ cinquante minutes par jour",
     "Parce que la Lune change de forme",
     "Parce que le port se déplace"
    ],
    "r": 0,
    "e": "Le décalage quotidien d'environ cinquante minutes explique ce glissement des horaires."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "La cause et le rythme des marées",
     "La pêche le long des côtes",
     "La forme des vagues en pleine mer"
    ],
    "r": 0,
    "e": "Le texte explique l'origine lunaire des marées et leur rythme quotidien."
   }
  ]
 },
 {
  "id": "a1",
  "theme": "nature",
  "niveau": 1,
  "titre": "Pourquoi les feuilles deviennent rouges avant de tomber",
  "corps": "En été, les feuilles sont vertes parce qu'elles contiennent de la chlorophylle. Cette molécule capte la lumière du soleil et permet à l'arbre de fabriquer du sucre, sa nourriture. Elle est très active, et sa couleur cache toutes les autres. Les feuilles contiennent aussi des pigments jaunes et orange, mais ils restent discrets tant que le vert domine.\n\nÀ l'automne, les jours raccourcissent et la lumière baisse. La production de chlorophylle coûte cher à l'arbre en énergie. Comme les feuilles vont bientôt tomber, cet effort devient inutile : l'arbre cesse donc peu à peu d'en fabriquer. Le vert s'efface et laisse apparaître les pigments jaunes et orange, présents depuis l'été mais invisibles.\n\nChez certains arbres, comme l'érable, un autre phénomène se produit. Les sucres restent dans la feuille au lieu de descendre vers les racines, et forment des pigments rouges, les anthocyanes. Ces pigments jouent peut-être un rôle de protection contre une lumière trop forte. Plus les nuits sont fraîches et les journées ensoleillées, plus ce rouge est vif.\n\nToutes les espèces ne suivent pas ce scénario. Les arbres à aiguilles, comme les pins, gardent leurs feuilles plusieurs années et restent verts tout l'hiver.\n\nEnsuite, l'arbre ferme la base du pétiole. La feuille se détache et tombe. Elle se décompose au sol et lui rend une partie des éléments qu'elle avait puisés.",
  "q": [
   {
    "q": "De quoi la chlorophylle a-t-elle besoin pour fonctionner ?",
    "o": [
     "De la lumière du soleil",
     "De l'air froid de l'automne",
     "Du sucre déjà stocké dans l'arbre"
    ],
    "r": 0,
    "e": "Le texte précise que la chlorophylle capte la lumière du soleil pour fabriquer du sucre."
   },
   {
    "q": "Que permet à l'arbre de fabriquer la chlorophylle ?",
    "o": [
     "Du sucre",
     "De l'eau",
     "Du bois"
    ],
    "r": 0,
    "e": "La chlorophylle capte la lumière et permet à l'arbre de fabriquer du sucre, sa nourriture."
   },
   {
    "q": "Pourquoi les pigments jaunes restent-ils invisibles en été ?",
    "o": [
     "Le vert de la chlorophylle les masque",
     "Ils n'existent pas encore dans la feuille",
     "La lumière du soleil les détruit"
    ],
    "r": 0,
    "e": "Ces pigments sont présents depuis l'été, mais la couleur verte de la chlorophylle les cache."
   },
   {
    "q": "Qu'est-ce qui change à l'automne ?",
    "o": [
     "Les jours raccourcissent et la lumière baisse",
     "La température du sol augmente",
     "Les racines cessent de boire"
    ],
    "r": 0,
    "e": "Le texte cite la baisse de la lumière et le raccourcissement des jours comme point de départ."
   },
   {
    "q": "Pourquoi l'arbre cesse-t-il de produire de la chlorophylle ?",
    "o": [
     "Parce que cet effort devient inutile avant la chute",
     "Parce que le sol devient trop froid",
     "Parce que les racines refusent l'eau"
    ],
    "r": 0,
    "e": "La production coûte cher et n'a plus d'intérêt quand la feuille va tomber."
   },
   {
    "q": "Quel arbre est cité pour ses pigments rouges ?",
    "o": [
     "L'érable",
     "Le chêne",
     "Le bouleau"
    ],
    "r": 0,
    "e": "L'érable est le seul arbre nommé dans le passage sur les pigments rouges."
   },
   {
    "q": "Comment s'appellent les pigments rouges ?",
    "o": [
     "Les anthocyanes",
     "Les carotènes",
     "Les tanins"
    ],
    "r": 0,
    "e": "Le texte nomme anthocyanes les pigments rouges formés à partir des sucres restés dans la feuille."
   },
   {
    "q": "Que deviennent les sucres chez l'érable en automne ?",
    "o": [
     "Ils restent dans la feuille",
     "Ils descendent vers les racines",
     "Ils sont rejetés par le pétiole"
    ],
    "r": 0,
    "e": "D'après le texte, les sucres restent dans la feuille et servent à former les pigments rouges."
   },
   {
    "q": "Quel rôle les anthocyanes pourraient-elles jouer ?",
    "o": [
     "Protéger la feuille d'une lumière trop forte",
     "Nourrir les oiseaux migrateurs",
     "Accélérer la chute des feuilles"
    ],
    "r": 0,
    "e": "Le texte présente cette protection comme une hypothèse possible, pas comme une certitude."
   },
   {
    "q": "Quelles conditions rendent le rouge plus vif ?",
    "o": [
     "Des nuits fraîches et des journées ensoleillées",
     "Des nuits douces et des journées pluvieuses",
     "Des journées courtes et un ciel couvert"
    ],
    "r": 0,
    "e": "Le texte lie l'intensité du rouge aux nuits fraîches et aux journées ensoleillées."
   },
   {
    "q": "Que font les pins en hiver ?",
    "o": [
     "Ils gardent leurs aiguilles et restent verts",
     "Ils perdent toutes leurs aiguilles",
     "Ils deviennent rouges puis tombent"
    ],
    "r": 0,
    "e": "Les arbres à aiguilles conservent leurs feuilles plusieurs années et restent verts."
   },
   {
    "q": "Que fait l'arbre à la base du pétiole ?",
    "o": [
     "Il la ferme",
     "Il l'allonge",
     "Il la colore en rouge"
    ],
    "r": 0,
    "e": "Le texte indique que l'arbre ferme la base du pétiole avant la chute de la feuille."
   },
   {
    "q": "Que se passe-t-il une fois le pétiole fermé ?",
    "o": [
     "La feuille se détache et tombe",
     "La feuille verdit à nouveau",
     "L'arbre produit plus de chlorophylle"
    ],
    "r": 0,
    "e": "La fermeture du pétiole est suivie par le détachement puis la chute de la feuille."
   },
   {
    "q": "Que devient la feuille tombée ?",
    "o": [
     "Elle se décompose et rend des éléments au sol",
     "Elle remonte dans l'arbre",
     "Elle reste intacte des années"
    ],
    "r": 0,
    "e": "La feuille morte se décompose et restitue au sol une partie des éléments puisés."
   },
   {
    "q": "Un automne aux nuits douces et au ciel couvert donnera probablement…",
    "o": [
     "des rouges moins vifs",
     "des feuilles plus vertes qu'en été",
     "des feuilles qui ne tomberont pas"
    ],
    "r": 0,
    "e": "Le rouge est vif quand les nuits sont fraîches et les journées ensoleillées, donc l'inverse donne des couleurs plus ternes."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "Les causes du changement de couleur des feuilles",
     "La culture des érables en Europe",
     "Le rôle des racines pendant l'hiver"
    ],
    "r": 0,
    "e": "Le texte explique pourquoi et comment les feuilles changent de couleur avant de tomber."
   },
   {
    "q": "Pourquoi l'auteur commence-t-il par le rôle de la chlorophylle ?",
    "o": [
     "Pour expliquer pourquoi le vert domine avant l'automne",
     "Pour vanter les qualités des arbres feuillus",
     "Pour décrire la fabrication du sucre dans l'industrie"
    ],
    "r": 0,
    "e": "Comprendre le rôle du vert permet de comprendre pourquoi sa disparition révèle les autres couleurs."
   }
  ]
 },
 {
  "id": "a11",
  "theme": "nature",
  "niveau": 1,
  "titre": "Comment les graines voyagent sans pattes",
  "corps": "Une plante ne peut pas marcher. Pourtant, ses graines s'installent souvent loin du pied mère. Elles voyagent de plusieurs façons.\n\nCertaines graines sont légères et portent une aile ou une touffe de poils. Le vent les emporte : c'est le cas du pissenlit, dont chaque graine ressemble à un petit parachute. L'érable utilise une aile qui la fait tourner comme une hélice. Le tilleul, lui, s'accroche à une feuille mince qui ralentit sa chute et l'écarte du tronc.\n\nL'eau transporte aussi des graines. La noix de coco, avec sa coque épaisse et ses fibres, peut flotter des semaines et traverser des mers avant de s'échouer sur une plage. Les courants de rivière emportent de la même manière les graines des plantes de berge.\n\nLes animaux jouent un rôle tout aussi important. Certains fruits sont mangés, et les graines résistent au passage dans le tube digestif : elles ressortent intactes, parfois à plusieurs kilomètres. D'autres s'accrochent au pelage grâce à des crochets, comme la bardane. En se frottant, l'animal libère ensuite la graine ailleurs.\n\nIl existe enfin des voyageuses explosives. La capsule du géranium sauvage sèche et se tend, puis projette ses graines à quelques mètres quand on la touche.\n\nCes voyages expliquent pourquoi des plantes semblables poussent sur des îles séparées par l'océan. Ils évitent aussi que les jeunes plants étouffent sous leur propre mère, en concurrence pour la même lumière et la même eau.",
  "q": [
   {
    "q": "Une plante peut-elle se déplacer pour semer ses graines ?",
    "o": [
     "Non, elle reste sur place",
     "Oui, en allongeant ses racines",
     "Oui, en penchant ses tiges"
    ],
    "r": 0,
    "e": "Le texte rappelle qu'une plante ne peut pas marcher : ce sont les graines qui voyagent."
   },
   {
    "q": "Pourquoi les graines s'installent-elles loin du pied mère ?",
    "o": [
     "Parce qu'elles sont transportées",
     "Parce qu'elles rampent",
     "Parce que le sol les pousse"
    ],
    "r": 0,
    "e": "Le déplacement des graines leur permet de pousser à distance de la plante d'origine."
   },
   {
    "q": "Comment voyagent les graines légères ?",
    "o": [
     "Portées par le vent",
     "Portées par les rivières",
     "Transportées par les oiseaux"
    ],
    "r": 0,
    "e": "Les graines légères, munies d'une aile ou de poils, sont emportées par le vent."
   },
   {
    "q": "Quelle graine ressemble à un petit parachute ?",
    "o": [
     "Celle du pissenlit",
     "Celle du tilleul",
     "Celle de la bardane"
    ],
    "r": 0,
    "e": "Le texte compare la graine de pissenlit à un petit parachute."
   },
   {
    "q": "Comment la graine d'érable tourne-t-elle en l'air ?",
    "o": [
     "Grâce à une aile qui fait hélice",
     "Grâce à une touffe de poils",
     "Grâce à une coque remplie d'air"
    ],
    "r": 0,
    "e": "L'aile de la graine d'érable la fait tourner comme une hélice."
   },
   {
    "q": "Comment le tilleul ralentit-il la chute de sa graine ?",
    "o": [
     "Grâce à une feuille mince",
     "Grâce à des crochets",
     "Grâce à ses fibres"
    ],
    "r": 0,
    "e": "Une feuille mince freine la chute et écarte la graine du tronc."
   },
   {
    "q": "Qu'est-ce qui transporte la noix de coco ?",
    "o": [
     "L'eau des mers",
     "Le vent des dunes",
     "Les singes"
    ],
    "r": 0,
    "e": "La noix de coco peut flotter et être portée par la mer."
   },
   {
    "q": "Combien de temps une noix de coco peut-elle flotter ?",
    "o": [
     "Des semaines",
     "Quelques minutes",
     "Un seul jour"
    ],
    "r": 0,
    "e": "Le texte indique une flottaison de plusieurs semaines."
   },
   {
    "q": "Que devient une graine avalée par un animal ?",
    "o": [
     "Elle résiste au passage dans le tube digestif",
     "Elle est toujours détruite",
     "Elle germe dans l'estomac"
    ],
    "r": 0,
    "e": "Certaines graines traversent le tube digestif sans être détruites."
   },
   {
    "q": "Comment la bardane s'accroche-t-elle au pelage ?",
    "o": [
     "Grâce à des crochets",
     "Grâce à un liquide collant",
     "Grâce à ses poils doux"
    ],
    "r": 0,
    "e": "La bardane est citée pour ses crochets qui s'accrochent au pelage."
   },
   {
    "q": "Comment le géranium sauvage disperse-t-il ses graines ?",
    "o": [
     "Il les projette en se tendant",
     "Il les enterre",
     "Il les colle à ses feuilles"
    ],
    "r": 0,
    "e": "La capsule du géranium sèche, se tend et projette les graines à quelques mètres."
   },
   {
    "q": "Comment la graine se libère-t-elle du pelage ?",
    "o": [
     "Quand l'animal se frotte",
     "Quand il pleut",
     "Quand elle sèche"
    ],
    "r": 0,
    "e": "En se frottant, l'animal détache la graine et la laisse ailleurs."
   },
   {
    "q": "Pourquoi les graines doivent-elles s'éloigner de la plante mère ?",
    "o": [
     "Pour éviter la concurrence pour la lumière et l'eau",
     "Pour trouver un sol plus chaud",
     "Pour attirer les insectes"
    ],
    "r": 0,
    "e": "Trop proches, les jeunes plants manqueraient de lumière et d'eau."
   },
   {
    "q": "Que expliquent ces voyages ?",
    "o": [
     "La présence de plantes semblables sur des îles séparées",
     "La couleur des fleurs tropicales",
     "La taille des arbres les plus anciens"
    ],
    "r": 0,
    "e": "Le transport des graines par la mer explique la présence de plantes proches sur des îles éloignées."
   },
   {
    "q": "Pourquoi une graine lourde et lisse voyage-t-elle mal par le vent ?",
    "o": [
     "Parce qu'elle est trop lourde pour être emportée",
     "Parce qu'elle est trop sombre",
     "Parce qu'elle pousse trop vite"
    ],
    "r": 0,
    "e": "Le vent ne transporte que des graines légères, souvent munies d'une aile ou de poils."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "Les moyens de transport des graines",
     "La culture des plantes en serre",
     "La vie des insectes pollinisateurs"
    ],
    "r": 0,
    "e": "Le texte décrit le vent, l'eau, les animaux et la projection comme vecteurs des graines."
   },
   {
    "q": "Pourquoi l'auteur passe-t-il du vent à l'eau puis aux animaux ?",
    "o": [
     "Pour présenter les différents modes de dispersion",
     "Pour classer les plantes par taille",
     "Pour expliquer la germination"
    ],
    "r": 0,
    "e": "Chaque paragraphe illustre un mode de transport différent."
   }
  ]
 },
 {
  "id": "a6",
  "theme": "nature",
  "niveau": 1,
  "titre": "Ce que racontent les cernes des arbres",
  "corps": "Quand on coupe un tronc, on voit des cercles concentriques. Ce sont les cernes de croissance.\n\nUn arbre produit du bois nouveau sous son écorce, juste à la limite du tronc. Au printemps, quand l'eau et la lumière sont abondantes, il pousse vite : le bois formé est clair et tendre. En été, la croissance ralentit et le bois devient plus sombre et plus dense. Une année complète forme donc deux zones, claire puis foncée, qui se lisent comme un seul cerne.\n\nLes cernes ne se ressemblent pas tous. Une année favorable donne un cerne large ; une année de sécheresse donne un cerne étroit. En comptant les cernes, on connaît l'âge de l'arbre. En comparant leur épaisseur, on reconstitue les anciens climats. Cette méthode s'appelle la dendrochronologie.\n\nLes chercheurs vont plus loin. Ils comparent les suites de cernes de plusieurs arbres d'une même région. Les bonnes et les mauvaises années laissent des motifs semblables, ce qui permet d'aligner les chronologies et de remonter loin dans le temps. Certains pins du grand Ouest américain vivent depuis plus de quatre mille ans : leurs cernes conservent la trace de sécheresses très anciennes.\n\nLa méthode a ses limites. Elle exige des arbres à croissance saisonnière marquée. En forêt tropicale, où la croissance se poursuit toute l'année, les cernes sont souvent peu lisibles. Elle a pourtant permis de dater des charpentes, des instruments de musique et des tableaux anciens.",
  "q": [
   {
    "q": "Que voit-on quand on coupe un tronc ?",
    "o": [
     "Des cercles concentriques",
     "Des lignes parallèles",
     "Un motif en étoile"
    ],
    "r": 0,
    "e": "La coupe du tronc montre des cercles concentriques, les cernes de croissance."
   },
   {
    "q": "Où l'arbre produit-il son bois nouveau ?",
    "o": [
     "Sous son écorce, à la limite du tronc",
     "Au centre du tronc",
     "Dans les racines les plus fines"
    ],
    "r": 0,
    "e": "Le bois nouveau se forme sous l'écorce, à la limite du tronc."
   },
   {
    "q": "À quelle saison le bois clair se forme-t-il ?",
    "o": [
     "Au printemps",
     "En automne",
     "En hiver"
    ],
    "r": 0,
    "e": "Le bois clair et tendre se forme au printemps, quand l'arbre pousse vite."
   },
   {
    "q": "Pourquoi le bois de printemps est-il clair ?",
    "o": [
     "Parce que l'arbre pousse vite",
     "Parce qu'il contient plus d'écorce",
     "Parce qu'il est gelé"
    ],
    "r": 0,
    "e": "La croissance rapide du printemps produit un bois clair et tendre."
   },
   {
    "q": "Comment est le bois formé en été ?",
    "o": [
     "Plus sombre et plus dense",
     "Plus clair et plus tendre",
     "Plus léger que l'écorce"
    ],
    "r": 0,
    "e": "En été, la croissance ralentit et le bois devient plus sombre et plus dense."
   },
   {
    "q": "Combien de zones forme une année complète ?",
    "o": [
     "Deux",
     "Une",
     "Quatre"
    ],
    "r": 0,
    "e": "Une année donne deux zones, claire puis foncée, lues comme un seul cerne."
   },
   {
    "q": "Que donne une année favorable ?",
    "o": [
     "Un cerne large",
     "Un cerne étroit",
     "Un cerne invisible"
    ],
    "r": 0,
    "e": "Le texte associe les bonnes années à des cernes larges."
   },
   {
    "q": "Que donne une année de sécheresse ?",
    "o": [
     "Un cerne étroit",
     "Un cerne plus clair",
     "Deux cernes par an"
    ],
    "r": 0,
    "e": "Une année sèche produit un cerne étroit."
   },
   {
    "q": "Que connaît-on en comptant les cernes ?",
    "o": [
     "L'âge de l'arbre",
     "La profondeur des racines",
     "La hauteur de l'arbre"
    ],
    "r": 0,
    "e": "Chaque année ajoutant un cerne, le comptage donne l'âge de l'arbre."
   },
   {
    "q": "Que reconstitue-t-on en comparant leur épaisseur ?",
    "o": [
     "Les anciens climats",
     "La couleur du sol",
     "Le nombre de branches"
    ],
    "r": 0,
    "e": "L'épaisseur des cernes renseigne sur les conditions climatiques passées."
   },
   {
    "q": "Comment s'appelle cette méthode ?",
    "o": [
     "La dendrochronologie",
     "La sylviculture",
     "La palynologie"
    ],
    "r": 0,
    "e": "Le texte nomme dendrochronologie l'étude des cernes de croissance."
   },
   {
    "q": "Combien de temps vivent certains pins du grand Ouest américain ?",
    "o": [
     "Plus de quatre mille ans",
     "Environ cent ans",
     "Moins de cinquante ans"
    ],
    "r": 0,
    "e": "Le texte cite des pins vivant depuis plus de quatre mille ans."
   },
   {
    "q": "Pourquoi la méthode est-elle peu efficace en forêt tropicale ?",
    "o": [
     "Parce que la croissance s'y poursuit toute l'année",
     "Parce que les arbres y sont trop jeunes",
     "Parce que le bois y est trop dur"
    ],
    "r": 0,
    "e": "Sans arrêt de croissance saisonnier, les cernes restent peu lisibles."
   },
   {
    "q": "Qu'a-t-on pu dater grâce à cette méthode ?",
    "o": [
     "Des charpentes et des instruments anciens",
     "Des fossiles marins",
     "Des poteries préhistoriques"
    ],
    "r": 0,
    "e": "Le texte cite la datation de charpentes, d'instruments et de tableaux anciens."
   },
   {
    "q": "Pourquoi peut-on comparer les cernes de plusieurs arbres ?",
    "o": [
     "Parce que les mêmes années y laissent des marques semblables",
     "Parce que tous les arbres ont le même âge",
     "Parce que leur écorce est identique"
    ],
    "r": 0,
    "e": "Les bonnes et mauvaises années produisent des motifs comparables d'un arbre à l'autre."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "Ce que les cernes révèlent sur un arbre et son passé",
     "Les techniques de sciage du bois",
     "Les espèces d'arbres des forêts tropicales"
    ],
    "r": 0,
    "e": "Le texte explique comment se forment les cernes et ce qu'ils permettent de savoir."
   },
   {
    "q": "Pourquoi l'auteur décrit-il d'abord la croissance du bois ?",
    "o": [
     "Pour expliquer comment naît chaque cerne",
     "Pour vanter la qualité du bois de charpente",
     "Pour décrire l'écorce des vieux arbres"
    ],
    "r": 0,
    "e": "Comprendre la croissance printanière et estivale est nécessaire pour lire les cernes."
   }
  ]
 },
 {
  "id": "a14",
  "theme": "sport",
  "niveau": 1,
  "titre": "Athènes 1896, les Jeux recommencent",
  "corps": "En 1896, Athènes accueille les premiers Jeux olympiques modernes. L'événement est organisé grâce à l'action de Pierre de Coubertin, qui veut faire revivre une tradition antique. Il avait créé le Comité international olympique deux ans plus tôt.\n\nLes moyens sont modestes. Les épreuves se déroulent dans un stade de marbre reconstruit pour l'occasion, capable d'accueillir des dizaines de milliers de spectateurs. Neuf sports figurent au programme, pour une quarantaine d'épreuves. Quatorze pays envoient des athlètes, soit environ deux cent quarante sportifs. Aucune femme ne participe.\n\nLes disciplines rappellent celles de l'Antiquité : course, lutte, lancer du disque, saut. On y ajoute des sports modernes comme le tennis et le cyclisme. Les vainqueurs reçoivent une médaille d'argent et une branche d'olivier ; il n'y a pas encore de médaille d'or.\n\nLe marathon, couru pour la première fois, reste le moment fort. Il est remporté par un berger grec, Spyrídon Loúis, qui devient un héros national.\n\nLe succès est réel, mais l'organisation reste fragile. Les Jeux suivants, à Paris en 1900, sont dispersés sur plusieurs mois, mêlés à une exposition universelle, et attirent moins de public. Il faudra du temps pour que le rendez-vous devienne régulier et que les femmes y soient admises.",
  "q": [
   {
    "q": "En quelle année ont lieu les premiers Jeux olympiques modernes ?",
    "o": [
     "En 1896",
     "En 1900",
     "En 1924"
    ],
    "r": 0,
    "e": "Le texte date les premiers Jeux modernes de 1896."
   },
   {
    "q": "Quelle ville les accueille ?",
    "o": [
     "Athènes",
     "Paris",
     "Rome"
    ],
    "r": 0,
    "e": "Athènes accueille les premiers Jeux modernes."
   },
   {
    "q": "Qui a porté le projet de ces Jeux ?",
    "o": [
     "Pierre de Coubertin",
     "Jules Ferry",
     "Henri Didon"
    ],
    "r": 0,
    "e": "Le texte attribue l'organisation à l'action de Pierre de Coubertin."
   },
   {
    "q": "Quand Coubertin avait-il créé le Comité international olympique ?",
    "o": [
     "Deux ans plus tôt",
     "Dix ans plus tôt",
     "La même année"
    ],
    "r": 0,
    "e": "Le comité a été créé deux ans avant les Jeux de 1896."
   },
   {
    "q": "Dans quel type de stade se déroulent les épreuves ?",
    "o": [
     "Un stade de marbre reconstruit",
     "Un stade en bois neuf",
     "Un cirque romain intact"
    ],
    "r": 0,
    "e": "Les épreuves ont lieu dans un stade de marbre reconstruit pour l'occasion."
   },
   {
    "q": "Combien de sports figurent au programme ?",
    "o": [
     "Neuf",
     "Trois",
     "Vingt"
    ],
    "r": 0,
    "e": "Le programme compte neuf sports, pour une quarantaine d'épreuves."
   },
   {
    "q": "Combien d'épreuves sont organisées environ ?",
    "o": [
     "Une quarantaine",
     "Une dizaine",
     "Deux cents"
    ],
    "r": 0,
    "e": "Le texte parle d'une quarantaine d'épreuves."
   },
   {
    "q": "Combien de pays participent ?",
    "o": [
     "Quatorze",
     "Quarante",
     "Cinq"
    ],
    "r": 0,
    "e": "Quatorze pays envoient des athlètes."
   },
   {
    "q": "Combien d'athlètes participent environ ?",
    "o": [
     "Environ 240",
     "Environ 1 200",
     "Environ 40"
    ],
    "r": 0,
    "e": "Le texte parle d'environ deux cent quarante sportifs."
   },
   {
    "q": "Les femmes participent-elles ?",
    "o": [
     "Non, aucune",
     "Oui, nombreuses",
     "Oui, mais dans une seule épreuve"
    ],
    "r": 0,
    "e": "Le texte indique explicitement qu'aucune femme ne participe."
   },
   {
    "q": "Quelles disciplines rappellent l'Antiquité ?",
    "o": [
     "Course, lutte, disque et saut",
     "Tennis, cyclisme et escrime",
     "Natation, aviron et voile"
    ],
    "r": 0,
    "e": "Le texte cite la course, la lutte, le lancer du disque et le saut."
   },
   {
    "q": "Quels sports modernes sont ajoutés ?",
    "o": [
     "Le tennis et le cyclisme",
     "Le judo et le basket",
     "Le ski et le hockey"
    ],
    "r": 0,
    "e": "Le tennis et le cyclisme font partie des ajouts modernes."
   },
   {
    "q": "Que reçoivent les vainqueurs ?",
    "o": [
     "Une médaille d'argent et une branche d'olivier",
     "Une médaille d'or et une coupe",
     "Un diplôme et une pièce d'or"
    ],
    "r": 0,
    "e": "Le texte mentionne une médaille d'argent et une branche d'olivier."
   },
   {
    "q": "Qui remporte le marathon de 1896 ?",
    "o": [
     "Un berger grec",
     "Un coureur français",
     "Un soldat américain"
    ],
    "r": 0,
    "e": "Le marathon est remporté par le berger grec Spyrídon Loúis."
   },
   {
    "q": "Pourquoi les Jeux de Paris en 1900 attirent-ils moins de public ?",
    "o": [
     "Parce qu'ils sont dispersés sur plusieurs mois",
     "Parce qu'ils se tiennent en hiver",
     "Parce qu'aucun pays n'y participe"
    ],
    "r": 0,
    "e": "L'étalement des épreuves sur plusieurs mois nuit à la visibilité de l'événement."
   },
   {
    "q": "Pourquoi l'organisation de 1896 est-elle fragile ?",
    "o": [
     "Parce que les moyens sont modestes",
     "Parce que le stade est trop grand",
     "Parce que les athlètes sont trop nombreux"
    ],
    "r": 0,
    "e": "Le texte souligne la modestie des moyens disponibles."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "La naissance des Jeux olympiques modernes",
     "Les records des athlètes grecs",
     "La construction des stades antiques"
    ],
    "r": 0,
    "e": "Le texte raconte l'édition de 1896 et son contexte."
   }
  ]
 },
 {
  "id": "a4",
  "theme": "sport",
  "niveau": 1,
  "titre": "D'où vient la distance du marathon",
  "corps": "Le marathon est une course à pied de 42,195 kilomètres. Cette distance exacte n'a pourtant pas toujours existé.\n\nLe nom vient d'une légende grecque. Un messager aurait couru de la ville de Marathon jusqu'à Athènes pour annoncer une victoire, puis serait mort d'épuisement. Les historiens discutent encore de ce récit : aucun texte antique ne le raconte exactement ainsi.\n\nAux premiers Jeux olympiques modernes, à Athènes en 1896, la course longue mesurait environ quarante kilomètres. Pendant plusieurs années, les organisateurs ont choisi des parcours variables. Le marathon de Londres en 1908, tracé pour finir devant une tribune précise, mesurait déjà 42,195 kilomètres. C'est seulement en 1921 que la fédération internationale a fixé cette distance comme référence mondiale.\n\nAujourd'hui, des centaines de marathons sont organisés chaque année. Les meilleurs coureurs mettent un peu plus de deux heures. La plupart des participants visent surtout à terminer la course, ce qui demande déjà des mois d'entraînement.\n\nLa course a longtemps été réservée aux hommes dans les grandes compétitions. Le marathon féminin n'est entré aux Jeux olympiques qu'en 1984, à Los Angeles.\n\nSur le parcours, un moment difficile est bien connu : beaucoup de coureurs faiblissent après trente kilomètres, quand les réserves de sucre s'épuisent. Les ravitaillements en eau et en boissons sucrées servent à retarder cette baisse.",
  "q": [
   {
    "q": "Quelle est la distance exacte du marathon ?",
    "o": [
     "42,195 kilomètres",
     "40 kilomètres",
     "45,5 kilomètres"
    ],
    "r": 0,
    "e": "Le texte donne 42,195 kilomètres comme distance actuelle."
   },
   {
    "q": "D'où vient le nom du marathon ?",
    "o": [
     "D'une légende grecque",
     "D'un empereur romain",
     "D'un village italien"
    ],
    "r": 0,
    "e": "Le nom vient d'une légende grecque racontant une course entre Marathon et Athènes."
   },
   {
    "q": "Que raconte cette légende ?",
    "o": [
     "Un messager court de Marathon à Athènes",
     "Un soldat traverse la mer en barque",
     "Un berger cherche son troupeau"
    ],
    "r": 0,
    "e": "Le messager aurait couru de Marathon jusqu'à Athènes pour annoncer une victoire."
   },
   {
    "q": "Que serait-il arrivé au messager après son annonce ?",
    "o": [
     "Il serait mort d'épuisement",
     "Il serait devenu roi",
     "Il serait reparti aussitôt"
    ],
    "r": 0,
    "e": "La légende rapporte qu'il serait mort d'épuisement après avoir annoncé la victoire."
   },
   {
    "q": "Que disent les historiens de ce récit ?",
    "o": [
     "Ils en discutent encore",
     "Ils l'ont prouvé par des fouilles",
     "Ils l'ont totalement oublié"
    ],
    "r": 0,
    "e": "Le texte précise qu'aucun récit antique ne rapporte exactement cette version."
   },
   {
    "q": "Où et quand ont lieu les premiers Jeux olympiques modernes ?",
    "o": [
     "À Athènes en 1896",
     "À Paris en 1900",
     "À Londres en 1908"
    ],
    "r": 0,
    "e": "Le texte situe les premiers Jeux modernes à Athènes, en 1896."
   },
   {
    "q": "Combien mesurait la course longue en 1896 ?",
    "o": [
     "Environ quarante kilomètres",
     "Environ vingt kilomètres",
     "Environ soixante kilomètres"
    ],
    "r": 0,
    "e": "En 1896, la course mesurait environ quarante kilomètres."
   },
   {
    "q": "Quelle course de 1908 mesurait déjà 42,195 kilomètres ?",
    "o": [
     "Le marathon de Londres",
     "Le marathon de Paris",
     "Le marathon de Boston"
    ],
    "r": 0,
    "e": "Le parcours de Londres en 1908 atteignait déjà cette distance."
   },
   {
    "q": "Quand la distance actuelle a-t-elle été fixée ?",
    "o": [
     "En 1921",
     "En 1896",
     "En 1950"
    ],
    "r": 0,
    "e": "C'est en 1921 que la fédération internationale a fixé la distance."
   },
   {
    "q": "Qui a fixé cette distance ?",
    "o": [
     "La fédération internationale",
     "Le comité d'Athènes",
     "Les coureurs eux-mêmes"
    ],
    "r": 0,
    "e": "Le texte attribue la décision à la fédération internationale."
   },
   {
    "q": "Combien de temps mettent les meilleurs coureurs ?",
    "o": [
     "Un peu plus de deux heures",
     "Environ une heure",
     "Près de quatre heures"
    ],
    "r": 0,
    "e": "Le texte indique un peu plus de deux heures pour les meilleurs."
   },
   {
    "q": "Que visent la plupart des participants ?",
    "o": [
     "Terminer la course",
     "Battre le record du monde",
     "Arriver dans les dix premiers"
    ],
    "r": 0,
    "e": "La plupart cherchent d'abord à finir, ce qui demande déjà des mois de préparation."
   },
   {
    "q": "Quand le marathon féminin est-il entré aux Jeux olympiques ?",
    "o": [
     "En 1984",
     "En 1921",
     "En 1960"
    ],
    "r": 0,
    "e": "Le marathon féminin n'a été admis aux Jeux qu'en 1984, à Los Angeles."
   },
   {
    "q": "À quel moment du parcours beaucoup de coureurs faiblissent-ils ?",
    "o": [
     "Après trente kilomètres",
     "Dès le cinquième kilomètre",
     "Dans les cent derniers mètres"
    ],
    "r": 0,
    "e": "Le texte situe la baisse vers trente kilomètres, quand les réserves de sucre s'épuisent."
   },
   {
    "q": "Pourquoi les organisateurs installent-ils des ravitaillements ?",
    "o": [
     "Pour retarder l'épuisement des coureurs",
     "Pour mesurer la vitesse du vent",
     "Pour compter les participants"
    ],
    "r": 0,
    "e": "Eau et boissons sucrées aident à retarder la baisse d'énergie."
   },
   {
    "q": "Pourquoi les parcours ont-ils longtemps varié ?",
    "o": [
     "Parce que la distance n'était pas encore fixée",
     "Parce que les villes changeaient de nom",
     "Parce que les coureurs refusaient la plaine"
    ],
    "r": 0,
    "e": "Tant que la distance n'était pas officielle, chaque organisation choisissait son parcours."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "L'origine et la distance du marathon",
     "Les records du monde du cent mètres",
     "La vie des athlètes grecs"
    ],
    "r": 0,
    "e": "Le texte raconte l'origine du nom et la fixation de la distance."
   }
  ]
 },
 {
  "id": "a9",
  "theme": "sport",
  "niveau": 1,
  "titre": "Pourquoi les cyclistes roulent en peloton",
  "corps": "Dans une course cycliste, les coureurs passent une grande partie du temps groupés. Ce n'est pas seulement pour discuter : c'est une question de physique.\n\nUn cycliste qui roule vite doit fendre l'air. Une partie de son effort sert à repousser cet air. En se plaçant juste derrière un autre coureur, il pénètre dans une zone où l'air est déjà écarté et où la pression est plus faible. La résistance diminue fortement.\n\nLes mesures faites en soufflerie montrent qu'à quarante kilomètres par heure, un coureur bien abrité économise près d'un tiers de son effort. Le deuxième de la file profite déjà de l'essentiel de ce gain ; les suivants en bénéficient moins, mais encore nettement.\n\nLe peloton fonctionne donc comme un abri collectif. Les équipes organisent des relais : chacun roule quelques centaines de mètres en tête, puis s'écarte pour laisser passer un coéquipier. Le coureur qui reste à l'abri garde ses forces pour la fin.\n\nLe placement compte autant que la condition physique. Par vent de côté, les coureurs ne restent pas en file : ils s'alignent en éventail, décalés sur le côté, pour profiter de l'abri sans être poussés hors de la route. Les équipes les plus disciplinées imposent ce schéma à tout un groupe.\n\nRouler en peloton présente aussi des risques. Les chutes sont fréquentes dans les premières positions, où les coureurs se disputent la meilleure place. C'est le prix de cette économie d'énergie.",
  "q": [
   {
    "q": "Pourquoi les cyclistes roulent-ils en groupe ?",
    "o": [
     "Pour réduire la résistance de l'air",
     "Pour discuter de la course",
     "Pour respecter le règlement"
    ],
    "r": 0,
    "e": "Le regroupement diminue la résistance de l'air, ce qui économise de l'énergie."
   },
   {
    "q": "Que doit faire un cycliste qui roule vite ?",
    "o": [
     "Fendre l'air",
     "Éviter les freins",
     "Changer de vitesse sans cesse"
    ],
    "r": 0,
    "e": "Le cycliste doit écarter l'air devant lui, ce qui coûte de l'effort."
   },
   {
    "q": "Que devient la pression de l'air derrière un coureur ?",
    "o": [
     "Elle devient plus faible",
     "Elle devient plus forte",
     "Elle reste identique"
    ],
    "r": 0,
    "e": "Derrière un coureur, l'air est déjà écarté et la pression baisse."
   },
   {
    "q": "Où les mesures ont-elles été réalisées ?",
    "o": [
     "En soufflerie",
     "Sur un vélodrome",
     "En montagne"
    ],
    "r": 0,
    "e": "Le texte cite des mesures faites en soufflerie."
   },
   {
    "q": "À quelle vitesse ces mesures sont-elles données ?",
    "o": [
     "Quarante kilomètres par heure",
     "Vingt kilomètres par heure",
     "Soixante-dix kilomètres par heure"
    ],
    "r": 0,
    "e": "Le chiffre d'économie est donné pour quarante kilomètres par heure."
   },
   {
    "q": "Quelle part d'effort un coureur abrité économise-t-il ?",
    "o": [
     "Près d'un tiers",
     "Près de la moitié",
     "Environ un dixième"
    ],
    "r": 0,
    "e": "Le texte parle d'une économie proche d'un tiers de l'effort."
   },
   {
    "q": "Qui profite de l'essentiel de ce gain ?",
    "o": [
     "Le deuxième de la file",
     "Le dernier du peloton",
     "Le premier de la course"
    ],
    "r": 0,
    "e": "Le coureur placé juste derrière le premier bénéficie déjà de l'essentiel de l'abri."
   },
   {
    "q": "Comment les équipes organisent-elles les relais ?",
    "o": [
     "Chacun roule quelques centaines de mètres en tête",
     "Chacun roule une heure en tête",
     "Chacun garde sa place tout le long"
    ],
    "r": 0,
    "e": "Les relais consistent à passer tour à tour en tête sur quelques centaines de mètres."
   },
   {
    "q": "Que fait le coureur après son relais ?",
    "o": [
     "Il s'écarte",
     "Il accélère",
     "Il s'arrête"
    ],
    "r": 0,
    "e": "Après son passage en tête, le coureur s'écarte pour laisser la place."
   },
   {
    "q": "Comment se placent les coureurs par vent de côté ?",
    "o": [
     "En éventail, décalés sur le côté",
     "En file, roue dans roue",
     "En cercle autour du leader"
    ],
    "r": 0,
    "e": "Par vent latéral, l'éventail permet de s'abriter sans être poussé hors de la route."
   },
   {
    "q": "Pourquoi le coureur abrité garde-t-il ses forces ?",
    "o": [
     "Pour la fin de la course",
     "Pour les descentes",
     "Pour le départ"
    ],
    "r": 0,
    "e": "L'énergie économisée sert à être plus fort dans les derniers kilomètres."
   },
   {
    "q": "Où les chutes sont-elles fréquentes ?",
    "o": [
     "Dans les premières positions",
     "À l'arrière du peloton",
     "Dans les zones de ravitaillement"
    ],
    "r": 0,
    "e": "La lutte pour les meilleures places expose les coureurs de tête aux chutes."
   },
   {
    "q": "Pourquoi un coureur isolé se fatigue-t-il plus vite ?",
    "o": [
     "Parce qu'il affronte l'air sans abri",
     "Parce que son vélo est plus lourd",
     "Parce qu'il roule plus lentement"
    ],
    "r": 0,
    "e": "Sans coureur devant lui, il supporte seul toute la résistance de l'air."
   },
   {
    "q": "Pourquoi une équipe protège-t-elle souvent son meilleur sprinteur ?",
    "o": [
     "Pour qu'il garde son énergie pour l'arrivée",
     "Pour qu'il évite les contrôles",
     "Pour qu'il roule moins vite"
    ],
    "r": 0,
    "e": "Abrité jusqu'au final, il peut produire un effort bref et puissant au sprint."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "L'intérêt aérodynamique de rouler en peloton",
     "L'histoire du Tour de France",
     "Le réglage des freins de vélo"
    ],
    "r": 0,
    "e": "Le texte explique pourquoi et comment les coureurs s'abritent les uns derrière les autres."
   },
   {
    "q": "Pourquoi l'auteur donne-t-il un chiffre d'économie d'effort ?",
    "o": [
     "Pour rendre concrète l'idée d'abri aérodynamique",
     "Pour comparer deux coureurs célèbres",
     "Pour décrire une étape de montagne"
    ],
    "r": 0,
    "e": "Le chiffre montre l'ampleur réelle du phénomène physique décrit."
   },
   {
    "q": "Pourquoi le placement compte-t-il autant que la forme physique ?",
    "o": [
     "Parce qu'une bonne place économise beaucoup d'énergie",
     "Parce que le règlement récompense la position",
     "Parce que les vélos sont identiques"
    ],
    "r": 0,
    "e": "Être bien abrité réduit l'effort, ce qui pèse autant que la condition du moment."
   }
  ]
 },
 {
  "id": "a17",
  "theme": "animaux",
  "niveau": 2,
  "titre": "Le chant des baleines à bosse",
  "corps": "Dans les eaux chaudes où elles se reproduisent, les baleines à bosse mâles chantent. Leur chant ressemble à une suite de gémissements, de cris et de sifflements graves, qui porte loin sous l'eau. Un adulte mesure de douze à seize mètres et pèse une trentaine de tonnes ; ses longues nageoires pectorales lui ont valu son nom.\n\nCes chants ne sont pas aléatoires. Ils se composent de phrases qui reviennent dans un ordre précis, répétées pendant des heures. Un même groupe partage un chant commun, que les individus imitent et modifient peu à peu. Un chant complet dure souvent une dizaine de minutes, puis reprend.\n\nLes chercheurs ont remarqué que le chant évolue au fil des années. De nouveaux motifs apparaissent, se diffusent d'un océan à l'autre, et remplacent les anciens. Ce phénomène ressemble à la mode musicale chez les humains.\n\nPour l'étudier, les scientifiques utilisent des hydrophones, microphones conçus pour écouter sous l'eau. Le son s'y propage beaucoup plus vite et plus loin que dans l'air, ce qui permet de suivre des animaux invisibles à des kilomètres.\n\nLe rôle exact du chant reste discuté. Comme il est surtout produit en période de reproduction, les scientifiques pensent qu'il sert à attirer les femelles ou à marquer la présence d'un mâle. Les baleines à bosse ne chantent pas en mangeant : elles se nourrissent dans des eaux froides, où elles passent l'été, puis migrent vers les tropiques pour se reproduire. Certaines parcourent plusieurs milliers de kilomètres lors de cette migration.\n\nL'espèce a failli disparaître à cause de la chasse commerciale. Protégée par des accords internationaux, elle a en partie reconstitué ses populations, ce qui a permis de reprendre l'étude de ses chants.",
  "q": [
   {
    "q": "Où les baleines à bosse mâles chantent-elles ?",
    "o": [
     "Dans les eaux chaudes de reproduction",
     "Dans les eaux froides de l'Arctique",
     "Près des côtes habitées"
    ],
    "r": 0,
    "e": "Le chant a lieu dans les eaux chaudes où l'espèce se reproduit."
   },
   {
    "q": "À quoi ressemble leur chant ?",
    "o": [
     "À des gémissements et des sifflements graves",
     "À des claquements rapides",
     "À un bourdonnement continu"
    ],
    "r": 0,
    "e": "Le texte décrit des gémissements, des cris et des sifflements graves."
   },
   {
    "q": "Le chant porte-t-il loin sous l'eau ?",
    "o": [
     "Oui, il porte loin",
     "Non, il reste local",
     "Seulement en surface"
    ],
    "r": 0,
    "e": "Le texte précise que la voix porte loin sous l'eau."
   },
   {
    "q": "Comment les chants sont-ils organisés ?",
    "o": [
     "En phrases qui reviennent dans un ordre précis",
     "En sons totalement improvisés",
     "En un seul cri répété"
    ],
    "r": 0,
    "e": "Les chants se composent de phrases ordonnées, répétées longtemps."
   },
   {
    "q": "Combien de temps dure souvent un chant complet ?",
    "o": [
     "Une dizaine de minutes",
     "Quelques secondes",
     "Plusieurs jours"
    ],
    "r": 0,
    "e": "Un chant complet dure souvent une dizaine de minutes avant de reprendre."
   },
   {
    "q": "Qui partage un chant commun ?",
    "o": [
     "Un même groupe de baleines",
     "Toutes les espèces de cétacés",
     "Les mâles de tous les océans"
    ],
    "r": 0,
    "e": "Un même groupe partage un chant commun que les individus imitent."
   },
   {
    "q": "Que font les individus du chant commun ?",
    "o": [
     "Ils l'imitent et le modifient peu à peu",
     "Ils le conservent sans jamais y toucher",
     "Ils l'oublient chaque année"
    ],
    "r": 0,
    "e": "Les individus imitent le chant du groupe et le modifient progressivement."
   },
   {
    "q": "Que remarquent les chercheurs au fil des années ?",
    "o": [
     "Le chant évolue",
     "Le chant disparaît",
     "Le chant devient plus court"
    ],
    "r": 0,
    "e": "De nouveaux motifs apparaissent et remplacent les anciens."
   },
   {
    "q": "Comment les nouveaux motifs se diffusent-ils ?",
    "o": [
     "D'un océan à l'autre",
     "D'une seule baie à l'autre",
     "Uniquement par l'écriture"
    ],
    "r": 0,
    "e": "Le texte indique une diffusion d'un océan à l'autre."
   },
   {
    "q": "À quoi ce phénomène ressemble-t-il ?",
    "o": [
     "À la mode musicale chez les humains",
     "À la migration des oiseaux",
     "À la construction des récifs"
    ],
    "r": 0,
    "e": "L'auteur compare l'évolution des chants aux modes musicales humaines."
   },
   {
    "q": "Quel appareil sert à écouter les chants sous l'eau ?",
    "o": [
     "Un hydrophone",
     "Un radar",
     "Un sonar à ultrasons"
    ],
    "r": 0,
    "e": "Les chercheurs utilisent des hydrophones, microphones immergés."
   },
   {
    "q": "Pourquoi le son est-il facile à suivre sous l'eau ?",
    "o": [
     "Parce qu'il s'y propage vite et loin",
     "Parce qu'il y devient plus grave",
     "Parce qu'il y est réfléchi par les fonds"
    ],
    "r": 0,
    "e": "Le son voyage plus vite et plus loin dans l'eau que dans l'air."
   },
   {
    "q": "Quand le chant est-il surtout produit ?",
    "o": [
     "En période de reproduction",
     "En période de mue",
     "Pendant la migration"
    ],
    "r": 0,
    "e": "Le chant est surtout produit pendant la reproduction, ce qui oriente les hypothèses."
   },
   {
    "q": "Où les baleines à bosse se nourrissent-elles ?",
    "o": [
     "Dans des eaux froides",
     "Dans des lagons tropicaux",
     "Dans les estuaires"
    ],
    "r": 0,
    "e": "Le texte situe l'alimentation dans des eaux froides."
   },
   {
    "q": "Quelle distance certaines baleines parcourent-elles en migrant ?",
    "o": [
     "Plusieurs milliers de kilomètres",
     "Une centaine de mètres",
     "Quelques kilomètres"
    ],
    "r": 0,
    "e": "Le texte mentionne des migrations de plusieurs milliers de kilomètres."
   },
   {
    "q": "Pourquoi l'espèce a-t-elle failli disparaître ?",
    "o": [
     "À cause de la chasse commerciale",
     "À cause du réchauffement",
     "À cause des tempêtes"
    ],
    "r": 0,
    "e": "La chasse commerciale a conduit l'espèce au bord de la disparition."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "Les chants des baleines à bosse et leur évolution",
     "La migration des poissons tropicaux",
     "La chasse des baleines au XIXe siècle"
    ],
    "r": 0,
    "e": "Le texte décrit la forme, l'évolution et la fonction probable des chants."
   }
  ]
 },
 {
  "id": "a22",
  "theme": "animaux",
  "niveau": 2,
  "titre": "Le poulpe, une intelligence sans squelette",
  "corps": "Le poulpe n'a pas de squelette. Son corps mou lui permet de se glisser dans des fentes étroites, ce qui le rend difficile à capturer. Mais son originalité tient surtout à son système nerveux et à sa peau.\n\nIl possède trois cœurs. Deux envoient le sang vers les branchies, où il s'oxygène ; le troisième alimente le reste du corps. Son sang est bleu, car l'oxygène y est transporté par une molécule à base de cuivre, l'hémocyanine, et non par l'hémoglobine des vertébrés.\n\nSes huit bras portent des centaines de ventouses. Chacune peut sentir et goûter ce qu'elle touche : le poulpe explore ainsi son environnement sans voir. Les bras contiennent aussi une grande partie de ses neurones, ce qui leur permet de réagir en partie seuls.\n\nLa peau change de couleur et de texture. Des cellules appelées chromatophores contiennent des pigments que l'animal étire ou contracte. En quelques secondes, il peut imiter une roche, du sable ou une algue. Certains poulpes produisent aussi des motifs très rapides, peut-être pour communiquer.\n\nIl se nourrit surtout de crabes, de coquillages et de petits poissons, qu'il saisit avec ses bras et découpe avec un bec corné. Son œil, très développé, repère le moindre mouvement. Menacé, il dispose de deux armes. Il peut projeter un nuage d'encre qui brouille la vue du prédateur, et se propulser en expulsant l'eau d'une cavité de son corps.\n\nLe poulpe vit peu. Beaucoup d'espèces meurent après la reproduction : la femelle cesse de se nourrir pendant qu'elle garde ses œufs, puis meurt quand ils éclosent. La mère ne voit donc jamais ses petits grandir.",
  "q": [
   {
    "q": "De quoi le poulpe est-il dépourvu ?",
    "o": [
     "De squelette",
     "De bras",
     "De branchies"
    ],
    "r": 0,
    "e": "Le texte ouvre sur l'absence de squelette, qui rend le corps souple."
   },
   {
    "q": "Combien de cœurs possède-t-il ?",
    "o": [
     "Trois",
     "Un",
     "Huit"
    ],
    "r": 0,
    "e": "Le poulpe possède trois cœurs aux rôles différents."
   },
   {
    "q": "À quoi servent les deux premiers cœurs ?",
    "o": [
     "À envoyer le sang vers les branchies",
     "À alimenter les bras",
     "À digérer la nourriture"
    ],
    "r": 0,
    "e": "Deux cœurs envoient le sang aux branchies pour l'oxygéner."
   },
   {
    "q": "À quoi sert le troisième cœur ?",
    "o": [
     "À alimenter le reste du corps",
     "À chasser l'encre",
     "À chauffer la peau"
    ],
    "r": 0,
    "e": "Le troisième cœur pousse le sang oxygéné vers le reste du corps."
   },
   {
    "q": "Pourquoi son sang est-il bleu ?",
    "o": [
     "Parce qu'il contient de l'hémocyanine à base de cuivre",
     "Parce qu'il contient de l'hémoglobine",
     "Parce qu'il est froid"
    ],
    "r": 0,
    "e": "L'hémocyanine, molécule à base de cuivre, donne au sang sa couleur bleue."
   },
   {
    "q": "Combien de bras porte-t-il ?",
    "o": [
     "Huit",
     "Six",
     "Dix"
    ],
    "r": 0,
    "e": "Le poulpe possède huit bras couverts de ventouses."
   },
   {
    "q": "Que peuvent faire les ventouses ?",
    "o": [
     "Sentir et goûter ce qu'elles touchent",
     "Produire de la lumière",
     "Fabriquer de l'encre"
    ],
    "r": 0,
    "e": "Chaque ventouse peut sentir et goûter, ce qui permet d'explorer sans voir."
   },
   {
    "q": "Où se trouve une grande partie de ses neurones ?",
    "o": [
     "Dans les bras",
     "Dans la tête",
     "Dans les branchies"
    ],
    "r": 0,
    "e": "Les bras contiennent une grande partie des neurones de l'animal."
   },
   {
    "q": "Comment change-t-il de couleur ?",
    "o": [
     "En étirant ou contractant des chromatophores",
     "En changeant la température de sa peau",
     "En sécrétant un pigment externe"
    ],
    "r": 0,
    "e": "Les chromatophores contiennent des pigments que l'animal étire ou contracte."
   },
   {
    "q": "En combien de temps peut-il imiter une roche ?",
    "o": [
     "En quelques secondes",
     "En une heure",
     "En une journée"
    ],
    "r": 0,
    "e": "Le changement de couleur et de texture se fait en quelques secondes."
   },
   {
    "q": "Comment se propulse-t-il dans l'eau ?",
    "o": [
     "En expulsant l'eau d'une cavité",
     "En battant ses bras comme des ailes",
     "En gonflant son corps"
    ],
    "r": 0,
    "e": "Il avance en chassant l'eau d'une cavité de son corps."
   },
   {
    "q": "Que projette-t-il pour brouiller la vue d'un prédateur ?",
    "o": [
     "Un nuage d'encre",
     "Un jet de sable",
     "Une masse de mucus"
    ],
    "r": 0,
    "e": "L'encre forme un nuage qui masque sa fuite."
   },
   {
    "q": "Que fait la femelle pendant qu'elle garde ses œufs ?",
    "o": [
     "Elle cesse de se nourrir",
     "Elle chasse plus souvent",
     "Elle change de couleur"
    ],
    "r": 0,
    "e": "La femelle cesse de se nourrir pendant la garde des œufs."
   },
   {
    "q": "Pourquoi peut-il se cacher dans des fentes étroites ?",
    "o": [
     "Parce qu'il n'a pas de squelette",
     "Parce qu'il est très petit",
     "Parce qu'il creuse la roche"
    ],
    "r": 0,
    "e": "L'absence d'os lui permet de déformer son corps pour se glisser partout."
   },
   {
    "q": "Pourquoi ses bras peuvent-ils réagir en partie seuls ?",
    "o": [
     "Parce qu'ils contiennent beaucoup de neurones",
     "Parce qu'ils sont très musclés",
     "Parce qu'ils flottent dans l'eau"
    ],
    "r": 0,
    "e": "La concentration de neurones dans les bras permet des réactions locales."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "Les particularités biologiques du poulpe",
     "La pêche industrielle des céphalopodes",
     "Les animaux des grands fonds marins"
    ],
    "r": 0,
    "e": "Le texte décrit les organes, la peau et le mode de vie du poulpe."
   },
   {
    "q": "Pourquoi l'auteur insiste-t-il sur le système nerveux ?",
    "o": [
     "Pour expliquer comment un animal mou se débrouille sans squelette",
     "Pour comparer le poulpe aux poissons",
     "Pour décrire sa reproduction"
    ],
    "r": 0,
    "e": "Le système nerveux, réparti dans les bras, compense l'absence de structure osseuse."
   }
  ]
 },
 {
  "id": "b2",
  "theme": "arts",
  "niveau": 2,
  "titre": "La perspective, une fenêtre ouverte sur le tableau",
  "corps": "Au Moyen Âge, les peintres représentaient souvent les personnages selon leur importance : un saint plus grand qu'un roi, un roi plus grand qu'un paysan. L'espace du tableau ne ressemblait pas à celui que l'œil voit.\n\nAu début du XVe siècle, à Florence, Filippo Brunelleschi mène des expériences devant le baptistère de la ville. Il peint le bâtiment sur un panneau, perce un petit trou et demande au spectateur de regarder à travers un miroir. L'image peinte et le bâtiment réel se superposent presque exactement.\n\nLe procédé repose sur une idée simple : les lignes parallèles qui s'éloignent semblent converger vers un point, appelé point de fuite, placé sur une ligne d'horizon. En 1435, l'architecte Leon Battista Alberti publie un traité qui explique la méthode aux peintres. Il conseille de tendre devant le modèle un voile quadrillé de fils : le peintre reporte sur sa feuille ce qu'il voit à travers chaque carreau, comme sur une grille de coordonnées.\n\nLa perspective ne rend pas le tableau plus vrai ; elle rend l'espace cohérent. Elle suppose un spectateur immobile, placé à un endroit précis. Cette convention a structuré la peinture européenne pendant plusieurs siècles.\n\nElle a aussi ses limites. Construite pour un seul œil et un seul point, elle ne décrit ni la vision à deux yeux ni le mouvement. Certains peintres jouent de cette contrainte : une anamorphose cache une image très allongée qui ne se recompose qu'en regardant le tableau de biais. Le crâne peint au premier plan d'un tableau de Hans Holbein, Les Ambassadeurs, fonctionne ainsi.\n\nAu XXe siècle, des artistes ont volontairement abandonné cette construction pour retrouver plusieurs points de vue dans une même toile. La perspective n'était donc pas une vérité, mais un outil parmi d'autres.",
  "q": [
   {
    "q": "Au Moyen Âge, sur quoi reposait la taille des personnages peints ?",
    "o": [
     "Sur leur distance au premier plan",
     "Sur la couleur de leurs vêtements",
     "Sur leur importance dans la scène"
    ],
    "r": 2,
    "e": "La taille traduisait le rang : un saint était peint plus grand qu'un roi, et un roi plus grand qu'un paysan."
   },
   {
    "q": "Devant quel bâtiment Brunelleschi mène-t-il ses expériences ?",
    "o": [
     "Le baptistère de Florence",
     "La cathédrale de Milan",
     "Le palais des Doges"
    ],
    "r": 0,
    "e": "Le texte situe l'expérience devant le baptistère de Florence."
   },
   {
    "q": "Par quel objet le spectateur regarde-t-il l'image ?",
    "o": [
     "Une lunette de verre",
     "Un miroir",
     "Un rideau percé"
    ],
    "r": 1,
    "e": "Le spectateur regarde à travers un petit trou, en utilisant un miroir."
   },
   {
    "q": "Qu'observe-t-on grâce à ce dispositif ?",
    "o": [
     "Que le panneau est plus grand que le bâtiment",
     "Que l'image peinte se superpose au bâtiment réel",
     "Que le bâtiment change de couleur"
    ],
    "r": 1,
    "e": "L'image peinte et le bâtiment réel se superposent presque exactement."
   },
   {
    "q": "Comment appelle-t-on le point vers lequel semblent converger les lignes ?",
    "o": [
     "Le centre optique",
     "Le point d'appui",
     "Le point de fuite"
    ],
    "r": 2,
    "e": "Ce point est appelé point de fuite et se place sur la ligne d'horizon."
   },
   {
    "q": "Qui publie un traité sur la méthode en 1435 ?",
    "o": [
     "Leon Battista Alberti",
     "Filippo Brunelleschi",
     "Giotto di Bondone"
    ],
    "r": 0,
    "e": "Alberti publie en 1435 un traité qui explique la méthode aux peintres."
   },
   {
    "q": "Où se situe le point de fuite ?",
    "o": [
     "Sur la ligne d'horizon",
     "Au centre exact du panneau",
     "Derrière le spectateur"
    ],
    "r": 0,
    "e": "Le texte précise que le point de fuite est placé sur une ligne d'horizon."
   },
   {
    "q": "Selon l'auteur, que ne fait pas la perspective ?",
    "o": [
     "Elle ne rend pas l'espace cohérent",
     "Elle ne suppose pas de spectateur",
     "Elle ne rend pas le tableau plus vrai"
    ],
    "r": 2,
    "e": "L'auteur écrit explicitement que la perspective ne rend pas le tableau plus vrai."
   },
   {
    "q": "Que suppose la perspective chez le spectateur ?",
    "o": [
     "Qu'il se déplace lentement",
     "Qu'il reste immobile à un endroit précis",
     "Qu'il ferme un œil"
    ],
    "r": 1,
    "e": "La construction suppose un spectateur immobile, placé à un endroit précis."
   },
   {
    "q": "Combien de temps cette convention a-t-elle structuré la peinture européenne ?",
    "o": [
     "Plusieurs siècles",
     "Quelques décennies",
     "Moins de dix ans"
    ],
    "r": 0,
    "e": "Le texte parle de plusieurs siècles de peinture européenne structurée par cette convention."
   },
   {
    "q": "Pourquoi l'effet se perd-il si le spectateur se déplace ?",
    "o": [
     "La peinture est trop sombre",
     "La construction suppose un seul point de vue",
     "Le miroir se brouille"
    ],
    "r": 1,
    "e": "Les lignes convergent vers un point unique, valable depuis une seule position."
   },
   {
    "q": "Pourquoi Brunelleschi utilise-t-il un miroir ?",
    "o": [
     "Pour agrandir l'image peinte",
     "Pour cacher le trou au public",
     "Pour comparer deux images vues du même endroit"
    ],
    "r": 2,
    "e": "Le miroir permet de mettre l'image peinte et le bâtiment réel dans le même champ de vision."
   },
   {
    "q": "Que révèle la taille des saints au Moyen Âge ?",
    "o": [
     "Que les peintres ignoraient les proportions",
     "Que la taille indiquait le rang et non la distance",
     "Que les saints étaient peints de loin"
    ],
    "r": 1,
    "e": "La taille exprimait l'importance du personnage, sans rapport avec sa place dans l'espace."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La biographie de Brunelleschi",
     "Les couleurs de la peinture florentine",
     "L'invention et le fonctionnement de la perspective"
    ],
    "r": 2,
    "e": "Le texte explique l'apparition de la perspective et la logique géométrique qui la sous-tend."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Montrer que la perspective est une convention construite",
     "Prouver que la peinture médiévale était mauvaise",
     "Expliquer la fabrication des miroirs"
    ],
    "r": 0,
    "e": "L'auteur insiste sur le caractère conventionnel d'une méthode qui rend l'espace cohérent, sans le rendre plus vrai."
   },
   {
    "q": "Que signifie l'expression selon laquelle la perspective rend l'espace cohérent ?",
    "o": [
     "Les objets obéissent à une même règle géométrique",
     "Les couleurs sont toutes de la même famille",
     "Les personnages ont la même taille"
    ],
    "r": 0,
    "e": "Tous les éléments du tableau suivent alors une construction géométrique commune."
   },
   {
    "q": "Que conseille Alberti pour reporter un modèle sur la feuille ?",
    "o": [
     "Utiliser une chambre noire",
     "Tendre un voile quadrillé de fils",
     "Peindre d'abord au crayon gras"
    ],
    "r": 1,
    "e": "Le voile de fils sert de grille de report entre le modèle et le dessin."
   },
   {
    "q": "Qu'est-ce qu'une anamorphose ?",
    "o": [
     "Un portrait peint à deux mains",
     "Une couleur obtenue par mélange",
     "Une image déformée qui se recompose sous un certain angle"
    ],
    "r": 2,
    "e": "L'image allongée ne devient lisible que depuis un point de vue oblique."
   }
  ]
 },
 {
  "id": "b7",
  "theme": "arts",
  "niveau": 2,
  "titre": "La mosaïque romaine, un tableau en petites pierres",
  "corps": "Une mosaïque romaine est un tableau fait de milliers de petites pierres. Chaque fragment, appelé tesselle, mesure souvent moins d'un centimètre. L'artisan les taille dans du calcaire, du marbre, parfois dans du verre coloré.\n\nLe mot recouvre des techniques différentes. L'opus tessellatum assemble des tesselles de taille voisine sur un mortier ; l'opus sectile découpe des plaques plus grandes, comme un marbre incrusté. Certains décors mêlent les deux.\n\nLe travail se fait sur place. On prépare un lit de mortier, on dessine le motif, puis on plante les tesselles une à une en laissant un joint régulier. Un sol de salle à manger pouvait demander des semaines de travail à plusieurs ouvriers.\n\nSous les tesselles, plusieurs couches se succèdent : un lit de cailloux pour drainer, un mortier de chaux plus grossier, puis une couche fine qui reçoit le dessin. Cette structure explique la solidité des sols et leur poids considérable.\n\nLes sujets varient : scènes de chasse, poissons, motifs géométriques, divinités. Les villas riches montrent ainsi leur goût et leur fortune. Certaines mosaïques portent la signature de l'artisan, ce qui reste rare dans l'art antique.\n\nLes couleurs venaient de loin. Le marbre blanc et les calcaires locaux fournissaient les teintes claires ; le noir venait d'une pierre volcanique, le rouge de terres cuites broyées, le bleu et le vert de verre coloré. Un atelier pouvait ainsi travailler avec une dizaine de teintes seulement.\n\nLes tesselles étaient posées de façon à guider l'œil : dans les visages, elles suivent les courbes du nez et des sourcils. Ce détail, presque invisible de loin, donne au portrait une expression vivante.\n\nDe nombreux sols ont été conservés parce qu'ils étaient enterrés sous des décombres. Ils constituent aujourd'hui une source majeure pour connaître la vie quotidienne romaine. Mais un sol dégagé supporte mal le gel et le passage : beaucoup de mosaïques sont donc laissées sous une protection, ou déposées dans un musée.",
  "q": [
   {
    "q": "Comment appelle-t-on chaque petit fragment d'une mosaïque ?",
    "o": [
     "Une tablette",
     "Une tesselle",
     "Une incrustation"
    ],
    "r": 1,
    "e": "Chaque fragment porte le nom de tesselle."
   },
   {
    "q": "Quelle taille fait souvent une tesselle ?",
    "o": [
     "Moins d'un centimètre",
     "Environ cinq centimètres",
     "Plus de dix centimètres"
    ],
    "r": 0,
    "e": "Le texte indique que la tesselle mesure souvent moins d'un centimètre."
   },
   {
    "q": "Dans quels matériaux les tesselles sont-elles taillées ?",
    "o": [
     "Bois, cuir et os",
     "Bronze et plomb uniquement",
     "Calcaire, marbre et parfois verre"
    ],
    "r": 2,
    "e": "L'artisan taille les tesselles dans du calcaire, du marbre ou du verre coloré."
   },
   {
    "q": "Sur quoi les tesselles sont-elles plantées ?",
    "o": [
     "Une planche de bois",
     "Un lit de mortier",
     "Un tissu tendu"
    ],
    "r": 1,
    "e": "Le travail commence par un lit de mortier préparé sur place."
   },
   {
    "q": "Combien de temps pouvait demander un sol de salle à manger ?",
    "o": [
     "Une seule journée",
     "Quelques heures",
     "Des semaines de travail"
    ],
    "r": 2,
    "e": "Le texte parle de semaines de travail pour plusieurs ouvriers."
   },
   {
    "q": "Quels sujets les mosaïques représentent-elles ?",
    "o": [
     "Scènes de chasse, poissons, motifs géométriques",
     "Uniquement des portraits d'empereurs",
     "Des cartes maritimes"
    ],
    "r": 0,
    "e": "Le texte cite les scènes de chasse, les poissons, les motifs géométriques et les divinités."
   },
   {
    "q": "Que montrent les mosaïques des villas riches ?",
    "o": [
     "Leur activité militaire",
     "Le goût et la fortune de leurs propriétaires",
     "Leur savoir médical"
    ],
    "r": 1,
    "e": "Les villas riches affichent ainsi leur goût et leur fortune."
   },
   {
    "q": "Qu'est-ce qui reste rare dans l'art antique ?",
    "o": [
     "L'usage du marbre",
     "La représentation d'animaux",
     "La signature de l'artisan"
    ],
    "r": 2,
    "e": "Certaines mosaïques portent une signature, ce qui reste rare dans l'art antique."
   },
   {
    "q": "Comment les tesselles sont-elles posées dans les visages ?",
    "o": [
     "Elles suivent les courbes du nez et des sourcils",
     "Elles forment des lignes horizontales",
     "Elles sont disposées au hasard"
    ],
    "r": 0,
    "e": "Dans les visages, les tesselles suivent les courbes du nez et des sourcils."
   },
   {
    "q": "Pourquoi de nombreux sols ont-ils été conservés ?",
    "o": [
     "Ils étaient enterrés sous des décombres",
     "Ils étaient protégés par un vernis",
     "Ils étaient recouverts de sable chaque année"
    ],
    "r": 0,
    "e": "Les sols enterrés sous les décombres ont échappé à l'usure et aux pillages."
   },
   {
    "q": "Comment les tesselles sont-elles posées ?",
    "o": [
     "Une à une, sur un lit de mortier, avec un joint régulier",
     "En plaques, avant la pose du mortier",
     "Collées à la résine sur un panneau de bois"
    ],
    "r": 0,
    "e": "Le texte décrit la pose : « on prépare un lit de mortier, on dessine le motif, puis on plante les tesselles une à une en laissant un joint régulier »."
   },
   {
    "q": "Pourquoi les visages gagnent-ils en expression grâce à l'orientation des tesselles ?",
    "o": [
     "Parce que les tesselles sont plus grosses",
     "Parce que les lignes suivent les volumes du visage",
     "Parce que le verre réfléchit la lumière"
    ],
    "r": 1,
    "e": "En épousant les courbes, les lignes de tesselles suggèrent le relief et le mouvement des traits."
   },
   {
    "q": "Que nous apprennent aujourd'hui ces sols conservés ?",
    "o": [
     "La vie quotidienne des Romains",
     "La généalogie des empereurs",
     "Le réseau routier de l'Empire"
    ],
    "r": 0,
    "e": "Le texte les présente comme une source majeure sur la vie quotidienne romaine."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Le commerce du marbre dans l'Empire",
     "La technique et le rôle de la mosaïque romaine",
     "Les villas de campagne italiennes"
    ],
    "r": 1,
    "e": "Le texte décrit la fabrication d'une mosaïque et ce qu'elle nous apprend."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Vendre un procédé de restauration",
     "Critiquer l'art moderne",
     "Faire comprendre un savoir-faire par ses détails concrets"
    ],
    "r": 2,
    "e": "L'auteur explique pas à pas le travail de l'artisan pour rendre l'objet compréhensible."
   },
   {
    "q": "Pourquoi le travail se fait-il sur place ?",
    "o": [
     "Parce que les tesselles sont trop lourdes à transporter",
     "Parce que le motif est copié d'un modèle peint",
     "Parce que le mortier doit être posé et garni avant de durcir"
    ],
    "r": 2,
    "e": "Un sol en mortier frais ne peut pas être transporté : les tesselles sont donc posées sur le chantier même."
   },
   {
    "q": "Quelle technique assemble des plaques plus grandes que des tesselles ?",
    "o": [
     "L'opus tessellatum",
     "L'opus sectile",
     "Le mortier de chaux"
    ],
    "r": 1,
    "e": "L'opus sectile découpe de grandes plaques, à la manière d'un marbre incrusté."
   },
   {
    "q": "Pourquoi les sols dégagés se conservent-ils mal ?",
    "o": [
     "Ils supportent mal le gel et le passage",
     "Ils attirent les insectes",
     "Le mortier se dissout dans l'air sec"
    ],
    "r": 0,
    "e": "L'exposition au gel et au piétinement abîme rapidement les tesselles et leur mortier."
   }
  ]
 },
 {
  "id": "a18",
  "theme": "cuisine",
  "niveau": 2,
  "titre": "Le sel, une barrière contre le pourrissement",
  "corps": "Avant les réfrigérateurs, conserver la viande et le poisson était un problème vital. Le sel a longtemps été la solution la plus efficace, et il l'est encore dans de nombreuses régions.\n\nLe principe repose sur l'eau. Les microbes qui font pourrir les aliments ont besoin d'eau pour se développer. Quand on sale fortement un aliment, le sel attire l'eau hors de leurs cellules. Privés d'eau, ils cessent de se multiplier. Ce phénomène s'appelle l'osmose.\n\nDeux méthodes courantes existent. Le salage à sec consiste à frotter la pièce de viande avec du sel, puis à la laisser reposer dans un récipient. Le saumurage plonge l'aliment dans une eau très salée. La saumure doit être assez concentrée : trop diluée, elle laisserait les microbes se développer. Dans les deux cas, le sel doit pénétrer jusqu'au cœur, ce qui prend des jours ou des semaines selon l'épaisseur.\n\nLe sel modifie aussi le goût et la texture. La morue salée, par exemple, devient ferme et se garde des mois. Avant cuisson, il faut la dessaler dans plusieurs bains d'eau froide, en changeant l'eau régulièrement.\n\nDans la charcuterie, le sel est souvent associé à des nitrites, qui fixent la couleur rose et freinent certaines bactéries. Ces additifs font l'objet de recommandations strictes, car un excès présente des risques.\n\nTrop de sel pose néanmoins un problème de santé : l'organisation mondiale de la santé recommande de ne pas dépasser cinq grammes par jour. Les techniques modernes, comme le froid ou la mise sous vide, permettent de conserver sans excès de sel. Mais le salage reste utilisé pour des produits traditionnels, comme le jambon ou certains fromages.",
  "q": [
   {
    "q": "Quel problème posait la conservation avant les réfrigérateurs ?",
    "o": [
     "Un problème vital",
     "Un simple problème de goût",
     "Une question de transport"
    ],
    "r": 0,
    "e": "Le texte qualifie la conservation de problème vital avant le froid artificiel."
   },
   {
    "q": "Quelle a longtemps été la solution la plus efficace ?",
    "o": [
     "Le sel",
     "Le séchage au feu",
     "L'enfouissement"
    ],
    "r": 0,
    "e": "Le sel est présenté comme la solution la plus efficace, encore utilisée."
   },
   {
    "q": "De quoi les microbes ont-ils besoin pour se développer ?",
    "o": [
     "D'eau",
     "De lumière",
     "De sucre"
    ],
    "r": 0,
    "e": "Les microbes responsables du pourrissement ont besoin d'eau."
   },
   {
    "q": "Que fait le sel sur l'eau des cellules microbiennes ?",
    "o": [
     "Il l'attire hors des cellules",
     "Il la gèle sur place",
     "Il la rend potable"
    ],
    "r": 0,
    "e": "Le sel attire l'eau hors des cellules, ce qui les prive d'humidité."
   },
   {
    "q": "Comment s'appelle ce phénomène ?",
    "o": [
     "L'osmose",
     "La fermentation",
     "La coagulation"
    ],
    "r": 0,
    "e": "Le déplacement de l'eau à travers les parois s'appelle l'osmose."
   },
   {
    "q": "Que font les microbes privés d'eau ?",
    "o": [
     "Ils cessent de se multiplier",
     "Ils se multiplient plus vite",
     "Ils deviennent inoffensifs mais actifs"
    ],
    "r": 0,
    "e": "Sans eau, les microbes ne peuvent plus se développer."
   },
   {
    "q": "En quoi consiste le salage à sec ?",
    "o": [
     "Frotter la viande de sel puis la laisser reposer",
     "La plonger dans une saumure",
     "La fumer au-dessus du sel"
    ],
    "r": 0,
    "e": "Le salage à sec se fait en frottant la pièce de sel et en la laissant reposer."
   },
   {
    "q": "Qu'est-ce que le saumurage ?",
    "o": [
     "Plonger l'aliment dans une eau très salée",
     "Sécher l'aliment à l'air",
     "Cuire l'aliment dans du sel"
    ],
    "r": 0,
    "e": "Le saumurage consiste à immerger l'aliment dans une eau très salée."
   },
   {
    "q": "Combien de temps le sel met-il à pénétrer jusqu'au cœur ?",
    "o": [
     "Des jours ou des semaines",
     "Quelques secondes",
     "Quelques heures"
    ],
    "r": 0,
    "e": "La pénétration complète demande des jours ou des semaines selon l'épaisseur."
   },
   {
    "q": "Quel exemple d'aliment salé le texte donne-t-il ?",
    "o": [
     "La morue",
     "Le pain",
     "Les pommes"
    ],
    "r": 0,
    "e": "La morue salée sert d'exemple de conservation par le sel."
   },
   {
    "q": "Comment devient la morue salée ?",
    "o": [
     "Ferme et conservation longue",
     "Molle et fragile",
     "Plus tendre qu'au départ"
    ],
    "r": 0,
    "e": "Le sel raffermit le poisson et permet de le garder des mois."
   },
   {
    "q": "Comment procède-t-on pour la dessaler ?",
    "o": [
     "Dans plusieurs bains d'eau froide",
     "Dans un seul bain très chaud",
     "En la faisant bouillir"
    ],
    "r": 0,
    "e": "Le dessalage se fait dans plusieurs bains d'eau froide renouvelés."
   },
   {
    "q": "À quoi servent les nitrites dans la charcuterie ?",
    "o": [
     "Ils fixent la couleur et freinent des bactéries",
     "Ils rendent la viande plus tendre",
     "Ils remplacent le sel"
    ],
    "r": 0,
    "e": "Les nitrites fixent la couleur rose et limitent certaines bactéries."
   },
   {
    "q": "Quelle quantité de sel l'OMS recommande-t-elle de ne pas dépasser ?",
    "o": [
     "Cinq grammes par jour",
     "Cinquante grammes par jour",
     "Un gramme par semaine"
    ],
    "r": 0,
    "e": "L'organisation mondiale de la santé conseille de rester sous cinq grammes par jour."
   },
   {
    "q": "Quelles techniques modernes sont citées ?",
    "o": [
     "Le froid et la mise sous vide",
     "Le séchage solaire et le fumage",
     "L'ajout d'épices et d'huile"
    ],
    "r": 0,
    "e": "Le texte cite le froid et la mise sous vide comme alternatives."
   },
   {
    "q": "Quels produits traditionnels restent salés ?",
    "o": [
     "Le jambon et certains fromages",
     "Le lait et les œufs",
     "Les fruits secs"
    ],
    "r": 0,
    "e": "Le jambon et certains fromages sont donnés en exemple."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "Le principe de la conservation des aliments par le sel",
     "L'histoire de la pêche à la morue",
     "Les règles de l'assaisonnement moderne"
    ],
    "r": 0,
    "e": "Le texte explique comment le sel empêche le développement des microbes."
   },
   {
    "q": "Pourquoi l'auteur termine-t-il par les conseils de santé ?",
    "o": [
     "Pour rappeler les limites d'une technique efficace",
     "Pour déconseiller tout produit salé",
     "Pour décrire une tradition régionale"
    ],
    "r": 0,
    "e": "L'efficacité du sel ne dispense pas de limiter sa consommation."
   }
  ]
 },
 {
  "id": "a23",
  "theme": "cuisine",
  "niveau": 2,
  "titre": "Du cacao amer au chocolat en tablette",
  "corps": "Le chocolat vient des graines d'un arbre, le cacaoyer, originaire d'Amérique centrale et du Sud. Ses fruits, des cabosses, contiennent des graines entourées de pulpe.\n\nLes peuples de Mésoamérique utilisaient ces graines bien avant l'arrivée des Européens. Les Aztèques préparaient une boisson amère, mélangée à de l'eau, du piment et des épices, et la battaient pour la faire mousser. Les graines servaient aussi de monnaie d'échange.\n\nAu XVIe siècle, les Espagnols rapportent le cacao en Europe. Le goût change : on y ajoute du sucre, de la cannelle ou de la vanille, et la boisson devient un luxe réservé aux plus riches. Le cacao reste longtemps une boisson, jamais un aliment solide.\n\nLe passage à la tablette est plus tardif. En 1828, un Hollandais met au point une presse qui sépare le beurre de cacao de la poudre. Cette invention ouvre la voie au chocolat solide. En 1875, un Suisse a l'idée d'ajouter du lait concentré : le chocolat au lait est né.\n\nAvant tout cela, les fèves doivent être torréfiées. Ce chauffage développe les arômes et distingue un cacao fruité d'un cacao trop grillé. Reste une étape essentielle, le conchage. La pâte est longuement malaxée à chaud, ce qui élimine l'acidité et rend la texture plus lisse. Un chocolat fin se distingue souvent par cette durée de travail.\n\nAujourd'hui, la culture du cacao fait vivre des millions de petits producteurs, surtout en Afrique de l'Ouest. Les prix varient fortement, et les maladies des arbres menacent certaines récoltes. Les pays producteurs exportent surtout des fèves brutes, tandis que la transformation et les marges se concentrent ailleurs.",
  "q": [
   {
    "q": "D'où vient le chocolat ?",
    "o": [
     "Des graines d'un arbre",
     "Des racines d'une plante",
     "Du lait de vache"
    ],
    "r": 0,
    "e": "Le chocolat provient des graines du cacaoyer."
   },
   {
    "q": "D'où le cacaoyer est-il originaire ?",
    "o": [
     "D'Amérique centrale et du Sud",
     "D'Afrique de l'Ouest",
     "D'Asie du Sud-Est"
    ],
    "r": 0,
    "e": "Le cacaoyer est originaire d'Amérique centrale et du Sud."
   },
   {
    "q": "Comment s'appellent ses fruits ?",
    "o": [
     "Des cabosses",
     "Des gousses",
     "Des baies"
    ],
    "r": 0,
    "e": "Le texte nomme cabosses les fruits du cacaoyer."
   },
   {
    "q": "Que préparaient les Aztèques avec les graines ?",
    "o": [
     "Une boisson amère",
     "Une pâte sucrée",
     "Un pain complet"
    ],
    "r": 0,
    "e": "Les Aztèques préparaient une boisson amère à base de cacao."
   },
   {
    "q": "Avec quoi mélangeaient-ils cette boisson ?",
    "o": [
     "De l'eau, du piment et des épices",
     "Du lait et du miel",
     "Du vin et du sel"
    ],
    "r": 0,
    "e": "La boisson mêlait eau, piment et épices, et était battue pour mousser."
   },
   {
    "q": "À quoi servaient aussi les graines ?",
    "o": [
     "De monnaie d'échange",
     "De médicament",
     "De colorant"
    ],
    "r": 0,
    "e": "Les graines servaient également de monnaie d'échange."
   },
   {
    "q": "Quand le cacao arrive-t-il en Europe ?",
    "o": [
     "Au XVIe siècle",
     "Au XIIe siècle",
     "Au XIXe siècle"
    ],
    "r": 0,
    "e": "Les Espagnols rapportent le cacao en Europe au XVIe siècle."
   },
   {
    "q": "Qui rapporte le cacao en Europe ?",
    "o": [
     "Les Espagnols",
     "Les Portugais",
     "Les Hollandais"
    ],
    "r": 0,
    "e": "Le texte attribue ce transport aux Espagnols."
   },
   {
    "q": "Qu'ajoute-t-on à la boisson en Europe ?",
    "o": [
     "Du sucre et des épices",
     "Du piment et du sel",
     "De la farine"
    ],
    "r": 0,
    "e": "Sucre, cannelle ou vanille transforment le goût de la boisson."
   },
   {
    "q": "Qu'invente-t-on en 1828 ?",
    "o": [
     "Une presse qui sépare le beurre de cacao",
     "Une machine à torréfier",
     "Un moule à tablettes"
    ],
    "r": 0,
    "e": "La presse de 1828 sépare le beurre de cacao de la poudre."
   },
   {
    "q": "Qui a l'idée d'ajouter du lait concentré ?",
    "o": [
     "Un Suisse, en 1875",
     "Un Hollandais, en 1828",
     "Un Espagnol, en 1520"
    ],
    "r": 0,
    "e": "Un chocolatier suisse ajoute du lait concentré en 1875."
   },
   {
    "q": "À quoi sert le conchage ?",
    "o": [
     "À éliminer l'acidité et lisser la texture",
     "À durcir le chocolat",
     "À colorer la pâte"
    ],
    "r": 0,
    "e": "Le malaxage à chaud retire l'acidité et affine la texture."
   },
   {
    "q": "Où vit la majorité des petits producteurs de cacao ?",
    "o": [
     "En Afrique de l'Ouest",
     "En Europe du Nord",
     "Au Moyen-Orient"
    ],
    "r": 0,
    "e": "Le texte situe la plupart des petits producteurs en Afrique de l'Ouest."
   },
   {
    "q": "Pourquoi le chocolat est-il resté un luxe en Europe ?",
    "o": [
     "Parce que le cacao et le sucre coûtaient cher",
     "Parce qu'il était interdit",
     "Parce qu'il fallait le boire chaud"
    ],
    "r": 0,
    "e": "Les ingrédients importés et le sucre en faisaient un produit coûteux."
   },
   {
    "q": "Pourquoi la presse de 1828 a-t-elle ouvert la voie à la tablette ?",
    "o": [
     "Parce qu'elle a permis d'obtenir une pâte solide",
     "Parce qu'elle a sucré le cacao",
     "Parce qu'elle a supprimé l'amertume"
    ],
    "r": 0,
    "e": "En séparant beurre et poudre, elle rend possible une pâte travaillable en tablette."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "L'histoire du cacao et du chocolat",
     "Les recettes de gâteaux au chocolat",
     "La culture du sucre de canne"
    ],
    "r": 0,
    "e": "Le texte suit le cacao de la Mésoamérique jusqu'à la tablette moderne."
   },
   {
    "q": "Pourquoi l'auteur mentionne-t-il les pays producteurs à la fin ?",
    "o": [
     "Pour montrer que la culture reste économiquement fragile",
     "Pour expliquer le goût du chocolat",
     "Pour décrire les forêts tropicales"
    ],
    "r": 0,
    "e": "La fin du texte souligne la dépendance des producteurs aux prix et aux maladies."
   }
  ]
 },
 {
  "id": "a20",
  "theme": "géographie",
  "niveau": 2,
  "titre": "Comment naît un atoll",
  "corps": "Un atoll est un anneau de corail qui entoure un lagon. Sa formation a été expliquée au XIXe siècle par Charles Darwin, à partir d'observations réalisées pendant son voyage autour du monde.\n\nDarwin distingue trois formes de récifs. Le récif frangeant borde directement la côte. Le récif-barrière s'en écarte et laisse un chenal d'eau entre lui et la terre. L'atoll est la dernière étape : la terre a disparu, seul demeure l'anneau corallien.\n\nÀ l'origine, un volcan perce la surface de l'océan. Des coraux s'installent sur ses flancs, dans les eaux chaudes et peu profondes. Le corail est un animal qui construit un squelette calcaire et vit en colonies. Il ne peut descendre très profond, car il a besoin de lumière.\n\nAvec le temps, le volcan s'éteint et s'enfonce lentement sous son propre poids. Les coraux continuent de pousser vers la lumière, donc vers le haut. Le récif se maintient près de la surface tandis que le socle volcanique descend. Un lagon se forme au centre, là où le volcan a disparu. Un atoll peut mesurer quelques kilomètres de diamètre, et son lagon abrite une eau calme, protégée des vagues par le récif.\n\nCe processus demande des millions d'années. Il n'est possible que dans des mers chaudes, car les coraux supportent mal les eaux froides. Les Maldives, dans l'océan Indien, offrent un exemple de long chapelet d'atolls bâtis de cette manière.\n\nAujourd'hui, le réchauffement des océans menace ces constructions : un épisode de forte chaleur peut blanchir le corail et le tuer. Les cyclones, eux, peuvent briser les branches les plus fragiles, mais le récif repousse ensuite lentement.",
  "q": [
   {
    "q": "Qu'est-ce qu'un atoll ?",
    "o": [
     "Un anneau de corail autour d'un lagon",
     "Une île volcanique isolée",
     "Un banc de sable mouvant"
    ],
    "r": 0,
    "e": "L'atoll est défini comme un anneau de corail entourant un lagon."
   },
   {
    "q": "Qui a expliqué sa formation ?",
    "o": [
     "Charles Darwin",
     "Louis Agassiz",
     "James Cook"
    ],
    "r": 0,
    "e": "Le texte attribue l'explication à Charles Darwin."
   },
   {
    "q": "Combien de formes de récifs Darwin distingue-t-il ?",
    "o": [
     "Trois",
     "Deux",
     "Cinq"
    ],
    "r": 0,
    "e": "Il distingue le récif frangeant, le récif-barrière et l'atoll."
   },
   {
    "q": "Comment se définit un récif frangeant ?",
    "o": [
     "Il borde directement la côte",
     "Il entoure un lagon",
     "Il flotte en pleine mer"
    ],
    "r": 0,
    "e": "Le récif frangeant touche la côte, sans chenal intermédiaire."
   },
   {
    "q": "Qu'est-ce qui sépare un récif-barrière de la côte ?",
    "o": [
     "Un chenal d'eau",
     "Une plage de sable",
     "Une barrière de roche"
    ],
    "r": 0,
    "e": "Le récif-barrière est séparé de la terre par un chenal."
   },
   {
    "q": "Quelle est la dernière étape de cette évolution ?",
    "o": [
     "L'atoll",
     "Le récif frangeant",
     "Le volcan actif"
    ],
    "r": 0,
    "e": "L'atoll correspond au stade où la terre a disparu et où seul l'anneau demeure."
   },
   {
    "q": "Qu'est-ce qui perce la surface à l'origine ?",
    "o": [
     "Un volcan",
     "Un récif corallien",
     "Un glacier"
    ],
    "r": 0,
    "e": "Un volcan perce d'abord la surface de l'océan."
   },
   {
    "q": "Où s'installent les coraux ?",
    "o": [
     "Sur les flancs du volcan",
     "Au sommet du cratère",
     "Sur le fond abyssal"
    ],
    "r": 0,
    "e": "Les coraux colonisent les flancs du volcan, en eaux peu profondes."
   },
   {
    "q": "Pourquoi les coraux ne descendent-ils pas très profond ?",
    "o": [
     "Parce qu'ils ont besoin de lumière",
     "Parce que l'eau y est trop salée",
     "Parce que la roche y est trop dure"
    ],
    "r": 0,
    "e": "Le corail a besoin de lumière et reste donc près de la surface."
   },
   {
    "q": "Que fait le volcan avec le temps ?",
    "o": [
     "Il s'éteint et s'enfonce",
     "Il grandit à nouveau",
     "Il se remplit d'eau douce"
    ],
    "r": 0,
    "e": "Le volcan s'éteint puis s'enfonce lentement sous son poids."
   },
   {
    "q": "Pourquoi les coraux poussent-ils vers le haut ?",
    "o": [
     "Pour rester près de la lumière",
     "Pour fuir le sel",
     "Pour suivre les courants"
    ],
    "r": 0,
    "e": "Les coraux recherchent la lumière et se maintiennent donc près de la surface."
   },
   {
    "q": "Où se forme le lagon ?",
    "o": [
     "Au centre, là où le volcan a disparu",
     "Sur le versant exposé au vent",
     "À l'extérieur du récif"
    ],
    "r": 0,
    "e": "Le lagon occupe le centre, à la place de l'ancien volcan."
   },
   {
    "q": "Combien de temps ce processus demande-t-il ?",
    "o": [
     "Des millions d'années",
     "Quelques siècles",
     "Une centaine d'années"
    ],
    "r": 0,
    "e": "Le texte évoque des millions d'années."
   },
   {
    "q": "Quel archipel est cité comme exemple d'atolls ?",
    "o": [
     "Les Maldives",
     "Les Açores",
     "Les Galápagos"
    ],
    "r": 0,
    "e": "Le texte cite les Maldives, dans l'océan Indien."
   },
   {
    "q": "Pourquoi un atoll ne se forme-t-il pas en mer froide ?",
    "o": [
     "Parce que les coraux supportent mal le froid",
     "Parce que l'eau froide est trop salée",
     "Parce que les volcans n'y existent pas"
    ],
    "r": 0,
    "e": "Les coraux ont besoin d'eaux chaudes pour construire leur récif."
   },
   {
    "q": "Que provoque un épisode de forte chaleur sur le corail ?",
    "o": [
     "Il peut le blanchir et le tuer",
     "Il accélère sa croissance",
     "Il le rend plus résistant"
    ],
    "r": 0,
    "e": "Le réchauffement peut provoquer un blanchissement mortel du corail."
   },
   {
    "q": "Quel effet peuvent avoir les cyclones sur un récif ?",
    "o": [
     "Ils brisent les branches les plus fragiles",
     "Ils le font disparaître en un jour",
     "Ils le rendent plus dur"
    ],
    "r": 0,
    "e": "Les cyclones cassent les parties fragiles, que le récif reconstruit ensuite lentement."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "La formation des atolls coralliens",
     "La vie des récifs de Méditerranée",
     "Les voyages de Darwin en Amérique"
    ],
    "r": 0,
    "e": "Le texte explique comment un volcan entouré de corail devient un atoll."
   }
  ]
 },
 {
  "id": "a25",
  "theme": "géographie",
  "niveau": 2,
  "titre": "Les Alpes, cicatrice d'une collision",
  "corps": "Les Alpes ne sont pas seulement un décor. Ce sont les traces d'une collision entre deux masses continentales.\n\nIl y a environ trente à quarante millions d'années, la plaque africaine, poussée vers le nord, entre en contact avec la plaque eurasienne. Entre elles se trouvait un bras de mer, la Téthys, où s'étaient déposés des sédiments. Ces dépôts, comprimés, plissés et soulevés, forment aujourd'hui les roches des Alpes.\n\nLa chaîne s'étend sur plusieurs pays, de la France à l'Autriche, et sa largeur atteint environ deux cents kilomètres. Le phénomène se poursuit. La poussée continue, et les sommets s'élèvent encore de quelques millimètres par an. Mais l'érosion travaille aussi vite. Le gel fissure la roche, l'eau la dissout, les glaciers l'arrachent. Sans cette usure, les montagnes seraient bien plus hautes.\n\nLe mont Blanc, point culminant de la chaîne, atteint environ quatre mille huit cent huit mètres. Sa hauteur est mesurée régulièrement, car la neige et la glace du sommet varient d'une année à l'autre.\n\nLa structure de la chaîne garde la mémoire de la collision. Les couches rocheuses sont souvent renversées, plissées en zigzag, et certaines roches venues d'anciens fonds marins se retrouvent à plusieurs milliers de mètres d'altitude. On y trouve même des fossiles marins.\n\nLes vallées, elles, ont été creusées par les glaciers, qui ont laissé des lacs et des moraines. Les Alpes ne sont pas un cas isolé. L'Himalaya, les Andes ou les Rocheuses doivent leur relief à des collisions ou à des enfoncements de plaques comparables. Chaque chaîne raconte, à sa manière, le déplacement lent des continents.",
  "q": [
   {
    "q": "Que sont les Alpes selon le texte ?",
    "o": [
     "Les traces d'une collision",
     "Le reste d'un ancien volcan",
     "Un plateau soulevé par le vent"
    ],
    "r": 0,
    "e": "Le texte présente les Alpes comme la trace d'une collision continentale."
   },
   {
    "q": "Quand la collision a-t-elle commencé ?",
    "o": [
     "Il y a trente à quarante millions d'années",
     "Il y a trois mille ans",
     "Il y a cinq cents millions d'années"
    ],
    "r": 0,
    "e": "Le texte situe le début de la collision il y a trente à quarante millions d'années."
   },
   {
    "q": "Quelle plaque pousse vers le nord ?",
    "o": [
     "La plaque africaine",
     "La plaque eurasienne",
     "La plaque pacifique"
    ],
    "r": 0,
    "e": "La plaque africaine progresse vers le nord et rencontre l'Eurasie."
   },
   {
    "q": "Qu'y avait-il entre les deux plaques ?",
    "o": [
     "Un bras de mer, la Téthys",
     "Une chaîne de volcans",
     "Un désert de sable"
    ],
    "r": 0,
    "e": "Un bras de mer appelé Téthys séparait les deux masses."
   },
   {
    "q": "Que sont devenus les sédiments de cette mer ?",
    "o": [
     "Les roches des Alpes",
     "Les glaciers actuels",
     "Les lacs de plaine"
    ],
    "r": 0,
    "e": "Les dépôts comprimés et soulevés constituent aujourd'hui les roches alpines."
   },
   {
    "q": "Les sommets s'élèvent-ils encore ?",
    "o": [
     "Oui, de quelques millimètres par an",
     "Non, ils descendent",
     "Oui, de plusieurs mètres par an"
    ],
    "r": 0,
    "e": "La poussée continue soulève encore les sommets de quelques millimètres par an."
   },
   {
    "q": "Qu'est-ce qui limite la hauteur des montagnes ?",
    "o": [
     "L'érosion",
     "Le froid",
     "Le manque de roches"
    ],
    "r": 0,
    "e": "L'érosion use la roche aussi vite que la poussée ne la soulève."
   },
   {
    "q": "Comment le gel agit-il sur la roche ?",
    "o": [
     "Il la fissure",
     "Il la colore",
     "Il la rend plus lourde"
    ],
    "r": 0,
    "e": "Le gel fissure la roche, ce qui contribue à son usure."
   },
   {
    "q": "Quel est le point culminant de la chaîne ?",
    "o": [
     "Le mont Blanc",
     "Le mont Rose",
     "Le Cervin"
    ],
    "r": 0,
    "e": "Le mont Blanc est le point culminant des Alpes."
   },
   {
    "q": "Quelle altitude atteint le mont Blanc ?",
    "o": [
     "Environ 4 808 mètres",
     "Environ 3 800 mètres",
     "Environ 5 800 mètres"
    ],
    "r": 0,
    "e": "Le texte donne environ quatre mille huit cent huit mètres."
   },
   {
    "q": "Pourquoi sa hauteur est-elle remesurée régulièrement ?",
    "o": [
     "Parce que la neige et la glace du sommet varient",
     "Parce que la roche change de couleur",
     "Parce que la montagne se déplace vers le sud"
    ],
    "r": 0,
    "e": "L'épaisseur de neige et de glace au sommet change d'une année à l'autre."
   },
   {
    "q": "Que trouve-t-on dans certaines roches alpines ?",
    "o": [
     "Des fossiles marins",
     "Des ossements de dinosaures",
     "Des outils préhistoriques"
    ],
    "r": 0,
    "e": "Le texte signale la présence de fossiles marins dans les roches alpines."
   },
   {
    "q": "Quelles autres chaînes sont citées ?",
    "o": [
     "L'Himalaya, les Andes et les Rocheuses",
     "Les Vosges et le Jura",
     "L'Oural et les Carpates"
    ],
    "r": 0,
    "e": "Le texte cite l'Himalaya, les Andes et les Rocheuses comme cas comparables."
   },
   {
    "q": "Pourquoi trouve-t-on des fossiles marins en altitude ?",
    "o": [
     "Parce que ces roches viennent d'anciens fonds marins soulevés",
     "Parce que des oiseaux les y ont apportés",
     "Parce que la mer montait jusque-là autrefois"
    ],
    "r": 0,
    "e": "Les sédiments marins ont été soulevés par la collision jusqu'à plusieurs milliers de mètres."
   },
   {
    "q": "Pourquoi les montagnes ne grandissent-elles pas sans fin ?",
    "o": [
     "Parce que l'érosion compense la poussée",
     "Parce que les plaques s'arrêtent",
     "Parce que la roche devient trop lourde pour tenir"
    ],
    "r": 0,
    "e": "Le soulèvement et l'usure finissent par s'équilibrer."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "La formation des Alpes par une collision de plaques",
     "Les stations de ski des Alpes",
     "Le climat des vallées alpines"
    ],
    "r": 0,
    "e": "Le texte explique l'origine de la chaîne et son évolution actuelle."
   },
   {
    "q": "Pourquoi l'auteur décrit-il les roches plissées ?",
    "o": [
     "Pour montrer la trace matérielle de la collision",
     "Pour décrire la beauté des paysages",
     "Pour expliquer la fonte des glaciers"
    ],
    "r": 0,
    "e": "Les plis et les roches renversées sont la preuve directe de la compression."
   }
  ]
 },
 {
  "id": "b1",
  "theme": "histoire",
  "niveau": 2,
  "titre": "Les tablettes d'argile qui ont inventé la comptabilité",
  "corps": "Bien avant les livres, les habitants de Mésopotamie ont écrit sur de l'argile. Vers 3300 avant notre ère, dans les villes du sud de la région, des scribes tracent des signes en forme de coins avec un roseau taillé. Cette écriture est appelée cunéiforme, du latin cuneus, le coin.\n\nLes premières tablettes ne racontent pas d'histoires. Elles enregistrent des quantités : tant de moutons, tant de mesures d'orge, tant de jarres d'huile. Les temples doivent gérer des réserves, les marchands garder la trace des dettes. L'écriture naît donc de la comptabilité, pas de la littérature.\n\nSon origine est probablement plus ancienne encore. Avant les signes, on utilisait de petits jetons d'argile de formes différentes pour compter les marchandises : un cône pour une mesure de grain, un disque pour un animal. Ces jetons étaient parfois enfermés dans une enveloppe de terre cuite. Pour savoir ce qu'elle contenait sans la briser, on a fini par dessiner les formes sur l'enveloppe. Plusieurs historiens voient dans ce dessin l'ancêtre du signe écrit.\n\nLe scribe travaille l'argile humide, y imprime les signes, puis fait sécher la tablette au soleil ou la cuit au feu. Une tablette cuite par accident, dans un incendie, devient presque indestructible : c'est ainsi que des milliers d'entre elles ont traversé les siècles.\n\nLe métier s'apprend. Dans les écoles des temples et des palais, les apprentis copient pendant des années des listes de signes, des proverbes et des contrats modèles. Savoir écrire ouvre l'accès à l'administration, à la comptabilité des grands domaines et parfois à la cour.\n\nAvec le temps, les signes se simplifient et servent aussi à noter des lois, des récits et des poèmes. Le cunéiforme restera ensuite illisible pendant près de deux mille ans. Au XIXe siècle, des savants le déchiffrent grâce à des inscriptions trilingues, dont celle qui est gravée sur la falaise de Behistun, en Iran.",
  "q": [
   {
    "q": "Vers quelle date les premiers signes cunéiformes apparaissent-ils ?",
    "o": [
     "Vers 1300 avant notre ère",
     "Vers 330 de notre ère",
     "Vers 3300 avant notre ère"
    ],
    "r": 2,
    "e": "Le texte situe l'apparition de l'écriture cunéiforme vers 3300 avant notre ère."
   },
   {
    "q": "Avec quel objet le scribe trace-t-il les signes ?",
    "o": [
     "Une plume de bronze",
     "Un roseau taillé",
     "Un pinceau de crin"
    ],
    "r": 1,
    "e": "Le texte indique que les signes sont tracés avec un roseau taillé."
   },
   {
    "q": "Que désigne le mot latin cuneus, à l'origine du nom cunéiforme ?",
    "o": [
     "Le coin",
     "Le roseau",
     "L'argile"
    ],
    "r": 0,
    "e": "Cuneus signifie le coin, en référence à la forme des signes imprimés."
   },
   {
    "q": "Que contiennent d'abord les tablettes ?",
    "o": [
     "Des poèmes religieux",
     "Des quantités de biens",
     "Des cartes de routes"
    ],
    "r": 1,
    "e": "Les premières tablettes enregistrent des quantités de moutons, d'orge ou d'huile."
   },
   {
    "q": "Qui doit gérer des réserves, selon le texte ?",
    "o": [
     "Les temples",
     "Les scribes itinérants",
     "Les paysans"
    ],
    "r": 0,
    "e": "Le texte mentionne les temples, qui doivent gérer des réserves, et les marchands, qui notent les dettes."
   },
   {
    "q": "Pourquoi certaines tablettes ont-elles traversé les siècles ?",
    "o": [
     "Elles étaient vernies",
     "Elles étaient rangées dans des jarres",
     "Elles ont été cuites par un incendie"
    ],
    "r": 2,
    "e": "Une tablette cuite accidentellement dans un incendie devient presque indestructible."
   },
   {
    "q": "Comment le scribe sèche-t-il habituellement sa tablette ?",
    "o": [
     "Dans un four de potier",
     "Au soleil",
     "À l'ombre d'un palmier"
    ],
    "r": 1,
    "e": "Le texte indique que la tablette est séchée au soleil, la cuisson au feu étant l'autre solution."
   },
   {
    "q": "D'après le texte, à quoi les signes servent-ils ensuite ?",
    "o": [
     "À noter des lois et des récits",
     "À marquer les limites des champs",
     "À servir de monnaie"
    ],
    "r": 0,
    "e": "Avec le temps, les signes servent aussi à noter des lois, des récits et des poèmes."
   },
   {
    "q": "Sur quel matériau les scribes écrivent-ils ?",
    "o": [
     "Le papyrus",
     "La pierre calcaire",
     "L'argile"
    ],
    "r": 2,
    "e": "L'argile humide est le support utilisé par les scribes mésopotamiens."
   },
   {
    "q": "Pourquoi l'écriture naît-elle, selon l'auteur ?",
    "o": [
     "De la volonté des prêtres",
     "Du désir de raconter des épopées",
     "Des besoins de comptabilité"
    ],
    "r": 2,
    "e": "L'auteur insiste sur ce point : l'écriture naît de la comptabilité, pas de la littérature."
   },
   {
    "q": "Quels signes les scribes tracent-ils sur l'argile ?",
    "o": [
     "Des signes en forme de coins",
     "Des dessins d'animaux",
     "Des lettres grecques"
    ],
    "r": 0,
    "e": "Les scribes tracent des signes en forme de coins avec un roseau taillé ; l'écriture s'appelle pour cela le cunéiforme."
   },
   {
    "q": "Que peut-on déduire de la présence de tablettes comptables dans les temples ?",
    "o": [
     "Les réserves étaient surveillées avec précision",
     "Les prêtres écrivaient surtout des poèmes",
     "Les troupeaux appartenaient aux scribes"
    ],
    "r": 0,
    "e": "Noter des quantités suppose un contrôle régulier des stocks et des entrées."
   },
   {
    "q": "Pourquoi les tablettes simplement séchées au soleil sont-elles plus rares aujourd'hui ?",
    "o": [
     "Elles ont toutes été recuites plus tard",
     "Elles étaient trop fragiles pour être lues",
     "L'humidité finit par les désagréger"
    ],
    "r": 2,
    "e": "Une tablette seulement séchée reste fragile face à l'humidité, contrairement à une tablette cuite."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La naissance de l'écriture liée aux besoins matériels",
     "La religion des villes mésopotamiennes",
     "La fabrication de la poterie antique"
    ],
    "r": 0,
    "e": "Le texte raconte comment l'écriture cunéiforme est apparue pour tenir des comptes."
   },
   {
    "q": "Pourquoi l'auteur évoque-t-il la littérature ?",
    "o": [
     "Pour citer un poème mésopotamien",
     "Pour montrer que l'écriture ne servait pas d'abord à raconter",
     "Pour dater les premiers livres imprimés"
    ],
    "r": 1,
    "e": "La mention sert à marquer l'écart entre l'usage premier, comptable, et l'usage narratif venu plus tard."
   },
   {
    "q": "Que fait le scribe juste avant d'imprimer les signes ?",
    "o": [
     "Il humecte et travaille l'argile",
     "Il cuit la tablette au feu",
     "Il trace un cadre à la règle"
    ],
    "r": 0,
    "e": "Le scribe travaille d'abord l'argile humide, puis y imprime les signes."
   },
   {
    "q": "À quoi servaient les petits jetons d'argile avant l'écriture ?",
    "o": [
     "À payer des impôts",
     "À compter des marchandises",
     "À sceller des contrats"
    ],
    "r": 1,
    "e": "Chaque forme de jeton correspondait à une quantité ou à un type de bien."
   },
   {
    "q": "Grâce à quoi le cunéiforme a-t-il été déchiffré au XIXe siècle ?",
    "o": [
     "Des tablettes retrouvées intactes",
     "Des traductions grecques d'Hérodote",
     "Des inscriptions trilingues comme celle de Behistun"
    ],
    "r": 2,
    "e": "Les inscriptions trilingues permettaient de comparer une langue connue et le cunéiforme."
   }
  ]
 },
 {
  "id": "b6",
  "theme": "histoire",
  "niveau": 2,
  "titre": "Le phare d'Alexandrie, une tour pour guider les navires",
  "corps": "Sur l'île de Pharos, face au port d'Alexandrie, une tour de pierre domine la mer. Sa construction s'achève au IIIe siècle avant notre ère, sous les premiers rois de la dynastie des Ptolémées. Les Anciens la comptent parmi les Sept Merveilles du monde.\n\nLe bâtiment est haut de plus de cent mètres. Il comporte une base carrée, un étage octogonal et, au sommet, une lanterne où brûle un feu. Des miroirs de métal poli renvoient la lumière vers le large. Les navires repèrent ainsi l'entrée du port, séparée en deux passes par une digue.\n\nLa tradition attribue la conception de l'édifice à l'architecte Sostrate de Cnide. Une inscription, rapportée par des auteurs anciens, le présente comme le dédicataire du monument, ce qui était rare : les bâtisseurs restent souvent anonymes.\n\nLe feu demandait un entretien constant. On y brûlait du bois, parfois de l'huile, et des gardiens se relayaient pour l'alimenter. Certains textes anciens affirment que les miroirs pouvaient incendier les navires ennemis ; les historiens considèrent aujourd'hui cette histoire comme peu crédible, faute de puissance suffisante.\n\nL'édifice n'a pas seulement une fonction pratique. Il affiche la puissance d'une ville devenue le grand carrefour commercial de la Méditerranée orientale, où se croisent le blé d'Égypte, l'huile et les épices.\n\nLe phare n'a pas disparu d'un coup. Les séismes l'ont fragilisé, l'entretien a cessé, et la mer a gagné. Il s'efface au Moyen Âge. À la fin du XVe siècle, un fort est construit sur l'emplacement, avec les pierres mêmes de la tour. C'est dans ces fondations que des blocs ont été identifiés bien plus tard.",
  "q": [
   {
    "q": "Sur quelle île le phare est-il construit ?",
    "o": [
     "Chypre",
     "Délos",
     "Pharos"
    ],
    "r": 2,
    "e": "Le phare se dresse sur l'île de Pharos, face au port d'Alexandrie."
   },
   {
    "q": "Quand sa construction s'achève-t-elle ?",
    "o": [
     "Au IIIe siècle avant notre ère",
     "Au Ier siècle de notre ère",
     "Au IIIe siècle de notre ère"
    ],
    "r": 0,
    "e": "Le texte date la fin des travaux du IIIe siècle avant notre ère."
   },
   {
    "q": "Sous quelle dynastie le phare est-il bâti ?",
    "o": [
     "Les Séleucides",
     "Les Ptolémées",
     "Les Antonins"
    ],
    "r": 1,
    "e": "La construction a lieu sous les premiers rois de la dynastie des Ptolémées."
   },
   {
    "q": "Quelle hauteur le texte attribue-t-il au bâtiment ?",
    "o": [
     "Plus de cent mètres",
     "Environ cinquante mètres",
     "Plus de trois cents mètres"
    ],
    "r": 0,
    "e": "Le texte indique une hauteur de plus de cent mètres."
   },
   {
    "q": "Quelle est la forme de l'étage intermédiaire ?",
    "o": [
     "Carrée",
     "Octogonale",
     "Circulaire"
    ],
    "r": 1,
    "e": "Le phare comporte une base carrée, un étage octogonal et une lanterne au sommet."
   },
   {
    "q": "Que fait-on dans la lanterne du sommet ?",
    "o": [
     "On y stocke le blé",
     "On y loge les gardiens",
     "On y entretient un feu"
    ],
    "r": 2,
    "e": "Un feu brûle dans la lanterne sommitale pour signaler le port."
   },
   {
    "q": "À quoi servent les miroirs de métal poli ?",
    "o": [
     "À chauffer la lanterne",
     "À mesurer la hauteur des vagues",
     "À renvoyer la lumière vers le large"
    ],
    "r": 2,
    "e": "Les miroirs renvoient la lumière du feu vers la mer, ce qui rend le phare visible de loin."
   },
   {
    "q": "Qu'est-ce qui sépare l'entrée du port en deux passes ?",
    "o": [
     "Une digue",
     "Une chaîne de rochers",
     "Un mur de la ville"
    ],
    "r": 0,
    "e": "Le texte mentionne une digue qui divise l'entrée du port en deux passes."
   },
   {
    "q": "Parmi quoi les Anciens classent-ils le phare ?",
    "o": [
     "Les douze travaux d'Hercule",
     "Les Sept Merveilles du monde",
     "Les sept collines de Rome"
    ],
    "r": 1,
    "e": "Le phare figure parmi les Sept Merveilles du monde antique."
   },
   {
    "q": "Quels produits le texte cite-t-il parmi les échanges d'Alexandrie ?",
    "o": [
     "Le sel, le fer et le bois",
     "La soie, le thé et le papier",
     "Le blé, l'huile et les épices"
    ],
    "r": 2,
    "e": "Le texte cite le blé d'Égypte, l'huile et les épices."
   },
   {
    "q": "Qu'est-ce qui abîme finalement l'édifice ?",
    "o": [
     "Les incendies de navires",
     "Les séismes",
     "Le sel de la mer"
    ],
    "r": 1,
    "e": "Le phare résiste longtemps, mais les séismes finissent par l'abîmer."
   },
   {
    "q": "Où a-t-on retrouvé des blocs du phare ?",
    "o": [
     "Dans les fondations d'un fort plus tardif",
     "Dans le musée d'Alexandrie",
     "Sous l'eau, au large de Chypre"
    ],
    "r": 0,
    "e": "Des blocs ont été réemployés dans les fondations d'un fort construit plus tard sur le site."
   },
   {
    "q": "Pourquoi le phare était-il placé à l'entrée du port ?",
    "o": [
     "Pour surveiller les marchandises",
     "Pour abriter les marchands",
     "Pour signaler la passe aux navires"
    ],
    "r": 2,
    "e": "Sa fonction était de rendre l'entrée du port repérable de loin, de jour comme de nuit."
   },
   {
    "q": "Que révèle la taille du monument sur la ville ?",
    "o": [
     "Que la pierre était rare en Égypte",
     "Qu'Alexandrie pouvait mobiliser de grandes ressources",
     "Que le port manquait de place"
    ],
    "r": 1,
    "e": "Un chantier de cette ampleur suppose des moyens financiers et techniques considérables."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Le phare d'Alexandrie, sa fonction et sa disparition",
     "La navigation en Méditerranée romaine",
     "La fondation de la ville d'Alexandrie"
    ],
    "r": 0,
    "e": "Le texte décrit le monument, son rôle pour les navires et sa destruction progressive."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Décrire une technique de guerre navale",
     "Expliquer la fabrication du verre antique",
     "Montrer qu'un bâtiment peut être à la fois utile et symbolique"
    ],
    "r": 2,
    "e": "L'auteur souligne que le phare servait aux navires tout en affichant la puissance de la ville."
   },
   {
    "q": "Qui la tradition désigne-t-elle comme concepteur du phare ?",
    "o": [
     "Ptolémée Philadelphe",
     "Sostrate de Cnide",
     "Héron d'Alexandrie"
    ],
    "r": 1,
    "e": "Le texte cite Sostrate de Cnide comme architecte du monument."
   },
   {
    "q": "Pourquoi l'histoire des miroirs incendiaires est-elle jugée peu crédible ?",
    "o": [
     "Faute de puissance suffisante",
     "Parce que les miroirs étaient en bois",
     "Parce qu'aucun auteur ancien n'en parle"
    ],
    "r": 0,
    "e": "Les historiens doutent qu'un tel dispositif ait pu enflammer un navire à distance."
   }
  ]
 },
 {
  "id": "a16",
  "theme": "nature",
  "niveau": 2,
  "titre": "Le labour invisible des vers de terre",
  "corps": "Charles Darwin a consacré son dernier livre aux vers de terre, publié en 1881. Ce choix surprit ses lecteurs, habitués à le voir traiter des espèces et de l'évolution. Pourtant, il estimait que ces animaux sans yeux transformaient les paysages plus efficacement que beaucoup d'autres.\n\nLe ver de terre avale la terre. Il en extrait les débris végétaux et les micro-organismes dont il se nourrit, puis rejette le reste sous forme de petits tas, appelés turricules. En traversant son tube digestif, la terre se mélange et se charge d'éléments nutritifs facilement assimilables par les plantes.\n\nEn creusant, l'animal ouvre aussi des galeries. Ces tunnels laissent entrer l'air et l'eau, ce qui améliore la structure du sol. Les racines y trouvent un chemin plus facile. Dans un champ, des milliers de vers peuvent ainsi travailler chaque année, sans bruit et sans machine.\n\nLe ver de terre n'a pas de poumons. Il respire par la peau, qui doit rester humide : c'est pourquoi il fuit la lumière et la sécheresse. Il est aussi hermaphrodite, c'est-à-dire qu'il possède à la fois les organes mâles et femelles, mais deux individus doivent s'accoupler pour échanger leurs cellules reproductrices.\n\nDarwin avait mesuré la quantité de terre remontée dans son jardin. Ses calculs, longtemps discutés, se sont révélés proches des estimations modernes. Il observait aussi que les objets laissés en surface finissent enfouis sous les déjections accumulées : ce travail explique pourquoi certains vestiges archéologiques se retrouvent sous plusieurs dizaines de centimètres de terre fine.\n\nUn sol privé de vers se compacte et perd de sa fertilité. Les agriculteurs qui labourent trop profondément ou emploient trop de produits chimiques réduisent souvent leur population. À l'inverse, les pratiques qui laissent les résidus de récolte au sol favorisent leur retour.",
  "q": [
   {
    "q": "À quel sujet Darwin a-t-il consacré son dernier livre ?",
    "o": [
     "Aux vers de terre",
     "Aux orchidées sauvages",
     "Aux oiseaux des îles"
    ],
    "r": 0,
    "e": "Le texte indique que son dernier livre portait sur les vers de terre."
   },
   {
    "q": "En quelle année ce livre a-t-il été publié ?",
    "o": [
     "En 1881",
     "En 1859",
     "En 1901"
    ],
    "r": 0,
    "e": "Le livre sur les vers de terre paraît en 1881."
   },
   {
    "q": "Comment ses lecteurs ont-ils réagi à ce choix ?",
    "o": [
     "Ils ont été surpris",
     "Ils ont été indifférents",
     "Ils ont protesté publiquement"
    ],
    "r": 0,
    "e": "Ce choix surprit des lecteurs habitués à d'autres sujets."
   },
   {
    "q": "Quel effet Darwin attribuait-il aux vers de terre ?",
    "o": [
     "Ils transforment les paysages",
     "Ils détruisent les récoltes",
     "Ils accélèrent l'érosion"
    ],
    "r": 0,
    "e": "Il estimait qu'ils transformaient les paysages plus efficacement que beaucoup d'autres animaux."
   },
   {
    "q": "Que fait le ver de la terre qu'il avale ?",
    "o": [
     "Il en extrait les débris végétaux",
     "Il la rejette sans la modifier",
     "Il la transporte en surface intacte"
    ],
    "r": 0,
    "e": "Le ver extrait de la terre les débris végétaux et les micro-organismes dont il se nourrit."
   },
   {
    "q": "Comment s'appellent les petits tas rejetés par le ver ?",
    "o": [
     "Des turricules",
     "Des galeries",
     "Des nodules"
    ],
    "r": 0,
    "e": "Le texte nomme turricules les petits tas de terre rejetés."
   },
   {
    "q": "Que gagne la terre en traversant le tube digestif ?",
    "o": [
     "Elle se charge d'éléments nutritifs",
     "Elle perd toute sa matière organique",
     "Elle devient plus acide"
    ],
    "r": 0,
    "e": "La terre se mélange et se charge d'éléments assimilables par les plantes."
   },
   {
    "q": "Que créent les galeries creusées par le ver ?",
    "o": [
     "Des passages pour l'air et l'eau",
     "Des réserves de nourriture",
     "Des abris pour les racines mortes"
    ],
    "r": 0,
    "e": "Les tunnels laissent entrer l'air et l'eau et améliorent la structure du sol."
   },
   {
    "q": "Par où le ver de terre respire-t-il ?",
    "o": [
     "Par la peau",
     "Par des poumons",
     "Par la bouche"
    ],
    "r": 0,
    "e": "Dépourvu de poumons, le ver respire par sa peau, qui doit rester humide."
   },
   {
    "q": "Pourquoi le ver fuit-il la lumière et la sécheresse ?",
    "o": [
     "Parce que sa peau doit rester humide",
     "Parce qu'il craint les prédateurs",
     "Parce qu'il cherche du sucre"
    ],
    "r": 0,
    "e": "La respiration cutanée exige une peau humide, que le soleil dessèche."
   },
   {
    "q": "Que signifie le mot hermaphrodite ?",
    "o": [
     "L'animal possède les organes des deux sexes",
     "L'animal change de sexe chaque année",
     "L'animal n'a pas de sexe"
    ],
    "r": 0,
    "e": "Le ver possède à la fois les organes mâles et femelles."
   },
   {
    "q": "Que sont devenus les calculs de Darwin ?",
    "o": [
     "Ils se sont révélés proches des estimations modernes",
     "Ils ont été totalement invalidés",
     "Ils n'ont jamais été vérifiés"
    ],
    "r": 0,
    "e": "Longtemps discutés, ses calculs se sont révélés proches des estimations actuelles."
   },
   {
    "q": "Pourquoi certains vestiges archéologiques sont-ils enfouis ?",
    "o": [
     "Parce que les déjections des vers s'accumulent",
     "Parce que le sol se soulève",
     "Parce que l'eau les recouvre"
    ],
    "r": 0,
    "e": "L'accumulation de terre fine remontée par les vers enterre peu à peu les objets de surface."
   },
   {
    "q": "Que fait un sol privé de vers de terre ?",
    "o": [
     "Il se compacte et perd de sa fertilité",
     "Il devient plus léger",
     "Il retient mieux l'eau"
    ],
    "r": 0,
    "e": "Le texte conclut qu'un tel sol se compacte et perd sa fertilité."
   },
   {
    "q": "Quelles pratiques réduisent la population de vers ?",
    "o": [
     "Le labour profond et les produits chimiques",
     "Le dépôt de résidus de récolte",
     "L'absence d'arrosage"
    ],
    "r": 0,
    "e": "Le labour trop profond et l'usage excessif de produits chimiques nuisent aux vers."
   },
   {
    "q": "Pourquoi les vers de terre rendent-ils service aux cultures ?",
    "o": [
     "Parce qu'ils améliorent le sol sans intervention",
     "Parce qu'ils mangent les insectes nuisibles",
     "Parce qu'ils arrosent les plantes"
    ],
    "r": 0,
    "e": "Leur travail mélange la terre, aère le sol et libère des éléments nutritifs."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "Le rôle des vers de terre dans la fertilité du sol",
     "La classification des animaux sans yeux",
     "L'histoire des jardins anglais"
    ],
    "r": 0,
    "e": "Le texte décrit comment les vers transforment et améliorent la terre."
   }
  ]
 },
 {
  "id": "a21",
  "theme": "nature",
  "niveau": 2,
  "titre": "La forêt qui fabrique une partie de sa pluie",
  "corps": "Un arbre transpire. Ses racines pompent l'eau du sol, et cette eau remonte jusqu'aux feuilles. Là, de minuscules ouvertures, les stomates, la laissent s'échapper sous forme de vapeur. Une grande forêt rejette ainsi dans l'air des quantités d'eau considérables.\n\nEn Amazonie, ce phénomène prend une ampleur particulière. La forêt est immense, chaude et humide, et la végétation y est dense. L'eau évaporée s'élève, se condense en altitude et forme des nuages. Une partie de cette vapeur retombe ensuite en pluie sur la forêt elle-même, plus loin vers l'intérieur du continent.\n\nLes alizés apportent de l'humidité depuis l'Atlantique ; la forêt la renvoie plus loin vers l'intérieur, comme une pompe. Les chercheurs parlent de rivières volantes pour décrire ces masses d'humidité qui circulent au-dessus du bassin. Dans les années 1970, des scientifiques brésiliens ont analysé la composition de l'eau de pluie pour en retracer l'origine. Leurs travaux ont montré qu'une part importante des précipitations venait de l'évaporation de la forêt, et non seulement de l'océan Atlantique.\n\nCe circuit a une conséquence pratique. Quand une zone est déboisée, l'eau n'est plus renvoyée vers l'atmosphère. Le sol nu chauffe davantage, l'air est plus sec, et les pluies peuvent diminuer dans les régions voisines. Les climatologues redoutent un seuil au-delà duquel une partie de la forêt ne pourrait plus entretenir son propre régime de pluies.\n\nLa forêt rend aussi d'autres services. Elle retient les sols, limite l'érosion et stocke du carbone dans ses troncs. Mais son rôle dans le cycle de l'eau suffit à en faire bien plus qu'un simple ensemble d'arbres : un système qui fabrique en partie son propre climat.",
  "q": [
   {
    "q": "Que font les racines de l'arbre ?",
    "o": [
     "Elles pompent l'eau du sol",
     "Elles captent la lumière",
     "Elles rejettent de la vapeur"
    ],
    "r": 0,
    "e": "Les racines prélèvent l'eau du sol, qui remonte ensuite jusqu'aux feuilles."
   },
   {
    "q": "Par quelle ouverture l'eau s'échappe-t-elle des feuilles ?",
    "o": [
     "Par les stomates",
     "Par les racines",
     "Par l'écorce"
    ],
    "r": 0,
    "e": "Les stomates sont les minuscules ouvertures qui laissent partir la vapeur d'eau."
   },
   {
    "q": "Sous quelle forme l'eau quitte-t-elle la feuille ?",
    "o": [
     "En vapeur",
     "En liquide",
     "En glace"
    ],
    "r": 0,
    "e": "L'eau s'échappe des feuilles sous forme de vapeur."
   },
   {
    "q": "Que forment les nuages au-dessus de la forêt ?",
    "o": [
     "De la pluie",
     "Du brouillard sec",
     "Des vents violents"
    ],
    "r": 0,
    "e": "La vapeur se condense et retombe en pluie sur la forêt."
   },
   {
    "q": "Où la vapeur se condense-t-elle ?",
    "o": [
     "En altitude",
     "Au niveau du sol",
     "Sous terre"
    ],
    "r": 0,
    "e": "L'eau évaporée s'élève et se condense en altitude."
   },
   {
    "q": "Comment les chercheurs nomment-ils ces masses d'humidité ?",
    "o": [
     "Des rivières volantes",
     "Des nuages secs",
     "Des mers intérieures"
    ],
    "r": 0,
    "e": "L'expression rivières volantes désigne ces flux d'humidité au-dessus du bassin."
   },
   {
    "q": "Quand les scientifiques brésiliens ont-ils analysé l'eau de pluie ?",
    "o": [
     "Dans les années 1970",
     "Dans les années 1920",
     "Dans les années 2000"
    ],
    "r": 0,
    "e": "Leurs analyses de la composition de l'eau de pluie datent des années 1970."
   },
   {
    "q": "Qu'ont montré ces travaux ?",
    "o": [
     "Une part importante des pluies vient de la forêt",
     "Toute la pluie vient de l'océan",
     "La forêt ne rejette presque pas d'eau"
    ],
    "r": 0,
    "e": "Les précipitations proviennent en partie de l'évaporation de la forêt elle-même."
   },
   {
    "q": "Que se passe-t-il quand une zone est déboisée ?",
    "o": [
     "L'eau n'est plus renvoyée vers l'atmosphère",
     "La pluie augmente aussitôt",
     "Le sol se refroidit"
    ],
    "r": 0,
    "e": "Sans arbres, l'eau n'est plus renvoyée dans l'air par transpiration."
   },
   {
    "q": "Que fait le sol nu ?",
    "o": [
     "Il chauffe davantage",
     "Il retient plus d'eau",
     "Il produit plus de vapeur"
    ],
    "r": 0,
    "e": "Le sol dénudé chauffe davantage et l'air devient plus sec."
   },
   {
    "q": "Que redoutent les climatologues ?",
    "o": [
     "Un seuil au-delà duquel la forêt ne peut plus entretenir ses pluies",
     "Une hausse du niveau de l'océan Atlantique",
     "Un refroidissement général du bassin"
    ],
    "r": 0,
    "e": "Au-delà d'un certain seuil, le recyclage de l'eau ne suffirait plus."
   },
   {
    "q": "Quels autres services rend la forêt ?",
    "o": [
     "Elle retient les sols et stocke du carbone",
     "Elle produit de l'engrais",
     "Elle refroidit les océans"
    ],
    "r": 0,
    "e": "La forêt limite l'érosion et stocke du carbone dans ses troncs."
   },
   {
    "q": "Pourquoi la pluie peut-elle diminuer loin des zones déboisées ?",
    "o": [
     "Parce que l'humidité vient en partie des arbres voisins",
     "Parce que le vent change de direction",
     "Parce que l'océan s'éloigne"
    ],
    "r": 0,
    "e": "L'eau évaporée plus loin alimente des pluies qui tombent à distance."
   },
   {
    "q": "Pourquoi une forêt produit-elle plus de vapeur qu'un champ ?",
    "o": [
     "Parce qu'elle transpire beaucoup plus",
     "Parce que son sol est plus sec",
     "Parce qu'elle attire les nuages"
    ],
    "r": 0,
    "e": "La densité des arbres multiplie la surface qui rejette de l'eau dans l'air."
   },
   {
    "q": "Pourquoi la forêt est-elle plus qu'un ensemble d'arbres ?",
    "o": [
     "Parce qu'elle fabrique en partie son climat",
     "Parce qu'elle abrite des villes",
     "Parce qu'elle ne brûle jamais"
    ],
    "r": 0,
    "e": "Le texte la présente comme un système qui entretient son propre régime de pluies."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "Le rôle de la forêt amazonienne dans le cycle de l'eau",
     "La culture du soja en Amazonie",
     "La formation des ouragans atlantiques"
    ],
    "r": 0,
    "e": "Le texte explique comment la forêt alimente une partie de ses propres pluies."
   },
   {
    "q": "Pourquoi l'auteur décrit-il d'abord la transpiration d'un arbre ?",
    "o": [
     "Pour partir du mécanisme avant d'élargir à la forêt",
     "Pour expliquer la croissance du bois",
     "Pour décrire les racines en détail"
    ],
    "r": 0,
    "e": "Le passage du particulier au général rend le phénomène compréhensible."
   }
  ]
 },
 {
  "id": "b10",
  "theme": "sciences",
  "niveau": 2,
  "titre": "Pourquoi on sale les routes gelées",
  "corps": "Sur une route gelée, on répand du sel. Le geste semble paradoxal : le sel ne chauffe rien. Il empêche pourtant la glace de tenir.\n\nLe sel se dissout dans la très fine pellicule d'eau qui recouvre toujours la glace. Les molécules d'eau sont alors retenues par les ions du sel et se réorganisent plus difficilement en cristaux. Résultat : l'eau gèle à une température plus basse. Une saumure très concentrée reste liquide jusqu'à environ moins vingt degrés.\n\nLe sel agit tant qu'il reste de l'eau liquide. À mesure que la température baisse, la dissolution ralentit, et sous une certaine valeur, appelée point eutectique, le mélange entier se solidifie : pour le sel de cuisine, cette limite se situe autour de moins vingt et un degrés. Au-delà, aucun ajout de sel ne fera fondre la glace.\n\nCe mécanisme a une limite pratique. Sans eau liquide, le sel ne peut pas se dissoudre et n'agit plus ; par grand froid, il devient donc inutile, et les services routiers utilisent alors du sable ou d'autres fondants. Le sable, lui, ne fond rien : il augmente l'adhérence en créant des aspérités entre le pneu et la chaussée. C'est une solution de sécurité, pas de dégel, et il faut ensuite le balayer pour ne pas boucher les avaloirs.\n\nLe sel a aussi un coût caché. Il corrode les carrosseries et les ponts, attaque les pattes des animaux et se concentre dans les sols au bord des routes. La corrosion a un mécanisme simple : l'eau salée conduit mieux l'électricité que l'eau pure et accélère les réactions qui attaquent l'acier des carrosseries et les armatures du béton. Certaines villes réduisent donc les épandages et privilégient le raclage mécanique.\n\nLe même principe sert en cuisine : pour faire de la glace sans congélateur, on entoure un récipient de glace pilée et de sel. La saumure descend sous zéro et le mélange sucré se fige. Dans une casserole, en revanche, le sel relève le goût mais ne change presque pas la température d'ébullition : l'effet visible sur une route gelée reste sans commune mesure avec celui d'une cuisine.",
  "q": [
   {
    "q": "Que fait le sel sur une route gelée, selon le texte ?",
    "o": [
     "Il réchauffe la chaussée",
     "Il empêche la glace de tenir",
     "Il aspire l'eau de la route"
    ],
    "r": 1,
    "e": "Le sel ne chauffe rien, mais il empêche la glace de se maintenir."
   },
   {
    "q": "Dans quoi le sel doit-il se dissoudre pour agir ?",
    "o": [
     "Dans la fine pellicule d'eau sur la glace",
     "Dans le goudron de la route",
     "Dans l'air humide"
    ],
    "r": 0,
    "e": "Le sel se dissout dans la très fine pellicule d'eau qui recouvre la glace."
   },
   {
    "q": "Qu'est-ce qui empêche les molécules d'eau de former des cristaux ?",
    "o": [
     "La pression des pneus",
     "Le vent",
     "Les ions du sel"
    ],
    "r": 2,
    "e": "Les molécules d'eau sont retenues par les ions du sel et se réorganisent plus difficilement."
   },
   {
    "q": "Quel est l'effet du sel sur la température de gel ?",
    "o": [
     "Il l'augmente",
     "Il l'abaisse",
     "Il ne la modifie pas"
    ],
    "r": 1,
    "e": "L'eau salée gèle à une température plus basse que l'eau pure."
   },
   {
    "q": "Jusqu'à quelle température une saumure très concentrée reste-t-elle liquide ?",
    "o": [
     "Environ moins vingt degrés",
     "Environ moins deux degrés",
     "Environ moins soixante degrés"
    ],
    "r": 0,
    "e": "Le texte indique une limite d'environ moins vingt degrés."
   },
   {
    "q": "Que se passe-t-il sans eau liquide ?",
    "o": [
     "Le sel devient un chauffage",
     "Le sel durcit la glace",
     "Le sel ne peut pas se dissoudre et n'agit plus"
    ],
    "r": 2,
    "e": "Sans eau liquide, pas de dissolution, donc pas d'effet sur la glace."
   },
   {
    "q": "Que font les services routiers par grand froid ?",
    "o": [
     "Ils utilisent du sable ou d'autres fondants",
     "Ils doublent la dose de sel",
     "Ils attendent le dégel"
    ],
    "r": 0,
    "e": "Par grand froid, le sel est inefficace : on emploie du sable ou d'autres fondants."
   },
   {
    "q": "Quel dommage le sel cause-t-il aux véhicules ?",
    "o": [
     "Il dégonfle les pneus",
     "Il bloque les essuie-glaces",
     "Il corrode les carrosseries"
    ],
    "r": 2,
    "e": "Le sel corrode les carrosseries et les ponts."
   },
   {
    "q": "Quels animaux le texte mentionne-t-il ?",
    "o": [
     "Les oiseaux des routes",
     "Ceux dont les pattes sont attaquées",
     "Les poissons des rivières"
    ],
    "r": 1,
    "e": "Le sel attaque les pattes des animaux qui marchent sur les bords de route."
   },
   {
    "q": "Que font certaines villes pour limiter ces effets ?",
    "o": [
     "Elles réduisent les épandages et raclent la neige",
     "Elles interdisent la circulation",
     "Elles chauffent les routes"
    ],
    "r": 0,
    "e": "Certaines villes réduisent les épandages et privilégient le raclage mécanique."
   },
   {
    "q": "Quel effet le sel a-t-il sur l'ébullition de l'eau dans une casserole ?",
    "o": [
     "Il la rend beaucoup plus rapide",
     "Il la modifie à peine",
     "Il l'abaisse fortement"
    ],
    "r": 1,
    "e": "Le texte note que le sel ne change presque pas la température d'ébullition."
   },
   {
    "q": "Pourquoi le sel est-il inefficace sur une route très froide et sèche ?",
    "o": [
     "Parce qu'il est soufflé par le vent",
     "Parce que la glace est trop dure",
     "Parce qu'il lui manque l'eau nécessaire pour se dissoudre"
    ],
    "r": 2,
    "e": "L'action du sel suppose un peu d'eau liquide pour former une saumure."
   },
   {
    "q": "Pourquoi le sel s'accumule-t-il dans les sols en bord de route ?",
    "o": [
     "Parce que les plantes le fabriquent",
     "Parce que le vent le dépose",
     "Parce qu'il est lessivé par la fonte et reste sur place"
    ],
    "r": 2,
    "e": "L'eau de fonte entraîne le sel vers les bas-côtés, où il s'accumule."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "L'histoire du commerce du sel",
     "Le fonctionnement et les limites du salage des routes",
     "La fabrication du sel de cuisine"
    ],
    "r": 1,
    "e": "Le texte explique l'effet du sel sur la glace, ses limites et ses inconvénients."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Expliquer un geste courant et en montrer les conséquences",
     "Recommander une marque de fondant",
     "Décrire un paysage d'hiver"
    ],
    "r": 0,
    "e": "L'auteur part d'un geste banal pour exposer le mécanisme physique et ses coûts."
   },
   {
    "q": "Pourquoi la comparaison avec la cuisine est-elle utile ?",
    "o": [
     "Elle prouve que le sel est un aliment",
     "Elle explique comment cuire des pâtes",
     "Elle montre que le même sel agit très différemment selon la quantité d'eau"
    ],
    "r": 2,
    "e": "La comparaison souligne l'écart d'effet entre une pincée dans l'eau et un épandage massif sur la glace."
   },
   {
    "q": "Qu'appelle-t-on le point eutectique ?",
    "o": [
     "La dose de sel maximale autorisée",
     "La température sous laquelle le mélange se solidifie",
     "La température de fusion du sel pur"
    ],
    "r": 1,
    "e": "Sous cette valeur, la saumure ne peut plus rester liquide, quel que soit l'ajout de sel."
   },
   {
    "q": "Comment le sable améliore-t-il la sécurité ?",
    "o": [
     "Il augmente l'adhérence entre le pneu et la chaussée",
     "Il fait fondre la glace",
     "Il absorbe l'eau de fonte"
    ],
    "r": 0,
    "e": "Le sable crée des aspérités qui améliorent l'adhérence, sans agir sur la glace."
   }
  ]
 },
 {
  "id": "b5",
  "theme": "sciences",
  "niveau": 2,
  "titre": "Pourquoi le ciel est bleu et le coucher rouge",
  "corps": "La lumière du Soleil paraît blanche, mais elle contient toutes les couleurs. En traversant l'atmosphère, elle rencontre des molécules d'azote et d'oxygène, bien plus petites que les longueurs d'onde qu'elle transporte.\n\nCes molécules diffusent la lumière dans toutes les directions. Ce phénomène, décrit par Lord Rayleigh à la fin du XIXe siècle, n'agit pas également sur toutes les couleurs : plus la longueur d'onde est courte, plus la diffusion est forte. Le bleu, situé vers 450 nanomètres, est donc diffusé bien plus que le rouge, vers 700 nanomètres.\n\nQuand on regarde le ciel loin du Soleil, on reçoit cette lumière bleue déviée. Au coucher, en revanche, les rayons traversent une plus grande épaisseur d'atmosphère : le bleu a été diffusé ailleurs, et il ne reste presque que les grandes longueurs d'onde, d'où les teintes orangées.\n\nUn détail surprend souvent : à la montagne, l'ombre portée sur la neige paraît bleue. La lumière qui éclaire cette ombre vient du ciel, donc d'une lumière appauvrie en grandes longueurs d'onde. La neige, elle, renvoie presque tout ce qu'elle reçoit.\n\nLa diffusion dépend aussi de la taille des particules. Quand l'air contient beaucoup de poussières ou de grosses gouttes, comme après un orage, elle ne favorise plus autant les courtes longueurs d'onde : le ciel blanchit, devient laiteux, et les couchers perdent leur éclat.\n\nSur Mars, l'atmosphère est très ténue et chargée de fines poussières ocre. Le ciel y prend une teinte beige, et le Soleil couchant paraît bleuté : les rôles sont en quelque sorte inversés par rapport à la Terre.\n\nSur la Lune, sans atmosphère, le ciel paraît noir même en plein jour. C'est la preuve que la couleur du ciel ne vient pas du vide mais de l'air lui-même.",
  "q": [
   {
    "q": "De quelle couleur paraît la lumière du Soleil ?",
    "o": [
     "Blanche",
     "Jaune uniforme",
     "Bleue"
    ],
    "r": 0,
    "e": "La lumière solaire paraît blanche, mais elle contient toutes les couleurs."
   },
   {
    "q": "Quelles molécules la lumière rencontre-t-elle dans l'atmosphère ?",
    "o": [
     "De vapeur d'eau seulement",
     "De dioxyde de carbone uniquement",
     "D'azote et d'oxygène"
    ],
    "r": 2,
    "e": "Le texte cite les molécules d'azote et d'oxygène."
   },
   {
    "q": "Qui a décrit ce phénomène de diffusion ?",
    "o": [
     "Isaac Newton",
     "Lord Rayleigh",
     "Galilée"
    ],
    "r": 1,
    "e": "Le phénomène est décrit par Lord Rayleigh à la fin du XIXe siècle."
   },
   {
    "q": "Quelle couleur est diffusée le plus fortement ?",
    "o": [
     "Le bleu",
     "Le rouge",
     "Le jaune"
    ],
    "r": 0,
    "e": "Plus la longueur d'onde est courte, plus la diffusion est forte : le bleu est donc le plus diffusé."
   },
   {
    "q": "Quelle longueur d'onde le texte attribue-t-il au bleu ?",
    "o": [
     "Environ 700 nanomètres",
     "Environ 450 nanomètres",
     "Environ 900 nanomètres"
    ],
    "r": 1,
    "e": "Le bleu est situé vers 450 nanomètres, le rouge vers 700."
   },
   {
    "q": "Quelle longueur d'onde le texte attribue-t-il au rouge ?",
    "o": [
     "Vers 450 nanomètres",
     "Vers 250 nanomètres",
     "Vers 700 nanomètres"
    ],
    "r": 2,
    "e": "Le rouge correspond à des longueurs d'onde plus grandes, vers 700 nanomètres."
   },
   {
    "q": "Que reçoit l'œil quand il regarde le ciel loin du Soleil ?",
    "o": [
     "De la lumière bleue déviée",
     "De la lumière rouge directe",
     "De la lumière réfléchie par le sol"
    ],
    "r": 0,
    "e": "L'observateur reçoit la lumière bleue déviée dans sa direction par les molécules."
   },
   {
    "q": "Qu'est-ce qui change au coucher du Soleil ?",
    "o": [
     "La vitesse de la lumière",
     "L'épaisseur d'atmosphère traversée par les rayons",
     "La composition chimique de l'air"
    ],
    "r": 1,
    "e": "Les rayons traversent alors une plus grande épaisseur d'atmosphère."
   },
   {
    "q": "Pourquoi le ciel du coucher prend-il des teintes orangées ?",
    "o": [
     "Parce que le Soleil refroidit",
     "Parce que les nuages deviennent rouges",
     "Parce que le bleu a été diffusé ailleurs"
    ],
    "r": 2,
    "e": "Le bleu étant diffusé hors du trajet, il ne reste presque que les grandes longueurs d'onde."
   },
   {
    "q": "Comment le ciel apparaît-il sur la Lune en plein jour ?",
    "o": [
     "Noir",
     "Bleu pâle",
     "Blanc laiteux"
    ],
    "r": 0,
    "e": "Sans atmosphère, le ciel lunaire paraît noir même en plein jour."
   },
   {
    "q": "Pourquoi la diffusion est-elle plus forte pour les courtes longueurs d'onde ?",
    "o": [
     "Parce que le bleu est plus chaud",
     "Parce que les molécules d'air sont petites devant ces ondes",
     "Parce que l'ozone absorbe le rouge"
    ],
    "r": 1,
    "e": "Le texte souligne que les molécules sont bien plus petites que les longueurs d'onde, ce qui favorise la diffusion des plus courtes."
   },
   {
    "q": "Pourquoi l'ombre sur la neige paraît-elle bleue à la montagne ?",
    "o": [
     "Parce qu'elle est éclairée par la lumière du ciel, appauvrie en grandes longueurs d'onde",
     "Parce que la neige contient un pigment bleu",
     "Parce que le froid bleuit la lumière"
    ],
    "r": 0,
    "e": "Le texte explique que la lumière éclairant cette ombre vient du ciel, donc d'une lumière appauvrie en grandes longueurs d'onde."
   },
   {
    "q": "Que prouve l'observation faite sur la Lune ?",
    "o": [
     "Que la Lune n'a pas de sol",
     "Que la couleur du ciel vient de l'air",
     "Que le Soleil éclaire moins la Lune"
    ],
    "r": 1,
    "e": "L'absence d'atmosphère lunaire montre que la couleur du ciel est produite par l'air."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "L'origine de la couleur du ciel",
     "La composition chimique du Soleil",
     "L'histoire de l'astronomie"
    ],
    "r": 0,
    "e": "Le texte explique pourquoi le ciel est bleu et pourquoi il rougit au coucher."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Décrire un paysage de montagne",
     "Comparer la Terre et Mars",
     "Expliquer un phénomène quotidien par la physique de la diffusion"
    ],
    "r": 2,
    "e": "L'auteur part d'une observation courante pour en donner l'explication physique."
   },
   {
    "q": "Que se passerait-il si l'atmosphère disparaissait ?",
    "o": [
     "Le ciel deviendrait noir et le Soleil resterait visible",
     "Le ciel deviendrait uniformément rouge",
     "Le Soleil cesserait de briller"
    ],
    "r": 0,
    "e": "Sans air pour diffuser la lumière, le ciel serait noir comme sur la Lune."
   },
   {
    "q": "Pourquoi l'ombre sur la neige paraît-elle bleue ?",
    "o": [
     "Parce que la neige absorbe le rouge",
     "Parce qu'elle est éclairée par la lumière du ciel",
     "Parce que l'air froid colore la lumière"
    ],
    "r": 1,
    "e": "La lumière indirecte qui éclaire l'ombre vient du ciel, donc d'une lumière riche en bleu."
   },
   {
    "q": "Pourquoi le ciel blanchit-il après un orage ?",
    "o": [
     "Parce que l'ozone augmente",
     "Parce que le Soleil est plus bas",
     "Parce que de grosses particules diffusent toutes les couleurs"
    ],
    "r": 2,
    "e": "Avec de grosses particules, la diffusion ne privilégie plus les courtes longueurs d'onde."
   }
  ]
 },
 {
  "id": "b3",
  "theme": "société",
  "niveau": 2,
  "titre": "Ce que le marché du samedi apprend d'une ville",
  "corps": "Le samedi matin, sur la place, les étals se montent avant le jour. Les producteurs installent leurs cageots, alignent les pommes, écrivent les prix à la craie sur de petites ardoises. En une heure, la place vide devient un lieu de circulation, de bruit et de négociation.\n\nUn marché n'est pas seulement un commerce. C'est un rendez-vous. Des habitants qui ne se croisent jamais dans la semaine s'y retrouvent : la boulangère connaît les prénoms, le fromager demande des nouvelles, les enfants tournent autour des bancs. Les règles y sont plus souples que dans un magasin : on goûte, on compare, on discute un prix.\n\nLes marchés ne datent pas d'hier. Au Moyen Âge, les villes obtiennent du seigneur le droit d'organiser un marché un jour fixe ; ce privilège attire les paysans des environs et fait entrer de la monnaie dans les caisses. Les halles, d'abord de bois puis de pierre, abritent les étals de la pluie et du soleil. Leur emplacement, souvent au centre, explique la forme de nombreuses places actuelles.\n\nLes règles y sont anciennes : poids vérifiés, places attribuées, horaires d'ouverture et de fermeture. Un marché ne s'improvise pas ; il se tient parce qu'une autorité l'a autorisé et parce que des clients savent qu'ils y trouveront des produits.\n\nLes marchés ont aussi une fonction économique discrète. Ils permettent à de petits producteurs de vendre sans passer par un intermédiaire, et donc de garder une part plus grande du prix. En contrepartie, le travail commence tôt, dépend de la météo et ne garantit aucun revenu fixe.\n\nDepuis les années 1970, la grande distribution a pris l'essentiel des achats alimentaires. Les marchés ont reculé, puis certains ont retrouvé de la clientèle, à la recherche de produits frais, de contact direct ou de prix négociés. Aujourd'hui, certaines villes limitent le nombre d'emplacements ou imposent des produits locaux. L'objectif affiché est de préserver la diversité des étals plutôt que la seule fréquentation.",
  "q": [
   {
    "q": "À quel moment les étals sont-ils installés ?",
    "o": [
     "La veille au soir",
     "En fin de matinée",
     "Avant le jour"
    ],
    "r": 2,
    "e": "Le texte précise que les étals se montent avant le jour."
   },
   {
    "q": "Sur quoi les prix sont-ils écrits ?",
    "o": [
     "De petites ardoises",
     "Des sacs en papier",
     "Des panneaux de bois cloués"
    ],
    "r": 0,
    "e": "Les producteurs écrivent les prix à la craie sur de petites ardoises."
   },
   {
    "q": "Quel jour le marché décrit a-t-il lieu ?",
    "o": [
     "Le dimanche",
     "Le samedi",
     "Le mercredi"
    ],
    "r": 1,
    "e": "Le texte ouvre sur le samedi matin."
   },
   {
    "q": "Selon le texte, qu'est un marché en plus d'un commerce ?",
    "o": [
     "Un rendez-vous",
     "Une administration",
     "Un entrepôt"
    ],
    "r": 0,
    "e": "L'auteur écrit qu'un marché n'est pas seulement un commerce, mais aussi un rendez-vous."
   },
   {
    "q": "Quelle différence avec un magasin le texte souligne-t-il ?",
    "o": [
     "Les prix sont fixes",
     "On paie seulement par carte",
     "On peut goûter et discuter le prix"
    ],
    "r": 2,
    "e": "Sur un marché, les règles sont plus souples : on goûte, on compare, on discute un prix."
   },
   {
    "q": "Qui profite de l'absence d'intermédiaire ?",
    "o": [
     "Les transporteurs",
     "Les petits producteurs",
     "Les grossistes"
    ],
    "r": 1,
    "e": "Les petits producteurs gardent une part plus grande du prix en vendant directement."
   },
   {
    "q": "Quelle contrainte le texte associe-t-il au métier de producteur ?",
    "o": [
     "Un revenu fixe garanti",
     "Une fermeture annuelle obligatoire",
     "Un travail qui commence tôt"
    ],
    "r": 2,
    "e": "Le travail commence tôt, dépend de la météo et ne garantit aucun revenu fixe."
   },
   {
    "q": "Que font certaines villes depuis quelques années ?",
    "o": [
     "Elles interdisent tout marché",
     "Elles limitent le nombre d'emplacements",
     "Elles fixent elles-mêmes tous les prix"
    ],
    "r": 1,
    "e": "Certaines villes limitent le nombre d'emplacements ou imposent des produits locaux."
   },
   {
    "q": "Quel objectif ces villes affichent-elles ?",
    "o": [
     "Préserver la diversité des étals",
     "Augmenter le nombre de visiteurs",
     "Réduire les horaires d'ouverture"
    ],
    "r": 0,
    "e": "L'objectif affiché est de préserver la diversité des étals plutôt que la seule fréquentation."
   },
   {
    "q": "Qui demande des nouvelles des habitués, selon le texte ?",
    "o": [
     "Le libraire",
     "Le facteur",
     "Le fromager"
    ],
    "r": 2,
    "e": "Le texte cite le fromager qui demande des nouvelles, et la boulangère qui connaît les prénoms."
   },
   {
    "q": "Quel avantage un marché offre-t-il aux petits producteurs ?",
    "o": [
     "Vendre sans intermédiaire et garder une part plus grande du prix",
     "Vendre plus cher qu'en grande surface",
     "Recevoir une aide de la mairie"
    ],
    "r": 0,
    "e": "Le texte parle d'une fonction économique discrète : vendre sans intermédiaire, donc garder une part plus grande du prix."
   },
   {
    "q": "Pourquoi la météo est-elle un problème pour ces producteurs ?",
    "o": [
     "Elle modifie la fréquentation et l'état des produits",
     "Elle oblige à fermer les halles",
     "Elle change les horaires de la mairie"
    ],
    "r": 0,
    "e": "Pluie ou froid réduisent les ventes, et les produits frais supportent mal les écarts de température."
   },
   {
    "q": "Pourquoi une ville peut-elle tenir à la diversité des étals ?",
    "o": [
     "Pour augmenter les taxes locales",
     "Pour limiter le nombre de clients",
     "Pour éviter une place dominée par un seul type de vente"
    ],
    "r": 2,
    "e": "La diversité évite qu'un seul type de commerce occupe toute la place et attire des publics différents."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Les fonctions sociales et économiques d'un marché",
     "L'histoire des halles médiévales",
     "Les règles d'hygiène alimentaire"
    ],
    "r": 0,
    "e": "Le texte décrit le marché comme un lieu de rencontre autant qu'un lieu de vente."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Décrire une recette de saison",
     "Montrer qu'un marché remplit plusieurs rôles à la fois",
     "Critiquer les grandes surfaces"
    ],
    "r": 1,
    "e": "L'auteur relie commerce, sociabilité et économie locale pour montrer la richesse de ce lieu."
   },
   {
    "q": "Que suggère le titre sur le propos du texte ?",
    "o": [
     "Qu'un marché renseigne sur la vie d'une ville",
     "Qu'il faut acheter le samedi",
     "Que les villes manquent de places"
    ],
    "r": 0,
    "e": "Le titre annonce que le marché révèle la vie sociale et économique d'une ville."
   },
   {
    "q": "Qu'obtenaient les villes au Moyen Âge pour organiser un marché ?",
    "o": [
     "Une autorisation royale annuelle",
     "Un droit accordé par le seigneur",
     "Un prêt de la corporation"
    ],
    "r": 1,
    "e": "Le droit de tenir un marché un jour fixe était concédé par le seigneur."
   },
   {
    "q": "Qu'est-ce qui a fait reculer les marchés depuis les années 1970 ?",
    "o": [
     "La baisse du nombre de producteurs",
     "L'interdiction des ventes en plein air",
     "La grande distribution"
    ],
    "r": 2,
    "e": "La grande distribution a capté l'essentiel des achats alimentaires."
   }
  ]
 },
 {
  "id": "b8",
  "theme": "société",
  "niveau": 2,
  "titre": "Au pied des immeubles, un jardin qui oblige à se parler",
  "corps": "Au pied des immeubles, sur une ancienne pelouse, des habitants ont tracé des parcelles avec des planches de bois. Chacun cultive la sienne ; tous entretiennent les allées, le composteur et le robinet commun.\n\nUn jardin partagé repose sur un accord plus que sur un règlement. Il faut décider qui arrose en août, comment se partagent les outils, ce qu'on fait des tomates trop mûres. Ces questions banales obligent des voisins qui se saluaient à peine à se parler. Les conflits existent : un framboisier qui déborde, un arrosoir emprunté et jamais rendu.\n\nL'idée n'est pas neuve. À la fin du XIXe siècle, des associations créent des jardins ouvriers pour que les familles modestes complètent leur ordinaire ; des industriels en installent près des usines. Après les guerres, ces parcelles fournissent un appoint alimentaire réel.\n\nLes jardins collectifs d'aujourd'hui héritent de cette histoire, mais leurs objectifs ont changé : on y vient moins pour survivre que pour cultiver, rencontrer des voisins ou occuper un terrain vacant.\n\nUn point technique est souvent négligé : la qualité du sol. Sur une friche industrielle, la terre peut contenir du plomb ou d'autres métaux. Les potagers urbains font donc analyser la terre, apportent du compost propre et cultivent parfois en bacs surélevés.\n\nL'eau pose une autre question. Un robinet partagé doit être entretenu, et son coût réparti. Certains jardins récupèrent la pluie des toits voisins, ce qui réduit la facture et évite d'arroser à l'eau potable en pleine sécheresse.\n\nLe jardin produit peu à l'échelle d'un quartier. Sa valeur est ailleurs. Il offre un endroit frais pendant les canicules, un sol qui absorbe la pluie au lieu de la laisser ruisseler, et un prétexte pour sortir de chez soi. Des enfants y apprennent qu'une graine met des semaines à devenir une salade.\n\nLes villes soutiennent ces projets de façons diverses : mise à disposition du terrain, compost, parfois simple tolérance. Les jardins qui durent sont ceux où les habitants fixent eux-mêmes quelques règles simples et les écrivent.",
  "q": [
   {
    "q": "Qu'est-ce que les habitants ont tracé sur l'ancienne pelouse ?",
    "o": [
     "Des parcelles",
     "Un terrain de sport",
     "Une aire de stationnement"
    ],
    "r": 0,
    "e": "Les habitants ont tracé des parcelles délimitées par des planches de bois."
   },
   {
    "q": "Quels équipements sont entretenus en commun ?",
    "o": [
     "Le garage et la buanderie",
     "Les allées, le composteur et le robinet",
     "La clôture et le portail"
    ],
    "r": 1,
    "e": "Le texte cite les allées, le composteur et le robinet commun."
   },
   {
    "q": "Sur quoi repose un jardin partagé, selon le texte ?",
    "o": [
     "Sur un contrat signé par un notaire",
     "Sur une décision municipale",
     "Sur un accord plus que sur un règlement"
    ],
    "r": 2,
    "e": "L'auteur oppose l'accord entre habitants au règlement formel."
   },
   {
    "q": "Quelle question pratique le texte prend-il en exemple ?",
    "o": [
     "Qui paie les impôts",
     "Qui garde les clés du portail",
     "Qui arrose en août"
    ],
    "r": 2,
    "e": "Le texte cite l'arrosage du mois d'août parmi les décisions à prendre ensemble."
   },
   {
    "q": "Quel type de conflit est évoqué ?",
    "o": [
     "Un framboisier qui déborde ou un arrosoir non rendu",
     "Un mur mitoyen fissuré",
     "Une place de parking occupée"
    ],
    "r": 0,
    "e": "Le texte cite un framboisier envahissant et un arrosoir emprunté et jamais rendu."
   },
   {
    "q": "Quelle est la production d'un jardin à l'échelle d'un quartier ?",
    "o": [
     "Elle suffit à nourrir tout le quartier",
     "Elle reste faible",
     "Elle dépasse celle des fermes voisines"
    ],
    "r": 1,
    "e": "Le texte précise que le jardin produit peu à l'échelle d'un quartier."
   },
   {
    "q": "Quel avantage le jardin offre-t-il pendant les canicules ?",
    "o": [
     "Une réserve d'eau potable",
     "Un endroit frais",
     "Un abri pour les voitures"
    ],
    "r": 1,
    "e": "Le jardin procure de la fraîcheur pendant les fortes chaleurs."
   },
   {
    "q": "Que fait le sol du jardin quand il pleut ?",
    "o": [
     "Il la renvoie vers les égouts",
     "Il la stocke dans une cuve",
     "Il absorbe la pluie"
    ],
    "r": 2,
    "e": "Le sol absorbe la pluie au lieu de la laisser ruisseler."
   },
   {
    "q": "Qu'apprennent les enfants dans un jardin partagé ?",
    "o": [
     "Qu'une graine met des semaines à devenir une salade",
     "Qu'il faut arroser tous les jours",
     "Que les légumes poussent en hiver"
    ],
    "r": 0,
    "e": "Le texte souligne la découverte du temps long de la croissance."
   },
   {
    "q": "De quelles façons les villes soutiennent-elles ces projets ?",
    "o": [
     "Distribution gratuite de légumes",
     "Construction de serres chauffées",
     "Mise à disposition du terrain, compost, tolérance"
    ],
    "r": 2,
    "e": "Le texte cite la mise à disposition du terrain, le compost et parfois une simple tolérance."
   },
   {
    "q": "Quels jardins durent, selon l'auteur ?",
    "o": [
     "Ceux qui emploient un jardinier salarié",
     "Ceux où les habitants écrivent eux-mêmes quelques règles",
     "Ceux qui sont clôturés"
    ],
    "r": 1,
    "e": "Les jardins durables sont ceux où les habitants fixent et écrivent leurs propres règles simples."
   },
   {
    "q": "Pourquoi ce genre de lieu crée-t-il du lien entre voisins ?",
    "o": [
     "Parce qu'il oblige à décider ensemble de questions concrètes",
     "Parce qu'il organise des fêtes payantes",
     "Parce qu'il interdit les animaux"
    ],
    "r": 0,
    "e": "Les décisions pratiques obligent des voisins qui se saluaient à peine à se parler."
   },
   {
    "q": "Pourquoi un jardin partagé aide-t-il en cas de fortes pluies ?",
    "o": [
     "Parce qu'il retient l'eau dans des seaux",
     "Parce qu'il détourne la pluie vers la rue",
     "Parce que la terre non bétonnée laisse l'eau s'infiltrer"
    ],
    "r": 2,
    "e": "Un sol cultivé absorbe l'eau, ce qui limite le ruissellement et les engorgements."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Les techniques de culture en serre",
     "Les apports sociaux et urbains d'un jardin partagé",
     "L'histoire des parcs municipaux"
    ],
    "r": 1,
    "e": "Le texte montre qu'un jardin partagé vaut surtout par ses effets sociaux et urbains."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Nuancer l'idée qu'un jardin sert d'abord à produire des légumes",
     "Décrire un potager productif",
     "Dénoncer les règlements de copropriété"
    ],
    "r": 0,
    "e": "L'auteur insiste sur le fait que la valeur du jardin se situe ailleurs que dans sa production."
   },
   {
    "q": "Que suggère la mention du framboisier qui déborde ?",
    "o": [
     "Que les framboisiers sont interdits",
     "Que la terre est trop riche",
     "Que les limites entre parcelles demandent des arrangements"
    ],
    "r": 2,
    "e": "Une plante qui franchit une limite matérielle impose de négocier entre voisins."
   },
   {
    "q": "À quoi servaient d'abord les jardins ouvriers ?",
    "o": [
     "À produire des fleurs pour les villes",
     "À compléter l'ordinaire des familles modestes",
     "À occuper les terrains militaires"
    ],
    "r": 1,
    "e": "Ces parcelles devaient fournir un appoint alimentaire aux familles modestes."
   },
   {
    "q": "Pourquoi la terre est-elle parfois analysée dans un potager urbain ?",
    "o": [
     "Parce qu'elle peut contenir du plomb ou des métaux",
     "Parce qu'elle manque d'azote",
     "Parce qu'elle est trop acide pour les tomates"
    ],
    "r": 0,
    "e": "Sur une ancienne friche industrielle, la pollution du sol doit être vérifiée avant de cultiver."
   }
  ]
 },
 {
  "id": "a19",
  "theme": "sport",
  "niveau": 2,
  "titre": "Cent mètres : la course commence avant le coup de feu",
  "corps": "Sur un cent mètres, la course se joue parfois dans les premiers centièmes de seconde. Le départ est donc une épreuve à part entière.\n\nLes coureurs s'installent sur des starting-blocks, des cales réglées pour placer le corps en position penchée. Les deux pieds prennent appui sur des surfaces différentes : le pied fort à l'avant, l'autre à l'arrière. Les blocs se règlent selon la taille et la puissance du coureur ; un réglage trop serré l'empêche de déployer sa foulée. Cette posture permet de pousser fort sur les jambes dès le signal. Au coup de feu, les muscles produisent un effort bref et intense, et le coureur doit rester penché pendant les premiers mètres pour ne pas se redresser trop tôt.\n\nLe règlement tient compte du temps de réaction humain. Personne ne peut réagir instantanément : un signal doit voyager jusqu'au cerveau, puis jusqu'aux muscles. Les mesures ont montré qu'un athlète ne peut pas partir en moins de cent millièmes de seconde. Un départ plus rapide est donc considéré comme un mouvement anticipé, et compté comme faux départ. Depuis 2010, un seul faux départ suffit à disqualifier le coureur.\n\nLes capteurs placés dans les blocs enregistrent la pression exercée par chaque pied. Ils détectent ainsi le moment exact du premier appui. Cette technologie a rendu les jugements plus fiables, mais elle a aussi surpris le public lors de plusieurs championnats.\n\nLe départ n'explique pas tout. Le record du monde du cent mètres, établi en 2009, est de 9 secondes et 58 centièmes. Sur une course si courte, la moindre hésitation coûte une place.",
  "q": [
   {
    "q": "Où se joue parfois une course de cent mètres ?",
    "o": [
     "Dans les premiers centièmes de seconde",
     "Dans les derniers mètres",
     "Dans les virages"
    ],
    "r": 0,
    "e": "Le texte situe l'enjeu dès les premiers centièmes de seconde."
   },
   {
    "q": "Sur quoi les coureurs s'installent-ils au départ ?",
    "o": [
     "Des starting-blocks",
     "Des tapis roulants",
     "Des plots en mousse"
    ],
    "r": 0,
    "e": "Les coureurs prennent appui sur des starting-blocks."
   },
   {
    "q": "Comment les deux pieds sont-ils placés ?",
    "o": [
     "Le pied fort à l'avant, l'autre à l'arrière",
     "Les deux pieds sur la même cale",
     "Le pied fort à l'arrière"
    ],
    "r": 0,
    "e": "Le pied fort se place à l'avant, l'autre à l'arrière."
   },
   {
    "q": "Que permet cette posture penchée ?",
    "o": [
     "De pousser fort sur les jambes dès le signal",
     "De respirer plus lentement",
     "D'éviter les faux départs"
    ],
    "r": 0,
    "e": "La position inclinée favorise une poussée puissante au signal."
   },
   {
    "q": "Que doit faire le coureur pendant les premiers mètres ?",
    "o": [
     "Rester penché",
     "Se redresser vite",
     "Regarder le ciel"
    ],
    "r": 0,
    "e": "Il doit rester penché pour ne pas se redresser trop tôt."
   },
   {
    "q": "Pourquoi le règlement tient-il compte du temps de réaction ?",
    "o": [
     "Parce que personne ne peut réagir instantanément",
     "Parce que le public se plaint",
     "Parce que les capteurs sont lents"
    ],
    "r": 0,
    "e": "Le corps humain a un délai incompressible entre le signal et le mouvement."
   },
   {
    "q": "Par où passe le signal avant d'atteindre les muscles ?",
    "o": [
     "Par le cerveau",
     "Par la colonne vertébrale seule",
     "Par les poumons"
    ],
    "r": 0,
    "e": "Le signal doit parvenir au cerveau, puis être transmis aux muscles."
   },
   {
    "q": "En moins de combien de temps un athlète ne peut-il pas partir ?",
    "o": [
     "Cent millièmes de seconde",
     "Un dixième de seconde",
     "Un millième de seconde"
    ],
    "r": 0,
    "e": "Les mesures indiquent une limite de cent millièmes de seconde."
   },
   {
    "q": "Que compte-t-on si le départ est plus rapide que cette limite ?",
    "o": [
     "Un faux départ",
     "Un record du monde",
     "Une égalité"
    ],
    "r": 0,
    "e": "Un départ plus rapide est jugé anticipé et compté comme faux départ."
   },
   {
    "q": "Que se passe-t-il depuis 2010 en cas de faux départ ?",
    "o": [
     "Le coureur est disqualifié",
     "Le coureur repart une seconde fois",
     "Le coureur perd une place"
    ],
    "r": 0,
    "e": "Depuis 2010, un seul faux départ entraîne la disqualification."
   },
   {
    "q": "Où sont placés les capteurs ?",
    "o": [
     "Dans les blocs de départ",
     "Sur le torse des coureurs",
     "Dans la piste"
    ],
    "r": 0,
    "e": "Les capteurs sont logés dans les blocs de départ."
   },
   {
    "q": "Que mesurent ces capteurs ?",
    "o": [
     "La pression exercée par chaque pied",
     "La vitesse du vent",
     "La température de la piste"
    ],
    "r": 0,
    "e": "Ils enregistrent la pression des pieds pour dater le premier appui."
   },
   {
    "q": "Quel est le record du monde du cent mètres ?",
    "o": [
     "9 secondes et 58 centièmes",
     "9 secondes et 85 centièmes",
     "10 secondes et 2 centièmes"
    ],
    "r": 0,
    "e": "Le record établi en 2009 est de 9 secondes et 58 centièmes."
   },
   {
    "q": "Pourquoi le temps de réaction ne peut-il pas être nul ?",
    "o": [
     "Parce que le signal doit parcourir le corps",
     "Parce que les muscles sont froids",
     "Parce que le règlement l'interdit"
    ],
    "r": 0,
    "e": "Le trajet du signal jusqu'au cerveau puis aux muscles prend un temps incompressible."
   },
   {
    "q": "Pourquoi un coureur qui part trop tôt est-il sanctionné ?",
    "o": [
     "Parce qu'il a anticipé le signal",
     "Parce qu'il a gêné son voisin",
     "Parce qu'il a oublié ses blocs"
    ],
    "r": 0,
    "e": "Un temps de réaction trop court ne peut correspondre à une réaction réelle au coup de feu."
   },
   {
    "q": "Pourquoi une hésitation au départ est-elle si coûteuse ?",
    "o": [
     "Parce que la course est très courte",
     "Parce que le règlement l'interdit",
     "Parce que la piste est glissante"
    ],
    "r": 0,
    "e": "Sur cent mètres, quelques centièmes perdus ne se rattrapent presque jamais."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "Les contraintes techniques du départ d'un sprint",
     "La préparation physique des sprinteurs",
     "L'histoire des records du cent mètres"
    ],
    "r": 0,
    "e": "Le texte détaille la position, le temps de réaction et la détection des faux départs."
   }
  ]
 },
 {
  "id": "a24",
  "theme": "sport",
  "niveau": 2,
  "titre": "Les vingt-quatre secondes qui ont réveillé le basket",
  "corps": "En 1954, le basket professionnel américain change de visage. Les matchs sont lents : une équipe qui mène peut garder le ballon sans tirer pendant plusieurs minutes. Le public s'ennuie.\n\nLe basket avait été inventé en 1891 par James Naismith, mais rien ne limitait alors la durée d'une possession. Un dirigeant de club, Danny Biasone, propose alors une règle simple : une équipe doit tirer au panier dans les vingt-quatre secondes qui suivent la prise de possession du ballon. Passé ce délai, la balle va à l'adversaire.\n\nL'idée n'est pas née du hasard. Biasone avait compté, sur plusieurs matchs, le nombre de tirs tentés et le temps de jeu effectif. Il en avait déduit qu'une équipe pouvait raisonnablement tenter un tir toutes les vingt-quatre secondes.\n\nLa NBA adopte la règle dès la saison suivante. Le jeu s'accélère aussitôt : les scores montent, les spectateurs reviennent. D'autres championnats finiront par adopter des règles voisines, avec des durées parfois différentes.\n\nAujourd'hui, le chronomètre des vingt-quatre secondes est visible au-dessus de chaque panier. Il se déclenche dès qu'une équipe récupère le ballon. Certaines situations le remettent à zéro, par exemple après une faute ou un tir qui touche le cercle.\n\nLes entraîneurs ont dû réapprendre à gérer les fins de match, où chaque seconde compte. Cette contrainte a transformé les tactiques. Elle favorise les joueurs rapides, les passes courtes et les tirs pris tôt. Elle oblige aussi les équipes à travailler leur défense, car chaque possession adverse est limitée dans le temps. Un sport qui pouvait se figer est devenu une suite d'actions brèves.",
  "q": [
   {
    "q": "En quelle année la règle des vingt-quatre secondes apparaît-elle ?",
    "o": [
     "En 1954",
     "En 1934",
     "En 1984"
    ],
    "r": 0,
    "e": "La règle est introduite en 1954."
   },
   {
    "q": "Pourquoi les matchs étaient-ils lents ?",
    "o": [
     "Une équipe pouvait garder le ballon sans tirer",
     "Les joueurs étaient trop fatigués",
     "Le terrain était trop grand"
    ],
    "r": 0,
    "e": "Sans limite de temps, l'équipe en tête pouvait conserver le ballon."
   },
   {
    "q": "Qui propose la règle ?",
    "o": [
     "Danny Biasone",
     "James Naismith",
     "Bill Russell"
    ],
    "r": 0,
    "e": "Danny Biasone, dirigeant de club, propose cette limite de temps."
   },
   {
    "q": "Combien de secondes une équipe a-t-elle pour tirer ?",
    "o": [
     "Vingt-quatre",
     "Douze",
     "Trente"
    ],
    "r": 0,
    "e": "La possession est limitée à vingt-quatre secondes."
   },
   {
    "q": "Que se passe-t-il si le délai est dépassé ?",
    "o": [
     "La balle va à l'adversaire",
     "L'équipe perd un joueur",
     "Le panier compte double"
    ],
    "r": 0,
    "e": "Passé le délai, la possession revient à l'adversaire."
   },
   {
    "q": "Sur quoi Biasone s'est-il appuyé ?",
    "o": [
     "Des comptages sur plusieurs matchs",
     "Une règle venue d'Europe",
     "Un vote des joueurs"
    ],
    "r": 0,
    "e": "Il avait compté les tirs et le temps de jeu effectif de plusieurs matchs."
   },
   {
    "q": "Quand la NBA adopte-t-elle la règle ?",
    "o": [
     "Dès la saison suivante",
     "Dix ans plus tard",
     "Après les Jeux olympiques"
    ],
    "r": 0,
    "e": "La NBA l'adopte dès la saison qui suit."
   },
   {
    "q": "Quel effet immédiat la règle a-t-elle eu ?",
    "o": [
     "Les scores ont monté",
     "Les matchs se sont allongés",
     "Le nombre de fautes a doublé"
    ],
    "r": 0,
    "e": "Le jeu s'est accéléré et les scores ont augmenté."
   },
   {
    "q": "Où voit-on le chronomètre des vingt-quatre secondes ?",
    "o": [
     "Au-dessus de chaque panier",
     "Au centre du terrain",
     "Sur le maillot des joueurs"
    ],
    "r": 0,
    "e": "Le chronomètre est affiché au-dessus de chaque panier."
   },
   {
    "q": "Quand le chronomètre se déclenche-t-il ?",
    "o": [
     "Dès qu'une équipe récupère le ballon",
     "À chaque passe",
     "À chaque faute"
    ],
    "r": 0,
    "e": "Il démarre à la prise de possession."
   },
   {
    "q": "Quand est-il remis à zéro ?",
    "o": [
     "Après une faute ou un tir qui touche le cercle",
     "Après chaque panier marqué",
     "À la mi-temps seulement"
    ],
    "r": 0,
    "e": "Une faute ou un tir touchant le cercle remet le compte à zéro."
   },
   {
    "q": "Quels joueurs la règle favorise-t-elle ?",
    "o": [
     "Les joueurs rapides",
     "Les joueurs très grands",
     "Les joueurs défensifs"
    ],
    "r": 0,
    "e": "Le jeu rapide et les passes courtes avantagent la vitesse."
   },
   {
    "q": "Pourquoi les équipes doivent-elles soigner leur défense ?",
    "o": [
     "Parce que chaque possession adverse est limitée dans le temps",
     "Parce que les fautes sont interdites",
     "Parce que le terrain est plus petit"
    ],
    "r": 0,
    "e": "La limite de temps rend chaque possession décisive et oblige à défendre vite."
   },
   {
    "q": "Pourquoi le public est-il revenu ?",
    "o": [
     "Parce que le jeu est devenu plus rapide",
     "Parce que les places étaient gratuites",
     "Parce que les matchs duraient plus longtemps"
    ],
    "r": 0,
    "e": "L'accélération du jeu a rendu les rencontres plus attrayantes."
   },
   {
    "q": "Pourquoi d'autres championnats ont-ils imité cette règle ?",
    "o": [
     "Parce qu'elle rend le jeu plus attrayant",
     "Parce qu'elle allonge les matchs",
     "Parce qu'elle supprime les fautes"
    ],
    "r": 0,
    "e": "Le succès du jeu rapide a poussé d'autres ligues à adopter des règles voisines."
   },
   {
    "q": "Quel est le sujet de ce texte ?",
    "o": [
     "L'invention d'une règle qui a accéléré le basket",
     "La carrière d'un joueur célèbre",
     "L'histoire des Jeux olympiques"
    ],
    "r": 0,
    "e": "Le texte raconte l'origine et les effets de la règle des vingt-quatre secondes."
   },
   {
    "q": "Pourquoi l'auteur raconte-t-il les comptages de Biasone ?",
    "o": [
     "Pour montrer que la règle reposait sur une observation",
     "Pour critiquer les statistiques sportives",
     "Pour décrire un match précis"
    ],
    "r": 0,
    "e": "Les comptages expliquent comment le seuil de vingt-quatre secondes a été choisi."
   }
  ]
 },
 {
  "id": "b4",
  "theme": "technologie",
  "niveau": 2,
  "titre": "Le froid fabriqué : comment marche un réfrigérateur",
  "corps": "Un réfrigérateur ne produit pas de froid : il déplace de la chaleur. Le principe tient en quatre étapes, répétées sans fin.\n\nUn fluide circule dans un circuit fermé. Dans l'évaporateur, à l'intérieur de l'appareil, il passe de l'état liquide à l'état gazeux. Cette transformation absorbe de la chaleur : l'air de la chambre froide se refroidit. Le compresseur aspire ensuite le gaz et le comprime, ce qui le réchauffe. Dans le condenseur, placé à l'arrière, le gaz redevient liquide en cédant sa chaleur à l'air de la cuisine. Le fluide repart vers l'évaporateur.\n\nLe point délicat est le détendeur, un petit orifice qui abaisse brutalement la pression avant l'évaporateur. Sans lui, le fluide n'arriverait pas assez froid et le cycle s'arrêterait.\n\nAvant l'électricité, on conservait la glace. Des glacières, grandes fosses couvertes de paille, stockaient en hiver des blocs découpés dans les lacs et les rivières ; on les vendait l'été. Ce commerce a alimenté des villes entières jusqu'au début du XXe siècle, et les premiers réfrigérateurs domestiques apparaissent à la même époque.\n\nL'appareil moderne ajoute un thermostat : une sonde mesure la température et coupe le compresseur quand le seuil est atteint. C'est pourquoi il ne tourne pas en continu. Dans un appareil classique, le compartiment le plus froid est placé en haut, car l'air froid descend ; les légumes, eux, supportent mal le gel et se rangent dans un bac moins froid.\n\nUn réfrigérateur consomme d'autant plus que l'écart de température avec la pièce est grand. Le placer contre un four ou au soleil coûte donc de l'énergie. Les modèles récents affichent une classe d'efficacité, calculée sur une consommation annuelle normalisée. La porte fermée reste essentielle : l'air froid est lourd et s'échappe dès qu'on l'ouvre.",
  "q": [
   {
    "q": "Que fait un réfrigérateur, selon la première phrase ?",
    "o": [
     "Il déplace de la chaleur",
     "Il produit du froid à partir d'électricité",
     "Il supprime la chaleur du circuit"
    ],
    "r": 0,
    "e": "L'appareil ne produit pas de froid : il transporte de la chaleur d'un endroit à un autre."
   },
   {
    "q": "Où se trouve l'évaporateur ?",
    "o": [
     "À l'arrière, près du mur",
     "Sous le compresseur",
     "À l'intérieur de l'appareil"
    ],
    "r": 2,
    "e": "L'évaporateur est placé à l'intérieur, dans la chambre froide."
   },
   {
    "q": "Que se passe-t-il pour le fluide dans l'évaporateur ?",
    "o": [
     "Il passe du gaz au liquide",
     "Il passe du liquide au gaz",
     "Il reste liquide mais refroidit"
    ],
    "r": 1,
    "e": "Dans l'évaporateur, le fluide passe de l'état liquide à l'état gazeux."
   },
   {
    "q": "Quel effet cette transformation produit-elle ?",
    "o": [
     "Elle absorbe de la chaleur",
     "Elle libère de la chaleur",
     "Elle crée de l'électricité"
    ],
    "r": 0,
    "e": "Le passage à l'état gazeux absorbe de la chaleur, ce qui refroidit l'air de la chambre froide."
   },
   {
    "q": "Que fait le compresseur du gaz ?",
    "o": [
     "Il le refroidit brutalement",
     "Il le filtre avant de le rejeter",
     "Il le comprime et le réchauffe"
    ],
    "r": 2,
    "e": "Le compresseur aspire le gaz et le comprime, ce qui le réchauffe."
   },
   {
    "q": "Où se trouve le condenseur ?",
    "o": [
     "Au fond du bac à légumes",
     "À l'arrière de l'appareil",
     "Dans la porte"
    ],
    "r": 1,
    "e": "Le condenseur est placé à l'arrière, du côté de la cuisine."
   },
   {
    "q": "À qui le condenseur cède-t-il sa chaleur ?",
    "o": [
     "À l'eau du circuit domestique",
     "Au gaz du compresseur",
     "À l'air de la cuisine"
    ],
    "r": 2,
    "e": "Le gaz redevient liquide en cédant sa chaleur à l'air de la pièce."
   },
   {
    "q": "Quel organe abaisse la pression avant l'évaporateur ?",
    "o": [
     "Le thermostat",
     "Le détendeur",
     "Le joint de porte"
    ],
    "r": 1,
    "e": "Le détendeur, un petit orifice, abaisse brutalement la pression avant l'évaporateur."
   },
   {
    "q": "Quand les premiers appareils domestiques apparaissent-ils ?",
    "o": [
     "Au début du XXe siècle",
     "Au milieu du XIXe siècle",
     "Après la Seconde Guerre mondiale"
    ],
    "r": 0,
    "e": "Le texte situe les premiers réfrigérateurs domestiques au début du XXe siècle."
   },
   {
    "q": "Que fait le compresseur dans le circuit ?",
    "o": [
     "Il aspire le gaz et le comprime, ce qui le réchauffe",
     "Il refroidit le gaz pour le liquéfier",
     "Il abaisse la pression avant l'évaporateur"
    ],
    "r": 0,
    "e": "Le compresseur aspire le gaz et le comprime, ce qui le réchauffe ; c'est le détendeur qui abaisse la pression."
   },
   {
    "q": "Pourquoi faut-il garder la porte fermée ?",
    "o": [
     "Parce que le moteur s'arrête",
     "Parce que le givre se forme à l'extérieur",
     "Parce que l'air froid, plus lourd, s'échappe"
    ],
    "r": 2,
    "e": "L'air froid est lourd : il s'échappe dès que la porte s'ouvre."
   },
   {
    "q": "Que se passerait-il sans détendeur ?",
    "o": [
     "Le compresseur tournerait plus vite",
     "Le fluide n'arriverait pas assez froid",
     "La lumière intérieure s'éteindrait"
    ],
    "r": 1,
    "e": "Sans détendeur, le fluide n'arriverait pas assez froid et le cycle s'arrêterait."
   },
   {
    "q": "Pourquoi l'arrière du réfrigérateur est-il chaud ?",
    "o": [
     "Parce que le moteur brûle de l'essence",
     "Parce que le condenseur y rejette la chaleur prise à l'intérieur",
     "Parce que la paroi est mal isolée"
    ],
    "r": 1,
    "e": "La chaleur prélevée dans la chambre froide est évacuée à l'arrière par le condenseur."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "L'histoire de la conservation des aliments",
     "Le recyclage des appareils ménagers",
     "Le cycle qui permet de refroidir un réfrigérateur"
    ],
    "r": 2,
    "e": "Le texte décrit les quatre étapes du circuit frigorifique."
   },
   {
    "q": "Pourquoi l'auteur précise-t-il que le réfrigérateur ne produit pas de froid ?",
    "o": [
     "Pour corriger une idée courante sur son fonctionnement",
     "Pour vanter un modèle récent",
     "Pour expliquer le choix des matériaux"
    ],
    "r": 0,
    "e": "Cette formulation attire l'attention sur le transport de chaleur plutôt que sur une prétendue fabrication de froid."
   },
   {
    "q": "Dans quel ordre le fluide traverse-t-il le circuit ?",
    "o": [
     "Évaporateur, compresseur, condenseur, détendeur",
     "Compresseur, condenseur, détendeur, évaporateur",
     "Condenseur, évaporateur, compresseur, détendeur"
    ],
    "r": 0,
    "e": "Le texte suit ce trajet : évaporateur, puis compresseur, condenseur, et retour par le détendeur."
   },
   {
    "q": "Comment conservait-on la glace avant l'électricité ?",
    "o": [
     "Dans des caves remplies d'eau",
     "Dans des fosses couvertes de paille",
     "Dans des jarres enterrées"
    ],
    "r": 1,
    "e": "Les glacières étaient des fosses isolées par de la paille, alimentées en hiver."
   },
   {
    "q": "À quoi sert le thermostat ?",
    "o": [
     "À régler la couleur de l'éclairage",
     "À dégivrer automatiquement le condenseur",
     "À couper le compresseur quand la température est atteinte"
    ],
    "r": 2,
    "e": "La sonde de température commande l'arrêt et le redémarrage du compresseur."
   }
  ]
 },
 {
  "id": "b9",
  "theme": "technologie",
  "niveau": 2,
  "titre": "La bille qui a remplacé la plume",
  "corps": "À la fin des années 1930, un journaliste hongrois, László Bíró, observe une chose banale : l'encre du journal sèche très vite sur le papier et ne bave pas. Il cherche à s'en servir pour écrire, mais cette encre, trop épaisse, ne descend pas dans une plume ordinaire.\n\nLa solution tient dans une bille minuscule, logée dans le nez du stylo. En roulant sur le papier, elle prélève une fine couche d'encre dans le réservoir et la dépose en un trait régulier. Un ressort léger maintient la bille contre son logement quand on n'écrit pas, ce qui évite les fuites.\n\nL'histoire ne s'arrête pas à l'atelier. Bíró quitte l'Europe devant la montée des persécutions et s'installe en Argentine, où il dépose un brevet en 1943. Pendant la guerre, le Royaume-Uni achète des licences pour équiper ses aviateurs et ses cartographes.\n\nLe stylo à bille présente deux avantages sur la plume : il ne tache pas les doigts et il fonctionne sans réservoir à remplir. Pendant la Seconde Guerre mondiale, des aviateurs britanniques l'adoptent, car il résiste aux changements de pression en altitude.\n\nAprès le conflit, un fabricant français, Marcel Bich, rachète les droits et lance en 1950 un stylo à bille bon marché, produit en très grande série. Le prix baisse, l'objet devient banal : il se perd, se prête et se jette.\n\nLa fabrication demande une précision étonnante. La bille mesure environ un millimètre ; son logement doit être ajusté à quelques millièmes près, sinon l'encre fuit ou le trait se coupe. Les encres modernes contiennent des solvants qui ralentissent le séchage dans le réservoir tout en accélérant celui sur le papier.\n\nUn défaut subsiste : un gaucher qui pousse la pointe sur le papier étale l'encre encore fraîche et se tache la main. Des encres à séchage plus rapide ont été mises au point pour limiter ce problème.",
  "q": [
   {
    "q": "Quel métier exerçait László Bíró ?",
    "o": [
     "Horloger",
     "Journaliste",
     "Chimiste d'usine"
    ],
    "r": 1,
    "e": "Le texte le présente comme un journaliste hongrois."
   },
   {
    "q": "Quand commence sa recherche ?",
    "o": [
     "À la fin des années 1930",
     "Au début des années 1920",
     "Dans les années 1960"
    ],
    "r": 0,
    "e": "Le texte situe ses observations à la fin des années 1930."
   },
   {
    "q": "Quelle propriété de l'encre de journal retient son attention ?",
    "o": [
     "Elle est très fluide",
     "Elle change de couleur à l'air",
     "Elle sèche vite et ne bave pas"
    ],
    "r": 2,
    "e": "L'encre du journal sèche très vite sur le papier et ne bave pas."
   },
   {
    "q": "Pourquoi cette encre ne peut-elle pas servir dans une plume ?",
    "o": [
     "Elle est trop chère",
     "Elle gèle à température ambiante",
     "Elle est trop épaisse pour descendre"
    ],
    "r": 2,
    "e": "Trop épaisse, l'encre ne descend pas dans une plume ordinaire."
   },
   {
    "q": "Où se trouve la bille du stylo ?",
    "o": [
     "Dans le nez du stylo",
     "Au fond du réservoir",
     "Dans le bouchon"
    ],
    "r": 0,
    "e": "La bille minuscule est logée dans le nez du stylo."
   },
   {
    "q": "Que fait la bille en roulant sur le papier ?",
    "o": [
     "Elle perfore le papier",
     "Elle dépose une fine couche d'encre",
     "Elle chauffe l'encre"
    ],
    "r": 1,
    "e": "En roulant, la bille prélève une fine couche d'encre et la dépose en un trait régulier."
   },
   {
    "q": "À quoi sert le ressort léger ?",
    "o": [
     "À faire avancer l'encre",
     "À maintenir la bille contre son logement",
     "À bloquer le capuchon"
    ],
    "r": 1,
    "e": "Le ressort plaque la bille contre son logement quand on n'écrit pas, ce qui évite les fuites."
   },
   {
    "q": "Quel avantage le stylo à bille a-t-il sur la plume ?",
    "o": [
     "Il ne tache pas les doigts",
     "Il écrit en plusieurs couleurs",
     "Il ne nécessite aucune pression"
    ],
    "r": 0,
    "e": "Le stylo à bille ne tache pas les doigts et se passe de réservoir à remplir."
   },
   {
    "q": "Qui adopte le stylo à bille pendant la Seconde Guerre mondiale ?",
    "o": [
     "Des marins japonais",
     "Des ingénieurs soviétiques",
     "Des aviateurs britanniques"
    ],
    "r": 2,
    "e": "Des aviateurs britanniques l'adoptent pendant le conflit."
   },
   {
    "q": "Pourquoi le stylo convenait-il aux aviateurs ?",
    "o": [
     "Il résiste aux changements de pression",
     "Il flotte sur l'eau",
     "Il fonctionne sans encre"
    ],
    "r": 0,
    "e": "Le stylo supporte les variations de pression liées à l'altitude, contrairement aux plumes à réservoir."
   },
   {
    "q": "Quand le stylo est-il produit en grande série ?",
    "o": [
     "Avant 1930",
     "Pendant la Première Guerre mondiale",
     "Après la guerre"
    ],
    "r": 2,
    "e": "La production en grande série intervient après le conflit."
   },
   {
    "q": "Quel défaut le texte reconnaît-il au stylo à bille ?",
    "o": [
     "Un gaucher qui appuie étale l'encre fraîche et se tache",
     "Il fuit dès qu'on le secoue",
     "Il ne fonctionne pas en altitude"
    ],
    "r": 0,
    "e": "« Un défaut subsiste : un gaucher qui pousse la pointe sur le papier étale l'encre encore fraîche et se tache la main. »"
   },
   {
    "q": "Pourquoi l'encre du journal était-elle une piste intéressante ?",
    "o": [
     "Parce qu'elle ne tachait pas et séchait vite",
     "Parce qu'elle coûtait moins cher que l'encre de plume",
     "Parce qu'elle était fabriquée en Hongrie"
    ],
    "r": 0,
    "e": "Sécher vite et ne pas baver étaient précisément les qualités recherchées."
   },
   {
    "q": "Pourquoi un stylo à bille ne fuit-il pas dans une poche ?",
    "o": [
     "Parce que l'encre est solide",
     "Parce que la bille est maintenue contre son logement",
     "Parce que le capuchon est étanche"
    ],
    "r": 1,
    "e": "Au repos, le ressort plaque la bille et ferme le passage de l'encre."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "L'histoire de la presse écrite",
     "La fabrication du papier moderne",
     "L'invention et la diffusion du stylo à bille"
    ],
    "r": 2,
    "e": "Le texte raconte comment une observation de journaliste a mené à un objet universel."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Vanter une marque de stylos",
     "Expliquer la chimie des encres",
     "Montrer qu'une innovation naît souvent d'un petit problème pratique"
    ],
    "r": 2,
    "e": "L'auteur suit le fil d'un obstacle concret, l'encre trop épaisse, jusqu'à la solution technique."
   },
   {
    "q": "Dans quel pays Bíró dépose-t-il un brevet en 1943 ?",
    "o": [
     "Les États-Unis",
     "L'Argentine",
     "Le Royaume-Uni"
    ],
    "r": 1,
    "e": "Bíró s'installe en Argentine et y dépose son brevet en 1943."
   },
   {
    "q": "Quelle précision la fabrication du logement de la bille exige-t-elle ?",
    "o": [
     "Quelques millièmes de millimètre",
     "Un dixième de millimètre",
     "Un centimètre"
    ],
    "r": 0,
    "e": "Un ajustement trop lâche fait fuir l'encre, trop serré il empêche l'écoulement."
   }
  ]
 },
 {
  "id": "b12",
  "theme": "arts",
  "niveau": 3,
  "titre": "Ce qu'un Stradivarius doit vraiment à son atelier",
  "corps": "À Crémone, en Italie, Antonio Stradivari fabrique des instruments à cordes entre la fin du XVIIe siècle et les années 1730. Environ six cents de ses instruments nous sont parvenus, dont plusieurs centaines de violons. Aucun autre atelier n'a laissé une production aussi régulière et aussi recherchée.\n\nUn violon baroque n'est pas celui d'aujourd'hui. Les instruments de Stradivari ont pour la plupart été modifiés au XIXe siècle : manche rallongé, touche inclinée, âme renforcée. Ces transformations répondent à une nouvelle manière de jouer, dans de plus grandes salles et avec des orchestres plus nombreux. Il faut donc imaginer un instrument assez différent de celui que le luthier avait façonné.\n\nStradivari a lui-même changé de modèle. Dans les années 1690, il allonge ses instruments pour obtenir une sonorité plus ample ; il revient ensuite à une forme plus courte et plus large. Cette évolution montre un homme qui ajuste sans cesse ses proportions plutôt qu'un artisan appliquant une recette fixe.\n\nLe secret supposé du son a nourri bien des hypothèses : vernis, densité du bois, séchage lent, crue des rivières. Les analyses modernes montrent des bois d'épicéa et d'érable soigneusement choisis, mais aucune recette unique n'a été isolée. Des traitements à base de minéraux ont été repérés sur certains instruments, peut-être pour protéger le bois des insectes. Le bois des forêts alpines, aux cernes serrés par des hivers froids et des étés courts, est également invoqué.\n\nDes essais menés à l'aveugle n'ont pas établi que ces violons surpassent systématiquement de bons instruments récents. Certains auditeurs préfèrent même un instrument moderne. Les musiciens, eux, parlent souvent d'une qualité de réponse et d'une facilité à moduler le son, plus que d'une supériorité mesurable.\n\nCe qui reste certain, c'est la qualité de l'ajustement : voûtes, épaisseurs, barre d'harmonie. Stradivari travaillait en atelier, avec des aides, et corrigeait sans cesse ses modèles. Le mythe a peut-être autant fait pour sa réputation que la facture elle-même.\n\nLa conservation ajoute une difficulté. Un instrument joué s'use : les réglages bougent, les réparations s'accumulent. Un violon de musée, laissé au repos, ne sonne plus comme celui qui se produit en concert. Comparer des instruments dans ces conditions revient à comparer des objets qui n'ont plus tout à fait la même histoire.",
  "q": [
   {
    "q": "Dans quelle ville Antonio Stradivari travaille-t-il ?",
    "o": [
     "Venise",
     "Bologne",
     "Crémone"
    ],
    "r": 2,
    "e": "Le texte situe son atelier à Crémone, en Italie."
   },
   {
    "q": "À quelle période fabrique-t-il ses instruments ?",
    "o": [
     "Du début du XVIe siècle à 1600",
     "De la fin du XVIIe siècle aux années 1730",
     "Au début du XIXe siècle"
    ],
    "r": 1,
    "e": "Sa production s'étend de la fin du XVIIe siècle aux années 1730."
   },
   {
    "q": "Combien de ses instruments nous sont parvenus, selon le texte ?",
    "o": [
     "Environ six cents",
     "Environ cinquante",
     "Plusieurs milliers"
    ],
    "r": 0,
    "e": "Le texte avance le chiffre d'environ six cents instruments conservés."
   },
   {
    "q": "Quel type d'instrument domine dans cette production ?",
    "o": [
     "Les harpes",
     "Les trompettes",
     "Les violons"
    ],
    "r": 2,
    "e": "Le texte mentionne plusieurs centaines de violons parmi les instruments conservés."
   },
   {
    "q": "Quand la plupart des instruments ont-ils été modifiés ?",
    "o": [
     "Au XVIIIe siècle",
     "Au XIXe siècle",
     "Au XXe siècle"
    ],
    "r": 1,
    "e": "Les transformations datent pour l'essentiel du XIXe siècle."
   },
   {
    "q": "Quelle modification le texte cite-t-il ?",
    "o": [
     "Un manche rallongé",
     "Une caisse réduite",
     "Des cordes en métal ajoutées"
    ],
    "r": 0,
    "e": "Le texte cite le manche rallongé, la touche inclinée et l'âme renforcée."
   },
   {
    "q": "Pourquoi ces modifications ont-elles été faites ?",
    "o": [
     "Pour alléger l'instrument",
     "Pour faciliter son transport",
     "Pour jouer plus fort dans de plus grandes salles"
    ],
    "r": 2,
    "e": "Elles répondent à une nouvelle manière de jouer, dans des salles et des orchestres plus grands."
   },
   {
    "q": "Quels bois les analyses modernes ont-elles identifiés ?",
    "o": [
     "Du chêne et du noyer",
     "De l'épicéa et de l'érable",
     "De l'acajou et du bouleau"
    ],
    "r": 1,
    "e": "Les bois repérés sont l'épicéa et l'érable, soigneusement choisis."
   },
   {
    "q": "Quelle hypothèse sur le secret du son n'a pas été confirmée ?",
    "o": [
     "Une recette unique et identifiable",
     "L'usage de bois d'épicéa",
     "L'importance des voûtes"
    ],
    "r": 0,
    "e": "Aucune recette unique n'a été isolée malgré les hypothèses sur le vernis ou le séchage."
   },
   {
    "q": "Qu'ont montré les essais menés à l'aveugle ?",
    "o": [
     "Ils n'établissent pas une supériorité systématique",
     "Ils prouvent la supériorité des Stradivarius",
     "Ils sont impossibles à réaliser"
    ],
    "r": 0,
    "e": "Ces essais n'ont pas démontré que ces violons surpassent toujours de bons instruments récents."
   },
   {
    "q": "Quel élément de fabrication le texte juge-t-il certain ?",
    "o": [
     "La provenance du vernis",
     "L'âge des arbres utilisés",
     "La qualité de l'ajustement des pièces"
    ],
    "r": 2,
    "e": "Le texte retient la qualité de l'ajustement : voûtes, épaisseurs, barre d'harmonie."
   },
   {
    "q": "Comment Stradivari travaillait-il ?",
    "o": [
     "Seul, dans une cave",
     "En atelier, avec des aides",
     "En voyageant de ville en ville"
    ],
    "r": 1,
    "e": "Il travaillait en atelier, entouré d'aides, et corrigeait sans cesse ses modèles."
   },
   {
    "q": "Pourquoi un Stradivarius d'aujourd'hui ne sonne-t-il pas comme à l'origine ?",
    "o": [
     "Parce que le bois a pourri",
     "Parce que les cordes ont disparu",
     "Parce que sa structure a été modifiée au XIXe siècle"
    ],
    "r": 2,
    "e": "Les transformations du XIXe siècle ont changé l'instrument tel qu'il avait été conçu."
   },
   {
    "q": "Que suggère l'auteur sur la réputation de Stradivari ?",
    "o": [
     "Qu'elle repose uniquement sur des mesures",
     "Qu'elle doit une part au mythe entourant ses violons",
     "Qu'elle est récente et sans fondement"
    ],
    "r": 1,
    "e": "L'auteur avance que le mythe a peut-être autant compté que la facture elle-même."
   },
   {
    "q": "Pourquoi la production de cet atelier est-elle remarquable ?",
    "o": [
     "Par sa régularité et sa qualité constante",
     "Par son faible nombre d'instruments",
     "Par l'usage de matériaux rares"
    ],
    "r": 0,
    "e": "Le texte souligne une production régulière et recherchée, sans équivalent connu."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Ce qui explique réellement la qualité des instruments de Stradivari",
     "La vie quotidienne à Crémone au XVIIe siècle",
     "L'histoire de la musique baroque"
    ],
    "r": 0,
    "e": "Le texte sépare les hypothèses séduisantes des éléments établis sur la fabrication."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Promouvoir un luthier contemporain",
     "Décrire une salle de concert",
     "Démonter en partie la légende au profit de faits vérifiables"
    ],
    "r": 2,
    "e": "L'auteur confronte le mythe du secret aux résultats des analyses et des essais."
   },
   {
    "q": "Quelle évolution de modèle le texte décrit-il dans les années 1690 ?",
    "o": [
     "Un rétrécissement de la caisse",
     "Un allongement des instruments",
     "L'abandon du vernis"
    ],
    "r": 1,
    "e": "Stradivari allonge d'abord ses instruments, puis revient à une forme plus courte et plus large."
   },
   {
    "q": "Pourquoi un violon de musée ne sonne-t-il pas comme un instrument de concert ?",
    "o": [
     "Parce qu'il reste au repos et que ses réglages ne bougent plus",
     "Parce que ses cordes sont retirées",
     "Parce que son vernis est retiré"
    ],
    "r": 0,
    "e": "L'usage régulier et les réglages entretiennent l'instrument d'une manière propre au jeu."
   }
  ]
 },
 {
  "id": "b17",
  "theme": "arts",
  "niveau": 3,
  "titre": "Une estampe japonaise, œuvre de plusieurs mains",
  "corps": "L'estampe japonaise naît d'un travail à plusieurs mains. Un éditeur commande le projet, un dessinateur trace la composition à l'encre, un graveur taille les planches de bois, un imprimeur passe les couleurs. Le nom le plus connu reste souvent celui du dessinateur, alors que l'image est une œuvre collective.\n\nLe procédé est simple en principe. On grave le dessin en relief sur une planche de cerisier, on l'enduit d'encre, puis on presse une feuille de papier contre le bois avec un tampon. Chaque couleur demande une planche supplémentaire : une estampe à dix teintes exige dix passages et un repérage très précis. Le tirage se fait feuille par feuille, à la main : la vitesse dépend de l'habileté de l'imprimeur et de la sécheresse du papier. Deux encres superposées peuvent aussi donner une teinte nouvelle, ce qui économise une planche.\n\nLe papier joue un rôle décisif. Fabriqué à partir de mûrier, il est souple et absorbe bien l'encre ; sa qualité varie, et les épreuves anciennes se reconnaissent à leur grain et à leur teinte.\n\nUne édition se décide chez l'éditeur. Il fixe le tirage, souvent quelques milliers d'exemplaires, et surveille la vente. Les planches s'usent : les traits s'émoussent, les repérages se décalent, si bien qu'une épreuve tardive se distingue d'un tirage ancien.\n\nAu début du XIXe siècle, l'usage du bleu de Prusse, importé, permet des ciels profonds et des dégradés nouveaux. Les sujets se diversifient : acteurs, courtisanes, paysages, vagues. Hokusai et Hiroshige, au XIXe siècle, donnent ses lettres de noblesse au paysage.\n\nLa censure intervient régulièrement. Des autorités limitent les portraits d'acteurs ou les scènes jugées licencieuses, et certains dessinateurs sont poursuivis. Les éditeurs adaptent alors les sujets, retirent un détail ou changent un titre. Un dessinateur poursuivi pouvait être condamné à une amende ou à une peine plus lourde.\n\nCes images étaient bon marché et tirées en milliers d'exemplaires. Elles servaient d'affiches, de souvenirs ou de calendriers. Leur arrivée en Europe, au XIXe siècle, marque durablement des peintres qui y trouvent des compositions aplaties et des cadrages hardis. Des artistes collectionnent ces estampes, les copient, en reprennent les aplats et les lignes, parfois pour quelques sous.",
  "q": [
   {
    "q": "Qui commande le projet d'une estampe ?",
    "o": [
     "Un imprimeur",
     "Un collectionneur",
     "Un éditeur"
    ],
    "r": 2,
    "e": "Le texte place l'éditeur à l'origine de la commande."
   },
   {
    "q": "Combien de métiers le texte distingue-t-il dans la fabrication ?",
    "o": [
     "Quatre",
     "Deux",
     "Six"
    ],
    "r": 0,
    "e": "Éditeur, dessinateur, graveur et imprimeur : quatre rôles distincts."
   },
   {
    "q": "Quel nom retient surtout le public ?",
    "o": [
     "Celui du graveur",
     "Celui du dessinateur",
     "Celui de l'imprimeur"
    ],
    "r": 1,
    "e": "Le dessinateur est généralement le seul nom retenu, alors que l'œuvre est collective."
   },
   {
    "q": "Sur quel bois grave-t-on les planches ?",
    "o": [
     "Du chêne",
     "Du cerisier",
     "Du bouleau"
    ],
    "r": 1,
    "e": "Le texte mentionne des planches de cerisier."
   },
   {
    "q": "Comment le dessin est-il gravé ?",
    "o": [
     "En creux profond",
     "À plat par collage",
     "En relief"
    ],
    "r": 2,
    "e": "Le dessin est gravé en relief sur la planche."
   },
   {
    "q": "Comment presse-t-on le papier contre le bois ?",
    "o": [
     "Avec un tampon",
     "Avec une presse hydraulique",
     "Avec un rouleau de métal"
    ],
    "r": 0,
    "e": "Le papier est pressé contre la planche encrée avec un tampon."
   },
   {
    "q": "Combien de passages exige une estampe à dix teintes ?",
    "o": [
     "Un seul",
     "Dix",
     "Vingt"
    ],
    "r": 1,
    "e": "Chaque couleur demande une planche et un passage : dix teintes font dix passages."
   },
   {
    "q": "Quel pigment importé permet de nouveaux ciels ?",
    "o": [
     "Le bleu de Prusse",
     "Le vert de cobalt",
     "Le rouge de garance"
    ],
    "r": 0,
    "e": "Le bleu de Prusse, importé, autorise des ciels profonds et des dégradés."
   },
   {
    "q": "À quelle époque ce pigment est-il utilisé ?",
    "o": [
     "Au XVIe siècle",
     "Au XXe siècle",
     "Au début du XIXe siècle"
    ],
    "r": 2,
    "e": "Le bleu de Prusse, importé, se répand dans l'estampe au début du XIXe siècle."
   },
   {
    "q": "Quels sujets les estampes représentent-elles ?",
    "o": [
     "Acteurs, courtisanes, paysages et vagues",
     "Scènes religieuses uniquement",
     "Portraits de samouraïs seulement"
    ],
    "r": 0,
    "e": "Le texte cite les acteurs, les courtisanes, les paysages et les vagues."
   },
   {
    "q": "Quels artistes donnent ses lettres de noblesse au paysage ?",
    "o": [
     "Utamaro et Sharaku",
     "Sesshu et Hasegawa",
     "Hokusai et Hiroshige"
    ],
    "r": 2,
    "e": "Hokusai et Hiroshige, au XIXe siècle, élèvent le paysage au rang de grand sujet."
   },
   {
    "q": "À quel prix ces images étaient-elles vendues ?",
    "o": [
     "Très cher",
     "Bon marché",
     "Réservées à la noblesse"
    ],
    "r": 1,
    "e": "Le texte les décrit comme bon marché, tirées en milliers d'exemplaires."
   },
   {
    "q": "Quels usages le texte leur prête-t-il ?",
    "o": [
     "Lettres officielles",
     "Affiches, souvenirs ou calendriers",
     "Cartes militaires"
    ],
    "r": 1,
    "e": "Elles servaient d'affiches, de souvenirs ou de calendriers."
   },
   {
    "q": "Qu'ont retenu les peintres européens de ces estampes ?",
    "o": [
     "Des compositions aplaties et des cadrages hardis",
     "L'usage du bois de cerisier",
     "La technique du tampon"
    ],
    "r": 0,
    "e": "Le texte cite les compositions aplaties et les cadrages hardis comme apports majeurs."
   },
   {
    "q": "Pourquoi une estampe à plusieurs couleurs coûte-t-elle plus de travail ?",
    "o": [
     "Parce que le papier doit sécher un mois",
     "Parce que chaque tirage est unique",
     "Parce qu'il faut une planche et un repérage par couleur"
    ],
    "r": 2,
    "e": "La superposition exacte des passages multiplie les planches et les gestes."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La biographie de Hokusai",
     "Le commerce du papier en Asie",
     "La fabrication collective de l'estampe japonaise"
    ],
    "r": 2,
    "e": "Le texte détaille les étapes et les métiers qui produisent une estampe."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Rendre justice à un travail oublié derrière un seul nom",
     "Critiquer l'art européen",
     "Décrire un atelier de peinture à l'huile"
    ],
    "r": 0,
    "e": "L'auteur insiste sur le caractère collectif d'une œuvre attribuée à un seul artiste."
   },
   {
    "q": "Pourquoi une épreuve tardive diffère-t-elle d'un tirage ancien ?",
    "o": [
     "Parce que le papier change de couleur",
     "Parce que les planches s'usent et que les repérages se décalent",
     "Parce que l'éditeur change de graveur"
    ],
    "r": 1,
    "e": "L'usure du bois modifie les traits et la superposition des couleurs."
   },
   {
    "q": "Comment les autorités intervenaient-elles ?",
    "o": [
     "Elles interdisaient l'usage du bleu de Prusse",
     "Elles fixaient le prix des estampes",
     "Elles limitaient certains sujets et poursuivaient des dessinateurs"
    ],
    "r": 2,
    "e": "La censure portait sur des portraits d'acteurs ou des scènes jugées licencieuses."
   }
  ]
 },
 {
  "id": "b22",
  "theme": "arts",
  "niveau": 3,
  "titre": "Le théâtre grec, une fête en plein jour",
  "corps": "Les représentations théâtrales grecques ne ressemblaient pas à nos soirées. Elles se tenaient en plein jour, en plein air, dans des concours liés à des fêtes religieuses. À Athènes, les représentations s'étalaient sur plusieurs jours et rassemblaient une large partie de la population. Le théâtre pouvait recevoir plusieurs milliers de spectateurs, assis sur des gradins de pierre.\n\nLe lieu avait une forme particulière. Les gradins s'appuyaient sur une pente naturelle, en demi-cercle, autour d'une aire circulaire où évoluait le chœur. Derrière, un bâtiment servait de coulisse et de fond de scène. Cette disposition en faisait un édifice d'acoustique remarquable : la voix portait jusqu'aux rangs les plus hauts.\n\nLes acteurs étaient peu nombreux et tous masculins. Chacun portait un masque de toile ou de cuir, qui fixait l'expression du personnage et amplifiait peut-être la voix. Un même acteur pouvait donc jouer plusieurs rôles en changeant de masque. Les chaussures à semelle haute augmentaient la taille et rendaient les figures visibles de loin.\n\nLe chœur occupait une place centrale. Composé de citoyens, il chantait et dansait, commentait l'action, dialoguait avec les personnages. Sa présence donnait à la pièce une dimension collective : le spectacle interrogeait la cité devant la cité.\n\nL'organisation reposait sur des citoyens riches. Chacun finançait, à ses frais, le chœur, les costumes et les répétitions d'une pièce ; ce service, considéré comme un devoir public, était un moyen de prestige. Les auteurs, eux, composaient souvent trois tragédies suivies d'un drame satyrique, présentées ensemble devant le même jury.\n\nLes textes conservés appartiennent à trois genres. La tragédie met en scène des conflits entre devoirs, familles et lois divines. La comédie moque les mœurs, les politiques et les philosophes. Le drame satyrique, plus bref, emprunte aux deux.\n\nLes moyens matériels restaient simples. Peu de décors, des machines rudimentaires pour faire apparaître un dieu ou simuler un vol, des effets sonores discrets. L'essentiel reposait sur le texte, la voix et le rythme.\n\nCes pièces étaient écrites pour une seule représentation, dans un concours. Leur succès dépendait d'un jury et du public. Beaucoup ont été perdues ; celles qui nous parviennent ont été copiées, commentées et étudiées pendant des siècles.",
  "q": [
   {
    "q": "Où se tenaient les représentations théâtrales grecques ?",
    "o": [
     "En plein air",
     "Dans des salles couvertes",
     "Dans des cours privées"
    ],
    "r": 0,
    "e": "Le texte précise qu'elles avaient lieu en plein air, en plein jour."
   },
   {
    "q": "À quel moment de la journée jouait-on ?",
    "o": [
     "À la tombée de la nuit",
     "En plein jour",
     "Après le coucher du soleil"
    ],
    "r": 1,
    "e": "Les représentations se donnaient de jour, sans éclairage artificiel."
   },
   {
    "q": "À quoi les représentations étaient-elles liées ?",
    "o": [
     "À des marchés hebdomadaires",
     "À des assemblées politiques",
     "À des fêtes religieuses et à des concours"
    ],
    "r": 2,
    "e": "Les pièces s'inscrivaient dans des concours organisés lors de fêtes."
   },
   {
    "q": "Sur quoi s'appuyaient les gradins ?",
    "o": [
     "Sur des murs de brique",
     "Sur une pente naturelle",
     "Sur des pilotis de bois"
    ],
    "r": 1,
    "e": "Les gradins épousaient une pente naturelle, en demi-cercle."
   },
   {
    "q": "Quelle forme a l'aire où évolue le chœur ?",
    "o": [
     "Carrée",
     "Triangulaire",
     "Circulaire"
    ],
    "r": 2,
    "e": "Le chœur évoluait sur une aire circulaire entourée de gradins."
   },
   {
    "q": "Qui jouait les rôles ?",
    "o": [
     "Des hommes",
     "Des femmes uniquement",
     "Des enfants et des vieillards"
    ],
    "r": 0,
    "e": "Le texte indique que les acteurs étaient tous masculins."
   },
   {
    "q": "Que portaient les acteurs sur le visage ?",
    "o": [
     "Un bandeau de laine",
     "Un voile de lin",
     "Un masque de toile ou de cuir"
    ],
    "r": 2,
    "e": "Le masque fixait l'expression du personnage et amplifiait peut-être la voix."
   },
   {
    "q": "À quoi servaient les chaussures à semelle haute ?",
    "o": [
     "À rendre les figures visibles de loin",
     "À protéger du froid",
     "À marquer le rang social"
    ],
    "r": 0,
    "e": "Elles augmentaient la taille des acteurs pour les rendre repérables dans un grand espace."
   },
   {
    "q": "Que faisait le chœur ?",
    "o": [
     "Il vendait des places",
     "Il chantait, dansait et commentait l'action",
     "Il jouait les rôles principaux"
    ],
    "r": 1,
    "e": "Le chœur intervenait par le chant, la danse et le commentaire."
   },
   {
    "q": "Combien de genres le texte distingue-t-il ?",
    "o": [
     "Trois",
     "Deux",
     "Quatre"
    ],
    "r": 0,
    "e": "Tragédie, comédie et drame satyrique sont cités."
   },
   {
    "q": "Que moque la comédie ?",
    "o": [
     "Les dieux et les héros",
     "Les artisans et les paysans",
     "Les mœurs, les politiques et les philosophes"
    ],
    "r": 2,
    "e": "La comédie s'en prend aux mœurs, aux politiques et aux philosophes."
   },
   {
    "q": "Qu'est-ce que le drame satyrique ?",
    "o": [
     "Une tragédie en musique",
     "Une forme plus brève qui emprunte aux deux autres genres",
     "Une comédie sans acteurs"
    ],
    "r": 1,
    "e": "Le drame satyrique est plus bref et tient des deux autres genres."
   },
   {
    "q": "Sur quoi reposait l'essentiel du spectacle ?",
    "o": [
     "Sur le texte, la voix et le rythme",
     "Sur les décors peints",
     "Sur les effets de lumière"
    ],
    "r": 0,
    "e": "Les moyens matériels restaient simples : l'essentiel était dans le texte et la voix."
   },
   {
    "q": "Pourquoi les pièces étaient-elles écrites pour une seule représentation ?",
    "o": [
     "Parce que le texte était improvisé",
     "Parce que la loi interdisait de rejouer",
     "Parce qu'elles concouraient une fois devant un jury"
    ],
    "r": 2,
    "e": "Chaque pièce était présentée dans un concours, devant un jury et un public."
   },
   {
    "q": "Pourquoi un acteur pouvait-il jouer plusieurs rôles ?",
    "o": [
     "Parce que le public ne voyait pas les visages",
     "Parce qu'il changeait de masque",
     "Parce que les rôles étaient muets"
    ],
    "r": 1,
    "e": "Le masque identifiait le personnage : en changer suffisait à changer de rôle."
   },
   {
    "q": "Pourquoi l'acoustique du théâtre était-elle remarquable ?",
    "o": [
     "Parce que des haut-parleurs étaient cachés",
     "Parce que la forme en demi-cercle renvoyait la voix vers les gradins",
     "Parce que le sol était dallé de marbre"
    ],
    "r": 1,
    "e": "La disposition en pente et en demi-cercle favorisait la propagation de la voix."
   },
   {
    "q": "Pourquoi beaucoup de pièces ont-elles disparu ?",
    "o": [
     "Parce qu'elles étaient peu copiées après leur unique présentation",
     "Parce qu'elles étaient interdites",
     "Parce qu'elles étaient jouées en secret"
    ],
    "r": 0,
    "e": "Seules les pièces recopiées et étudiées ont survécu ; les autres sont perdues."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La biographie des auteurs tragiques",
     "L'architecture des temples",
     "Les conditions matérielles du théâtre grec antique"
    ],
    "r": 2,
    "e": "Le texte décrit le lieu, les acteurs, le chœur et les genres du spectacle."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Comparer deux auteurs grecs",
     "Faire comprendre un spectacle très différent du nôtre",
     "Décrire un festival moderne"
    ],
    "r": 1,
    "e": "L'auteur insiste sur le jour, le plein air, les masques et le rôle du chœur."
   }
  ]
 },
 {
  "id": "c2",
  "theme": "espace",
  "niveau": 3,
  "titre": "Huit minutes de retard pour la lumière du Soleil",
  "corps": "Le Soleil semble immédiat, mais sa lumière voyage. Elle parcourt environ cent cinquante millions de kilomètres avant d'atteindre la Terre, à la vitesse de trois cent mille kilomètres par seconde. Le calcul donne un peu plus de huit minutes : le Soleil que nous regardons est donc déjà celui d'il y a huit minutes. S'il s'éteignait, nous ne le saurions pas tout de suite. Cette distance n'est pas la plus déroutante. La Lune, notre voisine, est à environ trois cent quatre-vingt-quatre mille kilomètres : sa lumière nous arrive en un peu plus d'une seconde. Mars se trouve entre cinquante-cinq et quatre cents millions de kilomètres selon la position des deux planètes. Un signal envoyé vers un robot posé là-bas met donc entre trois et vingt-deux minutes pour l'atteindre, et autant pour revenir. Piloter un véhicule martien en direct est impossible : on commande une manœuvre que l'on découvrira plus tard.\n\nLa Station spatiale internationale offre un autre exemple de vitesse. Elle tourne à environ quatre cents kilomètres d'altitude et boucle un tour de Terre en quatre-vingt-dix minutes. Ses occupants voient donc seize levers de Soleil par jour. À cette altitude, l'atmosphère est très ténue, ce qui limite les frottements et lui permet de rester longtemps en orbite sans moteur.\n\nLes éclipses demandent un alignement précis. Lors d'une éclipse de Soleil, la Lune passe entre la Terre et le Soleil et projette son ombre sur une bande étroite du globe. Pourquoi ne pas en voir une chaque mois ? Parce que l'orbite de la Lune est inclinée d'environ cinq degrés par rapport à celle de la Terre autour du Soleil. La plupart du temps, l'ombre passe au-dessus ou au-dessous de nous.\n\nLes saisons, elles, viennent de l'inclinaison. L'axe de la Terre est penché d'environ vingt-trois degrés, si bien que chaque hémisphère reçoit la lumière du Soleil plus ou moins obliquement au fil de l'année. Mars connaît le même mécanisme, avec une inclinaison voisine de vingt-cinq degrés, mais son année dure presque deux fois plus longtemps : ses saisons aussi.\n\nCes faits ont un point commun : ils dépendent de la lumière, des distances et de la géométrie, non de la volonté humaine. Comprendre une éclipse, c'est d'abord savoir où se trouvent les corps et comment la lumière s'y propage.",
  "q": [
   {
    "q": "Combien de temps la lumière du Soleil met-elle pour atteindre la Terre ?",
    "o": [
     "Un peu plus de huit heures",
     "Un peu plus de huit secondes",
     "Un peu plus de huit minutes"
    ],
    "r": 2,
    "e": "Le texte indique que le calcul donne un peu plus de huit minutes pour cent cinquante millions de kilomètres."
   },
   {
    "q": "À quelle vitesse la lumière se déplace-t-elle dans l'espace ?",
    "o": [
     "Trois cent mille kilomètres par heure",
     "Trois mille kilomètres par seconde",
     "Trois cent mille kilomètres par seconde"
    ],
    "r": 2,
    "e": "Le texte donne cette vitesse de trois cent mille kilomètres par seconde."
   },
   {
    "q": "À quelle distance le Soleil se trouve-t-il de la Terre ?",
    "o": [
     "Environ quinze millions de kilomètres",
     "Environ cent cinquante millions de kilomètres",
     "Environ cent cinquante mille kilomètres"
    ],
    "r": 1,
    "e": "La lumière parcourt environ cent cinquante millions de kilomètres avant d'atteindre la Terre."
   },
   {
    "q": "À quelle altitude tourne la Station spatiale internationale ?",
    "o": [
     "Environ quarante kilomètres",
     "Environ quatre cents kilomètres",
     "Environ quatre mille kilomètres"
    ],
    "r": 1,
    "e": "Le texte situe la Station à environ quatre cents kilomètres d'altitude."
   },
   {
    "q": "En combien de temps la Station boucle-t-elle un tour de Terre ?",
    "o": [
     "Environ quatre-vingt-dix secondes",
     "Environ neuf heures complètes",
     "Environ quatre-vingt-dix minutes"
    ],
    "r": 2,
    "e": "Le texte indique qu'elle boucle un tour de Terre en quatre-vingt-dix minutes."
   },
   {
    "q": "Combien de levers de Soleil ses occupants voient-ils par jour ?",
    "o": [
     "Seize levers",
     "Cent levers",
     "Deux levers"
    ],
    "r": 0,
    "e": "Un tour en quatre-vingt-dix minutes donne seize levers de Soleil par jour, selon le texte."
   },
   {
    "q": "Que se passe-t-il pendant une éclipse de Soleil ?",
    "o": [
     "La Lune passe entre la Terre et le Soleil",
     "Le Soleil passe entre la Terre et la Lune",
     "La Terre passe entre la Lune et le Soleil"
    ],
    "r": 0,
    "e": "Le texte décrit la Lune passant entre la Terre et le Soleil et projetant son ombre sur le globe."
   },
   {
    "q": "Pourquoi ne voit-on pas une éclipse chaque mois ?",
    "o": [
     "La Lune tourne trop lentement autour de la Terre",
     "L'orbite de la Lune est inclinée d'environ cinq degrés",
     "L'ombre de la Lune est trop large pour la Terre"
    ],
    "r": 1,
    "e": "Cette inclinaison d'environ cinq degrés fait que l'ombre passe souvent au-dessus ou au-dessous de nous."
   },
   {
    "q": "Sur quelle surface l'ombre de la Lune se projette-t-elle ?",
    "o": [
     "Sur une bande étroite du globe",
     "Sur un anneau complet du globe",
     "Sur un disque très large du globe"
    ],
    "r": 0,
    "e": "Le texte parle d'une ombre projetée sur une bande étroite du globe."
   },
   {
    "q": "Pourquoi la Station peut-elle rester en orbite très longtemps sans moteur ?",
    "o": [
     "Le vent solaire la pousse en permanence",
     "L'atmosphère y est très ténue et freine à peine",
     "Ses panneaux solaires remplacent les moteurs"
    ],
    "r": 1,
    "e": "Le texte explique que l'atmosphère très ténue à cette altitude freine à peine la Station."
   },
   {
    "q": "Quel est le point commun de tous ces phénomènes ?",
    "o": [
     "Ils dépendent de la lumière et de la géométrie",
     "Ils dépendent de la volonté humaine",
     "Ils ne se produisent que pendant la nuit"
    ],
    "r": 0,
    "e": "La conclusion du texte relie la lumière du Soleil, la Station et les éclipses à la lumière et à la géométrie."
   },
   {
    "q": "Combien de temps la lumière de la Lune met-elle pour nous parvenir ?",
    "o": [
     "Un peu plus d'une minute",
     "Un peu plus d'une seconde",
     "Un peu plus de huit minutes"
    ],
    "r": 1,
    "e": "La Lune est à environ trois cent quatre-vingt-quatre mille kilomètres : sa lumière arrive en un peu plus d'une seconde."
   },
   {
    "q": "Pourquoi les saisons de Mars durent-elles plus longtemps que celles de la Terre ?",
    "o": [
     "Parce que l'année martienne est presque deux fois plus longue",
     "Parce que Mars tourne bien plus lentement sur elle-même",
     "Parce que son axe est penché de cinquante degrés"
    ],
    "r": 0,
    "e": "Le texte indique que Mars a une inclinaison proche de celle de la Terre, mais une année presque deux fois plus longue."
   },
   {
    "q": "Que signifie l'affirmation sur le Soleil vu avec huit minutes de retard ?",
    "o": [
     "Le Soleil que nous voyons annonce l'avenir",
     "Le Soleil tourne plus vite que sa lumière",
     "L'image du Soleil que nous recevons est ancienne"
    ],
    "r": 2,
    "e": "Si la lumière met huit minutes, ce que nous voyons du Soleil date d'il y a huit minutes."
   },
   {
    "q": "Pourquoi les occupants de la Station voient-ils tant de levers de Soleil ?",
    "o": [
     "Parce que le Soleil tourne autour de la Station",
     "Parce que l'altitude élevée accélère le Soleil",
     "Parce que la Station tourne rapidement autour de la Terre"
    ],
    "r": 2,
    "e": "Un tour complet en quatre-vingt-dix minutes multiplie les levers de Soleil vus depuis la Station."
   },
   {
    "q": "Si l'orbite de la Lune était dans le plan de celle de la Terre, que se passerait-il ?",
    "o": [
     "Les éclipses deviendraient impossibles",
     "La Lune cesserait de projeter une ombre",
     "Une éclipse se produirait à chaque lunaison"
    ],
    "r": 2,
    "e": "L'inclinaison de cinq degrés explique l'absence d'éclipse mensuelle : sans elle, l'alignement serait atteint chaque mois."
   },
   {
    "q": "Que peut-on déduire de la largeur de l'ombre projetée ?",
    "o": [
     "L'ombre de la Lune couvre tout un hémisphère",
     "Une éclipse totale n'est visible que d'une petite région",
     "Une éclipse totale est visible partout sur Terre"
    ],
    "r": 1,
    "e": "Comme l'ombre ne touche qu'une bande étroite, l'éclipse totale ne concerne qu'une petite zone."
   },
   {
    "q": "Quel est le sujet principal de ce texte ?",
    "o": [
     "Des phénomènes célestes expliqués par la distance et la géométrie",
     "L'histoire de la conquête spatiale habitée",
     "Les techniques de photographie du ciel nocturne"
    ],
    "r": 0,
    "e": "Le texte enchaîne trois exemples pour montrer comment distance et géométrie expliquent ce qu'on observe."
   },
   {
    "q": "Pourquoi l'auteur termine-t-il sur l'idée de géométrie ?",
    "o": [
     "Pour relier les trois exemples à une même cause",
     "Pour annoncer un quatrième exemple plus complexe",
     "Pour corriger une erreur des paragraphes précédents"
    ],
    "r": 0,
    "e": "La dernière phrase rassemble les cas étudiés sous une explication commune : position des corps et propagation de la lumière."
   }
  ]
 },
 {
  "id": "c7",
  "theme": "espace",
  "niveau": 3,
  "titre": "Entre Mars et Jupiter, un archipel de pierres",
  "corps": "Personne ne l'a jamais vue et pourtant elle est bien là, entre les orbites de Mars et de Jupiter. La ceinture d'astéroïdes rassemble des millions de rochers de tailles très diverses, depuis le simple grain de poussière jusqu'à des corps de plusieurs centaines de kilomètres de large. Le plus connu, Cérès, fut découvert en 1801 par Giuseppe Piazzi. Avec près de mille kilomètres de diamètre, il concentre à lui seul une part importante de la masse de tout l'ensemble.\n\nContrairement à ce que suggèrent les films, la ceinture n'est pas un mur de blocs serrés. Les distances y sont immenses : deux astéroïdes sont séparés en moyenne par des millions de kilomètres. Une sonde peut donc la traverser sans jamais frôler un rocher. Les collisions existent, mais elles restent rares et se produisent sur des échelles de temps géologiques. À l'échelle d'une visite, le risque de heurt reste infime.\n\nChaque astéroïde suit pourtant sa propre orbite autour du Soleil, et non une trajectoire commune. Les plus éloignés bouclent leur tour en cinq ou six ans, les plus proches en un peu plus de trois. Cette indépendance explique la diversité des corps : beaucoup sont sombres et riches en carbone, d'autres ont l'éclat gris des roches silicatées, quelques-uns contiennent du fer et du nickel. Les collisions anciennes ont laissé des familles entières, nées de la fragmentation d'un même ancêtre et voyageant désormais de conserve.\n\nCes corps sont les débris d'un monde qui n'a jamais pu se former. Au début du système solaire, la matière tourbillonnait autour du jeune Soleil. Entre Mars et Jupiter, l'attraction immense de Jupiter a empêché les blocs de s'assembler en une planète unique. Les astéroïdes sont restés les témoins de cette construction interrompue, conservant la mémoire des premiers âges.\n\nLes moyens d'observation ont changé d'échelle. Pendant deux siècles, on n'a connu ces corps que par des points lumineux et par les météorites tombées du ciel. Puis les sondes sont allées voir sur place. Dawn, lancée en 2007 et propulsée par des moteurs ioniques, s'est d'abord placée en orbite autour de Vesta en 2011, avant de rejoindre Cérès en 2015 : la même machine a donc visité deux mondes différents. Les images ont montré des cratères, des pentes raides et, sur Cérès, des taches claires formées de sels. Ses réservoirs de xénon lui ont permis de fonctionner plus de dix ans, bien au-delà de la durée prévue.\n\nLeur étude intéresse les astronomes pour une raison simple : certains fragments tombent parfois sur Terre. Ces météorites apportent des échantillons de la matière primitive sans qu'il faille aller la chercher. La masse totale de la ceinture reste pourtant modeste : quelques pour cent de celle de la Lune, dont Cérès concentre à lui seul environ un tiers. Le caillou le plus modeste peut donc raconter l'histoire d'un chantier abandonné voici plus de quatre milliards d'années.",
  "q": [
   {
    "q": "Où se situe la ceinture d'astéroïdes ?",
    "o": [
     "Entre la Terre et Vénus",
     "Au-delà de l'orbite de Neptune",
     "Entre Mars et Jupiter"
    ],
    "r": 2,
    "e": "Le texte la place entre les orbites de Mars et de Jupiter, deux planètes voisines du Soleil."
   },
   {
    "q": "En quelle année Cérès a-t-il été découvert ?",
    "o": [
     "En 1901",
     "En 1801",
     "En 1750"
    ],
    "r": 1,
    "e": "Giuseppe Piazzi a repéré Cérès en 1801, au tout début du XIXe siècle."
   },
   {
    "q": "Quel astéroïde, large de près de mille kilomètres, est le plus connu de la ceinture ?",
    "o": [
     "Vesta",
     "Cérès",
     "Pallas"
    ],
    "r": 1,
    "e": "Cérès, découvert en 1801, mesure près de mille kilomètres de diamètre et concentre une part importante de la masse."
   },
   {
    "q": "Qu'est-ce qui a empêché la formation d'une planète dans la ceinture ?",
    "o": [
     "La chaleur du Soleil",
     "L'attraction de Jupiter",
     "Le passage répété de comètes"
    ],
    "r": 1,
    "e": "L'attraction immense de Jupiter a empêché les blocs de s'assembler en une planète unique."
   },
   {
    "q": "Quelle distance sépare en moyenne deux astéroïdes ?",
    "o": [
     "Quelques centaines de mètres",
     "Quelques milliers de mètres",
     "Des millions de kilomètres"
    ],
    "r": 2,
    "e": "Le texte parle de millions de kilomètres entre deux astéroïdes, ce qui rend la ceinture très vide."
   },
   {
    "q": "Que sont les astéroïdes selon le texte ?",
    "o": [
     "Les débris d'un monde qui n'a pas pu se former",
     "Les restes d'une planète détruite par Jupiter",
     "Des morceaux arrachés à la Lune"
    ],
    "r": 0,
    "e": "Ils sont les témoins d'une construction interrompue, jamais achevée en planète."
   },
   {
    "q": "Que fait la sonde Dawn en 2015 ?",
    "o": [
     "Elle traverse la ceinture sans s'arrêter",
     "Elle se place en orbite autour de Cérès",
     "Elle se pose à la surface de Vesta"
    ],
    "r": 1,
    "e": "Dawn s'est mise en orbite autour de Cérès et en a cartographié la surface."
   },
   {
    "q": "D'où viennent les météorites qui tombent sur Terre ?",
    "o": [
     "De fragments de la ceinture",
     "De la haute atmosphère terrestre",
     "De la surface du Soleil"
    ],
    "r": 0,
    "e": "Certains fragments de la ceinture tombent parfois sur Terre et deviennent des météorites."
   },
   {
    "q": "Pourquoi les collisions entre astéroïdes restent-elles rares ?",
    "o": [
     "Parce que les distances entre eux sont immenses",
     "Parce qu'ils tournent tous dans le même sens",
     "Parce que Jupiter les attire vers elle"
    ],
    "r": 0,
    "e": "L'immensité des distances réduit fortement les rencontres, qui restent exceptionnelles."
   },
   {
    "q": "Que conservent les astéroïdes ?",
    "o": [
     "La mémoire des premiers âges du système solaire",
     "La chaleur actuelle du Soleil",
     "Des traces de vie très anciennes"
    ],
    "r": 0,
    "e": "Le texte les décrit comme les témoins d'une construction interrompue, mémoire des premiers âges."
   },
   {
    "q": "Combien d'astéroïdes la ceinture rassemble-t-elle ?",
    "o": [
     "Quelques dizaines",
     "Quelques milliers",
     "Des millions"
    ],
    "r": 2,
    "e": "Le texte parle de millions de rochers, du grain de poussière aux corps de grande taille."
   },
   {
    "q": "Combien de temps un astéroïde éloigné met-il à boucler son orbite ?",
    "o": [
     "Cinq ou six siècles",
     "Cinq ou six jours",
     "Cinq ou six ans"
    ],
    "r": 2,
    "e": "Les corps les plus éloignés du Soleil bouclent leur tour en cinq ou six ans."
   },
   {
    "q": "Autour de quel astéroïde Dawn s'est-elle placée en orbite en 2011 ?",
    "o": [
     "Cérès",
     "Pallas",
     "Vesta"
    ],
    "r": 2,
    "e": "Dawn a orbité autour de Vesta en 2011, quatre ans avant de rejoindre Cérès."
   },
   {
    "q": "Pourquoi les films donnent-ils une fausse image de la ceinture ?",
    "o": [
     "Ils oublient d'y faire figurer Jupiter",
     "Ils la montrent comme un amas dense de rochers",
     "Ils la placent au-delà de Neptune"
    ],
    "r": 1,
    "e": "Le texte oppose cette vision de mur serré à la réalité d'un espace très largement vide."
   },
   {
    "q": "Que peut-on déduire du fait que les astéroïdes n'ont jamais formé de planète ?",
    "o": [
     "Ils tournent plus vite que les planètes",
     "Ils sont plus jeunes que la Terre",
     "Ils ont gardé une matière très ancienne"
    ],
    "r": 2,
    "e": "Faute d'avoir été transformés par la formation d'une planète, ils gardent la matière d'origine."
   },
   {
    "q": "Pourquoi les météorites intéressent-elles tant les astronomes ?",
    "o": [
     "Elles indiquent l'âge exact de la Terre",
     "Elles fournissent des échantillons de matière primitive",
     "Elles annoncent les séismes à venir"
    ],
    "r": 1,
    "e": "Ces fragments apportent gratuitement la matière primitive qu'il faudrait sinon aller chercher."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La nature et l'origine de la ceinture d'astéroïdes",
     "Les voyages habités vers la planète Mars",
     "La formation des comètes et de leurs queues"
    ],
    "r": 0,
    "e": "Le texte décrit la ceinture, sa composition, son origine et l'intérêt de son étude."
   },
   {
    "q": "Quelle idée l'auteur veut-il surtout faire passer ?",
    "o": [
     "La ceinture est un espace immense, non un mur de rochers",
     "Les astéroïdes représentent un danger imminent",
     "Jupiter est la plus grosse planète du système solaire"
    ],
    "r": 0,
    "e": "Il insiste sur les distances énormes, contre l'image de blocs serrés venue du cinéma."
   }
  ]
 },
 {
  "id": "b11",
  "theme": "histoire",
  "niveau": 3,
  "titre": "Les routes de la soie n'étaient pas une route",
  "corps": "L'expression « route de la soie » est trompeuse. Elle ne désigne pas une voie unique, mais un ensemble de pistes qui reliaient la Chine à la Méditerranée en traversant l'Asie centrale. Le mot lui-même a été forgé au XIXe siècle par des géographes européens, longtemps après la fin des grands échanges.\n\nSur ces chemins, la soie chinoise voyageait vers l'ouest, tandis que remontaient vers l'est le verre, l'argent, les chevaux et certaines plantes. Aucun marchand ne parcourait l'ensemble du trajet. Les cargaisons passaient de main en main, de caravane en caravane, et chaque intermédiaire prenait sa part. C'est pourquoi le prix d'une pièce de soie pouvait être multiplié plusieurs fois entre sa fabrication et sa vente.\n\nLes oasis jouaient un rôle décisif. Une ville comme Samarcande vivait du passage, de l'eau des rivières et du commerce des relais. Les caravanes y réparaient leurs bêtes, vendaient une partie de leur charge et attendaient une saison plus favorable.\n\nCe réseau a connu des périodes fastes et des interruptions. Au XIIIe siècle, l'unification mongole rend les routes plus sûres sur un vaste espace ; des voyageurs comme Marco Polo peuvent traverser l'Asie et décrire des villes qu'aucun Européen n'avait vues. Les échanges d'idées s'intensifient alors.\n\nLe papier offre l'exemple le plus net. Sa fabrication, née en Chine, gagne l'Asie centrale, puis Bagdad, l'Égypte et l'Europe, où elle arrive par l'Espagne et l'Italie. Une technique voyage ainsi sur des milliers de kilomètres sans qu'un seul individu en fasse tout le trajet.\n\nLa soie elle-même a fait l'objet d'une légende tenace : des œufs de vers auraient été rapportés clandestinement à Byzance au VIe siècle, dans des tiges de bambou creuses. Les historiens discutent les détails, mais l'élevage du ver à soie s'installe bien en Méditerranée orientale.\n\nÀ partir du XVe siècle, les routes maritimes détournent une partie du commerce. Les caravanes ne disparaissent pas : elles transportent désormais d'autres marchandises, et les villes d'oasis perdent peu à peu leur rôle de relais.\n\nLes échanges ne portaient pas seulement sur des objets. Des techniques, des mathématiques indiennes, des récits et des croyances ont circulé par les mêmes chemins. Ce sont parfois les idées qui voyageaient le plus vite, portées par des marchands, des pèlerins et des traducteurs.",
  "q": [
   {
    "q": "Que désigne exactement l'expression route de la soie ?",
    "o": [
     "Une seule voie pavée de bout en bout",
     "Une route maritime entre Chine et Égypte",
     "Un ensemble de pistes à travers l'Asie centrale"
    ],
    "r": 2,
    "e": "Le texte précise qu'il s'agit d'un ensemble de pistes, et non d'une voie unique."
   },
   {
    "q": "Quand le mot route de la soie a-t-il été forgé ?",
    "o": [
     "Au XIIIe siècle",
     "Au XIXe siècle",
     "Dans l'Antiquité grecque"
    ],
    "r": 1,
    "e": "Le terme a été créé par des géographes européens au XIXe siècle."
   },
   {
    "q": "Quel produit voyageait vers l'ouest ?",
    "o": [
     "La soie chinoise",
     "Le verre syrien",
     "L'argent persan"
    ],
    "r": 0,
    "e": "La soie chinoise partait vers l'ouest, tandis que d'autres biens remontaient vers l'est."
   },
   {
    "q": "Quels biens remontaient vers l'est ?",
    "o": [
     "Le verre, l'argent et les chevaux",
     "Le papier et les épices",
     "Le blé et le sel"
    ],
    "r": 0,
    "e": "Le verre, l'argent, les chevaux et certaines plantes circulaient vers l'est."
   },
   {
    "q": "Combien de marchands parcouraient l'ensemble du trajet ?",
    "o": [
     "Une minorité seulement",
     "Aucun",
     "Tous, par obligation"
    ],
    "r": 1,
    "e": "Le texte affirme qu'aucun marchand ne parcourait la totalité du trajet."
   },
   {
    "q": "Comment les marchandises avançaient-elles ?",
    "o": [
     "Par un convoi unique et direct",
     "Par bateau sur des fleuves",
     "De caravane en caravane, par étapes"
    ],
    "r": 2,
    "e": "Les cargaisons passaient de main en main, chaque intermédiaire prenant sa part."
   },
   {
    "q": "Pourquoi le prix de la soie augmentait-il fortement en route ?",
    "o": [
     "Parce que la soie s'abîmait",
     "Parce que les taxes étaient fixes",
     "Parce que chaque intermédiaire prenait une marge"
    ],
    "r": 2,
    "e": "La succession d'intermédiaires multipliait le prix entre fabrication et vente finale."
   },
   {
    "q": "Quelle ville le texte cite-t-il comme exemple d'oasis ?",
    "o": [
     "Bagdad",
     "Samarcande",
     "Alexandrie"
    ],
    "r": 1,
    "e": "Samarcande est donnée comme exemple de ville vivant du passage des caravanes."
   },
   {
    "q": "De quoi vivait cette ville, selon le texte ?",
    "o": [
     "Du passage, de l'eau des rivières et des relais",
     "De la pêche en mer",
     "De l'extraction du sel"
    ],
    "r": 0,
    "e": "Le texte cite le passage des caravanes, l'eau des rivières et le commerce des relais."
   },
   {
    "q": "Que faisaient les caravanes dans une oasis ?",
    "o": [
     "Elles changeaient de religion",
     "Elles laissaient tous leurs animaux",
     "Elles réparaient leurs bêtes et vendaient une partie de leur charge"
    ],
    "r": 2,
    "e": "Les caravanes y réparaient leurs bêtes, vendaient une part de leur charge et attendaient une meilleure saison."
   },
   {
    "q": "Quel savoir-faire le texte cite-t-il parmi les échanges ?",
    "o": [
     "La fonte du bronze",
     "La fabrication du papier",
     "La construction des navires"
    ],
    "r": 1,
    "e": "Le texte mentionne les techniques de fabrication du papier et les mathématiques indiennes."
   },
   {
    "q": "Qui transportait les idées sur ces chemins ?",
    "o": [
     "Des marchands, des pèlerins et des traducteurs",
     "Uniquement des soldats",
     "Des moines copistes seulement"
    ],
    "r": 0,
    "e": "Les idées circulaient portées par les marchands, les pèlerins et les traducteurs."
   },
   {
    "q": "Pourquoi le mot route est-il jugé trompeur par l'auteur ?",
    "o": [
     "Parce qu'il suggère une voie unique et balisée",
     "Parce que le trajet se faisait en mer",
     "Parce que la soie n'y circulait pas"
    ],
    "r": 0,
    "e": "Le singulier fait croire à une route unique, alors qu'il s'agissait d'un réseau de pistes."
   },
   {
    "q": "Pourquoi les oasis devenaient-elles des villes ?",
    "o": [
     "Parce qu'elles étaient faciles à défendre",
     "Parce qu'elles offraient eau et relais sur un trajet long",
     "Parce qu'elles produisaient de la soie"
    ],
    "r": 1,
    "e": "L'eau et les relais en faisaient des étapes indispensables, donc des lieux d'activité."
   },
   {
    "q": "Comment les marchandises progressaient-elles vers l'ouest ?",
    "o": [
     "De main en main, de caravane en caravane",
     "Par un seul convoi, de la Chine à Rome",
     "Par bateau le long des côtes"
    ],
    "r": 0,
    "e": "Aucun marchand ne parcourait l'ensemble du trajet : les cargaisons passaient de main en main, de caravane en caravane."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La fabrication de la soie en Chine",
     "Les conquêtes des empires d'Asie centrale",
     "Le fonctionnement réel des échanges sur les routes de la soie"
    ],
    "r": 2,
    "e": "Le texte décrit un réseau d'échanges par étapes, matériel et culturel."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Décrire un itinéraire touristique",
     "Corriger une image simplifiée des routes de la soie",
     "Comparer deux empires"
    ],
    "r": 1,
    "e": "L'auteur commence par contester le mot route pour rétablir la réalité du réseau."
   },
   {
    "q": "Quel effet l'unification mongole a-t-elle eu au XIIIe siècle ?",
    "o": [
     "Elle a rendu les routes plus sûres sur un vaste espace",
     "Elle a fermé les routes aux marchands",
     "Elle a déplacé le commerce vers la mer"
    ],
    "r": 0,
    "e": "La sécurité accrue a facilité les voyages longs, comme celui de Marco Polo."
   },
   {
    "q": "Par où la fabrication du papier arrive-t-elle en Europe ?",
    "o": [
     "Par la Russie du Nord",
     "Par l'Espagne et l'Italie",
     "Par les ports de la mer Baltique"
    ],
    "r": 1,
    "e": "La technique gagne l'Europe occidentale en passant par l'Espagne et l'Italie."
   }
  ]
 },
 {
  "id": "b16",
  "theme": "histoire",
  "niveau": 3,
  "titre": "Comment une voûte a percé les murs des églises",
  "corps": "Vers 1140, dans l'abbaye de Saint-Denis, près de Paris, l'abbé Suger fait reconstruire le chœur de son église. Il veut plus de lumière. Le résultat étonne les contemporains : les murs semblent remplacés par des verrières, et la pierre paraît tenir sans support.\n\nL'innovation décisive est la croisée d'ogives. Deux arcs diagonaux se croisent au sommet de la voûte et reportent la charge sur quatre piliers. Le mur n'a plus besoin de porter le toit ; il peut donc être percé de grandes fenêtres. À l'extérieur, les arcs-boutants viennent contrer la poussée latérale des voûtes.\n\nUn chantier de cathédrale dure des décennies, parfois plus d'un siècle. Les tailleurs de pierre travaillent l'hiver, quand les champs reposent ; les charpentiers montent des échafaudages de bois. Chaque bloc est taillé selon un gabarit, puis hissé par des grues à tambour actionnées par des hommes.\n\nLe financement repose sur des ressources variées : revenus du chapitre, dons des fidèles, contributions des villes. Un chantier interrompu faute d'argent reste inachevé pendant des décennies ; certaines cathédrales ont ainsi des tours dissymétriques.\n\nLa pierre vient des carrières voisines quand il en existe. Elle est transportée par charrette, par bateau ou par flottage, ce qui coûte souvent plus cher que l'extraction elle-même. On préfère donc les gisements proches, quitte à changer de teinte d'un étage à l'autre.\n\nLe tracé se fait à plat, sur une aire de bois ou de plâtre. Les maîtres d'œuvre dessinent les arcs à grandeur réelle avec un compas et des cordeaux, puis reportent les mesures sur des gabarits. Cette géométrie pratique remplace en partie le calcul, qui n'existe pas encore sous sa forme actuelle.\n\nLes cathédrales ne sont pas seulement des prouesses techniques. Elles servent à rassembler la population, à montrer la richesse d'une ville et à impressionner le visiteur. Leur hauteur, leurs couleurs et leur acoustique relèvent d'une mise en scène voulue. Les verrières filtrant la lumière coloraient les murs et les sols ; l'intérieur, aujourd'hui souvent gris, était probablement très lumineux et très coloré.\n\nBeaucoup ont été modifiées, restaurées, parfois largement reconstruites au XIXe siècle. Il est donc difficile de savoir exactement à quoi ressemblaient les intérieurs d'origine.",
  "q": [
   {
    "q": "Vers quelle date l'abbé Suger fait-il reconstruire le chœur de Saint-Denis ?",
    "o": [
     "Vers 1140",
     "Vers 1040",
     "Vers 1340"
    ],
    "r": 0,
    "e": "Le texte situe ces travaux vers 1140."
   },
   {
    "q": "Que recherche l'abbé Suger en reconstruisant le chœur ?",
    "o": [
     "Une salle plus vaste",
     "Un clocher plus haut",
     "Plus de lumière"
    ],
    "r": 2,
    "e": "Le texte indique qu'il veut plus de lumière."
   },
   {
    "q": "Quelle est l'innovation décisive décrite ?",
    "o": [
     "Le toit de chaume",
     "La croisée d'ogives",
     "La coupole de brique"
    ],
    "r": 1,
    "e": "La croisée d'ogives permet de reporter la charge de la voûte sur des piliers."
   },
   {
    "q": "Sur combien de piliers la charge de la voûte est-elle reportée ?",
    "o": [
     "Deux",
     "Quatre",
     "Huit"
    ],
    "r": 1,
    "e": "Deux arcs diagonaux reportent la charge sur quatre piliers."
   },
   {
    "q": "Quelle conséquence la croisée d'ogives permet-elle pour les murs ?",
    "o": [
     "Les percer de grandes fenêtres",
     "Les rendre plus épais",
     "Les supprimer entièrement"
    ],
    "r": 0,
    "e": "Le mur n'ayant plus à porter le toit, il peut être largement ouvert par des verrières."
   },
   {
    "q": "À quoi servent les arcs-boutants ?",
    "o": [
     "À soutenir les cloches",
     "À évacuer l'eau de pluie",
     "À contrer la poussée latérale des voûtes"
    ],
    "r": 2,
    "e": "Les arcs-boutants, placés à l'extérieur, reprennent la poussée latérale."
   },
   {
    "q": "Combien de temps dure un chantier de cathédrale ?",
    "o": [
     "Quelques mois",
     "Des décennies, parfois plus d'un siècle",
     "Deux ou trois ans"
    ],
    "r": 1,
    "e": "Le texte parle de décennies, parfois de plus d'un siècle."
   },
   {
    "q": "Quand les tailleurs de pierre travaillent-ils surtout ?",
    "o": [
     "L'hiver",
     "En pleine moisson",
     "La nuit uniquement"
    ],
    "r": 0,
    "e": "Ils travaillent l'hiver, quand les travaux des champs s'arrêtent."
   },
   {
    "q": "Comment les blocs sont-ils taillés ?",
    "o": [
     "Au hasard, puis ajustés",
     "Directement sur la voûte",
     "Selon un gabarit"
    ],
    "r": 2,
    "e": "Chaque bloc est taillé selon un gabarit avant d'être hissé."
   },
   {
    "q": "Comment les blocs sont-ils montés en hauteur ?",
    "o": [
     "Par des chevaux sur des rampes",
     "Par des treuils à vapeur",
     "Par des grues à tambour actionnées par des hommes"
    ],
    "r": 2,
    "e": "Le texte cite des grues à tambour, actionnées par la force humaine."
   },
   {
    "q": "Quelle autre fonction les cathédrales remplissent-elles ?",
    "o": [
     "Servir d'entrepôt de blé",
     "Rassembler la population et montrer la richesse de la ville",
     "Abriter les marchés couverts"
    ],
    "r": 1,
    "e": "Le texte mentionne le rassemblement de la population et l'affichage de la richesse urbaine."
   },
   {
    "q": "Quels éléments relèvent d'une mise en scène voulue ?",
    "o": [
     "La hauteur, les couleurs et l'acoustique",
     "La forme des clés",
     "Le nombre de marches"
    ],
    "r": 0,
    "e": "Ces trois éléments sont cités comme faisant partie d'une mise en scène."
   },
   {
    "q": "Pourquoi les intérieurs d'origine sont-ils difficiles à connaître ?",
    "o": [
     "Parce qu'aucun texte ne les décrit",
     "Parce qu'ils étaient interdits au public",
     "Parce que les édifices ont été modifiés et restaurés"
    ],
    "r": 2,
    "e": "Les modifications et restaurations, notamment au XIXe siècle, ont changé l'aspect des intérieurs."
   },
   {
    "q": "Pourquoi le mur peut-il être remplacé par des verrières ?",
    "o": [
     "Parce que la voûte ne repose plus sur lui",
     "Parce que le verre est plus solide que la pierre",
     "Parce que le toit est plus léger en bois"
    ],
    "r": 0,
    "e": "La charge étant dirigée vers les piliers, le mur devient une simple enveloppe."
   },
   {
    "q": "Pourquoi les chantiers s'étalaient-ils sur plusieurs saisons ?",
    "o": [
     "Parce que les ouvriers refusaient d'accélérer",
     "Parce que le travail dépendait du temps et des ressources",
     "Parce que la pierre devait sécher dix ans"
    ],
    "r": 1,
    "e": "Approvisionnement, météo et financement imposaient des campagnes de travaux successives."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La vie des moines au Moyen Âge",
     "Les pèlerinages vers Paris",
     "La technique gothique et ce qu'elle a permis"
    ],
    "r": 2,
    "e": "Le texte explique comment une innovation de voûte a transformé l'architecture religieuse."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Montrer qu'un choix technique change l'aspect et l'usage d'un bâtiment",
     "Décrire une cérémonie religieuse",
     "Comparer deux villes médiévales"
    ],
    "r": 0,
    "e": "L'auteur relie une solution de structure à ses effets visuels et sociaux."
   },
   {
    "q": "Sur quoi repose le financement d'un chantier de cathédrale ?",
    "o": [
     "Sur un impôt royal unique",
     "Sur les revenus du chapitre, les dons et les contributions des villes",
     "Sur les amendes des tribunaux"
    ],
    "r": 1,
    "e": "Le texte cite plusieurs sources mêlées, ce qui explique les interruptions de chantier."
   },
   {
    "q": "Comment les maîtres d'œuvre traçaient-ils les arcs ?",
    "o": [
     "Par le calcul différentiel",
     "En copiant un modèle réduit en pierre",
     "À grandeur réelle avec un compas et des cordeaux"
    ],
    "r": 2,
    "e": "Le tracé s'effectuait à plat, à l'échelle du bâtiment, avant report sur gabarits."
   }
  ]
 },
 {
  "id": "b21",
  "theme": "histoire",
  "niveau": 3,
  "titre": "Le télégraphe qui parlait par les toits",
  "corps": "À la fin du XVIIIe siècle, transmettre un message plus vite qu'un cavalier relevait du rêve. En 1794, la première ligne du télégraphe de Chappe relie Paris à Lille, soit plus de deux cents kilomètres, et transmet un message en quelques minutes lorsque le temps est clair.\n\nLe dispositif est visuel. Au sommet de tours espacées de dix à quinze kilomètres, un mât porte un bras horizontal mobile, auquel sont articulés deux bras plus courts. En combinant les positions, on obtient un répertoire de signaux. Un opérateur placé dans la tour suivante observe avec une lunette et reproduit le signal, qui continue sa route.\n\nLe codage passe par un livre. Chaque combinaison correspond à un mot, une expression ou un chiffre, consignés dans un cahier conservé dans chaque poste. Le message est donc décomposé, transmis signe par signe, puis recomposé à l'arrivée.\n\nLe système a des contraintes fortes. Il faut une visibilité parfaite : la nuit, le brouillard ou la pluie interrompent la ligne. Il faut aussi des opérateurs disciplinés, car une erreur se propage de tour en tour. Les postes sont donc confiés à des agents formés, surveillés et astreints à des horaires stricts.\n\nLe réseau s'étend en France et inspire des dispositifs voisins en Europe. Il sert à transmettre des nouvelles politiques et militaires, mais aussi, très vite, des informations commerciales : cours des marchandises, arrivées de navires, résultats de marchés. Un négociant qui connaît un prix avant ses concurrents peut en tirer profit. Le réseau atteindra plusieurs milliers de kilomètres et plusieurs centaines de postes, jusque dans le sud de la France. Son entretien coûte cher : il faut réparer les mâts, remplacer les lunettes, payer les agents et nourrir les chevaux des inspecteurs qui parcourent les lignes.\n\nLa concurrence arrive avec l'électricité. À partir des années 1840, le télégraphe électrique transmet sans relais humain, de nuit comme de jour, sur de plus grandes distances. Le réseau de Chappe est progressivement abandonné au milieu du XIXe siècle.\n\nIl reste un précédent instructif. Une technologie peut être ingénieuse, organisée et efficace tout en étant condamnée par une autre qui supprime sa contrainte principale : ici, la nécessité de voir.",
  "q": [
   {
    "q": "En quelle année la première ligne Paris-Lille est-elle mise en service ?",
    "o": [
     "En 1749",
     "En 1794",
     "En 1848"
    ],
    "r": 1,
    "e": "Le texte date la première ligne du télégraphe de Chappe de 1794."
   },
   {
    "q": "Quelle distance sépare Paris de Lille sur cette ligne ?",
    "o": [
     "Plus de deux cents kilomètres",
     "Une cinquantaine de kilomètres",
     "Plus de mille kilomètres"
    ],
    "r": 0,
    "e": "Le texte indique une distance de plus de deux cents kilomètres."
   },
   {
    "q": "Combien de temps un message met-il à parcourir la ligne ?",
    "o": [
     "Plusieurs jours",
     "Une heure environ",
     "Quelques minutes"
    ],
    "r": 2,
    "e": "Par temps clair, la transmission ne prend que quelques minutes."
   },
   {
    "q": "À quelle distance les tours sont-elles espacées ?",
    "o": [
     "De un à deux kilomètres",
     "De cinquante à cent kilomètres",
     "De dix à quinze kilomètres"
    ],
    "r": 2,
    "e": "L'espacement permettait de voir le signal de la tour suivante à la lunette."
   },
   {
    "q": "Combien de bras mobiles porte le mât ?",
    "o": [
     "Deux",
     "Trois",
     "Cinq"
    ],
    "r": 1,
    "e": "Un bras horizontal et deux bras plus courts sont articulés sur le mât."
   },
   {
    "q": "Où sont consignées les significations des signaux ?",
    "o": [
     "Dans un cahier conservé dans chaque poste",
     "Dans un registre central à Paris",
     "Sur les murs des tours"
    ],
    "r": 0,
    "e": "Un livre de correspondances permettait de coder et de décoder les signaux."
   },
   {
    "q": "Qu'est-ce qui interrompt la ligne ?",
    "o": [
     "Le brouillard, la pluie ou la nuit",
     "Le vent fort uniquement",
     "La chaleur de l'été"
    ],
    "r": 0,
    "e": "Le signal étant visuel, il faut une visibilité parfaite pour transmettre."
   },
   {
    "q": "À qui les postes sont-ils confiés ?",
    "o": [
     "À des soldats de passage",
     "À des agents formés et surveillés",
     "À des bénévoles locaux"
    ],
    "r": 1,
    "e": "Les opérateurs étaient formés, surveillés et soumis à des horaires stricts."
   },
   {
    "q": "Quelles informations commerciales circulaient sur le réseau ?",
    "o": [
     "Les horaires des trains",
     "Les résultats des élections",
     "Les cours des marchandises et les arrivées de navires"
    ],
    "r": 2,
    "e": "Les cours, les arrivées de navires et les résultats de marchés figuraient parmi les messages."
   },
   {
    "q": "Quand le télégraphe électrique apparaît-il ?",
    "o": [
     "À partir des années 1840",
     "Vers 1810",
     "À la fin du XIXe siècle"
    ],
    "r": 0,
    "e": "Le texte situe l'arrivée du télégraphe électrique dans les années 1840."
   },
   {
    "q": "Quand le réseau de Chappe est-il abandonné ?",
    "o": [
     "Dès 1800",
     "Au milieu du XIXe siècle",
     "Au début du XXe siècle"
    ],
    "r": 1,
    "e": "Le réseau est progressivement abandonné au milieu du XIXe siècle."
   },
   {
    "q": "Pourquoi une erreur d'un poste est-elle grave ?",
    "o": [
     "Parce qu'elle détruit le mât",
     "Parce qu'elle bloque la lunette",
     "Parce qu'elle se propage de tour en tour"
    ],
    "r": 2,
    "e": "Chaque poste reproduit ce qu'il voit : une erreur se répète jusqu'à l'arrivée."
   },
   {
    "q": "Pourquoi le système dépend-il du temps qu'il fait ?",
    "o": [
     "Parce que le signal doit être vu à la lunette",
     "Parce que le bois des mâts gonfle",
     "Parce que les opérateurs restent chez eux"
    ],
    "r": 0,
    "e": "La transmission repose sur la vue : brouillard et pluie la rendent impossible."
   },
   {
    "q": "Pourquoi surveillait-on les opérateurs ?",
    "o": [
     "Pour vérifier leur uniforme",
     "Pour éviter les erreurs et les indiscrétions",
     "Pour compter les messages"
    ],
    "r": 1,
    "e": "Un agent formé et contrôlé limitait les fautes de transmission et les fuites d'information."
   },
   {
    "q": "Pourquoi les négociants s'intéressaient-ils au réseau ?",
    "o": [
     "Parce qu'ils devaient financer les tours",
     "Parce qu'ils y envoyaient leurs employés",
     "Parce qu'une nouvelle reçue en avance vaut de l'argent"
    ],
    "r": 2,
    "e": "Connaître un prix avant ses concurrents permet d'acheter ou de vendre au bon moment."
   },
   {
    "q": "Pourquoi le télégraphe électrique l'a-t-il emporté ?",
    "o": [
     "Parce qu'il coûtait moins cher à construire",
     "Parce qu'il fonctionne sans visibilité et sans relais humain",
     "Parce qu'il était plus simple à coder"
    ],
    "r": 1,
    "e": "L'électricité supprime la contrainte optique et la reproduction manuelle du signal."
   },
   {
    "q": "Que signifie l'expression relais humain ?",
    "o": [
     "Un opérateur qui reproduit le signal à chaque tour",
     "Un câble posé entre deux villes",
     "Un courrier à cheval"
    ],
    "r": 0,
    "e": "Chaque tour devait lire puis répéter le signal, ce qui exigeait un agent."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La vie des opérateurs au XIXe siècle",
     "L'invention du téléphone",
     "Le fonctionnement et le déclin du télégraphe optique de Chappe"
    ],
    "r": 2,
    "e": "Le texte décrit un réseau visuel, ses contraintes et son remplacement par l'électricité."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Montrer qu'une technique efficace peut être dépassée par une autre",
     "Vanter l'ingéniosité militaire française",
     "Expliquer le codage binaire"
    ],
    "r": 0,
    "e": "La conclusion insiste sur la contrainte de visibilité, qui a condamné le système."
   }
  ]
 },
 {
  "id": "c3",
  "theme": "histoire",
  "niveau": 3,
  "titre": "Gutenberg n'a pas inventé l'imprimerie",
  "corps": "Au milieu du XVe siècle, à Mayence, un orfèvre nommé Johannes Gutenberg cherche un moyen de copier les livres plus vite. Jusque-là, un copiste recopiait chaque page à la main, souvent dans un atelier de monastère ; il fallait des mois pour un seul ouvrage, et chaque exemplaire différait des autres.\n\nLe papier, arrivé de Chine par le monde arabe, rend ce travail possible : il coûte bien moins cher que le parchemin, qui exige la peau de nombreux animaux. Un livre médiéval reste pourtant un objet rare, copié et enluminé à la main, parfois enchaîné dans les bibliothèques pour qu'on ne l'emporte pas.\n\nLes premiers imprimeurs sont souvent des artisans itinérants : ils emportent leurs caractères de ville en ville et s'installent là où un client finance l'atelier. L'idée de Gutenberg n'est pas l'imprimerie elle-même : les Chinois imprimaient déjà avec des planches de bois, et un artisan chinois, Bi Sheng, avait utilisé des caractères mobiles dès le XIe siècle. Sa nouveauté tient à trois éléments réunis. Il grave des caractères métalliques séparés, réutilisables, qu'on assemble ligne par ligne. Il adapte une presse à vis, inspirée de celles qui pressent le raisin, pour plaquer le papier sur les caractères encrés. Il choisit enfin une encre grasse qui tient sur le métal.\n\nVers 1455, la grande Bible imprimée sort de son atelier. Les exemplaires conservés montrent une régularité impossible à obtenir à la main. Un atelier peut désormais produire des centaines de feuilles par jour, et le prix d'un livre baisse fortement au fil des décennies. À la fin du XVe siècle, des ateliers existent dans plusieurs dizaines de villes d'Europe. Les imprimeurs fixent peu à peu l'orthographe, les accents et la ponctuation, car un même texte doit rester lisible d'un bout à l'autre du continent. Les autorités comprennent vite l'enjeu et encouragent ou surveillent ces ateliers selon les idées qui y circulent.\n\nCette accélération change la diffusion des idées : textes anciens, traductions et traités circulent en de nombreux exemplaires identiques, ce qui facilite la comparaison et la critique. Une controverse religieuse du début du XVIe siècle se répand ainsi en quelques semaines au lieu de rester locale. L'imprimerie n'a pas inventé la lecture, mais elle l'a rendue collective et reproductible.",
  "q": [
   {
    "q": "Quel métier Johannes Gutenberg exerçait-il ?",
    "o": [
     "Moine copiste",
     "Marchand de papier",
     "Orfèvre"
    ],
    "r": 2,
    "e": "Le texte présente Gutenberg comme un orfèvre de Mayence."
   },
   {
    "q": "Dans quelle ville Gutenberg travaille-t-il au milieu du XVe siècle ?",
    "o": [
     "À Mayence",
     "À Venise",
     "À Paris"
    ],
    "r": 0,
    "e": "Le texte situe l'atelier de Gutenberg à Mayence, au milieu du XVe siècle."
   },
   {
    "q": "Comment les livres étaient-ils copiés avant l'imprimerie ?",
    "o": [
     "Grâce à des presses hydrauliques romaines",
     "Avec des caractères métalliques mobiles",
     "À la main, dans des ateliers ou des monastères"
    ],
    "r": 2,
    "e": "Le texte décrit un copiste recopiant chaque page à la main, souvent dans un atelier de monastère."
   },
   {
    "q": "Combien de temps fallait-il pour copier un seul ouvrage ?",
    "o": [
     "Quelques heures seulement",
     "Une seule journée",
     "Des mois entiers"
    ],
    "r": 2,
    "e": "Le texte précise qu'il fallait des mois pour un seul ouvrage copié à la main."
   },
   {
    "q": "Quel peuple avait déjà utilisé des caractères mobiles au XIe siècle ?",
    "o": [
     "Les Chinois",
     "Les Romains",
     "Les Égyptiens"
    ],
    "r": 0,
    "e": "Le texte rappelle que Bi Sheng avait utilisé des caractères mobiles dès le XIe siècle en Chine."
   },
   {
    "q": "D'où vient l'idée de la presse à vis de Gutenberg ?",
    "o": [
     "Des moulins à eau des monastères",
     "Des métiers à tisser des Flandres",
     "Des pressoirs qui servent à presser le raisin"
    ],
    "r": 2,
    "e": "Le texte indique que sa presse s'inspire de celles qui pressent le raisin."
   },
   {
    "q": "Quel type de caractères Gutenberg grave-t-il ?",
    "o": [
     "Des caractères métalliques séparés et réutilisables",
     "Des planches de bois taillées d'un seul bloc",
     "Des lettres de plomb fondues dans la page"
    ],
    "r": 0,
    "e": "Le texte insiste sur des caractères métalliques séparés, réutilisables, assemblés ligne par ligne."
   },
   {
    "q": "Quelle qualité d'encre fallait-il pour imprimer ?",
    "o": [
     "Une encre très fluide qui sèche vite",
     "Une encre transparente à base d'eau",
     "Une encre grasse qui tient sur le métal"
    ],
    "r": 2,
    "e": "Gutenberg choisit une encre grasse qui tient sur le métal, selon le texte."
   },
   {
    "q": "En quelle année environ la grande Bible imprimée paraît-elle ?",
    "o": [
     "Vers 1355",
     "Vers 1455",
     "Vers 1555"
    ],
    "r": 1,
    "e": "Le texte date la sortie de la grande Bible imprimée vers 1455."
   },
   {
    "q": "Que montrent les exemplaires conservés de cette Bible ?",
    "o": [
     "Des fautes différentes sur chaque page",
     "Une régularité impossible à obtenir à la main",
     "Une écriture manuscrite encore visible"
    ],
    "r": 1,
    "e": "Le texte souligne la régularité des exemplaires conservés, impossible à la main."
   },
   {
    "q": "Quel effet la presse a-t-elle sur le prix des livres ?",
    "o": [
     "Il baisse fortement au fil des décennies",
     "Il monte à cause du métal devenu rare",
     "Il reste identique pendant un siècle"
    ],
    "r": 0,
    "e": "Le texte note que le prix d'un livre baisse fortement au fil des décennies."
   },
   {
    "q": "Combien de feuilles un atelier peut-il produire chaque jour ?",
    "o": [
     "Des centaines de feuilles",
     "Une dizaine de feuilles",
     "Quelques millions de feuilles"
    ],
    "r": 0,
    "e": "Un atelier peut désormais produire des centaines de feuilles par jour, précise le texte."
   },
   {
    "q": "Quel support, plus coûteux que le papier, servait aux livres médiévaux ?",
    "o": [
     "Le parchemin",
     "La soie tissée",
     "La tablette d'argile"
    ],
    "r": 0,
    "e": "Le texte oppose au papier le parchemin, qui exige la peau de nombreux animaux."
   },
   {
    "q": "Quel effet les imprimeurs ont-ils sur la langue écrite ?",
    "o": [
     "Ils suppriment les accents des textes",
     "Ils fixent peu à peu orthographe et ponctuation",
     "Ils imposent le latin à toute l'Europe"
    ],
    "r": 1,
    "e": "Le texte note que les imprimeurs fixent peu à peu l'orthographe, les accents et la ponctuation."
   },
   {
    "q": "Pourquoi l'imprimerie facilite-t-elle la critique des textes ?",
    "o": [
     "On peut comparer des exemplaires identiques entre eux",
     "Les livres sont désormais tous écrits en latin",
     "Les copistes contrôlent mieux leur propre travail"
    ],
    "r": 0,
    "e": "Des exemplaires identiques permettent la comparaison, ce que le texte associe à la critique."
   },
   {
    "q": "Pourquoi le choix du métal est-il important pour Gutenberg ?",
    "o": [
     "Le métal coûte moins cher que le bois taillé",
     "Le métal rend les lettres plus faciles à lire",
     "Un caractère métallique résiste et sert plusieurs fois"
    ],
    "r": 2,
    "e": "Les caractères sont réutilisables : ils doivent résister à de nombreux passages sous la presse."
   },
   {
    "q": "Que déduit-on du fait que la nouveauté tient à trois éléments réunis ?",
    "o": [
     "Les trois ont été imaginés en même temps ailleurs",
     "Aucun des trois éléments ne suffisait à lui seul",
     "Chacun des trois était une invention inédite"
    ],
    "r": 1,
    "e": "Le texte présente la combinaison des trois comme la nouveauté, et non chacun des éléments pris à part."
   },
   {
    "q": "Quel est le sujet principal de ce texte ?",
    "o": [
     "La vie quotidienne dans un monastère médiéval",
     "Ce que Gutenberg a réellement combiné pour imprimer",
     "L'histoire du papier arrivée de Chine"
    ],
    "r": 1,
    "e": "Le texte détaille les trois éléments réunis par Gutenberg et leurs effets sur la diffusion des livres."
   },
   {
    "q": "Pourquoi l'auteur rappelle-t-il que les Chinois imprimaient déjà ?",
    "o": [
     "Pour prouver que la Chine devançait toute l'Europe",
     "Pour nuancer l'idée que Gutenberg aurait tout inventé",
     "Pour expliquer l'origine du papier en Europe"
    ],
    "r": 1,
    "e": "La mention des planches chinoises et de Bi Sheng sert à préciser ce qui revient vraiment à Gutenberg."
   }
  ]
 },
 {
  "id": "c8",
  "theme": "histoire",
  "niveau": 3,
  "titre": "La roue qui a fait tourner le Moyen Âge",
  "corps": "Avant les machines à vapeur, l'Europe médiévale avait déjà trouvé sa force motrice : l'eau des rivières. Le moulin à eau, dont les Romains connaissaient déjà le principe, se multiplie à partir du XIe siècle. On en compte plusieurs milliers en France et en Angleterre à la fin du Moyen Âge. Chaque village traversé par un ruisseau un peu sérieux finit par avoir le sien.\n\nLe mécanisme est simple. Une roue à aubes plonge dans le courant et tourne avec lui. Un arbre transmet ce mouvement à une meule de pierre qui écrase le grain. Le meunier règle l'écart entre les deux meules pour obtenir une farine plus ou moins fine. Ce travail, longtemps fait à la main avec une petite meule de pierre, change alors de rythme et d'échelle.\n\nDeux dispositions coexistent. Dans le moulin à roue verticale, l'eau frappe les aubes par-dessous ou par-dessus, et un engrenage transmet le mouvement à la meule posée à plat. Dans le moulin à roue horizontale, plus compact, la roue tourne dans l'eau comme une toupie et entraîne directement la meule fixée sur le même axe. Le choix dépend du débit et de la pente : une rivière lente appelle une grande roue, un ruisseau rapide un dispositif plus petit.\n\nLe moulin ne sert pas seulement à moudre le blé. On l'utilise aussi pour fouler le drap, actionner les soufflets des forges ou scier le bois. L'énergie hydraulique devient un équipement collectif, souvent partagé par tout un village. Son usage suppose pourtant des droits : le seigneur autorise la construction et perçoit une redevance. En échange, les habitants sont parfois tenus d'aller moudre à son moulin, ce qu'on appelle la banalité.\n\nLa construction représente un investissement lourd. Il faut un charpentier, un tailleur de pierre pour les meules, parfois un spécialiste venu de loin, et l'entretien ne s'arrête jamais : les aubes pourrissent, les meules s'usent et doivent être rhabillées. Le meunier occupe donc une place à part dans le village et prélève sa part, souvent une fraction de la farine, le droit de mouture. Le relevé fiscal dressé en Angleterre en 1086, le Domesday Book, y recense déjà près de six mille moulins : le dispositif est courant, non une curiosité.\n\nLe gain de temps n'est pas mince. Une meule à bras mobilise une ou deux personnes pendant de longues heures pour une quantité modeste de grain ; le moulin abat la même tâche en peu de temps, avec une farine plus régulière. Cette capacité libère de la force humaine pour d'autres ouvrages et accompagne la croissance des villages.\n\nLes moulins modifient aussi le paysage. On creuse des biefs, on retient l'eau par des barrages rudimentaires, on détourne parfois un bras de rivière. Ces aménagements créent des étangs, gênent les poissons et provoquent des conflits entre riverains. Dès le XIIIe siècle, des règlements fixent les hauteurs d'eau autorisées pour éviter que le moulin d'amont ne prive de courant celui d'aval.",
  "q": [
   {
    "q": "À partir de quel siècle le moulin à eau se multiplie-t-il ?",
    "o": [
     "Le IIIe siècle",
     "Le XIe siècle",
     "Le XVIe siècle"
    ],
    "r": 1,
    "e": "Le texte situe cette multiplication à partir du XIe siècle en Europe."
   },
   {
    "q": "Quel peuple connaissait déjà le principe du moulin à eau ?",
    "o": [
     "Les Romains",
     "Les Vikings",
     "Les Égyptiens"
    ],
    "r": 0,
    "e": "Le texte rappelle que les Romains en connaissaient déjà le principe."
   },
   {
    "q": "Combien de moulins compte-t-on en France et en Angleterre à la fin du Moyen Âge ?",
    "o": [
     "Plusieurs millions",
     "Plusieurs milliers",
     "Une dizaine"
    ],
    "r": 1,
    "e": "Le texte parle de plusieurs milliers de moulins dans ces deux pays."
   },
   {
    "q": "Quel élément du moulin plonge dans le courant ?",
    "o": [
     "La meule de pierre",
     "Le bief",
     "La roue à aubes"
    ],
    "r": 2,
    "e": "La roue à aubes plonge dans l'eau et tourne avec le courant."
   },
   {
    "q": "À quoi sert l'arbre du moulin ?",
    "o": [
     "À chauffer le grain avant la mouture",
     "À retenir l'eau du canal",
     "À transmettre le mouvement à la meule"
    ],
    "r": 2,
    "e": "L'arbre relie la roue à la meule et lui transmet le mouvement."
   },
   {
    "q": "Comment le meunier obtient-il une farine plus fine ?",
    "o": [
     "En augmentant le débit de la rivière",
     "En réduisant l'écart entre les meules",
     "En mouillant le grain avant la mouture"
    ],
    "r": 1,
    "e": "C'est le réglage de l'écart entre les deux meules qui fixe la finesse de la farine."
   },
   {
    "q": "Quel autre usage du moulin le texte cite-t-il ?",
    "o": [
     "Tisser la laine",
     "Cuire le pain",
     "Fouler le drap"
    ],
    "r": 2,
    "e": "Le moulin servait aussi à fouler le drap, à actionner des soufflets ou à scier le bois."
   },
   {
    "q": "Qui autorise la construction d'un moulin ?",
    "o": [
     "Le meunier lui-même",
     "Le seigneur",
     "Les riverains réunis"
    ],
    "r": 1,
    "e": "Le seigneur autorise la construction et perçoit en retour une redevance."
   },
   {
    "q": "Qu'appelle-t-on la banalité ?",
    "o": [
     "L'obligation de moudre au moulin du seigneur",
     "La taxe payée sur la farine vendue",
     "Le droit de pêcher dans le bief"
    ],
    "r": 0,
    "e": "Les habitants peuvent être tenus d'aller moudre au moulin seigneurial : c'est la banalité."
   },
   {
    "q": "Quel aménagement sert à retenir l'eau ?",
    "o": [
     "Une meule verticale",
     "Un arbre à cames",
     "Un barrage rudimentaire"
    ],
    "r": 2,
    "e": "Le texte mentionne des barrages rudimentaires qui retiennent l'eau des biefs."
   },
   {
    "q": "Quel problème les règlements sur les hauteurs d'eau, dès le XIIIe siècle, veulent-ils éviter ?",
    "o": [
     "Que le moulin d'amont prive celui d'aval",
     "Que les poissons remontent la rivière",
     "Que les meules s'usent trop vite"
    ],
    "r": 0,
    "e": "Dès le XIIIe siècle, des règlements fixent les hauteurs d'eau pour qu'un moulin n'assèche pas le cours utile à celui d'aval."
   },
   {
    "q": "Quel document de 1086 recense près de six mille moulins en Angleterre ?",
    "o": [
     "Le Domesday Book",
     "Le Livre des métiers",
     "Un capitulaire de Charlemagne"
    ],
    "r": 0,
    "e": "Le relevé fiscal anglais de 1086, le Domesday Book, y compte déjà près de six mille moulins."
   },
   {
    "q": "Comment la roue horizontale entraîne-t-elle la meule ?",
    "o": [
     "Par une courroie de cuir",
     "Par un engrenage à plusieurs étages",
     "Directement, sur le même axe"
    ],
    "r": 2,
    "e": "Dans le moulin à roue horizontale, la meule est fixée sur l'axe même de la roue."
   },
   {
    "q": "Pourquoi le moulin change-t-il l'échelle du travail de la farine ?",
    "o": [
     "Il rend la farine plus nourrissante",
     "Il remplace un broyage manuel par une production continue",
     "Il permet de cultiver beaucoup plus de blé"
    ],
    "r": 1,
    "e": "Le travail auparavant fait à la main change de rythme et de volume avec la roue."
   },
   {
    "q": "Pourquoi les riverains pouvaient-ils s'opposer à un moulin ?",
    "o": [
     "Parce qu'il coûtait trop cher au seigneur",
     "Parce qu'il modifiait le cours de l'eau et leurs usages",
     "Parce qu'il produisait trop de farine"
    ],
    "r": 1,
    "e": "Barrages et détournements créaient des étangs, gênaient les poissons et suscitaient des conflits."
   },
   {
    "q": "Que révèle l'obligation de moudre au moulin seigneurial ?",
    "o": [
     "Que l'équipement collectif servait aussi à prélever un revenu",
     "Que les paysans refusaient de moudre leur grain",
     "Que les seigneurs travaillaient eux-mêmes la farine"
    ],
    "r": 0,
    "e": "Le seigneur autorise le moulin mais en tire une redevance : la technique sert aussi au prélèvement."
   },
   {
    "q": "Quel est le sujet du texte ?",
    "o": [
     "Le moulin à eau, moteur et enjeu de la société médiévale",
     "L'invention de la machine à vapeur",
     "La culture du blé au Moyen Âge"
    ],
    "r": 0,
    "e": "Le texte traite du moulin, de son mécanisme, de ses usages et des rapports sociaux qu'il crée."
   },
   {
    "q": "Que veut montrer l'auteur en évoquant les conflits d'eau ?",
    "o": [
     "Que l'eau était rare au Moyen Âge",
     "Que les seigneurs ignoraient les techniques",
     "Qu'une technique nouvelle bouscule aussi les usages et les droits"
    ],
    "r": 2,
    "e": "Les règlements sur les hauteurs d'eau montrent qu'un équipement technique réorganise les rapports de voisinage."
   }
  ]
 },
 {
  "id": "c4",
  "theme": "santé",
  "niveau": 3,
  "titre": "La vache, le mot vaccin et l'année 1796",
  "corps": "À la fin du XVIIIe siècle, la variole tue et défigure une partie de la population européenne. Les médecins ne savent pas la soigner ; ils peuvent seulement isoler les malades. Les survivants gardent souvent des cicatrices profondes, et certains perdent la vue. Un médecin de campagne anglais, Edward Jenner, remarque alors un détail rapporté par les habitants : les personnes qui traient les vaches et attrapent la variole des vaches, bénigne, semblent échapper ensuite à la variole humaine.\n\nUne pratique plus ancienne existait pourtant : l'inoculation. On introduisait un peu de matière prélevée sur un malade dans une petite plaie, pour provoquer une forme légère de la maladie. La méthode, connue en Chine et dans l'Empire ottoman, arrive en Angleterre au début du XVIIIe siècle. Elle protégeait souvent, mais pouvait aussi déclencher une vraie variole et la répandre autour du malade.\n\nEn 1796, Jenner décide de vérifier son observation. Il prélève du matériel d'une lésion de variole bovine et l'introduit sous la peau d'un enfant en bonne santé. Quelques semaines plus tard, il expose ce même enfant à la variole humaine : la maladie ne se déclare pas. L'expérience est répétée et fait l'objet d'une publication en 1798.\n\nLe mot vaccin vient d'ailleurs de là : vacca signifie vache en latin. La méthode se répand en Europe, puis dans le monde, malgré des controverses et des erreurs. Elle repose sur un principe simple : exposer l'organisme à une forme atténuée ou proche du microbe pour lui apprendre à se défendre. Le corps dispose en effet de cellules capables de reconnaître un microbe déjà rencontré et de le neutraliser plus vite la fois suivante. C'est cette mémoire qui explique la protection, et aussi sa durée, très variable d'une maladie à l'autre.\n\nLa suite est plus lente que la découverte. Il faut attendre le XXe siècle pour que la vaccination devienne une pratique de santé publique organisée, avec des campagnes de masse, des registres et des équipes formées. Le dernier cas naturel de variole est signalé en 1977. En 1980, l'Organisation mondiale de la santé déclare la maladie éradiquée : c'est la première maladie humaine disparue grâce à une campagne mondiale de vaccination.",
  "q": [
   {
    "q": "Quel médecin anglais s'intéresse à la variole à la fin du XVIIIe siècle ?",
    "o": [
     "Louis Pasteur",
     "Edward Jenner",
     "William Harvey"
    ],
    "r": 1,
    "e": "Le texte nomme Edward Jenner, médecin de campagne anglais, comme auteur de cette observation."
   },
   {
    "q": "Que remarque Jenner chez les personnes qui traient les vaches ?",
    "o": [
     "Elles semblent échapper ensuite à la variole humaine",
     "Elles guérissent plus vite de toutes les maladies",
     "Elles tombent plus souvent malades que les autres"
    ],
    "r": 0,
    "e": "Le texte rapporte que, après la variole des vaches, elles semblent échapper à la variole humaine."
   },
   {
    "q": "En quelle année Jenner réalise-t-il son expérience ?",
    "o": [
     "1796",
     "1696",
     "1896"
    ],
    "r": 0,
    "e": "Le texte date l'expérience de Jenner de 1796."
   },
   {
    "q": "Quel matériel Jenner prélève-t-il pour son essai ?",
    "o": [
     "Du matériel d'une lésion de variole bovine",
     "Du sang d'un malade de la variole humaine",
     "Un extrait de lait de vache fraîchement trait"
    ],
    "r": 0,
    "e": "Jenner prélève du matériel d'une lésion de variole bovine, et non du lait ni du sang d'un malade."
   },
   {
    "q": "Sur qui Jenner mène-t-il son expérience ?",
    "o": [
     "Sur un veau nouveau-né",
     "Sur un adulte déjà malade",
     "Sur un enfant en bonne santé"
    ],
    "r": 2,
    "e": "Le texte précise qu'il introduit ce matériel sous la peau d'un enfant en bonne santé."
   },
   {
    "q": "Que se passe-t-il lorsque l'enfant est ensuite exposé à la variole humaine ?",
    "o": [
     "La maladie ne se déclare pas",
     "L'enfant développe la variole bovine",
     "La maladie se déclare plus fortement"
    ],
    "r": 0,
    "e": "Le texte indique que, exposé à la variole humaine, l'enfant ne déclare pas la maladie."
   },
   {
    "q": "En quelle année Jenner publie-t-il son travail ?",
    "o": [
     "1798",
     "1796",
     "1808"
    ],
    "r": 0,
    "e": "L'expérience est répétée et publiée en 1798, selon le texte."
   },
   {
    "q": "D'où vient le mot vaccin ?",
    "o": [
     "Du grec vakos, qui désigne une pustule",
     "Du latin vacca, qui signifie vache",
     "Du nom du médecin qui l'a mis au point"
    ],
    "r": 1,
    "e": "Le texte rattache le mot vaccin au latin vacca, la vache."
   },
   {
    "q": "Sur quel principe repose la méthode de Jenner ?",
    "o": [
     "Éliminer tout contact entre l'homme et l'animal",
     "Transmettre la maladie pour l'affaiblir ensuite",
     "Exposer l'organisme à une forme proche du microbe"
    ],
    "r": 2,
    "e": "Le texte résume la méthode par l'exposition à une forme atténuée ou proche du microbe."
   },
   {
    "q": "Quand la vaccination devient-elle une pratique de santé publique organisée ?",
    "o": [
     "Au XXIe siècle",
     "Au XVIIIe siècle",
     "Au XXe siècle"
    ],
    "r": 2,
    "e": "Le texte situe au XXe siècle la vaccination devenue pratique de santé publique organisée."
   },
   {
    "q": "Quelle institution déclare la variole éradiquée ?",
    "o": [
     "La Croix-Rouge internationale",
     "L'Académie française de médecine",
     "L'Organisation mondiale de la santé"
    ],
    "r": 2,
    "e": "Le texte attribue cette déclaration à l'Organisation mondiale de la santé."
   },
   {
    "q": "En quelle année la variole est-elle déclarée éradiquée ?",
    "o": [
     "1880",
     "1980",
     "1998"
    ],
    "r": 1,
    "e": "Le texte date de 1980 la déclaration d'éradication de la variole."
   },
   {
    "q": "Quel danger présentait l'inoculation ancienne ?",
    "o": [
     "Elle ne protégeait que les enfants en bas âge",
     "Elle pouvait déclencher une vraie variole et la répandre",
     "Elle exigeait un voyage jusqu'en Chine"
    ],
    "r": 1,
    "e": "Le texte précise qu'elle protégeait souvent mais pouvait déclencher une vraie variole et la répandre."
   },
   {
    "q": "Qu'est-ce qui explique qu'un organisme déjà exposé résiste mieux ?",
    "o": [
     "La mémoire de ses cellules de défense",
     "L'absence totale de microbes autour de lui",
     "La quantité de vaccin injectée chaque année"
    ],
    "r": 0,
    "e": "Le texte parle de cellules capables de reconnaître un microbe déjà rencontré et de le neutraliser plus vite."
   },
   {
    "q": "Pourquoi l'observation des trayeuses de vaches était-elle précieuse ?",
    "o": [
     "Elle permettait d'éviter toute expérimentation",
     "Elle prouvait l'efficacité d'un remède ancien",
     "Elle fournissait un indice venu du terrain"
    ],
    "r": 2,
    "e": "Jenner part d'un détail rapporté par les habitants, donc d'une observation de terrain, avant de tester."
   },
   {
    "q": "Pourquoi la découverte précède-t-elle longtemps son application générale ?",
    "o": [
     "Il faut organiser et convaincre avant de généraliser",
     "La méthode était interdite par les médecins",
     "Le vaccin perdait son effet au bout de dix ans"
    ],
    "r": 0,
    "e": "Entre 1798 et le XXe siècle, le texte évoque controverses, erreurs et lenteur d'organisation."
   },
   {
    "q": "Que peut-on déduire du fait que la variole est la première maladie éradiquée ?",
    "o": [
     "La variole était la seule maladie existante",
     "Aucune autre maladie humaine ne l'avait été avant",
     "La campagne mondiale a échoué dans plusieurs pays"
    ],
    "r": 1,
    "e": "Le texte la présente comme la première maladie humaine disparue grâce à une campagne mondiale."
   },
   {
    "q": "Quel est le sujet principal de ce texte ?",
    "o": [
     "Le fonctionnement général du système immunitaire",
     "La naissance de la vaccination contre la variole",
     "Les maladies transmises par le lait de vache"
    ],
    "r": 1,
    "e": "Le texte suit Jenner de l'observation de 1796 à l'éradication déclarée en 1980."
   },
   {
    "q": "Pourquoi l'auteur raconte-t-il l'expérience de 1796 en détail ?",
    "o": [
     "Pour décrire les symptômes exacts de la variole",
     "Pour critiquer sévèrement la méthode employée",
     "Pour montrer comment une intuition a été vérifiée"
    ],
    "r": 2,
    "e": "Le récit du prélèvement, de l'exposition et du résultat montre la vérification d'une observation."
   }
  ]
 },
 {
  "id": "c9",
  "theme": "santé",
  "niveau": 3,
  "titre": "Ce que fait le corps pendant la nuit",
  "corps": "Une nuit de sommeil n'est pas un bloc uniforme. Elle se compose de cycles qui durent chacun environ 90 minutes et se répètent quatre à six fois. Chaque cycle alterne plusieurs états, du sommeil léger au sommeil profond, puis à une phase où le cerveau devient presque aussi actif que pendant l'éveil : le sommeil paradoxal.\n\nLe sommeil profond, dit à ondes lentes, domine le début de la nuit. C'est alors que le corps récupère le plus : la température baisse, le cœur ralentit, l'hormone de croissance est sécrétée. Les rêves les plus vivides, eux, apparaissent surtout en sommeil paradoxal, plus fréquent vers la fin de la nuit. Les muscles y sont pratiquement paralysés, ce qui évite de mimer ses rêves.\n\nCe rythme obéit à une horloge interne, logée dans une petite région du cerveau, qui suit un cycle proche de vingt-quatre heures. La lumière du jour la recale chaque matin ; le soir, l'obscurité déclenche la sécrétion de mélatonine, une hormone qui prépare l'endormissement. Quand les horaires se déplacent, l'horloge met plusieurs jours à se remettre à l'heure, ce qui explique une partie de la fatigue des voyages au long cours et du travail de nuit. Le travail de nuit installe parfois un décalage permanent, que l'exposition à la lumière du matin peut aggraver ou corriger.\n\nCes états ne sont pas muets. Le cerveau produit des ondes électriques que l'électroencéphalogramme enregistre depuis les années 1930. On y reconnaît des tracés caractéristiques : ondes lentes et amples du sommeil profond, activité rapide et désordonnée du paradoxal. C'est en comparant ces tracés que les chercheurs ont compris que le sommeil est un processus actif, et non un simple arrêt de la vie mentale.\n\nL'histoire de ces découvertes est récente. Après les premiers tracés, les chercheurs apprennent peu à peu à distinguer les stades. En 1953, deux physiologistes américains, Eugene Aserinsky et Nathaniel Kleitman, décrivent le sommeil paradoxal et les mouvements oculaires rapides qui l'accompagnent sous les paupières fermées. La nuit cesse alors d'être une zone aveugle : on peut la découper en phases nommées et mesurées.\n\nLa durée totale varie fortement avec l'âge. Un nouveau-né passe l'essentiel de ses journées à dormir, un adolescent a besoin de plus d'heures qu'un adulte, et la part de sommeil profond diminue au fil des décennies. Les besoins individuels restent divers : certains se contentent de peu, d'autres ressentent vite le manque, sans que la frontière soit nette.\n\nLe manque de sommeil se paie. Après une nuit blanche, l'attention baisse, les temps de réaction s'allongent et la mémoire fixe moins bien ce qui a été appris. Le corps ne compense pas d'un coup : une dette de sommeil se rembourse mal en une seule grasse matinée. Les observations montrent aussi que la régularité des horaires pèse souvent plus lourd que la durée totale.",
  "q": [
   {
    "q": "Combien de cycles d'environ 90 minutes compte une nuit ?",
    "o": [
     "Une à deux",
     "Dix à douze",
     "Quatre à six"
    ],
    "r": 2,
    "e": "La nuit se découpe en quatre à six cycles d'environ 90 minutes chacun."
   },
   {
    "q": "Quel état domine le début de la nuit ?",
    "o": [
     "Le sommeil paradoxal",
     "L'éveil calme",
     "Le sommeil profond"
    ],
    "r": 2,
    "e": "Le sommeil profond, dit à ondes lentes, domine le début de la nuit."
   },
   {
    "q": "Quelle hormone est sécrétée pendant le sommeil profond ?",
    "o": [
     "L'adrénaline",
     "L'insuline",
     "L'hormone de croissance"
    ],
    "r": 2,
    "e": "Le texte cite la sécrétion de l'hormone de croissance pendant le sommeil profond."
   },
   {
    "q": "Que devient la température du corps pendant le sommeil profond ?",
    "o": [
     "Elle baisse",
     "Elle monte fortement",
     "Elle ne varie jamais"
    ],
    "r": 0,
    "e": "La température baisse, le cœur ralentit : le corps récupère pendant cette phase."
   },
   {
    "q": "Quand les rêves les plus vivides apparaissent-ils ?",
    "o": [
     "Surtout vers la fin de la nuit",
     "Uniquement à l'endormissement",
     "Surtout au début de la nuit"
    ],
    "r": 0,
    "e": "Ils surviennent surtout en sommeil paradoxal, plus fréquent vers la fin de la nuit."
   },
   {
    "q": "Pourquoi les muscles sont-ils paralysés en sommeil paradoxal ?",
    "o": [
     "Pour éviter de mimer ses rêves",
     "Pour permettre au cœur de ralentir",
     "Pour économiser l'oxygène du sang"
    ],
    "r": 0,
    "e": "Cette paralysie quasi complète empêche le dormeur d'agir physiquement ses rêves."
   },
   {
    "q": "Depuis quand l'électroencéphalogramme enregistre-t-il les ondes cérébrales ?",
    "o": [
     "Depuis les années 1930",
     "Depuis les années 1880",
     "Depuis les années 1990"
    ],
    "r": 0,
    "e": "Le texte situe ces enregistrements à partir des années 1930."
   },
   {
    "q": "Quel type d'ondes caractérise le sommeil profond ?",
    "o": [
     "Des ondes rapides et désordonnées",
     "Des ondes lentes et amples",
     "Une absence totale d'ondes"
    ],
    "r": 1,
    "e": "Le sommeil profond est appelé sommeil à ondes lentes, amples sur le tracé."
   },
   {
    "q": "Quelle activité cérébrale marque le sommeil paradoxal ?",
    "o": [
     "Un arrêt complet de l'activité",
     "Une activité rapide et désordonnée",
     "Une activité lente et régulière"
    ],
    "r": 1,
    "e": "Le tracé du paradoxal montre une activité rapide et désordonnée, proche de l'éveil."
   },
   {
    "q": "Que montre l'étude des tracés cérébraux ?",
    "o": [
     "Que les rêves n'existent pas",
     "Que le cerveau s'arrête la nuit",
     "Que le sommeil est un processus actif"
    ],
    "r": 2,
    "e": "Les tracés ont fait comprendre que le sommeil est un processus actif, non un arrêt."
   },
   {
    "q": "Quel effet une nuit blanche a-t-elle sur l'attention ?",
    "o": [
     "Elle la laisse intacte",
     "Elle la fait baisser",
     "Elle l'améliore nettement"
    ],
    "r": 1,
    "e": "Après une nuit blanche, l'attention baisse et les temps de réaction s'allongent."
   },
   {
    "q": "En quelle année le sommeil paradoxal est-il décrit par deux physiologistes américains ?",
    "o": [
     "En 1983",
     "En 1953",
     "En 1923"
    ],
    "r": 1,
    "e": "En 1953, Aserinsky et Kleitman décrivent le sommeil paradoxal et les mouvements oculaires rapides."
   },
   {
    "q": "Quelle hormone l'obscurité déclenche-t-elle le soir ?",
    "o": [
     "La mélatonine",
     "L'adrénaline",
     "L'insuline"
    ],
    "r": 0,
    "e": "Le soir, l'obscurité déclenche la sécrétion de mélatonine, qui prépare l'endormissement."
   },
   {
    "q": "Pourquoi une seule grasse matinée ne suffit-elle pas à effacer une dette de sommeil ?",
    "o": [
     "Parce que le lit n'est pas assez confortable",
     "Parce que le corps oublie ses cycles",
     "Parce que le manque accumulé ne se récupère pas d'un coup"
    ],
    "r": 2,
    "e": "Le texte précise qu'une dette de sommeil se rembourse mal en une seule matinée."
   },
   {
    "q": "Pourquoi le sommeil paradoxal est-il comparé à l'éveil ?",
    "o": [
     "Les muscles y sont contractés",
     "La température y atteint son maximum",
     "Le cerveau y est presque aussi actif"
    ],
    "r": 2,
    "e": "Le texte le décrit comme une phase où le cerveau est presque aussi actif que pendant l'éveil."
   },
   {
    "q": "Que peut-on déduire du fait que le sommeil profond domine le début de la nuit ?",
    "o": [
     "Le corps n'a plus besoin de récupérer ensuite",
     "La récupération physique est surtout placée en début de nuit",
     "Les rêves les plus forts arrivent dès l'endormissement"
    ],
    "r": 1,
    "e": "Comme la récupération se fait surtout en sommeil profond, elle occupe le début de la nuit."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "L'organisation du sommeil en cycles et ses effets",
     "Le rôle des rêves dans la vie diurne",
     "Les remèdes proposés contre l'insomnie"
    ],
    "r": 0,
    "e": "Le texte décrit les cycles du sommeil, leurs fonctions et les conséquences du manque."
   },
   {
    "q": "Quelle idée l'auteur défend-il ?",
    "o": [
     "Les rêves n'ont aucune fonction biologique",
     "Le sommeil est une activité cérébrale organisée",
     "Il faut dormir le plus longtemps possible"
    ],
    "r": 1,
    "e": "Il insiste sur le caractère actif et structuré du sommeil, contre l'image d'une simple pause."
   }
  ]
 },
 {
  "id": "b15",
  "theme": "sciences",
  "niveau": 3,
  "titre": "La photosynthèse, une usine à sucre alimentée par la lumière",
  "corps": "Une feuille est une usine chimique. Elle capte la lumière du soleil, puise de l'eau dans la tige et du dioxyde de carbone dans l'air, puis fabrique des sucres. Ce processus, la photosynthèse, fournit la matière dont la plante se construit et l'oxygène que nous respirons.\n\nTout se joue dans les chloroplastes, de petites structures vertes présentes dans les cellules de la feuille. Elles contiennent de la chlorophylle, un pigment qui absorbe surtout le bleu et le rouge et réfléchit le vert. C'est pourquoi les feuilles nous paraissent vertes.\n\nLe processus se décompose en deux temps. Dans un premier temps, la lumière arrache des électrons à la chlorophylle et permet de fabriquer des molécules riches en énergie. Dans un second, ces molécules servent à fixer le carbone du dioxyde de carbone pour construire des sucres. Le second temps peut fonctionner quelques instants sans lumière, le premier non.\n\nLe dioxyde de carbone entre par de minuscules ouvertures, les stomates, que la plante peut fermer pour limiter les pertes d'eau. L'eau, elle, est puisée par les racines et monte jusqu'aux feuilles. La lumière fournit l'énergie nécessaire pour casser les molécules d'eau ; l'oxygène est libéré et le carbone est intégré dans des sucres.\n\nLes sucres produits ne restent pas tous dans la feuille. Une partie est consommée par la plante pour vivre, une autre est transformée en amidon et stockée, une autre encore est transportée vers les racines, les fruits ou les graines.\n\nLa vitesse du processus dépend de plusieurs facteurs. Peu de lumière, un air sec ou un sol pauvre ralentissent la production. En été, à midi, une plante peut fermer ses stomates pour économiser l'eau et voir sa photosynthèse diminuer malgré un soleil éclatant.\n\nL'histoire de la découverte est instructive. Au XVIIIe siècle, un savant montre qu'une plante enfermée sous une cloche peut rendre respirable un air vicié ; un autre comprend que la lumière est indispensable. Il faudra attendre le XIXe siècle pour identifier la chlorophylle et le rôle du dioxyde de carbone.\n\nLa nuit, la plante respire : elle consomme de l'oxygène et rejette du dioxyde de carbone, comme les animaux. Le bilan reste largement positif en journée, parce que la photosynthèse l'emporte sur la respiration. Une part importante de l'oxygène atmosphérique provient d'ailleurs du plancton des océans, qui photosynthétise comme les plantes terrestres.",
  "q": [
   {
    "q": "Que fabrique une plante grâce à la photosynthèse ?",
    "o": [
     "Des minéraux",
     "De l'azote",
     "Des sucres"
    ],
    "r": 2,
    "e": "La photosynthèse produit des sucres à partir de lumière, d'eau et de dioxyde de carbone."
   },
   {
    "q": "Où se déroule la photosynthèse dans la cellule ?",
    "o": [
     "Dans le noyau",
     "Dans les chloroplastes",
     "Dans la paroi"
    ],
    "r": 1,
    "e": "Le processus se déroule dans les chloroplastes."
   },
   {
    "q": "Quel pigment capte la lumière ?",
    "o": [
     "La chlorophylle",
     "La kératine",
     "L'hémoglobine"
    ],
    "r": 0,
    "e": "La chlorophylle est le pigment qui absorbe la lumière."
   },
   {
    "q": "Quelles couleurs la chlorophylle absorbe-t-elle surtout ?",
    "o": [
     "Le vert et le jaune",
     "Le bleu et le rouge",
     "L'infrarouge seul"
    ],
    "r": 1,
    "e": "Elle absorbe surtout le bleu et le rouge, et réfléchit le vert."
   },
   {
    "q": "Pourquoi les feuilles paraissent-elles vertes ?",
    "o": [
     "Parce que la chlorophylle réfléchit le vert",
     "Parce qu'elles contiennent de l'eau verte",
     "Parce que le soleil est vert"
    ],
    "r": 0,
    "e": "La lumière verte est réfléchie vers l'œil plutôt qu'absorbée."
   },
   {
    "q": "Par où le dioxyde de carbone entre-t-il ?",
    "o": [
     "Par les racines",
     "Par l'écorce",
     "Par les stomates"
    ],
    "r": 2,
    "e": "Le dioxyde de carbone pénètre par les stomates, de minuscules ouvertures."
   },
   {
    "q": "Pourquoi la plante peut-elle fermer ses stomates ?",
    "o": [
     "Pour arrêter la croissance",
     "Pour limiter les pertes d'eau",
     "Pour attirer les insectes"
    ],
    "r": 1,
    "e": "La fermeture des stomates réduit les pertes d'eau, au prix d'un moindre apport de dioxyde de carbone."
   },
   {
    "q": "D'où vient l'eau utilisée par la feuille ?",
    "o": [
     "De la rosée seule",
     "De l'air humide uniquement",
     "Des racines"
    ],
    "r": 2,
    "e": "L'eau est puisée par les racines et monte jusqu'aux feuilles."
   },
   {
    "q": "Que fournit la lumière dans le processus ?",
    "o": [
     "L'énergie nécessaire pour casser les molécules d'eau",
     "Le carbone des sucres",
     "Les sels minéraux"
    ],
    "r": 0,
    "e": "La lumière apporte l'énergie qui permet de dissocier les molécules d'eau."
   },
   {
    "q": "Quel gaz est libéré par la photosynthèse ?",
    "o": [
     "L'oxygène",
     "Le dioxyde de carbone",
     "L'azote"
    ],
    "r": 0,
    "e": "L'oxygène est libéré lors de la dissociation de l'eau."
   },
   {
    "q": "Quels facteurs ralentissent la photosynthèse ?",
    "o": [
     "Une température stable",
     "Le manque de lumière, l'air sec ou un sol pauvre",
     "Un air humide"
    ],
    "r": 1,
    "e": "Le texte cite le manque de lumière, l'air sec et la pauvreté du sol."
   },
   {
    "q": "Que peut-il se passer à midi en été ?",
    "o": [
     "La plante cesse de respirer",
     "Les feuilles deviennent rouges",
     "La plante ferme ses stomates et photosynthétise moins"
    ],
    "r": 2,
    "e": "Pour économiser l'eau, la plante ferme ses stomates, ce qui réduit la photosynthèse malgré le soleil."
   },
   {
    "q": "D'où vient une part importante de l'oxygène atmosphérique ?",
    "o": [
     "Des volcans sous-marins",
     "Du plancton des océans",
     "De la fonte des glaces"
    ],
    "r": 1,
    "e": "Le plancton océanique photosynthétise et fournit une part importante de l'oxygène."
   },
   {
    "q": "Pourquoi la photosynthèse diminue-t-elle quand l'air est sec ?",
    "o": [
     "Parce que la plante ferme ses stomates pour garder son eau",
     "Parce que la chlorophylle disparaît",
     "Parce que les racines gèlent"
    ],
    "r": 0,
    "e": "En air sec, la plante protège son eau en fermant les stomates, ce qui limite l'entrée du dioxyde de carbone."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La classification des végétaux",
     "La culture des céréales",
     "Le mécanisme de la photosynthèse et ses conditions"
    ],
    "r": 2,
    "e": "Le texte décrit les ingrédients, le lieu et les limites du processus."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Donner des conseils de jardinage",
     "Décrire une forêt tropicale",
     "Expliquer une fonction biologique par une comparaison concrète"
    ],
    "r": 2,
    "e": "L'image de l'usine chimique sert à rendre le processus immédiatement compréhensible."
   },
   {
    "q": "Pourquoi la comparaison avec une usine est-elle pertinente ?",
    "o": [
     "Parce que la feuille transforme des matières premières en produit",
     "Parce qu'elle produit de l'électricité",
     "Parce qu'elle emploie des ouvriers"
    ],
    "r": 0,
    "e": "La feuille reçoit des matières premières et de l'énergie pour fabriquer un produit, le sucre."
   },
   {
    "q": "Quel est le premier des deux temps de la photosynthèse ?",
    "o": [
     "La fixation du carbone",
     "La fabrication de molécules riches en énergie grâce à la lumière",
     "Le stockage de l'amidon"
    ],
    "r": 1,
    "e": "La lumière fournit d'abord l'énergie, utilisée ensuite pour fixer le carbone."
   },
   {
    "q": "Que devient une partie des sucres produits ?",
    "o": [
     "Elle est transformée en amidon et stockée",
     "Elle est rejetée par les stomates",
     "Elle est convertie en chlorophylle"
    ],
    "r": 0,
    "e": "La plante consomme, stocke sous forme d'amidon ou transporte les sucres vers d'autres organes."
   }
  ]
 },
 {
  "id": "b20",
  "theme": "sciences",
  "niveau": 3,
  "titre": "Pourquoi la mer monte deux fois par jour",
  "corps": "Sur une plage, la mer monte et descend deux fois par jour. Ce mouvement n'est pas produit par le vent ni par les courants, mais par l'attraction de la Lune et, dans une moindre mesure, du Soleil.\n\nLa Lune attire la Terre entière, mais son effet varie selon la distance : l'eau la plus proche est attirée un peu plus fortement que le centre de la planète, l'eau la plus éloignée un peu moins. Il en résulte deux renflements opposés, et donc deux marées hautes par jour dans la plupart des lieux.\n\nLe rythme n'est pas exactement de douze heures. La Lune tourne autour de la Terre dans le même sens que celle-ci, si bien qu'un lieu donné repasse sous un renflement au bout d'environ douze heures et vingt-cinq minutes. Les marées hautes décalent donc leur horaire d'un jour à l'autre, d'environ cinquante minutes.\n\nLe Soleil, bien plus massif mais beaucoup plus lointain, ajoute un effet comparable mais plus faible. Quand Lune et Soleil sont alignés, à la nouvelle et à la pleine lune, les marées sont plus amples : ce sont les vives-eaux. Quand ils forment un angle droit, l'amplitude diminue : ce sont les mortes-eaux.\n\nL'amplitude varie énormément d'un lieu à l'autre. La forme des côtes modifie tout : dans une baie large et peu profonde, la marée peut atteindre plusieurs mètres et remonter très vite ; ailleurs, elle reste faible. Dans la baie de Fundy, au Canada, elle peut approcher seize mètres lors des grandes marées ; en Méditerranée, presque fermée, elle reste souvent inférieure à un mètre. Certains estuaires connaissent des mascarets, une vague qui remonte le fleuve.\n\nLes cartes marines représentent ces différences par des lignes où l'amplitude est nulle, appelées points amphidromiques : autour d'elles, la marée tourne. Ces lignes expliquent pourquoi deux ports voisins peuvent avoir des horaires très différents.\n\nL'homme a longtemps utilisé cette énergie. Des moulins à marée, installés dans des estuaires, retenaient l'eau à marée haute puis la laissaient repartir sur une roue. Quelques installations modernes reprennent ce principe pour produire de l'électricité.\n\nLe calendrier des marées se calcule à l'avance, car les positions relatives de la Lune et du Soleil sont prévisibles. Les ports publient chaque année des tables qui servent aux marins, aux pêcheurs et aux promeneurs.",
  "q": [
   {
    "q": "Combien de fois par jour la mer monte-t-elle sur une plage ?",
    "o": [
     "Une fois",
     "Quatre fois",
     "Deux fois"
    ],
    "r": 2,
    "e": "Le texte ouvre sur deux montées et deux descentes quotidiennes."
   },
   {
    "q": "Qu'est-ce qui produit les marées ?",
    "o": [
     "L'attraction de la Lune et du Soleil",
     "Le vent et les courants",
     "La rotation des fonds marins"
    ],
    "r": 0,
    "e": "Le texte écarte le vent et les courants au profit de l'attraction lunaire et solaire."
   },
   {
    "q": "Quel astre a l'effet principal ?",
    "o": [
     "Le Soleil",
     "La Lune",
     "Les deux à égalité"
    ],
    "r": 1,
    "e": "La Lune agit principalement, le Soleil dans une moindre mesure."
   },
   {
    "q": "Pourquoi l'effet de la Lune varie-t-il sur la Terre ?",
    "o": [
     "Parce qu'il dépend de la distance à la Lune",
     "Parce que la Lune change de masse",
     "Parce que l'air ralentit l'eau"
    ],
    "r": 0,
    "e": "L'attraction est un peu plus forte du côté proche et un peu plus faible du côté éloigné."
   },
   {
    "q": "Combien de renflements se forment ?",
    "o": [
     "Un seul",
     "Deux, opposés",
     "Trois"
    ],
    "r": 1,
    "e": "Deux renflements opposés expliquent les deux marées hautes quotidiennes."
   },
   {
    "q": "Pourquoi le Soleil a-t-il un effet plus faible malgré sa masse ?",
    "o": [
     "Parce qu'il est plus froid",
     "Parce qu'il tourne plus vite",
     "Parce qu'il est beaucoup plus loin"
    ],
    "r": 2,
    "e": "La distance considérable réduit son influence sur les marées."
   },
   {
    "q": "Quand les marées sont-elles les plus amples ?",
    "o": [
     "À la nouvelle et à la pleine lune",
     "Au premier quartier",
     "À chaque solstice"
    ],
    "r": 0,
    "e": "L'alignement de la Lune et du Soleil produit les vives-eaux."
   },
   {
    "q": "Comment appelle-t-on ces marées de forte amplitude ?",
    "o": [
     "Les mortes-eaux",
     "Les vives-eaux",
     "Les eaux hautes"
    ],
    "r": 1,
    "e": "Les marées d'alignement sont appelées vives-eaux."
   },
   {
    "q": "Que se passe-t-il quand Lune et Soleil forment un angle droit ?",
    "o": [
     "L'amplitude augmente",
     "Les marées disparaissent",
     "L'amplitude diminue"
    ],
    "r": 2,
    "e": "Les effets se contrarient partiellement : ce sont les mortes-eaux."
   },
   {
    "q": "Qu'est-ce qui modifie fortement l'amplitude locale ?",
    "o": [
     "La forme des côtes",
     "La couleur de l'eau",
     "La profondeur du ciel"
    ],
    "r": 0,
    "e": "Le texte insiste sur le rôle de la forme des côtes et de la profondeur."
   },
   {
    "q": "Dans quel type de lieu la marée peut-elle atteindre plusieurs mètres ?",
    "o": [
     "Une falaise abrupte",
     "Un port artificiel étroit",
     "Une baie large et peu profonde"
    ],
    "r": 2,
    "e": "Les baies larges et peu profondes amplifient le mouvement de l'eau."
   },
   {
    "q": "Qu'est-ce qu'un mascaret ?",
    "o": [
     "Un courant très froid",
     "Une vague qui remonte le fleuve",
     "Un tourbillon de sable"
    ],
    "r": 1,
    "e": "Le mascaret est une vague qui remonte l'estuaire."
   },
   {
    "q": "Pourquoi peut-on calculer les marées à l'avance ?",
    "o": [
     "Parce que la mer suit un cycle annuel fixe",
     "Parce que les ports imposent un horaire",
     "Parce que les positions de la Lune et du Soleil sont prévisibles"
    ],
    "r": 2,
    "e": "La prévisibilité des positions relatives des deux astres permet le calcul des horaires."
   },
   {
    "q": "Pourquoi y a-t-il deux marées hautes et non une seule ?",
    "o": [
     "Parce que les renflements sont opposés de part et d'autre du globe",
     "Parce que la Lune fait deux tours par jour",
     "Parce que le Soleil relance la marée"
    ],
    "r": 0,
    "e": "La Terre tourne sous deux renflements opposés, ce qui donne deux hautes mers par jour."
   },
   {
    "q": "Pourquoi la marée remonte-t-elle plus vite dans certaines baies ?",
    "o": [
     "Parce que l'eau y est plus chaude",
     "Parce que l'eau s'engouffre dans un espace qui se resserre",
     "Parce que le fond est rocheux"
    ],
    "r": 1,
    "e": "Le volume d'eau se concentre dans un espace peu profond et resserré, ce qui accélère la montée."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La vie des ports de pêche",
     "Les causes et les variations des marées",
     "La formation des vagues"
    ],
    "r": 1,
    "e": "Le texte explique l'origine astronomique des marées et leurs différences locales."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Expliquer un phénomène observable par ses causes physiques",
     "Donner un horaire de baignade",
     "Décrire une côte particulière"
    ],
    "r": 0,
    "e": "L'auteur part de l'observation quotidienne pour remonter aux causes astronomiques."
   },
   {
    "q": "Pourquoi les marées hautes se décalent-elles d'environ cinquante minutes par jour ?",
    "o": [
     "Parce que la Terre ralentit",
     "Parce que le Soleil se déplace",
     "Parce que la Lune avance autour de la Terre dans le même sens"
    ],
    "r": 2,
    "e": "Le décalage vient du mouvement orbital de la Lune, qui allonge l'intervalle entre deux hautes mers."
   },
   {
    "q": "Où l'amplitude peut-elle approcher seize mètres ?",
    "o": [
     "En Méditerranée",
     "Dans la Manche",
     "Dans la baie de Fundy"
    ],
    "r": 2,
    "e": "Le texte cite la baie de Fundy comme exemple d'amplitude exceptionnelle."
   }
  ]
 },
 {
  "id": "b25",
  "theme": "sciences",
  "niveau": 3,
  "titre": "Pourquoi la sirène change de note en passant",
  "corps": "Une ambulance passe devant vous : le son de sa sirène paraît plus aigu à l'approche, plus grave à l'éloignement. Pourtant, la sirène émet toujours la même note. Ce décalage perçu porte le nom d'effet Doppler, du nom du physicien autrichien qui l'a décrit au XIXe siècle.\n\nL'explication tient aux ondes. Une source qui s'approche comprime les crêtes successives devant elle : les ondes arrivent plus rapprochées, donc à une fréquence plus élevée. Quand elle s'éloigne, les crêtes s'espacent et la fréquence baisse. Le même raisonnement vaut pour la lumière, dont la fréquence détermine la couleur.\n\nL'effet dépend de la vitesse relative, pas de la distance. Un objet très lointain qui s'approche vite produit un décalage plus important qu'un objet proche qui bouge lentement. C'est cette propriété qui rend la mesure utile. La vitesse du son dans l'air, environ trois cent quarante mètres par seconde, fixe l'échelle des décalages sonores : pour une sirène de véhicule, l'écart de hauteur reste faible, mais l'oreille le perçoit. Pour la lumière, la vitesse est si grande que seuls des objets très rapides produisent un décalage mesurable. En médecine, la même mesure sert à suivre le flux sanguin dans une artère, sans introduire d'instrument dans le corps.\n\nLes applications sont nombreuses. Les radars routiers comparent la fréquence émise et la fréquence reçue par un véhicule en mouvement. Les échographies mesurent la vitesse du sang dans les vaisseaux. En astronomie, le décalage de la lumière des galaxies renseigne sur leur éloignement : plus une galaxie s'éloigne vite, plus son spectre est décalé vers le rouge.\n\nLa météorologie l'utilise aussi. Un radar Doppler détecte le mouvement des gouttes de pluie dans un nuage ; en comparant les vitesses, les prévisionnistes repèrent les zones où l'air tourne, signe possible d'un orage violent.\n\nL'effet a une limite pratique. Si la source se déplace perpendiculairement à la direction d'observation, le décalage devient presque nul, ce qui peut faire croire à un objet immobile. Les mesures combinent donc plusieurs visées.\n\nEnfin, l'effet Doppler ne dit pas où se trouve l'objet, seulement comment il bouge par rapport à l'observateur. Il complète donc les mesures de distance, il ne les remplace pas.",
  "q": [
   {
    "q": "Que perçoit-on quand une ambulance approche ?",
    "o": [
     "Un son plus aigu",
     "Un son plus grave",
     "Un son plus faible seulement"
    ],
    "r": 0,
    "e": "À l'approche, les ondes arrivent plus rapprochées et la fréquence perçue augmente."
   },
   {
    "q": "Qui a décrit cet effet ?",
    "o": [
     "Un astronome italien",
     "Un physicien autrichien",
     "Un ingénieur américain"
    ],
    "r": 1,
    "e": "Le texte attribue la description de l'effet à un physicien autrichien."
   },
   {
    "q": "À quelle époque cet effet a-t-il été décrit ?",
    "o": [
     "Au XVIIe siècle",
     "Au XXe siècle",
     "Au XIXe siècle"
    ],
    "r": 2,
    "e": "La description date du XIXe siècle."
   },
   {
    "q": "Pourquoi les crêtes se rapprochent-elles à l'approche ?",
    "o": [
     "Parce que le son accélère",
     "Parce que la source avance vers l'observateur",
     "Parce que l'air se comprime"
    ],
    "r": 1,
    "e": "Chaque crête est émise un peu plus près de l'observateur que la précédente."
   },
   {
    "q": "Que se passe-t-il quand la source s'éloigne ?",
    "o": [
     "Les crêtes s'espacent et la fréquence baisse",
     "La fréquence augmente",
     "La vitesse du son diminue"
    ],
    "r": 0,
    "e": "L'éloignement écarte les crêtes, ce qui abaisse la fréquence perçue."
   },
   {
    "q": "De quoi dépend l'effet ?",
    "o": [
     "De la distance seule",
     "De la puissance de la source",
     "De la vitesse relative"
    ],
    "r": 2,
    "e": "Le décalage dépend du mouvement relatif entre source et observateur."
   },
   {
    "q": "Que comparent les radars routiers ?",
    "o": [
     "Deux photos successives",
     "La fréquence émise et la fréquence reçue",
     "La position de deux antennes"
    ],
    "r": 1,
    "e": "L'écart entre les fréquences donne la vitesse du véhicule."
   },
   {
    "q": "Que mesurent les échographies grâce à cet effet ?",
    "o": [
     "La vitesse du sang dans les vaisseaux",
     "La température des organes",
     "La densité des os"
    ],
    "r": 0,
    "e": "Le décalage des ultrasons renseigne sur la vitesse de circulation du sang."
   },
   {
    "q": "Que révèle le décalage de la lumière des galaxies ?",
    "o": [
     "Leur température",
     "Leur composition chimique seule",
     "Leur éloignement"
    ],
    "r": 2,
    "e": "Plus une galaxie s'éloigne vite, plus son spectre est décalé vers le rouge."
   },
   {
    "q": "Vers quelle couleur le spectre se décale-t-il quand une galaxie s'éloigne ?",
    "o": [
     "Vers le rouge",
     "Vers le bleu",
     "Vers le vert"
    ],
    "r": 0,
    "e": "L'éloignement allonge la longueur d'onde perçue, donc vers le rouge."
   },
   {
    "q": "Que détecte un radar Doppler en météorologie ?",
    "o": [
     "La température du sol",
     "La pression atmosphérique",
     "Le mouvement des gouttes de pluie"
    ],
    "r": 2,
    "e": "En comparant les vitesses des gouttes, on repère les zones où l'air tourne."
   },
   {
    "q": "Quand le décalage devient-il presque nul ?",
    "o": [
     "Quand la source est très rapide",
     "Quand le déplacement est perpendiculaire à l'observation",
     "Quand la source est très lointaine"
    ],
    "r": 1,
    "e": "Un mouvement perpendiculaire ne rapproche ni n'éloigne la source de l'observateur."
   },
   {
    "q": "Pourquoi faut-il plusieurs visées ?",
    "o": [
     "Parce qu'une seule direction peut donner un décalage nul",
     "Parce que les ondes sont trop faibles",
     "Parce que la vitesse change sans cesse"
    ],
    "r": 0,
    "e": "Croiser plusieurs directions évite de conclure à tort à l'immobilité d'un objet."
   },
   {
    "q": "Pourquoi la sirène ne change-t-elle pas réellement de note ?",
    "o": [
     "Parce que le son est réfléchi",
     "Parce que la fréquence émise reste constante",
     "Parce que l'air modifie la note"
    ],
    "r": 1,
    "e": "Seule la fréquence perçue change, à cause du mouvement relatif."
   },
   {
    "q": "Pourquoi un objet lointain et rapide peut-il produire un fort décalage ?",
    "o": [
     "Parce que la distance amplifie le son",
     "Parce que l'air est plus froid en altitude",
     "Parce que seule la vitesse relative compte"
    ],
    "r": 2,
    "e": "La distance n'entre pas dans le calcul du décalage : la vitesse relative décide."
   },
   {
    "q": "Que ne donne pas l'effet Doppler ?",
    "o": [
     "La vitesse relative",
     "La position de l'objet",
     "Le sens du mouvement"
    ],
    "r": 1,
    "e": "Il renseigne sur le mouvement par rapport à l'observateur, pas sur la localisation."
   },
   {
    "q": "Que signifie vitesse relative ?",
    "o": [
     "La vitesse maximale atteinte",
     "La vitesse moyenne sur un trajet",
     "La vitesse par rapport à l'observateur"
    ],
    "r": 2,
    "e": "Elle se mesure dans le référentiel de l'observateur, d'où l'importance du mouvement relatif."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Le principe de l'effet Doppler et ses applications",
     "L'histoire de l'acoustique musicale",
     "Le fonctionnement des sirènes"
    ],
    "r": 0,
    "e": "Le texte explique le décalage des fréquences et les usages qu'on en tire."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Décrire un accident de la route",
     "Comparer deux radars",
     "Expliquer une impression courante par un principe physique simple"
    ],
    "r": 2,
    "e": "L'auteur part d'une observation familière pour en donner la cause et les usages."
   }
  ]
 },
 {
  "id": "c1",
  "theme": "sciences",
  "niveau": 3,
  "titre": "L'arc-en-ciel n'est pas un objet",
  "corps": "Personne n'a jamais touché un arc-en-ciel, et pourtant tout le monde l'a vu. Il apparaît quand le Soleil brille derrière l'observateur et que la pluie tombe devant lui. La lumière du Soleil, qui paraît blanche, contient en réalité toutes les couleurs. Rien n'est projeté dans le ciel : ce que l'on voit vient de chaque goutte, au même instant, dans une direction précise.\n\nQuand un rayon entre dans une goutte d'eau, il change de direction : c'est la réfraction. Il traverse la goutte, se réfléchit sur sa paroi opposée, puis ressort en changeant encore de direction. Chaque couleur est déviée un peu différemment, comme si la goutte séparait la lumière blanche en éventail. L'ensemble des gouttes produit alors un arc, et non une tache, parce que seules les gouttes situées à un certain angle renvoient la lumière vers l'œil.\n\nCet angle vaut environ quarante-deux degrés. L'arc se tient donc toujours à la même hauteur apparente, et il descend dans le ciel quand le Soleil monte. Le rouge occupe l'extérieur, le violet l'intérieur. Un second arc, plus pâle et plus large, apparaît parfois au-dessus du premier : la lumière y subit deux réflexions, ce qui inverse l'ordre des couleurs et disperse davantage la lumière. Un arc ne se montre d'ailleurs jamais avec un Soleil très haut : au-delà d'une certaine hauteur, le cône de lumière tombe sous l'horizon et l'arc passe sous nos pieds. C'est pourquoi les arcs sont plus fréquents en fin d'après-midi ou tôt le matin.\n\nLa forme observée est un morceau de cône dont l'œil occupe la pointe. C'est pourquoi un passager d'avion, au-dessus d'une averse, peut voir un cercle complet : rien ne coupe l'arc à l'horizon. La taille des gouttes change l'aspect du phénomène. Les grosses gouttes donnent des couleurs franches et un arc net ; les très petites produisent un arc pâle, presque blanc. La lumière de l'arc est aussi polarisée, ce qui permet de l'atténuer avec un filtre orienté.\n\nRené Descartes expliqua ce trajet en 1637, puis Isaac Newton montra avec un prisme que la lumière blanche se décompose vraiment. L'arc-en-ciel n'est donc pas un objet, mais une illusion d'optique collective : deux personnes placées côte à côte ne voient pas exactement le même.",
  "q": [
   {
    "q": "Quelle condition faut-il pour voir un arc-en-ciel ?",
    "o": [
     "Le Soleil devant l'observateur et la pluie derrière lui",
     "Le Soleil derrière l'observateur et la pluie devant lui",
     "Le Soleil très haut et un ciel entièrement dégagé"
    ],
    "r": 1,
    "e": "Le texte précise que l'arc apparaît quand le Soleil brille derrière l'observateur et que la pluie tombe devant lui."
   },
   {
    "q": "Que fait un rayon lumineux en entrant dans une goutte d'eau ?",
    "o": [
     "Il change de direction par réfraction",
     "Il devient invisible puis réapparaît",
     "Il s'arrête complètement dans la goutte"
    ],
    "r": 0,
    "e": "Le texte nomme réfraction ce changement de direction du rayon qui entre dans la goutte."
   },
   {
    "q": "Combien de réflexions la lumière subit-elle dans la goutte pour l'arc principal ?",
    "o": [
     "Une seule, sur la paroi opposée",
     "Deux réflexions, sur deux parois",
     "Trois réflexions avant de ressortir"
    ],
    "r": 0,
    "e": "Le rayon traverse la goutte, se réfléchit sur sa paroi opposée, puis ressort : une seule réflexion."
   },
   {
    "q": "Pourquoi l'arc-en-ciel a-t-il la forme d'un arc et non d'une tache ?",
    "o": [
     "Les gouttes s'alignent le long d'un cercle visible",
     "Seules les gouttes à un certain angle renvoient la lumière vers l'œil",
     "Toutes les gouttes du ciel brillent en même temps"
    ],
    "r": 1,
    "e": "Le texte attribue la forme en arc au fait que seules les gouttes situées à un certain angle renvoient la lumière vers l'œil."
   },
   {
    "q": "Quelle valeur approche l'angle de l'arc principal ?",
    "o": [
     "Environ vingt degrés seulement",
     "Environ quarante-deux degrés",
     "Environ soixante-quinze degrés"
    ],
    "r": 1,
    "e": "Le texte indique que cet angle vaut environ quarante-deux degrés."
   },
   {
    "q": "Où se trouve la couleur rouge dans l'arc principal ?",
    "o": [
     "À l'intérieur de l'arc",
     "Au centre exact de l'arc",
     "À l'extérieur de l'arc"
    ],
    "r": 2,
    "e": "Le rouge occupe l'extérieur de l'arc et le violet l'intérieur, selon le texte."
   },
   {
    "q": "Que se passe-t-il dans un arc secondaire ?",
    "o": [
     "La lumière traverse la goutte sans se dévier",
     "La lumière ne subit aucune réflexion dans la goutte",
     "La lumière subit deux réflexions et l'ordre des couleurs s'inverse"
    ],
    "r": 2,
    "e": "Le texte explique que la lumière y subit deux réflexions, ce qui inverse l'ordre des couleurs."
   },
   {
    "q": "Qui a expliqué le trajet de la lumière dans la goutte en 1637 ?",
    "o": [
     "Johannes Kepler",
     "Isaac Newton",
     "René Descartes"
    ],
    "r": 2,
    "e": "Le texte attribue à René Descartes l'explication de ce trajet en 1637."
   },
   {
    "q": "Avec quel instrument Newton a-t-il décomposé la lumière blanche ?",
    "o": [
     "Un miroir concave",
     "Un prisme",
     "Une lentille épaisse"
    ],
    "r": 1,
    "e": "Le texte dit que Newton montra avec un prisme que la lumière blanche se décompose vraiment."
   },
   {
    "q": "Que remarque-t-on quand le Soleil monte dans le ciel ?",
    "o": [
     "L'arc devient plus large et plus rouge",
     "L'arc disparaît et laisse place à la brume",
     "L'arc apparaît plus bas dans le ciel"
    ],
    "r": 2,
    "e": "Le texte note qu'on voit l'arc plus bas quand le Soleil est haut."
   },
   {
    "q": "Que contient réellement la lumière blanche du Soleil ?",
    "o": [
     "Seulement du rouge et du bleu",
     "Toutes les couleurs",
     "Uniquement du jaune pâle"
    ],
    "r": 1,
    "e": "La lumière qui paraît blanche contient en réalité toutes les couleurs, d'après le texte."
   },
   {
    "q": "Deux personnes côte à côte voient-elles le même arc ?",
    "o": [
     "Non, chacune voit un arc légèrement différent",
     "Oui, l'arc est un objet fixe dans le ciel",
     "Oui, mais seulement par temps couvert"
    ],
    "r": 0,
    "e": "Le texte précise que deux personnes placées côte à côte ne voient pas exactement le même arc."
   },
   {
    "q": "Comment peut-on atténuer la lumière d'un arc-en-ciel ?",
    "o": [
     "Avec un filtre orienté",
     "Avec un verre fumé très épais",
     "En reculant de quelques mètres"
    ],
    "r": 0,
    "e": "Le texte signale que la lumière de l'arc est polarisée, ce qui permet de l'atténuer avec un filtre orienté."
   },
   {
    "q": "Quel aspect prend l'arc quand les gouttes sont très petites ?",
    "o": [
     "Un arc large et double",
     "Un arc aux couleurs très vives",
     "Un arc pâle, presque blanc"
    ],
    "r": 2,
    "e": "Le texte précise que les très petites gouttes produisent un arc pâle, presque blanc."
   },
   {
    "q": "Pourquoi peut-on dire que l'arc-en-ciel n'existe pas comme objet ?",
    "o": [
     "Il n'apparaît que sur les photographies",
     "Son aspect dépend de la position de chaque observateur",
     "Il ne dure jamais plus de deux secondes"
    ],
    "r": 1,
    "e": "Puisque deux observateurs voisins ne voient pas le même arc, celui-ci dépend de la position de chacun."
   },
   {
    "q": "Si l'on tourne le dos au Soleil pendant une averse, que peut-on espérer ?",
    "o": [
     "Ne rien voir du tout, quoi qu'il arrive",
     "Voir un arc-en-ciel derrière soi",
     "Voir un arc-en-ciel devant soi"
    ],
    "r": 2,
    "e": "L'arc se montre quand le Soleil est derrière l'observateur et la pluie devant lui."
   },
   {
    "q": "Pourquoi l'arc secondaire est-il plus pâle que le premier ?",
    "o": [
     "La lumière y perd de l'intensité à chaque réflexion",
     "Il est plus éloigné de l'observateur",
     "Il se forme avec des gouttes plus grosses"
    ],
    "r": 0,
    "e": "Le second arc naît d'une réflexion supplémentaire, qui affaiblit la lumière ressortant de la goutte."
   },
   {
    "q": "Quel est le sujet principal de ce texte ?",
    "o": [
     "L'origine optique de l'arc-en-ciel",
     "L'histoire des instruments d'optique",
     "La formation des nuages de pluie"
    ],
    "r": 0,
    "e": "Le texte explique pas à pas comment la lumière du Soleil produit un arc dans les gouttes de pluie."
   },
   {
    "q": "Pourquoi l'auteur mentionne-t-il Descartes et Newton ?",
    "o": [
     "Pour montrer que l'explication de l'arc a une histoire",
     "Pour opposer deux théories incompatibles",
     "Pour dater la découverte des gouttes d'eau"
    ],
    "r": 0,
    "e": "Les deux savants sont cités comme étapes de l'explication scientifique du phénomène."
   }
  ]
 },
 {
  "id": "c6",
  "theme": "sciences",
  "niveau": 3,
  "titre": "Compter les secondes avant le tonnerre",
  "corps": "Un orage éclate au loin. On voit l'éclair presque aussitôt, puis on attend le tonnerre. La lumière voyage à trois cent mille kilomètres par seconde, tandis que le son avance dans l'air à environ trois cent quarante-trois mètres par seconde à vingt degrés. Le son est donc près de neuf cent mille fois plus lent. Trois secondes de décalage correspondent à peu près à un kilomètre, car le son parcourt un kilomètre en trois secondes environ.\n\nCette vitesse ne dépend presque pas de la fréquence. Un coup de tonnerre grave et un sifflement aigu lancés ensemble arrivent ensemble : l'air ne sépare pratiquement pas les sons selon leur hauteur. L'oreille, elle, distingue les fréquences, des graves profonds aux aigus perçants, entre vingt hertz et vingt kilohertz environ chez une oreille jeune. Le milieu, en revanche, change tout. Dans l'hélium, gaz bien plus léger que l'air, le son file près de trois fois plus vite. La voix d'une personne qui respire ce gaz paraît aiguë, parce que les résonances de sa bouche se déplacent vers le haut.\n\nCette vitesse a longtemps été difficile à mesurer. Au début du XIXe siècle, des physiciens français organisent une vaste expérience : deux équipes séparées par des kilomètres, un tir de canon comme signal, des chronomètres. En 1822, la mesure donne une vitesse proche de trois cent trente et un mètres par seconde, étonnamment juste pour l'époque. Le principe est simple : un bruit bref et lumineux, un décalage mesuré, une distance divisée par un temps.\n\nLa vitesse dépend du milieu. Dans l'eau, le son file à environ mille cinq cents mètres par seconde ; dans l'acier, il approche cinq mille mètres par seconde. Plus les molécules sont proches et liées, plus la vibration se transmet vite. À l'inverse, l'air reste un milieu peu dense : c'est pourquoi un train aperçu au loin s'entend longtemps après qu'on l'a vu. Dans le vide, aucun son ne se propage : une explosion spatiale serait silencieuse. La température joue aussi : l'air chaud transmet le son un peu plus vite que l'air froid, ce qui courbe les trajectoires et explique qu'un bruit porte loin au-dessus d'un lac gelé, où l'air froid reste collé à la glace.\n\nCes propriétés ont des usages. Le renvoi d'un son sur un obstacle donne un écho, dont la durée de retour indique une distance : c'est le principe du sonar et de l'écholocation des chauves-souris, qui chassent en écoutant leurs propres cris revenir. Reste une conséquence spectaculaire : un avion qui dépasse cette vitesse finie vole plus vite que ses propres ondes sonores. Le bang sonique entendu au sol provient de l'onde de choc accumulée devant l'appareil. Les pilotes expriment cette vitesse en nombre de Mach, un Mach valant la vitesse du son dans l'air du moment.",
  "q": [
   {
    "q": "À quelle vitesse le son se déplace-t-il dans l'air à vingt degrés ?",
    "o": [
     "Environ trois cent quarante-trois mètres par seconde",
     "Environ trois cent quarante-trois mètres par minute",
     "Environ trois mille quatre cents mètres par seconde"
    ],
    "r": 0,
    "e": "Le texte donne environ trois cent quarante-trois mètres par seconde à vingt degrés."
   },
   {
    "q": "Combien de fois le son est-il plus lent que la lumière ?",
    "o": [
     "Environ neuf fois",
     "Environ neuf cent mille fois",
     "Environ neuf cents fois"
    ],
    "r": 1,
    "e": "Le texte compare les deux vitesses et conclut que le son est près de neuf cent mille fois plus lent."
   },
   {
    "q": "À quelle distance correspond un écart de trois secondes entre l'éclair et le tonnerre ?",
    "o": [
     "Environ un kilomètre",
     "Environ trois cents mètres",
     "Environ dix kilomètres"
    ],
    "r": 0,
    "e": "Le texte indique que trois secondes correspondent à peu près à un kilomètre."
   },
   {
    "q": "Quel signal les physiciens français utilisent-ils en 1822 ?",
    "o": [
     "Un feu de Bengale",
     "Un tir de canon",
     "Un coup de cloche"
    ],
    "r": 1,
    "e": "Le texte décrit un tir de canon comme signal pour l'expérience de 1822."
   },
   {
    "q": "Quelle vitesse la mesure de 1822 donne-t-elle ?",
    "o": [
     "Environ trois cent trente et un mètres par seconde",
     "Environ trois cent trente et un kilomètres par seconde",
     "Environ cent trente et un mètres par seconde"
    ],
    "r": 0,
    "e": "Le texte indique une vitesse proche de trois cent trente et un mètres par seconde en 1822."
   },
   {
    "q": "À quelle vitesse le son se déplace-t-il dans l'eau ?",
    "o": [
     "Environ cent cinquante mètres par seconde",
     "Environ mille cinq cents mètres par seconde",
     "Environ cinq mille mètres par seconde"
    ],
    "r": 1,
    "e": "Le texte donne environ mille cinq cents mètres par seconde dans l'eau."
   },
   {
    "q": "À quelle vitesse le son se déplace-t-il dans l'acier ?",
    "o": [
     "Près de cinq mille mètres par seconde",
     "Près de cinq cents mètres par seconde",
     "Près de cinquante mille mètres par seconde"
    ],
    "r": 0,
    "e": "Le texte indique que, dans l'acier, le son approche cinq mille mètres par seconde."
   },
   {
    "q": "Pourquoi le son va-t-il plus vite dans l'acier que dans l'air ?",
    "o": [
     "L'acier est plus froid que l'air ambiant",
     "Le métal absorbe davantage la vibration",
     "Les molécules y sont plus proches et plus liées"
    ],
    "r": 2,
    "e": "Le texte relie la vitesse au fait que les molécules sont plus proches et plus liées."
   },
   {
    "q": "Que se passe-t-il dans le vide ?",
    "o": [
     "Aucun son ne se propage",
     "Le son accélère fortement",
     "Le son reste audible mais immobile"
    ],
    "r": 0,
    "e": "Le texte affirme que, dans le vide, aucun son ne se propage."
   },
   {
    "q": "Comment l'air chaud transmet-il le son par rapport à l'air froid ?",
    "o": [
     "Un peu plus lentement",
     "Exactement à la même vitesse",
     "Un peu plus vite"
    ],
    "r": 2,
    "e": "Le texte précise que l'air chaud transmet le son un peu plus vite que l'air froid."
   },
   {
    "q": "Qu'est-ce qui courbe les trajectoires du son dans l'air ?",
    "o": [
     "La rotation de la Terre sur elle-même",
     "La pression exercée par les nuages",
     "Les différences de température de l'air"
    ],
    "r": 2,
    "e": "Le texte attribue cette courbure aux variations de température, qui modifient l'agitation des molécules."
   },
   {
    "q": "D'où provient le bang sonique entendu au sol ?",
    "o": [
     "Du frottement des ailes contre les nuages",
     "Du bruit des réacteurs poussés à pleine puissance",
     "De l'onde de choc accumulée devant l'appareil"
    ],
    "r": 2,
    "e": "Le texte l'attribue à l'onde de choc accumulée devant l'appareil, et non au bruit du moteur."
   },
   {
    "q": "Comment le son se comporte-t-il dans l'hélium ?",
    "o": [
     "Il va trois fois plus lentement que dans l'air",
     "Il va près de trois fois plus vite que dans l'air",
     "Il cesse de se propager au-delà d'un mètre"
    ],
    "r": 1,
    "e": "Le texte indique que, dans l'hélium, le son file près de trois fois plus vite que dans l'air."
   },
   {
    "q": "Sur quoi repose le principe du sonar ?",
    "o": [
     "Sur le temps de retour d'un écho",
     "Sur la couleur du fond marin",
     "Sur la température de l'eau en surface"
    ],
    "r": 0,
    "e": "Le texte décrit l'écho dont la durée de retour indique une distance, ce qui est le principe du sonar."
   },
   {
    "q": "Pourquoi compte-t-on les secondes pendant un orage ?",
    "o": [
     "Le tonnerre arrive toujours après trente secondes",
     "Cela permet de prévoir la fin de la pluie",
     "L'écart renseigne sur la distance approximative de l'orage"
    ],
    "r": 2,
    "e": "Puisque le son avance d'environ un kilomètre en trois secondes, l'écart donne une distance."
   },
   {
    "q": "Pourquoi la mesure de 1822 était-elle délicate à réaliser ?",
    "o": [
     "Le canon produisait un son beaucoup trop faible",
     "Il fallait synchroniser des observations très éloignées",
     "Les physiciens manquaient de poudre à canon"
    ],
    "r": 1,
    "e": "Deux équipes séparées par des kilomètres devaient noter un même instant, ce qui exigeait coordination et chronomètres."
   },
   {
    "q": "Pourquoi une explosion spatiale serait-elle silencieuse ?",
    "o": [
     "Les ondes sonores y deviennent trop rapides pour l'oreille",
     "L'espace est presque vide, donc sans milieu à faire vibrer",
     "Le vide absorbe les sons comme une éponge"
    ],
    "r": 1,
    "e": "Le son a besoin d'un milieu matériel : sans air ni matière, aucune vibration ne se transmet."
   },
   {
    "q": "Quel est le sujet principal de ce texte ?",
    "o": [
     "La vitesse du son et ce dont elle dépend",
     "Le fonctionnement des moteurs d'avion",
     "L'histoire de la météorologie moderne"
    ],
    "r": 0,
    "e": "Le texte décrit la vitesse du son, sa mesure, puis son variation selon le milieu et la température."
   },
   {
    "q": "Pourquoi l'auteur commence-t-il par un orage ?",
    "o": [
     "Pour prouver que l'orage est vraiment dangereux",
     "Pour introduire une mesure encore inconnue",
     "Pour partir d'une observation familière à chacun"
    ],
    "r": 2,
    "e": "L'écart entre l'éclair et le tonnerre sert de point de départ concret avant l'explication physique."
   }
  ]
 },
 {
  "id": "b13",
  "theme": "société",
  "niveau": 3,
  "titre": "Quand l'école est devenue obligatoire",
  "corps": "Au XIXe siècle, dans une grande partie de l'Europe, savoir lire n'était pas la règle. Les enfants travaillaient aux champs ou à l'usine, et l'école restait payante dans beaucoup d'endroits. Les registres montrent pourtant que l'alphabétisation progresse avant même que l'école devienne obligatoire, dès que les familles en voient l'utilité.\n\nD'autres formules ont précédé les lois. Dans les écoles mutuelles, un maître forme des élèves avancés qui enseignent à leur tour à des groupes ; la méthode permet d'instruire beaucoup d'enfants avec peu d'adultes, mais la qualité dépend du niveau des moniteurs.\n\nLes lois scolaires de la fin du XIXe siècle changent d'échelle. En France, l'école primaire devient gratuite, laïque et obligatoire entre 1881 et 1882. Les communes doivent entretenir une école, et les familles justifier l'assiduité de leurs enfants. L'objectif affiché est politique autant que culturel : former des citoyens capables de lire une loi et de signer un contrat.\n\nLa formation des maîtres devient un enjeu. Des écoles normales sont créées pour préparer les instituteurs, leur donner une méthode de lecture, de calcul et de discipline. Leur nombre reste longtemps insuffisant par rapport aux besoins des villages.\n\nLes effets ne sont pas immédiats. Les campagnes résistent, les maîtres manquent, les enfants aident aux récoltes. Il faut un local, des bancs, des livres, et un inspecteur pour vérifier l'assiduité. Dans les hameaux isolés, l'école ouvre quelques mois par an, souvent fermée en été pour les travaux. Il faut parfois deux générations pour que la scolarité longue devienne ordinaire.\n\nLes résultats se lisent dans les actes de la vie quotidienne : signatures au mariage, registres, correspondance. Cet indicateur, souvent utilisé par les historiens, montre une hausse lente puis nette. La progression n'est pas linéaire ; elle varie fortement entre villes et campagnes, et selon les régions. Un adulte qui signe d'une croix n'a pas forcément passé aucune année à l'école, mais il n'a jamais appris à écrire son nom. Les instituteurs, souvent jeunes et mobiles, logeaient parfois dans l'école même.\n\nCe mouvement n'est pas propre à un pays. La Prusse, la Suède, l'Écosse ou le Japon adoptent des dispositifs voisins à des rythmes différents. Partout revient la même question : qui paie les bâtiments, qui recrute les maîtres, et jusqu'où l'État doit-il contraindre les familles ?",
  "q": [
   {
    "q": "Que montre l'état de l'alphabétisation au début du XIXe siècle ?",
    "o": [
     "Presque tous les adultes savaient lire",
     "Savoir lire n'était pas la règle",
     "L'écriture était interdite"
    ],
    "r": 1,
    "e": "Le texte indique que savoir lire n'était pas la règle dans une grande partie de l'Europe."
   },
   {
    "q": "Pourquoi beaucoup d'enfants ne fréquentaient-ils pas l'école ?",
    "o": [
     "Les écoles étaient fermées en hiver",
     "L'école était réservée aux filles",
     "Ils travaillaient et l'école était souvent payante"
    ],
    "r": 2,
    "e": "Le travail des enfants et le coût de l'école expliquent en partie cette situation."
   },
   {
    "q": "Que révèlent les registres avant les lois scolaires ?",
    "o": [
     "Une progression de l'alphabétisation",
     "Un recul général de la lecture",
     "Une stabilité parfaite"
    ],
    "r": 0,
    "e": "L'alphabétisation progresse avant l'obligation, dès que les familles y trouvent un intérêt."
   },
   {
    "q": "Entre quelles années l'école primaire devient-elle gratuite, laïque et obligatoire en France ?",
    "o": [
     "Entre 1881 et 1882",
     "Entre 1848 et 1850",
     "Entre 1905 et 1910"
    ],
    "r": 0,
    "e": "Le texte situe ces lois entre 1881 et 1882."
   },
   {
    "q": "Quelle obligation incombe aux communes ?",
    "o": [
     "Payer les maîtres sur leurs rentes",
     "Fournir les repas",
     "Entretenir une école"
    ],
    "r": 2,
    "e": "Les communes doivent entretenir une école primaire."
   },
   {
    "q": "Quelle obligation incombe aux familles ?",
    "o": [
     "Acheter les manuels",
     "Justifier l'assiduité des enfants",
     "Payer une redevance annuelle"
    ],
    "r": 1,
    "e": "Les familles doivent justifier l'assiduité de leurs enfants."
   },
   {
    "q": "Quel objectif le texte prête-t-il aux lois scolaires ?",
    "o": [
     "Former des citoyens capables de lire un contrat",
     "Préparer les enfants à l'usine",
     "Éviter l'exode rural"
    ],
    "r": 0,
    "e": "L'objectif affiché est politique autant que culturel : former des citoyens capables de lire une loi et de signer un contrat."
   },
   {
    "q": "Pourquoi les effets des lois ne sont-ils pas immédiats ?",
    "o": [
     "Les bâtiments sont détruits chaque hiver",
     "Les campagnes résistent et les maîtres manquent",
     "Les enfants refusent d'apprendre"
    ],
    "r": 1,
    "e": "Le texte cite la résistance des campagnes, le manque de maîtres et le travail des récoltes."
   },
   {
    "q": "Combien de générations faut-il parfois pour installer la scolarité longue ?",
    "o": [
     "Cinq",
     "Une seule",
     "Deux"
    ],
    "r": 2,
    "e": "Le texte parle parfois de deux générations."
   },
   {
    "q": "Quel indicateur les historiens utilisent-ils souvent ?",
    "o": [
     "Les signatures au mariage",
     "Le nombre de livres imprimés",
     "La taille des écoles"
    ],
    "r": 0,
    "e": "Les signatures au mariage servent d'indicateur de l'alphabétisation."
   },
   {
    "q": "Que montrent ces signatures ?",
    "o": [
     "Une baisse continue",
     "Une hausse lente puis nette",
     "Des variations sans tendance"
    ],
    "r": 1,
    "e": "L'indicateur montre une progression d'abord lente, puis nette."
   },
   {
    "q": "Quels autres pays le texte cite-t-il ?",
    "o": [
     "L'Espagne, le Portugal et le Brésil",
     "Les États-Unis et le Canada",
     "La Prusse, la Suède, l'Écosse et le Japon"
    ],
    "r": 2,
    "e": "Le texte cite la Prusse, la Suède, l'Écosse et le Japon."
   },
   {
    "q": "Quelle question commune le texte met-il en avant ?",
    "o": [
     "Quelle langue enseigner",
     "Qui paie les bâtiments et recrute les maîtres",
     "Quel uniforme imposer"
    ],
    "r": 1,
    "e": "Le financement des bâtiments et le recrutement des maîtres reviennent partout."
   },
   {
    "q": "Pourquoi l'alphabétisation a-t-elle progressé avant les lois ?",
    "o": [
     "Parce que les familles y trouvaient un intérêt pratique",
     "Parce que l'école était déjà gratuite",
     "Parce que les enfants étaient moins nombreux"
    ],
    "r": 0,
    "e": "Les familles voyaient l'utilité de savoir lire, notamment pour les affaires et les contrats."
   },
   {
    "q": "Pourquoi les campagnes résistaient-elles à l'obligation scolaire ?",
    "o": [
     "Parce qu'elles jugeaient les maîtres trop sévères",
     "Parce que l'école était trop éloignée",
     "Parce que les enfants participaient aux travaux agricoles"
    ],
    "r": 2,
    "e": "La main-d'œuvre enfantine était nécessaire aux récoltes, ce qui freinait l'assiduité."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Le passage à une école obligatoire et ses effets progressifs",
     "La formation des maîtres au XIXe siècle",
     "L'architecture des écoles rurales"
    ],
    "r": 0,
    "e": "Le texte suit l'alphabétisation avant, pendant et après les lois scolaires."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Défendre un parti politique",
     "Comparer les programmes d'histoire",
     "Montrer qu'une réforme scolaire produit ses effets lentement"
    ],
    "r": 2,
    "e": "L'auteur insiste sur le décalage entre le vote d'une loi et ses résultats concrets."
   },
   {
    "q": "Comment fonctionnait une école mutuelle ?",
    "o": [
     "Deux maîtres se partageaient la classe",
     "Des élèves avancés enseignaient à des groupes",
     "Les parents faisaient la classe à tour de rôle"
    ],
    "r": 1,
    "e": "Le maître formait des moniteurs qui transmettaient ensuite le savoir aux autres élèves."
   },
   {
    "q": "À quoi servaient les écoles normales ?",
    "o": [
     "À accueillir les orphelins",
     "À former les instituteurs",
     "À enseigner l'agriculture"
    ],
    "r": 1,
    "e": "Ces établissements préparaient les futurs maîtres à leur métier."
   }
  ]
 },
 {
  "id": "b18",
  "theme": "société",
  "niveau": 3,
  "titre": "Le café, un lieu public qui se paie d'une tasse",
  "corps": "Un café n'est pas seulement un lieu où l'on boit. Dès le XVIIe siècle, ces établissements apparaissent dans plusieurs villes européennes, et leur succès inquiète parfois les autorités : on y parle, on y lit des nouvelles, on y croise des gens que l'on ne fréquenterait pas chez soi.\n\nLe prix d'une tasse sert en quelque sorte de droit d'entrée. Pour une somme modique, un client obtient une place, de la lumière et parfois des journaux. Une grande vitrine éclairait la salle et permettait de lire sans lampe. Certains établissements affichaient un règlement, avec une consommation minimale par place assise. Les cafés deviennent ainsi des bureaux improvisés, des salles de discussion et des lieux de rendez-vous d'affaires.\n\nCertains établissements ont laissé une trace inattendue. À Londres, un café fréquenté par des armateurs et des assureurs est devenu le point de rencontre où l'on partageait les risques des navires ; cette pratique est à l'origine d'un marché de l'assurance encore actif aujourd'hui. Ailleurs, les autorités envoyaient des observateurs, car on y commentait les nouvelles et la politique.\n\nLe mobilier le montre. Les petites tables rapprochées favorisent la conversation ; le comptoir permet de rester debout quelques minutes ; la terrasse offre une place dans la rue sans y être tout à fait. Chaque disposition induit une manière de rester plus ou moins longtemps.\n\nL'acoustique compte aussi. Un plafond haut, des vitres et du verre renvoient le bruit ; des rideaux, du bois et des banquettes l'absorbent. Un café bondé peut devenir assourdissant, ce qui raccourcit la conversation et la durée de présence.\n\nAujourd'hui, le télétravail a changé les usages. Certains établissements voient arriver des clients qui travaillent plusieurs heures avec un seul café. D'autres limitent les prises électriques ou installent des tables hautes pour décourager les longues stations.\n\nLa vente à emporter a modifié l'équilibre. Une part croissante des boissons part dans un gobelet, sans place occupée. L'établissement devient alors un comptoir de passage, et le lieu perd une partie de sa fonction de rencontre. Le débat porte sur un équilibre : un lieu public peut-il accueillir à la fois ceux qui consomment vite et ceux qui s'installent ?",
  "q": [
   {
    "q": "Depuis quand ces établissements existent-ils en Europe, selon le texte ?",
    "o": [
     "Depuis le XVIIe siècle",
     "Depuis le Moyen Âge",
     "Depuis le XXe siècle"
    ],
    "r": 0,
    "e": "Le texte situe leur apparition au XVIIe siècle dans plusieurs villes européennes."
   },
   {
    "q": "Pourquoi leur succès inquiétait-il parfois les autorités ?",
    "o": [
     "Parce qu'on y vendait de l'alcool",
     "Parce qu'ils fermaient trop tard",
     "Parce qu'on y parlait et circulait des nouvelles"
    ],
    "r": 2,
    "e": "On y discutait, on y lisait des nouvelles et on y croisait des inconnus."
   },
   {
    "q": "Que représente le prix d'une tasse ?",
    "o": [
     "Une taxe municipale",
     "Une sorte de droit d'entrée",
     "Le loyer d'une table"
    ],
    "r": 1,
    "e": "Le prix modique de la consommation tient lieu de droit d'entrée."
   },
   {
    "q": "Qu'obtient le client pour cette somme ?",
    "o": [
     "Une place, de la lumière et parfois des journaux",
     "Un repas complet",
     "Une chambre pour la nuit"
    ],
    "r": 0,
    "e": "Le texte énumère une place, de la lumière et parfois des journaux."
   },
   {
    "q": "Quel usage professionnel le texte mentionne-t-il ?",
    "o": [
     "Salle de réunion officielle",
     "Atelier de fabrication",
     "Bureau improvisé et rendez-vous d'affaires"
    ],
    "r": 2,
    "e": "Les cafés servaient de bureaux improvisés et de lieux de rendez-vous d'affaires."
   },
   {
    "q": "Que favorisent les petites tables rapprochées ?",
    "o": [
     "Le silence",
     "La conversation",
     "Les repas rapides"
    ],
    "r": 1,
    "e": "La proximité des tables encourage la conversation."
   },
   {
    "q": "Que permet le comptoir ?",
    "o": [
     "De rester debout quelques minutes",
     "De travailler des heures",
     "De payer moins cher"
    ],
    "r": 0,
    "e": "Le comptoir offre une halte brève, debout."
   },
   {
    "q": "Qu'offre la terrasse ?",
    "o": [
     "Un accès direct au trottoir",
     "Un espace fermé et chauffé",
     "Une place dans la rue sans y être tout à fait"
    ],
    "r": 2,
    "e": "La terrasse donne une place intermédiaire, entre l'intérieur et la rue."
   },
   {
    "q": "Qu'est-ce qui a changé récemment les usages ?",
    "o": [
     "La hausse du prix du sucre",
     "Le télétravail",
     "La fermeture des bureaux"
    ],
    "r": 1,
    "e": "Le texte attribue ces changements au développement du télétravail."
   },
   {
    "q": "Que font certains clients, selon le texte ?",
    "o": [
     "Ils travaillent plusieurs heures avec un seul café",
     "Ils commandent un plat par heure",
     "Ils partagent une table"
    ],
    "r": 0,
    "e": "Certains clients s'installent plusieurs heures pour une seule consommation."
   },
   {
    "q": "Comment des établissements réagissent-ils ?",
    "o": [
     "Ils suppriment les chaises",
     "Ils limitent les prises ou installent des tables hautes",
     "Ils ferment à midi"
    ],
    "r": 1,
    "e": "Le texte cite la limitation des prises électriques et les tables hautes."
   },
   {
    "q": "Pourquoi les tables hautes découragent-elles les longues stations ?",
    "o": [
     "Parce qu'elles sont réservées aux enfants",
     "Parce qu'elles sont plus chères",
     "Parce qu'elles sont peu confortables pour travailler"
    ],
    "r": 2,
    "e": "S'asseoir longuement y est moins agréable, ce qui réduit la durée de présence."
   },
   {
    "q": "Sur quel équilibre porte le débat final ?",
    "o": [
     "Entre thé et café",
     "Entre intérieur et terrasse",
     "Entre clients pressés et clients installés"
    ],
    "r": 2,
    "e": "Le texte oppose ceux qui consomment vite et ceux qui s'installent longtemps."
   },
   {
    "q": "Pourquoi le mobilier compte-t-il dans un café ?",
    "o": [
     "Parce qu'il impose une durée de présence",
     "Parce qu'il coûte cher à l'achat",
     "Parce qu'il doit être conforme à la loi"
    ],
    "r": 0,
    "e": "Chaque disposition du mobilier induit une manière de rester plus ou moins longtemps."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La fabrication du café",
     "Le café comme espace public aux usages réglés",
     "L'histoire des boissons chaudes"
    ],
    "r": 1,
    "e": "Le texte décrit un lieu où le prix d'une boisson règle l'accès et les usages."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Recommander un établissement",
     "Décrire une recette de torréfaction",
     "Montrer qu'un lieu banal obéit à des règles sociales fines"
    ],
    "r": 2,
    "e": "L'auteur analyse les usages et les tensions d'un espace public ordinaire."
   },
   {
    "q": "Quelle activité est née dans un café londonien ?",
    "o": [
     "Un marché de l'assurance maritime",
     "Une bourse aux grains",
     "Un service de messagerie"
    ],
    "r": 0,
    "e": "Armateurs et assureurs s'y retrouvaient pour partager les risques des navires."
   },
   {
    "q": "Quel effet l'acoustique a-t-elle sur la durée de présence ?",
    "o": [
     "Un lieu bruyant retient plus longtemps",
     "Un lieu trop bruyant raccourcit la conversation",
     "L'acoustique n'a aucun effet"
    ],
    "r": 1,
    "e": "Le bruit rend la conversation difficile et incite les clients à partir plus vite."
   }
  ]
 },
 {
  "id": "b23",
  "theme": "société",
  "niveau": 3,
  "titre": "Le bac à compost du coin de la rue",
  "corps": "Dans une rue, un bac de compostage installé sur un trottoir peut sembler anodin. Il déplace pourtant plusieurs habitudes : trier ses épluchures, les descendre, refermer le couvercle, accepter de partager un équipement avec des voisins.\n\nLe principe est simple. Les déchets de cuisine, épluchures, marc de café, restes de légumes, se décomposent grâce à des micro-organismes et à des animaux comme les vers. Le résultat, au bout de plusieurs mois, ressemble à une terre sombre, le compost, qui sert à nourrir des plantations.\n\nLa réussite dépend d'un équilibre. Il faut mélanger des déchets humides, riches en azote, avec des matières sèches, feuilles mortes, broyat de branches, carton non imprimé. Sans air, le tas fermente et sent mauvais ; trop sec, il ne se transforme plus. Les bénévoles apprennent donc à retourner le contenu et à ajouter de la matière structurante, c'est-à-dire une matière sèche qui laisse passer l'air.\n\nLes problèmes sont concrets. Un bac mal fermé attire les rongeurs. Un usager qui jette des sacs plastiques, même compostables, perturbe le processus. Des conflits de voisinage naissent d'odeurs ou de dépôts sauvages à côté du bac.\n\nLes villes ont plusieurs options. Elles peuvent installer des bacs de rue, soutenir des composteurs de pied d'immeuble, ou organiser une collecte séparée des déchets organiques. Chaque solution a un coût et suppose un suivi. Le compostage individuel, en jardin, ne pose pas les mêmes questions : chacun gère son tas et garde le produit. En collectif, il faut décider qui récupère le compost mûr, où le stocker et comment le répartir entre les usagers. Certains bacs de rue fonctionnent avec un guide affiché, d'autres avec des permanences tenues par des habitants. Un bac trop petit se remplit en quelques jours ; un bac trop grand refroidit et perd son activité. La chaleur produite au centre du tas accélère la décomposition, mais un volume insuffisant ne la conserve pas.\n\nCe qui distingue un projet durable, c'est souvent l'accompagnement. Un référent formé, habitant du quartier, des réunions brèves, un affichage clair sur ce qu'on peut jeter : ces détails pèsent plus que la bonne volonté initiale. Là où l'animation s'arrête, le bac se remplit d'erreurs et finit abandonné.",
  "q": [
   {
    "q": "Que faut-il faire de ses épluchures quand on utilise un bac de rue ?",
    "o": [
     "Les trier, les descendre et refermer le couvercle",
     "Les mettre dans un sac fermé",
     "Les déposer le soir uniquement"
    ],
    "r": 0,
    "e": "Le bac suppose un tri à la maison, une descente régulière et un couvercle refermé."
   },
   {
    "q": "Quel produit obtient-on au bout de plusieurs mois ?",
    "o": [
     "Un liquide fertilisant",
     "Une terre sombre, le compost",
     "Une poudre minérale"
    ],
    "r": 1,
    "e": "La décomposition donne une matière sombre utilisée pour les plantations."
   },
   {
    "q": "Combien de temps faut-il pour obtenir du compost ?",
    "o": [
     "Quelques jours",
     "Plusieurs années",
     "Plusieurs mois"
    ],
    "r": 2,
    "e": "Le texte parle de plusieurs mois de transformation."
   },
   {
    "q": "Que faut-il mélanger aux déchets humides ?",
    "o": [
     "De l'eau de pluie",
     "De la terre argileuse",
     "Des matières sèches"
    ],
    "r": 2,
    "e": "Feuilles mortes, broyat et carton non imprimé apportent la matière sèche nécessaire."
   },
   {
    "q": "Que se passe-t-il si le tas manque d'air ?",
    "o": [
     "Il fermente et sent mauvais",
     "Il sèche trop vite",
     "Il attire les oiseaux"
    ],
    "r": 0,
    "e": "L'absence d'air déclenche une fermentation malodorante."
   },
   {
    "q": "Que se passe-t-il si le tas est trop sec ?",
    "o": [
     "Il devient toxique",
     "Il ne se transforme plus",
     "Il gèle en hiver"
    ],
    "r": 1,
    "e": "Sans humidité suffisante, les micro-organismes cessent leur travail."
   },
   {
    "q": "Quel problème pose un bac mal fermé ?",
    "o": [
     "Il laisse passer la lumière",
     "Il attire les rongeurs",
     "Il perd son couvercle"
    ],
    "r": 1,
    "e": "Les déchets accessibles attirent rats et souris, ce qui crée des tensions."
   },
   {
    "q": "Qu'est-ce qui perturbe le processus de compostage ?",
    "o": [
     "Les épluchures de fruits",
     "Le marc de café",
     "Les sacs plastiques, même compostables"
    ],
    "r": 2,
    "e": "Les sacs ne se décomposent pas au rythme des déchets de cuisine."
   },
   {
    "q": "Quelles solutions les villes peuvent-elles choisir ?",
    "o": [
     "Bacs de rue, composteurs d'immeuble ou collecte séparée",
     "Incinération et enfouissement",
     "Interdiction du tri à domicile"
    ],
    "r": 0,
    "e": "Le texte cite trois dispositifs, chacun avec un coût et un suivi."
   },
   {
    "q": "Qu'est-ce qui distingue un projet durable ?",
    "o": [
     "L'accompagnement des usagers",
     "La taille du bac",
     "La fréquence des collectes"
    ],
    "r": 0,
    "e": "Un référent formé, des réunions et un affichage clair pèsent plus que la bonne volonté."
   },
   {
    "q": "Qui est le référent ?",
    "o": [
     "Un agent municipal à plein temps",
     "Un habitant formé du quartier",
     "Un agriculteur voisin"
    ],
    "r": 1,
    "e": "Le référent est un usager formé qui suit le fonctionnement du bac."
   },
   {
    "q": "Pourquoi retourne-t-on le contenu du bac ?",
    "o": [
     "Pour mélanger les couleurs",
     "Pour accélérer le séchage",
     "Pour apporter de l'air au tas"
    ],
    "r": 2,
    "e": "Le retournement aère la matière et évite la fermentation sans oxygène."
   },
   {
    "q": "À quoi sert le broyat de branches ?",
    "o": [
     "À structurer le tas et à laisser passer l'air",
     "À nourrir les vers directement",
     "À parfumer le compost"
    ],
    "r": 0,
    "e": "Ce matériau grossier crée des vides qui maintiennent l'aération."
   },
   {
    "q": "D'où naissent les conflits de voisinage ?",
    "o": [
     "Du bruit des vers",
     "Des odeurs et des dépôts sauvages",
     "De la couleur du bac"
    ],
    "r": 1,
    "e": "Les nuisances olfactives et les dépôts à côté du bac provoquent des tensions."
   },
   {
    "q": "Pourquoi l'animation est-elle décisive ?",
    "o": [
     "Parce qu'elle est obligatoire par la loi",
     "Parce qu'elle finance le matériel",
     "Parce que sans elle les erreurs de tri s'accumulent"
    ],
    "r": 2,
    "e": "Quand le suivi cesse, les erreurs se multiplient et le bac est abandonné."
   },
   {
    "q": "Que signifie matière structurante ?",
    "o": [
     "Un produit chimique activateur",
     "Une matière sèche qui laisse passer l'air",
     "Un sac biodégradable"
    ],
    "r": 1,
    "e": "Elle donne de la structure au tas et permet la circulation de l'air."
   },
   {
    "q": "À quoi sert le compost produit ?",
    "o": [
     "À nourrir des plantations",
     "À chauffer les immeubles",
     "À fabriquer du plastique"
    ],
    "r": 0,
    "e": "Le compost enrichit la terre des jardins et des espaces verts."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "L'histoire du traitement des déchets",
     "La biologie des vers de terre",
     "Le fonctionnement concret et les difficultés du compostage de quartier"
    ],
    "r": 2,
    "e": "Le texte décrit les gestes, l'équilibre du tas et les conditions de réussite."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Vendre un modèle de composteur",
     "Montrer qu'un dispositif simple dépend surtout de son suivi humain",
     "Dénoncer les collectivités locales"
    ],
    "r": 1,
    "e": "L'auteur insiste sur l'accompagnement plutôt que sur l'équipement."
   }
  ]
 },
 {
  "id": "c10",
  "theme": "société",
  "niveau": 3,
  "titre": "Une heure déplacée, deux fois par an",
  "corps": "Deux fois par an, des millions d'Européens déplacent les aiguilles de leurs horloges. Le dernier dimanche de mars, on avance d'une heure ; le dernier dimanche d'octobre, on recule. Ce geste, devenu banal, vise à faire coïncider les horaires de travail et d'école avec les heures d'ensoleillement, afin de réduire la consommation d'éclairage.\n\nL'idée n'est pas neuve. On la trouve esquissée dès 1784 sous la plume de Benjamin Franklin, puis défendue en 1907 par un constructeur anglais, William Willett. Le Royaume-Uni applique le changement d'heure en 1916, pendant la Première Guerre mondiale, pour économiser du charbon. La France l'adopte en 1976, après le choc pétrolier, et le dispositif s'harmonise ensuite à l'échelle européenne.\n\nL'exemple est venu d'ailleurs. L'Allemagne applique la mesure dès le 30 avril 1916, quelques semaines avant le Royaume-Uni, pour économiser du charbon pendant la guerre. La plupart des pays industrialisés l'imitent, l'abandonnent parfois, puis la reprennent au gré des crises. Le dispositif français de 1976 s'inscrit dans cette série : il répond à un souci d'économie, dans un pays encore très dépendant des combustibles importés pour son électricité.\n\nLa mécanique, elle, est triviale : on déplace les aiguilles, pas le Soleil. En France, l'heure légale passe de UTC+1 à UTC+2 pendant l'été. Toute la difficulté est ailleurs, dans les systèmes qui doivent suivre : horaires de trains, vols, serveurs informatiques, agendas partagés entre plusieurs pays. Un décalage mal répercuté peut faire manquer un rendez-vous ou un départ, et les informaticiens traitent ces changements comme des événements à part entière. Les serveurs, eux, ne connaissent que des règles écrites à l'avance : un pays qui modifie sa date oblige à mettre à jour des tables partagées dans le monde entier.\n\nLes bilans sont plus contrastés que la promesse initiale. Les économies d'électricité existent, mais elles ont diminué avec la généralisation des lampes à faible consommation : l'éclairage ne pèse plus qu'une part modeste de la facture. Le décalage impose en revanche une adaptation de l'horloge biologique, surtout au printemps, et plusieurs travaux signalent un sommeil plus court les jours suivants.\n\nSur le terrain, les effets varient avec la latitude. À Paris, le jour dure environ seize heures au solstice d'été et huit heures en décembre : le décalage ne pèse donc pas de la même façon selon la saison. Les régions les plus au nord, où l'écart entre été et hiver est extrême, vivent la mesure très différemment des pays méditerranéens, plus proches de l'équilibre. En juin, le soleil se couche après 21 heures à Paris ; en décembre, avant 17 heures.\n\nLe système repose sur une convention collective. Sans coordination, les transports, les échanges et les rendez-vous deviendraient ingérables. C'est pourquoi une directive européenne fixe une date commune depuis le début des années 2000. Le débat sur sa suppression reste ouvert : certains pays du Nord y voient peu d'intérêt, d'autres redoutent une mosaïque d'horaires entre voisins.",
  "q": [
   {
    "q": "Quand avance-t-on les horloges d'une heure ?",
    "o": [
     "Le premier lundi de janvier",
     "Le dernier dimanche d'octobre",
     "Le dernier dimanche de mars"
    ],
    "r": 2,
    "e": "Le passage à l'heure d'été a lieu le dernier dimanche de mars."
   },
   {
    "q": "Quand recule-t-on les horloges d'une heure ?",
    "o": [
     "Le dernier dimanche d'octobre",
     "Le 21 juin",
     "Le dernier dimanche de mars"
    ],
    "r": 0,
    "e": "Le retour à l'heure d'hiver se fait le dernier dimanche d'octobre."
   },
   {
    "q": "Quel est le but affiché du changement d'heure ?",
    "o": [
     "Réduire la consommation d'éclairage",
     "Allonger les journées de travail",
     "Aligner les fuseaux sur l'Asie"
    ],
    "r": 0,
    "e": "Il vise à faire coïncider horaires et ensoleillement pour économiser l'éclairage."
   },
   {
    "q": "Qui évoque l'idée dès 1784 ?",
    "o": [
     "Thomas Edison",
     "William Willett",
     "Benjamin Franklin"
    ],
    "r": 2,
    "e": "L'idée est esquissée en 1784 sous la plume de Benjamin Franklin."
   },
   {
    "q": "Qui défend l'idée en 1907 ?",
    "o": [
     "Benjamin Franklin",
     "Un astronome allemand",
     "William Willett"
    ],
    "r": 2,
    "e": "Un constructeur anglais, William Willett, la défend en 1907."
   },
   {
    "q": "Pourquoi le Royaume-Uni applique-t-il le changement d'heure en 1916 ?",
    "o": [
     "Pour s'aligner sur la France",
     "Pour économiser du charbon",
     "Pour faciliter les vendanges"
    ],
    "r": 1,
    "e": "En 1916, pendant la guerre, le Royaume-Uni cherche à économiser du charbon."
   },
   {
    "q": "Dans quel contexte la France adopte-t-elle le dispositif en 1976 ?",
    "o": [
     "Après la création de l'euro",
     "Après le choc pétrolier",
     "Après la fin de la guerre froide"
    ],
    "r": 1,
    "e": "La France adopte le changement d'heure en 1976, au lendemain du choc pétrolier."
   },
   {
    "q": "Pourquoi les économies d'électricité ont-elles diminué ?",
    "o": [
     "Parce que les jours sont plus longs",
     "À cause des lampes à faible consommation",
     "Parce que les horaires de travail ont changé"
    ],
    "r": 1,
    "e": "La généralisation des lampes économes a réduit le poids de l'éclairage dans la facture."
   },
   {
    "q": "Quand l'horloge biologique est-elle le plus malmenée ?",
    "o": [
     "En automne",
     "En plein été",
     "Au printemps"
    ],
    "r": 2,
    "e": "Le texte note une adaptation plus difficile au printemps, avec un sommeil plus court."
   },
   {
    "q": "Depuis quand une directive européenne fixe-t-elle une date commune ?",
    "o": [
     "Depuis 1916",
     "Depuis le début des années 2000",
     "Depuis 1976"
    ],
    "r": 1,
    "e": "Une directive européenne impose une date commune depuis le début des années 2000."
   },
   {
    "q": "Que risquerait-on sans coordination entre pays ?",
    "o": [
     "Les horloges cesseraient de fonctionner",
     "Le soleil se lèverait plus tard",
     "Les transports et les rendez-vous deviendraient ingérables"
    ],
    "r": 2,
    "e": "Le texte souligne que sans coordination, transports, échanges et rendez-vous seraient ingérables."
   },
   {
    "q": "Quel pays applique le changement d'heure dès le 30 avril 1916 ?",
    "o": [
     "La France",
     "L'Allemagne",
     "Les États-Unis"
    ],
    "r": 1,
    "e": "L'Allemagne applique la mesure dès le 30 avril 1916, quelques semaines avant le Royaume-Uni."
   },
   {
    "q": "Combien d'heures de jour Paris compte-t-il au solstice d'été ?",
    "o": [
     "Environ douze heures",
     "Environ seize heures",
     "Environ vingt heures"
    ],
    "r": 1,
    "e": "À Paris, le jour dure environ seize heures au solstice d'été, contre huit en décembre."
   },
   {
    "q": "Pourquoi l'argument des économies d'énergie s'est-il affaibli ?",
    "o": [
     "L'éclairage ne pèse plus qu'une part modeste",
     "Les gens éteignent moins souvent la lumière",
     "Les lampes consomment désormais plus"
    ],
    "r": 0,
    "e": "Les lampes économes ont tellement réduit la consommation d'éclairage que le gain est devenu modeste."
   },
   {
    "q": "Que laisse entendre le passage sur certains pays du Nord ?",
    "o": [
     "Qu'ils trouvent le bénéfice limité pour eux",
     "Qu'ils refusent toute coordination européenne",
     "Qu'ils ont déjà supprimé le changement d'heure"
    ],
    "r": 0,
    "e": "Le texte dit simplement qu'ils y voient peu d'intérêt, sans parler de retrait effectif."
   },
   {
    "q": "Pourquoi le changement d'heure est-il une convention collective ?",
    "o": [
     "Parce qu'il n'a de sens que si tous l'appliquent ensemble",
     "Parce qu'il a été voté par référendum",
     "Parce qu'il dépend de la position du Soleil"
    ],
    "r": 0,
    "e": "Sans application commune, les transports et les rendez-vous deviendraient impossibles à organiser."
   },
   {
    "q": "Quel est le sujet du texte ?",
    "o": [
     "L'histoire et les effets du changement d'heure en Europe",
     "La production d'électricité en France",
     "Les fuseaux horaires du monde entier"
    ],
    "r": 0,
    "e": "Le texte raconte l'origine du dispositif et discute de ses effets et de son avenir."
   },
   {
    "q": "Quelle position l'auteur adopte-t-il ?",
    "o": [
     "Il réclame la fin immédiate du dispositif",
     "Il défend le dispositif contre ses critiques",
     "Il expose les arguments sans trancher"
    ],
    "r": 2,
    "e": "Il présente les avantages, les limites et le débat ouvert, sans conclure lui-même."
   }
  ]
 },
 {
  "id": "c5",
  "theme": "société",
  "niveau": 3,
  "titre": "Quand le train a mis les villes à la même heure",
  "corps": "Avant les chemins de fer, l'heure était locale. Chaque ville réglait ses horloges sur le passage du Soleil au plus haut : midi à Paris ne correspondait pas à midi à Lyon. Un voyageur pouvait donc avancer ou reculer sa montre en changeant de ville. Les clochers annonçaient les offices, les marchés s'ouvraient à l'heure du beffroi. Personne ne s'en plaignait, car on voyageait lentement et les distances rendaient ces écarts sans conséquence pratique.\n\nLe train change l'échelle. Une locomotive parcourt des dizaines de kilomètres par heure, et les horaires doivent être publiés à la minute. Deux gares séparées de quelques centaines de kilomètres affichent alors des heures différentes, ce qui provoque des retards et des correspondances manquées. Les compagnies britanniques imposent donc, dans les années 1840, une heure unique pour leurs réseaux, calée sur Greenwich : on l'appelle le temps du chemin de fer.\n\nLe mouvement gagne l'Amérique. En 1883, les compagnies ferroviaires des États-Unis découpent le pays en fuseaux et adoptent une heure commune, tant la confusion des heures locales gênait le trafic. L'année suivante, une conférence réunie à Washington choisit le méridien de Greenwich comme référence et découpe le globe en vingt-quatre fuseaux d'une heure.\n\nL'heure commune change la vie quotidienne : les gares affichent une seule heure, les usines calent leurs équipes sur elle, et la montre individuelle se répand. Elle permet aussi de comparer des durées de trajet d'une ville à l'autre, ce qu'aucune horloge locale ne permettait. Les États suivent avec retard. La France adopte l'heure de Greenwich comme heure légale en 1911, après avoir longtemps conservé l'heure de Paris. D'autres réformes viennent ensuite : plusieurs pays introduisent une heure d'été pour profiter de la lumière du jour, la France dès 1916.\n\nPour les marins et les aviateurs, le temps de référence devient peu à peu le temps universel coordonné, plus stable que l'heure solaire de Greenwich, car il repose sur des horloges atomiques. Ces réformes ne changent pas la course du Soleil : elles changent la manière de l'écrire. Une heure commune est une convention, pas une mesure physique, et elle montre qu'un réseau technique peut imposer une norme à des territoires entiers, souvent sans débat public.",
  "q": [
   {
    "q": "Sur quoi chaque ville réglait-elle ses horloges avant les chemins de fer ?",
    "o": [
     "Le départ du premier train du matin",
     "La cloche de la cathédrale voisine",
     "Le passage du Soleil au plus haut"
    ],
    "r": 2,
    "e": "Le texte indique que chaque ville réglait ses horloges sur le passage du Soleil au plus haut."
   },
   {
    "q": "Pourquoi les écarts d'heure entre villes étaient-ils sans conséquence ?",
    "o": [
     "Parce qu'on voyageait lentement sur de longues distances",
     "Parce que presque personne ne possédait d'horloge",
     "Parce que les horloges étaient reliées par câble"
    ],
    "r": 0,
    "e": "Le texte explique que la lenteur des voyages rendait ces écarts sans conséquence pratique."
   },
   {
    "q": "Qu'ont imposé les compagnies britanniques dans les années 1840 ?",
    "o": [
     "La suppression de tous les horaires publiés",
     "Une heure unique pour l'ensemble de leurs réseaux",
     "Une heure différente pour chaque gare desservie"
    ],
    "r": 1,
    "e": "Les compagnies britanniques imposent, dans les années 1840, une heure unique pour leurs réseaux."
   },
   {
    "q": "Sur quelle ville cette heure unique était-elle calée ?",
    "o": [
     "Sur Greenwich",
     "Sur Paris",
     "Sur Liverpool"
    ],
    "r": 0,
    "e": "Le texte précise que cette heure était calée sur Greenwich."
   },
   {
    "q": "Comment appelait-on cette heure des réseaux britanniques ?",
    "o": [
     "Le temps du chemin de fer",
     "Le temps universel",
     "L'heure des marins"
    ],
    "r": 0,
    "e": "Le texte donne ce nom à l'heure unique calée sur Greenwich : le temps du chemin de fer."
   },
   {
    "q": "En quelle année la conférence de Washington a-t-elle lieu ?",
    "o": [
     "1784",
     "1904",
     "1884"
    ],
    "r": 2,
    "e": "Le texte date de 1884 la conférence réunie à Washington."
   },
   {
    "q": "Quel méridien cette conférence choisit-elle comme référence ?",
    "o": [
     "Le méridien de Greenwich",
     "Le méridien de Washington",
     "Le méridien de Paris"
    ],
    "r": 0,
    "e": "La conférence de 1884 choisit le méridien de Greenwich comme référence."
   },
   {
    "q": "Selon quelle durée le globe est-il découpé en fuseaux ?",
    "o": [
     "Des fuseaux d'une demi-heure",
     "Des fuseaux d'une heure",
     "Des fuseaux d'une demi-journée"
    ],
    "r": 1,
    "e": "Le texte parle d'un découpage du globe en fuseaux d'une heure."
   },
   {
    "q": "En quelle année la France adopte-t-elle l'heure de Greenwich comme heure légale ?",
    "o": [
     "1945",
     "1884",
     "1911"
    ],
    "r": 2,
    "e": "Le texte situe en 1911 l'adoption de l'heure de Greenwich comme heure légale en France."
   },
   {
    "q": "Quelle heure la France conservait-elle auparavant ?",
    "o": [
     "L'heure de Rome",
     "L'heure de Londres",
     "L'heure de Paris"
    ],
    "r": 2,
    "e": "Le texte rappelle que la France a longtemps conservé l'heure de Paris."
   },
   {
    "q": "Qu'est-ce qui a rendu nécessaire une heure commune ?",
    "o": [
     "La vitesse des trains et la publication d'horaires",
     "La généralisation du télégraphe sans fil",
     "L'invention de la lampe électrique"
    ],
    "r": 0,
    "e": "Le texte relie le besoin d'une heure commune à la vitesse des locomotives et aux horaires à la minute."
   },
   {
    "q": "Que provoquaient des heures locales différentes d'une gare à l'autre ?",
    "o": [
     "Une baisse du prix des billets",
     "Des retards et des correspondances manquées",
     "La fermeture de certaines lignes"
    ],
    "r": 1,
    "e": "Le texte cite les retards et les correspondances manquées comme conséquences de ces écarts."
   },
   {
    "q": "En quelle année les compagnies américaines adoptent-elles leurs fuseaux ?",
    "o": [
     "1873",
     "1883",
     "1911"
    ],
    "r": 1,
    "e": "Le texte situe en 1883 le découpage du pays en fuseaux par les compagnies américaines."
   },
   {
    "q": "Pourquoi plusieurs pays ont-ils introduit une heure d'été ?",
    "o": [
     "Pour aligner leurs horloges sur le Soleil",
     "Pour profiter plus longtemps de la lumière du jour",
     "Pour réduire le nombre de fuseaux officiels"
    ],
    "r": 1,
    "e": "Le texte présente l'heure d'été comme un moyen de profiter de la lumière du jour."
   },
   {
    "q": "Pourquoi les compagnies ferroviaires ont-elles agi avant les États ?",
    "o": [
     "Elles subissaient directement les retards de leurs trains",
     "Elles obéissaient à un décret international",
     "Elles voulaient affaiblir les villes concurrentes"
    ],
    "r": 0,
    "e": "Les compagnies britanniques tranchent dès les années 1840, bien avant la conférence de 1884."
   },
   {
    "q": "Que montre l'exemple français de 1911 ?",
    "o": [
     "Que les astronomes français refusaient Greenwich",
     "Qu'une norme technique peut mettre des décennies à s'imposer",
     "Que la France a toujours suivi l'Angleterre"
    ],
    "r": 1,
    "e": "La France conserve l'heure de Paris longtemps après 1884 : l'adoption d'une norme prend du temps."
   },
   {
    "q": "Pourquoi l'auteur parle-t-il d'une norme imposée sans débat public ?",
    "o": [
     "Parce que la coordination technique précède la discussion",
     "Parce que le Parlement britannique a voté contre",
     "Parce que les habitants n'avaient pas de montres"
    ],
    "r": 0,
    "e": "Le texte souligne qu'un réseau technique peut imposer une norme à des territoires sans débat public."
   },
   {
    "q": "Quel est le sujet principal de ce texte ?",
    "o": [
     "La mesure du temps chez les astronomes grecs",
     "L'histoire de la construction des locomotives",
     "Comment le train a imposé une heure commune"
    ],
    "r": 2,
    "e": "Le texte suit le passage des heures locales à une heure commune, du rail à la conférence de 1884."
   },
   {
    "q": "Quelle idée l'auteur défend-il dans le dernier paragraphe ?",
    "o": [
     "Le Soleil règle encore nos horaires officiels",
     "Les réformes horaires ont échoué dans toute l'Europe",
     "Une convention commune ne change pas la course du Soleil"
    ],
    "r": 2,
    "e": "Le texte oppose la convention humaine à la course du Soleil, qu'aucune réforme ne modifie."
   }
  ]
 },
 {
  "id": "b14",
  "theme": "technologie",
  "niveau": 3,
  "titre": "Comment un GPS sait où vous êtes",
  "corps": "Un récepteur GPS ne parle pas aux satellites : il les écoute. Une trentaine de satellites tournent autour de la Terre, à environ vingt mille kilomètres d'altitude, et diffusent en continu l'heure exacte et leur position. Chacun embarque des horloges atomiques, car une erreur d'un millionième de seconde fausse la distance de trois cents mètres.\n\nLe récepteur compare l'heure de réception à celle indiquée dans le message. La différence, multipliée par la vitesse de la lumière, donne la distance au satellite. Avec trois distances, on obtient un point dans l'espace. En pratique, il en faut quatre : la quatrième sert à corriger l'horloge, souvent moins précise que celle du satellite.\n\nOn parle parfois de triangulation, mais le calcul repose sur des sphères, non sur des angles : chaque distance définit une sphère centrée sur un satellite, et le récepteur se trouve à l'intersection.\n\nLe système américain n'est plus seul. La Russie exploite Glonass, l'Europe Galileo, la Chine Beidou. Un récepteur récent peut combiner plusieurs constellations, ce qui améliore la disponibilité des signaux en ville, où les satellites sont souvent masqués par les immeubles.\n\nLes erreurs ont plusieurs origines. La traversée de l'ionosphère ralentit légèrement les ondes ; la traversée de l'atmosphère basse aussi. Les satellites émettent sur plusieurs fréquences : comparer deux de ces fréquences permet d'estimer l'effet de l'ionosphère et de le corriger. Les signaux peuvent se réfléchir sur un bâtiment avant d'atteindre l'antenne, ce qu'on appelle un trajet multiple, et fausser la mesure de quelques mètres.\n\nLes limites sont connues. Sous un tunnel, dans un parking souterrain ou entre des immeubles très hauts, les signaux arrivent mal. Certains appareils combinent alors le GPS avec les réseaux mobiles ou des capteurs de mouvement.\n\nLa précision courante se compte en quelques mètres. Elle suffit pour se repérer, mais pas pour distinguer deux voies parallèles. Pour aller plus loin, on utilise des corrections différentielles : une station dont la position est connue compare la distance mesurée et la distance réelle, puis diffuse l'écart. Le récepteur applique cette correction et gagne en précision. En agriculture, ces systèmes guident des tracteurs à quelques centimètres près.",
  "q": [
   {
    "q": "Que fait un récepteur GPS avec les satellites ?",
    "o": [
     "Il leur envoie sa position",
     "Il les écoute",
     "Il les pilote"
    ],
    "r": 1,
    "e": "Le récepteur est passif : il reçoit les signaux émis par les satellites."
   },
   {
    "q": "À quelle altitude tournent les satellites, selon le texte ?",
    "o": [
     "Environ cinq cents kilomètres",
     "Environ trois cent mille kilomètres",
     "Environ vingt mille kilomètres"
    ],
    "r": 2,
    "e": "Le texte indique une altitude d'environ vingt mille kilomètres."
   },
   {
    "q": "Combien de satellites le texte mentionne-t-il ?",
    "o": [
     "Une trentaine",
     "Trois",
     "Plusieurs centaines"
    ],
    "r": 0,
    "e": "Le texte parle d'une trentaine de satellites en orbite."
   },
   {
    "q": "Quel équipement de bord permet la précision du temps ?",
    "o": [
     "Des gyroscopes",
     "Des caméras stellaires",
     "Des horloges atomiques"
    ],
    "r": 2,
    "e": "Chaque satellite embarque des horloges atomiques."
   },
   {
    "q": "Quelle erreur de distance provoque un millionième de seconde d'écart ?",
    "o": [
     "Trois cents mètres",
     "Trois mètres",
     "Trente kilomètres"
    ],
    "r": 0,
    "e": "Le texte chiffre cet effet à trois cents mètres."
   },
   {
    "q": "Comment obtient-on la distance à un satellite ?",
    "o": [
     "En mesurant l'angle de l'antenne",
     "En multipliant le décalage horaire par la vitesse de la lumière",
     "En comptant les satellites visibles"
    ],
    "r": 1,
    "e": "La différence d'heure multipliée par la vitesse de la lumière donne la distance."
   },
   {
    "q": "Combien de distances faut-il en pratique ?",
    "o": [
     "Deux",
     "Dix",
     "Quatre"
    ],
    "r": 2,
    "e": "Quatre distances sont nécessaires, la quatrième servant à corriger l'horloge du récepteur."
   },
   {
    "q": "À quoi sert la quatrième mesure ?",
    "o": [
     "À corriger l'horloge du récepteur",
     "À calculer l'altitude seulement",
     "À vérifier la météo"
    ],
    "r": 0,
    "e": "La quatrième distance compense l'imprécision de l'horloge du récepteur."
   },
   {
    "q": "Sur quelle figure géométrique repose le calcul ?",
    "o": [
     "Des triangles rectangles",
     "Des sphères",
     "Des cylindres"
    ],
    "r": 1,
    "e": "Chaque distance définit une sphère centrée sur un satellite."
   },
   {
    "q": "Que se passe-t-il sous un tunnel ?",
    "o": [
     "Les satellites s'arrêtent",
     "Le récepteur accélère",
     "Les signaux arrivent mal"
    ],
    "r": 2,
    "e": "Sous un tunnel, les signaux sont bloqués et la localisation devient difficile."
   },
   {
    "q": "Avec quoi certains appareils combinent-ils le GPS ?",
    "o": [
     "Une boussole à aiguille",
     "Les réseaux mobiles et des capteurs de mouvement",
     "Un altimètre barométrique seul"
    ],
    "r": 1,
    "e": "Le texte cite les réseaux mobiles et les capteurs de mouvement."
   },
   {
    "q": "Quelle est la précision courante d'un GPS ?",
    "o": [
     "Quelques mètres",
     "Quelques centimètres",
     "Quelques kilomètres"
    ],
    "r": 0,
    "e": "La précision courante se compte en quelques mètres."
   },
   {
    "q": "Pourquoi cette précision ne suffit-elle pas en ville dense ?",
    "o": [
     "Elle ignore les piétons",
     "Elle ne distingue pas deux voies parallèles",
     "Elle change toutes les secondes"
    ],
    "r": 1,
    "e": "Quelques mètres ne permettent pas de séparer deux voies proches l'une de l'autre."
   },
   {
    "q": "Pourquoi le mot triangulation est-il approximatif ici ?",
    "o": [
     "Parce qu'il faudrait dire quadrature",
     "Parce que trois satellites suffisent toujours",
     "Parce que le calcul utilise des distances, pas des angles"
    ],
    "r": 2,
    "e": "Le récepteur croise des sphères de distance et non des visées angulaires."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Le principe de la localisation par satellites",
     "L'histoire de la conquête spatiale",
     "Les applications militaires du GPS"
    ],
    "r": 0,
    "e": "Le texte explique comment le récepteur calcule sa position à partir des signaux."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Vendre un modèle de récepteur",
     "Décrire le lancement d'une fusée",
     "Rendre compréhensible un calcul technique courant"
    ],
    "r": 2,
    "e": "L'auteur décompose le mécanisme en étapes simples, avec un ordre de grandeur."
   },
   {
    "q": "Pourquoi une horloge très précise est-elle indispensable ?",
    "o": [
     "Parce que la lumière parcourt une grande distance en très peu de temps",
     "Parce que les satellites changent d'orbite",
     "Parce que le récepteur chauffe"
    ],
    "r": 0,
    "e": "La vitesse de la lumière est si grande qu'un minuscule écart de temps devient une erreur de distance importante."
   },
   {
    "q": "Quels autres systèmes de navigation le texte cite-t-il ?",
    "o": [
     "Loran et Omega",
     "Glonass, Galileo et Beidou",
     "Inmarsat et Iridium"
    ],
    "r": 1,
    "e": "Trois constellations sont nommées aux côtés du GPS américain."
   },
   {
    "q": "Qu'est-ce qu'un trajet multiple ?",
    "o": [
     "Un satellite vu plusieurs fois par jour",
     "Un signal réfléchi par un bâtiment avant d'atteindre l'antenne",
     "Une correction envoyée par une station"
    ],
    "r": 1,
    "e": "Le signal emprunte un chemin plus long en se réfléchissant, ce qui fausse la distance mesurée."
   }
  ]
 },
 {
  "id": "b19",
  "theme": "technologie",
  "niveau": 3,
  "titre": "Internet passe surtout sous la mer",
  "corps": "Les messages que nous échangeons traversent rarement le ciel : ils passent surtout sous la mer. Des câbles posés au fond des océans relient les continents et transportent la quasi-totalité du trafic internet international.\n\nL'histoire commence au XIXe siècle. Un premier câble transatlantique est immergé en 1858 ; il fonctionne quelques semaines puis se tait. Une nouvelle tentative échoue en 1865, avant la réussite de 1866, qui permet enfin des communications régulières entre l'Europe et l'Amérique.\n\nUn câble moderne est fin, guère plus épais qu'un tuyau d'arrosage. Au centre, quelques dizaines de fibres optiques transportent les données sous forme de lumière. Autour, des couches d'acier et de plastique protègent la fibre contre la pression, les ancres et les morsures de poissons.\n\nLe navire câblier déroule le câble lentement, en suivant un tracé étudié pour éviter les reliefs dangereux. Tous les cinquante à cent kilomètres, un répéteur amplifie le signal, car la lumière faiblit sur de longues distances. Ces boîtiers sont alimentés en électricité par le câble lui-même, depuis les stations côtières.\n\nLes premiers câbles transportaient des signaux électriques, très lents. La fibre optique a changé l'échelle : une seule paire de fibres peut porter l'équivalent de milliers de conversations simultanées. La lumière doit être amplifiée régulièrement, car elle s'atténue en parcourant des milliers de kilomètres.\n\nLes stations d'atterrissement sont des bâtiments discrets, souvent sans fenêtre, où le câble rejoint le réseau terrestre. Leur emplacement dépend du relief sous-marin, des autorisations et de la proximité des grands nœuds de communication.\n\nLes avaries sont fréquentes : une ancre traînée ou un chalut peuvent sectionner une fibre. Un glissement de terrain sous-marin peut aussi couper le câble sur des centaines de kilomètres, phénomène rare mais dévastateur. Les opérateurs cartographient donc les fonds avant la pose et évitent les zones de pêche active. Les morsures de poissons ne sont pas une légende : des requins ont attaqué des câbles, ce qui a conduit à renforcer les gaines. Les réparations mobilisent un navire spécialisé et prennent souvent des semaines. C'est pourquoi les opérateurs prévoient des itinéraires de secours et des câbles redondants.\n\nLe sujet est stratégique. Un câble appartient à un consortium d'entreprises, relie des territoires et transporte des données sensibles. Sa protection relève autant de la technique que de la diplomatie.",
  "q": [
   {
    "q": "Par où passe surtout le trafic internet international ?",
    "o": [
     "Par des câbles sous-marins",
     "Par des satellites",
     "Par des ondes radio"
    ],
    "r": 0,
    "e": "Le texte indique que la quasi-totalité du trafic passe par des câbles posés au fond des océans."
   },
   {
    "q": "À quoi le câble est-il comparé pour son épaisseur ?",
    "o": [
     "À un câble électrique de maison",
     "À une corde de navire",
     "À un tuyau d'arrosage"
    ],
    "r": 2,
    "e": "Le texte le compare à un tuyau d'arrosage."
   },
   {
    "q": "Qu'y a-t-il au centre du câble ?",
    "o": [
     "Des fils de cuivre",
     "Des fibres optiques",
     "Un tube d'huile"
    ],
    "r": 1,
    "e": "Le centre contient quelques dizaines de fibres optiques."
   },
   {
    "q": "Sous quelle forme les données circulent-elles ?",
    "o": [
     "Sous forme de lumière",
     "Sous forme d'ondes sonores",
     "Sous forme de champs magnétiques"
    ],
    "r": 0,
    "e": "Les fibres transportent les données sous forme de lumière."
   },
   {
    "q": "Contre quoi les couches d'acier et de plastique protègent-elles la fibre ?",
    "o": [
     "Le gel et la chaleur",
     "Les courants électriques",
     "La pression, les ancres et les morsures de poissons"
    ],
    "r": 2,
    "e": "Le texte cite la pression, les ancres et les morsures de poissons."
   },
   {
    "q": "À quelle vitesse le navire câblier déroule-t-il le câble ?",
    "o": [
     "À grande vitesse",
     "Lentement",
     "Par à-coups très rapides"
    ],
    "r": 1,
    "e": "Le déroulement se fait lentement, en suivant un tracé étudié."
   },
   {
    "q": "Pourquoi le tracé évite-t-il certains reliefs ?",
    "o": [
     "Parce qu'ils sont protégés par la loi",
     "Parce qu'ils sont trop froids",
     "Parce qu'ils présentent des dangers pour le câble"
    ],
    "r": 2,
    "e": "Le tracé contourne les reliefs dangereux pour limiter les risques d'avarie."
   },
   {
    "q": "Tous les combien de kilomètres trouve-t-on un répéteur ?",
    "o": [
     "Tous les cinq kilomètres",
     "Tous les cinquante à cent kilomètres",
     "Tous les mille kilomètres"
    ],
    "r": 1,
    "e": "Le texte indique un répéteur tous les cinquante à cent kilomètres."
   },
   {
    "q": "Pourquoi un répéteur est-il nécessaire ?",
    "o": [
     "Parce que la lumière faiblit sur de longues distances",
     "Parce que le câble chauffe",
     "Parce que les données doivent être chiffrées"
    ],
    "r": 0,
    "e": "Le signal lumineux s'affaiblit et doit être amplifié."
   },
   {
    "q": "Comment les répéteurs sont-ils alimentés ?",
    "o": [
     "Par des panneaux solaires flottants",
     "Par des batteries remplacées chaque année",
     "Par le câble lui-même, depuis les stations côtières"
    ],
    "r": 2,
    "e": "L'électricité arrive par le câble depuis les stations situées sur la côte."
   },
   {
    "q": "Quelles causes d'avarie le texte cite-t-il ?",
    "o": [
     "Un séisme sous-marin",
     "Une ancre traînée ou un chalut",
     "Une surchauffe du répéteur"
    ],
    "r": 1,
    "e": "Une ancre traînée ou un chalut peuvent sectionner une fibre."
   },
   {
    "q": "Combien de temps prennent souvent les réparations ?",
    "o": [
     "Des semaines",
     "Quelques heures",
     "Plusieurs années"
    ],
    "r": 0,
    "e": "Les réparations mobilisent un navire spécialisé et prennent souvent des semaines."
   },
   {
    "q": "Que prévoient les opérateurs pour limiter les conséquences ?",
    "o": [
     "Des câbles aériens de secours",
     "Des itinéraires de secours et des câbles redondants",
     "Une coupure programmée"
    ],
    "r": 1,
    "e": "Des itinéraires de secours et des câbles redondants assurent la continuité du trafic."
   },
   {
    "q": "À qui appartient un câble ?",
    "o": [
     "À un consortium d'entreprises",
     "À un seul État",
     "À une organisation internationale unique"
    ],
    "r": 0,
    "e": "Le texte parle d'un consortium d'entreprises propriétaires."
   },
   {
    "q": "Pourquoi la protection des câbles est-elle stratégique ?",
    "o": [
     "Parce qu'ils coûtent peu à installer",
     "Parce qu'ils servent de repères maritimes",
     "Parce qu'ils transportent des données sensibles entre territoires"
    ],
    "r": 2,
    "e": "Données sensibles, liens entre territoires et propriété privée mêlent technique et diplomatie."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Les satellites de télécommunication",
     "Le réseau de câbles qui porte le trafic internet mondial",
     "La construction des ports"
    ],
    "r": 1,
    "e": "Le texte décrit l'infrastructure sous-marine, son fonctionnement et ses fragilités."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Faire découvrir une infrastructure invisible et fragile",
     "Vendre un service de connexion",
     "Expliquer la navigation maritime"
    ],
    "r": 0,
    "e": "L'auteur attire l'attention sur un réseau peu visible mais essentiel."
   },
   {
    "q": "Quand la première liaison transatlantique durable est-elle établie ?",
    "o": [
     "En 1858",
     "En 1901",
     "En 1866"
    ],
    "r": 2,
    "e": "Après l'échec de 1865, le câble de 1866 assure des communications régulières."
   },
   {
    "q": "Quelle est la particularité des stations d'atterrissement ?",
    "o": [
     "Ce sont des bâtiments discrets, souvent sans fenêtre",
     "Elles sont installées sur des plateformes en mer",
     "Elles sont ouvertes au public"
    ],
    "r": 0,
    "e": "Ces bâtiments relient le câble sous-marin au réseau terrestre, à l'abri des regards."
   }
  ]
 },
 {
  "id": "b24",
  "theme": "technologie",
  "niveau": 3,
  "titre": "Une imprimante qui fabrique en ajoutant",
  "corps": "Une imprimante tridimensionnelle ne creuse pas la matière : elle l'ajoute. C'est pourquoi on parle de fabrication additive. Au lieu de tailler un bloc, la machine dépose le matériau couche après couche, à partir d'un modèle dessiné sur ordinateur.\n\nLa technique la plus répandue fait fondre un filament de plastique. Le filament est poussé dans une buse chauffée, déposé en un trait fin, puis il durcit en refroidissant. La buse se déplace selon un trajet calculé, monte d'une fraction de millimètre, et recommence. Une pièce de dix centimètres peut demander plusieurs heures. Le modèle numérique doit d'abord être vérifié : une paroi trop fine ou une forme en porte-à-faux oblige à prévoir des supports, retirés après l'impression et qui laissent parfois des traces à poncer.\n\nL'histoire est récente. La stéréolithographie, qui durcit une résine couche par couche, est mise au point au début des années 1980 ; le dépôt de filament fondu arrive à la fin de la même décennie. Les brevets ont longtemps limité la diffusion des machines, puis leur expiration, à la fin des années 2000, a fait naître une génération d'imprimantes bon marché destinées au grand public.\n\nD'autres procédés existent. Certains font durcir une résine liquide sous une lumière ultraviolette ; d'autres font fondre ou souder des poudres de plastique, de métal ou de céramique. Chaque famille de machines a ses contraintes de précision, de vitesse et de coût.\n\nLe point faible reste souvent la solidité. Une pièce imprimée est plus fragile dans le sens de l'empilement des couches, car la liaison entre deux couches est moins solide que la matière elle-même. Les concepteurs orientent donc la pièce sur le plateau en fonction des efforts qu'elle devra supporter.\n\nLes applications se sont multipliées. Prototypes, pièces de rechange, prothèses, moules perdus, maquettes d'architecture : l'impression 3D convient surtout aux formes complexes et aux petites séries, là où un moule coûterait trop cher.\n\nElle ne remplace pas tout. Pour produire un million d'objets identiques, le moulage ou l'usinage restent plus rapides et moins chers. La fabrication additive est un outil parmi d'autres, puissant quand la forme ou la personnalisation compte plus que la quantité.",
  "q": [
   {
    "q": "Pourquoi parle-t-on de fabrication additive ?",
    "o": [
     "Parce qu'elle ajoute des couleurs",
     "Parce que la machine ajoute de la matière",
     "Parce qu'elle assemble des pièces existantes"
    ],
    "r": 1,
    "e": "La matière est déposée couche après couche, au lieu d'être retirée d'un bloc."
   },
   {
    "q": "Que fait la technique la plus répandue ?",
    "o": [
     "Elle fait fondre un filament de plastique",
     "Elle durcit une poudre de métal",
     "Elle découpe une plaque"
    ],
    "r": 0,
    "e": "Le filament est chauffé dans une buse puis déposé en un trait fin."
   },
   {
    "q": "Comment le filament durcit-il ?",
    "o": [
     "Sous une lumière ultraviolette",
     "Au contact d'un solvant",
     "En refroidissant"
    ],
    "r": 2,
    "e": "Le plastique déposé se solidifie en refroidissant."
   },
   {
    "q": "De combien la buse monte-t-elle entre deux couches ?",
    "o": [
     "D'un centimètre",
     "D'une dizaine de centimètres",
     "D'une fraction de millimètre"
    ],
    "r": 2,
    "e": "Les couches sont très fines, ce qui explique la durée d'impression."
   },
   {
    "q": "Combien de temps peut demander une pièce de dix centimètres ?",
    "o": [
     "Plusieurs heures",
     "Quelques secondes",
     "Plusieurs semaines"
    ],
    "r": 0,
    "e": "Le dépôt couche par couche prend du temps, souvent plusieurs heures."
   },
   {
    "q": "Quel autre procédé le texte cite-t-il ?",
    "o": [
     "Le soufflage du verre",
     "Le durcissement d'une résine sous lumière ultraviolette",
     "Le forgeage à chaud"
    ],
    "r": 1,
    "e": "Résines durcies aux ultraviolets et poudres fondues ou soudées sont mentionnées."
   },
   {
    "q": "Dans quel sens une pièce imprimée est-elle plus fragile ?",
    "o": [
     "Dans le sens de la largeur",
     "Dans le sens de l'empilement des couches",
     "Sur les faces extérieures"
    ],
    "r": 1,
    "e": "La liaison entre deux couches est moins résistante que la matière elle-même."
   },
   {
    "q": "Que font les concepteurs pour limiter ce défaut ?",
    "o": [
     "Ils orientent la pièce selon les efforts prévus",
     "Ils doublent l'épaisseur partout",
     "Ils impriment en deux exemplaires"
    ],
    "r": 0,
    "e": "L'orientation sur le plateau place les couches perpendiculairement aux efforts."
   },
   {
    "q": "Quelles applications le texte cite-t-il ?",
    "o": [
     "Aliments et médicaments",
     "Bâtiments complets",
     "Prototypes, pièces de rechange, prothèses"
    ],
    "r": 2,
    "e": "Le texte énumère prototypes, rechanges, prothèses, moules perdus et maquettes."
   },
   {
    "q": "Quand l'impression 3D est-elle particulièrement adaptée ?",
    "o": [
     "Aux très grandes séries",
     "Aux pièces de plus d'un mètre cube",
     "Aux formes complexes et aux petites séries"
    ],
    "r": 2,
    "e": "Elle convient quand un moule serait trop coûteux pour la quantité produite."
   },
   {
    "q": "Que reste-t-il plus rentable pour un million d'objets identiques ?",
    "o": [
     "L'impression 3D",
     "Le moulage ou l'usinage",
     "Le découpage manuel"
    ],
    "r": 1,
    "e": "Pour de grandes quantités, les procédés classiques restent plus rapides et moins chers."
   },
   {
    "q": "Pourquoi la liaison entre couches est-elle le point faible ?",
    "o": [
     "Parce que deux couches ne fusionnent pas comme une matière continue",
     "Parce que la couleur change",
     "Parce que le plastique est plus chaud"
    ],
    "r": 0,
    "e": "La solidité vient d'une adhérence entre surfaces, inférieure à la cohésion interne."
   },
   {
    "q": "Pourquoi un moule coûte-t-il cher en petite série ?",
    "o": [
     "Parce que son prix se répartit sur peu de pièces",
     "Parce qu'il faut le changer chaque jour",
     "Parce qu'il est fabriqué à la main"
    ],
    "r": 0,
    "e": "Le coût fixe du moule n'est rentabilisé que par un grand nombre d'exemplaires."
   },
   {
    "q": "Pourquoi la personnalisation favorise-t-elle l'impression 3D ?",
    "o": [
     "Parce que la matière est moins chère",
     "Parce que la machine imprime en couleur",
     "Parce qu'il n'y a pas de moule à refaire pour chaque variante"
    ],
    "r": 2,
    "e": "Chaque pièce peut être différente sans coût d'outillage supplémentaire."
   },
   {
    "q": "Pourquoi une impression dure-t-elle plus longtemps qu'une simple découpe ?",
    "o": [
     "Parce que le plastique doit sécher",
     "Parce que la machine construit la pièce couche par couche",
     "Parce que le modèle 3D est long à dessiner"
    ],
    "r": 1,
    "e": "Le temps dépend du nombre de couches et du volume de matière déposé."
   },
   {
    "q": "À quoi l'impression 3D convient-elle le mieux ?",
    "o": [
     "Aux formes complexes et aux petites séries",
     "Aux millions d'objets identiques",
     "Aux pièces plates produites en grande quantité"
    ],
    "r": 0,
    "e": "Le texte conclut que l'impression 3D convient surtout aux formes complexes et aux petites séries, là où un moule coûterait trop cher."
   },
   {
    "q": "Pourquoi l'impression 3D ne remplace-t-elle pas le moulage ?",
    "o": [
     "Parce que la quantité et le coût décident du procédé",
     "Parce que la loi l'interdit dans l'industrie",
     "Parce que le plastique imprimé est interdit"
    ],
    "r": 0,
    "e": "Chaque technique a son domaine : la forme ou la quantité orientent le choix."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "L'histoire de l'imprimerie",
     "La conception assistée par ordinateur",
     "Le principe, les limites et les usages de la fabrication additive"
    ],
    "r": 2,
    "e": "Le texte décrit la méthode, sa faiblesse structurelle et son domaine d'emploi."
   },
   {
    "q": "Quelle est l'intention de l'auteur ?",
    "o": [
     "Situer une technologie à sa juste place, sans surestimation",
     "Vanter une marque d'imprimante",
     "Prédire la fin de l'industrie"
    ],
    "r": 0,
    "e": "L'auteur montre à la fois l'intérêt et les limites du procédé."
   }
  ]
 },
 {
  "id": "d10",
  "theme": "architecture",
  "niveau": 4,
  "titre": "La lentille qui a multiplié la portée des phares",
  "corps": "Avant le XIXe siècle, un phare éclairait mal. On y brûlait de l'huile derrière un miroir de métal poli, et la lumière partait dans toutes les directions : seule une faible part atteignait la mer. Les gardiens passaient la nuit à remonter la mèche et à nettoyer la vitre, sans grand résultat.\n\nLe problème intéressait les savants. Augustin Fresnel, ingénieur des Ponts et Chaussées, étudie la lumière et comprend qu'une surface courbe peut courber les rayons sans les absorber, à condition de les faire réfracter par des prismes successifs. Il imagine alors une lentille en anneaux concentriques, chacun incliné selon un angle calculé. Chaque anneau capte une part du faisceau et la redirige vers l'horizon.\n\nLe résultat est spectaculaire : à source égale, la portée est multipliée. Une lampe modeste, placée au foyer de l'appareil, envoie soudain un faisceau étroit et intense à plusieurs dizaines de kilomètres. Les anneaux, en verre poli, sont si nombreux que la lentille ressemble à un œil d'insecte géant.\n\nLa première installation importante a lieu au phare de Cordouan, au début des années 1820. Le dispositif se répand ensuite sur toutes les côtes. En faisant tourner l'appareil, on obtient des éclats réguliers : chaque phare peut ainsi être reconnu à son rythme de flashs, noté sur les cartes marines. Des secteurs colorés en rouge ou en vert signalent les hauts-fonds.\n\nLa technique a évolué, mais le principe demeure. Les ampoules électriques ont remplacé les flammes, puis des diodes et des panneaux solaires ont permis d'automatiser les sites les plus isolés. Les derniers gardiens ont quitté les lieux les plus reculés au début des années 2000.\n\nLes phares sont plus anciens qu'on ne le croit. Le plus célèbre, celui d'Alexandrie, élevé au IIIe siècle avant Jésus-Christ, guidait les navires vers le port égyptien et comptait parmi les Sept Merveilles du monde. Il fonctionnait probablement avec un feu alimenté par du bois, renforcé par des miroirs de bronze. Les tours médiévaux reprirent le principe, avec des brasiers entretenus par des gardiens et de simples ouvertures pour diriger la lueur.\n\nLe combustible a déterminé les progrès. L'huile végétale, puis le pétrole lampant, ont permis des flammes plus régulières. À la fin du XIXe siècle, l'acétylène, produit par réaction de l'eau sur le carbure, a offert une lumière intense sans alimentation continue : un réservoir et un mécanisme suffisaient pour plusieurs semaines. L'électricité a ensuite simplifié l'entretien dans les sites desservis par un câble.\n\nLa fabrication de la lentille était un métier à part. Les anneaux de verre devaient être taillés avec une précision extrême, puis assemblés dans une monture de bronze. Un défaut d'un dixième de millimètre déformait le faisceau. Les ateliers qui maîtrisaient ce travail étaient peu nombreux, et leurs pièces étaient numérotées, entretenues, parfois déplacées d'un phare à l'autre.\n\nL'administration des phares et balises a longtemps formé un corps de gardiens spécialisés, logés au pied de la tour, chargés de l'entretien, de la veille météorologique et parfois des sauvetages. Ce métier disparaît, remplacé par des visites techniques et des systèmes de télésurveillance. Les bouées et les signaux flottants complètent désormais le dispositif, mais les cartes marines continuent d'indiquer, pour chaque feu, sa position, sa couleur et son rythme.\n\nReste la leçon de méthode : Fresnel n'a pas inventé une source plus puissante, il a mieux utilisé celle qui existait. La même lumière, mieux dirigée, porte plus loin.",
  "q": [
   {
    "q": "Comment éclairait-on les phares avant le XIXe siècle ?",
    "o": [
     "Avec de l'huile brûlant derrière un miroir de métal",
     "Avec des lampes électriques à arc",
     "Avec des feux de bois sur la plateforme"
    ],
    "r": 0,
    "e": "Le texte décrit une flamme à huile et un miroir poli."
   },
   {
    "q": "Quel était le défaut de ce système ?",
    "o": [
     "La lumière partait dans toutes les directions",
     "Le miroir fondait à la chaleur",
     "L'huile gelait en hiver"
    ],
    "r": 0,
    "e": "Seule une faible part du faisceau atteignait la mer."
   },
   {
    "q": "Qui a conçu la lentille à anneaux ?",
    "o": [
     "Augustin Fresnel",
     "Vauban",
     "Cordouan"
    ],
    "r": 0,
    "e": "Le texte l'attribue à l'ingénieur Augustin Fresnel."
   },
   {
    "q": "À quel corps appartenait Fresnel ?",
    "o": [
     "Aux Ponts et Chaussées",
     "À la Marine royale",
     "À l'Académie des beaux-arts"
    ],
    "r": 0,
    "e": "Le texte le présente comme ingénieur des Ponts et Chaussées."
   },
   {
    "q": "Sur quel effet repose la lentille ?",
    "o": [
     "La réfraction des rayons par des prismes successifs",
     "La réflexion totale sur un miroir plan",
     "L'absorption de la lumière par le verre teinté"
    ],
    "r": 0,
    "e": "Chaque anneau réfracte une part du faisceau vers l'horizon."
   },
   {
    "q": "À quoi ressemble l'appareil selon le texte ?",
    "o": [
     "À un œil d'insecte géant",
     "À une roue de charrette",
     "À une cloche de verre"
    ],
    "r": 0,
    "e": "La comparaison avec l'œil composé est explicite."
   },
   {
    "q": "Quel phare reçoit une installation importante au début des années 1820 ?",
    "o": [
     "Le phare de Cordouan",
     "Le phare de Kéréon",
     "Le phare d'Alexandrie"
    ],
    "r": 0,
    "e": "Le texte cite Cordouan."
   },
   {
    "q": "Quel est l'effet de la lentille sur la portée ?",
    "o": [
     "Elle est multipliée à source égale",
     "Elle reste identique mais la lumière est plus blanche",
     "Elle diminue mais le faisceau est plus large"
    ],
    "r": 0,
    "e": "Le texte insiste sur le gain de portée sans changer de source."
   },
   {
    "q": "À quelle distance le faisceau peut-il être vu ?",
    "o": [
     "À plusieurs dizaines de kilomètres",
     "À quelques centaines de mètres",
     "À plus de cinq cents kilomètres"
    ],
    "r": 0,
    "e": "Le texte parle de plusieurs dizaines de kilomètres."
   },
   {
    "q": "Comment reconnaît-on un phare la nuit ?",
    "o": [
     "À son rythme de flashs",
     "À la couleur de sa tour",
     "À la hauteur de sa lanterne"
    ],
    "r": 0,
    "e": "La rotation produit des éclats réguliers notés sur les cartes."
   },
   {
    "q": "Que signalent les secteurs rouges ou verts ?",
    "o": [
     "Les hauts-fonds",
     "Les limites maritimes",
     "Les ports de pêche"
    ],
    "r": 0,
    "e": "Ces secteurs colorés avertissent d'un danger."
   },
   {
    "q": "Qu'est-ce qui a remplacé les flammes ?",
    "o": [
     "Des ampoules électriques, puis des diodes",
     "Des brûleurs à gaz, puis des lasers",
     "Des miroirs tournants à vapeur"
    ],
    "r": 0,
    "e": "Le texte décrit cette succession."
   },
   {
    "q": "Quand les derniers gardiens ont-ils quitté les sites les plus reculés ?",
    "o": [
     "Au début des années 2000",
     "Au début des années 1950",
     "Dans les années 1980"
    ],
    "r": 0,
    "e": "Le texte situe ces départs au début des années 2000."
   },
   {
    "q": "Pourquoi Fresnel n'a-t-il pas cherché une source plus puissante ?",
    "o": [
     "Parce que le problème venait de la dispersion, non de la puissance",
     "Parce que les sources puissantes étaient interdites",
     "Parce que l'huile manquait sur les côtes"
    ],
    "r": 0,
    "e": "Mieux diriger la lumière suffisait à gagner en portée."
   },
   {
    "q": "Pourquoi les anneaux doivent-ils être inclinés selon un angle calculé ?",
    "o": [
     "Pour renvoyer chaque rayon vers l'horizon",
     "Pour colorer la lumière en rouge",
     "Pour résister au vent du large"
    ],
    "r": 0,
    "e": "L'inclinaison détermine la direction du faisceau sortant."
   },
   {
    "q": "Pourquoi l'automatisation a-t-elle été possible ?",
    "o": [
     "Parce que l'énergie solaire et les diodes réduisent l'entretien",
     "Parce que les bateaux n'ont plus besoin de phares",
     "Parce que les gardiens coûtaient trop cher à loger"
    ],
    "r": 0,
    "e": "Le texte relie l'automatisation aux panneaux solaires et aux diodes."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "L'invention de la lentille de Fresnel et son effet sur les phares",
     "La vie quotidienne des gardiens de phare",
     "L'histoire du phare d'Alexandrie"
    ],
    "r": 0,
    "e": "Le texte suit le problème, la solution technique et ses conséquences."
   },
   {
    "q": "Quelle idée l'auteur veut-il retenir de cette histoire ?",
    "o": [
     "Qu'un meilleur usage d'une ressource vaut parfois une ressource nouvelle",
     "Que les inventions naissent toujours du hasard",
     "Que les techniques anciennes sont supérieures aux modernes"
    ],
    "r": 0,
    "e": "La conclusion résume cette leçon de méthode."
   },
   {
    "q": "Quel phare antique comptait parmi les Sept Merveilles du monde ?",
    "o": [
     "Le phare d'Alexandrie",
     "Le phare de Cordouan",
     "Le phare de Kéréon"
    ],
    "r": 0,
    "e": "Le texte cite le phare d'Alexandrie, élevé au IIIe siècle avant Jésus-Christ."
   },
   {
    "q": "Comment l'acétylène était-il produit sur place ?",
    "o": [
     "Par réaction de l'eau sur le carbure",
     "Par combustion d'huile végétale",
     "Par distillation du pétrole lampant"
    ],
    "r": 0,
    "e": "Un réservoir et un mécanisme assuraient plusieurs semaines d'éclairage."
   },
   {
    "q": "Pourquoi les ateliers de lentilles étaient-ils peu nombreux ?",
    "o": [
     "Parce que la taille du verre exigeait une précision extrême",
     "Parce que le verre était importé par bateau",
     "Parce que l'État imposait un monopole"
    ],
    "r": 0,
    "e": "Un défaut d'un dixième de millimètre déformait le faisceau."
   }
  ]
 },
 {
  "id": "d5",
  "theme": "architecture",
  "niveau": 4,
  "titre": "La coupole du Panthéon tient debout sans armature",
  "corps": "À Rome, une coupole de béton posée il y a près de dix-huit siècles n'a jamais eu besoin d'être renforcée. Le Panthéon impressionne encore par ses dimensions : plus de quarante-trois mètres de diamètre, soit la largeur d'un terrain de football réduite de moitié. Aucune armature métallique ne soutient l'ouvrage, et il reste la plus grande coupole de béton non armé du monde.\n\nLe bâtiment actuel est l'œuvre de l'empereur Hadrien, qui le fait reconstruire entre 118 et 128 après Jésus-Christ, à l'emplacement d'un temple plus ancien élevé par Agrippa. La façade conserve d'ailleurs l'inscription du premier édifice, ce qui a longtemps entretenu la confusion sur son auteur.\n\nLa solidité vient d'abord du matériau. Les Romains mélangeaient de la chaux, de l'eau et des débris de roche volcanique, notamment la pouzzolane des environs de Naples. Ce béton durcit même sous l'eau et résiste remarquablement au temps. Les constructeurs en ont fait un usage savant : la base de la coupole est chargée de pierres lourdes, puis les granulats deviennent plus légers à mesure que l'on monte, jusqu'à la pierre ponce, presque aussi légère que du bois.\n\nLa forme aide autant que la matière. Des caissons creux, ces cases en retrait qui dessinent un quadrillage à l'intérieur, allègent la voûte et répartissent les efforts. L'épaisseur de la paroi atteint plusieurs mètres au niveau des fondations et diminue vers le sommet. Enfin, une ouverture ronde de plus de huit mètres, l'oculus, laisse entrer le jour et allège le centre.\n\nLe sol de la salle épouse la courbe de la coupole : si l'on prolongeait la sphère vers le bas, elle toucherait le pavement. Cette géométrie donne au visiteur l'impression d'entrer dans une sphère parfaite. Le temple est devenu une église au début du VIIe siècle, ce qui l'a probablement sauvé de la destruction, et il n'a jamais cessé d'être utilisé.\n\nLe terrain avait déjà une histoire. Agrippa avait fait élever un temple sur ce site vers 27 avant Jésus-Christ, et l'édifice avait souffert de plusieurs incendies. Hadrien choisit de reconstruire entièrement, en conservant le portique et l'inscription du premier bâtiment, geste d'hommage qui explique la perplexité des archéologues jusqu'au XIXe siècle.\n\nLa construction a exigé des moyens considérables. Le béton était coulé par couches successives contre un coffrage en bois, que l'on retirait ensuite ; des briques posées en arête soulageaient localement la masse. Pour monter une telle voûte sans cintre de charpente, les bâtisseurs ont utilisé un remblai intérieur, probablement de terre, qui soutenait la maçonnerie fraîche et que l'on évacuait par l'oculus à la fin du chantier.\n\nLa lumière joue un rôle aussi important que la pierre. L'ouverture unique projette sur les murs une tache qui se déplace au fil de la journée et des saisons, tour à tour haute en été et basse en hiver. Les caissons, en creux, accentuent les ombres et donnent à la surface l'apparence d'une grille mouvante. Le revêtement intérieur, fait de marbres colorés, a presque disparu, mais des relevés ont permis d'en restituer les grandes lignes.\n\nLe monument a inspiré des générations d'architectes. Brunelleschi l'étudie avant de concevoir son dôme ; Palladio le mesure et le dessine ; Soufflot s'en souvient pour l'église Sainte-Geneviève, devenue le Panthéon de Paris. Aux États-Unis, la rotonde de l'université de Virginie reprend le portique et la coupole.\n\nSa conservation pose aujourd'hui des questions précises. La coupole présente des fissures anciennes, surveillées par des instruments, et l'humidité attaque les enduits. Les restaurateurs doivent intervenir sans modifier l'équilibre d'un édifice qui n'a jamais été renforcé : chaque geste est discuté pendant des années avant d'être exécuté.\n\nSa leçon technique intéresse encore les ingénieurs, qui étudient ces bétons anciens pour réparer des ouvrages modernes. Mais la vraie réussite est ailleurs : un bâtiment de deux mille ans, sans ferraillage, qui reçoit toujours des visiteurs sous sa voûte intacte.",
  "q": [
   {
    "q": "Quel est le diamètre de la coupole du Panthéon ?",
    "o": [
     "Plus de quarante-trois mètres",
     "Plus de vingt-trois mètres",
     "Plus de soixante-trois mètres"
    ],
    "r": 0,
    "e": "Le texte donne plus de quarante-trois mètres de diamètre."
   },
   {
    "q": "Quel matériau principal constitue la coupole ?",
    "o": [
     "Du béton non armé",
     "De l'acier riveté",
     "Des blocs de marbre ajustés"
    ],
    "r": 0,
    "e": "Le texte parle de béton non armé, sans armature métallique."
   },
   {
    "q": "Qui fait reconstruire le bâtiment actuel ?",
    "o": [
     "L'empereur Hadrien",
     "L'empereur Auguste",
     "L'architecte Agrippa"
    ],
    "r": 0,
    "e": "Hadrien le fait reconstruire entre 118 et 128."
   },
   {
    "q": "Entre quelles années la reconstruction a-t-elle lieu ?",
    "o": [
     "Entre 118 et 128 après Jésus-Christ",
     "Entre 18 et 28 après Jésus-Christ",
     "Entre 218 et 228 après Jésus-Christ"
    ],
    "r": 0,
    "e": "Le texte précise ces deux dates."
   },
   {
    "q": "Quelle inscription la façade conserve-t-elle ?",
    "o": [
     "Celle du temple plus ancien d'Agrippa",
     "Celle du nom de l'architecte Hadrien",
     "Celle d'un décret du Sénat"
    ],
    "r": 0,
    "e": "L'inscription d'origine a longtemps brouillé l'attribution."
   },
   {
    "q": "Quel ingrédient volcanique entre dans ce béton ?",
    "o": [
     "La pouzzolane des environs de Naples",
     "Le basalte des Alpes",
     "Le sable des plages d'Ostie"
    ],
    "r": 0,
    "e": "Le texte nomme la pouzzolane, roche volcanique napolitaine."
   },
   {
    "q": "Quelle propriété remarquable ce béton possède-t-il ?",
    "o": [
     "Il durcit même sous l'eau",
     "Il flotte sur l'eau",
     "Il conduit l'électricité"
    ],
    "r": 0,
    "e": "Le texte souligne qu'il durcit sous l'eau et résiste au temps."
   },
   {
    "q": "Comment les granulats évoluent-ils vers le sommet ?",
    "o": [
     "Ils deviennent plus légers, jusqu'à la pierre ponce",
     "Ils deviennent plus lourds et plus denses",
     "Ils sont remplacés par du bois cloué"
    ],
    "r": 0,
    "e": "La base est lourde, le sommet utilise des matériaux légers."
   },
   {
    "q": "À quoi servent les caissons creux à l'intérieur ?",
    "o": [
     "À alléger la voûte et répartir les efforts",
     "À amplifier la voix des orateurs",
     "À évacuer l'eau de pluie"
    ],
    "r": 0,
    "e": "Ces cases en retrait allègent la coupole et répartissent les charges."
   },
   {
    "q": "Comment l'épaisseur de la paroi varie-t-elle ?",
    "o": [
     "Elle diminue de la base vers le sommet",
     "Elle augmente vers le sommet",
     "Elle reste constante partout"
    ],
    "r": 0,
    "e": "La paroi est épaisse aux fondations et plus mince en haut."
   },
   {
    "q": "Quel diamètre l'oculus atteint-il ?",
    "o": [
     "Plus de huit mètres",
     "Plus de deux mètres",
     "Plus de quinze mètres"
    ],
    "r": 0,
    "e": "Le texte indique une ouverture de plus de huit mètres."
   },
   {
    "q": "À quoi sert l'oculus ?",
    "o": [
     "À laisser entrer le jour et à alléger le centre",
     "À servir de cheminée pour la fumée",
     "À supporter un lanternon de bronze"
    ],
    "r": 0,
    "e": "L'ouverture éclaire l'intérieur et allège le sommet de la voûte."
   },
   {
    "q": "Quelle impression la géométrie du sol produit-elle ?",
    "o": [
     "Celle d'entrer dans une sphère parfaite",
     "Celle de descendre dans une crypte",
     "Celle de sortir à ciel ouvert"
    ],
    "r": 0,
    "e": "La sphère prolongée jusqu'au pavement crée cette sensation."
   },
   {
    "q": "Quand le temple est-il devenu une église ?",
    "o": [
     "Au début du VIIe siècle",
     "Au début du XVIe siècle",
     "Au IIIe siècle"
    ],
    "r": 0,
    "e": "Le texte situe cette transformation au début du VIIe siècle."
   },
   {
    "q": "Pourquoi cette transformation a-t-elle sans doute sauvé l'édifice ?",
    "o": [
     "Parce qu'un lieu de culte en usage échappe à la destruction",
     "Parce que l'Église a financé des renforts métalliques",
     "Parce que le bâtiment a été vidé de ses statues"
    ],
    "r": 0,
    "e": "Un édifice toujours utilisé est moins exposé à l'abandon et au pillage."
   },
   {
    "q": "Pourquoi les ingénieurs étudient-ils ces bétons anciens ?",
    "o": [
     "Pour réparer des ouvrages modernes",
     "Pour reconstruire des temples à l'identique",
     "Pour fabriquer des ciments décoratifs"
    ],
    "r": 0,
    "e": "La dernière partie mentionne cet intérêt pour la réparation."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Les raisons techniques de la solidité d'une coupole antique",
     "La vie quotidienne dans la Rome impériale",
     "Les techniques de taille du marbre"
    ],
    "r": 0,
    "e": "Le texte explique matériaux, forme et allègement de la coupole."
   },
   {
    "q": "Pourquoi l'auteur compare-t-il la coupole à un terrain de football ?",
    "o": [
     "Pour rendre sensible une dimension difficile à imaginer",
     "Pour suggérer que le bâtiment servait de stade",
     "Pour critiquer l'usage actuel du monument"
    ],
    "r": 0,
    "e": "La comparaison donne une échelle concrète au diamètre."
   },
   {
    "q": "Qui avait fait élever un temple sur le site avant Hadrien ?",
    "o": [
     "Agrippa",
     "Auguste",
     "Trajan"
    ],
    "r": 0,
    "e": "Le texte attribue le premier temple à Agrippa, vers 27 avant Jésus-Christ."
   },
   {
    "q": "Comment la maçonnerie fraîche de la voûte était-elle soutenue ?",
    "o": [
     "Par un remblai intérieur évacué par l'oculus",
     "Par un échafaudage suspendu à la façade",
     "Par des poutres de chêne laissées en place"
    ],
    "r": 0,
    "e": "Le remblai intérieur servait de cintre, puis était retiré."
   },
   {
    "q": "Quel architecte s'inspire du Panthéon pour Sainte-Geneviève ?",
    "o": [
     "Soufflot",
     "Palladio",
     "Brunelleschi"
    ],
    "r": 0,
    "e": "Soufflot s'en souvient pour l'église devenue le Panthéon de Paris."
   }
  ]
 },
 {
  "id": "d2",
  "theme": "arts",
  "niveau": 4,
  "titre": "Le point de fuite qui a ouvert une fenêtre sur le monde",
  "corps": "Sur un mur de Florence, vers 1427, une fresque représente une chapelle en trompe-l'œil : le plafond semble s'enfoncer et les lignes convergent vers un même endroit. Cette Trinité de Masaccio compte parmi les premiers grands effets de perspective linéaire de la peinture européenne.\n\nL'invention est attribuée à Filippo Brunelleschi, l'architecte du dôme de la cathédrale de Florence. Vers 1420, il aurait réalisé une expérience restée célèbre : peindre le baptistère voisin sur un panneau, percer un trou dans ce panneau, puis regarder la peinture à travers le trou en tenant un miroir. En faisant glisser le miroir, le spectateur voyait l'image peinte se superposer exactement à l'édifice réel. La démonstration prouvait qu'une construction géométrique pouvait imiter la vision.\n\nLe principe tient en peu de mots. On imagine une surface plane, le tableau, placée entre l'œil et la scène. Chaque rayon visuel traverse ce plan en un point, et ce point fixe la place de l'objet sur la peinture. Les lignes parallèles de la scène, elles, semblent se rejoindre à l'horizon : ce rendez-vous porte le nom de point de fuite.\n\nLeon Battista Alberti donne au procédé sa forme écrite. Dans De pictura, achevé en 1435, il explique comment tracer un quadrillage au sol et construire un espace cohérent. Le peintre devient un géomètre : la profondeur se calcule, elle ne s'improvise plus par des raccourcis approximatifs.\n\nLa construction d'un espace perspectif suit une méthode réglée. Le peintre trace d'abord la ligne d'horizon, à la hauteur de l'œil du spectateur, puis place sur cette ligne le point de fuite. Il fait converger vers lui les lignes du sol, du plafond et des murs, ce qui donne la direction de la profondeur. Reste à fixer les distances : un second point, dit point de distance, sert à reporter les largeurs et à graduer le quadrillage. Sans cette graduation, les carreaux d'un pavement s'espacent au hasard et l'illusion se brise.\n\nLe procédé règle aussi la taille des figures. Un homme debout à dix mètres doit paraître deux fois plus petit qu'un homme placé à cinq mètres : la perspective impose donc une échelle continue, alors que la peinture médiévale modulait la taille selon l'importance du personnage. Certains commanditaires s'en inquiètent, car un saint relégué au second plan y devient minuscule.\n\nLes peintres ne s'arrêtent pas aux lignes. Léonard de Vinci observe que l'air bleuit et efface les contours des objets lointains : c'est la perspective aérienne, qui complète la géométrie par une gamme de tons plus pâles. D'autres jouent avec la règle jusqu'à la retourner, comme Hans Holbein, qui glisse dans Les Ambassadeurs, en 1533, un crâne étiré que l'on ne déchiffre qu'en regardant le tableau de biais. L'anamorphose montre ainsi que la perspective est une convention calculable, et non une copie fidèle de la vision.\n\nCette convention a été critiquée. Les historiens de l'art ont montré qu'elle suppose un œil unique et immobile, alors que la vision réelle combine deux yeux et des mouvements permanents. Un tableau construit pour un point de vue précis se déforme dès que le spectateur se décale. La photographie, au XIXe siècle, a repris cette géométrie à son compte, puis le cinéma l'a mise en mouvement. Les images de synthèse appliquent aujourd'hui les mêmes formules, tout en pouvant les abandonner pour proposer des espaces impossibles.\n\nL'effet est si convaincant qu'il gagne toute l'Europe, puis se met au service du décor théâtral et de la scénographie. Deux siècles plus tard, la règle est si bien installée dans les ateliers que certains peintres cherchent à s'en libérer. Mais le regard occidental garde cette habitude : devant une image, nous cherchons spontanément où les lignes se rejoignent.",
  "q": [
   {
    "q": "Qui a peint la Trinité évoquée au début du texte ?",
    "o": [
     "Masaccio",
     "Brunelleschi",
     "Alberti"
    ],
    "r": 0,
    "e": "Le texte attribue cette fresque de Florence à Masaccio."
   },
   {
    "q": "Vers quelle date cette fresque a-t-elle été réalisée ?",
    "o": [
     "Vers 1427",
     "Vers 1527",
     "Vers 1327"
    ],
    "r": 0,
    "e": "Le texte la date des environs de 1427."
   },
   {
    "q": "À qui l'invention de la perspective linéaire est-elle attribuée ?",
    "o": [
     "À Filippo Brunelleschi",
     "À Leon Battista Alberti",
     "À Masaccio"
    ],
    "r": 0,
    "e": "Le texte l'attribue à Brunelleschi, architecte du dôme de Florence."
   },
   {
    "q": "Quel édifice Brunelleschi fait-il figurer sur son panneau ?",
    "o": [
     "Le baptistère voisin",
     "La cathédrale elle-même",
     "Le palais de la ville"
    ],
    "r": 0,
    "e": "Il peint le baptistère proche de la cathédrale de Florence."
   },
   {
    "q": "En quoi consistait son expérience ?",
    "o": [
     "Peindre un édifice, percer un trou et comparer avec un miroir",
     "Projeter l'ombre d'un bâtiment sur un mur blanc",
     "Mesurer la hauteur des colonnes avec une corde"
    ],
    "r": 0,
    "e": "Le panneau percé, regardé avec un miroir, superposait l'image à l'édifice."
   },
   {
    "q": "Que prouvait la superposition de l'image et du bâtiment ?",
    "o": [
     "Qu'une construction géométrique peut imiter la vision",
     "Qu'un miroir déforme les couleurs",
     "Qu'un panneau de bois se courbe avec l'humidité"
    ],
    "r": 0,
    "e": "La coïncidence des deux images validait la construction géométrique."
   },
   {
    "q": "Où se situe le point de fuite ?",
    "o": [
     "À l'horizon, là où convergent les lignes parallèles",
     "Au centre exact de chaque tableau",
     "Derrière le spectateur, hors du cadre"
    ],
    "r": 0,
    "e": "Le texte le définit comme le point de rendez-vous des lignes parallèles à l'horizon."
   },
   {
    "q": "Quel ouvrage expose la méthode ?",
    "o": [
     "De pictura",
     "La Trinité",
     "Le Traité du dôme"
    ],
    "r": 0,
    "e": "Alberti expose le procédé dans De pictura."
   },
   {
    "q": "En quelle année De pictura est-il achevé ?",
    "o": [
     "1435",
     "1535",
     "1335"
    ],
    "r": 0,
    "e": "Le texte donne l'année 1435."
   },
   {
    "q": "Que propose Alberti pour construire l'espace ?",
    "o": [
     "Tracer un quadrillage au sol",
     "Multiplier les sources de lumière",
     "Peindre toutes les figures de même taille"
    ],
    "r": 0,
    "e": "Le quadrillage au sol sert de base au calcul de la profondeur."
   },
   {
    "q": "Quel rôle nouveau le peintre acquiert-il ?",
    "o": [
     "Celui d'un géomètre qui calcule la profondeur",
     "Celui d'un artisan qui copie sans règles",
     "Celui d'un architecte qui dirige le chantier"
    ],
    "r": 0,
    "e": "Le texte oppose le calcul de la profondeur à l'improvisation des raccourcis."
   },
   {
    "q": "Dans quels domaines l'effet se diffuse-t-il ensuite ?",
    "o": [
     "Le décor théâtral et la scénographie",
     "Les manuscrits religieux uniquement",
     "La mosaïque de pavement"
    ],
    "r": 0,
    "e": "Le texte cite le décor théâtral et la scénographie."
   },
   {
    "q": "Que se passe-t-il deux siècles plus tard ?",
    "o": [
     "La règle devient si courante que certains veulent s'en libérer",
     "Le procédé est oublié puis redécouvert au XIXe siècle",
     "L'Église interdit son usage dans les églises"
    ],
    "r": 0,
    "e": "Devenue académique, la règle suscite des peintres désireux de s'en affranchir."
   },
   {
    "q": "Pourquoi Brunelleschi perce-t-il un trou dans son panneau ?",
    "o": [
     "Pour placer l'œil exactement au point de vue choisi",
     "Pour laisser passer la lumière du jour",
     "Pour accrocher le panneau contre le mur"
    ],
    "r": 0,
    "e": "Le trou impose un œil unique et fixe, condition de la comparaison."
   },
   {
    "q": "Que peut-on déduire du fait que la méthode soit publiée dans un traité ?",
    "o": [
     "Qu'elle devient une technique transmissible, non un secret d'atelier",
     "Qu'elle était réservée aux architectes",
     "Qu'elle exigeait un matériel très coûteux"
    ],
    "r": 0,
    "e": "Un traité écrit diffuse une méthode au-delà du cercle des initiés."
   },
   {
    "q": "Pourquoi certains peintres ont-ils voulu se libérer de la règle ?",
    "o": [
     "Parce qu'elle imposait un cadre devenu trop contraignant",
     "Parce que sa géométrie était fausse",
     "Parce que le public ne reconnaissait plus les sujets"
    ],
    "r": 0,
    "e": "Une règle trop installée finit par brider ceux qui veulent explorer autre chose."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La naissance, le principe et la diffusion de la perspective linéaire",
     "La biographie complète de Brunelleschi",
     "La fabrication des couleurs à la Renaissance"
    ],
    "r": 0,
    "e": "Le texte suit le procédé de son invention à sa banalisation."
   },
   {
    "q": "Quelle conséquence la perspective a-t-elle sur la taille des figures ?",
    "o": [
     "Elle impose une échelle continue liée à la distance",
     "Elle conserve la taille selon le rang social",
     "Elle rend toutes les figures égales"
    ],
    "r": 0,
    "e": "Un personnage lointain doit paraître plus petit, quelle que soit son importance."
   },
   {
    "q": "Qu'est-ce que la perspective aérienne décrite par Léonard ?",
    "o": [
     "L'effet bleuté qui efface les contours lointains",
     "La déformation des bords du tableau",
     "Le flou produit par le vernis vieilli"
    ],
    "r": 0,
    "e": "L'air bleuit et estompe les objets éloignés."
   },
   {
    "q": "Quel tableau de Holbein est cité pour l'anamorphose ?",
    "o": [
     "Les Ambassadeurs",
     "La Joconde",
     "La Trinité"
    ],
    "r": 0,
    "e": "Le crâne étiré des Ambassadeurs, peint en 1533, n'apparaît que de biais."
   },
   {
    "q": "Quelle critique est adressée à la perspective ?",
    "o": [
     "Elle suppose un œil unique et immobile",
     "Elle exagère la taille des objets proches",
     "Elle interdit de peindre des paysages"
    ],
    "r": 0,
    "e": "La vision réelle combine deux yeux et des mouvements incessants."
   }
  ]
 },
 {
  "id": "d7",
  "theme": "arts",
  "niveau": 4,
  "titre": "Ce que le plomb retient dans un vitrail",
  "corps": "Dans une cathédrale, la lumière traverse le verre coloré et projette des taches rouges et bleues sur les dalles. Un vitrail n'est pourtant pas une peinture transparente : c'est un assemblage de morceaux de verre teinté dans la masse, réunis par des bandes de plomb.\n\nLa couleur naît au moment où le verre est encore liquide. Les verriers ajoutent des oxydes métalliques à la pâte : le cobalt donne les bleus profonds, le cuivre produit des verts ou des rouges selon la préparation, le manganèse des violets, le fer des bruns et des jaunes. Certains tons, comme le rouge rubis, sont si difficiles à obtenir que leur secret a fait la réputation de quelques ateliers.\n\nLe verre est ensuite découpé. Le maître verrier trace son dessin sur un carton, puis taille chaque pièce en suivant le contour. Les détails du visage ou des mains ne sont pas peints avec de la couleur opaque : on dépose une grisaille, une fine couche d'oxyde, que l'on cuit pour qu'elle adhère. Cette cuisson, à plusieurs centaines de degrés, oblige à cuire chaque pièce séparément, car chaque verre réagit différemment à la chaleur.\n\nVient le montage. Les pièces sont serties dans des profilés de plomb en forme de H, soudés aux intersections. Le plomb est mou, résistant et se déforme sans casser le verre : il absorbe les vibrations et les dilatations. Des barres de fer horizontales, les vergettes, traversent le panneau pour l'empêcher de se courber sous son propre poids.\n\nLes grandes verrières du XIIe et du XIIIe siècle, à Chartres ou à la Sainte-Chapelle, reposent sur cette technique. Avec le temps, la grisaille s'est parfois effacée et le plomb s'est oxydé ; les restaurateurs remplacent alors les pièces brisées en retrouvant la teinte d'origine.\n\nLe verre lui-même demandait un savoir-faire de souffleur. Jusqu'au XIXe siècle, les plaques étaient obtenues en soufflant une bulle, puis en l'ouvrant et en l'aplatissant : on obtenait un disque ou un cylindre déroulé, dont l'épaisseur variait. Ces irrégularités, aujourd'hui recherchées, gênaient autrefois la régularité des teintes. Pour obtenir un rouge franc, les verriers soufflaient une mince couche de verre teinté sur un verre incolore, technique du verre plaqué qui économisait un matériau très coûteux.\n\nL'usage de l'image a suscité des débats. On a longtemps répété que les vitraux étaient la Bible des illettrés, comme si les fidèles ne pouvaient accéder au texte sacré autrement. Les historiens nuancent cette idée : les verrières montrent des scènes que les prédicateurs commentent, mais elles affirment aussi la richesse d'un chapitre, la générosité d'un donateur et la puissance d'un évêque. À Saint-Denis, l'abbé Suger fait placer vers 1140 des vitraux qui célèbrent la lumière divine et, du même geste, la grandeur de son abbaye.\n\nLa pose exige enfin une étanchéité parfaite. Le panneau est fixé dans une armature de fer, calé par un mastic souple, et la fenêtre est close par un châssis. Un vitrail mal joint laisse entrer la pluie, qui ronge le mortier et décolle les grisailles. Les campagnes de restauration commencent donc par une dépose complète, pièce par pièce, avec un relevé photographique avant démontage.\n\nUn vitrail est donc moins une image qu'une charpente : le plomb porte, le verre colore, la lumière compose. C'est cette alliance qui explique la durée de vie de certains panneaux, traversant huit siècles sans perdre leur éclat.",
  "q": [
   {
    "q": "Comment le verre d'un vitrail est-il coloré ?",
    "o": [
     "Dans la masse, par des oxydes métalliques",
     "Par une peinture appliquée après cuisson",
     "Par un film plastique collé au verre"
    ],
    "r": 0,
    "e": "La couleur est obtenue en ajoutant des oxydes à la pâte de verre."
   },
   {
    "q": "Quel oxyde donne les bleus profonds ?",
    "o": [
     "Le cobalt",
     "Le cuivre",
     "Le manganèse"
    ],
    "r": 0,
    "e": "Le texte attribue les bleus au cobalt."
   },
   {
    "q": "Quel oxyde produit des violets ?",
    "o": [
     "Le manganèse",
     "Le fer",
     "Le cobalt"
    ],
    "r": 0,
    "e": "Le manganèse est cité pour les violets."
   },
   {
    "q": "Quels tons le fer donne-t-il ?",
    "o": [
     "Des bruns et des jaunes",
     "Des bleus et des verts",
     "Des rouges et des violets"
    ],
    "r": 0,
    "e": "Le texte associe le fer aux bruns et aux jaunes."
   },
   {
    "q": "Quel ton est présenté comme particulièrement difficile à obtenir ?",
    "o": [
     "Le rouge rubis",
     "Le bleu pâle",
     "Le vert olive"
    ],
    "r": 0,
    "e": "Le rouge rubis a fait la réputation de certains ateliers."
   },
   {
    "q": "Sur quoi le maître verrier trace-t-il son dessin ?",
    "o": [
     "Sur un carton",
     "Sur le verre lui-même",
     "Sur un mur de la nef"
    ],
    "r": 0,
    "e": "Le dessin est préparé sur un carton, puis les pièces sont taillées."
   },
   {
    "q": "Qu'est-ce que la grisaille ?",
    "o": [
     "Une fine couche d'oxyde cuite sur le verre",
     "Un ciment qui joint les pièces",
     "Un métal ajouté dans le plomb"
    ],
    "r": 0,
    "e": "La grisaille sert à peindre les détails et se fixe par cuisson."
   },
   {
    "q": "Pourquoi chaque pièce est-elle cuite séparément ?",
    "o": [
     "Parce que chaque verre réagit différemment à la chaleur",
     "Parce que le four est trop petit",
     "Parce que la grisaille sèche très vite"
    ],
    "r": 0,
    "e": "Des réactions différentes au feu imposent des cuissons séparées."
   },
   {
    "q": "De quelle forme sont les profilés de plomb ?",
    "o": [
     "En H",
     "En U",
     "En T"
    ],
    "r": 0,
    "e": "Le texte décrit des profilés en forme de H."
   },
   {
    "q": "Quelle qualité du plomb est mise en avant ?",
    "o": [
     "Il se déforme sans casser le verre",
     "Il est plus dur que le verre",
     "Il devient transparent à la cuisson"
    ],
    "r": 0,
    "e": "Sa souplesse absorbe vibrations et dilatations."
   },
   {
    "q": "À quoi servent les vergettes ?",
    "o": [
     "À empêcher le panneau de se courber",
     "À maintenir les vitraux fermés la nuit",
     "À fixer le panneau au mur de pierre"
    ],
    "r": 0,
    "e": "Ces barres horizontales raidissent l'ensemble."
   },
   {
    "q": "Quels monuments le texte cite-t-il ?",
    "o": [
     "Chartres et la Sainte-Chapelle",
     "Notre-Dame de Paris et Reims",
     "Mont-Saint-Michel et Vézelay"
    ],
    "r": 0,
    "e": "Ces deux édifices illustrent les verrières des XIIe et XIIIe siècles."
   },
   {
    "q": "Quel problème les restaurateurs rencontrent-ils ?",
    "o": [
     "La grisaille s'efface et le plomb s'oxyde",
     "Le verre devient opaque au soleil",
     "Les couleurs pâlissent à cause du froid"
    ],
    "r": 0,
    "e": "Le texte mentionne ces deux dégradations."
   },
   {
    "q": "Quel effet la lumière produit-elle dans l'édifice ?",
    "o": [
     "Elle projette des taches rouges et bleues sur les dalles",
     "Elle chauffe progressivement la pierre",
     "Elle empêche de lire à l'intérieur"
    ],
    "r": 0,
    "e": "Le premier paragraphe décrit ces taches colorées."
   },
   {
    "q": "Pourquoi le vitrail est-il comparé à une charpente ?",
    "o": [
     "Parce que le plomb y joue un rôle porteur",
     "Parce qu'il est posé sur des poutres de chêne",
     "Parce qu'il soutient la voûte de l'église"
    ],
    "r": 0,
    "e": "Le plomb assure la tenue mécanique de l'assemblage."
   },
   {
    "q": "Pourquoi les verriers devaient-ils maîtriser la chimie du verre ?",
    "o": [
     "Parce que la couleur dépendait du dosage des oxydes",
     "Parce que le verre devait être incolore à la base",
     "Parce que la cuisson changeait l'épaisseur des pièces"
    ],
    "r": 0,
    "e": "La teinte résultait directement de la composition de la pâte."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La fabrication d'un vitrail, du verre teinté au montage au plomb",
     "L'histoire des cathédrales gothiques",
     "Le commerce du plomb au Moyen Âge"
    ],
    "r": 0,
    "e": "Le texte détaille les étapes techniques de réalisation."
   },
   {
    "q": "Pourquoi l'auteur termine-t-il sur la durée de vie des panneaux ?",
    "o": [
     "Pour souligner la solidité de cette alliance de matériaux",
     "Pour annoncer la fin d'un savoir-faire",
     "Pour critiquer les restaurations modernes"
    ],
    "r": 0,
    "e": "La conclusion met en valeur la robustesse de l'assemblage."
   },
   {
    "q": "Comment obtenait-on les plaques de verre avant le XIXe siècle ?",
    "o": [
     "En soufflant une bulle puis en l'aplatissant",
     "En coulant le verre dans des moules de sable",
     "En sciant des blocs de verre massif"
    ],
    "r": 0,
    "e": "La bulle soufflée était ouverte puis étalée en plaque."
   },
   {
    "q": "À quoi servait la technique du verre plaqué ?",
    "o": [
     "À poser une mince couche teintée sur un verre incolore",
     "À rendre le verre incassable",
     "À supprimer les bulles de la pâte"
    ],
    "r": 0,
    "e": "Elle économisait un verre coloré très coûteux, notamment pour le rouge."
   },
   {
    "q": "Qui a fait placer des vitraux à Saint-Denis vers 1140 ?",
    "o": [
     "L'abbé Suger",
     "L'évêque de Chartres",
     "Le roi Philippe Auguste"
    ],
    "r": 0,
    "e": "Le texte attribue cette commande à l'abbé Suger."
   }
  ]
 },
 {
  "id": "c12",
  "theme": "espace",
  "niveau": 4,
  "titre": "Douze avril 1961, cent huit minutes en orbite",
  "corps": "Le 12 avril 1961, peu après neuf heures du matin, heure de Moscou, une fusée s'arrache du cosmodrome de Baïkonour, dans les steppes du Kazakhstan. À son sommet, une sphère de moins de deux mètres et demi de diamètre abrite un seul passager, Youri Gagarine, vingt-sept ans. L'homme ne pilote pas vraiment : le vaisseau, nommé Vostok 1, est commandé depuis le sol. Il devient pourtant le premier être humain à quitter l'atmosphère. L'annonce officielle ne viendra qu'après le succès.\n\nLe vol dure 108 minutes, soit un peu moins de deux heures. Le vaisseau effectue une seule révolution autour de la Terre, à une altitude maximale d'un peu plus de trois cents kilomètres. Gagarine observe et décrit la courbure de l'horizon, la couleur de la planète et l'obscurité du ciel. Il ne rapporte aucune sensation de chute, ce qui surprend les médecins, inquiets des effets de l'apesanteur sur un corps humain.\n\nLe retour est plus mouvementé que prévu. La capsule et le module de service devaient se séparer proprement ; un câble les retient un moment, et l'ensemble tournoie avant de se libérer. Gagarine s'éjecte ensuite et descend en parachute, comme le prévoyaient les premiers vols. L'éjection se fait vers sept kilomètres d'altitude, et la descente sous voile dure une dizaine de minutes. Les autorités soviétiques présenteront longtemps l'atterrissage comme un tout cohérent, par souci de prestige.\n\nRien n'a été laissé au hasard. Gagarine a été retenu en 1960 parmi un premier groupe d'une vingtaine de pilotes de chasse, après des mois d'examens médicaux et d'essais en centrifugeuse. Un doublon, Guerman Titov, suivait la même préparation, prêt à prendre sa place. Le vaisseau, lui, était entièrement automatique : la capsule sphérique ne se posait pas, et la commande manuelle restait verrouillée, réservée au cas où l'automatisme aurait échoué. Le vol, lui, ne prévoit aucune manœuvre : si le freinage échoue, l'engin redescend de lui-même en une dizaine de jours.\n\nLe compte à rebours s'achève à 9 h 07, heure de Moscou. La mise en orbite dure quelques minutes, pendant lesquelles le cosmonaute subit une accélération plusieurs fois supérieure à son poids. Le freinage est assuré par une rétrofusée tirée au-dessus de l'Afrique, puis la rentrée traverse l'atmosphère dans un halo de plasma. L'atterrissage a lieu à 10 h 55, dans la région de Saratov, non loin de la Volga : cent huit minutes, montre en main, du décollage au contact du sol.\n\nLe retentissement est immédiat. En pleine guerre froide, cet exploit affirme la supériorité technique de l'Union soviétique, quatre ans après le lancement du premier satellite, Spoutnik, en 1957. Les États-Unis accélèrent leur programme et fixent quelques semaines plus tard l'objectif d'un homme sur la Lune. Le 25 mai 1961, devant le Congrès, le président américain donne même une échéance : avant la fin de la décennie. Gagarine, lui, devient une icône mondiale et ne volera plus jamais dans l'espace.\n\nSon vol reste une rupture dans l'histoire des techniques. Avant lui, l'espace était un domaine d'objets ; après lui, il devient un lieu où l'on risque des vies. Les leçons du vol, notamment la nécessité d'automatiser ce qu'un homme ne peut pas accomplir en quelques minutes, ont façonné les programmes suivants. Le nom de Vostok, qui signifie Orient, est resté attaché à toute une série de vaisseaux soviétiques. Un Américain vole à son tour quelques semaines plus tard, sur une trajectoire plus modeste, sans accomplir d'orbite. Gagarine meurt en 1968 dans un accident d'avion d'entraînement, sans avoir revu l'orbite.",
  "q": [
   {
    "q": "Quelle est la date du vol de Gagarine ?",
    "o": [
     "Le 12 avril 1957",
     "Le 12 avril 1961",
     "Le 4 octobre 1961"
    ],
    "r": 1,
    "e": "Le vol a lieu le 12 avril 1961, quatre ans après Spoutnik."
   },
   {
    "q": "Depuis quel cosmodrome la fusée décolle-t-elle ?",
    "o": [
     "Cap Canaveral",
     "Baïkonour",
     "Plessetsk"
    ],
    "r": 1,
    "e": "Le décollage se fait depuis le cosmodrome de Baïkonour."
   },
   {
    "q": "Dans quel pays se trouve ce cosmodrome ?",
    "o": [
     "Au Kazakhstan",
     "En Ukraine",
     "En Russie"
    ],
    "r": 0,
    "e": "Le texte le situe dans les steppes du Kazakhstan."
   },
   {
    "q": "Quel âge a Gagarine au moment du vol ?",
    "o": [
     "Dix-neuf ans",
     "Trente-sept ans",
     "Vingt-sept ans"
    ],
    "r": 2,
    "e": "Le texte précise qu'il a vingt-sept ans lors du vol."
   },
   {
    "q": "Combien de temps dure le vol ?",
    "o": [
     "8 heures",
     "18 minutes",
     "108 minutes"
    ],
    "r": 2,
    "e": "Le vol dure 108 minutes, un peu moins de deux heures."
   },
   {
    "q": "Combien de révolutions autour de la Terre effectue-t-il ?",
    "o": [
     "Dix-sept",
     "Trois",
     "Une seule"
    ],
    "r": 2,
    "e": "Le vaisseau n'accomplit qu'une seule révolution autour de la Terre."
   },
   {
    "q": "Quelle altitude maximale le vaisseau atteint-il ?",
    "o": [
     "Environ 3 000 kilomètres",
     "Environ 30 kilomètres",
     "Environ 300 kilomètres"
    ],
    "r": 2,
    "e": "Le texte indique une altitude maximale d'environ 300 kilomètres."
   },
   {
    "q": "Comment le vaisseau est-il commandé ?",
    "o": [
     "Par un pilote embarqué",
     "Depuis le sol",
     "Par Gagarine seul"
    ],
    "r": 1,
    "e": "Vostok 1 est piloté depuis le sol : Gagarine ne commande pas vraiment."
   },
   {
    "q": "Comment Gagarine revient-il sur Terre ?",
    "o": [
     "Il s'éjecte et descend en parachute",
     "Il atterrit dans la capsule",
     "Il est récupéré en mer"
    ],
    "r": 0,
    "e": "Il s'éjecte du vaisseau et termine la descente en parachute."
   },
   {
    "q": "Quel incident marque la séparation de la capsule ?",
    "o": [
     "Le parachute ne s'ouvre pas",
     "Un câble retient les deux modules",
     "Un moteur prend feu"
    ],
    "r": 1,
    "e": "Un câble retient un moment capsule et module, qui tournoient avant de se libérer."
   },
   {
    "q": "Quel satellite l'URSS a-t-elle lancé en 1957 ?",
    "o": [
     "Explorer",
     "Vostok",
     "Spoutnik"
    ],
    "r": 2,
    "e": "Spoutnik, premier satellite artificiel, est lancé en 1957."
   },
   {
    "q": "Quel objectif les États-Unis fixent-ils après ce vol ?",
    "o": [
     "Une station orbitale permanente",
     "Un homme sur la Lune",
     "Un vol habité vers Mars"
    ],
    "r": 1,
    "e": "Quelques semaines plus tard, ils visent l'envoi d'un homme sur la Lune."
   },
   {
    "q": "En quelle année Gagarine meurt-il ?",
    "o": [
     "1971",
     "1968",
     "1961"
    ],
    "r": 1,
    "e": "Il meurt en 1968 dans un accident d'avion d'entraînement."
   },
   {
    "q": "À quelle heure le décollage a-t-il lieu, heure de Moscou ?",
    "o": [
     "À 9 h 07",
     "À 10 h 55",
     "À 6 h 07"
    ],
    "r": 0,
    "e": "Le compte à rebours s'achève à 9 h 07, heure de Moscou, soit 6 h 07 en temps universel."
   },
   {
    "q": "Dans quelle région Gagarine atterrit-il ?",
    "o": [
     "La région de Saratov",
     "La région de Moscou",
     "La région de Baïkonour"
    ],
    "r": 0,
    "e": "L'atterrissage a lieu à 10 h 55 dans la région de Saratov, non loin de la Volga."
   },
   {
    "q": "Pourquoi le vol de Gagarine est-il qualifié de rupture ?",
    "o": [
     "L'espace devient un lieu où l'on risque des vies",
     "Il prouve que l'espace est entièrement vide",
     "Il marque la fin de la conquête spatiale"
    ],
    "r": 0,
    "e": "Avant ce vol, l'espace n'était peuplé que d'objets ; désormais des vies humaines y sont engagées."
   },
   {
    "q": "Pourquoi l'atterrissage réel a-t-il été présenté autrement ?",
    "o": [
     "Pour cacher la mort du cosmonaute",
     "Parce que les archives étaient incomplètes",
     "Pour préserver l'image de réussite du programme"
    ],
    "r": 2,
    "e": "Le texte parle d'un souci de prestige : l'éjection était présentée comme un tout cohérent."
   },
   {
    "q": "Que suggère le texte sur la résistance du corps humain ?",
    "o": [
     "Il supporte l'apesanteur mieux que redouté",
     "Un pilote expérimenté aurait échoué",
     "L'apesanteur y est mortelle"
    ],
    "r": 0,
    "e": "Gagarine ne ressent aucune chute, ce qui surprend les médecins qui craignaient l'apesanteur."
   },
   {
    "q": "Quel est le sujet du texte ?",
    "o": [
     "La construction de la station Mir",
     "Le premier vol habité, son déroulement et sa portée",
     "Les débuts de la conquête de la Lune"
    ],
    "r": 1,
    "e": "Le texte raconte le vol de 1961, son déroulement technique et son retentissement."
   },
   {
    "q": "Quelle idée le texte défend-il sur le rôle de Gagarine ?",
    "o": [
     "Il fut surtout le passager d'une machine automatique",
     "Il a pris toutes les décisions du vol",
     "Il a refusé d'accomplir la mission"
    ],
    "r": 0,
    "e": "Le vaisseau étant commandé depuis le sol, son rôle fut celui d'un passager observateur."
   }
  ]
 },
 {
  "id": "c17",
  "theme": "espace",
  "niveau": 4,
  "titre": "Vénus, le croissant qui départageait deux mondes",
  "corps": "À l'automne 1610, Galilée braque sa lunette vers Vénus et découvre une chose inattendue : la planète présente des phases, comme la Lune. Tantôt un mince croissant, tantôt un disque presque plein. Et, détail décisif, elle paraît petite et ronde quand elle est loin, grande et en croissant quand elle est proche.\n\nLe modèle de Ptolémée, qui plaçait Vénus sur une orbite entre le Soleil et la Terre, interdisait ces phases. Une planète dont l'orbite entoure le Soleil ne peut montrer qu'un croissant : sa face éclairée reste tournée vers le Soleil, jamais vers la Terre. Copernic, lui, plaçait Vénus en orbite autour du Soleil, à l'intérieur de l'orbite terrestre. Cette géométrie autorise un cycle complet.\n\nLa géométrie explique aussi pourquoi l'observation était possible depuis la Terre. Vénus, plus proche du Soleil que nous, ne s'en écarte jamais beaucoup dans le ciel : on ne la voit qu'après le coucher ou avant le lever du Soleil, jamais au milieu de la nuit. Ce voisinage apparent obligeait à l'observer près de l'horizon, dans une turbulence qui brouille les contours. Galilée disposait d'une lunette qu'il avait taillée lui-même et qui grossissait une vingtaine de fois : assez pour distinguer un croissant d'un disque, trop peu pour se tromper de bonne foi.\n\nL'annonce fut d'abord une énigme. En décembre 1610, Galilée envoie à Kepler une phrase brouillée, un anagramme qu'il déchiffrera plus tard pour revendiquer la priorité : la formule cache l'observation des phases de Vénus. Cette manière de publier, courante à l'époque, protégeait l'auteur du plagiat tout en datant sa découverte. Une fois le message déchiffré, la priorité était acquise et la discussion pouvait commencer. Kepler, qui cherchait des arguments en faveur de Copernic, suivit l'affaire de près.\n\nGalilée comprend que les phases suffisent à trancher. Il les fait connaître par lettres dès 1610, puis les reprend dans le Dialogo de 1632, qui compare les systèmes. La variation de taille apparente, de plus de cinq fois entre position lointaine et position proche, s'explique par la distance, qui change beaucoup dans le modèle copernicien.\n\nIl fallut du temps. Les astronomes du Collège romain confirmèrent les phases en 1611, mais certains choisirent un compromis : un système où les planètes tournent autour du Soleil, lequel tourne autour de la Terre. Cette solution sauvait les apparences sans accorder à la Terre le mouvement qu'on lui refusait. Le compromis eut un succès durable : il gardait une Terre immobile tout en expliquant les phases, et il resta enseigné dans plusieurs universités.\n\nLes phases de Vénus ne prouvaient pas à elles seules que la Terre tourne, car le système de Tycho Brahe les prévoyait aussi. Elles ruinaient en revanche la version la plus simple de Ptolémée. C'est ce qu'on attend d'une bonne observation : non pas convaincre tout le monde, mais éliminer une possibilité et rétrécir l'espace des hypothèses acceptables.\n\nLa suite est moins philosophique. Les partisans du géocentrisme comprirent vite le danger : en 1616, l'ouvrage de Copernic est mis à l'index et Galilée reçoit l'ordre de ne plus défendre sa thèse. Le Saint-Office lui reprochait moins une erreur de calcul qu'une lecture des Écritures, et l'affaire ne devint un symbole que bien plus tard. Le Dialogo de 1632 passe pour une infraction, et le procès de 1633 se termine par un abjurement et une assignation à résidence près de Florence. Les phases, elles, se photographient aujourd'hui avec un petit télescope : la controverse a survécu aux hommes qui l'ont portée, pas aux faits.",
  "q": [
   {
    "q": "Que découvre Galilée en observant Vénus en 1610 ?",
    "o": [
     "Elle tourne sur elle-même en 24 heures",
     "Elle présente des phases comme la Lune",
     "Elle possède plusieurs satellites"
    ],
    "r": 1,
    "e": "Le texte décrit des phases, d'un mince croissant à un disque presque plein."
   },
   {
    "q": "Comment Vénus apparaît-elle lorsqu'elle est éloignée de la Terre ?",
    "o": [
     "Grande et en croissant",
     "Petite et en croissant",
     "Petite et presque ronde"
    ],
    "r": 2,
    "e": "Le texte note qu'elle paraît petite et ronde quand elle est loin."
   },
   {
    "q": "Comment Vénus apparaît-elle lorsqu'elle est proche de la Terre ?",
    "o": [
     "Grande et pleine",
     "Grande et en croissant",
     "Petite et pleine"
    ],
    "r": 1,
    "e": "Proche, la planète paraît grande et en croissant, ce qui contredit la taille constante."
   },
   {
    "q": "Où Ptolémée plaçait-il Vénus ?",
    "o": [
     "Entre le Soleil et la Terre",
     "Au-delà de Saturne",
     "Autour de la Lune"
    ],
    "r": 0,
    "e": "Dans ce modèle, Vénus orbite entre le Soleil et la Terre."
   },
   {
    "q": "Que prévoyait le modèle de Ptolémée pour les phases de Vénus ?",
    "o": [
     "Un cycle complet de phases",
     "Uniquement un croissant",
     "Aucune phase visible"
    ],
    "r": 1,
    "e": "Ce modèle n'autorisait qu'un croissant, jamais un disque presque plein."
   },
   {
    "q": "Où Copernic plaçait-il Vénus ?",
    "o": [
     "En orbite autour de la Terre",
     "Entre Mars et Jupiter",
     "En orbite autour du Soleil, à l'intérieur de l'orbite terrestre"
    ],
    "r": 2,
    "e": "Chez Copernic, Vénus tourne autour du Soleil, à l'intérieur de l'orbite de la Terre."
   },
   {
    "q": "Combien de fois la lunette de Galilée grossissait-elle ?",
    "o": [
     "Une centaine de fois",
     "Une vingtaine de fois",
     "Trois fois seulement"
    ],
    "r": 1,
    "e": "Il avait taillé lui-même une lunette grossissant une vingtaine de fois, assez pour voir un croissant."
   },
   {
    "q": "En quelle année Galilée fait-il ses observations ?",
    "o": [
     "1543",
     "1632",
     "1610"
    ],
    "r": 2,
    "e": "Les observations de Vénus datent de l'automne 1610."
   },
   {
    "q": "En quelle année paraît le Dialogo ?",
    "o": [
     "1632",
     "1610",
     "1613"
    ],
    "r": 0,
    "e": "Le texte situe le Dialogo, qui compare les systèmes, en 1632."
   },
   {
    "q": "Qui confirma les phases de Vénus en 1611 ?",
    "o": [
     "Kepler, à Prague",
     "Les astronomes du Collège romain",
     "L'observatoire de Greenwich"
    ],
    "r": 1,
    "e": "Les astronomes du Collège romain confirmèrent les phases dès 1611."
   },
   {
    "q": "De combien varie la taille apparente de Vénus ?",
    "o": [
     "De plus de cinq fois",
     "D'un facteur cent",
     "De moins de deux fois"
    ],
    "r": 0,
    "e": "Le texte indique une variation de plus de cinq fois entre les deux positions."
   },
   {
    "q": "Quel compromis géométrique certains astronomes adoptèrent-ils ?",
    "o": [
     "Le système de Tycho Brahe",
     "Le système d'Aristarque",
     "Le système des épicycles"
    ],
    "r": 0,
    "e": "Le compromis décrit correspond au système de Tycho Brahe, cité dans le dernier paragraphe."
   },
   {
    "q": "Que prévoyait aussi ce système compromis ?",
    "o": [
     "Les phases de Vénus",
     "L'absence de phases",
     "Des satellites autour de Vénus"
    ],
    "r": 0,
    "e": "Le texte précise que le système de Tycho prévoyait lui aussi les phases."
   },
   {
    "q": "Quelle hypothèse les phases de Vénus ruinaient-elles ?",
    "o": [
     "La rotation de la Terre sur elle-même",
     "L'existence des satellites de Jupiter",
     "La version la plus simple du modèle de Ptolémée"
    ],
    "r": 2,
    "e": "Elles éliminaient la version simple de Ptolémée, sans trancher sur le mouvement de la Terre."
   },
   {
    "q": "Pourquoi le modèle de Ptolémée interdisait-il les phases complètes ?",
    "o": [
     "Elle est trop proche du Soleil pour être éclairée",
     "Sa face éclairée reste tournée vers le Soleil, pas vers la Terre",
     "La Terre la masque en permanence"
    ],
    "r": 1,
    "e": "La géométrie de ce modèle ne permet pas de voir la face éclairée en entier depuis la Terre."
   },
   {
    "q": "Pourquoi la variation de taille apparente appuie-t-elle Copernic ?",
    "o": [
     "La distance à la Terre varie fortement dans ce modèle",
     "Le grossissement dépend de la lunette utilisée",
     "La planète grossit en s'éloignant de la Terre"
    ],
    "r": 0,
    "e": "Dans le modèle copernicien, la distance varie beaucoup, ce qui explique l'écart de taille observé."
   },
   {
    "q": "Pourquoi les phases n'ont-elles pas suffi à convaincre tout le monde ?",
    "o": [
     "Les observations étaient trop imprécises pour conclure",
     "Galilée refusait de publier ses mesures",
     "Un modèle concurrent, celui de Tycho, les prévoyait aussi"
    ],
    "r": 2,
    "e": "Le système de Tycho rendait compte des phases sans faire tourner la Terre."
   },
   {
    "q": "Pourquoi Vénus ne s'observe-t-elle jamais au milieu de la nuit ?",
    "o": [
     "Parce que la Lune la masque une partie du temps",
     "Parce qu'elle reste proche du Soleil dans le ciel",
     "Parce qu'elle tourne trop vite sur elle-même"
    ],
    "r": 1,
    "e": "Vénus ne s'écarte guère du Soleil : on la voit le soir ou le matin, jamais à la verticale de minuit."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Comment une observation a éliminé une hypothèse astronomique",
     "La construction des premières lunettes astronomiques",
     "La biographie de Galilée à Florence"
    ],
    "r": 0,
    "e": "Le texte suit une observation, sa géométrie et l'effet qu'elle produit sur les théories."
   },
   {
    "q": "Quelle idée l'auteur défend-il sur la valeur d'une preuve en astronomie ?",
    "o": [
     "Que les théories anciennes étaient absurdes",
     "Qu'une observation prouve toujours une théorie",
     "Qu'une bonne observation rétrécit l'éventail des hypothèses"
    ],
    "r": 2,
    "e": "L'auteur définit la valeur d'une observation par sa capacité à éliminer une possibilité."
   }
  ]
 },
 {
  "id": "c22",
  "theme": "espace",
  "niveau": 4,
  "titre": "Un rayon lumineux qui fait l'aller-retour jusqu'à la Lune",
  "corps": "En juillet 1969, les astronautes d'Apollo 11 déposent sur la Lune un panneau de rétro-réflecteurs, des prismes de verre qui renvoient la lumière exactement dans la direction d'où elle vient. Quatre autres panneaux suivront, dont deux déposés par des missions automatiques soviétiques. Depuis, des stations terrestres leur envoient des impulsions laser.\n\nL'idée n'est pas née avec les missions habitées. Dès 1962, alors que le laser à rubis vient d'être mis au point, une équipe américaine réussit à mesurer l'écho d'un tir sur la Lune, sans réflecteur posé : la surface lunaire renvoyait une infime partie de la lumière. La précision restait de l'ordre du kilomètre. Les prismes déposés ensuite ont changé l'échelle : en renvoyant le faisceau vers son point de départ, ils multiplient le signal reçu et permettent une mesure au centimètre.\n\nLe principe est d'une simplicité désarmante. Un télescope tire une impulsion très brève vers un point précis de la Lune ; quelques instants plus tard, quelques photons reviennent. Connaissant la vitesse de la lumière dans le vide, soit 299 792 458 mètres par seconde, on déduit la distance du temps de vol. Le trajet aller-retour dure environ deux secondes et demie. Sur des centaines de millions de photons envoyés, une poignée seulement revient : la plupart manquent la cible, qui reste très petite à cette distance, ou se perdent dans l'atmosphère. Il faut donc des lasers puissants, des télescopes de grand diamètre et un comptage très fin pour isoler le signal, souvent noyé dans le bruit de fond.\n\nLes stations de tir se comptent sur les doigts d'une main. L'observatoire de la Côte d'Azur, près de Grasse, en France, et celui d'Apache Point, au Nouveau-Mexique, figurent parmi les plus actifs. Le faisceau s'élargit en chemin et couvre plusieurs kilomètres à l'arrivée ; seul un petit nombre de photons touche les prismes, dont la dimension se compte en dizaines de centimètres. Leur principe optique repose sur des coins de cube : trois faces à angle droit renvoient le rayon par trois réflexions successives, presque quel que soit l'angle d'arrivée. Un panneau en aligne une centaine, et plusieurs panneaux posés à des endroits différents permettent de comparer des points éloignés du sol lunaire. Les campagnes se font par nuits entières, à raison de milliers de tirs, et seuls les échos revenus dans une fenêtre de temps très étroite sont retenus.\n\nLa distance moyenne obtenue, environ 384 400 kilomètres, n'est pas constante. La Lune décrit une orbite elliptique, et son éloignement varie de plusieurs dizaines de milliers de kilomètres au cours du mois ; les mesures laser, précises au centimètre, servent surtout à suivre des variations lentes. Ces relevés ont montré que la Lune s'éloigne de la Terre d'environ 3,8 centimètres par an, un effet des marées : la rotation terrestre ralentit à peine, et la durée du jour s'allonge de quelques millisecondes par siècle.\n\nLes mêmes données affinent les tests de la relativité générale et permettent de situer les stations au millimètre près, en combinant télémétrie lunaire et mesure du champ de gravité. Elles exigent un ciel clair et une Lune visible : pas de tir dans les nuages, ni quand l'astre est trop bas sur l'horizon.",
  "q": [
   {
    "q": "Quelle mission dépose le premier panneau de rétro-réflecteurs sur la Lune ?",
    "o": [
     "Apollo 11, en juillet 1969",
     "Lunokhod 1, en 1970",
     "Apollo 14, en 1971"
    ],
    "r": 0,
    "e": "Le texte situe ce dépôt en juillet 1969, lors de la mission Apollo 11."
   },
   {
    "q": "Comment ces prismes renvoient-ils la lumière ?",
    "o": [
     "Dans la direction exacte d'où elle vient",
     "Vers le point le plus brillant du ciel",
     "Dans toutes les directions à la fois"
    ],
    "r": 0,
    "e": "Ce sont des rétro-réflecteurs qui renvoient la lumière exactement dans sa direction d'origine."
   },
   {
    "q": "Combien de panneaux ont été déposés au total après Apollo 11 ?",
    "o": [
     "Dix autres panneaux",
     "Quatre autres panneaux",
     "Deux autres panneaux"
    ],
    "r": 1,
    "e": "Le texte annonce que quatre autres panneaux suivront, dont deux déposés par des missions soviétiques."
   },
   {
    "q": "Quel type de laser servit aux premiers tirs de 1962 ?",
    "o": [
     "Un laser à semi-conducteur",
     "Un laser à rubis",
     "Un laser à dioxyde de carbone"
    ],
    "r": 1,
    "e": "Le texte précise que le laser à rubis venait d'être mis au point lors de ces premiers essais."
   },
   {
    "q": "Quelle précision avaient les mesures de 1962, sans réflecteur ?",
    "o": [
     "De l'ordre du millimètre",
     "De l'ordre du centimètre",
     "De l'ordre du kilomètre"
    ],
    "r": 2,
    "e": "La surface lunaire renvoyait une infime partie de la lumière, avec une précision de l'ordre du kilomètre."
   },
   {
    "q": "Quelle est la vitesse de la lumière dans le vide ?",
    "o": [
     "299 792 458 mètres par seconde",
     "384 400 mètres par seconde",
     "150 000 kilomètres par seconde"
    ],
    "r": 0,
    "e": "Le texte donne 299 792 458 mètres par seconde comme vitesse de la lumière dans le vide."
   },
   {
    "q": "Combien de temps dure le trajet aller-retour d'une impulsion ?",
    "o": [
     "Environ deux secondes et demie",
     "Environ une demi-seconde",
     "Environ dix secondes"
    ],
    "r": 0,
    "e": "Le trajet aller-retour entre la station et la Lune dure environ deux secondes et demie."
   },
   {
    "q": "Où se trouve la station de tir française citée par le texte ?",
    "o": [
     "Près de Grasse, sur la Côte d'Azur",
     "Au Nouveau-Mexique",
     "Sur le plateau du Tibet"
    ],
    "r": 0,
    "e": "L'observatoire de la Côte d'Azur, près de Grasse, figure parmi les stations les plus actives."
   },
   {
    "q": "Quelle est la distance moyenne entre la Terre et la Lune ?",
    "o": [
     "Environ 3 844 000 kilomètres",
     "Environ 38 440 kilomètres",
     "Environ 384 400 kilomètres"
    ],
    "r": 2,
    "e": "Le texte retient une distance moyenne d'environ 384 400 kilomètres."
   },
   {
    "q": "Pourquoi cette distance moyenne varie-t-elle au cours du mois ?",
    "o": [
     "L'atmosphère terrestre la repousse",
     "La Lune décrit une orbite elliptique",
     "La Lune perd de sa masse chaque année"
    ],
    "r": 1,
    "e": "L'orbite lunaire est elliptique, ce qui fait varier l'éloignement de plusieurs dizaines de milliers de kilomètres."
   },
   {
    "q": "À quelle précision les mesures laser descendent-elles ?",
    "o": [
     "Au kilomètre près",
     "Au mètre près",
     "Au centimètre près"
    ],
    "r": 2,
    "e": "Le texte parle de mesures précises au centimètre, utiles pour suivre des variations lentes."
   },
   {
    "q": "De combien la Lune s'éloigne-t-elle de la Terre chaque année ?",
    "o": [
     "D'environ 38 centimètres",
     "D'environ 3,8 centimètres",
     "D'environ 3,8 mètres"
    ],
    "r": 1,
    "e": "Les relevés indiquent un éloignement d'environ 3,8 centimètres par an, attribué aux marées."
   },
   {
    "q": "Quelle cause le texte donne-t-il à cet éloignement ?",
    "o": [
     "L'effet des marées",
     "Le vent solaire",
     "La fonte des calottes polaires"
    ],
    "r": 0,
    "e": "Le texte attribue cet éloignement progressif à un effet des marées."
   },
   {
    "q": "Quelle conséquence cet effet a-t-il sur la rotation terrestre ?",
    "o": [
     "La Terre tourne de plus en plus vite",
     "L'axe des pôles se déplace de plusieurs degrés",
     "La durée du jour s'allonge de quelques millisecondes par siècle"
    ],
    "r": 2,
    "e": "La rotation terrestre ralentit à peine et le jour s'allonge de quelques millisecondes par siècle."
   },
   {
    "q": "Quel usage scientifique secondaire ces mesures ont-elles eu ?",
    "o": [
     "Mesurer la profondeur des océans",
     "Affiner les tests de la relativité générale",
     "Cartographier les déserts terrestres"
    ],
    "r": 1,
    "e": "Elles ont affiné les tests de la relativité générale et aidé à situer les stations au millimètre."
   },
   {
    "q": "Pourquoi faut-il un télescope de grand diamètre ?",
    "o": [
     "Pour grossir l'image des cratères",
     "Pour éviter la pollution lumineuse",
     "Pour capter la poignée de photons qui revient"
    ],
    "r": 2,
    "e": "Comme très peu de photons reviennent, il faut une grande surface de collecte et un comptage fin."
   },
   {
    "q": "Pourquoi la mesure ne donne-t-elle pas une distance unique ?",
    "o": [
     "Le laser change de vitesse dans l'air",
     "L'orbite elliptique fait varier l'écart",
     "Les prismes se déplacent sur la Lune"
    ],
    "r": 1,
    "e": "La distance varie de plusieurs dizaines de milliers de kilomètres, ce qui interdit une valeur unique."
   },
   {
    "q": "Pourquoi certains soirs ne peut-on pas tirer ?",
    "o": [
     "Les prismes sont éteints la nuit",
     "Le ciel couvert ou l'astre trop bas gênent la mesure",
     "Le laser ne fonctionne pas en hiver"
    ],
    "r": 1,
    "e": "La mesure exige un ciel clair et une Lune visible, ni dans les nuages ni trop bas sur l'horizon."
   },
   {
    "q": "Quel est le sujet principal de ce texte ?",
    "o": [
     "La course à l'espace entre les deux blocs",
     "La géologie des cratères lunaires",
     "La mesure laser de la distance Terre-Lune"
    ],
    "r": 2,
    "e": "Le texte explique le principe, les difficultés et les résultats de la télémétrie laser lunaire."
   },
   {
    "q": "Que veut démontrer l'auteur en citant 3,8 centimètres par an ?",
    "o": [
     "Une mesure assez fine pour révéler un effet lent",
     "Une erreur de mesure corrigée depuis",
     "Un risque de collision à long terme"
    ],
    "r": 0,
    "e": "Un déplacement si lent, mesuré au centimètre, illustre la précision exceptionnelle de la méthode."
   }
  ]
 },
 {
  "id": "d4",
  "theme": "géographie",
  "niveau": 4,
  "titre": "Le Danube, ce fleuve qui traverse dix pays",
  "corps": "Deux petits ruisseaux prennent naissance dans la Forêt-Noire, en Allemagne, à quelques kilomètres l'un de l'autre. Leur réunion forme le Danube, qui parcourt près de deux mille neuf cents kilomètres avant d'atteindre la mer Noire. C'est le deuxième fleuve d'Europe par la longueur, derrière la Volga.\n\nAucun autre grand cours d'eau du continent ne traverse autant de frontières. Le Danube baigne dix pays : l'Allemagne, l'Autriche, la Slovaquie, la Hongrie, la Croatie, la Serbie, la Roumanie, la Bulgarie, la Moldavie et l'Ukraine. Quatre capitales se trouvent sur ses rives : Vienne, Bratislava, Budapest et Belgrade.\n\nSon bassin versant est immense : il recueille les eaux d'une partie de la Suisse, de la Pologne et de la Tchéquie. Les affluents les plus puissants descendent des Alpes, comme l'Inn, ou traversent la grande plaine hongroise, comme la Tisza. En aval, le fleuve franchit les Portes de fer, un défilé entre la Serbie et la Roumanie où un barrage et deux écluses permettent aux bateaux de passer d'un niveau à l'autre.\n\nLa navigation y est ancienne et le fleuve reste une artère de transport. On y charge des céréales, du gravier, du charbon et des conteneurs. Les convois remontent parfois sur des centaines de kilomètres, et le Rhin, relié au Danube par un canal, ouvre une liaison continue entre la mer du Nord et la mer Noire.\n\nLe fleuve termine sa course dans un delta à cheval sur la Roumanie et l'Ukraine. Les bras se séparent, les roseaux envahissent les chenaux, l'eau douce ralentit et dépose ses limons. Ce labyrinthe abrite des centaines d'espèces d'oiseaux, dont des pélicans et des cormorans, ainsi qu'une flore aquatique rare. Une vaste partie du delta est classée réserve de biosphère.\n\nLe fleuve a longtemps servi de frontière. Les Romains y ont installé une ligne de défense, le limes, dont les traces ponctuent encore les rives ; au Moyen Âge, les péages se multipliaient le long du cours, chaque seigneur prélevant sa part sur les bateaux qui remontaient. La navigation moderne n'a été possible qu'au prix d'un travail d'aménagement commencé au XIXe siècle : dragages, endiguements, suppression des seuils rocheux.\n\nL'hydroélectricité a modifié le régime du fleuve. Les barrages produisent une part importante de l'électricité de plusieurs pays riverains, mais ils fractionnent le cours et transforment les tronçons en une succession de retenues. Entre la Slovaquie et la Hongrie, un grand aménagement a donné lieu à un conflit durable devant la Cour internationale de justice. En aval, les deux centrales qui encadrent les Portes de fer fonctionnent depuis les années 1970.\n\nLes crues restent une préoccupation majeure. Le fleuve a connu des montées spectaculaires, et les villes se protègent par des digues de plus en plus hautes. Or les hydrologues observent que l'artificialisation aggrave parfois le phénomène : en empêchant l'eau d'occuper ses plaines, on accélère son passage vers l'aval et l'on reporte le danger sur les riverains suivants.\n\nDes programmes de restauration tentent de revenir en arrière. Ils reconnectent des bras morts, abaissent certaines digues pour rendre au fleuve une partie de sa plaine inondable, et replantent des ripisylves capables de ralentir le courant. L'objectif n'est pas de rendre le Danube sauvage, ce qui n'aurait plus de sens, mais de lui laisser assez d'espace pour amortir les pics de crue et abriter une faune diversifiée.\n\nLe Danube reste pourtant fragile. Les barrages retiennent les sédiments qui reconstruisaient les berges, les digues empêchent le fleuve d'occuper ses plaines lors des crues, et les pollutions venues des villes et des champs descendent vers la mer. Les États riverains tentent désormais de coordonner leurs mesures, car un fleuve ne se gère pas pays par pays.",
  "q": [
   {
    "q": "Où le Danube prend-il sa source ?",
    "o": [
     "Dans la Forêt-Noire, en Allemagne",
     "Dans les Alpes autrichiennes",
     "Dans la plaine hongroise"
    ],
    "r": 0,
    "e": "Deux ruisseaux de la Forêt-Noire forment le fleuve."
   },
   {
    "q": "Dans quelle mer le Danube se jette-t-il ?",
    "o": [
     "La mer Noire",
     "La mer du Nord",
     "La mer Baltique"
    ],
    "r": 0,
    "e": "Le texte indique qu'il atteint la mer Noire."
   },
   {
    "q": "Quelle longueur le texte lui attribue-t-il ?",
    "o": [
     "Près de deux mille neuf cents kilomètres",
     "Près de mille neuf cents kilomètres",
     "Près de trois mille neuf cents kilomètres"
    ],
    "r": 0,
    "e": "Le texte mentionne environ deux mille neuf cents kilomètres."
   },
   {
    "q": "Quel fleuve d'Europe est plus long que le Danube ?",
    "o": [
     "La Volga",
     "Le Rhin",
     "Le Rhône"
    ],
    "r": 0,
    "e": "Le Danube est le deuxième fleuve d'Europe, derrière la Volga."
   },
   {
    "q": "Combien de pays le Danube traverse-t-il ?",
    "o": [
     "Dix",
     "Quatre",
     "Sept"
    ],
    "r": 0,
    "e": "Le texte énumère dix pays riverains."
   },
   {
    "q": "Combien de capitales se trouvent sur ses rives ?",
    "o": [
     "Quatre",
     "Deux",
     "Six"
    ],
    "r": 0,
    "e": "Vienne, Bratislava, Budapest et Belgrade, soit quatre capitales."
   },
   {
    "q": "Quelle capitale ne figure pas parmi les villes citées ?",
    "o": [
     "Prague",
     "Bratislava",
     "Belgrade"
    ],
    "r": 0,
    "e": "Prague est traversée par la Vltava ; le texte cite Vienne, Bratislava, Budapest et Belgrade."
   },
   {
    "q": "D'où viennent les affluents les plus puissants ?",
    "o": [
     "Des Alpes et de la plaine hongroise",
     "Des Carpates et de la mer Baltique",
     "Du Massif central et des Balkans"
    ],
    "r": 0,
    "e": "Le texte cite l'Inn, venu des Alpes, et la Tisza, de la plaine hongroise."
   },
   {
    "q": "Qu'est-ce que les Portes de fer ?",
    "o": [
     "Un défilé entre la Serbie et la Roumanie",
     "Un delta marécageux en Ukraine",
     "Un canal reliant le Rhin au Danube"
    ],
    "r": 0,
    "e": "Le texte décrit ce défilé équipé d'un barrage et de deux écluses."
   },
   {
    "q": "Combien d'écluses le texte mentionne-t-il aux Portes de fer ?",
    "o": [
     "Deux",
     "Une",
     "Quatre"
    ],
    "r": 0,
    "e": "Le passage est assuré par deux écluses."
   },
   {
    "q": "Quelles marchandises le texte cite-t-il ?",
    "o": [
     "Céréales, gravier, charbon et conteneurs",
     "Vin, sel et bois brut",
     "Pétrole, gaz et minerai de fer"
    ],
    "r": 0,
    "e": "Ces quatre types de cargaison figurent dans le quatrième paragraphe."
   },
   {
    "q": "Quel canal relie le Danube au Rhin ?",
    "o": [
     "Un canal qui ouvre une liaison entre mer du Nord et mer Noire",
     "Un canal qui mène à la mer Adriatique",
     "Un canal qui contourne le delta"
    ],
    "r": 0,
    "e": "Le texte évoque une liaison continue entre les deux mers."
   },
   {
    "q": "Où se trouve le delta du Danube ?",
    "o": [
     "Entre la Roumanie et l'Ukraine",
     "Entre la Serbie et la Hongrie",
     "Entre l'Autriche et la Slovaquie"
    ],
    "r": 0,
    "e": "Le delta est partagé entre ces deux pays."
   },
   {
    "q": "Quel statut protège une partie du delta ?",
    "o": [
     "Réserve de biosphère",
     "Parc national militaire",
     "Zone industrielle protégée"
    ],
    "r": 0,
    "e": "Le texte parle d'une vaste partie classée réserve de biosphère."
   },
   {
    "q": "Pourquoi les barrages posent-ils problème selon le texte ?",
    "o": [
     "Ils retiennent les sédiments qui reconstruisaient les berges",
     "Ils empêchent les bateaux de remonter le fleuve",
     "Ils réchauffent l'eau au détriment des poissons"
    ],
    "r": 0,
    "e": "La dernière partie lie les barrages à la perte de sédiments."
   },
   {
    "q": "Pourquoi les États riverains doivent-ils coordonner leurs mesures ?",
    "o": [
     "Parce qu'un fleuve ne se gère pas pays par pays",
     "Parce qu'un traité les y oblige depuis 1945",
     "Parce que la navigation est interdite sans accord"
    ],
    "r": 0,
    "e": "Le texte conclut sur la nécessité d'une gestion commune."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Le parcours du Danube et les usages de ce fleuve partagé",
     "La comparaison des fleuves européens par leur débit",
     "La pêche traditionnelle dans le delta roumain"
    ],
    "r": 0,
    "e": "Le texte suit le fleuve de sa source à son delta en décrivant ses usages."
   },
   {
    "q": "Pourquoi l'auteur insiste-t-il sur le nombre de pays traversés ?",
    "o": [
     "Pour montrer qu'aucun autre grand fleuve du continent n'en traverse autant",
     "Pour expliquer la longueur totale du fleuve",
     "Pour justifier le coût des écluses"
    ],
    "r": 0,
    "e": "Cette insistance souligne le caractère exceptionnel du partage."
   },
   {
    "q": "Qu'appelait-on le limes sur les rives du Danube ?",
    "o": [
     "Une ligne de défense romaine",
     "Un péage médiéval",
     "Une digue construite au XIXe siècle"
    ],
    "r": 0,
    "e": "Le texte désigne ainsi la fortification romaine frontalière."
   },
   {
    "q": "Quel effet les barrages ont-ils sur le cours du fleuve ?",
    "o": [
     "Ils le fractionnent en une succession de retenues",
     "Ils suppriment totalement les crues",
     "Ils accélèrent le courant sur tout le parcours"
    ],
    "r": 0,
    "e": "Les retenues morcellent le cours et modifient son régime."
   },
   {
    "q": "Pourquoi l'artificialisation peut-elle aggraver les crues ?",
    "o": [
     "Parce qu'elle empêche l'eau d'occuper ses plaines",
     "Parce qu'elle refroidit l'eau du fleuve",
     "Parce qu'elle réduit les précipitations en amont"
    ],
    "r": 0,
    "e": "L'eau gagne plus vite l'aval et le danger se déplace."
   }
  ]
 },
 {
  "id": "d9",
  "theme": "géographie",
  "niveau": 4,
  "titre": "La ligne invisible où l'eau choisit sa mer",
  "corps": "Une goutte de pluie tombe sur une crête, à quelques mètres d'un col. Selon le côté où elle roule, elle rejoindra la Méditerranée ou l'Atlantique. Cette ligne invisible qui sépare les grands bassins porte un nom : la ligne de partage des eaux.\n\nLe principe est simple, car l'eau descend toujours. Sur un relief, chaque point appartient à un bassin, c'est-à-dire au territoire dont les eaux finissent dans le même fleuve. Les limites entre bassins suivent les crêtes et les sommets, là où la pente change de sens. En plaine, ces limites deviennent presque indétectables, et il faut des relevés précis pour les tracer.\n\nUn même relief peut donc alimenter plusieurs mers. Aux États-Unis, un sommet du Montana reçoit des pluies qui partent vers le Pacifique, vers l'Atlantique et vers l'océan Arctique : on l'appelle pour cette raison le pic du triple partage. Le phénomène n'a rien d'exceptionnel en montagne, mais il frappe l'imagination.\n\nCette géographie a des conséquences pratiques. Un canal qui franchit une ligne de partage doit être alimenté en eau, car il ne peut pas compter sur les rivières du versant qu'il traverse. Le canal du Midi, achevé en 1681 sous la direction de Pierre-Paul Riquet, franchit le seuil de Naurouze entre l'Atlantique et la Méditerranée. Pour l'alimenter, Riquet a fait capter les eaux de la Montagne Noire et les conduire par un réseau de rigoles jusqu'au point le plus haut du tracé.\n\nLes cartes modernes représentent ces lignes avec précision. Elles servent à délimiter des territoires, à prévoir les crues et à savoir où aboutissent les pollutions. Une usine installée près d'une crête peut ainsi envoyer ses rejets dans deux régions différentes, ce que la topographie rend prévisible.\n\nLa notion de bassin versant se définit par son exutoire. Tout point d'un territoire appartient à un bassin si ses eaux finissent, après un trajet parfois long, au même lieu de sortie : un confluent, un estuaire, une lagune. Les limites suivent donc les lignes de crête, mais elles ne coïncident pas toujours avec elles. En terrain calcaire, l'eau s'infiltre et circule sous terre, parfois vers un autre versant : le partage des eaux souterraines peut alors se trouver à plusieurs kilomètres de celui des eaux de surface.\n\nLes cartographes représentent ces limites par des traits fins, souvent en pointillé, complétés par des flèches indiquant le sens d'écoulement. Sur un relief karstique, les tracés deviennent hypothétiques, car il faut suivre des colorants injectés dans les gouffres pour savoir où l'eau ressort. Les résultats surprennent parfois : une perte située sur un plateau alimente une source qui jaillit dans la vallée voisine, sous un autre bassin.\n\nLa gestion de l'eau s'appuie sur ces découpages. Les agences de bassin financent des travaux à l'échelle du territoire qui reçoit les effets, non à celle de la commune qui les produit. Une station d'épuration construite en amont améliore la qualité de l'eau à des dizaines de kilomètres en aval, et les habitants de l'aval n'ont aucun moyen d'agir directement sur elle.\n\nLes transferts d'eau compliquent encore la carte. Canaux d'irrigation, aqueducs, barrages qui dérivent une rivière vers une autre vallée : l'eau ne suit plus seulement la pente, elle suit aussi des décisions. Certains bassins reçoivent désormais des volumes venus d'ailleurs, ce qui brouille les bilans et nourrit des tensions entre usagers.\n\nLa prochaine fois que vous longerez un ruisseau, souvenez-vous qu'il appartient à un réseau immense, et que sa destination s'est décidée sur une pente, parfois à quelques mètres d'un autre ruisseau qui, lui, part vers une mer opposée.",
  "q": [
   {
    "q": "Qu'est-ce qu'une ligne de partage des eaux ?",
    "o": [
     "La limite entre deux bassins versants",
     "La frontière entre deux pays riverains",
     "Le tracé d'un canal entre deux mers"
    ],
    "r": 0,
    "e": "Elle sépare les territoires dont les eaux rejoignent des fleuves différents."
   },
   {
    "q": "Que suit cette ligne en montagne ?",
    "o": [
     "Les crêtes et les sommets",
     "Le fond des vallées",
     "Les routes pastorales"
    ],
    "r": 0,
    "e": "Elle passe là où la pente change de sens, sur les lignes de crête."
   },
   {
    "q": "Pourquoi ces limites sont-elles difficiles à voir en plaine ?",
    "o": [
     "Parce que le relief y est presque plat",
     "Parce que l'eau y coule sous terre",
     "Parce que les cartes les omettent"
    ],
    "r": 0,
    "e": "Sans pente marquée, la limite n'apparaît pas à l'œil."
   },
   {
    "q": "Dans quel État se trouve le pic du triple partage ?",
    "o": [
     "Le Montana",
     "Le Colorado",
     "Le Nevada"
    ],
    "r": 0,
    "e": "Le texte situe ce sommet dans le Montana."
   },
   {
    "q": "Vers quels océans les eaux de ce sommet partent-elles ?",
    "o": [
     "Le Pacifique, l'Atlantique et l'Arctique",
     "Le Pacifique et l'Indien seulement",
     "L'Atlantique et l'Antarctique"
    ],
    "r": 0,
    "e": "Trois océans sont cités pour ce point remarquable."
   },
   {
    "q": "Pourquoi un canal franchissant une ligne de partage doit-il être alimenté ?",
    "o": [
     "Parce qu'il ne peut compter sur les rivières du versant traversé",
     "Parce que l'eau du canal s'évapore trop vite",
     "Parce que les bateaux en consomment beaucoup"
    ],
    "r": 0,
    "e": "Le canal doit recevoir de l'eau venue d'ailleurs pour rester en eau."
   },
   {
    "q": "Qui a dirigé la construction du canal du Midi ?",
    "o": [
     "Pierre-Paul Riquet",
     "Vauban",
     "Colbert"
    ],
    "r": 0,
    "e": "Le texte attribue la direction des travaux à Riquet."
   },
   {
    "q": "En quelle année le canal du Midi est-il achevé ?",
    "o": [
     "1681",
     "1781",
     "1581"
    ],
    "r": 0,
    "e": "Le texte donne l'année 1681."
   },
   {
    "q": "Quel seuil le canal franchit-il ?",
    "o": [
     "Le seuil de Naurouze",
     "Le seuil de Bourgogne",
     "Le col du Lautaret"
    ],
    "r": 0,
    "e": "Le canal passe par le seuil de Naurouze."
   },
   {
    "q": "D'où vient l'eau qui alimente le canal ?",
    "o": [
     "De la Montagne Noire, conduite par des rigoles",
     "Des Pyrénées, par un aqueduc",
     "Du Tarn, par une pompe à vapeur"
    ],
    "r": 0,
    "e": "Riquet a fait capter les eaux de la Montagne Noire."
   },
   {
    "q": "Quelles mers le canal du Midi relie-t-il ?",
    "o": [
     "L'Atlantique et la Méditerranée",
     "La Manche et la mer du Nord",
     "La Méditerranée et la mer Noire"
    ],
    "r": 0,
    "e": "Le canal assure cette liaison entre les deux façades françaises."
   },
   {
    "q": "À quoi servent les lignes de partage sur les cartes modernes ?",
    "o": [
     "À délimiter des territoires et prévoir les crues",
     "À localiser les nappes souterraines",
     "À calculer la profondeur des fleuves"
    ],
    "r": 0,
    "e": "Le texte cite aussi la prévision des crues et le suivi des pollutions."
   },
   {
    "q": "Que peut-on dire des rejets d'une usine proche d'une crête ?",
    "o": [
     "Ils peuvent rejoindre deux régions différentes",
     "Ils restent toujours dans un seul bassin",
     "Ils s'infiltrent sans jamais rejoindre un cours d'eau"
    ],
    "r": 0,
    "e": "La position sur la crête détermine deux écoulements possibles."
   },
   {
    "q": "Pourquoi une goutte tombée sur une crête peut-elle finir dans deux mers ?",
    "o": [
     "Parce que quelques mètres de pente suffisent à changer de bassin",
     "Parce que la pluie se divise en deux à l'atterrissage",
     "Parce que les cols inversent le sens des rivières"
    ],
    "r": 0,
    "e": "La direction de la pente décide du bassin, même à faible distance."
   },
   {
    "q": "Que révèle l'exemple du canal du Midi ?",
    "o": [
     "Que l'ingénierie doit s'adapter à la ligne de partage",
     "Que les canaux se construisent toujours en montagne",
     "Que Riquet ignorait la topographie du seuil"
    ],
    "r": 0,
    "e": "Le captage des eaux de la Montagne Noire répond à cette contrainte."
   },
   {
    "q": "Pourquoi le texte parle-t-il d'une ligne « invisible » ?",
    "o": [
     "Parce qu'elle ne correspond à aucun tracé visible sur le terrain",
     "Parce qu'elle n'est connue que des géologues",
     "Parce qu'elle change de place chaque année"
    ],
    "r": 0,
    "e": "Rien ne la matérialise : seule la pente la définit."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Le principe des lignes de partage des eaux et leurs conséquences",
     "L'histoire des canaux français au XVIIe siècle",
     "Les méthodes de mesure du débit des fleuves"
    ],
    "r": 0,
    "e": "Le texte expose le principe, puis l'illustre par des cas concrets."
   },
   {
    "q": "Pourquoi l'auteur termine-t-il par une adresse au lecteur ?",
    "o": [
     "Pour rendre sensible un phénomène qu'on ne remarque pas",
     "Pour inviter à visiter le canal du Midi",
     "Pour avertir des dangers de la montagne"
    ],
    "r": 0,
    "e": "La chute transforme une notion abstraite en expérience quotidienne."
   },
   {
    "q": "Qu'appelle-t-on l'exutoire d'un bassin versant ?",
    "o": [
     "Le point de sortie où les eaux se rassemblent",
     "La crête qui sépare deux vallées",
     "Le confluent le plus élevé du réseau"
    ],
    "r": 0,
    "e": "C'est le lieu où aboutissent les eaux du bassin."
   },
   {
    "q": "Pourquoi le partage des eaux souterraines diffère-t-il du partage de surface ?",
    "o": [
     "Parce que l'eau s'infiltre et circule sous un autre versant",
     "Parce que les nappes sont toujours salées",
     "Parce que la pluie tombe inégalement"
    ],
    "r": 0,
    "e": "En terrain calcaire, la circulation souterraine ignore les crêtes."
   },
   {
    "q": "Comment les hydrogéologues suivent-ils l'eau dans le calcaire ?",
    "o": [
     "En injectant des colorants dans les gouffres",
     "En mesurant la température des sources",
     "En photographiant les fissures"
    ],
    "r": 0,
    "e": "Le colorant ressort à une source et révèle le trajet."
   }
  ]
 },
 {
  "id": "c13",
  "theme": "histoire",
  "niveau": 4,
  "titre": "Gizeh : le chantier le mieux organisé de l'Antiquité",
  "corps": "Vers 2560 avant notre ère, sur le plateau de Gizeh, des équipes ont dressé un monument de 146 mètres de haut : la grande pyramide de Khéops. Elle est restée la construction la plus haute du monde pendant près de quatre millénaires. Ses 2,3 millions de blocs, dont certains pèsent plusieurs tonnes, ont été taillés, transportés et hissés sans roue ni poulie.\n\nL'image d'une masse d'esclaves fouettés, popularisée par Hérodote au Ve siècle avant notre ère, ne résiste pas aux fouilles. Les archéologues ont exhumé au sud du plateau une ville d'ouvriers : dortoirs, boulangeries, brasseries, ateliers de cuivre. Les ossements montrent des hommes nourris de pain, de poisson et de bière, et soignés pour des fractures. Un régime de travailleur nourri, pas celui d'une bête de somme.\n\nLe nombre d'ouvriers fait débat depuis deux siècles. Hérodote parle de cent mille hommes renouvelés tous les trois mois, ce qui suppose une rotation immense et un ravitaillement à la hauteur. Les estimations actuelles, fondées sur la surface de la ville d'ouvriers et sur le volume des rampes à bâtir, tournent autour de vingt mille personnes permanentes, renforcées par des contingents saisonniers. L'écart entre les deux chiffres n'est pas anecdotique : il sépare l'image d'une corvée de masse de celle d'un chantier organisé, avec des métiers stables et des équipes qui se transmettent leur savoir. Une administration de ce type ne se décrète pas : elle suppose des greniers pleins, des scribes et une hiérarchie capable de vérifier les livraisons.\n\nLe chantier fonctionnait par rotation. Les paysans, disponibles pendant la crue du Nil qui noyait les champs, étaient levés par équipes de plusieurs milliers d'hommes, portant le nom de leur village ou d'un souverain. Les carriers laissaient des marques rouges sur les blocs ; on a retrouvé des centaines de ces inscriptions, dont des graffitis d'équipes rivales. Les carrières elles-mêmes sont organisées, avec des fronts de taille en gradins où l'on peut encore lire l'ordre des prélèvements.\n\nLa chaîne d'approvisionnement explique cette organisation. Le calcaire fin qui habillait la pyramide venait de Toura, sur l'autre rive du Nil, et le granit des chambres hautes d'Assouan, aux premières cataractes. Le fleuve servait de route : pendant la crue, les bateaux s'approchaient au plus près du plateau et les blocs arrivaient par convois. Des papyrus retrouvés à Ouadi el-Jarf, sur la mer Rouge, contiennent le journal d'un convoyeur qui note ses chargements de pierre de Toura et ses journées de navigation. On y voit un chantier qui compte, qui date et qui rend des comptes : aucune roue, mais des barges, des traîneaux, des rampes et des scribes. Ces pierres-là, les plus lourdes du chantier, remontaient le fleuve sur des centaines de kilomètres, et leur transport occupait des convois entiers.\n\nLe transport reste discuté : rampes droites, rampes en spirale ou rampes intérieures. Les traces de traîneaux et une rampe découverte à Hatnoub montrent qu'on faisait glisser les blocs, le sable étant mouillé pour réduire le frottement.\n\nCe qui frappe, c'est la précision. Les côtés de la base diffèrent de quelques centimètres, et l'orientation suit les points cardinaux à quelques minutes près. Tenir un tel niveau exigeait des équipes spécialisées, un approvisionnement régulier et une autorité capable de compter les rations. La pyramide est donc autant un exploit logistique qu'architectural. Sa carrière ne s'est pas arrêtée avec les derniers blocs : le revêtement de calcaire a été arraché au fil des siècles pour bâtir les maisons du Caire, et le sommet a perdu plusieurs mètres. Ce qui reste debout est la partie que personne ne pouvait emporter : la masse.",
  "q": [
   {
    "q": "Quelle hauteur atteignait la grande pyramide de Khéops à l'origine ?",
    "o": [
     "Environ 230 mètres",
     "Environ 146 mètres",
     "Environ 60 mètres"
    ],
    "r": 1,
    "e": "Le texte donne 146 mètres de haut, pour une base dont les côtés mesurent environ 230 mètres."
   },
   {
    "q": "Combien de blocs la pyramide compte-t-elle ?",
    "o": [
     "Environ 2,3 millions",
     "Environ 230 000",
     "Environ 23 millions"
    ],
    "r": 0,
    "e": "Le texte parle de 2,3 millions de blocs, dont certains pèsent plusieurs tonnes."
   },
   {
    "q": "D'où venait le calcaire fin qui habillait la pyramide ?",
    "o": [
     "De Toura, sur l'autre rive du Nil",
     "D'Assouan, aux premières cataractes",
     "Des carrières de Memphis, à côté du plateau"
    ],
    "r": 0,
    "e": "Le revêtement venait de Toura, sur l'autre rive ; le granit des chambres hautes, lui, arrivait d'Assouan."
   },
   {
    "q": "Qui a popularisé l'image d'une masse d'esclaves fouettés ?",
    "o": [
     "Les scribes de l'Ancien Empire",
     "Hérodote, au Ve siècle avant notre ère",
     "Un voyageur romain du IIe siècle"
    ],
    "r": 1,
    "e": "Le texte attribue cette image à Hérodote, puis indique qu'elle ne résiste pas aux fouilles."
   },
   {
    "q": "Qu'a-t-on découvert au sud du plateau de Gizeh ?",
    "o": [
     "Un cimetière réservé aux prêtres",
     "Une ville d'ouvriers avec boulangeries et ateliers",
     "Un palais royal inachevé"
    ],
    "r": 1,
    "e": "Les fouilles ont exhumé des dortoirs, des boulangeries, des brasseries et des ateliers de cuivre."
   },
   {
    "q": "Que révèle l'examen des ossements des ouvriers ?",
    "o": [
     "Ils portaient des chaînes aux chevilles",
     "Ils souffraient d'une malnutrition générale",
     "Ils étaient nourris et soignés pour leurs fractures"
    ],
    "r": 2,
    "e": "Pain, poisson, bière et soins des fractures évoquent des travailleurs nourris, non des bêtes de somme."
   },
   {
    "q": "Comment les équipes étaient-elles constituées ?",
    "o": [
     "Par contingents d'esclaves achetés à l'étranger",
     "Par rotation, avec des paysans levés pendant la crue",
     "Par castes héréditaires de tailleurs de pierre"
    ],
    "r": 1,
    "e": "Le texte décrit des paysans disponibles pendant la crue du Nil, levés par équipes de plusieurs milliers."
   },
   {
    "q": "Que laissaient les carriers sur les blocs ?",
    "o": [
     "Des dates de livraison inscrites à l'encre",
     "Des marques rouges, dont des noms d'équipes",
     "Des formules religieuses gravées en profondeur"
    ],
    "r": 1,
    "e": "Des centaines d'inscriptions rouges ont été retrouvées, dont des graffitis d'équipes rivales."
   },
   {
    "q": "Comment les blocs étaient-ils déplacés, selon les traces retrouvées ?",
    "o": [
     "Sur des radeaux remorqués le long du Nil",
     "Sur des rondins de bois renouvelés sans cesse",
     "Sur des traîneaux, avec du sable mouillé"
    ],
    "r": 2,
    "e": "Les traces de traîneaux et la rampe de Hatnoub suggèrent un glissement sur sable mouillé."
   },
   {
    "q": "Comment la pyramide est-elle orientée ?",
    "o": [
     "Sur le lever du soleil au solstice d'été",
     "Sur les points cardinaux, à quelques minutes près",
     "Décalée d'environ cinq degrés vers l'est"
    ],
    "r": 1,
    "e": "Le texte souligne une orientation alignée sur les points cardinaux à quelques minutes près."
   },
   {
    "q": "Quel écart sépare les côtés de la base ?",
    "o": [
     "Plusieurs mètres",
     "Une vingtaine de mètres",
     "Quelques centimètres seulement"
    ],
    "r": 2,
    "e": "La précision du chantier est telle que les côtés ne diffèrent que de quelques centimètres."
   },
   {
    "q": "Qu'exigeait un tel chantier, selon le dernier paragraphe ?",
    "o": [
     "Une main-d'œuvre exclusivement servile",
     "Des poulies et des roues en bois",
     "Un approvisionnement régulier et une autorité comptable"
    ],
    "r": 2,
    "e": "Équipes spécialisées, rations comptées et ravitaillement régulier : la logistique compte autant que l'architecture."
   },
   {
    "q": "Pendant combien de temps la pyramide est-elle restée la plus haute du monde ?",
    "o": [
     "Deux mille ans",
     "Un siècle environ",
     "Près de quatre millénaires"
    ],
    "r": 2,
    "e": "Le texte la dit la plus haute construction du monde pendant près de quatre mille ans."
   },
   {
    "q": "Quelle découverte illustre le mode de transport des blocs ?",
    "o": [
     "Une rampe antique retrouvée à Hatnoub",
     "Un traîneau intact au pied de la pyramide",
     "Un port fluvial enfoui près d'Assouan"
    ],
    "r": 0,
    "e": "Le texte cite une rampe découverte à Hatnoub, cohérente avec le glissement sur traîneaux."
   },
   {
    "q": "Que suggère la présence de boulangeries et de brasseries sur le chantier ?",
    "o": [
     "Qu'il fallait nourrir chaque jour des milliers de travailleurs",
     "Que le chantier fonctionnait sans interruption toute l'année",
     "Que la bière servait de monnaie pour payer les prêtres"
    ],
    "r": 0,
    "e": "Nourrir des équipes nombreuses suppose une production alimentaire quotidienne et une logistique réglée."
   },
   {
    "q": "Pourquoi les paysans pouvaient-ils être mobilisés sur le chantier ?",
    "o": [
     "Parce que le pharaon les libérait des impôts en été",
     "Parce que la crue rendait le transport des blocs impossible",
     "Parce que la crue du Nil suspendait les travaux des champs"
    ],
    "r": 2,
    "e": "Le texte relie la rotation des équipes à la crue, qui noyait les champs et libérait la main-d'œuvre."
   },
   {
    "q": "Que déduit-on des graffitis laissés par des équipes rivales ?",
    "o": [
     "Que les blocs étaient réutilisés d'un chantier à l'autre",
     "Que les équipes se nommaient et se mesuraient entre elles",
     "Que les ouvriers savaient tous lire et écrire couramment"
    ],
    "r": 1,
    "e": "Des équipes qui s'affrontent par graffitis interposés supposent une organisation stable et identifiée."
   },
   {
    "q": "Que révèle le journal de bord retrouvé à Ouadi el-Jarf ?",
    "o": [
     "Que le transport des pierres était planifié et consigné",
     "Que le calcaire arrivait d'Assouan par la mer",
     "Que les ouvriers savaient tous lire et écrire"
    ],
    "r": 0,
    "e": "Le convoyeur y note ses chargements et ses journées de navigation : le chantier comptait et rendait des comptes."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "L'organisation logistique d'un chantier monumental",
     "La vie quotidienne des paysans égyptiens",
     "L'évolution des techniques de taille de la pierre"
    ],
    "r": 0,
    "e": "Le texte insiste sur les équipes, les rations, les rampes et le comptage : c'est la logistique qui est décrite."
   },
   {
    "q": "Pourquoi l'auteur commence-t-il par l'image des esclaves fouettés ?",
    "o": [
     "Pour opposer une tradition ancienne aux résultats des fouilles",
     "Pour dater précisément le début du chantier",
     "Pour expliquer d'où viennent ses chiffres sur les blocs"
    ],
    "r": 0,
    "e": "L'auteur expose la version d'Hérodote avant de la corriger par les données archéologiques."
   }
  ]
 },
 {
  "id": "c18",
  "theme": "histoire",
  "niveau": 4,
  "titre": "La route de la soie n'a jamais été une route",
  "corps": "Le mot route de la soie n'a pas deux siècles. Il est forgé en 1877 par le géographe allemand Ferdinand von Richthofen, qui cherchait un nom pour les pistes reliant la Chine à la Méditerranée. L'expression est commode, mais elle trompe : il n'y a jamais eu de route unique, ni de tracé continu, ni d'itinéraire balisé.\n\nCe que les marchands empruntaient était un réseau de pistes, de relais et de marchés. La soie partait de Chang'an, capitale des Han, gagnait le corridor du Gansu, franchissait les oasis du Tarim, puis Samarcande et la Perse avant d'atteindre les ports de la Méditerranée. Peu de marchands faisaient le trajet entier : les marchandises changeaient de main à chaque étape, et les prix se multipliaient en conséquence.\n\nLe fonctionnement réel tenait à des intermédiaires spécialisés. Les caravanes partaient par étapes d'une journée, avec des relais où l'on changeait les bêtes et où l'on acquittait les taxes ; les marchandises y étaient pesées, triées, revendues. Ce sont souvent les marchands sogdiens, installés entre l'Oxus et le Tarim, qui faisaient le lien entre la Chine et la Perse, avec leur langue et leurs comptoirs. Le transport se faisait à dos de chameau, près de deux cents kilos par bête, ce qui rendait la soie idéale : légère, durable, et d'une valeur qui supportait les frais de la distance. Les étapes se comptaient en journées de marche, et l'on s'arrêtait là où l'eau ne manquait pas.\n\nL'ouverture diplomatique est datée. Vers 138 avant notre ère, l'empereur Han Wudi envoie l'émissaire Zhang Qian vers l'ouest. Capturé, retenu plusieurs années, celui-ci revient avec des récits sur des royaumes dont la cour ignorait l'existence. Ces informations ouvrent un commerce régulier, même si des échanges plus anciens existaient déjà, notamment pour le jade et le cheval.\n\nLa soie n'était pas qu'un tissu : elle servait de monnaie, de récompense et de cadeau diplomatique. Le secret de sa fabrication fut longtemps gardé. Selon une tradition rapportée par des auteurs byzantins, des œufs de vers à soie auraient été introduits dans l'Empire au VIe siècle, dans des tiges de bambou creuses. Le récit est difficile à vérifier, mais son effet est réel : la production s'installe en Méditerranée.\n\nÀ côté de la soie circulaient des objets moins illustres et des idées plus lourdes de conséquences. Le bouddhisme a gagné la Chine par ces pistes, porté par des moines et des marchands, et l'islam s'est implanté dans les oasis d'Asie centrale au fil des conquêtes. Les techniques voyageaient aussi : fabrication du papier, culture du mûrier, verreries, motifs décoratifs copiés d'un atelier à l'autre. Un caravansérail n'était pas seulement un entrepôt, c'était un lieu où se croisaient des langues.\n\nLe réseau transportait aussi des idées, des techniques et des maladies. Le papier gagna l'ouest après la bataille de Talas, en 751, quand des artisans chinois furent emmenés à Samarcande. La peste circula avec les caravanes et les navires. Une route commerciale est toujours un système d'échange à double sens, où ce qu'on ne voulait pas exporter voyage aussi.\n\nLe réseau n'a jamais été supprimé : il s'est déplacé. À partir du XVe siècle, les routes maritimes, plus sûres et moins coûteuses par tonne transportée, ont pris le relais pour les marchandises lourdes, et les pistes terrestres se sont repliées sur les échanges régionaux. Le mot, lui, a survécu à la route : inventé pour décrire un commerce en voie d'être supplanté, il sert aujourd'hui à désigner tout contact entre l'Est et l'Ouest, y compris ceux que les archéologues reconstituent avec des tessons.",
  "q": [
   {
    "q": "Qui a forgé l'expression route de la soie ?",
    "o": [
     "Marco Polo",
     "Zhang Qian",
     "Ferdinand von Richthofen"
    ],
    "r": 2,
    "e": "Le texte attribue ce nom au géographe allemand Ferdinand von Richthofen."
   },
   {
    "q": "En quelle année l'expression apparaît-elle ?",
    "o": [
     "Au XVIe siècle, à Venise",
     "Vers 138 avant notre ère",
     "En 1877, chez Richthofen"
    ],
    "r": 2,
    "e": "L'expression est forgée en 1877, bien après les échanges qu'elle désigne."
   },
   {
    "q": "Pourquoi l'expression est-elle trompeuse ?",
    "o": [
     "Parce qu'elle exclut le commerce des épices",
     "Parce qu'elle désigne une seule piste très fréquentée",
     "Parce qu'il s'agissait d'un réseau de pistes, non d'une route unique"
    ],
    "r": 2,
    "e": "Le texte insiste sur l'absence de route unique, de tracé continu et d'itinéraire balisé."
   },
   {
    "q": "D'où partait la soie, selon le texte ?",
    "o": [
     "De Chang'an",
     "De Samarcande",
     "De Bagdad"
    ],
    "r": 0,
    "e": "La soie partait de Chang'an, capitale des Han."
   },
   {
    "q": "Quelles étapes le texte cite-t-il sur le trajet ?",
    "o": [
     "Le golfe Persique et la côte indienne",
     "Le corridor du Gansu et les oasis du Tarim",
     "La mer Noire et l'Anatolie"
    ],
    "r": 1,
    "e": "Le trajet passe par le corridor du Gansu puis les oasis du Tarim."
   },
   {
    "q": "Quel peuple faisait souvent le lien entre la Chine et la Perse ?",
    "o": [
     "Les scribes byzantins",
     "Les marchands sogdiens",
     "Les marins grecs"
    ],
    "r": 1,
    "e": "Les Sogdiens, installés entre l'Oxus et le Tarim, servaient d'intermédiaires avec leur langue et leurs comptoirs."
   },
   {
    "q": "Pourquoi les prix augmentaient-ils en chemin ?",
    "o": [
     "La soie se détériorait en route",
     "Les marchandises changeaient de main à chaque étape",
     "Les caravanes payaient une taxe unique"
    ],
    "r": 1,
    "e": "Chaque intermédiaire revendait plus cher, si bien que les prix se multipliaient."
   },
   {
    "q": "Quand l'émissaire Zhang Qian est-il envoyé vers l'ouest ?",
    "o": [
     "Vers 138 avant notre ère",
     "Vers 751 de notre ère",
     "Vers 138 de notre ère"
    ],
    "r": 0,
    "e": "Le texte date cette mission vers 138 avant notre ère."
   },
   {
    "q": "Qui envoie Zhang Qian ?",
    "o": [
     "L'empereur Qin Shi Huang",
     "L'empereur Han Wudi",
     "Le roi de Samarcande"
    ],
    "r": 1,
    "e": "C'est l'empereur Han Wudi qui envoie son émissaire vers l'ouest."
   },
   {
    "q": "Qu'arrive-t-il à Zhang Qian pendant sa mission ?",
    "o": [
     "Il est capturé et retenu plusieurs années",
     "Il revient en un an avec des cartes",
     "Il meurt avant d'atteindre l'ouest"
    ],
    "r": 0,
    "e": "Capturé et retenu plusieurs années, il revient finalement avec des récits sur des royaumes lointains."
   },
   {
    "q": "À quoi servait la soie en dehors du tissu ?",
    "o": [
     "De toile de tente et de voile de navire",
     "De monnaie, de récompense et de cadeau diplomatique",
     "De pansement et de support d'écriture"
    ],
    "r": 1,
    "e": "Le texte cite trois usages : monnaie, récompense et cadeau diplomatique."
   },
   {
    "q": "Comment les œufs de vers à soie auraient-ils été introduits ?",
    "o": [
     "Dans des tiges de bambou creuses",
     "Sur des navires marchands grecs",
     "Dans des amphores scellées"
    ],
    "r": 0,
    "e": "La tradition byzantine parle d'œufs cachés dans des tiges de bambou creuses."
   },
   {
    "q": "Après quelle bataille le papier gagne-t-il l'ouest ?",
    "o": [
     "Talas, en 751",
     "Manzikert, en 1071",
     "Actium, en 31 avant notre ère"
    ],
    "r": 0,
    "e": "Le texte situe la transmission du papier après la bataille de Talas, en 751."
   },
   {
    "q": "Où les artisans chinois furent-ils emmenés ?",
    "o": [
     "À Bagdad",
     "À Constantinople",
     "À Samarcande"
    ],
    "r": 2,
    "e": "Des artisans chinois furent emmenés à Samarcande après la bataille."
   },
   {
    "q": "Qu'est-ce qui circulait en même temps que les marchandises ?",
    "o": [
     "Des idées, des techniques et des maladies",
     "Des chevaux et du sel seulement",
     "Uniquement des métaux précieux"
    ],
    "r": 0,
    "e": "Le texte mentionne le papier, la peste, donc des techniques et des maladies."
   },
   {
    "q": "Pourquoi peu de marchands faisaient-ils le trajet entier ?",
    "o": [
     "Le réseau fonctionnait par relais successifs",
     "Le trajet durait moins d'un mois",
     "Les frontières étaient fermées aux caravanes"
    ],
    "r": 0,
    "e": "Les marchandises changeaient de main à chaque étape : le commerce avançait par relais."
   },
   {
    "q": "Pourquoi le récit des œufs de vers à soie est-il présenté avec prudence ?",
    "o": [
     "Il concerne la Perse et non l'Empire byzantin",
     "Il contredit la date de la bataille de Talas",
     "Il vient d'auteurs anciens et reste difficile à vérifier"
    ],
    "r": 2,
    "e": "Le texte signale une tradition rapportée par des auteurs byzantins, donc incertaine."
   },
   {
    "q": "Que suggère l'exemple de la peste ?",
    "o": [
     "Que les maladies venaient uniquement de Chine",
     "Qu'un axe commercial transporte aussi ce qu'on ne veut pas exporter",
     "Que le commerce cessa au XIVe siècle"
    ],
    "r": 1,
    "e": "La conclusion du texte insiste sur le double sens des échanges, y compris pour les maladies."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La fabrication de la soie en Chine ancienne",
     "La biographie de l'émissaire Zhang Qian",
     "Un réseau d'échanges ancien, mal résumé par une expression moderne"
    ],
    "r": 2,
    "e": "Le texte démonte une expression commode pour décrire un réseau complexe et ancien."
   },
   {
    "q": "Pourquoi l'auteur rappelle-t-il l'origine du mot ?",
    "o": [
     "Pour attribuer à Richthofen la découverte de la route",
     "Pour montrer que le nom est récent et qu'il simplifie la réalité",
     "Pour dater le début du commerce de la soie"
    ],
    "r": 1,
    "e": "Le mot date de 1877 : son jeune âge souligne l'écart avec des échanges bien plus anciens."
   }
  ]
 },
 {
  "id": "c23",
  "theme": "histoire",
  "niveau": 4,
  "titre": "Avant le papier, on écrivait sur ce qu'on pouvait",
  "corps": "Écrire suppose une surface. Les Mésopotamiens gravaient l'argile, les Égyptiens tressaient le papyrus, les Grecs et les Romains usaient de tablettes de bois ciré ; en Chine, on écrivait sur des lamelles de bambou, sur de la soie, parfois sur des os. Ces supports étaient lourds, coûteux ou fragiles, et recopier un ouvrage entier représentait des semaines de travail. Le passage du rouleau au cahier de feuillets, le codex, fut une première révolution : il permit de feuilleter, d'écrire en marge et de retrouver un passage sans dérouler des mètres de texte.\n\nLa tradition attribue à Cai Lun, haut fonctionnaire de la cour impériale, l'invention vers 105 de notre ère d'un papier fait de fibres végétales broyées, écorces, chanvre et vieux chiffons, pressées puis séchées en feuilles. L'innovation n'est pas le matériau mais la méthode : on réduit la fibre en pâte, on la met en suspension dans l'eau, puis on la puise sur un tamis. La feuille se forme par égouttage, se presse et sèche ; le procédé se répète à volonté avec des matières bon marché.\n\nLe savoir se répand lentement vers la Corée et le Japon, porté notamment par les voyageurs et les communautés monastiques. Selon un récit traditionnel, des papetiers chinois faits prisonniers à Samarcande en 751 transmettent leur métier aux artisans locaux ; quelle que soit la part de légende, des ateliers fonctionnent à Bagdad dès la fin du VIIIe siècle. Les scribes y copient des traductions, et le livre se multiplie dans les villes savantes du monde arabe.\n\nL'Europe adopte le papier par l'Espagne et l'Italie, où des moulins à eau actionnent des pilons qui broient les chiffons. À Fabriano, au XIIIe siècle, les papetiers perfectionnent la colle et inventent le filigrane, une marque visible en transparence qui identifie le fabricant. Le papier y reste longtemps concurrencé par le parchemin, plus solide mais beaucoup plus cher : une bible sur peau demandait le cuir de dizaines d'animaux. À partir du XIIIe siècle, le papier descend en prix et devient le support des registres, des lettres et des livres.\n\nAu milieu du XVe siècle, l'imprimerie à caractères mobiles change l'échelle de la demande : un atelier peut tirer des centaines d'exemplaires d'un même texte, et le papier devient la dépense principale de l'imprimeur. Les moulins se multiplient le long des rivières. Au XIXe siècle, la chiffonnerie ne suffit plus : on apprend à défibrer le bois, d'abord par meulage, puis par procédé chimique, et la pâte de bois remplace peu à peu les vieux linges.\n\nUn support bon marché ne suffit pourtant pas à faire une révolution : il faut aussi des textes à imprimer, des lecteurs capables de les lire et des réseaux pour les distribuer. Le papier n'a jamais été remplacé ; il a changé de matière première et de format, jusqu'aux feuilles industrielles d'aujourd'hui. Son histoire montre qu'une technique ne transforme une société que lorsqu'elle rencontre des usages déjà prêts à l'accueillir.",
  "q": [
   {
    "q": "Sur quoi écrivait-on en Chine avant l'invention du papier ?",
    "o": [
     "Sur des lamelles de bambou et de la soie",
     "Sur des tablettes d'argile cuite",
     "Sur des feuilles de papyrus tressées"
    ],
    "r": 0,
    "e": "Le texte cite les lamelles de bambou, la soie et parfois les os comme supports chinois anciens."
   },
   {
    "q": "À qui la tradition attribue-t-elle l'invention du papier ?",
    "o": [
     "À un moine italien du XIIIe siècle",
     "À Cai Lun, vers 105 de notre ère",
     "À un artisan de Bagdad vers 751"
    ],
    "r": 1,
    "e": "La tradition attribue cette invention à Cai Lun, haut fonctionnaire de la cour impériale, vers 105."
   },
   {
    "q": "Quelles matières servaient à fabriquer ce papier ?",
    "o": [
     "Des écorces, du chanvre et de vieux chiffons",
     "De l'argile fine et des fibres de lin",
     "Du bambou frais et de la soie brute"
    ],
    "r": 0,
    "e": "Le papier était fait de fibres végétales broyées, écorces, chanvre et vieux chiffons."
   },
   {
    "q": "Quel support succéda au rouleau dans l'Antiquité tardive ?",
    "o": [
     "La tablette de cire",
     "Le rouleau de soie",
     "Le codex, cahier de feuillets"
    ],
    "r": 2,
    "e": "Le passage du rouleau au codex permit de feuilleter et d'écrire en marge."
   },
   {
    "q": "Sur quel instrument puise-t-on la pâte pour former une feuille ?",
    "o": [
     "Sur un tamis",
     "Sur une meule de pierre",
     "Sur un pilon de bois"
    ],
    "r": 0,
    "e": "La pâte en suspension dans l'eau est puisée sur un tamis qui retient les fibres."
   },
   {
    "q": "En quelle année des papetiers chinois auraient-ils été faits prisonniers à Samarcande ?",
    "o": [
     "En 751",
     "En 794",
     "En 105"
    ],
    "r": 0,
    "e": "Le récit traditionnel situe cet épisode à Samarcande en 751."
   },
   {
    "q": "Où des ateliers de papier fonctionnent-ils dès la fin du VIIIe siècle ?",
    "o": [
     "À Rome",
     "À Manchester",
     "À Bagdad"
    ],
    "r": 2,
    "e": "Le texte indique que des ateliers fonctionnent à Bagdad dès la fin du VIIIe siècle."
   },
   {
    "q": "Par quels pays le papier arrive-t-il en Europe ?",
    "o": [
     "Par la Grèce et l'Égypte",
     "Par la Scandinavie et la Russie",
     "Par l'Espagne et l'Italie"
    ],
    "r": 2,
    "e": "L'Europe adopte le papier par l'Espagne et l'Italie, où des moulins à eau broient les chiffons."
   },
   {
    "q": "Quelle ville italienne perfectionna la colle et le filigrane ?",
    "o": [
     "Fabriano",
     "Venise",
     "Florence"
    ],
    "r": 0,
    "e": "À Fabriano, au XIIIe siècle, les papetiers perfectionnent la colle et inventent le filigrane."
   },
   {
    "q": "Pourquoi le parchemin concurrençait-il longtemps le papier ?",
    "o": [
     "Il était moins cher et plus léger",
     "Il était plus solide, mais beaucoup plus cher",
     "Il se fabriquait avec des chiffons"
    ],
    "r": 1,
    "e": "Le parchemin restait plus solide, au prix d'un coût bien supérieur."
   },
   {
    "q": "Combien d'animaux fallait-il environ pour une bible sur peau ?",
    "o": [
     "Des dizaines",
     "Des milliers",
     "Un seul"
    ],
    "r": 0,
    "e": "Le texte évoque le cuir de dizaines d'animaux pour une seule bible sur parchemin."
   },
   {
    "q": "Quand le papier devient-il nettement moins cher en Europe ?",
    "o": [
     "Au début du XXe siècle",
     "Dès le VIIIe siècle",
     "À partir du XIIIe siècle"
    ],
    "r": 2,
    "e": "À partir du XIIIe siècle, le papier descend en prix et se répand dans les registres et les livres."
   },
   {
    "q": "Quel procédé bouleverse la demande de papier au XVe siècle ?",
    "o": [
     "La fabrication du parchemin",
     "L'imprimerie à caractères mobiles",
     "La reliure en cuir"
    ],
    "r": 1,
    "e": "Au milieu du XVe siècle, l'imprimerie permet des tirages de centaines d'exemplaires."
   },
   {
    "q": "Quelle matière première remplace le chiffon au XIXe siècle ?",
    "o": [
     "Le papier de riz",
     "La pâte de bois",
     "La fibre de coton"
    ],
    "r": 1,
    "e": "Le passage du chiffon à la pâte de bois accompagne l'essor de l'imprimerie industrielle."
   },
   {
    "q": "Pourquoi les papetiers installaient-ils leurs moulins au bord des rivières ?",
    "o": [
     "Pour disposer de la force motrice de l'eau",
     "Pour transporter les livres par bateau",
     "Pour laver les feuilles avant séchage"
    ],
    "r": 0,
    "e": "Les pilons qui broient les chiffons étaient actionnés par des moulins à eau."
   },
   {
    "q": "Pourquoi le papier se répandit-il plus vite que le parchemin ?",
    "o": [
     "Il se conservait mieux que le cuir",
     "Sa matière première était bon marché",
     "Il se fabriquait sans eau ni presse"
    ],
    "r": 1,
    "e": "Le procédé répétait à volonté l'usage de matières bon marché, alors que le parchemin exigeait des peaux."
   },
   {
    "q": "Pourquoi un imprimeur du XVe siècle dépendait-il des papetiers ?",
    "o": [
     "Le papier servait à graver les caractères",
     "Les tirages consommaient beaucoup de papier",
     "L'encre était fabriquée avec du papier"
    ],
    "r": 1,
    "e": "Un atelier tirait des centaines d'exemplaires, et le papier devenait sa dépense principale."
   },
   {
    "q": "Pourquoi le remplacement du chiffon s'est-il imposé au XIXe siècle ?",
    "o": [
     "Le bois donnait un papier plus solide",
     "Les chiffons étaient devenus toxiques",
     "La demande dépassait l'offre de chiffons"
    ],
    "r": 2,
    "e": "Les volumes demandés par l'imprimerie industrielle dépassaient ce que la chiffonnerie fournissait."
   },
   {
    "q": "Quel est le sujet principal de ce texte ?",
    "o": [
     "La fabrication des livres imprimés aujourd'hui",
     "L'histoire de l'écriture alphabétique",
     "L'invention du papier et sa diffusion mondiale"
    ],
    "r": 2,
    "e": "Le texte suit le papier de la Chine ancienne jusqu'aux moulins européens et à la pâte de bois."
   },
   {
    "q": "Que veut montrer l'auteur dans le dernier paragraphe ?",
    "o": [
     "Le papier a été abandonné au XIXe siècle",
     "Un support nouveau ne suffit pas sans d'autres usages",
     "L'imprimerie a précédé le papier en Europe"
    ],
    "r": 1,
    "e": "L'auteur insiste sur le rôle conjoint de l'imprimerie et de l'alphabétisation, puis sur la matière première."
   }
  ]
 },
 {
  "id": "d3",
  "theme": "nature",
  "niveau": 4,
  "titre": "Comment un oiseau trouve son chemin sans carte",
  "corps": "Chaque automne, des millions d'oiseaux quittent l'Europe vers le sud. Certains traversent la Méditerranée et le Sahara d'une seule traite, d'autres longent les côtes. Le voyage se fait souvent de nuit, à des altitudes où le paysage familier disparaît.\n\nLes ornithologues ont d'abord eu besoin de preuves. Le baguage, apparu au début du XXe siècle, consiste à poser une bague numérotée à la patte d'un oiseau capturé puis relâché. La bague ne donne pas la position en direct, mais elle relie le lieu de reprise au lieu de naissance. Des dizaines de milliers de ces reprises ont dessiné peu à peu les routes migratoires.\n\nLe suivi a changé d'échelle avec les balises. Les plus petites pèsent moins d'un gramme et se fixent sur le dos de passereaux. Elles transmettent la position, l'altitude et parfois la température. On a ainsi découvert que certains oiseaux volent plusieurs jours sans se poser, en s'aidant de vents favorables.\n\nReste la question du sens de l'orientation. Les oiseaux diurnes s'appuient sur la position du soleil, qu'ils compensent grâce à une horloge interne. Les migrateurs nocturnes lisent le ciel étoilé et corrigent leur cap au fil de la nuit. Beaucoup perçoivent aussi le champ magnétique terrestre, grâce à des capteurs encore mal compris, et reconnaissent des repères comme les côtes ou les vallées.\n\nLes jeunes coucous partent seuls, sans avoir suivi leurs parents : l'itinéraire est donc en grande partie inscrit dans l'animal. Mais l'apprentissage compte aussi, car les oiseaux expérimentés choisissent mieux leurs haltes et arrivent plus tôt sur les sites d'hivernage. Ce mélange d'instinct et d'expérience explique la précision du voyage.\n\nLes routes ne sont pas des lignes droites. Elles suivent des couloirs où le relief offre des courants ascendants, des côtes où l'orientation reste lisible, des détroits que l'on franchit de nuit. Au-dessus des déserts, les oiseaux profitent des journées chaudes qui soulèvent l'air ; au-dessus de la mer, ils volent bas pour économiser leurs forces et repérer les îles.\n\nL'énergie est le facteur limitant. Avant le départ, un migrateur accumule des graisses qui peuvent représenter une part importante de sa masse, et ses organes digestifs se réduisent au profit des muscles du vol. Certaines espèces doublent presque leur poids. D'autres, comme les rapaces, planent et dépendent du vent : ils attendent parfois plusieurs jours sur une côte que les conditions deviennent favorables.\n\nPour connaître l'origine des oiseaux, les chercheurs analysent les plumes. Les proportions d'isotopes stables de l'hydrogène varient selon la latitude et les précipitations, et se retrouvent dans les tissus. Une plume poussée en Scandinavie ne porte donc pas la même signature qu'une plume formée en Afrique de l'Ouest, ce qui permet de rattacher un individu capturé à une zone de reproduction probable.\n\nLes radars offrent une autre fenêtre. Les services météorologiques enregistrent depuis des décennies des échos qu'ils prenaient autrefois pour du bruit, et qui correspondent à des nuées d'oiseaux. En analysant ces archives, les chercheurs ont reconstitué des décennies de passages printaniers et automnaux, avec leurs variations d'intensité et de calendrier.\n\nCes voyages deviennent pourtant plus difficiles. Les zones humides où les oiseaux font halte se réduisent, et l'éclairage urbain désoriente les migrateurs nocturnes. Suivre les migrateurs sert donc aussi à protéger les étapes dont dépend toute la route.",
  "q": [
   {
    "q": "À quelle saison les oiseaux quittent-ils l'Europe vers le sud ?",
    "o": [
     "En automne",
     "Au printemps",
     "En plein hiver"
    ],
    "r": 0,
    "e": "Le texte ouvre sur les départs d'automne vers le sud."
   },
   {
    "q": "Que traversent certains oiseaux d'une seule traite ?",
    "o": [
     "La Méditerranée et le Sahara",
     "Les Alpes et le Danube",
     "La Manche et la mer du Nord"
    ],
    "r": 0,
    "e": "Le texte cite ces deux étendues franchies sans escale."
   },
   {
    "q": "À quoi sert une bague posée à la patte ?",
    "o": [
     "À relier le lieu de reprise au lieu de naissance",
     "À mesurer la température du corps",
     "À enregistrer les sons du vol"
    ],
    "r": 0,
    "e": "La bague numérotée permet de rapprocher deux lieux de capture."
   },
   {
    "q": "Quand le baguage est-il apparu ?",
    "o": [
     "Au début du XXe siècle",
     "Au XVIIIe siècle",
     "Dans les années 1980"
    ],
    "r": 0,
    "e": "Le texte situe son apparition au début du XXe siècle."
   },
   {
    "q": "Combien pèsent les plus petites balises ?",
    "o": [
     "Moins d'un gramme",
     "Environ cent grammes",
     "Près d'un kilogramme"
    ],
    "r": 0,
    "e": "Le texte évoque des balises de moins d'un gramme."
   },
   {
    "q": "Quelles données ces balises transmettent-elles ?",
    "o": [
     "La position, l'altitude et parfois la température",
     "La vitesse du vent et l'humidité du sol",
     "Le son et le rythme cardiaque"
    ],
    "r": 0,
    "e": "Ces trois informations sont citées dans le troisième paragraphe."
   },
   {
    "q": "Sur quoi s'appuient les oiseaux diurnes pour s'orienter ?",
    "o": [
     "La position du soleil",
     "La lueur de la lune",
     "Les champs électriques du sol"
    ],
    "r": 0,
    "e": "Ils lisent la position du soleil, corrigée par une horloge interne."
   },
   {
    "q": "Que lisent les migrateurs nocturnes ?",
    "o": [
     "Le ciel étoilé",
     "Les reflets sur l'eau",
     "Les lumières des villes"
    ],
    "r": 0,
    "e": "Le texte indique qu'ils se repèrent aux étoiles."
   },
   {
    "q": "Comment les jeunes coucous trouvent-ils leur route ?",
    "o": [
     "Ils partent seuls, sans suivre leurs parents",
     "Ils suivent les adultes en formation",
     "Ils restent sur place la première année"
    ],
    "r": 0,
    "e": "Le départ solitaire des jeunes coucous est donné comme exemple d'instinct."
   },
   {
    "q": "Qu'est-ce qui distingue les oiseaux expérimentés ?",
    "o": [
     "Ils choisissent mieux leurs haltes et arrivent plus tôt",
     "Ils volent plus haut que les jeunes",
     "Ils changent d'itinéraire chaque année"
    ],
    "r": 0,
    "e": "L'expérience améliore le choix des étapes et la date d'arrivée."
   },
   {
    "q": "Quel danger nocturne le texte mentionne-t-il ?",
    "o": [
     "L'éclairage urbain",
     "Les éoliennes",
     "Les prédateurs domestiques"
    ],
    "r": 0,
    "e": "La dernière partie cite l'éclairage des villes comme source de désorientation."
   },
   {
    "q": "Pourquoi le baguage a-t-il dû être pratiqué longtemps pour être utile ?",
    "o": [
     "Parce qu'une seule reprise ne dit presque rien sur un itinéraire",
     "Parce que les bagues s'usent en quelques mois",
     "Parce que les oiseaux évitent les pièges"
    ],
    "r": 0,
    "e": "Il a fallu des dizaines de milliers de reprises pour dessiner les routes."
   },
   {
    "q": "Que révèle un vol de plusieurs jours sans escale ?",
    "o": [
     "Que l'oiseau constitue des réserves importantes avant le départ",
     "Qu'il boit l'eau de pluie en vol",
     "Qu'il se pose brièvement chaque nuit"
    ],
    "r": 0,
    "e": "Un vol continu de plusieurs jours suppose des réserves accumulées."
   },
   {
    "q": "Pourquoi l'instinct seul ne suffit-il pas à expliquer la précision du voyage ?",
    "o": [
     "Parce que l'expérience améliore nettement la performance",
     "Parce que les jeunes se perdent systématiquement",
     "Parce que le champ magnétique change chaque année"
    ],
    "r": 0,
    "e": "Le texte souligne que les oiseaux expérimentés réussissent mieux."
   },
   {
    "q": "Pourquoi protéger les zones humides revient-il à protéger la migration ?",
    "o": [
     "Parce que les haltes conditionnent la réussite du trajet",
     "Parce que les oiseaux y nichent tout l'hiver",
     "Parce que ces zones produisent les vents porteurs"
    ],
    "r": 0,
    "e": "Sans étapes pour se nourrir, la route entière devient impraticable."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Comment les migrateurs s'orientent et comment on les étudie",
     "La reproduction des oiseaux en captivité",
     "Les espèces disparues au cours du XXe siècle"
    ],
    "r": 0,
    "e": "Le texte traite à la fois des méthodes de suivi et des mécanismes d'orientation."
   },
   {
    "q": "Pourquoi les oiseaux volent-ils bas au-dessus de la mer ?",
    "o": [
     "Pour économiser leurs forces et repérer les îles",
     "Pour éviter les courants d'air chaud",
     "Pour se nourrir de plancton en vol"
    ],
    "r": 0,
    "e": "Le texte donne ces deux raisons au premier paragraphe ajouté."
   },
   {
    "q": "Que deviennent les organes digestifs avant la migration ?",
    "o": [
     "Ils se réduisent au profit des muscles du vol",
     "Ils grossissent pour stocker de l'eau",
     "Ils se déplacent vers la queue"
    ],
    "r": 0,
    "e": "La réduction digestive accompagne l'accumulation de graisses."
   },
   {
    "q": "Pourquoi certains rapaces attendent-ils plusieurs jours sur une côte ?",
    "o": [
     "Parce qu'ils dépendent du vent pour planer",
     "Parce qu'ils doivent finir leur mue",
     "Parce qu'ils attendent leurs petits"
    ],
    "r": 0,
    "e": "Le vol plané dépend de conditions favorables."
   },
   {
    "q": "Sur quel élément repose l'analyse des plumes ?",
    "o": [
     "Les proportions d'isotopes stables de l'hydrogène",
     "La longueur des rémiges",
     "La couleur du plumage"
    ],
    "r": 0,
    "e": "Ces proportions varient avec la latitude et les précipitations."
   },
   {
    "q": "Que révèlent les archives radar ?",
    "o": [
     "Des décennies de passages migratoires",
     "La vitesse des vents en altitude",
     "La température des nuits d'automne"
    ],
    "r": 0,
    "e": "Les échos autrefois pris pour du bruit correspondent à des oiseaux."
   }
  ]
 },
 {
  "id": "d8",
  "theme": "nature",
  "niveau": 4,
  "titre": "La tourbière, ce marais qui garde le carbone",
  "corps": "On y marche sur un tapis élastique, comme sur un matelas mouillé. Une tourbière ressemble à une prairie détrempée, mais sous les mousses s'accumulent des couches de matière végétale à demi décomposée. Ce dépôt, la tourbe, s'est formé sur des milliers d'années.\n\nTout commence par l'eau. Dans une cuvette mal drainée, la pluie s'accumule et stagne. Les sphaignes, ces mousses aux teintes rougeâtres, colonisent la surface. Elles retiennent jusqu'à vingt fois leur poids en eau et acidifient le milieu en échangeant des ions hydrogène contre des nutriments.\n\nCette acidité change tout. Les bactéries qui décomposent les végétaux travaillent mal dans un milieu acide, froid et privé d'oxygène. Les débris s'entassent donc plus vite qu'ils ne se décomposent, et la tourbe s'épaissit de quelques millimètres par an. Un mètre de tourbe peut représenter mille ans d'accumulation.\n\nCe rythme lent explique la valeur du milieu. La tourbe emmagasine le carbone que les plantes ont capté : tant qu'elle reste gorgée d'eau, elle le conserve. Drainée, elle s'oxyde et rejette ce carbone dans l'air, parfois après un incendie qui couve dans les couches sèches. Une tourbière assainie devient donc une source de gaz à effet de serre au lieu d'un stock.\n\nLa faune s'y adapte. Les droséras, plantes carnivores, y trouvent l'azote que le sol ne fournit pas. Les linaigrettes forment des houppes blanches, et certaines libellules ne se reproduisent que dans ces eaux acides. En Europe, des milliers de sites ont été drainés pour l'agriculture ou l'extraction de tourbe, souvent utilisée comme combustible.\n\nToutes les tourbières ne se ressemblent pas. Celles qui reçoivent des eaux venues du sol et des ruisseaux, dites minérotrophes, restent relativement riches et portent des roseaux, des carex, parfois des aulnes. Celles qui ne dépendent que de la pluie, dites ombrotrophes, s'appauvrissent peu à peu : la sphaigne y domine, et le dôme de tourbe s'élève au-dessus du niveau de la nappe. Les formes bombées, si caractéristiques de certaines landes du Nord, résultent de cette croissance verticale.\n\nLe fonctionnement de la sphaigne explique cette architecture. La mousse pousse par le sommet, tandis que sa base meurt et s'accumule ; la plante s'élève donc sur ses propres débris. Sur des millénaires, ce mécanisme produit des couches que l'on peut carotter, comme on lit un livre. Les chercheurs y trouvent du pollen, des spores, des restes d'insectes et parfois des cendres volcaniques, repères datés qui permettent de caler une chronologie.\n\nCes archives intéressent les climatologues. Un carottage révèle la succession des végétations, les phases de sécheresse et les incendies anciens ; la datation au carbone quatorze situe les couches dans le temps. Les corps humains retrouvés dans certaines tourbières du nord de l'Europe, conservés par l'acidité et le froid, ont livré des informations sur l'alimentation et les pratiques de populations disparues.\n\nL'exploitation a laissé des traces durables. La tourbe a servi de combustible domestique, de litière pour les animaux et, plus récemment, d'ingrédient pour les terreaux de jardinage. Les sites exploités sont aujourd'hui souvent de simples plans d'eau sombres, où la végétation ne se réinstalle pas. La restauration passe par le rebouchage des drains, la réhumidification et le transfert de sphaignes vivantes : elle demande des décennies avant que le milieu ne fonctionne de nouveau comme un stock de carbone.\n\nLes scientifiques les considèrent aujourd'hui comme des archives : le pollen piégé dans les couches permet de reconstituer les forêts d'autrefois, et les corps conservés dans certaines tourbières du Nord de l'Europe livrent des informations sur les populations anciennes. Protéger ces milieux, c'est donc préserver à la fois un stock de carbone et une mémoire du paysage.",
  "q": [
   {
    "q": "Sur quoi marche-t-on à la surface d'une tourbière ?",
    "o": [
     "Un tapis de mousses spongieux",
     "Une croûte de sel durcie",
     "Un sol de sable compact"
    ],
    "r": 0,
    "e": "Le texte décrit un tapis élastique formé de mousses."
   },
   {
    "q": "Comment s'appelle le dépôt accumulé sous les mousses ?",
    "o": [
     "La tourbe",
     "Le limon",
     "L'humus noir"
    ],
    "r": 0,
    "e": "Ce dépôt de végétaux à demi décomposés est la tourbe."
   },
   {
    "q": "Quelles plantes colonisent la surface ?",
    "o": [
     "Les sphaignes",
     "Les roseaux",
     "Les bruyères"
    ],
    "r": 0,
    "e": "Les sphaignes, mousses rougeâtres, colonisent la cuvette."
   },
   {
    "q": "Quelle quantité d'eau les sphaignes peuvent-elles retenir ?",
    "o": [
     "Jusqu'à vingt fois leur poids",
     "Jusqu'à deux fois leur poids",
     "Jusqu'à cent fois leur poids"
    ],
    "r": 0,
    "e": "Le texte indique vingt fois leur poids en eau."
   },
   {
    "q": "Comment les sphaignes acidifient-elles le milieu ?",
    "o": [
     "En échangeant des ions hydrogène contre des nutriments",
     "En rejetant du sel par leurs racines",
     "En consommant tout l'azote du sol"
    ],
    "r": 0,
    "e": "Cet échange ionique libère des ions hydrogène et acidifie l'eau."
   },
   {
    "q": "Pourquoi la décomposition est-elle ralentie ?",
    "o": [
     "Parce que le milieu est acide, froid et pauvre en oxygène",
     "Parce que les bactéries sont absentes du sol",
     "Parce que les mousses produisent un poison"
    ],
    "r": 0,
    "e": "Ces trois conditions gênent l'activité des bactéries."
   },
   {
    "q": "De combien la tourbe s'épaissit-elle chaque année ?",
    "o": [
     "De quelques millimètres",
     "De quelques centimètres",
     "De quelques décimètres"
    ],
    "r": 0,
    "e": "La croissance est de l'ordre de quelques millimètres par an."
   },
   {
    "q": "À combien d'années correspond un mètre de tourbe ?",
    "o": [
     "Mille ans",
     "Cent ans",
     "Dix mille ans"
    ],
    "r": 0,
    "e": "Le texte donne l'équivalence d'un mètre pour mille ans."
   },
   {
    "q": "Que se passe-t-il quand une tourbière est drainée ?",
    "o": [
     "La tourbe s'oxyde et rejette du carbone",
     "La tourbe durcit et devient imperméable",
     "Les sphaignes poussent plus vite"
    ],
    "r": 0,
    "e": "L'oxydation du dépôt libère le carbone stocké."
   },
   {
    "q": "Quel risque particulier le texte mentionne-t-il ?",
    "o": [
     "Un incendie qui couve dans les couches sèches",
     "Une inondation brutale des vallées",
     "Un effondrement du sol sous les habitations"
    ],
    "r": 0,
    "e": "Les couches asséchées peuvent brûler lentement."
   },
   {
    "q": "Comment les droséras obtiennent-elles l'azote ?",
    "o": [
     "En capturant des insectes",
     "En absorbant la tourbe",
     "En fixant l'azote de l'air"
    ],
    "r": 0,
    "e": "Ces plantes carnivores compensent la pauvreté du sol."
   },
   {
    "q": "Quelle plante forme des houppes blanches ?",
    "o": [
     "La linaigrette",
     "La sphaigne",
     "La droséra"
    ],
    "r": 0,
    "e": "Le texte cite les houppes blanches des linaigrettes."
   },
   {
    "q": "Pourquoi des sites ont-ils été drainés en Europe ?",
    "o": [
     "Pour l'agriculture et l'extraction de tourbe",
     "Pour y construire des centrales",
     "Pour lutter contre les moustiques"
    ],
    "r": 0,
    "e": "Le drainage servait ces deux usages."
   },
   {
    "q": "À quoi la tourbe sert-elle comme combustible ?",
    "o": [
     "Elle est brûlée pour produire de la chaleur",
     "Elle est distillée pour faire du carburant",
     "Elle est compressée en briquettes de charbon"
    ],
    "r": 0,
    "e": "Le texte mentionne son usage comme combustible."
   },
   {
    "q": "Que permettent d'étudier les pollens piégés dans la tourbe ?",
    "o": [
     "Les forêts d'autrefois",
     "Le climat des prochains siècles",
     "La composition des roches profondes"
    ],
    "r": 0,
    "e": "Les pollens conservés renseignent sur les paysages anciens."
   },
   {
    "q": "Quel intérêt les corps conservés présentent-ils ?",
    "o": [
     "Ils renseignent sur les populations anciennes",
     "Ils prouvent l'existence de rites funéraires chrétiens",
     "Ils servent à dater les outils de fer"
    ],
    "r": 0,
    "e": "Le texte y voit une source d'information sur les populations anciennes."
   },
   {
    "q": "Pourquoi protéger une tourbière revient-il à limiter le réchauffement ?",
    "o": [
     "Parce qu'elle conserve un stock de carbone tant qu'elle reste humide",
     "Parce qu'elle réfléchit davantage la lumière du soleil",
     "Parce qu'elle refroidit l'air en été"
    ],
    "r": 0,
    "e": "Le carbone reste piégé aussi longtemps que le milieu n'est pas drainé."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La formation d'une tourbière et son rôle de stock de carbone",
     "Les techniques d'extraction de la tourbe",
     "La culture des plantes carnivores"
    ],
    "r": 0,
    "e": "Le texte décrit la genèse du milieu, son fonctionnement et son intérêt."
   },
   {
    "q": "Qu'est-ce qui distingue une tourbière ombrotrophe ?",
    "o": [
     "Elle ne dépend que des eaux de pluie",
     "Elle est alimentée par une rivière",
     "Elle reste pauvre en sphaignes"
    ],
    "r": 0,
    "e": "Le texte oppose ce type à celui qui reçoit des eaux du sol."
   },
   {
    "q": "Comment la sphaigne construit-elle le dôme de tourbe ?",
    "o": [
     "Elle pousse par le sommet sur ses propres débris",
     "Elle se déplace latéralement chaque année",
     "Elle est poussée par la pression de l'eau"
    ],
    "r": 0,
    "e": "La croissance apicale et la mort de la base élèvent le milieu."
   },
   {
    "q": "Que trouve-t-on dans les carottages qui aide à dater les couches ?",
    "o": [
     "Des cendres volcaniques et du pollen",
     "Des fragments de poterie",
     "Des coquillages marins"
    ],
    "r": 0,
    "e": "Ces repères, associés au carbone quatorze, permettent de caler la chronologie."
   }
  ]
 },
 {
  "id": "c14",
  "theme": "santé",
  "niveau": 4,
  "titre": "Semmelweis et les mains qui tuaient",
  "corps": "Vienne, printemps 1847. Ignace Semmelweis, assistant dans une maternité, note un chiffre qui le hante : dans la division des médecins, la fièvre puerpérale tue près d'une femme sur dix, contre une sur vingt dans celle des sages-femmes, quelques couloirs plus loin.\n\nLes deux divisions accueillaient pourtant des femmes comparables. La différence tenait au personnel. Les médecins et leurs étudiants passaient la matinée à disséquer des cadavres, puis montaient faire accoucher sans se laver les mains. Les sages-femmes, elles, ne pratiquaient pas d'autopsies : elles accouchaient dans une salle voisine, avec des femmes venues des mêmes quartiers et souvent plus pauvres, ce qui rendait l'écart plus troublant encore.\n\nLe raisonnement se resserre autour d'un détail. En 1847, un collègue médecin se blesse au doigt en disséquant un cadavre et meurt quelques jours plus tard, avec des lésions que Semmelweis retrouve chez les femmes emportées par la fièvre. L'analogie s'impose : ce qui tue les parturientes est la même matière que celle qui tue au scalpel, une matière cadavérique transportée par les mains. La fièvre puerpérale, elle, se déclare un ou deux jours après l'accouchement, par une fièvre brutale et des douleurs abdominales, et emporte une partie des malades en quelques jours. Les femmes étaient donc contaminées au moment même où on les examinait. Les instruments, les cuvettes et les draps suivaient le même chemin que les mains.\n\nEn mai 1847, il impose un lavage des mains au chlorure de chaux entre chaque examen, y compris entre deux malades. Le choix du produit n'est pas innocent : le chlorure dégage une odeur pénétrante et attaque les matières organiques, et Semmelweis le retient justement parce qu'il efface l'odeur cadavérique laissée sur les mains. Le résultat est net : la mortalité mensuelle de sa division, qui dépassait dix pour cent au printemps, tombe sous les deux pour cent en quelques mois, puis se maintient près du niveau des sages-femmes l'année suivante. Dans la division voisine, rien n'avait changé, et la mortalité y resta ce qu'elle était : la comparaison valait expérience.\n\nLe succès ne convainc personne. Ses collègues se sentent accusés, et publier des résultats qui désignent la main du médecin revient à attaquer le prestige d'une profession en pleine ascension. Semmelweis, peu diplomate, tarde à publier et multiplie les lettres polémiques. Il perd son poste viennois en 1850.\n\nSon livre de 1861, consacré à l'étiologie de la fièvre puerpérale, rassemble les chiffres de douze années, mais son ton accusateur et son refus de l'expérimentation animale le privent d'alliés. La méthode, elle, ne demandait ni microscope ni théorie microbienne : de l'eau, du chlorure et une consigne appliquée. C'est peut-être ce qui la rendait si difficile à recevoir, car elle ne récompensait aucune érudition.\n\nIl meurt en 1865, à quarante-sept ans, dans un asile où il avait été interné, d'une infection contractée peu avant. Vingt ans plus tard, Pasteur et Koch démontrent le rôle des microbes, et Lister applique l'antisepsie à la chirurgie. La statistique de Vienne, elle, n'avait jamais menti : elle décrivait un effet réel que personne ne voulait lire.\n\nL'antisepsie est pourtant devenue une routine, et l'hygiène des mains reste la mesure la plus efficace contre les infections contractées à l'hôpital. Les enquêtes menées dans les services montrent qu'elle est encore appliquée de façon irrégulière : un siècle et demi plus tard, la consigne a survécu mieux que le geste. Affiches et distributeurs de solution hydro-alcoolique ont envahi les couloirs, sans que le geste devienne spontané.",
  "q": [
   {
    "q": "En quelle année Semmelweis impose-t-il le lavage des mains ?",
    "o": [
     "1850",
     "1847",
     "1865"
    ],
    "r": 1,
    "e": "Le texte situe la mesure en mai 1847, dans sa division de la maternité viennoise."
   },
   {
    "q": "Quel produit utilisait-il pour ce lavage ?",
    "o": [
     "De l'alcool à 90 degrés",
     "De l'eau bouillie et savonnée",
     "Du chlorure de chaux"
    ],
    "r": 2,
    "e": "Le texte précise un lavage au chlorure de chaux entre chaque examen."
   },
   {
    "q": "Dans quelle ville travaillait-il en 1847 ?",
    "o": [
     "Budapest",
     "Paris",
     "Vienne"
    ],
    "r": 2,
    "e": "La scène s'ouvre à Vienne, dans une maternité où il est assistant."
   },
   {
    "q": "Quel écart de mortalité séparait les deux divisions ?",
    "o": [
     "Une sur cent contre une sur dix",
     "Près d'une sur dix contre une sur vingt",
     "Une sur deux contre une sur dix"
    ],
    "r": 1,
    "e": "Le texte compare une femme sur dix chez les médecins à une sur vingt chez les sages-femmes."
   },
   {
    "q": "Pourquoi les médecins transmettaient-ils la maladie ?",
    "o": [
     "Ils passaient de l'autopsie à l'accouchement sans se laver",
     "Ils changeaient de blouse entre deux salles",
     "Ils utilisaient des instruments chauffés au feu"
    ],
    "r": 0,
    "e": "Le texte insiste sur la matinée de dissection suivie d'un examen des parturientes sans lavage des mains."
   },
   {
    "q": "Qu'arrive-t-il au collègue médecin de Semmelweis en 1847 ?",
    "o": [
     "Il quitte Vienne pour enseigner à Budapest",
     "Il se blesse en disséquant et meurt peu après",
     "Il est nommé chef de la division des sages-femmes"
    ],
    "r": 1,
    "e": "Blessé au doigt en disséquant un cadavre, il meurt avec des lésions comparables à celles des parturientes."
   },
   {
    "q": "Que refusa de faire Semmelweis, selon le texte ?",
    "o": [
     "Publier rapidement ses résultats",
     "Enseigner à ses étudiants",
     "Quitter Vienne pour Budapest"
    ],
    "r": 0,
    "e": "Peu diplomate, il tarde à publier et préfère multiplier les lettres polémiques."
   },
   {
    "q": "Comment ses collègues réagirent-ils à ses résultats ?",
    "o": [
     "Ils se sentirent accusés et rejetèrent ses conclusions",
     "Ils demandèrent une enquête administrative",
     "Ils adoptèrent aussitôt la méthode"
    ],
    "r": 0,
    "e": "Le texte note qu'ils se sentent accusés et que le succès ne convainc personne."
   },
   {
    "q": "En quelle année perd-il son poste à Vienne ?",
    "o": [
     "1865",
     "1850",
     "1847"
    ],
    "r": 1,
    "e": "Le texte indique qu'il perd son poste viennois en 1850."
   },
   {
    "q": "En quelle année meurt-il ?",
    "o": [
     "1890",
     "1850",
     "1865"
    ],
    "r": 2,
    "e": "Il meurt en 1865, dans un asile où il avait été interné."
   },
   {
    "q": "Quel âge avait-il à sa mort ?",
    "o": [
     "Trente-neuf ans",
     "Cinquante-deux ans",
     "Quarante-sept ans"
    ],
    "r": 2,
    "e": "Le texte précise qu'il meurt à quarante-sept ans."
   },
   {
    "q": "Qui démontra le rôle des microbes vingt ans plus tard ?",
    "o": [
     "Snow et Nightingale",
     "Lister et Simpson",
     "Pasteur et Koch"
    ],
    "r": 2,
    "e": "Le texte attribue cette démonstration à Pasteur et Koch, vingt ans après sa mort."
   },
   {
    "q": "Qui appliqua l'antisepsie à la chirurgie ?",
    "o": [
     "Lister",
     "Pasteur",
     "Koch"
    ],
    "r": 0,
    "e": "Le texte mentionne Lister, qui transpose l'antisepsie en chirurgie."
   },
   {
    "q": "Quel effet le lavage eut-il sur sa division ?",
    "o": [
     "La mortalité resta stable",
     "La mortalité doubla puis se stabilisa",
     "La mortalité chuta en quelques mois"
    ],
    "r": 2,
    "e": "La mortalité chute en quelques mois, jusqu'à se rapprocher de celle des sages-femmes."
   },
   {
    "q": "Pourquoi la comparaison entre les deux divisions était-elle décisive ?",
    "o": [
     "Les femmes étaient comparables et seul le personnel différait",
     "Les sages-femmes étaient mieux formées que les médecins",
     "Les deux bâtiments venaient d'être reconstruits"
    ],
    "r": 0,
    "e": "Les femmes se ressemblaient ; la seule variable nettement différente était le personnel et ses pratiques."
   },
   {
    "q": "Pourquoi sa thèse heurtait-elle ses collègues ?",
    "o": [
     "Elle remettait en cause la formation des sages-femmes",
     "Elle désignait leur propre main comme vecteur de contagion",
     "Elle exigeait la fermeture de la maternité"
    ],
    "r": 1,
    "e": "Accuser la main du médecin revenait à attaquer le prestige d'une profession en pleine ascension."
   },
   {
    "q": "Que signifie la formule sur la statistique qui n'avait jamais menti ?",
    "o": [
     "Les registres de l'hôpital avaient été falsifiés",
     "Les chiffres étaient justes, même si personne ne voulait les accepter",
     "La statistique ne vaut rien sans théorie médicale"
    ],
    "r": 1,
    "e": "L'auteur souligne que les chiffres décrivaient un effet réel, resté longtemps inaudible."
   },
   {
    "q": "Pourquoi la mort de ce collègue oriente-t-elle Semmelweis ?",
    "o": [
     "Elle révèle que les sages-femmes sont mieux formées",
     "Elle montre que la même matière tue au scalpel",
     "Elle prouve que la fièvre se transmet par l'air"
    ],
    "r": 1,
    "e": "L'analogie avec les lésions des femmes le conduit à la matière cadavérique portée par les mains."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La découverte d'un vecteur de contagion et la résistance qu'elle rencontra",
     "Les progrès de la chirurgie au XIXe siècle",
     "La carrière universitaire de Semmelweis à Vienne"
    ],
    "r": 0,
    "e": "Le texte suit une observation clinique, une mesure simple, puis le refus qu'elle provoque."
   },
   {
    "q": "Pourquoi l'auteur ouvre-t-il sur un chiffre de mortalité ?",
    "o": [
     "Pour poser l'anomalie qui met Semmelweis sur la piste",
     "Pour dénoncer les conditions de vie des femmes à Vienne",
     "Pour montrer que la médecine de 1847 était efficace"
    ],
    "r": 0,
    "e": "L'écart entre les deux divisions est le point de départ du raisonnement, pas une conclusion."
   }
  ]
 },
 {
  "id": "c19",
  "theme": "santé",
  "niveau": 4,
  "titre": "Trois cents millions de sacs dans la poitrine",
  "corps": "L'air entre par le nez, où il est réchauffé et humidifié, descend la trachée, se partage dans les bronches puis dans des bronchioles de plus en plus fines. Au bout de ce labyrinthe, il atteint les alvéoles, petits sacs dont le nombre se compte en centaines de millions. Leur paroi n'est épaisse que de quelques dixièmes de micromètre, plus fine qu'une feuille de papier, et chacun est entouré de capillaires où circule le sang. Étendue à plat, la surface d'échange atteindrait plusieurs dizaines de mètres carrés, l'équivalent d'un petit appartement.\n\nLe poumon n'aspire pas l'oxygène comme une pompe : les gaz passent d'eux-mêmes du côté de plus forte pression partielle vers celui de plus faible. L'air inspiré contient environ 21 % d'oxygène et 0,04 % de dioxyde de carbone ; l'air expiré n'en garde plus que 16 % d'oxygène, tandis que le dioxyde de carbone monte à 4 ou 5 %. Le sang veineux qui arrive aux alvéoles est donc plus chargé en dioxyde de carbone et moins riche en oxygène que l'air : chaque gaz traverse la paroi dans le sens de son propre déséquilibre, et cette diffusion ne consomme aucune énergie.\n\nLa ventilation renouvelle cet air. Au repos, un adulte inspire et expire une douzaine de fois par minute, environ un demi-litre à chaque mouvement, soit six litres par minute. À l'effort, la fréquence et le volume augmentent, et le débit peut atteindre plusieurs dizaines de litres par minute. Le diaphragme, muscle en coupole placé sous les poumons, se contracte et s'abaisse, ce qui agrandit la cage thoracique ; la pression y diminue et l'air extérieur s'y engouffre. Les muscles intercostaux aident à écarter les côtes. L'expiration est le plus souvent passive : les tissus élastiques reprennent leur place. Après une expiration forcée, il demeure dans les poumons un volume résiduel d'un peu plus d'un litre, que rien ne peut chasser.\n\nLe sang transporte ensuite les gaz. L'oxygène se fixe sur l'hémoglobine des globules rouges, chaque molécule pouvant en emporter quatre : cent millilitres de sang en contiennent une vingtaine de millilitres. Le dioxyde de carbone voyage surtout sous forme de bicarbonate dissous dans le plasma, et pour une part plus faible lié à l'hémoglobine. Un film liquide, le surfactant, tapisse les alvéoles et abaisse la tension de surface, ce qui les empêche de s'affaisser à chaque expiration. Le sang ne reste que trois quarts de seconde dans le capillaire pulmonaire, et l'équilibre des pressions est atteint bien avant qu'il ne le quitte.\n\nLa commande échappe en grande partie à la volonté. Des neurones du bulbe rachidien, dans le tronc cérébral, imposent le rythme ; ils réagissent surtout à la teneur du sang en dioxyde de carbone et à son acidité, que mesurent des capteurs du tronc cérébral et des artères. En altitude, la pression partielle d'oxygène diminue : la ventilation s'accélère, et l'organisme fabrique davantage de globules rouges, un ajustement qui demande plusieurs semaines.\n\nRien ne fonctionnerait sans la circulation : si le sang ne passe plus devant les alvéoles, l'air ventilé ne sert à rien. C'est pourquoi la mesure des gaz du sang renseigne à la fois sur le poumon et sur le cœur, deux organes dont l'accord conditionne l'apport d'oxygène à chaque tissu. Un poumon sain mal perfusé et un cœur sain devant un poumon encombré produisent le même symptôme : un sang trop pauvre en oxygène.",
  "q": [
   {
    "q": "Dans quel ordre l'air progresse-t-il dans l'appareil respiratoire ?",
    "o": [
     "Nez, trachée, bronches, bronchioles",
     "Bronches, trachée, nez, alvéoles",
     "Trachée, nez, alvéoles, bronches"
    ],
    "r": 0,
    "e": "Le texte part du nez, puis décrit la trachée, les bronches, les bronchioles et enfin les alvéoles."
   },
   {
    "q": "Combien d'alvéoles les deux poumons comptent-ils environ ?",
    "o": [
     "Quelques milliers de sacs",
     "Quelques centaines de millions",
     "Quelques milliards de sacs"
    ],
    "r": 1,
    "e": "Le texte parle de petits sacs dont le nombre se compte en centaines de millions."
   },
   {
    "q": "Quelle est l'épaisseur de la paroi d'une alvéole ?",
    "o": [
     "Quelques millimètres de tissu",
     "Quelques centimètres de tissu",
     "Quelques dixièmes de micromètre"
    ],
    "r": 2,
    "e": "La paroi n'est épaisse que de quelques dixièmes de micromètre, moins qu'une feuille de papier."
   },
   {
    "q": "Quelle proportion d'oxygène l'air inspiré contient-il ?",
    "o": [
     "Environ 4 % du volume",
     "Environ 16 % du volume",
     "Environ 21 % du volume"
    ],
    "r": 2,
    "e": "L'air inspiré contient environ 21 % d'oxygène, contre 16 % seulement dans l'air expiré."
   },
   {
    "q": "Quelle proportion de dioxyde de carbone l'air expiré contient-il ?",
    "o": [
     "0,04 %",
     "4 à 5 %",
     "16 %"
    ],
    "r": 1,
    "e": "Le dioxyde de carbone passe de 0,04 % dans l'air inspiré à 4 ou 5 % dans l'air expiré."
   },
   {
    "q": "Comment les gaz traversent-ils la paroi alvéolaire ?",
    "o": [
     "Par filtration liée à la pression du sang",
     "Par diffusion selon les pressions partielles",
     "Par une pompe qui dépense de l'énergie"
    ],
    "r": 1,
    "e": "Les gaz passent d'eux-mêmes du côté de plus forte pression partielle vers le côté le plus faible."
   },
   {
    "q": "Quelle surface d'échange les alvéoles offrent-ils au total ?",
    "o": [
     "Moins d'un mètre carré de paroi",
     "Plusieurs dizaines de mètres carrés",
     "Plusieurs hectares de tissu fin"
    ],
    "r": 1,
    "e": "Le texte évoque une immense surface d'échange de plusieurs dizaines de mètres carrés."
   },
   {
    "q": "À quelle fréquence un adulte au repos respire-t-il ?",
    "o": [
     "Une douzaine de fois par minute",
     "Environ quatre fois par minute",
     "Une centaine de fois par minute"
    ],
    "r": 0,
    "e": "Au repos, l'adulte inspire et expire une douzaine de fois par minute."
   },
   {
    "q": "Quel volume d'air chaque mouvement respiratoire renouvelle-t-il au repos ?",
    "o": [
     "Environ cinq litres d'air",
     "Environ dix centilitres d'air",
     "Environ un demi-litre d'air"
    ],
    "r": 2,
    "e": "Chaque mouvement renouvelle environ un demi-litre, ce qui donne six litres par minute."
   },
   {
    "q": "Quel volume d'air demeure dans les poumons après une expiration forcée ?",
    "o": [
     "Près de six litres",
     "Un peu plus d'un litre",
     "Environ un demi-litre"
    ],
    "r": 1,
    "e": "Le texte parle d'un volume résiduel d'un peu plus d'un litre, que rien ne peut chasser."
   },
   {
    "q": "Que provoque la contraction du diaphragme ?",
    "o": [
     "Une baisse de la pression thoracique",
     "Une fermeture des bronchioles fines",
     "Une hausse de la pression thoracique"
    ],
    "r": 0,
    "e": "Le muscle s'abaisse, la cage thoracique s'agrandit et la pression intérieure diminue."
   },
   {
    "q": "Combien de molécules d'oxygène une molécule d'hémoglobine peut-elle fixer ?",
    "o": [
     "Huit molécules d'oxygène",
     "Deux molécules d'oxygène",
     "Quatre molécules d'oxygène"
    ],
    "r": 2,
    "e": "Le texte précise que chaque molécule d'hémoglobine peut en emporter quatre."
   },
   {
    "q": "Sous quelle forme le dioxyde de carbone circule-t-il surtout dans le sang ?",
    "o": [
     "Sous forme de bicarbonate dissous",
     "Fixé sur les plaquettes du sang",
     "Lié au glucose du plasma"
    ],
    "r": 0,
    "e": "Il voyage surtout sous forme de bicarbonate dissous dans le plasma, pour une part plus faible lié à l'hémoglobine."
   },
   {
    "q": "Quel est le rôle du surfactant dans les alvéoles ?",
    "o": [
     "Il augmente la tension de surface",
     "Il abaisse la tension de surface de la paroi",
     "Il accélère le passage du glucose"
    ],
    "r": 1,
    "e": "Ce film liquide abaisse la tension de surface et empêche les alvéoles de s'affaisser à chaque expiration."
   },
   {
    "q": "Où se trouvent les neurones qui imposent le rythme respiratoire ?",
    "o": [
     "Dans le bulbe rachidien",
     "Dans le cortex cérébral",
     "Dans la moelle épinière lombaire"
    ],
    "r": 0,
    "e": "Le texte situe dans le bulbe rachidien, au tronc cérébral, les neurones qui commandent le rythme."
   },
   {
    "q": "Pourquoi l'expiration est-elle qualifiée de passive ?",
    "o": [
     "Les tissus élastiques reprennent leur place",
     "Le diaphragme se contracte plus fort",
     "Les alvéoles se gonflent d'air neuf"
    ],
    "r": 0,
    "e": "Le texte indique que les tissus élastiques reprennent leur place sans effort supplémentaire."
   },
   {
    "q": "Pourquoi une paroi très mince accélère-t-elle les échanges gazeux ?",
    "o": [
     "Le trajet à parcourir par les gaz est plus court",
     "Le sang y circule beaucoup plus rapidement",
     "L'air alvéolaire y est plus riche en oxygène"
    ],
    "r": 0,
    "e": "La diffusion est d'autant plus rapide que la distance à franchir entre l'air et le sang est faible."
   },
   {
    "q": "Que se passerait-il si le surfactant venait à manquer ?",
    "o": [
     "Les capillaires cesseraient de filtrer",
     "Les alvéoles se rempliraient de sang",
     "Les alvéoles auraient tendance à s'affaisser"
    ],
    "r": 2,
    "e": "Sans ce film qui abaisse la tension de surface, les sacs alvéolaires s'affaisseraient à chaque expiration."
   },
   {
    "q": "Pourquoi la mesure des gaz du sang renseigne-t-elle sur deux organes ?",
    "o": [
     "Elle dépend uniquement du travail des reins",
     "Elle dépend du poumon et de la circulation",
     "Elle dépend de la température de la peau"
    ],
    "r": 1,
    "e": "L'apport d'oxygène exige à la fois des alvéoles ventilées et un sang qui passe devant elles."
   },
   {
    "q": "Quel est le sujet principal de ce texte ?",
    "o": [
     "L'histoire des maladies respiratoires au XIXe siècle",
     "Le rôle des reins dans la fabrication du sang",
     "Le trajet de l'air et les échanges gazeux pulmonaires"
    ],
    "r": 2,
    "e": "Le texte suit l'air du nez aux alvéoles, puis décrit le passage des gaz dans le sang."
   },
   {
    "q": "Pourquoi l'auteur insiste-t-il sur la finesse de la paroi et la surface d'échange ?",
    "o": [
     "Pour vanter les progrès de la chirurgie",
     "Pour décrire la forme des bronchioles",
     "Pour expliquer l'efficacité de la diffusion"
    ],
    "r": 2,
    "e": "Ces deux propriétés expliquent pourquoi les échanges se font sans aucune dépense d'énergie."
   }
  ]
 },
 {
  "id": "c24",
  "theme": "santé",
  "niveau": 4,
  "titre": "Pourquoi certaines transfusions tuaient sans qu'on sache pourquoi",
  "corps": "À la fin du XIXe siècle, transfuser du sang d'une personne à une autre restait une pratique hasardeuse : parfois le malade se rétablissait, parfois il succombait en quelques minutes. On soupçonnait la qualité du sang, la technique ou l'infection, sans comprendre que le drame se jouait à l'échelle des cellules. Les globules rouges s'agglutinaient, se détruisaient, et les reins cessaient de fonctionner sans qu'aucune explication ne tienne.\n\nEn 1900, le médecin autrichien Karl Landsteiner mélange des sérums et des globules rouges de ses collègues. Certains mélanges s'agglutinent, d'autres restent homogènes. Il en déduit l'existence de groupes sanguins, désignés A, B et O ; le groupe AB sera identifié peu après. La publication paraît en 1901 et vaudra à son auteur le prix Nobel en 1930.\n\nL'explication tient à des marqueurs à la surface des globules rouges, les antigènes, et à des anticorps présents dans le plasma. Un sujet du groupe A porte l'antigène A et fabrique des anticorps contre B ; s'il reçoit du sang B, ses anticorps agglutinent les globules étrangers, qui se lysent et peuvent boucher les petits vaisseaux. Le groupe O, dépourvu de ces antigènes, peut être donné à tous pour les globules rouges ; le groupe AB, qui n'a pas d'anticorps contre A ni B, peut recevoir de tous. La règle s'inverse pour le plasma : celui du groupe O contient les deux sortes d'anticorps, celui du groupe AB aucune.\n\nUn second système, le facteur Rhésus, est découvert en 1937 par Landsteiner et Alexander Wiener, à partir de travaux sur le singe macaque rhésus. La présence ou l'absence de cet antigène D explique des accidents transfusionnels tardifs et une maladie du nouveau-né, liée à l'incompatibilité entre une mère et son fœtus. Chez une femme enceinte dont le sang ne porte pas cet antigène, une première grossesse incompatible peut la sensibiliser ; les suivantes sont alors surveillées, et la prévention repose sur des anticorps dirigés contre le facteur Rhésus.\n\nLa pratique a changé avec plusieurs innovations. L'emploi de citrate empêche la coagulation et permet de conserver le sang ; le test dit de Coombs, mis au point au milieu du XXe siècle, décèle les anticorps fixés sur les globules ; et surtout le groupage systématique précède désormais tout don. Les globules rouges se conservent environ six semaines à froid, ce qui impose une logistique précise entre collecte, analyses et utilisation. Un prélèvement est fractionné en globules rouges, plaquettes et plasma, chacun conservé à sa température et employé pour des indications différentes. Chaque poche est testée pour plusieurs agents infectieux, et le groupe du donneur est déterminé deux fois, par deux techniques, avant que le produit ne soit étiqueté.\n\nAujourd'hui, le sang est contrôlé pour de nombreux marqueurs, et la transfusion est devenue un acte encadré, préparé par des analyses plutôt que par l'urgence seule. Le geste reste le même qu'autrefois ; ce qui a changé, c'est la connaissance de ce qui se passe à l'échelle des cellules.",
  "q": [
   {
    "q": "Comment se présentait une transfusion à la fin du XIXe siècle ?",
    "o": [
     "Comme une pratique hasardeuse et imprévisible",
     "Comme une technique interdite par la loi",
     "Comme un geste courant et sans risque"
    ],
    "r": 0,
    "e": "Le texte la décrit comme hasardeuse : le malade se rétablissait ou mourait en quelques minutes."
   },
   {
    "q": "Qu'observe Karl Landsteiner en 1900 en mélangeant sérums et globules rouges ?",
    "o": [
     "Les globules rouges changent de couleur",
     "Tous les mélanges restent homogènes",
     "Certains mélanges s'agglutinent, d'autres non"
    ],
    "r": 2,
    "e": "Il constate que certains mélanges s'agglutinent tandis que d'autres restent homogènes."
   },
   {
    "q": "Quels groupes sanguins Landsteiner déduit-il de ses observations ?",
    "o": [
     "Les groupes O, Rh et AB seulement",
     "Les groupes A, B et O",
     "Les groupes A, B et Rh"
    ],
    "r": 1,
    "e": "Il en déduit les groupes A, B et O, le groupe AB étant identifié peu après."
   },
   {
    "q": "En quelle année paraît sa publication sur les groupes sanguins ?",
    "o": [
     "En 1901",
     "En 1900",
     "En 1930"
    ],
    "r": 0,
    "e": "Les expériences datent de 1900, mais la publication paraît en 1901."
   },
   {
    "q": "Quelle distinction Landsteiner reçoit-il en 1930 ?",
    "o": [
     "Un doctorat honoris causa",
     "Le prix Nobel",
     "La légion d'honneur"
    ],
    "r": 1,
    "e": "Le texte indique que ses travaux lui vaudront le prix Nobel en 1930."
   },
   {
    "q": "Où se trouvent les antigènes qui déterminent le groupe sanguin ?",
    "o": [
     "À la surface des globules rouges",
     "Dans le plasma uniquement",
     "À la surface des plaquettes"
    ],
    "r": 0,
    "e": "Ce sont des marqueurs situés à la surface des globules rouges, face à des anticorps du plasma."
   },
   {
    "q": "Quels anticorps fabrique un sujet du groupe A ?",
    "o": [
     "Des anticorps dirigés contre le groupe B",
     "Aucun anticorps, quel que soit le groupe",
     "Des anticorps dirigés contre le groupe A"
    ],
    "r": 0,
    "e": "Un sujet du groupe A porte l'antigène A et fabrique des anticorps contre B."
   },
   {
    "q": "Que provoquent les anticorps du receveur sur des globules étrangers incompatibles ?",
    "o": [
     "Une simple décoloration du sang",
     "Une agglutination suivie d'une lyse",
     "Une multiplication des globules"
    ],
    "r": 1,
    "e": "Les anticorps agglutinent les globules étrangers, qui se lysent et peuvent boucher les vaisseaux."
   },
   {
    "q": "Pourquoi le groupe O peut-il être donné à tous pour les globules rouges ?",
    "o": [
     "Il contient tous les antigènes connus",
     "Il ne contient aucun anticorps plasmatique",
     "Il ne porte pas les antigènes A et B"
    ],
    "r": 2,
    "e": "Le groupe O est dépourvu de ces antigènes, ce qui limite la réaction chez le receveur."
   },
   {
    "q": "Pourquoi le groupe AB peut-il recevoir du sang de tous ?",
    "o": [
     "Il n'a pas d'anticorps contre A ni B",
     "Il ne possède aucun antigène",
     "Ses globules ne circulent pas dans le plasma"
    ],
    "r": 0,
    "e": "Le groupe AB ne fabrique pas d'anticorps contre A ni contre B."
   },
   {
    "q": "Quelle particularité a le plasma du groupe O ?",
    "o": [
     "Il contient un seul anticorps, anti-A",
     "Il ne contient aucun anticorps",
     "Il contient les deux sortes d'anticorps"
    ],
    "r": 2,
    "e": "La règle s'inverse pour le plasma : celui du groupe O contient les deux sortes d'anticorps."
   },
   {
    "q": "Quelle substance empêche la coagulation et permet de conserver le sang ?",
    "o": [
     "Le surfactant",
     "Le citrate",
     "Le bicarbonate"
    ],
    "r": 1,
    "e": "L'emploi de citrate empêche la coagulation et autorise la conservation du sang."
   },
   {
    "q": "En quelle année le facteur Rhésus est-il découvert ?",
    "o": [
     "En 1930",
     "En 1937",
     "En 1901"
    ],
    "r": 1,
    "e": "Le facteur Rhésus est découvert en 1937 par Landsteiner et Alexander Wiener."
   },
   {
    "q": "Quel antigène définit le facteur Rhésus ?",
    "o": [
     "L'antigène AB",
     "L'antigène A",
     "L'antigène D"
    ],
    "r": 2,
    "e": "Le texte précise que la présence ou l'absence de l'antigène D définit ce système."
   },
   {
    "q": "Combien de temps peut-on conserver des globules rouges ?",
    "o": [
     "Plusieurs années à sec",
     "Environ six jours à froid",
     "Environ six semaines à froid"
    ],
    "r": 2,
    "e": "Les globules rouges se conservent environ six semaines à froid, ce qui impose une logistique précise."
   },
   {
    "q": "Pourquoi une transfusion incompatible pouvait-elle tuer en quelques minutes ?",
    "o": [
     "Les globules agglutinés bouchaient les vaisseaux",
     "Le cœur cessait de fabriquer des globules",
     "Le sang perdait toute sa chaleur"
    ],
    "r": 0,
    "e": "Les globules étrangers s'agglutinaient puis se lysaient, et pouvaient obstruer les petits vaisseaux."
   },
   {
    "q": "Pourquoi le groupe O n'est-il un donneur universel que pour les globules rouges ?",
    "o": [
     "Son plasma contient les deux sortes d'anticorps",
     "Ses globules portent tous les antigènes",
     "Son plasma ne contient aucun anticorps"
    ],
    "r": 0,
    "e": "Le plasma du groupe O renferme des anticorps contre A et contre B, ce qui limite son usage."
   },
   {
    "q": "Pourquoi la découverte des groupes a-t-elle changé la transfusion ?",
    "o": [
     "Elle a supprimé le besoin de donneurs",
     "Elle a permis de choisir un sang compatible",
     "Elle a rendu le sang conservable à sec"
    ],
    "r": 1,
    "e": "Le groupage systématique remplace l'improvisation par une analyse préalable du donneur et du receveur."
   },
   {
    "q": "Quel est le sujet principal de ce texte ?",
    "o": [
     "Le fonctionnement des reins humains",
     "La découverte des groupes sanguins et ses effets",
     "L'histoire de la chirurgie cardiaque"
    ],
    "r": 1,
    "e": "Le texte retrace l'identification des groupes et du facteur Rhésus, puis leur usage en transfusion."
   },
   {
    "q": "Quel changement de méthode le dernier paragraphe décrit-il ?",
    "o": [
     "Les dons sont désormais payants",
     "Le sang devient inutile en médecine",
     "La transfusion passe de l'urgence à l'analyse"
    ],
    "r": 2,
    "e": "Le texte oppose l'urgence seule d'autrefois aux analyses qui préparent aujourd'hui l'acte."
   }
  ]
 },
 {
  "id": "c11",
  "theme": "sciences",
  "niveau": 4,
  "titre": "Le poids de l'air, mesuré pour la première fois",
  "corps": "En 1643, à Florence, Evangelista Torricelli cherche à comprendre pourquoi les pompes à eau des jardins ne peuvent pas aspirer l'eau au-delà d'une certaine hauteur. Les fontainiers le savent depuis longtemps : une pompe, même parfaitement étanche, abandonne vers dix mètres. On invoquait alors l'horreur du vide, la répugnance de la nature à laisser un espace vide. Torricelli propose une autre explication : c'est le poids de l'air qui pousse l'eau dans le tuyau.\n\nPour le prouver, il remplace l'eau par un liquide beaucoup plus dense, le mercure. Il remplit un tube de verre d'un mètre environ, le bouche, le retourne dans un bassin rempli du même métal liquide, puis le débouche. Le niveau descend, mais s'arrête : il reste une colonne d'environ 76 centimètres, avec un vide au-dessus. Si l'air ne pesait rien, la colonne serait retombée. Elle se maintient parce que la pression atmosphérique équilibre son poids.\n\nLe choix du mercure n'est pas anodin. Ce métal est environ treize fois et demie plus dense que l'eau : une colonne d'eau aurait dû mesurer plus de dix mètres pour équilibrer la même pression, ce qui rendait la démonstration difficile à loger dans une pièce. Avec le mercure, tout tient dans un tube d'un mètre, posé sur une table. Le rapport entre les deux hauteurs, dix mètres contre soixante-seize centimètres, traduit simplement le rapport des densités. Plus tard, un tube scellé et gradué suffira à lire la pression d'un coup d'œil ; le principe reste celui des baromètres à mercure, dont l'usage recule aujourd'hui à cause de la toxicité du métal.\n\nTorricelli n'est pas seul dans cette histoire. Secrétaire et dernier élève de Galilée, il reprend un problème laissé ouvert par son maître et correspond avec les savants de son temps. Dans une lettre de 1644, il écrit que nous vivons au fond d'un océan d'air, dont le poids explique les effets observés ; l'image fera fortune. Quatre ans plus tard, c'est Florin Périer, beau-frère de Pascal, qui transporte deux baromètres au sommet du puy de Dôme, le 19 septembre 1648, tandis qu'un témoin relève la hauteur en bas, à Clermont. Torricelli et Pascal ne se rencontrent jamais, mais leurs écrits circulent, et l'expérience du puy de Dôme devient un modèle d'argument fondé sur la mesure.\n\nL'expérience fournit un instrument inattendu. La hauteur de la colonne varie d'un jour à l'autre, et Torricelli note que ces variations annoncent souvent un changement de temps. Le baromètre est né. La comparaison entre le sommet et la plaine confirme ensuite la théorie : moins d'air au-dessus, colonne plus courte.\n\nL'unité de pression garde son nom : le torr, qui vaut un millimètre de mercure. La pression dite normale, fixée par convention, correspond à 760 millimètres de mercure, soit environ 1013 hectopascals. Cette valeur n'est pas une constante universelle : elle change avec l'altitude et la météo. Un avion en vol la mesure en permanence pour calibrer son altimètre. Les marins la consultent avant de lever l'ancre, et les observatoires comparent leurs relevés d'un bout de l'Europe à l'autre. La mesure sert aussi de repère en montagne : à 4 800 mètres, au sommet du Mont-Blanc, la colonne tombe aux alentours de 40 centimètres.\n\nCe qui frappe ici, c'est la modestie du dispositif. Un tube, un bassin, un métal liquide : rien qui ressemble à une grande machine. Pourtant l'expérience transforme une intuition vague en grandeur mesurable, et montre qu'un phénomène invisible, le poids de l'air, se laisse saisir par un raisonnement simple.",
  "q": [
   {
    "q": "En quelle année Torricelli réalise-t-il son expérience ?",
    "o": [
     "1543",
     "1643",
     "1743"
    ],
    "r": 1,
    "e": "Le texte la date de 1643, à Florence."
   },
   {
    "q": "Dans quelle ville travaille-t-il alors ?",
    "o": [
     "Florence",
     "Venise",
     "Paris"
    ],
    "r": 0,
    "e": "L'expérience se déroule à Florence, en Italie."
   },
   {
    "q": "Quelle hauteur les pompes à eau ne dépassaient-elles pas ?",
    "o": [
     "Une dizaine de mètres",
     "Une centaine de mètres",
     "Un mètre environ"
    ],
    "r": 0,
    "e": "Même parfaitement étanches, elles abandonnaient vers dix mètres de hauteur."
   },
   {
    "q": "Quel liquide Torricelli utilise-t-il à la place de l'eau ?",
    "o": [
     "L'alcool",
     "L'huile",
     "Le mercure"
    ],
    "r": 2,
    "e": "Il choisit le mercure, beaucoup plus dense que l'eau."
   },
   {
    "q": "Quelle hauteur la colonne atteint-elle environ ?",
    "o": [
     "2 mètres",
     "10 centimètres",
     "76 centimètres"
    ],
    "r": 2,
    "e": "La colonne se stabilise autour de 76 centimètres au-dessus du bassin."
   },
   {
    "q": "Que trouve-t-on au-dessus de la colonne dans le tube ?",
    "o": [
     "De la vapeur d'eau",
     "Un vide",
     "De l'air comprimé"
    ],
    "r": 1,
    "e": "Le tube fermé laisse un vide au-dessus du niveau de mercure."
   },
   {
    "q": "Qu'est-ce qui équilibre le poids de la colonne de mercure ?",
    "o": [
     "La pression atmosphérique",
     "L'élasticité du verre",
     "La température du bassin"
    ],
    "r": 0,
    "e": "La pression atmosphérique équilibre exactement le poids de la colonne."
   },
   {
    "q": "Quel instrument naît de cette expérience ?",
    "o": [
     "Le thermomètre",
     "Le sismographe",
     "Le baromètre"
    ],
    "r": 2,
    "e": "Les variations de la colonne donnent naissance au baromètre."
   },
   {
    "q": "Au sommet du puy de Dôme, que constate-t-on sur la colonne de mercure ?",
    "o": [
     "Elle est plus longue qu'en bas",
     "Elle est plus courte qu'en bas",
     "Elle disparaît totalement"
    ],
    "r": 1,
    "e": "En 1648, la colonne est plus courte au sommet qu'en plaine, car il y a moins d'air au-dessus."
   },
   {
    "q": "Que vaut un torr ?",
    "o": [
     "Un centimètre d'eau",
     "Un hectopascal",
     "Un millimètre de mercure"
    ],
    "r": 2,
    "e": "L'unité garde le nom de Torricelli et vaut un millimètre de mercure."
   },
   {
    "q": "À quoi correspond la pression normale, en mercure et en hectopascals ?",
    "o": [
     "76 mm de mercure, environ 1013 hPa",
     "760 mm de mercure, environ 1013 hPa",
     "760 mm de mercure, environ 76 hPa"
    ],
    "r": 1,
    "e": "La pression normale vaut 760 millimètres de mercure, soit environ 1013 hectopascals."
   },
   {
    "q": "De quoi dépend la pression atmosphérique ?",
    "o": [
     "De la profondeur du bassin",
     "De la couleur du ciel seulement",
     "De l'altitude et de la météo"
    ],
    "r": 2,
    "e": "Le texte précise qu'elle varie avec l'altitude et les conditions météo."
   },
   {
    "q": "Pourquoi la colonne ne retombe-t-elle pas entièrement ?",
    "o": [
     "Parce que l'air appuie sur le bassin",
     "Parce que le mercure est magnétique",
     "Parce que le verre retient le liquide"
    ],
    "r": 0,
    "e": "La pression de l'air sur la surface libre du bassin soutient la colonne."
   },
   {
    "q": "Pourquoi le tube du puy de Dôme donne-t-il un résultat plus court ?",
    "o": [
     "Il y a moins d'air au-dessus du sommet",
     "Le tube utilisé était plus étroit",
     "Le mercure y gèle plus vite"
    ],
    "r": 0,
    "e": "Moins d'air au-dessus signifie moins de pression, donc une colonne plus courte."
   },
   {
    "q": "Combien de fois le mercure est-il plus dense que l'eau ?",
    "o": [
     "Environ cent fois",
     "Environ treize fois et demie",
     "Environ deux fois"
    ],
    "r": 1,
    "e": "Le mercure est environ treize fois et demie plus dense que l'eau, d'où une colonne bien plus courte."
   },
   {
    "q": "Que peut-on déduire des variations quotidiennes de la colonne ?",
    "o": [
     "La pression de l'air n'est pas constante",
     "Le vide varie de volume selon l'heure",
     "Le mercure change de densité chaque jour"
    ],
    "r": 0,
    "e": "Si la hauteur change d'un jour à l'autre, c'est la pression de l'air qui varie."
   },
   {
    "q": "Que peut-on déduire du fait qu'une pompe n'aspire pas l'eau au-delà de dix mètres ?",
    "o": [
     "Que le vide cesse d'agir passé dix mètres",
     "Que la limite vient de l'air et non de la pompe",
     "Que l'eau devient trop lourde à cette hauteur"
    ],
    "r": 1,
    "e": "Torricelli en conclut que c'est le poids de l'air, et non la machine, qui fixe cette limite."
   },
   {
    "q": "Que peut-on déduire du relevé fait au sommet du Mont-Blanc ?",
    "o": [
     "Que le mercure gèle au-dessus de 4 000 mètres",
     "Que le tube doit être allongé en montagne",
     "Que la pression baisse quand on s'élève"
    ],
    "r": 2,
    "e": "La colonne tombe à 40 centimètres à 4 800 mètres, ce qui confirme une pression plus faible en altitude."
   },
   {
    "q": "Quel est le sujet du texte ?",
    "o": [
     "L'histoire des pompes de jardin",
     "La première mesure de la pression atmosphérique",
     "Les travaux de Pascal sur les probabilités"
    ],
    "r": 1,
    "e": "Le texte raconte l'expérience de Torricelli et la naissance du baromètre."
   },
   {
    "q": "Quelle idée l'auteur met-il en avant en conclusion ?",
    "o": [
     "Une expérience simple peut transformer une intuition en mesure",
     "Les instruments anciens sont aujourd'hui dépassés",
     "La physique exige des machines très complexes"
    ],
    "r": 0,
    "e": "Il souligne la modestie du dispositif face à la portée du résultat obtenu."
   }
  ]
 },
 {
  "id": "c16",
  "theme": "sciences",
  "niveau": 4,
  "titre": "Une roue dentée pour chronométrer la lumière",
  "corps": "En 1849, entre sa maison de Suresnes et une colline de Montmartre, Hippolyte Fizeau installe un dispositif étrange : une roue dentée, un miroir et un trajet aller-retour de plus de huit kilomètres. Il ne cherche pas à éclairer loin, il cherche à chronométrer l'éclair.\n\nLe principe est simple. Un faisceau traverse l'intervalle entre deux dents, part jusqu'au miroir et revient. Si la roue tourne juste assez vite pour qu'une dent se soit substituée au vide pendant le trajet, la lumière est masquée. Fizeau accélère la rotation jusqu'à l'extinction, puis la double jusqu'au retour du faisceau. Connaissant le nombre de dents, la vitesse de rotation et la distance, il en déduit un temps de parcours de quelques dizaines de microsecondes.\n\nLes chiffres du montage disent la finesse du réglage. La roue portait 720 dents, et il fallait la lancer à plus de douze tours par seconde pour que le faisceau revînt masqué ; à cette vitesse, chaque dent passe devant lui en un peu plus d'un dix-millième de seconde. Le trajet aller-retour durait quelques dizaines de microsecondes, moins d'un millième du temps d'un clignement d'œil. Aucune horloge de l'époque ne savait découper un tel instant : la roue servait d'horloge, en transformant une durée en une position angulaire.\n\nIl obtient 313 000 kilomètres par seconde, soit environ 5 pour cent de trop. L'erreur vient des incertitudes sur la distance et sur l'instant exact de l'extinction, mais la méthode est bonne. Foucault la perfectionne en 1862 avec un miroir tournant, et les mesures se resserrent autour de 300 000 kilomètres par seconde. Le miroir tournant, lui, se passe de la roue : il renvoie le faisceau en un point différent selon la durée du trajet, et l'écart se lit à l'œil.\n\nFizeau et Foucault, amis puis rivaux, travaillaient sur le même terrain. En 1850, Foucault reprend l'idée du miroir tournant et compare la vitesse de la lumière dans l'air et dans l'eau : il la trouve plus faible dans l'eau, ce qui tranche en faveur des ondes et contre l'hypothèse des particules. Fizeau, de son côté, fait circuler de l'eau dans un tube et observe le décalage des franges : la lumière y est entraînée par le liquide. Deux expériences de laboratoire venaient de peser sur une querelle théorique. La querelle portait sur la nature de la lumière, et ces vitesses comparées y répondaient mieux que n'importe quel raisonnement.\n\nUn siècle plus tôt, en 1676, Ole Rømer avait déjà estimé la vitesse en observant les éclipses du satellite Io de Jupiter. Selon que la Terre s'éloigne ou s'approche de la planète, ces éclipses arrivent en avance ou en retard de plusieurs minutes. Il en déduisit que la lumière met du temps à voyager, sans pouvoir la mesurer précisément. Rømer travaillait alors à l'Observatoire de Paris, où il suivait les satellites de Jupiter avec Cassini.\n\nEn 1983, la conférence générale des poids et mesures renverse la logique : la vitesse de la lumière dans le vide est fixée par convention à 299 792 458 mètres par seconde, et c'est le mètre qui se définit à partir d'elle. L'étalon le plus rapide de l'univers est devenu une constante, et la longueur une conséquence.\n\nCette constante n'est pas restée un objet de laboratoire. Le mètre avait été rattaché à une raie du krypton en 1960 ; depuis 1983, il se déduit d'un temps de parcours, et les horloges des satellites de navigation s'appuient sur la même valeur. Une expérience de 1849, menée entre une maison et une colline, a fini par définir l'unité de longueur du système international.",
  "q": [
   {
    "q": "En quelle année Fizeau mène-t-il son expérience ?",
    "o": [
     "1676",
     "1862",
     "1849"
    ],
    "r": 2,
    "e": "Le texte date l'expérience de Fizeau de 1849."
   },
   {
    "q": "Entre quels deux lieux le trajet lumineux était-il établi ?",
    "o": [
     "Paris et Versailles",
     "Suresnes et Montmartre",
     "Suresnes et Meudon"
    ],
    "r": 1,
    "e": "Le dispositif reliait sa maison de Suresnes à une colline de Montmartre."
   },
   {
    "q": "Quel était le dispositif central de l'expérience ?",
    "o": [
     "Un prisme et une horloge à balancier",
     "Une roue dentée et un miroir",
     "Un télescope et un pendule"
    ],
    "r": 1,
    "e": "Le texte décrit une roue dentée, un miroir et un long trajet aller-retour."
   },
   {
    "q": "Combien de dents portait la roue de Fizeau ?",
    "o": [
     "7 200 dents",
     "72 dents",
     "720 dents"
    ],
    "r": 2,
    "e": "La roue comptait 720 dents, et il fallait la lancer à plus de douze tours par seconde."
   },
   {
    "q": "Quelle longueur faisait le trajet aller-retour ?",
    "o": [
     "Près de quatre-vingts kilomètres",
     "Environ huit cents mètres",
     "Plus de huit kilomètres"
    ],
    "r": 2,
    "e": "Le trajet aller-retour dépassait huit kilomètres, ce qui rendait le délai mesurable."
   },
   {
    "q": "Que mesure réellement Fizeau ?",
    "o": [
     "Le temps de parcours de la lumière",
     "La longueur d'onde de la lumière",
     "La vitesse de rotation de la Terre"
    ],
    "r": 0,
    "e": "Il chronomètre le trajet de la lumière entre la roue et le miroir."
   },
   {
    "q": "Quel résultat obtient Fizeau ?",
    "o": [
     "299 792 km/s",
     "313 000 km/s",
     "30 000 km/s"
    ],
    "r": 1,
    "e": "Il obtient 313 000 kilomètres par seconde, soit environ 5 pour cent de trop."
   },
   {
    "q": "Quelle était l'ampleur de son erreur ?",
    "o": [
     "Environ 5 pour cent de trop",
     "Environ 50 pour cent de trop",
     "Moins de 1 pour cent de trop"
    ],
    "r": 0,
    "e": "Le texte chiffre l'écart à environ 5 pour cent au-dessus de la valeur réelle."
   },
   {
    "q": "Qui perfectionne la méthode en 1862 ?",
    "o": [
     "Michelson",
     "Rømer",
     "Foucault"
    ],
    "r": 2,
    "e": "Foucault améliore le procédé en 1862 grâce à un miroir tournant."
   },
   {
    "q": "Qu'observa Ole Rømer en 1676 ?",
    "o": [
     "Il observa les éclipses d'Io",
     "Il mesura la parallaxe de Mars",
     "Il chronométra un signal lumineux terrestre"
    ],
    "r": 0,
    "e": "Rømer étudiait les éclipses du satellite Io de Jupiter."
   },
   {
    "q": "Pourquoi ces éclipses semblaient-elles décalées ?",
    "o": [
     "Parce que la lumière faiblit avec la distance",
     "Parce que la distance entre la Terre et Jupiter varie",
     "Parce que Io tourne de façon irrégulière"
    ],
    "r": 1,
    "e": "Le décalage suit l'éloignement ou le rapprochement de la Terre et de Jupiter."
   },
   {
    "q": "Qu'est-ce que Rømer put établir ?",
    "o": [
     "Que la lumière se propage en un temps fini",
     "Que la lumière n'a pas de masse",
     "La valeur exacte de la vitesse"
    ],
    "r": 0,
    "e": "Sans mesure précise, il conclut seulement que la lumière met du temps à voyager."
   },
   {
    "q": "En 1983, que fixe-t-on par convention ?",
    "o": [
     "La longueur du mètre en platine",
     "La vitesse de la lumière dans le vide",
     "La durée de la seconde"
    ],
    "r": 1,
    "e": "La vitesse de la lumière dans le vide devient une valeur fixée par convention."
   },
   {
    "q": "Quelle valeur exacte est retenue en 1983 ?",
    "o": [
     "300 000 000 mètres par seconde",
     "313 000 000 mètres par seconde",
     "299 792 458 mètres par seconde"
    ],
    "r": 2,
    "e": "Le texte donne 299 792 458 mètres par seconde, valeur exacte par définition."
   },
   {
    "q": "Pourquoi l'extinction puis le retour du faisceau permettent-ils la mesure ?",
    "o": [
     "La roue ralentit la lumière dans l'air",
     "Le passage d'une dent renseigne sur la durée du trajet",
     "La lumière perd de l'intensité avec la distance"
    ],
    "r": 1,
    "e": "Le moment où une dent masque le faisceau indique combien de temps la lumière a mis pour revenir."
   },
   {
    "q": "Pourquoi Fizeau obtient-il une valeur trop élevée ?",
    "o": [
     "Parce qu'il comptait chaque dent deux fois",
     "À cause des incertitudes sur la distance et l'instant d'extinction",
     "Parce qu'il mesurait les distances en milles"
    ],
    "r": 1,
    "e": "Le texte attribue l'erreur aux incertitudes sur la distance et sur l'instant exact de l'extinction."
   },
   {
    "q": "Pourquoi la logique est-elle renversée en 1983 ?",
    "o": [
     "On a changé la valeur de la vitesse de la lumière",
     "On a renoncé à mesurer le temps",
     "La constante sert désormais à définir le mètre"
    ],
    "r": 2,
    "e": "La vitesse devient une convention, et le mètre se définit à partir d'elle."
   },
   {
    "q": "Pourquoi l'expérience de Foucault en 1850 compte-t-elle ?",
    "o": [
     "Elle départage les ondes et les particules",
     "Elle mesure la distance de la Terre au Soleil",
     "Elle prouve que la lumière pèse très lourd"
    ],
    "r": 0,
    "e": "La lumière plus lente dans l'eau tranchait en faveur des ondes, contre l'hypothèse corpusculaire."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Comment on a mesuré puis défini la vitesse de la lumière",
     "L'histoire des observations de Jupiter",
     "Les instruments d'optique du XIXe siècle"
    ],
    "r": 0,
    "e": "Le texte suit deux siècles de mesures, jusqu'au renversement de 1983."
   },
   {
    "q": "Pourquoi l'auteur décrit-il le dispositif de Fizeau en détail ?",
    "o": [
     "Pour faire comprendre comment un temps très court devient mesurable",
     "Pour expliquer pourquoi la roue dentée fut ensuite abandonnée",
     "Pour prouver que Fizeau était un excellent mécanicien"
    ],
    "r": 0,
    "e": "La description montre comment une rotation rapide transforme un délai infime en observation nette."
   }
  ]
 },
 {
  "id": "c21",
  "theme": "sciences",
  "niveau": 4,
  "titre": "La feuille, une usine qui fonctionne à la lumière",
  "corps": "Une feuille verte posée sur un rebord de fenêtre paraît immobile. Elle travaille pourtant : elle capte la lumière, puise de l'eau par ses nervures, aspire du dioxyde de carbone par de petits pores appelés stomates et rejette de l'oxygène. Ramené à l'échelle d'une forêt, ce bilan alimente presque toute la chaîne alimentaire et renouvelle l'oxygène de l'atmosphère.\n\nLe pigment responsable, la chlorophylle, tapisse l'intérieur des chloroplastes. Il absorbe surtout les lumières bleue, vers 450 nanomètres, et rouge, vers 660 nanomètres, et réfléchit le vert, ce qui explique la couleur des feuilles. Un pigment qui nous paraît vert travaille donc peu avec cette couleur : la lumière verte, mal absorbée, est en grande partie renvoyée vers l'observateur. D'autres pigments, les caroténoïdes, complètent le dispositif : ils captent des longueurs d'onde voisines et dissipent l'excès de lumière lorsque le soleil frappe trop fort.\n\nLa réaction se déroule en deux temps. Dans les membranes des thylakoïdes, la lumière arrache des électrons à la chlorophylle ; pour les remplacer, la plante casse des molécules d'eau et libère de l'oxygène. L'énergie ainsi captée sert à fabriquer deux transporteurs, l'ATP et le NADPH.\n\nDans le stroma, le cycle de Calvin utilise ces transporteurs pour fixer le dioxyde de carbone sur une molécule à cinq carbones, sous l'action d'une enzyme très abondante, la Rubisco. Le bilan simplifié s'écrit avec six molécules de dioxyde de carbone et six molécules d'eau, pour produire un sucre à six carbones et six molécules d'oxygène. Le rendement reste modeste : la plante convertit souvent en matière organique un ou deux pour cent seulement de l'énergie lumineuse qu'elle reçoit.\n\nUne feuille perd en même temps beaucoup d'eau : l'essentiel de celle que la plante absorbe s'évapore par les stomates, qui s'ouvrent pour laisser entrer le dioxyde de carbone. Cette contradiction traverse toute la physiologie végétale. Certaines plantes des pays chauds, comme le maïs et la canne à sucre, ont contourné le problème en concentrant le dioxyde de carbone autour de la Rubisco, ce qui limite les pertes.\n\nLes chloroplastes gardent la trace de leur origine. Ils possèdent leur propre ADN, circulaire, et se divisent indépendamment du reste de la cellule ; la plupart des botanistes y voient les descendants d'une cyanobactérie captée jadis par une cellule hôte, hypothèse dite de l'endosymbiose. L'ouverture des stomates, elle, obéit à deux cellules de garde qui se gonflent d'eau et s'écartent : elles s'ouvrent à la lumière et se referment quand la plante manque d'eau ou que la chaleur devient excessive.\n\nL'histoire de cette découverte est faite d'expériences simples. En 1771, Joseph Priestley montre qu'une plante peut restaurer un air vicié par une bougie ; en 1779, Jan Ingenhousz précise que la lumière est indispensable. Il faudra ensuite un siècle de chimie pour établir l'équation, et davantage encore pour comprendre le détail des protéines impliquées, dont la structure de la Rubisco n'a été élucidée qu'au XXe siècle.",
  "q": [
   {
    "q": "Par quels pores la feuille absorbe-t-elle le dioxyde de carbone ?",
    "o": [
     "Par les nervures",
     "Par les chloroplastes",
     "Par les stomates"
    ],
    "r": 2,
    "e": "Le texte cite de petits pores appelés stomates comme porte d'entrée du dioxyde de carbone."
   },
   {
    "q": "Quelles lumières la chlorophylle absorbe-t-elle le plus ?",
    "o": [
     "Le bleu vers 450 nanomètres et le rouge vers 660",
     "Le vert vers 550 nanomètres seulement",
     "L'infrarouge au-delà de 900 nanomètres"
    ],
    "r": 0,
    "e": "La chlorophylle absorbe surtout le bleu vers 450 nanomètres et le rouge vers 660 nanomètres."
   },
   {
    "q": "Pourquoi les feuilles nous paraissent-elles vertes ?",
    "o": [
     "Elles réfléchissent la lumière verte peu absorbée",
     "Elles fabriquent un pigment de couleur verte",
     "Elles absorbent fortement la lumière verte"
    ],
    "r": 0,
    "e": "La lumière verte est mal absorbée par la chlorophylle et renvoyée vers l'observateur."
   },
   {
    "q": "Quel rôle jouent les caroténoïdes ?",
    "o": [
     "Ils dissipent l'excès de lumière",
     "Ils fixent le dioxyde de carbone",
     "Ils remplacent la chlorophylle la nuit"
    ],
    "r": 0,
    "e": "Ces pigments accessoires captent des longueurs d'onde voisines et dissipent l'excès de lumière."
   },
   {
    "q": "Dans quelles structures la lumière arrache-t-elle des électrons à la chlorophylle ?",
    "o": [
     "Dans les nervures de la feuille",
     "Dans le stroma du chloroplaste",
     "Dans les membranes des thylakoïdes"
    ],
    "r": 2,
    "e": "Le texte situe cette première étape dans les membranes des thylakoïdes."
   },
   {
    "q": "D'où vient l'oxygène rejeté par la plante ?",
    "o": [
     "Du sucre fabriqué dans le stroma",
     "De la cassure des molécules d'eau",
     "De la cassure du dioxyde de carbone"
    ],
    "r": 1,
    "e": "Pour remplacer les électrons arrachés, la plante casse des molécules d'eau et libère de l'oxygène."
   },
   {
    "q": "Quels transporteurs d'énergie la première étape fabrique-t-elle ?",
    "o": [
     "L'ADN et l'ARN",
     "Le glucose et l'amidon",
     "L'ATP et le NADPH"
    ],
    "r": 2,
    "e": "L'énergie captée sert à fabriquer deux transporteurs, l'ATP et le NADPH."
   },
   {
    "q": "Où se déroule le cycle de Calvin ?",
    "o": [
     "Dans les parois des stomates",
     "Dans le stroma du chloroplaste",
     "Dans les membranes des thylakoïdes"
    ],
    "r": 1,
    "e": "Le texte place le cycle de Calvin dans le stroma, où il utilise l'ATP et le NADPH."
   },
   {
    "q": "Quelle enzyme fixe le dioxyde de carbone dans le cycle de Calvin ?",
    "o": [
     "La Rubisco",
     "La chlorophylle",
     "L'hémoglobine"
    ],
    "r": 0,
    "e": "Le dioxyde de carbone est fixé sur une molécule à cinq carbones sous l'action de la Rubisco."
   },
   {
    "q": "Combien de molécules de dioxyde de carbone le bilan simplifié fait-il intervenir ?",
    "o": [
     "Douze",
     "Six",
     "Deux"
    ],
    "r": 1,
    "e": "Le bilan simplifié retient six molécules de dioxyde de carbone et six molécules d'eau."
   },
   {
    "q": "Quel sucre le bilan simplifié produit-il ?",
    "o": [
     "Un sucre à six carbones",
     "Un sucre à trois carbones",
     "Un sucre à cinq carbones"
    ],
    "r": 0,
    "e": "Le bilan aboutit à un sucre à six carbones et à six molécules d'oxygène."
   },
   {
    "q": "Quelle part de l'énergie lumineuse la plante convertit-elle souvent ?",
    "o": [
     "La moitié environ",
     "Un ou deux pour cent",
     "Un quart environ"
    ],
    "r": 1,
    "e": "Le texte parle d'un rendement modeste, souvent de un ou deux pour cent de l'énergie reçue."
   },
   {
    "q": "Qu'observe Joseph Priestley en 1771 ?",
    "o": [
     "La lumière est indispensable à la plante",
     "Une plante peut restaurer un air vicié",
     "Le carbone 14 date les tissus végétaux"
    ],
    "r": 1,
    "e": "En 1771, Priestley montre qu'une plante peut restaurer un air vicié par une bougie."
   },
   {
    "q": "Par où la plante perd-elle l'essentiel de son eau ?",
    "o": [
     "Par les nervures, vers le bois",
     "Par les racines, vers le sol",
     "Par évaporation au niveau des stomates"
    ],
    "r": 2,
    "e": "Le texte indique que l'essentiel de l'eau absorbée s'évapore par les stomates ouverts."
   },
   {
    "q": "Qu'ajoute Jan Ingenhousz en 1779 ?",
    "o": [
     "Les stomates s'ouvrent la nuit",
     "L'oxygène provient du dioxyde de carbone",
     "La lumière est indispensable à l'opération"
    ],
    "r": 2,
    "e": "Ingenhousz précise en 1779 que la lumière est indispensable au processus."
   },
   {
    "q": "Pourquoi la lumière verte est-elle peu efficace pour la photosynthèse ?",
    "o": [
     "La chlorophylle l'absorbe mal et la renvoie",
     "Elle est trop chaude pour les chloroplastes",
     "Elle traverse la feuille sans la toucher"
    ],
    "r": 0,
    "e": "Comme elle est mal absorbée, elle fournit peu d'énergie au pigment qui doit la capter."
   },
   {
    "q": "Pourquoi la plante doit-elle casser des molécules d'eau ?",
    "o": [
     "Pour refroidir les chloroplastes",
     "Pour remplacer les électrons arrachés",
     "Pour produire du dioxyde de carbone"
    ],
    "r": 1,
    "e": "La cassure de l'eau fournit les électrons perdus par la chlorophylle et libère de l'oxygène."
   },
   {
    "q": "Pourquoi le maïs résiste-t-il mieux à la chaleur ?",
    "o": [
     "Il n'utilise pas la lumière du soleil",
     "Il concentre le dioxyde de carbone autour de la Rubisco",
     "Il ferme ses stomates toute la journée"
    ],
    "r": 1,
    "e": "Cette concentration limite les pertes d'eau liées à l'ouverture prolongée des stomates."
   },
   {
    "q": "Quel est le sujet principal de ce texte ?",
    "o": [
     "Le mécanisme de la photosynthèse et son histoire",
     "La couleur des fleurs au printemps",
     "La culture des plantes en serre"
    ],
    "r": 0,
    "e": "Le texte décrit les deux étapes de la photosynthèse avant d'en retracer les grandes expériences."
   },
   {
    "q": "Pourquoi l'auteur commence-t-il par une feuille immobile sur un rebord ?",
    "o": [
     "Pour rappeler la fragilité des plantes",
     "Pour décrire un jardin de ville",
     "Pour opposer l'apparence calme au travail réel"
    ],
    "r": 2,
    "e": "L'image de l'immobilité sert à souligner que la feuille travaille sans qu'on le voie."
   }
  ]
 },
 {
  "id": "c15",
  "theme": "société",
  "niveau": 4,
  "titre": "1582, l'année où dix jours n'existèrent pas",
  "corps": "En octobre 1582, les habitants de Rome se couchèrent le jeudi 4 et se réveillèrent le vendredi 15. Dix jours n'avaient jamais existé. Ce saut ne relevait pas du prodige mais d'un décret : la bulle Inter gravissimas, promulguée en février par Grégoire XIII, corrigeait un calendrier en retard.\n\nLe calendrier julien, fixé par Jules César en 46 avant notre ère, comptait une année moyenne de 365,25 jours. Or l'année tropique, celle des saisons, dure un peu moins : 365,2422 jours. L'écart, infime chaque année, s'accumulait. Au XVIe siècle, l'équinoxe de printemps tombait le 11 mars au lieu du 21, ce qui déréglait le calcul de Pâques, fixé par rapport à cette date.\n\nDerrière le décret, il y a plusieurs décennies de calcul. Le médecin calabrais Luigi Lilio propose dès les années 1570 un système complet, exposé après sa mort par son frère ; le jésuite Christophorus Clavius, mathématicien du collège romain, en assure la mise au point et la défense. Les auteurs s'appuient sur les tables pruténiques, construites sur les paramètres de Copernic, qui donnaient de l'année tropique une valeur plus juste que les tables anciennes. La réforme n'est donc pas un coup de force isolé : elle exploite l'astronomie la plus avancée de son temps, celle d'un homme dont l'œuvre sera mise à l'index quelques décennies plus tard. Clavius publie ensuite un traité qui justifie chaque règle et répond une par une aux objections.\n\nLe calcul se résume à une soustraction. L'écart entre l'année julienne et l'année des saisons vaut environ onze minutes par an, soit un jour tous les cent vingt-huit ans. Depuis le concile de Nicée, en 325, le retard accumulé atteint une dizaine de jours : c'est lui que le décret efface d'un coup. La nouvelle règle ramène l'année moyenne à 365,2425 jours, à peine plus longue que l'année tropique, et l'erreur tombe à quelques secondes par an.\n\nLa commission réunie après le concile de Trente adopte deux mesures. On supprima dix jours pour recaler le calendrier sur les saisons. On corrigea ensuite la règle des années bissextiles : un siècle n'est bissextile que s'il est divisible par 400. 1600 et 2000 le furent ; 1700, 1800 et 1900 ne le furent pas. L'erreur résiduelle tombe à un jour tous les trois mille ans environ.\n\nL'application fut immédiate en Italie, en Espagne, au Portugal et en Pologne, plus lente ailleurs. La France passa au nouveau calendrier en décembre 1582, en sautant du 9 au 20. Les États qui ne reconnaissaient pas l'autorité de Rome résistèrent longtemps, y voyant une décision étrangère : l'Angleterre et ses colonies attendirent 1752, la Russie 1918, la Grèce 1923. Dans les pays protestants, la réforme fut d'abord reçue comme une manœuvre romaine, et certains registres portèrent deux colonnes de dates.\n\nLa date de Pâques ne dépend pas que de l'équinoxe : il fallait aussi suivre les phases de la Lune, puisque la fête tombe le premier dimanche après la première pleine lune de printemps. La réforme a donc introduit un mécanisme fondé sur le nombre d'or et sur l'épacte, qui décale les pleines lunes conventionnelles pour les garder alignées sur le ciel. C'est cette partie du décret, la moins visible, qui a demandé le plus de calculs.\n\nCes décalages compliquent la lecture des archives : une même lettre peut porter deux dates selon le pays expéditeur. Les historiens notent alors l'année suivie d'une barre oblique, pour signaler l'incertitude. Un détail arithmétique vieux de quatre siècles continue ainsi d'embarrasser ceux qui classent les documents.",
  "q": [
   {
    "q": "En quelle année le calendrier grégorien est-il promulgué ?",
    "o": [
     "1582",
     "1752",
     "1923"
    ],
    "r": 0,
    "e": "La bulle est promulguée en février 1582 et appliquée dès octobre à Rome."
   },
   {
    "q": "Quel jour suivit le jeudi 4 octobre 1582 à Rome ?",
    "o": [
     "Le vendredi 5 octobre",
     "Le vendredi 15 octobre",
     "Le lundi 14 octobre"
    ],
    "r": 1,
    "e": "Dix jours furent supprimés : au 4 octobre succéda directement le 15 octobre."
   },
   {
    "q": "Combien de jours furent supprimés en 1582 ?",
    "o": [
     "Dix",
     "Trois",
     "Onze"
    ],
    "r": 0,
    "e": "Le texte parle de dix jours qui n'avaient jamais existé."
   },
   {
    "q": "Qui avait fixé le calendrier julien ?",
    "o": [
     "Constantin, en 325 de notre ère",
     "Jules César, en 46 avant notre ère",
     "Auguste, en 8 avant notre ère"
    ],
    "r": 1,
    "e": "Le calendrier julien est attribué à Jules César, en 46 avant notre ère."
   },
   {
    "q": "Quelle durée moyenne l'année julienne comptait-elle ?",
    "o": [
     "365 jours exactement",
     "365,2422 jours",
     "365,25 jours"
    ],
    "r": 2,
    "e": "Le texte oppose les 365,25 jours du calendrier julien aux 365,2422 jours de l'année tropique."
   },
   {
    "q": "Combien de temps dure l'année tropique selon le texte ?",
    "o": [
     "365,2422 jours",
     "365,25 jours",
     "365,5 jours"
    ],
    "r": 0,
    "e": "L'année des saisons dure 365,2422 jours, un peu moins que l'année julienne."
   },
   {
    "q": "Quel écart annuel séparait l'année julienne de l'année des saisons ?",
    "o": [
     "Environ trois secondes",
     "Environ onze minutes",
     "Environ une heure"
    ],
    "r": 1,
    "e": "Onze minutes par an, soit un jour de retard accumulé tous les cent vingt-huit ans."
   },
   {
    "q": "Quel dérèglement motiva la réforme ?",
    "o": [
     "La Lune était décalée de deux jours",
     "Noël tombait en été",
     "L'équinoxe tombait le 11 mars au lieu du 21"
    ],
    "r": 2,
    "e": "L'équinoxe de printemps avait reculé au 11 mars, ce qui déréglait le calcul de Pâques."
   },
   {
    "q": "Quelle fête dépendait de la date de l'équinoxe ?",
    "o": [
     "Pâques",
     "La Toussaint",
     "Noël"
    ],
    "r": 0,
    "e": "Le texte précise que le calcul de Pâques était fixé par rapport à l'équinoxe."
   },
   {
    "q": "Quelle nouvelle règle fut adoptée pour les siècles bissextiles ?",
    "o": [
     "Divisible par 400",
     "Divisible par 100",
     "Divisible par 4 uniquement"
    ],
    "r": 0,
    "e": "Un siècle n'est bissextile que s'il est divisible par 400."
   },
   {
    "q": "Quels siècles furent effectivement bissextiles ?",
    "o": [
     "1700 et 1900",
     "1800 et 1600",
     "1600 et 2000"
    ],
    "r": 2,
    "e": "1600 et 2000 le furent ; 1700, 1800 et 1900 ne le furent pas."
   },
   {
    "q": "Quand la France adopta-t-elle le nouveau calendrier ?",
    "o": [
     "En 1918",
     "En 1752",
     "En décembre 1582"
    ],
    "r": 2,
    "e": "La France passa au nouveau calendrier dès décembre 1582, peu après Rome."
   },
   {
    "q": "Quel saut de dates la France opéra-t-elle ?",
    "o": [
     "Du 9 au 20 décembre",
     "Du 1er au 11 décembre",
     "Du 4 au 15 décembre"
    ],
    "r": 0,
    "e": "Le texte indique un passage du 9 au 20 décembre 1582."
   },
   {
    "q": "Quand l'Angleterre et ses colonies adoptèrent-elles le calendrier ?",
    "o": [
     "1582",
     "1923",
     "1752"
    ],
    "r": 2,
    "e": "L'Angleterre et ses colonies attendirent 1752, bien après les pays catholiques."
   },
   {
    "q": "Quelle erreur résiduelle subsiste dans le calendrier actuel ?",
    "o": [
     "Un jour tous les dix mille ans",
     "Un jour tous les trois mille ans environ",
     "Un jour tous les cent ans"
    ],
    "r": 1,
    "e": "Le texte évalue l'erreur restante à un jour tous les trois mille ans environ."
   },
   {
    "q": "Pourquoi fallait-il supprimer dix jours d'un seul coup ?",
    "o": [
     "Parce que l'écart accumulé depuis l'Antiquité atteignait dix jours",
     "Parce que l'année tropique raccourcit à chaque siècle",
     "Parce qu'on voulait s'aligner sur l'Angleterre"
    ],
    "r": 0,
    "e": "Le retard s'était accumulé sur des siècles : il fallait l'effacer en une fois pour retrouver les saisons."
   },
   {
    "q": "Pourquoi les archives deviennent-elles ambiguës après la réforme ?",
    "o": [
     "Les scribes écrivaient les dates en chiffres romains",
     "Une même date peut correspondre à deux jours selon le pays",
     "Les registres ont brûlé pendant les réformes"
    ],
    "r": 1,
    "e": "Tous les pays n'ayant pas basculé ensemble, une lettre peut porter deux dates différentes."
   },
   {
    "q": "Que montre le choix de 1600 et 2000 comme années bissextiles ?",
    "o": [
     "Qu'on a supprimé tous les siècles bissextiles",
     "Qu'on a corrigé le décalage par une règle arithmétique durable",
     "Qu'on a conservé la règle julienne intacte"
    ],
    "r": 1,
    "e": "La règle des 400 ans corrige l'écart sans intervention future, par simple arithmétique."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La vie de Grégoire XIII avant son pontificat",
     "Une réforme arithmétique du calendrier et ses applications inégales",
     "L'histoire des horloges mécaniques en Europe"
    ],
    "r": 1,
    "e": "Le texte explique une correction de calendrier, puis sa diffusion très inégale selon les États."
   },
   {
    "q": "Pourquoi l'auteur termine-t-il sur les archives ?",
    "o": [
     "Pour dater la naissance de la diplomatie européenne",
     "Pour prouver que la réforme fut finalement inutile",
     "Pour montrer qu'une décision technique laisse des traces durables"
    ],
    "r": 2,
    "e": "Un détail de calcul vieux de quatre siècles continue de compliquer le travail des historiens."
   }
  ]
 },
 {
  "id": "c20",
  "theme": "société",
  "niveau": 4,
  "titre": "Le livre qui sortait enfin de la bibliothèque",
  "corps": "Pendant longtemps, une bibliothèque fut un lieu où l'on consultait des livres sur place, souvent réservés à des savants ou à des clercs. Les collections des couvents et des universités étaient enchaînées ou prêtées sous caution ; emprunter un volume chez soi, gratuitement, pour le lire dans son fauteuil, n'allait pas de soi. Le livre coûtait cher, et la pièce qu'on prêtait risquait de ne jamais revenir. Les cabinets de lecture du XIXe siècle avaient ouvert une brèche, en louant le droit de lire moyennant un abonnement.\n\nEn France, la Révolution donna un premier élan : les bibliothèques des congrégations confisquées devinrent des dépôts publics, ouverts aux habitants des villes. Le tournant décisif vint pourtant du Royaume-Uni. Une loi de 1850 autorisa les villes à financer sur leurs impôts une bibliothèque ouverte à tous, et Manchester en ouvrit une en 1852. Aux États-Unis, Boston suivit en 1854. Le principe était nouveau : la lecture devenait un service public, payé par la collectivité et non par l'usager.\n\nUn industriel américain, Andrew Carnegie, finança à partir des années 1880 plus de deux mille bibliothèques, à condition que la commune fournisse le terrain et le budget de fonctionnement. Ce geste spectaculaire accéléra la diffusion du modèle sans en être l'inventeur : il appliquait une formule déjà éprouvée, en la finançant à grande échelle. En France, les bibliothèques populaires des années 1860 visèrent un public ouvrier, avec des romans, des revues et des conférences du soir.\n\nIl fallait aussi classer. En 1876, Melvil Dewey publia un système de cotes numériques qui rangeait les savoirs en dix grandes classes, puis en subdivisions. Bruxelles prolongea l'idée au début du XXe siècle avec une classification décimale universelle, plus souple, conçue pour le répertoire bibliographique international. Simple, la cote permit au lecteur de retrouver seul un ouvrage dans des rayons qui comptaient parfois des dizaines de milliers de volumes.\n\nLe prêt à domicile changea les usages : on lut des romans, des manuels et des journaux reliés, et les enfants eurent leurs propres salles. Il fallut des bâtiments, des magasins, des fichiers, puis des catalogueurs payés ; la carte de lecteur devint un objet courant. Les horaires s'étendirent, et le prêt entre bibliothèques permit d'obtenir un ouvrage absent des rayons. Les bâtiments eux-mêmes changèrent : aux magasins fermés succédèrent des salles de lecture éclairées, des rayonnages accessibles au public, des tables où l'on pouvait travailler des heures. Un catalogue collectif, d'abord imprimé, puis informatisé à partir des années 1970, remplaça les fichiers de carton et permit de savoir en quelques secondes si un ouvrage existait ailleurs. Le bibliothécaire, formé dans une école spécialisée, devint un professionnel du classement et du conseil, et non plus un gardien de collection.\n\nUne bibliothèque de prêt n'est donc pas un simple entrepôt de papier : c'est une institution qui suppose un budget, un catalogue, des règles de retour et une idée de ce que la collectivité doit à ses habitants. Elle suppose aussi des choix : ce qu'on achète, ce qu'on conserve, ce qu'on laisse vieillir en réserve. Derrière le geste banal d'emprunter un livre se tient une décision sur l'accès au savoir.",
  "q": [
   {
    "q": "Comment fonctionnaient les cabinets de lecture du XIXe siècle ?",
    "o": [
     "Ils louaient le droit de lire par abonnement",
     "Ils vendaient les livres à bas prix",
     "Ils prêtaient gratuitement à tous"
    ],
    "r": 0,
    "e": "Le texte les présente comme des lieux où l'on louait le droit de lire moyennant un abonnement."
   },
   {
    "q": "Quelle loi autorisa les villes britanniques à financer une bibliothèque publique ?",
    "o": [
     "Une loi de 1850",
     "Une loi de 1876",
     "Une loi de 1852"
    ],
    "r": 0,
    "e": "La loi de 1850 autorisa les villes à financer sur leurs impôts une bibliothèque ouverte à tous."
   },
   {
    "q": "Quelle ville ouvrit une bibliothèque publique en 1852 ?",
    "o": [
     "Manchester",
     "Londres",
     "Édimbourg"
    ],
    "r": 0,
    "e": "Le texte cite Manchester, qui ouvrit la sienne en 1852, deux ans après la loi."
   },
   {
    "q": "En quelle année Boston ouvrit-elle sa bibliothèque publique ?",
    "o": [
     "En 1852",
     "En 1854",
     "En 1876"
    ],
    "r": 1,
    "e": "Le texte indique que Boston suivit en 1854, après Manchester en 1852."
   },
   {
    "q": "Sur quoi reposait le principe nouveau de la bibliothèque publique ?",
    "o": [
     "Un service payé par chaque lecteur",
     "Un service payé par la collectivité",
     "Un service financé par les éditeurs"
    ],
    "r": 1,
    "e": "La lecture devenait un service public, payé par la collectivité et non par l'usager."
   },
   {
    "q": "Combien de bibliothèques Andrew Carnegie finança-t-il ?",
    "o": [
     "Une centaine environ",
     "Plus de deux mille",
     "Plus de cent mille"
    ],
    "r": 1,
    "e": "Le texte indique plus de deux mille bibliothèques financées à partir des années 1880."
   },
   {
    "q": "Quelle condition Carnegie posait-il aux communes ?",
    "o": [
     "Réserver la moitié des places aux ouvriers",
     "Fournir le terrain et le budget de fonctionnement",
     "Acheter les livres à son fournisseur"
    ],
    "r": 1,
    "e": "La commune devait fournir le terrain et le budget de fonctionnement de l'établissement."
   },
   {
    "q": "Quel public visaient les bibliothèques populaires françaises des années 1860 ?",
    "o": [
     "Les étudiants en droit",
     "Un public ouvrier",
     "Les ecclésiastiques seulement"
    ],
    "r": 1,
    "e": "Elles visaient un public ouvrier, avec des romans, des revues et des conférences du soir."
   },
   {
    "q": "En quelle année Melvil Dewey publia-t-il son système de classement ?",
    "o": [
     "En 1900",
     "En 1850",
     "En 1876"
    ],
    "r": 2,
    "e": "Le système de cotes numériques de Dewey fut publié en 1876."
   },
   {
    "q": "En combien de grandes classes le système de Dewey range-t-il les savoirs ?",
    "o": [
     "Trois classes",
     "Dix classes",
     "Cent classes"
    ],
    "r": 1,
    "e": "Le texte parle de dix grandes classes, ensuite subdivisées."
   },
   {
    "q": "Où fut conçue la classification décimale universelle ?",
    "o": [
     "À Bruxelles",
     "À Manchester",
     "À Boston"
    ],
    "r": 0,
    "e": "Le texte situe à Bruxelles cette classification plus souple, au début du XXe siècle."
   },
   {
    "q": "Quel avantage le classement par cotes apportait-il au lecteur ?",
    "o": [
     "Il obtenait un prêt plus long",
     "Il lisait sans passer par un catalogue",
     "Il retrouvait seul un ouvrage dans les rayons"
    ],
    "r": 2,
    "e": "Grâce aux cotes, le lecteur pouvait retrouver seul un ouvrage parmi des dizaines de milliers de volumes."
   },
   {
    "q": "Quels documents les lecteurs empruntaient-ils, selon le texte ?",
    "o": [
     "Uniquement des ouvrages savants",
     "Des manuscrits anciens seulement",
     "Des romans, des manuels et des journaux reliés"
    ],
    "r": 2,
    "e": "Le prêt à domicile fit circuler romans, manuels et journaux reliés, et ouvrit des salles aux enfants."
   },
   {
    "q": "Comment les collections anciennes étaient-elles protégées ?",
    "o": [
     "Les salles fermaient à clé la nuit",
     "Les ouvrages étaient copiés à la main",
     "Les livres étaient enchaînés ou prêtés sous caution"
    ],
    "r": 2,
    "e": "Le texte signale que les collections des couvents et des universités étaient enchaînées ou prêtées sous caution."
   },
   {
    "q": "Pourquoi le prêt à domicile était-il risqué au départ ?",
    "o": [
     "Les bâtiments manquaient de place",
     "Les lecteurs ne savaient pas lire",
     "Le livre coûtait cher et pouvait ne pas revenir"
    ],
    "r": 2,
    "e": "Le prix élevé du volume et le risque de perte expliquent la réticence initiale à prêter."
   },
   {
    "q": "À quelle condition Carnegie finançait-il une bibliothèque ?",
    "o": [
     "La commune devait fournir le terrain et le budget de fonctionnement",
     "La ville devait lui verser une redevance annuelle",
     "La bibliothèque devait porter son nom"
    ],
    "r": 0,
    "e": "Carnegie finançait à condition que la commune fournisse le terrain et le budget de fonctionnement."
   },
   {
    "q": "Qui payait la bibliothèque publique ouverte en 1850 ?",
    "o": [
     "La collectivité, par ses impôts, et non l'usager",
     "Les lecteurs, par un abonnement",
     "Un industriel, à lui seul"
    ],
    "r": 0,
    "e": "La loi de 1850 autorisait les villes à financer sur leurs impôts une bibliothèque ouverte à tous : un service public payé par la collectivité."
   },
   {
    "q": "Pourquoi le système de Dewey fut-il adopté par tant d'établissements ?",
    "o": [
     "Sa simplicité le rendait facile à appliquer",
     "Il était imposé par la loi de 1850",
     "Il ne comportait aucune subdivision"
    ],
    "r": 0,
    "e": "Le texte souligne qu'il était simple, ce qui explique son adoption par des milliers d'établissements."
   },
   {
    "q": "Quel est le sujet principal de ce texte ?",
    "o": [
     "La naissance du prêt public et de la lecture pour tous",
     "L'histoire de l'imprimerie et du livre de poche",
     "Le classement des archives administratives"
    ],
    "r": 0,
    "e": "Le texte raconte comment la bibliothèque est passée du cabinet savant au service public de prêt."
   },
   {
    "q": "Quelle idée l'auteur défend-il à propos de la bibliothèque de prêt ?",
    "o": [
     "C'est un héritage du Moyen Âge inchangé",
     "C'est une institution, pas un simple dépôt de livres",
     "C'est un commerce comme les autres"
    ],
    "r": 1,
    "e": "La dernière phrase affirme qu'elle suppose budget, catalogue et règles, donc une véritable institution."
   }
  ]
 },
 {
  "id": "c25",
  "theme": "société",
  "niveau": 4,
  "titre": "Le penny qui a changé la poste",
  "corps": "Avant 1840, envoyer une lettre au Royaume-Uni coûtait cher et le prix dépendait de la distance parcourue et du nombre de feuilles. Surtout, c'était le destinataire qui payait, à la livraison : un refus, et le facteur repartait avec la lettre. Les frais de perception absorbaient une part du revenu, et beaucoup de correspondances circulaient par des moyens détournés, confiées à des voyageurs ou glissées dans des colis.\n\nUn réformateur, Rowland Hill, publie en 1837 une brochure qui démonte le système. Il propose un tarif unique et très bas, un penny, payé d'avance par l'expéditeur, quelle que soit la distance. L'argument était économique : le coût d'une lettre dépend surtout du tri et de la distribution, très peu de la distance parcourue. Le Parlement adopte le principe, et le tarif uniforme entre en vigueur en janvier 1840.\n\nRestait à prouver le paiement. On imagina d'abord une enveloppe prépayée illustrée, dessinée par un peintre, dont les caricatures eurent tôt fait de décourager l'usage. On retint ensuite un petit rectangle de papier gommé portant l'effigie du souverain, à coller sur la lettre : le timbre-poste adhésif, mis en vente en mai 1840. Les premières feuilles sont imprimées sans dentelures ; il faut les découper aux ciseaux, et l'oblitération se fait à l'encre rouge. Comme cette marque se distingue mal sur un timbre noir, on adopte dès 1841 un timbre rouge, mieux protégé contre la réutilisation.\n\nLe succès est immédiat. En quelques années, d'autres pays adoptent le timbre et le tarif uniforme ; la France émet le sien en 1849. Le courrier devient un service de masse, les volumes augmentent fortement, et la boîte aux lettres, le tri puis l'affranchissement mécanique suivront. Un épisode intermédiaire mérite d'être rappelé : en décembre 1839, avant l'adoption définitive, un tarif uniforme à quatre pence fut essayé pendant quelques semaines, et le public y répondit aussitôt. Le tarif unique obligea aussi la poste à revoir son organisation : peser les lettres, vendre les timbres aux guichets et chez des détaillants, contrôler l'affranchissement, trier plus vite. Le timbre, objet banal, est aussi un instrument de contrôle : il prouve que la taxe a été payée avant le départ.\n\nL'organisation internationale vint plus tard. En 1874, des États réunis à Berne créent une union générale des postes, chargée de simplifier les échanges entre pays ; elle prendra ensuite le nom d'Union postale universelle. Le principe est simple : chaque lettre est affranchie dans son pays d'origine et circule ensuite sans nouvelle taxe.\n\nL'usage a laissé des traces durables : la collection, la philatélie, née peu après ; l'habitude de dater le cachet ; et l'idée que la poste doit être accessible au plus grand nombre, y compris dans les villages. Un petit carré de papier a ainsi transformé une taxe en service, et fait de l'écrit une habitude quotidienne.",
  "q": [
   {
    "q": "Qui payait une lettre avant la réforme de 1840 ?",
    "o": [
     "Le destinataire, à la livraison",
     "Le bureau de poste, sur ses fonds",
     "L'expéditeur, au départ"
    ],
    "r": 0,
    "e": "Le texte indique que c'était le destinataire qui payait, à la livraison du courrier."
   },
   {
    "q": "De quoi dépendait le prix d'une lettre avant 1840 ?",
    "o": [
     "De la distance et du nombre de feuilles",
     "De l'heure de dépôt au bureau",
     "Du poids et de la couleur du papier"
    ],
    "r": 0,
    "e": "Le tarif dépendait de la distance parcourue et du nombre de feuilles composant l'envoi."
   },
   {
    "q": "Sous quelle forme Rowland Hill publie-t-il ses propositions en 1837 ?",
    "o": [
     "Un rapport officiel du Parlement",
     "Une brochure diffusée au public",
     "Une loi votée d'urgence"
    ],
    "r": 1,
    "e": "Le texte indique qu'il publie en 1837 une brochure qui démonte le système en place."
   },
   {
    "q": "Quel montant Rowland Hill propose-t-il en 1837 ?",
    "o": [
     "Deux pence selon la distance",
     "Un penny, quelle que soit la distance",
     "Un shilling par feuille"
    ],
    "r": 1,
    "e": "Hill propose un tarif unique et très bas, un penny, payé d'avance par l'expéditeur."
   },
   {
    "q": "Quel argument économique justifiait ce tarif unique ?",
    "o": [
     "Le coût vient surtout du tri et de la distribution",
     "La distance représente l'essentiel des frais",
     "Les lettres lointaines coûtent moins cher"
    ],
    "r": 0,
    "e": "Le coût d'une lettre dépend surtout du tri et de la distribution, très peu de la distance."
   },
   {
    "q": "Quand le tarif uniforme entre-t-il en vigueur ?",
    "o": [
     "En mai 1840",
     "En 1849",
     "En janvier 1840"
    ],
    "r": 2,
    "e": "Le Parlement adopte le principe et le tarif uniforme s'applique dès janvier 1840."
   },
   {
    "q": "Quel objet est mis en vente en mai 1840 ?",
    "o": [
     "L'enveloppe recommandée",
     "Le timbre-poste adhésif",
     "La boîte aux lettres publique"
    ],
    "r": 1,
    "e": "Le timbre-poste adhésif, petit rectangle de papier gommé, est mis en vente en mai 1840."
   },
   {
    "q": "Quelle particularité avaient les premières feuilles de timbres ?",
    "o": [
     "Elles se collaient sans gomme",
     "Elles portaient déjà des dents régulières",
     "Elles étaient imprimées sans dentelures"
    ],
    "r": 2,
    "e": "Les premières feuilles, sans dentelures, devaient être découpées aux ciseaux."
   },
   {
    "q": "Quel signe distinctif portait le timbre britannique ?",
    "o": [
     "Une carte du royaume",
     "Le profil d'un ministre",
     "L'effigie du souverain"
    ],
    "r": 2,
    "e": "Le petit rectangle de papier gommé portait l'effigie du souverain."
   },
   {
    "q": "Quelle autre formule de prépaiement avait été imaginée d'abord ?",
    "o": [
     "Une enveloppe prépayée illustrée",
     "Un registre tenu par le facteur",
     "Un cachet de cire officiel"
    ],
    "r": 0,
    "e": "Avant le timbre, on imagina une enveloppe prépayée illustrée, vite découragée par les caricatures."
   },
   {
    "q": "Pourquoi un timbre rouge remplaça-t-il le noir dès 1841 ?",
    "o": [
     "Le rouge signalait les envois urgents",
     "L'oblitération rouge se distinguait mal sur le noir",
     "Le noir coûtait trop cher à imprimer"
    ],
    "r": 1,
    "e": "La marque rouge se voyait mal sur un timbre noir, ce qui facilitait la réutilisation des timbres."
   },
   {
    "q": "En quelle année la France émet-elle son premier timbre ?",
    "o": [
     "En 1849",
     "En 1837",
     "En 1840"
    ],
    "r": 0,
    "e": "Le texte indique que la France émet le sien en 1849."
   },
   {
    "q": "Quel effet la réforme a-t-elle sur le volume de courrier ?",
    "o": [
     "Il diminue puis disparaît",
     "Il augmente fortement",
     "Il reste strictement identique"
    ],
    "r": 1,
    "e": "Le courrier devient un service de masse et les volumes augmentent fortement."
   },
   {
    "q": "Quelle union fut créée à Berne en 1874 ?",
    "o": [
     "Une alliance des imprimeurs",
     "Une union générale des postes",
     "Une union des télégraphes"
    ],
    "r": 1,
    "e": "Des États réunis à Berne créent en 1874 une union générale des postes, future Union postale universelle."
   },
   {
    "q": "Quel nom porte la collection de timbres ?",
    "o": [
     "La philatélie",
     "La numismatique",
     "La cartophilie"
    ],
    "r": 0,
    "e": "Le texte nomme philatélie la collection de timbres, née peu après leur apparition."
   },
   {
    "q": "Quel rôle de contrôle joue le timbre ?",
    "o": [
     "Il désigne le facteur responsable du tri",
     "Il prouve que la taxe a été payée avant le départ",
     "Il indique la date d'arrivée au village"
    ],
    "r": 1,
    "e": "Le timbre atteste que la taxe a été réglée avant le départ de la lettre."
   },
   {
    "q": "Pourquoi le refus d'une lettre posait-il problème au facteur ?",
    "o": [
     "Il devait payer la taxe de sa poche",
     "Il perdait son emploi sur-le-champ",
     "Il repartait avec la lettre et sans paiement"
    ],
    "r": 2,
    "e": "Comme le destinataire payait à la livraison, un refus obligeait le facteur à repartir avec la lettre."
   },
   {
    "q": "Pourquoi les correspondances circulaient-elles par des moyens détournés ?",
    "o": [
     "Les facteurs refusaient les villages",
     "Les lettres étaient interdites la nuit",
     "Le prix élevé et les frais de perception pesaient"
    ],
    "r": 2,
    "e": "Le texte relie ces détours au coût du port et aux frais de perception qui absorbaient le revenu."
   },
   {
    "q": "Quel est le sujet principal de ce texte ?",
    "o": [
     "L'histoire de la philatélie en Europe",
     "Le transport du courrier par chemin de fer",
     "La réforme postale et la naissance du timbre"
    ],
    "r": 2,
    "e": "Le texte raconte le passage d'une taxe payée par le destinataire à un tarif uniforme prépayé."
   },
   {
    "q": "Que signifie la formule finale, transformer une taxe en service ?",
    "o": [
     "La poste devient un service accessible au plus grand nombre",
     "La taxe disparaît au profit de la charité",
     "La poste devient une entreprise privée rentable"
    ],
    "r": 0,
    "e": "L'auteur conclut sur l'idée d'une poste accessible à tous, y compris dans les villages."
   }
  ]
 },
 {
  "id": "d1",
  "theme": "technologie",
  "niveau": 4,
  "titre": "Ces satellites qui savent toujours où vous êtes",
  "corps": "Un récepteur de poche affiche votre position à quelques mètres près, au milieu d'une forêt ou d'un désert. Derrière cette précision apparemment magique se cache un principe simple : mesurer des temps de trajet. Une trentaine de satellites tournent autour de la Terre, à environ vingt mille kilomètres d'altitude, et diffusent en permanence l'heure exacte à laquelle ils émettent leur signal.\n\nLe récepteur capte les messages de plusieurs satellites et compare l'heure reçue avec celle de son horloge interne. Le signal voyage à la vitesse de la lumière : chaque microseconde de retard correspond à environ trois cents mètres de distance. Avec trois satellites, on obtient déjà une position en surface ; avec quatre, on ajoute l'altitude et l'on corrige l'erreur de l'horloge du récepteur, beaucoup moins précise que celles embarquées dans l'espace.\n\nCar les horloges des satellites sont des horloges atomiques, dérivant de quelques milliardièmes de seconde par jour. Leur stabilité est si grande qu'il faut tenir compte de la relativité : la vitesse de l'engin et la faiblesse de la gravité en altitude décalent le rythme de son horloge d'environ trente-huit microsecondes par jour. Sans cette correction, calculée par les physiciens, l'erreur de position grandirait de plusieurs kilomètres en une seule journée.\n\nLe système ne fonctionne pas partout de la même façon. Dans les rues étroites, les signaux rebondissent sur les façades avant d'atteindre le récepteur, ce qui fausse la mesure du temps. Sous un épais couvert d'arbres ou dans un tunnel, le signal s'affaiblit jusqu'à disparaître. Les ingénieurs compensent en combinant plusieurs constellations et en s'appuyant sur des stations au sol qui mesurent et corrigent les dérives.\n\nL'histoire du système commence bien avant les premiers récepteurs civils. À la fin des années 1950, l'armée américaine suit ses sous-marins grâce à des satellites de positionnement ; dans les années 1960 et 1970, plusieurs programmes se succèdent, jusqu'au lancement du premier satellite de la constellation actuelle en 1978. Celle-ci devient pleinement opérationnelle en 1995. Pendant quelques années encore, le signal civil est volontairement dégradé pour les utilisateurs non militaires ; cette limitation est levée en mai 2000, et la précision offerte au grand public fait un bond.\n\nAujourd'hui, plusieurs systèmes coexistent. Le GPS américain a été rejoint par le GLONASS russe, par Galileo, le programme européen devenu opérationnel en 2016, et par le système chinois BeiDou, achevé à l'échelle mondiale en 2020. Un récepteur moderne écoute plusieurs de ces constellations à la fois : il dispose ainsi de davantage de satellites visibles, ce qui améliore la solution dans les villes, où les immeubles masquent une partie du ciel.\n\nLa précision peut être poussée bien au-delà du mètre. Les techniques différentielles comparent la position calculée par un récepteur fixe, dont on connaît les coordonnées exactes, avec celle qu'il obtient par satellite. L'écart mesuré est transmis aux mobiles voisins, qui corrigent leurs propres calculs. Avec des stations de référence rapprochées et un traitement en temps réel, on atteint le centimètre : c'est ce qui permet à une moissonneuse de suivre un rang de culture, ou à un géomètre de relever un bornage sans poser le pied sur le terrain.\n\nCes performances ont un coût, en antennes, en circuits de calcul et parfois en connexion pour recevoir les corrections. Elles créent aussi une dépendance nouvelle. Une panne de constellation ou un brouillage local suffit à désorienter des services entiers, du guidage agricole à l'horodatage des transactions bancaires.\n\nCe qui a commencé comme un outil militaire est devenu un repère quotidien : navigation, agriculture de précision, synchronisation des réseaux électriques et des transactions bancaires dépendent aujourd'hui de ces horloges lointaines.",
  "q": [
   {
    "q": "À quelle altitude évoluent les satellites décrits dans le texte ?",
    "o": [
     "À environ vingt mille kilomètres",
     "À environ trois cents kilomètres",
     "À environ deux mille kilomètres"
    ],
    "r": 0,
    "e": "Le texte situe cette constellation à environ vingt mille kilomètres d'altitude."
   },
   {
    "q": "Combien de satellites faut-il au minimum pour obtenir une position en surface ?",
    "o": [
     "Trois",
     "Deux",
     "Six"
    ],
    "r": 0,
    "e": "Le texte indique que trois satellites donnent déjà une position en surface."
   },
   {
    "q": "À quoi sert le quatrième satellite dans le calcul ?",
    "o": [
     "Il corrige l'horloge du récepteur et donne l'altitude",
     "Il double la vitesse de transmission du signal",
     "Il remplace les stations de mesure au sol"
    ],
    "r": 0,
    "e": "Le quatrième signal ajoute l'altitude et compense l'imprécision de l'horloge du récepteur."
   },
   {
    "q": "À quelle distance correspond un retard d'une microseconde ?",
    "o": [
     "Environ trois cents mètres",
     "Environ trois kilomètres",
     "Environ trente mètres"
    ],
    "r": 0,
    "e": "À la vitesse de la lumière, une microseconde représente près de trois cents mètres."
   },
   {
    "q": "Quel type d'horloge équipe les satellites ?",
    "o": [
     "Des horloges atomiques",
     "Des horloges à balancier",
     "Des horloges à quartz refroidies"
    ],
    "r": 0,
    "e": "Les satellites embarquent des horloges atomiques, dont la dérive est infime."
   },
   {
    "q": "De combien le rythme de ces horloges est-il décalé chaque jour ?",
    "o": [
     "D'environ trente-huit microsecondes",
     "D'environ trente-huit millisecondes",
     "D'environ trois secondes"
    ],
    "r": 0,
    "e": "Les effets relativistes décalent l'horloge d'environ trente-huit microsecondes par jour."
   },
   {
    "q": "Quelles deux causes produisent ce décalage ?",
    "o": [
     "La vitesse de l'engin et la faible gravité en altitude",
     "La rotation de la Terre et le vent solaire",
     "La température et l'humidité de l'atmosphère"
    ],
    "r": 0,
    "e": "Le texte attribue le décalage à la vitesse du satellite et à la gravité plus faible en altitude."
   },
   {
    "q": "Que se passerait-il si l'on négligeait la correction relativiste ?",
    "o": [
     "L'erreur de position grandirait de plusieurs kilomètres par jour",
     "Les satellites quitteraient leur orbite en quelques heures",
     "Le récepteur cesserait de recevoir les signaux"
    ],
    "r": 0,
    "e": "Sans correction, l'erreur de position augmenterait de plusieurs kilomètres en une journée."
   },
   {
    "q": "Pourquoi les rues étroites perturbent-elles la mesure ?",
    "o": [
     "Les signaux rebondissent sur les façades",
     "Le béton absorbe entièrement les ondes",
     "Les satellites y défilent trop vite"
    ],
    "r": 0,
    "e": "Les réflexions sur les façades faussent la mesure du temps de trajet."
   },
   {
    "q": "Comment les ingénieurs améliorent-ils la précision ?",
    "o": [
     "En combinant plusieurs constellations et des stations au sol",
     "En augmentant la puissance des récepteurs portables",
     "En rapprochant les satellites du sol"
    ],
    "r": 0,
    "e": "Le texte cite la combinaison de constellations et l'appui de stations au sol."
   },
   {
    "q": "D'où vient l'usage initial de ce système ?",
    "o": [
     "D'un usage militaire",
     "D'un programme météorologique",
     "D'une recherche sur les volcans"
    ],
    "r": 0,
    "e": "Le dernier paragraphe rappelle que le système a commencé comme un outil militaire."
   },
   {
    "q": "Quels usages civils le texte mentionne-t-il ?",
    "o": [
     "Navigation, agriculture de précision et synchronisation des réseaux",
     "Télévision par satellite et radio numérique",
     "Prospection pétrolière et pêche industrielle"
    ],
    "r": 0,
    "e": "Ces trois usages figurent explicitement dans la dernière phrase."
   },
   {
    "q": "Pourquoi le récepteur n'a-t-il pas besoin d'une horloge atomique ?",
    "o": [
     "Parce que le calcul avec quatre satellites corrige son imprécision",
     "Parce que son horloge est aussi stable que celles de l'espace",
     "Parce que l'utilisateur connaît déjà la vitesse de la lumière"
    ],
    "r": 0,
    "e": "Le quatrième signal sert précisément à corriger l'horloge ordinaire du récepteur."
   },
   {
    "q": "Un automobiliste perd le signal dans un tunnel. Quelle explication le texte permet-il ?",
    "o": [
     "Les matériaux qui l'entourent affaiblissent les ondes",
     "Les satellites ne couvrent pas cette latitude",
     "Son récepteur est trop lent pour suivre les satellites"
    ],
    "r": 0,
    "e": "Le texte indique que le signal s'affaiblit jusqu'à disparaître sous un obstacle épais."
   },
   {
    "q": "Pourquoi l'auteur parle-t-il d'horloges « lointaines » à la fin ?",
    "o": [
     "Parce que la synchronisation dépend d'engins situés très haut",
     "Parce que ces horloges appartiennent à des pays étrangers",
     "Parce que leur précision diminue avec les années"
    ],
    "r": 0,
    "e": "Les horloges qui rythment ces usages sont embarquées à vingt mille kilomètres."
   },
   {
    "q": "Que suggère l'expression « précision apparemment magique » ?",
    "o": [
     "Que le résultat surprenant repose sur un principe explicable",
     "Que le système fonctionne grâce à un phénomène inconnu",
     "Que les ingénieurs dissimulent le vrai mécanisme"
    ],
    "r": 0,
    "e": "L'auteur annonce aussitôt un principe simple : la mesure des temps de trajet."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Le principe et les limites du positionnement par satellites",
     "L'histoire des fusées et des lanceurs spatiaux",
     "Les effets des ondes sur la santé humaine"
    ],
    "r": 0,
    "e": "Le texte explique comment le système calcule une position, puis ce qui le perturbe."
   },
   {
    "q": "Pourquoi l'auteur cite-t-il les banques et les réseaux électriques ?",
    "o": [
     "Pour montrer que l'usage dépasse largement la navigation",
     "Pour prouver que le système est devenu rentable",
     "Pour expliquer le financement des programmes spatiaux"
    ],
    "r": 0,
    "e": "Ces exemples élargissent le propos au-delà du simple repérage géographique."
   },
   {
    "q": "En quelle année le premier satellite de la constellation actuelle a-t-il été lancé ?",
    "o": [
     "En 1978",
     "En 1958",
     "En 1995"
    ],
    "r": 0,
    "e": "Le texte situe ce lancement en 1978."
   },
   {
    "q": "Quand le système est-il devenu pleinement opérationnel ?",
    "o": [
     "En 1995",
     "En 2000",
     "En 2016"
    ],
    "r": 0,
    "e": "Le texte donne l'année 1995 pour la pleine capacité opérationnelle."
   },
   {
    "q": "Que s'est-il passé en mai 2000 ?",
    "o": [
     "La dégradation volontaire du signal civil a été levée",
     "Le premier satellite Galileo a été lancé",
     "Le système est passé sous contrôle civil"
    ],
    "r": 0,
    "e": "La fin de cette dégradation a nettement amélioré la précision publique."
   }
  ]
 },
 {
  "id": "d6",
  "theme": "technologie",
  "niveau": 4,
  "titre": "Le premier bip d'un paquet de chewing-gum",
  "corps": "Le 26 juin 1974, dans un supermarché de Troy, dans l'Ohio, une caissière passe devant un lecteur optique un paquet de chewing-gum. La machine émet un bip : c'est le premier article vendu grâce à un code-barres. Le produit est resté célèbre, et le ticket de caisse est aujourd'hui conservé dans un musée.\n\nL'idée semblait simple, mais elle a demandé des années. Il fallait un code imprimé assez petit pour tenir sur n'importe quel emballage, assez robuste pour rester lisible après un passage en caisse, et assez bon marché pour être généralisé. Les premiers projets, dans les années 1950, utilisaient des cercles concentriques ; ils furent abandonnés parce que l'encre bavait à l'impression.\n\nLa solution retenue, mise au point au début des années 1970, aligne des barres verticales d'épaisseur variable. Un lecteur projette un faisceau lumineux et mesure la lumière réfléchie : une barre noire absorbe, un espace blanc renvoie. Le motif est traduit en chiffres, puis en une référence produit envoyée à l'ordinateur de la caisse, qui retrouve le prix dans sa base.\n\nChaque code porte un identifiant de fabricant et un numéro d'article, suivis d'un chiffre de contrôle calculé à partir des précédents. Ce chiffre permet au lecteur de repérer une lecture douteuse : si le calcul ne tombe pas juste, la caisse refuse le bip et le caissier recommence. Les erreurs de saisie manuelle, elles, étaient bien plus fréquentes.\n\nLe gain fut immédiat pour les magasins : inventaires plus rapides, prix modifiés sans réétiqueter chaque paquet, statistiques de vente précises. Les industriels y ont trouvé un moyen de suivre leurs stocks, et les douanes un outil de traçabilité.\n\nLe contexte économique explique l'empressement des commerçants. Les caisses enregistreuses, apparues au début du XXe siècle, additionnaient les prix mais ne disaient rien des articles vendus. Les gérants devaient tenir des inventaires à la main, et les erreurs de prix se multipliaient dans les rayons. Un code lu automatiquement promettait à la fois la rapidité en caisse et un suivi précis des stocks.\n\nLa normalisation fut longue. Plusieurs industriels proposaient leur propre symbole, et aucun ne voulait abandonner le sien. Un comité réunissant fabricants et distributeurs finit par adopter, en 1973, un code unique pour l'Amérique du Nord. L'Europe choisit peu après un format voisin, à treize chiffres, qui s'est imposé dans la plupart des pays. Cette harmonisation était la condition du succès : un lecteur doit pouvoir reconnaître n'importe quel produit, quel que soit son fabricant.\n\nLes lecteurs ont eux aussi évolué. Le premier modèle balayait le code avec un faisceau unique, ce qui obligeait le caissier à viser. Les appareils suivants utilisent un miroir tournant qui projette plusieurs lignes en étoile : le code est lu quelle que soit son orientation, et le geste devient presque instantané. Certains magasins installent même des tunnels de lecture capables de saisir tous les articles d'un chariot.\n\nD'autres symboles sont apparus depuis. Le QR code, mis au point en 1994 par une entreprise japonaise, stocke des centaines de caractères dans un carré, et se lit avec l'appareil photo d'un téléphone. Les étiquettes à radiofréquence, qui n'exigent aucune visibilité, équipent désormais des palettes entières dans les entrepôts. Le carré noir et blanc reste pourtant le plus répandu, parce qu'il coûte presque rien à imprimer.\n\nAujourd'hui, le carré noir et blanc a des descendants plus denses, capables de stocker une date ou un lien. Mais le principe reste celui de 1974 : transformer une information en contraste, puis lire ce contraste avec de la lumière.",
  "q": [
   {
    "q": "Quelle date le texte associe-t-il au premier passage en caisse d'un code-barres ?",
    "o": [
     "Le 26 juin 1974",
     "Le 26 juin 1964",
     "Le 26 janvier 1984"
    ],
    "r": 0,
    "e": "Le texte donne le 26 juin 1974."
   },
   {
    "q": "Dans quelle ville cet événement a-t-il eu lieu ?",
    "o": [
     "Troy, dans l'Ohio",
     "Troyes, en France",
     "Dayton, dans l'Ohio"
    ],
    "r": 0,
    "e": "Le supermarché se trouve à Troy, dans l'Ohio."
   },
   {
    "q": "Quel produit a été le premier scanné ?",
    "o": [
     "Un paquet de chewing-gum",
     "Une brique de lait",
     "Un paquet de lessive"
    ],
    "r": 0,
    "e": "Le texte parle d'un paquet de chewing-gum."
   },
   {
    "q": "Où le ticket de caisse de cette vente est-il conservé ?",
    "o": [
     "Dans un musée",
     "Aux archives municipales de Troy",
     "Dans les bureaux de la chaîne"
    ],
    "r": 0,
    "e": "Le texte indique qu'il est aujourd'hui conservé dans un musée."
   },
   {
    "q": "Quelle forme avaient les premiers projets des années 1950 ?",
    "o": [
     "Des cercles concentriques",
     "Des barres obliques",
     "Des points disposés en grille"
    ],
    "r": 0,
    "e": "Ces projets à cercles furent abandonnés à cause de l'encre."
   },
   {
    "q": "Pourquoi ces premiers projets ont-ils été abandonnés ?",
    "o": [
     "Parce que l'encre bavait à l'impression",
     "Parce que les lecteurs coûtaient trop cher",
     "Parce que les clients refusaient le procédé"
    ],
    "r": 0,
    "e": "La lisibilité se dégradait dès l'impression."
   },
   {
    "q": "À quelle période la solution à barres verticales est-elle mise au point ?",
    "o": [
     "Au début des années 1970",
     "Au début des années 1950",
     "À la fin des années 1990"
    ],
    "r": 0,
    "e": "Le texte situe cette mise au point au début des années 1970."
   },
   {
    "q": "Comment le lecteur distingue-t-il une barre d'un espace ?",
    "o": [
     "Par la lumière réfléchie, absorbée par le noir",
     "Par l'épaisseur du papier",
     "Par la température de l'encre"
    ],
    "r": 0,
    "e": "La barre noire absorbe la lumière, l'espace blanc la renvoie."
   },
   {
    "q": "Que contient un code, selon le texte ?",
    "o": [
     "Un identifiant de fabricant, un numéro d'article et un chiffre de contrôle",
     "Un prix, une date et un numéro de lot",
     "Le nom du magasin et celui du fabricant"
    ],
    "r": 0,
    "e": "Ces trois éléments composent la référence lue en caisse."
   },
   {
    "q": "À quoi sert le chiffre de contrôle ?",
    "o": [
     "À repérer une lecture douteuse",
     "À chiffrer le prix de vente",
     "À identifier le pays de fabrication"
    ],
    "r": 0,
    "e": "Si le calcul ne tombe pas juste, la caisse refuse la lecture."
   },
   {
    "q": "Que fait la caisse quand le calcul est faux ?",
    "o": [
     "Elle refuse le bip et le caissier recommence",
     "Elle applique le prix précédent",
     "Elle appelle le responsable du magasin"
    ],
    "r": 0,
    "e": "Le texte décrit ce refus de lecture."
   },
   {
    "q": "Quel avantage les magasins en tirent-ils ?",
    "o": [
     "Des inventaires plus rapides et des prix modifiables sans réétiquetage",
     "La suppression totale des caissiers",
     "La fin des vols en magasin"
    ],
    "r": 0,
    "e": "Le texte énumère inventaires, étiquetage et statistiques."
   },
   {
    "q": "Pourquoi les erreurs de saisie manuelle sont-elles évoquées ?",
    "o": [
     "Pour montrer que le code réduit nettement les fautes",
     "Pour prouver que le personnel était mal formé",
     "Pour expliquer l'échec des premières caisses"
    ],
    "r": 0,
    "e": "La comparaison souligne la fiabilité supérieure du code."
   },
   {
    "q": "Pourquoi fallait-il un code bon marché ?",
    "o": [
     "Parce qu'il devait être imprimé sur tous les emballages",
     "Parce que les lecteurs étaient loués",
     "Parce que l'État taxait chaque code"
    ],
    "r": 0,
    "e": "Une généralisation supposait un coût d'impression négligeable."
   },
   {
    "q": "Pourquoi le texte mentionne-t-il les douanes ?",
    "o": [
     "Pour montrer que la traçabilité dépasse la caisse du magasin",
     "Pour expliquer la réglementation des importations",
     "Pour décrire les contrôles aux frontières"
    ],
    "r": 0,
    "e": "L'exemple élargit les usages au-delà du commerce de détail."
   },
   {
    "q": "Qu'est-ce qui distingue les codes actuels de celui de 1974 ?",
    "o": [
     "Ils sont plus denses et peuvent stocker une date ou un lien",
     "Ils n'utilisent plus de contraste noir et blanc",
     "Ils sont lus par un opérateur humain"
    ],
    "r": 0,
    "e": "Le principe demeure, mais la densité d'information a augmenté."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "L'histoire et le fonctionnement du code-barres",
     "L'évolution des supermarchés américains",
     "Les techniques d'impression sur emballage"
    ],
    "r": 0,
    "e": "Le texte raconte l'invention, le principe et les usages du code."
   },
   {
    "q": "Pourquoi l'auteur commence-t-il par une scène de caisse ?",
    "o": [
     "Pour ancrer une innovation technique dans un moment précis",
     "Pour vanter la rapidité des caissières de l'Ohio",
     "Pour dénoncer la consommation de masse"
    ],
    "r": 0,
    "e": "La scène datée rend l'invention concrète et vérifiable."
   },
   {
    "q": "Quel défaut les caisses enregistreuses présentaient-elles ?",
    "o": [
     "Elles ne disaient rien des articles vendus",
     "Elles ne pouvaient pas additionner les prix",
     "Elles tombaient en panne chaque semaine"
    ],
    "r": 0,
    "e": "Le texte souligne l'absence de suivi des articles."
   },
   {
    "q": "En quelle année un code unique est-il adopté pour l'Amérique du Nord ?",
    "o": [
     "En 1973",
     "En 1963",
     "En 1983"
    ],
    "r": 0,
    "e": "Le texte situe cette adoption en 1973."
   },
   {
    "q": "Quel avantage apporte le miroir tournant ?",
    "o": [
     "Le code est lu quelle que soit son orientation",
     "Le code peut être imprimé en couleur",
     "Le lecteur fonctionne sans électricité"
    ],
    "r": 0,
    "e": "Plusieurs lignes en étoile permettent une lecture omnidirectionnelle."
   }
  ]
 },
 {
  "id": "d15",
  "theme": "architecture",
  "niveau": 5,
  "titre": "Pourquoi un pont suspendu ne s'écroule pas sous son propre poids",
  "corps": "Un pont suspendu repose sur une idée ancienne : au lieu de porter la charge sur des piliers rapprochés, on la suspend à un câble tendu entre deux points hauts. Le tablier ne travaille plus en compression, comme une voûte de pierre, mais en flexion, accroché à des suspentes verticales qui descendent du câble principal. Celui-ci, en revanche, ne subit qu'une traction, et l'acier résiste remarquablement bien à ce type d'effort.\n\nLe principe se lit dans la forme. Le câble décrit une courbe appelée chaînette, proche d'une parabole quand la charge est répartie régulièrement. Il tire sur deux pylônes, qui le renvoient vers des ancrages plantés dans le rocher ou dans un massif de béton. Toute la stabilité dépend de ces ancrages : si le sol cède, rien ne retient plus l'ouvrage. C'est pourquoi les ingénieurs calculent la résistance du sous-sol avant même de dessiner la tour.\n\nLes premières versions utilisaient des matériaux végétaux. Au Pérou, un pont de cordes tressées en fibres d'herbe est reconstruit chaque année au-dessus d'une gorge, selon un rituel communautaire qui remonte à l'époque inca. En Asie, des passerelles de bambou reliaient des vallées entières. Le passage à la chaîne de fer, au début du XIXe siècle, permet des portées inédites : le pont de Menai, au pays de Galles, franchit en 1826 une distance que la pierre n'aurait pas permis d'atteindre.\n\nLe câble d'acier change l'échelle. Le pont de Brooklyn, ouvert en 1883, franchit près de cinq cents mètres entre ses deux pylônes, avec quatre câbles principaux formés de milliers de fils parallèles. Sa construction a coûté cher : John Roebling, son concepteur, meurt des suites d'un accident sur le chantier, et son fils Washington, atteint par la maladie des caissons, doit diriger les travaux depuis sa chambre, en observant le chantier à la lunette.\n\nLa portée devient un symbole national. Le Golden Gate, achevé en 1937, franchit près de treize cents mètres à l'entrée de la baie de San Francisco ; ses pylônes culminent à deux cent vingt-sept mètres au-dessus de l'eau, et ses câbles ont été filés sur place, brin par brin, par des ouvriers qui avançaient sur un étroit chemin de planches. Au Japon, le pont d'Akashi, ouvert en 1998, atteint près de deux kilomètres, dans une zone exposée aux séismes et aux typhons : ses pylônes peuvent s'écarter de plusieurs mètres lors d'un tremblement de terre sans rompre le tablier.\n\nL'histoire retient surtout un échec instructif. En 1940, le pont de Tacoma Narrows, dans l'État de Washington, s'effondre sous un vent modéré, à peine soixante-dix kilomètres par heure. Le tablier, trop mince et trop souple, entre en oscillation : le vent crée un tourbillon alterné qui pousse la structure tantôt d'un côté, tantôt de l'autre, et l'amplitude augmente jusqu'à la rupture. Les images montrent une route qui se tord comme une vague.\n\nCet accident a transformé la conception des grands ponts. Les ingénieurs ont compris que la forme du tablier compte autant que sa résistance : une section ajourée laisse passer l'air, des dispositifs amortisseurs absorbent l'énergie, et chaque projet est désormais testé en soufflerie, sur une maquette, avant d'être construit.\n\nLa construction d'un tel ouvrage obéit à une chorégraphie. On élève d'abord les pylônes, puis on installe un câble pilote, souvent lancé par un drone ou un petit canon, que l'on tire d'une rive à l'autre. Ce fil sert à haler des câbles de plus en plus lourds, jusqu'à former le faisceau définitif. Les suspentes descendent ensuite du câble, et le tablier est hissé par tronçons depuis le milieu de la travée, de manière symétrique, pour que les efforts restent équilibrés.\n\nL'entretien est le vrai défi des décennies suivantes. Les câbles vieillissent mal : l'humidité s'infiltre entre les fils, la corrosion progresse à l'abri des regards, et une rupture locale peut se propager. Les gestionnaires installent donc des systèmes de déshumidification, des capteurs de tension et des robots d'inspection capables de parcourir le câble de l'intérieur. Un pont n'est jamais terminé : il est surveillé.\n\nUn pont suspendu reste donc un équilibre entre des forces opposées. Le câble porte, les pylônes transmettent, les ancrages retiennent, et le tablier doit se laisser traverser par le vent sans entrer en résonance. La réussite est invisible : lorsque tout va bien, l'ouvrage paraît immobile, et l'on oublie qu'il travaille en permanence.",
  "q": [
   {
    "q": "Quel effort le câble principal d'un pont suspendu subit-il ?",
    "o": [
     "Une traction",
     "Une compression",
     "Une torsion"
    ],
    "r": 0,
    "e": "Le tablier est suspendu, le câble travaille en traction."
   },
   {
    "q": "Comment s'appelle la courbe décrite par le câble porteur ?",
    "o": [
     "Une chaînette",
     "Une ellipse",
     "Une spirale"
    ],
    "r": 0,
    "e": "Le texte la nomme chaînette, proche d'une parabole."
   },
   {
    "q": "À quoi servent les ancrages ?",
    "o": [
     "À retenir les extrémités du câble dans le sol",
     "À fixer les lampadaires du tablier",
     "À rigidifier les pylônes entre eux"
    ],
    "r": 0,
    "e": "Sans eux, la traction du câble ne serait reprise par rien."
   },
   {
    "q": "Où un pont de cordes est-il reconstruit chaque année ?",
    "o": [
     "Au Pérou",
     "Au Japon",
     "Au pays de Galles"
    ],
    "r": 0,
    "e": "Le texte cite un pont de fibres d'herbe reconstruit rituellement."
   },
   {
    "q": "Quel pont de 1826 est cité pour l'usage des chaînes de fer ?",
    "o": [
     "Le pont de Menai",
     "Le pont de Brooklyn",
     "Le pont d'Akashi"
    ],
    "r": 0,
    "e": "Le pont de Menai se trouve au pays de Galles."
   },
   {
    "q": "En quelle année le pont de Brooklyn est-il ouvert ?",
    "o": [
     "En 1883",
     "En 1838",
     "En 1937"
    ],
    "r": 0,
    "e": "Le texte donne 1883."
   },
   {
    "q": "Quelle portée le pont de Brooklyn atteint-il ?",
    "o": [
     "Près de cinq cents mètres",
     "Près de mille trois cents mètres",
     "Près de deux cents mètres"
    ],
    "r": 0,
    "e": "Le texte parle de près de cinq cents mètres entre pylônes."
   },
   {
    "q": "Que arrive à John Roebling, concepteur du pont de Brooklyn ?",
    "o": [
     "Il meurt des suites d'un accident sur le chantier",
     "Il abandonne le projet pour raisons financières",
     "Il est remplacé par un ingénieur allemand"
    ],
    "r": 0,
    "e": "Le texte mentionne sa mort liée à un accident."
   },
   {
    "q": "Pourquoi Washington Roebling dirige-t-il les travaux depuis sa chambre ?",
    "o": [
     "Parce qu'il souffre de la maladie des caissons",
     "Parce qu'il a été élu maire de New York",
     "Parce que le chantier est interdit aux civils"
    ],
    "r": 0,
    "e": "Il observe le chantier à la lunette, atteint par la maladie des caissons."
   },
   {
    "q": "Quelle est la portée du Golden Gate ?",
    "o": [
     "Près de treize cents mètres",
     "Près de six cents mètres",
     "Près de deux mille mètres"
    ],
    "r": 0,
    "e": "Le texte donne près de treize cents mètres."
   },
   {
    "q": "Quelle hauteur atteignent les pylônes du Golden Gate ?",
    "o": [
     "Deux cent vingt-sept mètres",
     "Cent vingt-sept mètres",
     "Trois cent vingt-sept mètres"
    ],
    "r": 0,
    "e": "Le texte précise cette hauteur au-dessus de l'eau."
   },
   {
    "q": "Quelle portée le pont d'Akashi atteint-il ?",
    "o": [
     "Près de deux kilomètres",
     "Près d'un kilomètre",
     "Près de trois kilomètres"
    ],
    "r": 0,
    "e": "Le texte parle de près de deux kilomètres, ouverts en 1998."
   },
   {
    "q": "Quel vent a suffi à détruire le pont de Tacoma Narrows ?",
    "o": [
     "Environ soixante-dix kilomètres par heure",
     "Environ deux cents kilomètres par heure",
     "Environ vingt kilomètres par heure"
    ],
    "r": 0,
    "e": "Le texte parle d'un vent modéré, à peine soixante-dix kilomètres par heure."
   },
   {
    "q": "Quel phénomène a fait osciller le tablier de Tacoma ?",
    "o": [
     "Un tourbillon alterné créé par le vent",
     "Une crue de la rivière sous le pont",
     "Un séisme de faible magnitude"
    ],
    "r": 0,
    "e": "Le vent poussait alternativement la structure d'un côté et de l'autre."
   },
   {
    "q": "Quelle conséquence l'accident a-t-il eue sur la conception des ponts ?",
    "o": [
     "Les projets sont désormais testés en soufflerie",
     "Les tabliers sont devenus plus lourds et plus pleins",
     "Les câbles ont été remplacés par des haubans"
    ],
    "r": 0,
    "e": "Le texte insiste sur les essais sur maquette et les sections ajourées."
   },
   {
    "q": "Pourquoi l'acier convient-il particulièrement au câble porteur ?",
    "o": [
     "Parce qu'il résiste très bien à la traction",
     "Parce qu'il est plus léger que le bois",
     "Parce qu'il ne se dilate pas au soleil"
    ],
    "r": 0,
    "e": "Le câble ne subit qu'une traction, effort que l'acier supporte bien."
   },
   {
    "q": "Pourquoi le tablier du Golden Gate a-t-il été hissé par tronçons symétriques ?",
    "o": [
     "Pour maintenir les efforts équilibrés pendant le montage",
     "Pour réduire le nombre d'ouvriers nécessaires",
     "Pour éviter de fermer la baie à la navigation"
    ],
    "r": 0,
    "e": "La symétrie évite de déséquilibrer les pylônes en cours de chantier."
   },
   {
    "q": "Pourquoi l'entretien des câbles est-il difficile ?",
    "o": [
     "Parce que la corrosion progresse à l'abri des regards",
     "Parce qu'ils sont peints chaque année",
     "Parce qu'ils ne peuvent pas être inspectés de l'intérieur"
    ],
    "r": 0,
    "e": "L'humidité s'infiltre entre les fils, hors de vue."
   },
   {
    "q": "Pourquoi l'auteur qualifie-t-il l'échec de Tacoma d'instructif ?",
    "o": [
     "Parce qu'il a révélé un mode de ruine que l'on ignorait",
     "Parce qu'il a permis de tester un nouveau câble",
     "Parce qu'il a coûté moins cher que prévu"
    ],
    "r": 0,
    "e": "L'effondrement par flottement a fait progresser la science des structures."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Le principe, l'histoire et les risques des ponts suspendus",
     "La carrière de John Roebling",
     "Les matériaux de construction au XIXe siècle"
    ],
    "r": 0,
    "e": "Le texte décrit le fonctionnement, l'évolution et l'accident fondateur."
   },
   {
    "q": "Pourquoi l'auteur remonte-t-il aux ponts de cordes ?",
    "o": [
     "Pour montrer que le principe précède de loin l'acier",
     "Pour prouver que les Incas connaissaient le calcul",
     "Pour comparer les coûts de construction"
    ],
    "r": 0,
    "e": "Cette antériorité souligne la continuité d'une même idée."
   },
   {
    "q": "Pourquoi la réussite d'un pont est-elle dite invisible ?",
    "o": [
     "Parce qu'un ouvrage immobile ne montre pas les efforts qu'il subit",
     "Parce qu'il se fond dans le paysage urbain",
     "Parce que les défauts sont cachés par la peinture"
    ],
    "r": 0,
    "e": "Tout fonctionne silencieusement, sans signe apparent du travail des forces."
   },
   {
    "q": "Quelle idée l'auteur défend-il à propos d'un grand pont ?",
    "o": [
     "Qu'il résulte d'un équilibre entre forces opposées",
     "Qu'il doit être construit d'un seul bloc",
     "Qu'il devient plus sûr avec l'âge"
    ],
    "r": 0,
    "e": "La conclusion résume cette vision d'un équilibre permanent."
   }
  ]
 },
 {
  "id": "d20",
  "theme": "architecture",
  "niveau": 5,
  "titre": "Les Pays-Bas, un pays gagné sur l'eau par des moulins",
  "corps": "Près d'un quart du territoire néerlandais se trouve sous le niveau de la mer, et une grande partie du reste est à peine plus haut. Cette situation n'a rien d'accidentel : elle résulte d'un choix, poursuivi pendant des siècles, de disputer des terres à un delta marécageux. Les moulins à vent y ont joué un rôle décisif, non pour moudre du grain, mais pour évacuer l'eau.\n\nLe principe est simple. Un moulin capte l'énergie du vent par quatre ailes tendues de toile, fixées sur un axe horizontal. Cet axe entraîne, par un jeu d'engrenages, un arbre vertical qui actionne une roue à augets ou, plus tard, une vis d'Archimède. La roue puise l'eau d'un canal et la verse dans un canal plus élevé. En installant plusieurs moulins en série, on franchit ainsi plusieurs marches, jusqu'à rejeter l'eau dans une rivière ou dans la mer.\n\nLa technique s'est perfectionnée au XVIe siècle. La vis d'Archimède, adaptée du monde antique, remplace peu à peu la roue à augets : elle soulève davantage d'eau pour une même puissance, et supporte mieux les variations de niveau. Les moulins se multiplient dans les polders, ces étendues entourées de digues où l'on maintient un niveau d'eau artificiel, plus bas que celui des terrains voisins.\n\nLe polder de Beemster, asséché en 1612, est l'un des exemples les plus célèbres. Une quarantaine de moulins y ont été construits pour pomper un lac intérieur, et les terres ainsi obtenues ont été loties selon un plan géométrique, avec des fermes alignées le long de canaux rectilignes. Le paysage, aujourd'hui classé, montre à quel point l'aménagement du territoire et l'ingénierie hydraulique étaient liés.\n\nLes moulins ne servaient pas qu'à l'eau. Dans la région de la Zaan, au nord d'Amsterdam, ils actionnaient des scies pour le bois, des presses pour l'huile, des meules pour les pigments et des pilons pour le papier. Des centaines d'établissements y fonctionnaient au XVIIe siècle, formant le premier ensemble industriel alimenté par une énergie renouvelable à grande échelle. Les navires marchands y trouvaient des planches, les peintres leurs couleurs, et les entrepôts leurs emballages.\n\nL'ère des moulins s'achève au XIXe siècle. Les pompes à vapeur, puis les moteurs électriques, offrent une puissance régulière, indépendante du vent. Les moulins sont abandonnés, parfois démolis ; une centaine subsiste, entretenue par des fondations et par des meuniers bénévoles. Leur silhouette reste un emblème national, alors que le pompage est assuré par des stations modernes, souvent automatisées.\n\nL'histoire ne s'arrête pas là. Après la grande inondation de 1953, qui a submergé des milliers d'hectares et fait plus de mille huit cents victimes, les Pays-Bas ont entrepris un vaste programme de protection. Des digues ont été rehaussées, des bras de mer fermés, et un barrage mobile a été installé dans l'Escaut oriental, capable de se fermer lors des tempêtes sans bloquer la marée le reste du temps.\n\nLa gestion repose sur une institution ancienne. Les waterschappen, ces offices des eaux élus localement, existent depuis le Moyen Âge et perçoivent leurs propres taxes pour entretenir digues, canaux et stations de pompage. Leur doyen, le dijkgraaf, porte encore une fonction dont le nom signifie littéralement « comte de la digue ». Cette organisation explique en partie la continuité d'une politique de l'eau menée sur plusieurs siècles.\n\nLes difficultés demeurent. Les sols tourbeux s'affaissent lentement lorsqu'ils sont drainés, ce qui abaisse le terrain et aggrave le différentiel avec la mer. Le sel progresse dans les nappes côtières, menaçant l'agriculture et l'eau potable. Le changement climatique ajoute une élévation du niveau marin, et les ingénieurs étudient des solutions souples : dunes renforcées, zones d'expansion des crues, quartiers flottants.\n\nLa leçon est paradoxale. Un pays a construit sa prospérité en asséchant des marais, puis découvre que l'assèchement crée de nouveaux risques qu'il faut gérer à leur tour. Le moulin, symbole d'une victoire sur l'eau, rappelle surtout que cette victoire n'est jamais définitive : elle demande des pompes, des digues et des institutions, entretenues sans interruption.",
  "q": [
   {
    "q": "Quelle part du territoire néerlandais se trouve sous le niveau de la mer ?",
    "o": [
     "Près d'un quart",
     "Près de la moitié",
     "Près d'un dixième"
    ],
    "r": 0,
    "e": "Le texte parle d'un quart du territoire."
   },
   {
    "q": "À quoi servaient principalement les moulins décrits ?",
    "o": [
     "À évacuer l'eau des terres basses",
     "À moudre le blé des polders",
     "À fouler la laine des drapiers"
    ],
    "r": 0,
    "e": "Le texte insiste sur leur rôle de pompage, non de meunerie."
   },
   {
    "q": "Quel dispositif remplace peu à peu la roue à augets ?",
    "o": [
     "La vis d'Archimède",
     "La noria à chaîne",
     "La pompe à piston"
    ],
    "r": 0,
    "e": "Elle soulève plus d'eau et supporte mieux les variations de niveau."
   },
   {
    "q": "Qu'est-ce qu'un polder ?",
    "o": [
     "Une étendue entourée de digues où l'eau est maintenue artificiellement",
     "Un canal navigable entre deux provinces",
     "Une digue construite en pleine mer"
    ],
    "r": 0,
    "e": "Le niveau d'eau y est contrôlé, plus bas que les terrains voisins."
   },
   {
    "q": "En quelle année le polder de Beemster est-il asséché ?",
    "o": [
     "En 1612",
     "En 1512",
     "En 1712"
    ],
    "r": 0,
    "e": "Le texte donne 1612."
   },
   {
    "q": "Combien de moulins ont été construits pour assécher ce lac ?",
    "o": [
     "Une quarantaine",
     "Une douzaine",
     "Une centaine"
    ],
    "r": 0,
    "e": "Le texte parle d'une quarantaine de moulins pour assécher le lac intérieur."
   },
   {
    "q": "Quels usages industriels les moulins de la Zaan servaient-ils ?",
    "o": [
     "Sciage du bois, presse de l'huile, pigments et papier",
     "Tissage de la laine et tannage du cuir",
     "Extraction de la tourbe et broyage du sel"
    ],
    "r": 0,
    "e": "Le texte énumère ces quatre activités."
   },
   {
    "q": "Quel siècle voit fonctionner des centaines de moulins dans la Zaan ?",
    "o": [
     "Le XVIIe siècle",
     "Le XVe siècle",
     "Le XIXe siècle"
    ],
    "r": 0,
    "e": "Le texte parle du XVIIe siècle."
   },
   {
    "q": "Qu'est-ce qui remplace les moulins au XIXe siècle ?",
    "o": [
     "Les pompes à vapeur puis les moteurs électriques",
     "Les moulins à marée",
     "Les norias à chevaux"
    ],
    "r": 0,
    "e": "Ces machines offrent une puissance indépendante du vent."
   },
   {
    "q": "Combien de victimes la grande inondation de 1953 a-t-elle faites ?",
    "o": [
     "Plus de mille huit cents",
     "Plus de dix-huit mille",
     "Environ quatre-vingts"
    ],
    "r": 0,
    "e": "Le texte donne plus de mille huit cents victimes."
   },
   {
    "q": "Quel ouvrage a été installé dans l'Escaut oriental ?",
    "o": [
     "Un barrage mobile qui se ferme lors des tempêtes",
     "Une digue continue en béton",
     "Une écluse géante pour les navires"
    ],
    "r": 0,
    "e": "Il peut se fermer sans bloquer la marée le reste du temps."
   },
   {
    "q": "Qu'est-ce qu'un waterschap ?",
    "o": [
     "Un office des eaux élu localement, financé par ses propres taxes",
     "Un ministère national de l'environnement",
     "Une société privée de pompage"
    ],
    "r": 0,
    "e": "Ces institutions existent depuis le Moyen Âge."
   },
   {
    "q": "Que signifie le titre de dijkgraaf ?",
    "o": [
     "Comte de la digue",
     "Gardien du canal",
     "Maître des moulins"
    ],
    "r": 0,
    "e": "Le texte traduit littéralement ce titre."
   },
   {
    "q": "Pourquoi les sols tourbeux posent-ils problème ?",
    "o": [
     "Parce qu'ils s'affaissent lorsqu'ils sont drainés",
     "Parce qu'ils deviennent trop durs pour l'agriculture",
     "Parce qu'ils absorbent toute l'eau des canaux"
    ],
    "r": 0,
    "e": "L'affaissement accroît le différentiel avec le niveau marin."
   },
   {
    "q": "Quelle menace vient s'ajouter dans les nappes côtières ?",
    "o": [
     "La progression du sel",
     "La présence de métaux lourds",
     "Le refroidissement des eaux"
    ],
    "r": 0,
    "e": "Le sel menace l'agriculture et l'eau potable."
   },
   {
    "q": "Comment les moulins parvenaient-ils à franchir plusieurs marches ?",
    "o": [
     "En les installant en série le long du canal",
     "En agrandissant les ailes de chaque moulin",
     "En faisant fonctionner deux roues sur le même axe"
    ],
    "r": 0,
    "e": "Chaque moulin relève l'eau d'un niveau, puis la transmet au suivant."
   },
   {
    "q": "Pourquoi la vis d'Archimède a-t-elle été préférée à la roue ?",
    "o": [
     "Parce qu'elle soulève plus d'eau pour une même puissance",
     "Parce qu'elle coûtait moins cher à fabriquer",
     "Parce qu'elle fonctionnait sans vent"
    ],
    "r": 0,
    "e": "Le texte souligne ce rendement supérieur et sa robustesse."
   },
   {
    "q": "Pourquoi le paysage de Beemster est-il remarquable ?",
    "o": [
     "Parce qu'il associe un plan géométrique à un travail hydraulique",
     "Parce qu'il a été dessiné par un peintre célèbre",
     "Parce qu'il conserve les moulins d'origine en activité"
    ],
    "r": 0,
    "e": "Les fermes s'alignent le long de canaux rectilignes."
   },
   {
    "q": "Quelle contradiction l'auteur souligne-t-il en conclusion ?",
    "o": [
     "L'assèchement qui a enrichi le pays crée de nouveaux risques",
     "Les moulins sont plus efficaces que les pompes modernes",
     "La protection des côtes coûte plus qu'elle ne rapporte"
    ],
    "r": 0,
    "e": "La victoire sur l'eau doit être entretenue sans fin."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "L'usage des moulins et la gestion de l'eau aux Pays-Bas",
     "La fabrication des vis d'Archimède",
     "L'histoire du commerce du bois en Europe"
    ],
    "r": 0,
    "e": "Le texte relie une technique, un territoire et des institutions."
   },
   {
    "q": "Pourquoi l'auteur précise-t-il que les moulins ne servaient pas à moudre le grain ?",
    "o": [
     "Pour corriger une image d'Épinal et montrer leur fonction de pompage",
     "Pour expliquer la pénurie de blé dans la région",
     "Pour décrire la fabrication des meules"
    ],
    "r": 0,
    "e": "Le texte veut distinguer le moulin de polder du moulin à farine."
   },
   {
    "q": "Pourquoi l'auteur évoque-t-il les peintres de la Zaan ?",
    "o": [
     "Pour montrer que l'industrie fournissait aussi des pigments",
     "Pour signaler que les moulins étaient peints en blanc",
     "Pour dater les premiers tableaux de paysage"
    ],
    "r": 0,
    "e": "Les meules y broyaient les couleurs utilisées par les ateliers."
   }
  ]
 },
 {
  "id": "d25",
  "theme": "architecture",
  "niveau": 5,
  "titre": "Chez les Romains, le chauffage passait sous le sol",
  "corps": "Dans les thermes romains, on marchait pieds nus sur un dallage tiède, parfois brûlant, sans voir d'où venait la chaleur. Aucun radiateur, aucune flamme visible dans la salle : le feu brûlait ailleurs, dans un foyer ménagé derrière un mur, et la fumée circulait sous le pavement avant de s'échapper par des conduits dans l'épaisseur des parois. Ce dispositif porte un nom grec, l'hypocauste, littéralement « brûlé par-dessous ».\n\nLe principe est simple à décrire. Le sol de la pièce chauffée, appelé suspensura, repose sur une forêt de petits piliers de briques, les pilae, hauts d'une soixantaine de centimètres. L'espace libre entre ces piliers forme une chambre où circulent les gaz chauds. Un foyer, le praefurnium, alimenté en bois, débouche dans cette chambre ; la chaleur monte, passe sous le dallage, puis remonte dans les murs par des tubulures de terre cuite, les tubuli, avant de sortir par une cheminée.\n\nCette circulation ascendante explique l'efficacité du système. Les gaz chauds traversent d'abord la partie la plus basse, puis s'élèvent le long des parois, ce qui chauffe simultanément le sol et les murs. Les salles les plus chaudes, comme le caldarium, sont disposées près du foyer ; les pièces tièdes, plus loin, reçoivent une chaleur atténuée. Les concepteurs romains calculaient donc la distance au foyer comme on règle aujourd'hui un circuit de chauffage central.\n\nLe dispositif est décrit par Vitruve, architecte et ingénieur du Ier siècle avant Jésus-Christ, qui en détaille les proportions et les matériaux. Un personnage du nom de Sergius Orata est crédité, par les auteurs anciens, de l'invention des salles suspendues, qu'il aurait d'abord appliquées à ses viviers et à ses villas. L'archéologie a confirmé la diffusion du procédé dans tout l'Empire, des bains publics des villes aux villas rurales de Bretagne ou de Germanie.\n\nLes thermes ne se réduisent pas au chauffage. On y trouvait des salles de déshabillage, des étuves sèches, des bassins froids, des palestres pour l'exercice, et parfois des bibliothèques. Le baigneur suivait un parcours : transpiration dans une pièce chaude, nettoyage de la peau à l'huile et au strigile, puis bain tiède et immersion froide. L'eau des bassins était souvent chauffée par un foyer distinct, ou par une chaudière placée près du praefurnium.\n\nLe coût d'exploitation était considérable. Il fallait du bois en quantité, transporté par chariots ou par bateaux, et des équipes pour alimenter les foyers jour et nuit. Les villes qui entretenaient des thermes publics y consacraient une part de leurs revenus, et les empereurs utilisaient ces édifices pour afficher leur générosité. Dans les régions dépourvues de forêt, le prix du combustible limitait la taille des installations.\n\nLe système présentait des risques. Une fissure dans le dallage laissait passer fumée et monoxyde de carbone dans la salle ; un pilier affaibli pouvait provoquer l'effondrement du sol ; l'accumulation de suie dans les conduits réduisait le tirage et pouvait s'enflammer. Les fouilles ont révélé des réparations nombreuses, signe d'un entretien permanent.\n\nLa fin de l'Empire n'a pas fait disparaître immédiatement la technique. Des bains chauffés subsistent dans quelques édifices palatins, puis l'usage se perd avec la rupture des réseaux d'entretien et la raréfaction du combustible. Il faut attendre le XIXe siècle pour que le chauffage par le sol réapparaisse, d'abord dans des serres, puis dans des bâtiments modernes, avec des tuyaux d'eau chaude à la place des gaz brûlés.\n\nLes thermes de Bath, en Angleterre, illustrent la rencontre de la technique et du milieu. La ville s'est développée autour d'une source naturellement chaude, dont l'eau jaillit à environ quarante-six degrés. Les Romains y ont construit un grand bassin entouré de portiques, alimenté par la source, tandis que des salles chauffées complétaient l'ensemble. Le site a été recouvert par les siècles, puis redécouvert et fouillé à l'époque moderne.\n\nLa postérité du procédé tient à une idée plutôt qu'à un détail de construction. Chauffer un espace en faisant circuler un fluide chaud sous sa surface, plutôt qu'en y plaçant une source de chaleur, permet de répartir la température et d'éviter les points brûlants. Les planchers chauffants actuels, les serres tempérées et certains bâtiments passifs prolongent cette intuition : le confort vient d'une masse tiède, non d'une flamme.",
  "q": [
   {
    "q": "Que signifie le mot hypocauste ?",
    "o": [
     "Brûlé par-dessous",
     "Chauffé par le toit",
     "Bain de vapeur"
    ],
    "r": 0,
    "e": "Le texte traduit littéralement ce terme grec."
   },
   {
    "q": "Où brûlait le feu qui chauffait la salle ?",
    "o": [
     "Dans un foyer ménagé derrière un mur",
     "Au centre de la pièce, dans un brasero",
     "Sous le bassin d'eau froide"
    ],
    "r": 0,
    "e": "Les gaz circulaient ensuite sous le pavement."
   },
   {
    "q": "Comment s'appelle le sol suspendu de la pièce chauffée ?",
    "o": [
     "La suspensura",
     "La pilae",
     "Les tubuli"
    ],
    "r": 0,
    "e": "Ce dallage repose sur de petits piliers."
   },
   {
    "q": "Quelle hauteur atteignent les pilae ?",
    "o": [
     "Une soixantaine de centimètres",
     "Une vingtaine de centimètres",
     "Deux mètres"
    ],
    "r": 0,
    "e": "Le texte donne environ soixante centimètres."
   },
   {
    "q": "Comment s'appelle le foyer du système ?",
    "o": [
     "Le praefurnium",
     "Le caldarium",
     "Le laconicum"
    ],
    "r": 0,
    "e": "Ce foyer alimenté en bois débouche sous le dallage."
   },
   {
    "q": "Par où les gaz remontent-ils dans les murs ?",
    "o": [
     "Par des tubulures de terre cuite",
     "Par des gaines de plomb",
     "Par des fentes ménagées dans la pierre"
    ],
    "r": 0,
    "e": "Les tubuli longent les parois avant de sortir par la cheminée."
   },
   {
    "q": "Pourquoi les salles les plus chaudes sont-elles près du foyer ?",
    "o": [
     "Parce que la chaleur diminue avec la distance",
     "Parce que le bois y est stocké",
     "Parce que l'eau y arrive plus vite"
    ],
    "r": 0,
    "e": "La disposition reprend la logique d'un circuit de chauffage."
   },
   {
    "q": "Qui décrit le dispositif au Ier siècle avant Jésus-Christ ?",
    "o": [
     "Vitruve",
     "Pline l'Ancien",
     "Sénèque"
    ],
    "r": 0,
    "e": "Le texte cite Vitruve, architecte et ingénieur."
   },
   {
    "q": "Qui est crédité de l'invention des salles suspendues ?",
    "o": [
     "Sergius Orata",
     "Hadrien",
     "Apollodore de Damas"
    ],
    "r": 0,
    "e": "Les auteurs anciens lui attribuent ce dispositif."
   },
   {
    "q": "Comment le baigneur nettoyait-il sa peau ?",
    "o": [
     "Avec de l'huile et un strigile",
     "Avec du sable et de l'eau froide",
     "Avec une éponge et du vinaigre"
    ],
    "r": 0,
    "e": "Le strigile raclait l'huile et les impuretés."
   },
   {
    "q": "Quel parcours de bain le texte décrit-il ?",
    "o": [
     "Pièce chaude, nettoyage, bain tiède, immersion froide",
     "Bain froid, étuve sèche, bain chaud",
     "Palestre, bain froid, repos au sec"
    ],
    "r": 0,
    "e": "Cet ordre est donné au cinquième paragraphe."
   },
   {
    "q": "Quel combustible alimentait les foyers ?",
    "o": [
     "Du bois",
     "Du charbon de terre",
     "De l'huile d'olive"
    ],
    "r": 0,
    "e": "Le bois était transporté par chariots ou par bateaux."
   },
   {
    "q": "Quel risque présentait une fissure du dallage ?",
    "o": [
     "La fumée et le monoxyde de carbone entraient dans la salle",
     "L'eau du bassin fuyait vers le foyer",
     "Le sol devenait trop froid"
    ],
    "r": 0,
    "e": "Le texte mentionne ce danger et l'effondrement possible."
   },
   {
    "q": "À quelle température l'eau de Bath jaillit-elle ?",
    "o": [
     "Environ quarante-six degrés",
     "Environ seize degrés",
     "Environ soixante-seize degrés"
    ],
    "r": 0,
    "e": "Le texte donne cette température pour la source naturelle."
   },
   {
    "q": "Où le chauffage par le sol réapparaît-il au XIXe siècle ?",
    "o": [
     "D'abord dans des serres",
     "D'abord dans des églises",
     "D'abord dans des hôpitaux"
    ],
    "r": 0,
    "e": "Le texte cite ensuite les bâtiments modernes à tuyaux d'eau chaude."
   },
   {
    "q": "Pourquoi le système chauffe-t-il à la fois le sol et les murs ?",
    "o": [
     "Parce que les gaz montent dans les parois après le dallage",
     "Parce que deux foyers distincts sont installés",
     "Parce que l'air chaud est soufflé par des ouvertures"
    ],
    "r": 0,
    "e": "La circulation ascendante traverse le sol puis les tubuli."
   },
   {
    "q": "Pourquoi le combustible limitait-il la taille des thermes ?",
    "o": [
     "Parce que le bois coûtait cher dans les régions sans forêt",
     "Parce que le stockage exigeait des caves voûtées",
     "Parce que les foyers ne toléraient qu'un bois rare"
    ],
    "r": 0,
    "e": "Le texte relie le prix du bois à la dimension des installations."
   },
   {
    "q": "Pourquoi les archéologues trouvent-ils des réparations nombreuses ?",
    "o": [
     "Parce que le système exigeait un entretien permanent",
     "Parce que les Romains reconstruisaient chaque décennie",
     "Parce que les bains changeaient de fonction souvent"
    ],
    "r": 0,
    "e": "Suie, fissures et piliers affaiblis imposaient des interventions."
   },
   {
    "q": "Pourquoi l'usage du chauffage se perd-il après l'Empire ?",
    "o": [
     "Parce que l'entretien et le combustible deviennent impossibles",
     "Parce que la technique est interdite par les autorités",
     "Parce que le climat se refroidit brutalement"
    ],
    "r": 0,
    "e": "Le texte invoque la rupture des réseaux et la raréfaction du bois."
   },
   {
    "q": "Quelle idée l'auteur retient-il du dispositif romain ?",
    "o": [
     "Chauffer par une masse tiède plutôt que par une flamme visible",
     "Chauffer l'air avant de le souffler dans la pièce",
     "Chauffer uniquement les murs porteurs"
    ],
    "r": 0,
    "e": "La conclusion relie cette intuition aux planchers chauffants actuels."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Le fonctionnement et les usages du chauffage romain par le sol",
     "La vie quotidienne dans les villas romaines",
     "Les techniques de construction en terre cuite"
    ],
    "r": 0,
    "e": "Le texte décrit le dispositif, son coût et sa postérité."
   },
   {
    "q": "Pourquoi l'auteur commence-t-il par la sensation du baigneur ?",
    "o": [
     "Pour faire percevoir un dispositif invisible dans la salle",
     "Pour décrire l'hygiène des Romains",
     "Pour expliquer la fabrication du dallage"
    ],
    "r": 0,
    "e": "La chaleur ressentie renvoie à un foyer situé ailleurs."
   }
  ]
 },
 {
  "id": "d12",
  "theme": "arts",
  "niveau": 5,
  "titre": "À Ravenne, des murs faits de petits morceaux de lumière",
  "corps": "Dans la basilique San Vitale de Ravenne, en Italie, l'empereur Justinien et son épouse Théodora font face aux fidèles depuis plus de quatorze siècles. Ils ne sont pas peints : ils sont composés de milliers de petits cubes de verre et de pierre, les tesselles, serrés les uns contre les autres sur un fond d'or. L'ensemble, achevé vers 547, compte parmi les témoignages les mieux conservés de l'art byzantin.\n\nLa technique est ancienne, mais elle atteint ici une précision remarquable. L'artisan prépare d'abord un dessin sur le mur enduit de plusieurs couches de mortier. Il pose ensuite les tesselles une à une dans la dernière couche encore fraîche, en les inclinant légèrement : ce détail apparemment mineur change tout, car une surface légèrement irrégulière renvoie la lumière dans toutes les directions et fait vibrer la couleur selon la place du spectateur.\n\nLe matériau obéit à des règles précises. Le verre, coloré dans la masse par des oxydes métalliques, offre des bleus profonds, des verts intenses et des rouges rares. Certaines tesselles sont recouvertes d'une feuille d'or prise entre deux couches de verre translucide : posées sur le mur, elles ne brillent pas comme un métal poli, elles diffusent une lueur chaude et changeante, particulièrement sensible à la lumière des cierges.\n\nLes dimensions varient selon le détail représenté. Les visages et les mains, qui exigent finesse, utilisent de très petites tesselles ; les fonds dorés, eux, sont constitués de cubes plus grands, posés en rangs réguliers. Cette différence d'échelle n'est pas visible à distance, mais elle donne à la figure un modelé que la peinture murale obtient autrement.\n\nRavenne a bénéficié d'une situation politique exceptionnelle. Ancienne capitale de l'Empire romain d'Occident au début du Ve siècle, puis siège du pouvoir byzantin en Italie, elle a attiré des ateliers venus de Constantinople et des moyens considérables. Les monuments y sont nombreux, et plusieurs ont conservé leurs décors d'origine, ce qui permet de suivre l'évolution du style en quelques décennies.\n\nLe contexte politique explique l'ambition du programme. Ravenne devient capitale de l'Empire romain d'Occident en 402, quand la cour quitte Milan pour une ville entourée de marais, plus facile à défendre. En 476, le dernier empereur d'Occident y est déposé, et la cité passe sous contrôle ostrogoth avant d'être prise par les armées byzantines en 540. Les vainqueurs installent alors un gouverneur, l'exarque, et entreprennent de donner à la ville les décors d'une nouvelle capitale.\n\nSan Vitale est commencée sous l'épiscopat d'Ecclésius et achevée sous celui de Maximien, grâce à un financement privé attribué à un banquier, Julianus Argentarius. Le plan est central, octogonal, avec un noyau surmonté d'une coupole et un déambulatoire qui l'entoure. Cette forme oblige le mosaïste à travailler sur des surfaces courbes, dans des niches, au sommet de murs arrondis : la pose s'y fait par petites surfaces, car le mortier ne sèche vite que sur une zone limitée.\n\nLe chantier suppose une organisation stricte. Les modèles circulent, sous forme de dessins préparatoires que l'on adapte à la place disponible. Les tesselles sont découpées à la pince selon la couleur et la dimension voulues, puis rangées dans des boîtes par teinte ; un même bleu peut exiger plusieurs nuances pour rendre un dégradé. Les équipes se répartissent par panneau, et l'on repère encore aujourd'hui des changements de main dans les rangées de cubes.\n\nLe programme iconographique n'est pas décoratif. Sur les murs du chœur, Justinien et Théodora apportent des offrandes, encadrés par des dignitaires et des membres du clergé : le pouvoir temporel se présente comme soutien de l'Église, et le couple impérial comme élu. La frontalité des figures, leurs pieds qui semblent flotter, l'absence d'ombre, tout concourt à produire une présence plutôt qu'une scène. Le fidèle ne regarde pas une anecdote, il se tient devant des intercesseurs.\n\nL'évolution du style est sensible d'un monument à l'autre. Les premiers décors de Ravenne héritent du naturalisme romain : les personnages ont du volume, les plis des vêtements suivent le corps. Un siècle plus tard, les silhouettes s'aplatissent, les yeux s'agrandissent, les fonds d'or suppriment l'espace. Cette transformation n'est pas un appauvrissement, mais un choix : l'image doit suggérer une réalité spirituelle, non décrire un lieu.\n\nLa redécouverte de ces décors est récente. Longtemps considérés comme des documents secondaires, ils sont étudiés avec méthode à partir du XIXe siècle, puis photographiés, relevés, comparés. Les restaurations du XXe siècle ont parfois remplacé des tesselles anciennes par des cubes modernes, ce qui pose aujourd'hui de nouvelles questions : faut-il conserver une image lisible ou un matériau d'origine ?\n\nLes mosaïques posent aujourd'hui des questions de conservation délicates. Le mortier se dégrade, les tesselles se détachent, et le nettoyage doit éviter d'arracher la couche d'or. Les restaurateurs travaillent donc à distance, avec des instruments optiques, en intervenant le moins possible. Car la qualité première de ces murs n'est pas seulement leur dessin : c'est la manière dont ils transforment une lumière faible en surface rayonnante.",
  "q": [
   {
    "q": "Dans quelle ville se trouve la basilique San Vitale ?",
    "o": [
     "À Ravenne",
     "À Venise",
     "À Milan"
    ],
    "r": 0,
    "e": "Le texte situe la basilique à Ravenne, en Italie."
   },
   {
    "q": "Quels personnages figurent sur les mosaïques citées ?",
    "o": [
     "Justinien et Théodora",
     "Constantin et Hélène",
     "Charlemagne et Hildegarde"
    ],
    "r": 0,
    "e": "L'empereur Justinien et son épouse Théodora sont nommés."
   },
   {
    "q": "Vers quelle date l'ensemble est-il achevé ?",
    "o": [
     "Vers 547",
     "Vers 447",
     "Vers 747"
    ],
    "r": 0,
    "e": "Le texte donne la date d'environ 547."
   },
   {
    "q": "Comment s'appellent les petits cubes qui composent l'image ?",
    "o": [
     "Des tesselles",
     "Des smalts taillés",
     "Des éclats de marbre"
    ],
    "r": 0,
    "e": "Le terme tesselles désigne ces cubes de verre et de pierre."
   },
   {
    "q": "Sur quoi l'artisan prépare-t-il d'abord son dessin ?",
    "o": [
     "Sur le mur enduit de plusieurs couches de mortier",
     "Sur un panneau de bois transportable",
     "Sur un carton conservé à l'atelier"
    ],
    "r": 0,
    "e": "Le dessin est tracé directement sur l'enduit mural."
   },
   {
    "q": "Pourquoi incline-t-on légèrement les tesselles ?",
    "o": [
     "Pour que la surface renvoie la lumière dans toutes les directions",
     "Pour que le mortier adhère plus vite",
     "Pour gagner de la place sur le mur"
    ],
    "r": 0,
    "e": "L'irrégularité voulue fait vibrer la couleur selon la position du spectateur."
   },
   {
    "q": "Comment le verre est-il coloré ?",
    "o": [
     "Dans la masse, par des oxydes métalliques",
     "Par une peinture appliquée après cuisson",
     "Par un vernis posé sur le mortier"
    ],
    "r": 0,
    "e": "La couleur vient de la composition même du verre."
   },
   {
    "q": "Comment sont faites les tesselles dorées ?",
    "o": [
     "Une feuille d'or est prise entre deux couches de verre",
     "Une couche de peinture dorée recouvre la pierre",
     "Un fil d'or est soudé sur chaque cube"
    ],
    "r": 0,
    "e": "L'or est enfermé dans le verre translucide."
   },
   {
    "q": "Quel effet produisent ces tesselles dorées ?",
    "o": [
     "Une lueur chaude qui varie avec la lumière",
     "Un reflet net semblable à un miroir",
     "Un éclat froid et uniforme"
    ],
    "r": 0,
    "e": "Le texte oppose cette diffusion à l'éclat d'un métal poli."
   },
   {
    "q": "Quelles parties utilisent les plus petites tesselles ?",
    "o": [
     "Les visages et les mains",
     "Les fonds dorés",
     "Les bordures décoratives"
    ],
    "r": 0,
    "e": "La finesse du détail impose des cubes plus petits."
   },
   {
    "q": "Pourquoi les fonds dorés emploient-ils de plus grands cubes ?",
    "o": [
     "Parce qu'ils ne demandent pas de modelé fin",
     "Parce que l'or est trop rare pour être divisé",
     "Parce qu'ils doivent être posés plus vite"
    ],
    "r": 0,
    "e": "Le texte explique que cette différence reste invisible à distance."
   },
   {
    "q": "Quel statut Ravenne a-t-elle occupé au début du Ve siècle ?",
    "o": [
     "Capitale de l'Empire romain d'Occident",
     "Capitale de l'Empire byzantin",
     "Simple port militaire"
    ],
    "r": 0,
    "e": "Le texte rappelle ce rôle politique."
   },
   {
    "q": "D'où venaient les ateliers qui ont travaillé à Ravenne ?",
    "o": [
     "De Constantinople",
     "De Rome",
     "D'Alexandrie"
    ],
    "r": 0,
    "e": "Le texte mentionne des ateliers venus de Constantinople."
   },
   {
    "q": "Quelle difficulté de conservation est évoquée ?",
    "o": [
     "Le mortier se dégrade et les tesselles se détachent",
     "Les couleurs pâlissent au contact de l'air",
     "L'or attire les oiseaux et les rongeurs"
    ],
    "r": 0,
    "e": "Le texte décrit ces dégradations et le risque lié au nettoyage."
   },
   {
    "q": "Comment les restaurateurs interviennent-ils ?",
    "o": [
     "À distance, avec des instruments optiques",
     "En déposant les mosaïques pour les remonter",
     "En recouvrant les murs d'un vernis protecteur"
    ],
    "r": 0,
    "e": "Le texte insiste sur une intervention minimale."
   },
   {
    "q": "Pourquoi le nettoyage est-il délicat ?",
    "o": [
     "Parce qu'il peut arracher la couche d'or",
     "Parce qu'il décolore le verre bleu",
     "Parce qu'il ramollit le mortier neuf"
    ],
    "r": 0,
    "e": "La fragilité de la dorure limite les gestes possibles."
   },
   {
    "q": "Que montre la comparaison avec la peinture murale ?",
    "o": [
     "Que la mosaïque obtient le modelé par la taille des cubes",
     "Que la peinture résiste mieux au temps",
     "Que les deux techniques emploient le même mortier"
    ],
    "r": 0,
    "e": "Le texte souligne ce moyen propre à la mosaïque."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La technique et la conservation des mosaïques de Ravenne",
     "La biographie de l'empereur Justinien",
     "L'urbanisme de Ravenne au Ve siècle"
    ],
    "r": 0,
    "e": "Le texte décrit la fabrication, l'effet visuel et la préservation des décors."
   },
   {
    "q": "Pourquoi l'auteur insiste-t-il sur la lumière ?",
    "o": [
     "Parce que l'œuvre est faite pour jouer avec elle",
     "Parce que les églises étaient sombres",
     "Parce que les tesselles sont phosphorescentes"
    ],
    "r": 0,
    "e": "L'inclinaison des cubes et l'or diffusent la lumière, ce qui définit l'effet recherché."
   },
   {
    "q": "Quand Ravenne devient-elle capitale de l'Empire romain d'Occident ?",
    "o": [
     "En 402",
     "En 476",
     "En 540"
    ],
    "r": 0,
    "e": "Le texte donne l'année 402, lors du départ de la cour de Milan."
   },
   {
    "q": "Pourquoi la cour a-t-elle choisi cette ville ?",
    "o": [
     "Parce qu'elle était entourée de marais, donc facile à défendre",
     "Parce qu'elle disposait d'un grand port de mer",
     "Parce qu'elle était le centre du christianisme"
    ],
    "r": 0,
    "e": "Le texte invoque la protection naturelle offerte par les marais."
   },
   {
    "q": "Qui finance la construction de San Vitale ?",
    "o": [
     "Un banquier nommé Julianus Argentarius",
     "L'empereur Justinien en personne",
     "La ville de Ravenne par un impôt"
    ],
    "r": 0,
    "e": "Le texte attribue le financement privé à ce banquier."
   },
   {
    "q": "Pourquoi la pose se fait-elle par petites surfaces ?",
    "o": [
     "Parce que le mortier ne reste frais que sur une zone limitée",
     "Parce que les tesselles sont livrées chaque matin",
     "Parce que la coupole doit sécher entre deux rangées"
    ],
    "r": 0,
    "e": "La pose exige un mortier encore frais sous chaque cube."
   },
   {
    "q": "Que montre la comparaison entre les premiers décors et les plus tardifs ?",
    "o": [
     "Le passage du naturalisme romain à une frontalité spirituelle",
     "La disparition progressive de la couleur bleue",
     "L'emploi croissant de la pierre au détriment du verre"
    ],
    "r": 0,
    "e": "Le volume des corps cède la place à des silhouettes plates sur fond d'or."
   }
  ]
 },
 {
  "id": "d17",
  "theme": "arts",
  "niveau": 5,
  "titre": "Le jour où la photographie est devenue publique",
  "corps": "En janvier 1839, l'Académie des sciences de Paris entend la description d'un procédé qui semble tenir de la magie : une plaque de cuivre argentée, exposée quelques minutes dans une chambre noire, garde l'empreinte d'un paysage. Le gouvernement français décide d'acheter la méthode et de la rendre publique. En août de la même année, le secret est livré au monde, et le mot daguerréotype entre dans les dictionnaires.\n\nL'invention n'est pas née d'un seul homme. Nicéphore Niépce, propriétaire terrien bourguignon, cherchait depuis les années 1810 à fixer l'image de la chambre obscure. Il y parvient vers 1826 avec une plaque de bitume de Judée, dont la durée de pose atteint plusieurs heures : le résultat, une vue prise depuis sa fenêtre, est flou mais reconnaissable. En 1829, il s'associe avec Louis Daguerre, peintre de panoramas, qui travaille de son côté sur des surfaces sensibles à la lumière. Niépce meurt en 1833, avant que l'entreprise ne porte ses fruits.\n\nDaguerre trouve la solution en 1835, puis l'améliore pendant quatre ans. La plaque est un cuivre recouvert d'une fine couche d'argent, polie jusqu'à obtenir un miroir. On la sensibilise en l'exposant aux vapeurs d'iode, qui forment une couche d'iodure d'argent. L'exposition en chambre noire modifie cette couche selon l'intensité lumineuse, mais l'image reste invisible : c'est le développement, en plaçant la plaque au-dessus d'un récipient de mercure chauffé à une soixantaine de degrés, qui fait apparaître les détails. Les vapeurs se déposent sur les zones éclairées, et le dessin surgit.\n\nIl reste à fixer l'image, c'est-à-dire à empêcher la lumière de continuer à agir. Daguerre utilise une solution chaude de sel marin, puis adopte le procédé à l'hyposulfite proposé par un savant anglais. La plaque est ensuite rincée et séchée. Chaque épreuve est unique : il n'existe pas de négatif, donc pas de tirage multiple, et le daguerréotype se contemple sous un angle précis, car sa surface réfléchissante se comporte comme un miroir.\n\nLes défauts sont nombreux. Temps de pose longs, image inversée de gauche à droite, fragilité extrême, coût élevé du cuivre et du mercure. Mais la précision des détails stupéfie : on distingue les pavés d'une rue, les enseignes, les visages. Les premiers portraits exigent des minutes d'immobilité ; on installe des appuie-tête pour maintenir les modèles, et les enfants sont photographiés endormis.\n\nL'usage se répand vite. Des ateliers ouvrent à Paris, à Londres, à New York. En 1840, un objectif plus lumineux, calculé par un mathématicien hongrois, réduit fortement le temps de pose et rend le portrait accessible. Des voyageurs rapportent des vues d'Égypte, de Grèce, d'Amérique ; des savants photographient des monuments avant leur restauration. La daguerréotypie devient à la fois un commerce, un loisir bourgeois et un instrument de science.\n\nSon règne est bref. En 1851, un procédé au collodion humide, moins coûteux et reproductible grâce à un négatif, s'impose en quelques années. Les ateliers vendent leurs plaques, les familles rangent leurs portraits dans des étuis de cuir, et l'objet devient un souvenir. Les collectionneurs le redécouvrent au XXe siècle, puis les musées entreprennent de le conserver : la moindre trace de doigt attaque la surface, et l'air chargé de soufre la ternit.\n\nLa production a ses spécialités. À Paris, les ateliers photographient des architectures et des œuvres d'art ; aux États-Unis, une génération de portraitistes améliore l'éclairage latéral venu d'une fenêtre et retouche les plaques à la main pour effacer les défauts de peau. Le daguerréotype devient alors un objet de statut, vendu dans un écrin tapissé de velours, que l'on pose sur un meuble du salon. Sa fragilité même en fait un bien précieux, rarement exposé à la lumière du jour.\n\nLa leçon technique reste actuelle. Le daguerréotype montre qu'une image peut naître d'une réaction chimique minuscule, révélée par un développement, et non dessinée par une main. Il annonce aussi une inquiétude qui n'a pas vieilli : lorsque la ressemblance devient exacte, que reste-t-il au portrait peint, et que devient le sujet qui doit rester immobile ?",
  "q": [
   {
    "q": "Devant quelle institution le procédé est-il présenté en janvier 1839 ?",
    "o": [
     "L'Académie des sciences de Paris",
     "L'Académie des beaux-arts de Rome",
     "La Royal Society de Londres"
    ],
    "r": 0,
    "e": "Le texte situe cette présentation à l'Académie des sciences."
   },
   {
    "q": "Que décide le gouvernement français ?",
    "o": [
     "Acheter la méthode et la rendre publique",
     "Interdire la diffusion du procédé",
     "Financer un atelier privé à Paris"
    ],
    "r": 0,
    "e": "Le procédé est racheté puis publié en août 1839."
   },
   {
    "q": "Quel nom porte l'inventeur associé à Niépce ?",
    "o": [
     "Louis Daguerre",
     "Hippolyte Bayard",
     "William Talbot"
    ],
    "r": 0,
    "e": "Le texte nomme Louis Daguerre, peintre de panoramas."
   },
   {
    "q": "Quelle substance Niépce utilise-t-il vers 1826 ?",
    "o": [
     "Du bitume de Judée",
     "De l'iodure d'argent",
     "Du collodion"
    ],
    "r": 0,
    "e": "La plaque de bitume exigeait plusieurs heures de pose."
   },
   {
    "q": "En quelle année Niépce meurt-il ?",
    "o": [
     "En 1833",
     "En 1829",
     "En 1839"
    ],
    "r": 0,
    "e": "Le texte donne 1833, quatre ans après l'association."
   },
   {
    "q": "Avec quel métal la plaque est-elle recouverte ?",
    "o": [
     "De l'argent",
     "De l'or",
     "Du platine"
    ],
    "r": 0,
    "e": "Le cuivre est recouvert d'une fine couche d'argent poli."
   },
   {
    "q": "Par quelles vapeurs la plaque est-elle sensibilisée ?",
    "o": [
     "Les vapeurs d'iode",
     "Les vapeurs de mercure",
     "Les vapeurs d'alcool"
    ],
    "r": 0,
    "e": "L'iode forme une couche d'iodure d'argent sensible à la lumière."
   },
   {
    "q": "À quelle température le mercure est-il chauffé pour le développement ?",
    "o": [
     "Une soixantaine de degrés",
     "Une centaine de degrés",
     "Trois cents degrés"
    ],
    "r": 0,
    "e": "Le texte parle d'une soixantaine de degrés."
   },
   {
    "q": "Pourquoi le daguerréotype est-il une pièce unique ?",
    "o": [
     "Parce qu'il n'existe pas de négatif permettant des tirages",
     "Parce que la plaque ne supporte qu'une seule pose",
     "Parce que le mercure détruit la plaque après tirage"
    ],
    "r": 0,
    "e": "L'absence de négatif interdit toute reproduction multiple."
   },
   {
    "q": "Quel appareil aide les modèles à rester immobiles ?",
    "o": [
     "Un appuie-tête",
     "Une sangle de maintien",
     "Un fauteuil inclinable"
    ],
    "r": 0,
    "e": "Les temps de pose longs imposaient ce dispositif."
   },
   {
    "q": "Quel objectif réduit le temps de pose en 1840 ?",
    "o": [
     "Un objectif calculé par un mathématicien hongrois",
     "Un objectif mis au point par Daguerre",
     "Un objectif importé d'Amérique"
    ],
    "r": 0,
    "e": "Le texte attribue ce calcul à un mathématicien hongrois."
   },
   {
    "q": "Quel procédé s'impose en 1851 ?",
    "o": [
     "Le collodion humide",
     "Le tirage à l'albumine",
     "Le papier salé"
    ],
    "r": 0,
    "e": "Moins coûteux et reproductible, il remplace la plaque métallique."
   },
   {
    "q": "Que font les familles de leurs portraits ?",
    "o": [
     "Elles les rangent dans des étuis de cuir",
     "Elles les donnent aux académies",
     "Elles les détruisent pour récupérer l'argent"
    ],
    "r": 0,
    "e": "Le texte décrit ces portraits conservés comme des souvenirs."
   },
   {
    "q": "Qu'est-ce qui attaque la surface d'une plaque ?",
    "o": [
     "La moindre trace de doigt et le soufre de l'air",
     "L'humidité et le froid",
     "La lumière du jour uniquement"
    ],
    "r": 0,
    "e": "Ces deux causes expliquent les précautions de conservation."
   },
   {
    "q": "Pourquoi le daguerréotype se regarde-t-il sous un angle précis ?",
    "o": [
     "Parce que sa surface réfléchissante se comporte comme un miroir",
     "Parce que l'image est gravée en relief",
     "Parce que les couleurs changent avec la lumière"
    ],
    "r": 0,
    "e": "Le support argenté reflète la lumière et impose une inclinaison."
   },
   {
    "q": "Pourquoi Niépce n'a-t-il pas profité du succès ?",
    "o": [
     "Parce qu'il est mort avant l'aboutissement du procédé",
     "Parce qu'il a vendu sa part à l'État",
     "Parce qu'il refusait de travailler avec Daguerre"
    ],
    "r": 0,
    "e": "Il meurt en 1833, six ans avant la présentation publique."
   },
   {
    "q": "Pourquoi les premiers portraits exigeaient-ils tant d'immobilité ?",
    "o": [
     "Parce que la couche sensible restait peu réactive",
     "Parce que l'objectif était mal centré",
     "Parce que le mercure séchait lentement"
    ],
    "r": 0,
    "e": "La faible sensibilité imposait des minutes de pose."
   },
   {
    "q": "Pourquoi le procédé au collodion a-t-il supplanté la plaque ?",
    "o": [
     "Parce qu'il coûtait moins cher et permettait des copies",
     "Parce qu'il donnait des images en couleur",
     "Parce qu'il ne nécessitait aucun produit chimique"
    ],
    "r": 0,
    "e": "Le négatif autorisait la reproduction en série."
   },
   {
    "q": "Pourquoi les savants ont-ils photographié des monuments ?",
    "o": [
     "Pour en garder la trace avant restauration",
     "Pour prouver la supériorité de la peinture",
     "Pour illustrer des romans de voyage"
    ],
    "r": 0,
    "e": "Le texte cite cet usage documentaire."
   },
   {
    "q": "Pourquoi l'invention est-elle dite collective ?",
    "o": [
     "Parce que plusieurs chercheurs ont contribué avant et après 1839",
     "Parce que l'Académie a signé le brevet",
     "Parce que l'État a financé les recherches"
    ],
    "r": 0,
    "e": "Niépce, Daguerre et d'autres savants y ont pris part."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "L'invention, la diffusion et le déclin du daguerréotype",
     "La vie de Louis Daguerre",
     "L'histoire de la chambre noire"
    ],
    "r": 0,
    "e": "Le texte suit le procédé de sa mise au point à son remplacement."
   },
   {
    "q": "Pourquoi l'auteur décrit-il précisément les étapes chimiques ?",
    "o": [
     "Pour montrer que l'image résulte d'un processus maîtrisable",
     "Pour expliquer comment fabriquer une plaque chez soi",
     "Pour prouver que la chimie précède l'optique"
    ],
    "r": 0,
    "e": "La précision technique répond au caractère « magique » de l'annonce."
   },
   {
    "q": "Quelle question l'auteur laisse-t-il ouverte en conclusion ?",
    "o": [
     "Celle du statut du portrait et du sujet photographié",
     "Celle du prix des plaques de cuivre",
     "Celle de la date exacte de l'invention"
    ],
    "r": 0,
    "e": "La dernière phrase évoque le portrait peint et l'immobilité du modèle."
   },
   {
    "q": "Comment les portraitistes américains amélioraient-ils leurs images ?",
    "o": [
     "Ils éclairaient latéralement et retouchaient la plaque à la main",
     "Ils utilisaient un fond peint et des costumes loués",
     "Ils multipliaient les poses sur une même plaque"
    ],
    "r": 0,
    "e": "Le texte décrit l'éclairage par une fenêtre et la retouche manuelle."
   }
  ]
 },
 {
  "id": "d22",
  "theme": "arts",
  "niveau": 5,
  "titre": "Une estampe japonaise coûtait le prix d'un bol de nouilles",
  "corps": "À Edo, au XIXe siècle, on achetait une estampe pour le prix d'un repas simple. Les boutiques en vendaient près des théâtres et des maisons de bains, et les amateurs les collectionnaient dans des albums. Ces images, que l'Europe appellera plus tard ukiyo-e, « images du monde flottant », n'étaient pas des œuvres uniques mais des objets imprimés en série, produits par une équipe et pensés pour se vendre.\n\nLa fabrication reposait sur une division stricte du travail. Un éditeur commandait le projet, finançait les bois et décidait du tirage. Un dessinateur fournissait le modèle, à l'encre, sur un papier mince. Un graveur collait ce dessin sur une planche de cerisier, puis évitait le bois autour des traits : la planche conservait le dessin en relief, et les zones évidées restaient blanches à l'impression. Un imprimeur, enfin, encrait la planche et appliquait la feuille à la main.\n\nLa première planche, dite planche de trait, portait le dessin au sumi, cette encre noire. Elle servait de repère pour toutes les autres : le graveur y découpait une seconde planche pour chaque couleur, en se guidant sur des marques de repérage gravées dans l'angle. Ce système, appelé kentō, garantissait que les passages successifs s'alignaient exactement. Un tirage complet pouvait demander une dizaine de planches, parfois davantage pour un ciel dégradé.\n\nLes couleurs venaient de pigments végétaux et minéraux : du safran pour les rouges, du carbonate de cuivre pour les verts, du noir de fumée pour les gris. L'arrivée d'un bleu de Prusse importé, au XVIIIe siècle, a bouleversé les ateliers : ce pigment, plus stable et plus profond que les bleus traditionnels, a permis les ciels nocturnes et les vagues sombres qui caractérisent les estampes tardives.\n\nLes sujets suivaient le goût du public. Les acteurs de kabuki, représentés dans un rôle précis, se vendaient aux spectateurs qui venaient de les applaudir ; les courtisanes à la mode faisaient l'objet de séries ; les guerriers illustraient des récits célèbres. Les paysages sont venus plus tard, quand les voyages se sont démocratisés et que les éditeurs ont compris qu'un ensemble de vues pouvait se vendre comme un souvenir.\n\nDeux artistes dominent cette période. Hokusai, dessinateur infatigable, publie vers 1831 une série de trente-six vues du mont Fuji, dont une vague immense qui semble suspendue au-dessus de trois barques. Hiroshige, un peu plus jeune, compose les cinquante-trois étapes d'une route reliant Edo à Kyoto, avec des relais, des voyageurs et des ciels changeants. Ces séries ont fixé dans l'imaginaire européen un Japon de neige, de pluie et de lanternes.\n\nLa technique du tirage exigeait un papier de mûrier, humidifié pour absorber l'encre, et un frottement régulier avec un tampon de bambou, le baren. L'humidité du papier, la pression de la main, la charge d'encre : tout influait sur le résultat. Les tirages anciens, conservés à l'abri de la lumière, gardent des couleurs vives ; ceux qui ont longtemps été exposés virent au jaune, car certains pigments sont sensibles aux ultraviolets.\n\nL'exportation a changé leur statut. Les estampes servaient parfois d'emballage pour des céramiques envoyées en Europe ; des amateurs les ont remarquées, puis collectionnées. À partir des années 1860, le japonisme gagne les ateliers parisiens : Van Gogh copie des estampes, Monet accroche des images japonaises dans sa maison, et les compositions audacieuses — cadrages coupés, aplats de couleur, lignes sinueuses — nourrissent l'affiche et la peinture moderne.\n\nLe déclin est rapide. Après 1868, l'ouverture du pays, la photographie et les encres industrielles transforment le marché ; les graveurs perdent leurs commandes, et beaucoup d'ateliers ferment. Les collectionneurs européens achètent alors à bas prix ce que le Japon considérait comme un art populaire, et les musées occidentaux constituent des ensembles qui font aujourd'hui la réputation de ces images.\n\nLa leçon est celle d'un art commercial devenu classique. Ces estampes n'étaient ni signées d'un seul génie ni destinées à l'éternité : elles répondaient à une demande, obéissaient à des contraintes de prix et de délai, et passaient par les mains de plusieurs artisans. C'est peut-être cette contrainte qui leur a donné leur force : obligées d'être lisibles et frappantes, elles ont poussé la composition graphique plus loin que bien des tableaux de salon.",
  "q": [
   {
    "q": "Que signifie l'expression ukiyo-e ?",
    "o": [
     "Images du monde flottant",
     "Estampes du mont Fuji",
     "Peintures de la capitale"
    ],
    "r": 0,
    "e": "Le texte traduit ainsi ce terme."
   },
   {
    "q": "Combien coûtait une estampe à Edo ?",
    "o": [
     "Le prix d'un repas simple",
     "Le prix d'une maison",
     "Le prix d'un sabre"
    ],
    "r": 0,
    "e": "Le texte la compare à un bol de nouilles."
   },
   {
    "q": "Qui décidait du tirage et finançait les bois ?",
    "o": [
     "L'éditeur",
     "Le graveur",
     "L'imprimeur"
    ],
    "r": 0,
    "e": "L'éditeur commandait, finançait et fixait le tirage."
   },
   {
    "q": "Sur quel bois gravait-on les planches ?",
    "o": [
     "Du cerisier",
     "Du chêne",
     "Du bambou"
    ],
    "r": 0,
    "e": "Le texte cite la planche de cerisier."
   },
   {
    "q": "Quelle planche servait de repère aux autres ?",
    "o": [
     "La planche de trait à l'encre noire",
     "La planche du fond coloré",
     "La planche des marques de tirage"
    ],
    "r": 0,
    "e": "Le dessin au sumi guidait la gravure des couleurs."
   },
   {
    "q": "Comment s'appelle le système de repérage des passages ?",
    "o": [
     "Le kentō",
     "Le baren",
     "Le sumi"
    ],
    "r": 0,
    "e": "Ces marques gravées dans l'angle assurent l'alignement."
   },
   {
    "q": "Quel pigment importé a transformé les ciels et les vagues ?",
    "o": [
     "Le bleu de Prusse",
     "Le vermillon de Chine",
     "Le blanc de plomb"
    ],
    "r": 0,
    "e": "Plus stable et plus profond, il a permis les bleus sombres."
   },
   {
    "q": "Combien de planches un tirage complet pouvait-il demander ?",
    "o": [
     "Une dizaine",
     "Deux ou trois",
     "Une cinquantaine"
    ],
    "r": 0,
    "e": "Le texte parle d'une dizaine, parfois davantage."
   },
   {
    "q": "Quels sujets se vendaient aux spectateurs de théâtre ?",
    "o": [
     "Les acteurs de kabuki dans un rôle précis",
     "Les paysages de montagne",
     "Les fleurs de cerisier"
    ],
    "r": 0,
    "e": "Ces estampes accompagnaient le succès des pièces."
   },
   {
    "q": "Vers quelle année Hokusai publie-t-il ses vues du Fuji ?",
    "o": [
     "Vers 1831",
     "Vers 1781",
     "Vers 1881"
    ],
    "r": 0,
    "e": "Le texte date cette série des environs de 1831."
   },
   {
    "q": "Combien d'étapes compte la série de Hiroshige ?",
    "o": [
     "Cinquante-trois",
     "Trente-six",
     "Cent"
    ],
    "r": 0,
    "e": "Elle décrit la route entre Edo et Kyoto."
   },
   {
    "q": "Quel outil sert à frotter le papier sur la planche ?",
    "o": [
     "Un tampon de bambou appelé baren",
     "Un rouleau de bois dur",
     "Une brosse de crin"
    ],
    "r": 0,
    "e": "Le baren applique une pression régulière."
   },
   {
    "q": "Quel papier utilise-t-on pour l'impression ?",
    "o": [
     "Un papier de mûrier humidifié",
     "Un parchemin animal",
     "Un papier de riz sec"
    ],
    "r": 0,
    "e": "L'humidité lui permet d'absorber l'encre."
   },
   {
    "q": "Pourquoi certains tirages ont-ils jauni ?",
    "o": [
     "Parce que certains pigments craignent les ultraviolets",
     "Parce que le papier noircit avec l'âge",
     "Parce que l'encre sumi s'oxyde"
    ],
    "r": 0,
    "e": "Une longue exposition à la lumière altère les couleurs."
   },
   {
    "q": "Quel usage inattendu les estampes ont-elles eu à l'export ?",
    "o": [
     "Elles emballaient des céramiques",
     "Elles servaient de monnaie",
     "Elles calaient les caisses de thé"
    ],
    "r": 0,
    "e": "Des amateurs les ont remarquées dans ces emballages."
   },
   {
    "q": "Comment Van Gogh s'est-il approprié ces images ?",
    "o": [
     "En les copiant",
     "En les collectionnant sans les étudier",
     "En les faisant graver à nouveau"
    ],
    "r": 0,
    "e": "Le texte cite ses copies d'estampes japonaises."
   },
   {
    "q": "Qu'est-ce que le japonisme ?",
    "o": [
     "L'engouement des ateliers européens pour l'art japonais",
     "Un mouvement de peintres japonais installés à Paris",
     "Une technique d'impression mise au point en Europe"
    ],
    "r": 0,
    "e": "Il influence l'affiche et la peinture moderne."
   },
   {
    "q": "Quelles causes le texte donne-t-il au déclin ?",
    "o": [
     "L'ouverture du pays, la photographie et les encres industrielles",
     "Une interdiction impériale des estampes",
     "La raréfaction du papier de mûrier"
    ],
    "r": 0,
    "e": "Ces trois facteurs transforment le marché après 1868."
   },
   {
    "q": "Pourquoi les collectionneurs européens ont-ils pu acheter à bas prix ?",
    "o": [
     "Parce que ces images étaient un art populaire au Japon",
     "Parce que les artistes étaient inconnus",
     "Parce que le gouvernement japonais les bradait"
    ],
    "r": 0,
    "e": "Leur statut local était celui d'objets courants."
   },
   {
    "q": "Pourquoi l'auteur parle-t-il d'un art commercial devenu classique ?",
    "o": [
     "Parce que des objets bon marché sont entrés dans les musées",
     "Parce que les estampes étaient réservées aux marchands",
     "Parce que les artistes vivaient de commandes officielles"
    ],
    "r": 0,
    "e": "Le texte souligne ce renversement de statut."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La fabrication, le succès et la postérité des estampes japonaises",
     "La vie d'Hokusai",
     "Le commerce des céramiques japonaises"
    ],
    "r": 0,
    "e": "Le texte décrit la chaîne de production et l'histoire du genre."
   },
   {
    "q": "Pourquoi l'auteur insiste-t-il sur la division du travail ?",
    "o": [
     "Pour montrer qu'une estampe résulte de plusieurs métiers",
     "Pour expliquer la cherté des tirages",
     "Pour critiquer le rôle des éditeurs"
    ],
    "r": 0,
    "e": "Dessinateur, graveur, imprimeur et éditeur collaborent."
   },
   {
    "q": "Que suggère la conclusion sur l'effet des contraintes commerciales ?",
    "o": [
     "Qu'elles ont pu stimuler l'invention graphique",
     "Qu'elles ont appauvri la qualité des images",
     "Qu'elles ont empêché toute recherche esthétique"
    ],
    "r": 0,
    "e": "L'obligation d'être lisible et frappant a poussé la composition."
   }
  ]
 },
 {
  "id": "d14",
  "theme": "géographie",
  "niveau": 5,
  "titre": "Ce sol qui ne dégèle jamais tout à fait",
  "corps": "Sous la toundra du Grand Nord, à quelques dizaines de centimètres de profondeur, commence un sol qui reste sous zéro degré pendant au moins deux années consécutives. Les géologues l'appellent pergélisol. Il couvre une part considérable des terres émergées de l'hémisphère Nord, essentiellement en Sibérie, en Alaska et dans le nord du Canada.\n\nCe sol n'est pas uniforme. Sa partie supérieure, la couche active, dégèle chaque été sur quelques dizaines de centimètres, ce qui permet à une végétation rase de s'installer. En dessous, la température ne remonte jamais au-dessus du point de congélation, et le sol peut être cimenté par la glace sur des centaines de mètres d'épaisseur. Dans certaines régions, cette glace représente une grande partie du volume du terrain, parfois davantage que les grains de roche et de terre.\n\nLe pergélisol est un héritage. Il s'est formé pendant les périodes froides, lorsque les débris végétaux et animaux se sont accumulés sans se décomposer complètement, faute de chaleur et d'oxygène. Il contient ainsi une quantité de carbone organique supérieure à celle que renferme aujourd'hui l'atmosphère terrestre, stockée dans un matériau sombre, riche en matière organique congelée.\n\nTant que le sol reste gelé, ce carbone ne bouge pas. Dès qu'il dégèle, les micro-organismes reprennent leur travail : ils consomment la matière organique et libèrent du dioxyde de carbone, ou du méthane lorsque le milieu manque d'oxygène. Le dégel crée aussi des affaissements, car la glace fondue laisse des vides que le sol ne peut combler. Des dépressions se forment, se remplissent d'eau, et de petits lacs apparaissent là où le terrain était stable. Ce phénomène porte le nom de thermokarst.\n\nLes conséquences sont visibles dans les villes du nord. À Iakoutsk, en Sibérie, plusieurs immeubles reposent sur des pieux plantés profondément dans le sol gelé, afin que la chaleur des bâtiments ne dégèle pas leurs fondations. Quand le pergélisol se réchauffe malgré tout, ces pieux perdent leur appui et les constructions se fissurent. Des routes se déforment, des conduites éclatent, et les communautés doivent parfois déplacer des bâtiments entiers.\n\nLes géologues distinguent plusieurs formes. Le pergélisol continu couvre de vastes surfaces sans interruption ; le discontinu se présente en taches séparées par des sols qui dégèlent chaque été ; le sporadique n'occupe que des îlots favorables, souvent des tourbières ou des versants ombragés. À l'intérieur même d'une zone continue peuvent subsister des lentilles de terrain non gelé, appelées taliks, qui se maintiennent sous des lacs ou sous des rivières assez profondes pour ne pas geler jusqu'au fond.\n\nLa glace y prend des formes variées. En surface, le gel contracte le sol et y ouvre des fissures verticales que l'eau remplit en été ; en gelant, cette eau forme un coin qui écarte peu à peu les parois. Au fil des années, ces coins de glace s'agrandissent et dessinent des polygones réguliers, visibles du ciel comme un dallage. Certains coins atteignent plusieurs mètres de profondeur et plusieurs mètres de large, et leur fonte suffit à faire effondrer le terrain alentour.\n\nLes sols les plus riches en matière organique portent un nom particulier, le yedoma, dépôt de limon et de débris végétaux accumulé pendant les périodes glaciaires sur des épaisseurs considérables. Ce matériau, très riche en carbone, est particulièrement sensible au dégel : lorsqu'il s'effondre, il expose des parois sombres où les micro-organismes trouvent aussitôt de quoi se nourrir.\n\nLa surveillance repose sur des réseaux de forages. Des tubes instrumentés mesurent la température à plusieurs profondeurs, et l'on compare les profils d'une année sur l'autre. Les satellites complètent ces mesures : ils détectent les affaissements du sol par interférométrie, repèrent l'apparition de nouveaux lacs et suivent le recul du trait de côte. Ces observations convergent : dans plusieurs régions, la température du pergélisol augmente, et l'épaisseur de la couche active s'accroît.\n\nLe mécanisme de rétroaction est progressif. Le carbone libéré par le dégel s'ajoute à celui que l'humanité émet, ce qui renforce le réchauffement, lequel accélère le dégel. Les modèles chiffrent mal ce phénomène, car il dépend de détails locaux : la teneur en glace, le drainage, la végétation qui s'installe sur les sols effondrés. Une tourbière qui se forme dans une dépression piège du carbone, tandis qu'un lac qui s'étend en libère sous forme de méthane : le bilan dépend du paysage, et non seulement de la température.\n\nLe littoral arctique recule également, car des falaises de terre gelée s'effondrent dans la mer à mesure que la glace qui les tenait disparaît. Les scientifiques surveillent ces zones avec des forages, des satellites et des capteurs de température, car l'évolution du pergélisol influence à la fois le climat mondial et la vie quotidienne des habitants du Grand Nord.",
  "q": [
   {
    "q": "Quelle est la définition du pergélisol donnée par le texte ?",
    "o": [
     "Un sol resté sous zéro degré pendant au moins deux années",
     "Un sol gelé seulement pendant les nuits d'hiver",
     "Une couche de glace permanente en surface"
    ],
    "r": 0,
    "e": "Le texte reprend cette définition en deux années consécutives."
   },
   {
    "q": "Où le pergélisol est-il surtout présent ?",
    "o": [
     "En Sibérie, en Alaska et au nord du Canada",
     "Au Groenland et en Islande uniquement",
     "Dans les Alpes et les Rocheuses"
    ],
    "r": 0,
    "e": "Ces trois régions sont citées."
   },
   {
    "q": "Comment s'appelle la couche supérieure qui dégèle chaque été ?",
    "o": [
     "La couche active",
     "La couche meuble",
     "Le horizon humifère"
    ],
    "r": 0,
    "e": "Ce terme désigne la partie qui fond en saison chaude."
   },
   {
    "q": "De quelle épaisseur cette couche dégèle-t-elle en été ?",
    "o": [
     "De quelques dizaines de centimètres",
     "De plusieurs mètres",
     "De quelques millimètres"
    ],
    "r": 0,
    "e": "Le texte parle de quelques dizaines de centimètres."
   },
   {
    "q": "Que peut représenter la glace dans certains terrains ?",
    "o": [
     "Une part du volume supérieure à celle des grains de roche",
     "Moins d'un pour cent du volume total",
     "Exactement la moitié de la masse"
    ],
    "r": 0,
    "e": "Le texte indique qu'elle peut dépasser le volume des grains."
   },
   {
    "q": "Pourquoi la matière organique ne s'est-elle pas décomposée ?",
    "o": [
     "Parce que le froid et le manque d'oxygène l'ont bloquée",
     "Parce que les bactéries étaient absentes du sol",
     "Parce qu'elle a été stérilisée par le sel"
    ],
    "r": 0,
    "e": "Le froid et l'absence d'oxygène ont interrompu la décomposition."
   },
   {
    "q": "Quelle quantité de carbone le pergélisol contient-il ?",
    "o": [
     "Plus que l'atmosphère terrestre actuelle",
     "Environ un centième de l'atmosphère",
     "Autant que toutes les forêts réunies"
    ],
    "r": 0,
    "e": "Le texte compare ce stock à celui de l'atmosphère."
   },
   {
    "q": "Que libèrent les micro-organismes au dégel ?",
    "o": [
     "Du dioxyde de carbone ou du méthane",
     "De l'azote et de l'hydrogène",
     "De l'oxygène pur"
    ],
    "r": 0,
    "e": "Le gaz dépend de la présence d'oxygène dans le milieu."
   },
   {
    "q": "Comment se forme le thermokarst ?",
    "o": [
     "La glace fond et laisse des vides que le sol ne comble pas",
     "Le sol se soulève sous la poussée du gel",
     "L'eau de fonte creuse des tunnels profonds"
    ],
    "r": 0,
    "e": "Les affaissements créent des dépressions et de petits lacs."
   },
   {
    "q": "Sur quoi reposent certains immeubles de Iakoutsk ?",
    "o": [
     "Sur des pieux plantés dans le sol gelé",
     "Sur des dalles flottantes posées en surface",
     "Sur des pilotis métalliques isolés de l'air"
    ],
    "r": 0,
    "e": "Les pieux évitent que la chaleur des bâtiments ne dégèle les fondations."
   },
   {
    "q": "Pourquoi les pieux perdent-ils leur efficacité ?",
    "o": [
     "Parce que le pergélisol se réchauffe",
     "Parce que le bois pourrit plus vite qu'avant",
     "Parce que les bâtiments sont plus lourds"
    ],
    "r": 0,
    "e": "Le réchauffement du sol réduit leur appui."
   },
   {
    "q": "Quels désordres les villes du nord connaissent-elles ?",
    "o": [
     "Fissures, routes déformées et conduites éclatées",
     "Inondations marines et incendies de forêt",
     "Tremblements de terre et glissements de boue"
    ],
    "r": 0,
    "e": "Le texte énumère ces dégâts."
   },
   {
    "q": "Pourquoi le littoral arctique recule-t-il ?",
    "o": [
     "Parce que les falaises de terre gelée s'effondrent dans la mer",
     "Parce que la mer monte de plusieurs mètres par an",
     "Parce que les vagues charrient du sable vers le large"
    ],
    "r": 0,
    "e": "La disparition de la glace déstabilise les falaises."
   },
   {
    "q": "Quels moyens de surveillance le texte cite-t-il ?",
    "o": [
     "Forages, satellites et capteurs de température",
     "Radars marins et ballons sondes",
     "Carottages de glace uniquement"
    ],
    "r": 0,
    "e": "Ces trois moyens sont mentionnés en conclusion."
   },
   {
    "q": "Pourquoi le dégel du pergélisol est-il un phénomène cumulatif ?",
    "o": [
     "Parce que le carbone libéré accentue le réchauffement qui le provoque",
     "Parce que chaque été est plus long que le précédent",
     "Parce que les villes produisent elles-mêmes la chaleur"
    ],
    "r": 0,
    "e": "Le texte décrit un enchaînement où le dégel alimente le réchauffement."
   },
   {
    "q": "Que peut-on déduire du fait que le pergélisol soit qualifié d'héritage ?",
    "o": [
     "Qu'il résulte de conditions climatiques anciennes",
     "Qu'il appartient juridiquement aux États du Nord",
     "Qu'il a été façonné par les populations locales"
    ],
    "r": 0,
    "e": "Il s'est constitué lors des périodes froides."
   },
   {
    "q": "Pourquoi les scientifiques s'intéressent-ils aussi aux habitants ?",
    "o": [
     "Parce que le dégel modifie directement leur cadre de vie",
     "Parce qu'ils mesurent eux-mêmes les températures",
     "Parce qu'ils exploitent le méthane libéré"
    ],
    "r": 0,
    "e": "La conclusion lie climat mondial et vie quotidienne."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La nature du pergélisol et les effets de son dégel",
     "L'histoire de la ville de Iakoutsk",
     "Les techniques de construction en bois"
    ],
    "r": 0,
    "e": "Le texte décrit le sol, son carbone et les conséquences de sa fonte."
   },
   {
    "q": "Pourquoi l'auteur précise-t-il que la glace peut dépasser le volume des grains de roche ?",
    "o": [
     "Pour faire comprendre que le sol est surtout fait de glace",
     "Pour expliquer la couleur sombre du terrain",
     "Pour justifier l'absence de végétation"
    ],
    "r": 0,
    "e": "Cette précision explique la fragilité du terrain au dégel."
   },
   {
    "q": "Qu'appelle-t-on un talik ?",
    "o": [
     "Une lentille de terrain non gelé dans le pergélisol",
     "Un lac formé par la fonte de la glace",
     "Une fissure verticale remplie d'eau"
    ],
    "r": 0,
    "e": "Ces zones restent dégelées sous des lacs ou des rivières profondes."
   },
   {
    "q": "Comment se forment les polygones visibles du ciel ?",
    "o": [
     "Des fissures de gel se remplissent d'eau et forment des coins de glace",
     "Le vent dépose le sable en ronds réguliers",
     "Les troupeaux tassent la terre en cercles"
    ],
    "r": 0,
    "e": "La contraction thermique ouvre des fentes qui s'élargissent en gelant."
   },
   {
    "q": "Qu'est-ce que le yedoma ?",
    "o": [
     "Un dépôt de limon et de débris riche en carbone",
     "Une roche volcanique du Grand Nord",
     "Un type de glace très transparente"
    ],
    "r": 0,
    "e": "Ce dépôt accumulé pendant les périodes glaciaires est très sensible au dégel."
   },
   {
    "q": "Comment les satellites détectent-ils les changements du sol ?",
    "o": [
     "Par interférométrie, en mesurant les affaissements",
     "En photographiant les forages",
     "En mesurant la salinité des lacs"
    ],
    "r": 0,
    "e": "Le texte mentionne aussi le repérage des nouveaux lacs et le recul du littoral."
   },
   {
    "q": "Pourquoi le bilan du carbone dépend-il du paysage local ?",
    "o": [
     "Parce qu'une tourbière en piège tandis qu'un lac en libère",
     "Parce que la neige réfléchit les gaz à effet de serre",
     "Parce que le vent emporte les débris vers le sud"
    ],
    "r": 0,
    "e": "Le texte oppose le piégeage en milieu humide à l'émission de méthane en eau libre."
   }
  ]
 },
 {
  "id": "d19",
  "theme": "géographie",
  "niveau": 5,
  "titre": "La mousson, cette saison qui décide des récoltes",
  "corps": "Dans le nord-est de l'Inde, un village détient un record peu enviable : il reçoit en moyenne plus de onze mètres de pluie par an, presque tous concentrés en quelques mois. Les toits y sont conçus pour résister à des trombes, les ponts sont faits de racines vivantes, et l'eau ruisselle vers les plaines du Bangladesh. Ce déluge n'a rien d'accidentel : il est la conséquence d'un mécanisme qui concerne la moitié de l'Asie.\n\nLa mousson est d'abord une affaire de saisons. En hiver, la masse continentale se refroidit plus vite que l'océan, et l'air sec descend du continent vers la mer. Au printemps, le soleil remonte, les terres se réchauffent plus vite que l'eau, et ce contraste inverse la circulation : l'air humide de l'océan Indien est aspiré vers l'intérieur. Il traverse l'équateur, se charge de vapeur, puis rencontre la barrière de l'Himalaya. Bloqué, il s'élève, se refroidit et se condense en pluies considérables.\n\nCe mécanisme explique la géographie des précipitations. Le versant sud de l'Himalaya, les Ghâts occidentaux et les collines du nord-est reçoivent des pluies abondantes parce que l'air y est forcé de monter. Les régions situées à l'abri, comme le Deccan central ou le Rajasthan, restent sèches malgré la proximité de la mer : c'est l'effet d'ombre pluviométrique, le même que l'on observe derrière les montagnes dans toutes les zones tempérées.\n\nLe calendrier est presque une institution. Les météorologues considèrent que la mousson commence au Kerala, dans le sud-ouest, autour du 1er juin, puis progresse vers Bombay, le centre du pays et enfin le nord, où elle arrive en juillet. Son retrait commence par le nord-ouest en septembre et s'achève au sud en octobre. Cette chronologie varie de quelques jours à quelques semaines, et son annonce est suivie par des centaines de millions d'agriculteurs.\n\nL'économie repose sur cette régularité. La saison humide apporte l'essentiel de l'eau des rivières, remplit les nappes et permet une récolte de riz, de coton, de canne et de légumineuses semée avec les premières pluies. Les barrages hydroélectriques ajustent leur production, les villes remplissent leurs réservoirs, et les administrations planifient les semis en fonction des prévisions. Un retard de dix jours peut compromettre une récolte dans une région où l'on ne dispose pas d'irrigation.\n\nLes années déficitaires ont marqué l'histoire. En 1877, une mousson très faible provoque une famine qui tue des centaines de milliers de personnes et pousse les autorités coloniales à organiser une observation systématique. Un service météorologique indien est créé en 1875, et ses statisticiens cherchent des corrélations avec des phénomènes lointains : pressions, températures océaniques, courants. Cette recherche conduit, dans les années 1920, à identifier une oscillation de la pression atmosphérique à l'échelle du globe, liée aujourd'hui à ce que l'on appelle El Niño.\n\nLa prévision a longtemps été statistique. On comparait les configurations de l'année en cours à celles du passé pour estimer si la saison serait normale, excédentaire ou déficitaire. Ces méthodes donnaient des indications utiles mais approximatives. Depuis les années 1990, les modèles numériques simulent l'atmosphère et l'océan, et les prévisions saisonnières s'appuient sur des calculs de grande échelle, corrigés par l'observation.\n\nLes limites subsistent. La mousson comporte des pauses, des phases actives et des dépressions qui se forment dans le golfe du Bengale et remontent vers le nord. Ces systèmes, qui durent quelques jours, produisent l'essentiel des pluies intenses, et leur prévision fine reste difficile. Les crues qui en résultent touchent des plaines densément peuplées, où les fleuves débordent presque chaque année.\n\nToutes les régions n'attendent pas la même saison. Le Tamil Nadu, au sud-est, reçoit l'essentiel de son eau d'une seconde mousson, plus tardive, qui vient du nord-est entre octobre et décembre. Les cultivateurs y sèment donc à contre-saison par rapport au reste du pays, ce qui explique des calendriers agricoles différents sur un même territoire.\n\nLe mécanisme a une autre pièce, souvent oubliée : le courant qui traverse l'équateur. Pendant l'été boréal, un flux puissant venant du sud-est franchit la mer d'Arabie et longe la côte somalienne. Cet air, chargé d'humidité marine, alimente une branche de la mousson qui remonte vers le Gujarat et le Pakistan, tandis qu'une seconde branche, alimentée par le golfe du Bengale, arrose l'est et le centre du pays. Les deux bras se rejoignent au-dessus des plaines du Gange, et leur position relative décide de la répartition des pluies.\n\nLes villes y sont particulièrement exposées. En juillet 2005, Bombay a reçu près d'un mètre de pluie en une seule journée, submergeant les voies ferrées, les égouts et les quartiers bas. L'eau ne pouvait plus s'écouler, car les surfaces construites et les canaux encombrés ralentissaient son évacuation. L'épisode a conduit à repenser les réseaux de drainage et à cartographier les zones inondables.\n\nLa mousson a aussi façonné les routes maritimes. Les navigateurs de l'océan Indien ont appris très tôt à profiter des vents alternés : ils traversaient la mer d'Arabie d'est en ouest avec la mousson d'été, puis revenaient avec celle d'hiver. Ce rythme a fait la fortune des ports du Malabar et des comptoirs qui s'y sont installés, bien avant l'arrivée des navires européens.\n\nCette régularité a aussi une traduction culturelle. Les fêtes de la saison humide, les chansons de semis et les récits de la première pluie rythment la vie sociale de régions entières, et le vocabulaire distingue plusieurs sortes d'averses selon leur intensité et leur durée. La mousson n'est donc pas seulement un objet météorologique : c'est un cadre collectif, attendu, commenté, et parfois redouté.\n\nPrévoir la mousson suppose de distinguer plusieurs échelles : la saison, le mois, la semaine et la journée. Chacune répond à des questions différentes, et confondre ces échelles conduit à des malentendus, car une saison normale peut contenir des semaines catastrophiques.\n\nLes scientifiques observent enfin des évolutions. Les pluies totales de la saison semblent varier peu, mais leur répartition change : des épisodes plus intenses, séparés par des pauses plus longues. Pour les sols, cette alternance est plus difficile à absorber qu'une pluie régulière. Les agriculteurs adaptent leurs variétés, les villes révisent leurs réseaux, et les météorologues travaillent sur des prévisions à l'échelle du district, car c'est à cette échelle que se prennent les décisions.",
  "q": [
   {
    "q": "Combien de pluie le village du nord-est de l'Inde reçoit-il en moyenne ?",
    "o": [
     "Plus de onze mètres par an",
     "Plus de onze centimètres par an",
     "Plus de cent mètres par an"
    ],
    "r": 0,
    "e": "Le texte parle de plus de onze mètres, concentrés sur quelques mois."
   },
   {
    "q": "Sur quel contraste repose l'inversion de circulation ?",
    "o": [
     "Sur le réchauffement plus rapide des terres que de l'océan",
     "Sur la fonte des neiges himalayennes",
     "Sur la rotation de la Terre seule"
    ],
    "r": 0,
    "e": "Ce contraste saisonnier inverse le sens des vents."
   },
   {
    "q": "Que provoque la rencontre de l'air humide avec l'Himalaya ?",
    "o": [
     "Son élévation, son refroidissement et la condensation",
     "Son blocage complet et son retour vers la mer",
     "Son réchauffement et son assèchement"
    ],
    "r": 0,
    "e": "L'air forcé de monter se refroidit et libère sa vapeur."
   },
   {
    "q": "Quel nom porte le phénomène qui assèche le Deccan central ?",
    "o": [
     "L'ombre pluviométrique",
     "L'effet de foehn côtier",
     "La subsidence équatoriale"
    ],
    "r": 0,
    "e": "Le relief abrite ces régions des vents chargés d'humidité."
   },
   {
    "q": "Où la mousson commence-t-elle, selon le texte ?",
    "o": [
     "Au Kerala, autour du 1er juin",
     "Au Bengale, vers la mi-avril",
     "Au Rajasthan, fin mai"
    ],
    "r": 0,
    "e": "Le texte situe le début au Kerala, aux environs du 1er juin."
   },
   {
    "q": "Quand la mousson arrive-t-elle dans le nord du pays ?",
    "o": [
     "En juillet",
     "En avril",
     "En septembre"
    ],
    "r": 0,
    "e": "Sa progression atteint le nord en juillet."
   },
   {
    "q": "Par où le retrait commence-t-il ?",
    "o": [
     "Par le nord-ouest, en septembre",
     "Par le sud, en août",
     "Par le Bengale, en novembre"
    ],
    "r": 0,
    "e": "Le retrait s'achève au sud en octobre."
   },
   {
    "q": "Quelles cultures le texte associe-t-il aux premières pluies ?",
    "o": [
     "Riz, coton, canne et légumineuses",
     "Blé, orge et betterave",
     "Olivier, vigne et agrumes"
    ],
    "r": 0,
    "e": "Ces cultures sont semées avec l'arrivée de la saison humide."
   },
   {
    "q": "En quelle année le service météorologique indien est-il créé ?",
    "o": [
     "En 1875",
     "En 1857",
     "En 1920"
    ],
    "r": 0,
    "e": "Le texte donne 1875, après la famine de 1877."
   },
   {
    "q": "Que provoque la mousson faible de 1877 ?",
    "o": [
     "Une famine qui tue des centaines de milliers de personnes",
     "Une crue exceptionnelle du Gange",
     "L'abandon des cultures de riz"
    ],
    "r": 0,
    "e": "Cet épisode pousse à organiser une observation systématique."
   },
   {
    "q": "Quand l'oscillation de pression globale est-elle identifiée ?",
    "o": [
     "Dans les années 1920",
     "Dans les années 1870",
     "Dans les années 1990"
    ],
    "r": 0,
    "e": "Le texte la relie à ce que l'on nomme aujourd'hui El Niño."
   },
   {
    "q": "Sur quoi reposaient les anciennes prévisions saisonnières ?",
    "o": [
     "Sur la comparaison avec les configurations passées",
     "Sur des modèles numériques de l'océan",
     "Sur les mesures des satellites"
    ],
    "r": 0,
    "e": "Ces méthodes statistiques donnaient des indications approximatives."
   },
   {
    "q": "Que se passe-t-il dans le golfe du Bengale pendant la mousson ?",
    "o": [
     "Des dépressions se forment et remontent vers le nord",
     "La mer se refroidit brutalement",
     "Les vents cessent pendant plusieurs semaines"
    ],
    "r": 0,
    "e": "Ces systèmes produisent l'essentiel des pluies intenses."
   },
   {
    "q": "Quelle région reçoit une seconde mousson tardive ?",
    "o": [
     "Le Tamil Nadu",
     "Le Kerala",
     "Le Rajasthan"
    ],
    "r": 0,
    "e": "Cette mousson du nord-est agit entre octobre et décembre."
   },
   {
    "q": "Quelle évolution les scientifiques observent-ils ?",
    "o": [
     "Des épisodes plus intenses séparés par des pauses plus longues",
     "Une hausse continue du total annuel",
     "Une disparition progressive des pluies de juin"
    ],
    "r": 0,
    "e": "La répartition change davantage que le total."
   },
   {
    "q": "Pourquoi l'alternance pluie-pause est-elle problématique pour les sols ?",
    "o": [
     "Parce qu'ils absorbent mal une eau arrivée trop vite",
     "Parce qu'ils se salinisent au contact de l'air sec",
     "Parce qu'ils se tassent sous les averses répétées"
    ],
    "r": 0,
    "e": "Le texte souligne la difficulté d'absorber des pluies irrégulières."
   },
   {
    "q": "Pourquoi un retard de dix jours peut-il compromettre une récolte ?",
    "o": [
     "Parce que certaines régions dépendent entièrement des pluies",
     "Parce que les semences perdent leur pouvoir germinatif",
     "Parce que les marchés fixent une date limite"
    ],
    "r": 0,
    "e": "Sans irrigation, le calendrier des semis est rigide."
   },
   {
    "q": "Pourquoi les prévisions à l'échelle du district sont-elles recherchées ?",
    "o": [
     "Parce que c'est à cette échelle que se prennent les décisions",
     "Parce que les modèles globaux sont interdits",
     "Parce que les districts financent la recherche"
    ],
    "r": 0,
    "e": "Le dernier paragraphe relie l'échelle fine aux choix des agriculteurs."
   },
   {
    "q": "Que peut-on déduire du rôle des barrages hydroélectriques ?",
    "o": [
     "Que la production d'électricité dépend du calendrier des pluies",
     "Qu'ils remplacent les réservoirs urbains",
     "Qu'ils empêchent les crues de se produire"
    ],
    "r": 0,
    "e": "Le texte indique qu'ils ajustent leur production selon la saison."
   },
   {
    "q": "Pourquoi le record de pluie n'est-il pas un privilège ?",
    "o": [
     "Parce qu'il impose des contraintes fortes aux habitants",
     "Parce qu'il attire trop de touristes",
     "Parce qu'il épuise les nappes phréatiques"
    ],
    "r": 0,
    "e": "Le texte parle d'un record peu enviable et de toits renforcés."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Le mécanisme de la mousson et ses conséquences humaines",
     "L'histoire de la météorologie indienne",
     "Les techniques d'irrigation en Asie du Sud"
    ],
    "r": 0,
    "e": "Le texte décrit le phénomène puis ses effets agricoles et sociaux."
   },
   {
    "q": "Pourquoi l'auteur commence-t-il par un village et ses onze mètres de pluie ?",
    "o": [
     "Pour donner une échelle concrète à un phénomène continental",
     "Pour désigner le lieu le plus arrosé du monde",
     "Pour expliquer la construction des ponts de racines"
    ],
    "r": 0,
    "e": "L'exemple local introduit un mécanisme de grande échelle."
   },
   {
    "q": "Pourquoi l'auteur mentionne-t-il la famine de 1877 ?",
    "o": [
     "Pour montrer qu'un phénomène climatique peut avoir des effets politiques",
     "Pour dater la création des premiers barrages",
     "Pour critiquer les rendements agricoles de l'époque"
    ],
    "r": 0,
    "e": "La famine a déclenché l'organisation de l'observation météorologique."
   },
   {
    "q": "Quelle idée l'auteur défend-il sur les prévisions ?",
    "o": [
     "Qu'elles progressent sans supprimer l'incertitude locale",
     "Qu'elles sont devenues entièrement fiables",
     "Qu'elles reposent uniquement sur les satellites"
    ],
    "r": 0,
    "e": "Le texte reconnaît les limites de la prévision fine."
   },
   {
    "q": "Que déduit-on de l'existence de deux moussons en Inde ?",
    "o": [
     "Que le calendrier agricole varie selon la région",
     "Que le pays reçoit deux fois la même pluie",
     "Que la mousson d'été est la moins importante"
    ],
    "r": 0,
    "e": "Le Tamil Nadu sèmera donc à contre-saison."
   },
   {
    "q": "Quel courant alimente la branche de la mousson remontant vers le Gujarat ?",
    "o": [
     "Un flux franchissant l'équateur le long de la côte somalienne",
     "Un courant froid venu de l'Antarctique",
     "Un vent descendant de l'Himalaya"
    ],
    "r": 0,
    "e": "Le texte décrit ce flux chargé d'humidité marine."
   },
   {
    "q": "Combien de pluie Bombay a-t-elle reçue en juillet 2005 en une journée ?",
    "o": [
     "Près d'un mètre",
     "Près de dix centimètres",
     "Près de dix mètres"
    ],
    "r": 0,
    "e": "Cet épisode a submergé les voies ferrées et les quartiers bas."
   }
  ]
 },
 {
  "id": "d24",
  "theme": "géographie",
  "niveau": 5,
  "titre": "Le canal de Panama, une tranchée entre deux océans",
  "corps": "Un navire qui quitte l'Atlantique pour gagner le Pacifique n'a plus besoin de contourner l'Amérique du Sud. Il lui suffit de franchir une tranchée de quatre-vingts kilomètres, percée dans l'isthme de Panama, où des écluses le hissent de vingt-six mètres avant de le redescendre de l'autre côté. Le trajet dure moins d'une journée, contre plusieurs semaines par le cap Horn.\n\nL'idée est ancienne. Les Espagnols l'avaient envisagée dès le XVIe siècle, en cherchant un passage naturel ; les cartographes du XIXe siècle étudièrent plusieurs tracés, au Nicaragua comme à Panama. C'est finalement une compagnie française, dirigée par Ferdinand de Lesseps, le constructeur de Suez, qui entreprend les travaux en 1881. Le projet prévoit un canal à niveau, sans écluses, taillé dans la roche et les marécages.\n\nL'entreprise tourne au désastre. Les pluies équatoriales gonflent les rivières, les flancs de la tranchée s'effondrent à mesure qu'on les creuse, et les maladies tropicales déciment les équipes. La fièvre jaune et le paludisme, transmis par des moustiques, font périr des milliers d'ouvriers ; les statistiques de l'époque, imprécises, évoquent plus de vingt mille morts. La compagnie est ruinée en 1889, et le chantier abandonné pendant des années.\n\nLes États-Unis reprennent le projet en 1904, après avoir soutenu l'indépendance de Panama et signé un traité qui leur cède une zone du canal. Le médecin William Gorgas, fort des travaux de Walter Reed sur la transmission de la fièvre jaune, lance une campagne de drainage, de suppression des flaques et de protection des logements. La maladie recule, et le chantier peut reprendre à grande échelle.\n\nLe choix technique change alors. Renonçant au canal à niveau, les ingénieurs adoptent un système d'écluses alimentées par un lac artificiel. Un barrage sur le rio Chagres crée le lac Gatun, vaste étendue d'eau douce qui noie une partie de la vallée et permet aux navires de naviguer en altitude. Les écluses, au nombre de trois de chaque côté, fonctionnent par gravité : l'eau du lac descend dans les salles, soulève le bateau, puis s'écoule vers la mer. Aucune pompe n'est nécessaire pour monter.\n\nLa tranchée de Culebra, renommée Gaillard, reste le point critique. Les glissements de terrain y ont enseveli des machines entières ; il a fallu adoucir les pentes, drainer les sols et accepter un élargissement continu. Les écluses, larges de trente-trois mètres, imposent aux navires une taille maximale, dite Panamax, qui a longtemps défini la flotte mondiale.\n\nLe canal ouvre en août 1914, alors que la guerre commence en Europe. Son régime juridique évolue ensuite : en 1977, deux traités prévoient la rétrocession progressive de la zone au Panama, effective au 31 décembre 1999. Le pays exploite depuis l'ouvrage, et les recettes de péage constituent une part importante de son économie.\n\nL'élargissement devient nécessaire. En 2016, de nouvelles écluses, plus larges et plus profondes, accueillent des navires portant jusqu'à quatorze mille conteneurs. Pour économiser l'eau, les bassins de réutilisation la stockent après chaque passage, au lieu de la rejeter à la mer. Malgré cela, la consommation reste considérable : chaque transit utilise l'équivalent de plusieurs piscines olympiques.\n\nL'eau est désormais le facteur limitant. Le lac Gatun dépend des pluies, et les épisodes de sécheresse liés au phénomène El Niño font baisser son niveau. En 2023 et 2024, l'autorité du canal a réduit le nombre de transits quotidiens, ce qui a provoqué des files d'attente et des détournements de navires. Un projet de barrage supplémentaire est discuté, mais il soulève des questions sur les terres et les villages concernés.\n\nUn chemin de fer avait ouvert la voie. Construit au milieu du XIXe siècle pour relier les deux côtes, il servait déjà à transporter les voyageurs de la ruée vers l'or californien, avant de devenir l'outil logistique du chantier : les déblais de la tranchée y étaient évacués par trains entiers, et le matériel débarquait à Colon avant de gagner l'intérieur. Sans cette voie, la pose des écluses aurait été impossible.\n\nLes dimensions suffisent à résumer le gigantisme de l'extension. Les salles neuves mesurent quatre cent vingt-sept mètres de long, cinquante-cinq mètres de large et permettent un tirant d'eau de dix-huit mètres, contre douze pour les anciennes. Le seuil de Culebra a dû être élargi et approfondi, et le lac Gatun surélevé de quelques dizaines de centimètres, ce qui a noyé des terres supplémentaires et imposé le déplacement de villages.\n\nLa concurrence reste vive. Un projet de canal au Nicaragua, longtemps étudié puis abandonné, réapparaît régulièrement dans les débats ; le réchauffement de l'Arctique ouvre par ailleurs des routes maritimes saisonnières qui pourraient détourner une partie du trafic asiatique vers l'Europe. Le canal conserve néanmoins un avantage décisif : il fait gagner des semaines, et aucun détour ne le remplace pour les porte-conteneurs pressés.\n\nLe canal a aussi transformé le commerce maritime. Les lignes régulières entre l'Asie et la côte est des États-Unis ont pu être réorganisées, et des ports comme Houston ou Savannah ont gagné un accès direct aux marchés asiatiques. Les armateurs calculent aujourd'hui chaque trajet en fonction des péages, du prix du carburant et des délais, et un canal moins disponible déplace immédiatement les routes.\n\nLa maintenance de l'ouvrage mobilise en permanence des plongeurs, des géologues et des mécaniciens. Les portes d'acier, hautes de plusieurs étages, pèsent des centaines de tonnes et doivent coulisser sans jeu ; les bétons sont auscultés, les vannes révisées, et les berges du lac surveillées par des capteurs. Un canal s'entretient comme une ville, et son interruption, même brève, se répercute sur des milliers de conteneurs.\n\nRien de tout cela n'apparaît sur les photographies aériennes, où l'ouvrage ressemble à un simple trait d'eau entre deux mers. C'est pourtant là que se joue, chaque jour, la régularité d'un commerce qui traverse l'isthme depuis plus d'un siècle.\n\nL'ouvrage reste un cas d'école. Il montre qu'un chantier peut échouer pour des raisons sanitaires avant d'échouer pour des raisons techniques, que la maladie a compté autant que la roche, et qu'un canal ne se réduit jamais à une tranchée : c'est un système hydraulique, dépendant d'un bassin versant, d'un climat et d'une population. Les navires passent, l'eau décide.",
  "q": [
   {
    "q": "Quelle est la longueur du canal de Panama ?",
    "o": [
     "Environ quatre-vingts kilomètres",
     "Environ vingt kilomètres",
     "Environ deux cents kilomètres"
    ],
    "r": 0,
    "e": "Le texte parle d'une tranchée de quatre-vingts kilomètres."
   },
   {
    "q": "De combien les écluses hissent-elles les navires ?",
    "o": [
     "De vingt-six mètres",
     "De deux cent soixante mètres",
     "De six mètres"
    ],
    "r": 0,
    "e": "Le texte donne vingt-six mètres."
   },
   {
    "q": "Qui dirige l'entreprise française de 1881 ?",
    "o": [
     "Ferdinand de Lesseps",
     "Gustave Eiffel",
     "William Gorgas"
    ],
    "r": 0,
    "e": "Lesseps, constructeur de Suez, dirige les travaux."
   },
   {
    "q": "Quel type de canal le projet français prévoyait-il ?",
    "o": [
     "Un canal à niveau, sans écluses",
     "Un canal à trois écluses",
     "Un canal souterrain"
    ],
    "r": 0,
    "e": "Le texte parle d'une tranchée taillée dans la roche et les marécages."
   },
   {
    "q": "En quelle année la compagnie française est-elle ruinée ?",
    "o": [
     "En 1889",
     "En 1881",
     "En 1904"
    ],
    "r": 0,
    "e": "Le texte date la faillite de 1889."
   },
   {
    "q": "Combien de morts les statistiques de l'époque évoquent-elles ?",
    "o": [
     "Plus de vingt mille",
     "Plus de deux mille",
     "Plus de deux cent mille"
    ],
    "r": 0,
    "e": "Le texte précise que ces chiffres sont imprécis."
   },
   {
    "q": "Quelles maladies ont décimé les équipes ?",
    "o": [
     "La fièvre jaune et le paludisme",
     "Le choléra et la tuberculose",
     "La rougeole et la grippe"
    ],
    "r": 0,
    "e": "Ces deux maladies transmises par des moustiques sont citées."
   },
   {
    "q": "Quel médecin lance la campagne sanitaire de 1904 ?",
    "o": [
     "William Gorgas",
     "Walter Reed",
     "Ferdinand de Lesseps"
    ],
    "r": 0,
    "e": "Gorgas s'appuie sur les travaux de Reed sur la fièvre jaune."
   },
   {
    "q": "Quel lac artificiel alimente les écluses ?",
    "o": [
     "Le lac Gatun",
     "Le lac Titicaca",
     "Le lac Nicaragua"
    ],
    "r": 0,
    "e": "Un barrage sur le rio Chagres crée ce lac."
   },
   {
    "q": "Comment fonctionnent les écluses ?",
    "o": [
     "Par gravité, grâce à l'eau du lac",
     "Par des pompes électriques",
     "Par des treuils à câbles"
    ],
    "r": 0,
    "e": "L'eau descend dans les salles et soulève le navire sans pompage."
   },
   {
    "q": "Quelle largeur les écluses imposent-elles aux navires ?",
    "o": [
     "Trente-trois mètres",
     "Cinquante-cinq mètres",
     "Quinze mètres"
    ],
    "r": 0,
    "e": "Cette largeur définit le format Panamax."
   },
   {
    "q": "Quand le canal ouvre-t-il ?",
    "o": [
     "En août 1914",
     "En août 1904",
     "En août 1899"
    ],
    "r": 0,
    "e": "Le texte donne août 1914."
   },
   {
    "q": "Quand le Panama reprend-il la zone du canal ?",
    "o": [
     "Le 31 décembre 1999",
     "Le 31 décembre 1977",
     "Le 1er janvier 2016"
    ],
    "r": 0,
    "e": "Les traités de 1977 prévoyaient cette rétrocession."
   },
   {
    "q": "Quelle capacité les nouvelles écluses de 2016 acceptent-elles ?",
    "o": [
     "Jusqu'à quatorze mille conteneurs",
     "Jusqu'à deux mille conteneurs",
     "Jusqu'à cent mille conteneurs"
    ],
    "r": 0,
    "e": "Le texte donne ce chiffre pour les navires néo-Panamax."
   },
   {
    "q": "Comment économise-t-on l'eau depuis 2016 ?",
    "o": [
     "En réutilisant l'eau dans des bassins",
     "En fermant le canal la nuit",
     "En pompant l'eau de mer"
    ],
    "r": 0,
    "e": "Les bassins stockent l'eau au lieu de la rejeter à la mer."
   },
   {
    "q": "Quel phénomène climatique fait baisser le niveau du lac ?",
    "o": [
     "El Niño",
     "La mousson",
     "Le Gulf Stream"
    ],
    "r": 0,
    "e": "Les sécheresses liées à El Niño réduisent les transits."
   },
   {
    "q": "Pourquoi le chantier français a-t-il échoué sur le plan technique ?",
    "o": [
     "Parce que les flancs de la tranchée s'effondraient",
     "Parce que la roche était trop dure pour les outils",
     "Parce que le niveau de la mer variait trop"
    ],
    "r": 0,
    "e": "Les pluies gonflaient les rivières et déstabilisaient les pentes."
   },
   {
    "q": "Pourquoi le choix des écluses a-t-il simplifié le projet ?",
    "o": [
     "Parce qu'il évitait de creuser jusqu'au niveau de la mer sur tout le tracé",
     "Parce qu'il supprimait le besoin de main-d'œuvre",
     "Parce qu'il rendait le canal navigable la nuit"
    ],
    "r": 0,
    "e": "Le lac permet de naviguer en altitude, sans tranchée continue."
   },
   {
    "q": "Pourquoi la tranchée de Culebra reste-t-elle un point critique ?",
    "o": [
     "Parce que les glissements de terrain y ont enseveli des machines",
     "Parce que les navires y croisent à sens unique",
     "Parce que l'eau douce y manque"
    ],
    "r": 0,
    "e": "Il a fallu adoucir les pentes et drainer les sols."
   },
   {
    "q": "Pourquoi le canal dépend-il d'un bassin versant ?",
    "o": [
     "Parce que son fonctionnement repose sur l'eau douce stockée",
     "Parce que les navires y chargent de l'eau potable",
     "Parce que les écluses utilisent l'eau des rivières salées"
    ],
    "r": 0,
    "e": "Le texte conclut que le canal est un système hydraulique."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "L'histoire et le fonctionnement du canal de Panama",
     "La géographie de l'Amérique centrale",
     "Les maladies tropicales au XIXe siècle"
    ],
    "r": 0,
    "e": "Le texte suit le chantier, la technique et les contraintes actuelles."
   },
   {
    "q": "Pourquoi l'auteur insiste-t-il sur les maladies ?",
    "o": [
     "Pour montrer qu'un chantier peut échouer pour des raisons sanitaires",
     "Pour expliquer l'origine de la médecine tropicale",
     "Pour décrire les conditions de vie des ouvriers"
    ],
    "r": 0,
    "e": "La mortalité a interrompu le projet français autant que la géologie."
   },
   {
    "q": "Pourquoi le canal a-t-il défini une taille maximale de navires ?",
    "o": [
     "Parce que les écluses imposent une largeur et un tirant d'eau",
     "Parce que les assureurs l'ont exigé",
     "Parce que les ports d'attache sont trop petits"
    ],
    "r": 0,
    "e": "Le format Panamax découle des dimensions des salles."
   },
   {
    "q": "Que signifie la dernière phrase du texte ?",
    "o": [
     "Que la disponibilité de l'eau commande l'exploitation du canal",
     "Que les navires décident de la politique du pays",
     "Que l'océan finira par envahir les écluses"
    ],
    "r": 0,
    "e": "Le climat et le bassin versant déterminent le nombre de transits."
   },
   {
    "q": "Pourquoi un nouveau barrage est-il discuté ?",
    "o": [
     "Parce qu'il faut sécuriser la ressource en eau mais qu'il touche des terres habitées",
     "Parce que les écluses actuelles fuient",
     "Parce que le lac Gatun s'envase trop vite"
    ],
    "r": 0,
    "e": "Le texte mentionne les questions foncières que le projet soulève."
   },
   {
    "q": "Que déduit-on du fait que le canal n'utilise pas de pompes pour monter ?",
    "o": [
     "Que la dénivellation naturelle du lac suffit au fonctionnement",
     "Que les navires montent par leurs propres moyens",
     "Que l'eau de mer est pompée en aval"
    ],
    "r": 0,
    "e": "La gravité suffit grâce au lac situé en altitude."
   }
  ]
 },
 {
  "id": "d13",
  "theme": "nature",
  "niveau": 5,
  "titre": "Le cri que personne n'entend",
  "corps": "Au crépuscule, une chauve-souris quitte son gîte et se met à crier. Nous n'entendons rien, car l'animal émet des ultrasons, dont la fréquence dépasse largement les limites de l'oreille humaine. Pourtant, à chaque cri, un écho revient : l'animal écoute sa propre voix revenir, et c'est ce retour qui lui indique où se trouve l'insecte qu'il poursuit.\n\nLes chauves-souris forment un groupe considérable, avec plus de mille quatre cents espèces décrites, ce qui les place juste derrière les rongeurs. Presque toutes volent de nuit, et la plupart se repèrent par écholocation. Le son est produit par le larynx, puis émis par la bouche ou par le nez selon les familles, et reçu par des oreilles souvent très grandes, capables de capter des échos extrêmement faibles.\n\nLa finesse du système tient à des détails physiologiques. Une chauve-souris qui approche d'un mur modifie la fréquence de son cri pour compenser l'effet de son propre vol, un peu comme si elle accordait son instrument en permanence. Certaines espèces produisent jusqu'à deux cents cris par seconde pendant la phase finale de la chasse, ce qui exige un traitement de l'information très rapide dans un cerveau de quelques grammes.\n\nLe bénéfice est mesurable. Un individu peut consommer plusieurs centaines d'insectes au cours d'une nuit, parfois l'équivalent de la moitié de son poids. Les colonies qui s'installent près d'une zone cultivée y réduisent donc la population de ravageurs, service que les agriculteurs commencent à intégrer dans leurs calculs.\n\nToutes les espèces ne chassent pas en vol. Certaines capturent leurs proies sur les feuilles, d'autres pêchent à la surface de l'eau, et quelques-unes se nourrissent de nectar, assurant la pollinisation de plantes tropicales comme certains agaves. Les chauves-souris frugivores dispersent en outre des graines sur des distances qui dépassent celles de nombreux oiseaux.\n\nL'hiver pose un autre problème. Faute d'insectes, beaucoup d'espèces entrent en torpeur : leur température corporelle descend près de celle de la cavité, leur cœur ralentit à quelques battements par minute, et elles vivent sur leurs réserves. Un dérangement en pleine hibernation les réveille et consume l'énergie prévue pour des semaines.\n\nLes chauves-souris appartiennent à un ordre à part, les chiroptères, dont l'aile est une main transformée : les doigts sont allongés, reliés par une membrane souple, et le pouce reste libre, muni d'un ongle qui sert à s'accrocher. Cette architecture explique leur vol lent et manœuvrant, capable de tourner dans un couloir de quelques mètres ou de se poser tête en bas sur une paroi lisse.\n\nLa diversité des cris reflète celle des milieux. Certaines espèces émettent un son de fréquence presque constante, ce qui les rend sensibles au moindre décalage provoqué par le mouvement de leur proie ; d'autres balaient rapidement une large bande de fréquences, ce qui donne une image plus précise de la forme d'un objet. Les oreilles s'adaptent à ces stratégies : elles peuvent être vastes, plissées, ou surmontées de replis qui concentrent le retour. Chez plusieurs espèces, un appendice en forme de feuille autour du nez oriente l'émission.\n\nLa relation avec les proies n'est pas à sens unique. Beaucoup de papillons de nuit perçoivent les ultrasons et changent de trajectoire, ferment leurs ailes ou se laissent tomber. Certains produisent eux-mêmes des clics qui brouillent l'écho. En réponse, des chauves-souris chassent en embuscade, depuis un perchoir, ou volent assez près de la végétation pour que le feuillage masque leur approche. Ce dialogue, noué sur des millions d'années, explique en partie la finesse des organes sensoriels des deux camps.\n\nLe régime alimentaire varie davantage qu'on ne l'imagine. La majorité des espèces capture des insectes, mais certaines consomment des fruits, du nectar, des grenouilles, des poissons, et trois espèces d'Amérique latine se nourrissent de sang. Ces vampires possèdent des incisives tranchantes, une salive qui empêche la coagulation et des capacités thermiques particulières ; ils s'attaquent au bétail et, très rarement, à l'homme, sans transmettre eux-mêmes la rage qu'ils peuvent porter.\n\nLa reproduction est lente, ce qui rend les populations fragiles. La plupart des espèces n'ont qu'un petit par an, parfois deux, après une gestation de quelques semaines. Les femelles se rassemblent en colonies de mise-bas, où la chaleur du groupe protège les nouveau-nés, tandis que les mâles occupent d'autres gîtes. Un dérangement à cette période fait perdre une année entière de reproduction, et non quelques jours.\n\nLe décompte des victimes du syndrome du museau blanc donne la mesure du problème. La maladie, repérée dans l'État de New York vers 2006, est causée par un champignon venu d'Europe, où il vit sans gravité sur les mêmes espèces. En Amérique du Nord, privées d'adaptation, les colonies s'effondrent : le champignon irrite la peau pendant l'hibernation, réveille les animaux, et les réserves s'épuisent avant la fin de l'hiver.\n\nLes outils d'étude ont eux aussi progressé. Un détecteur d'ultrasons, branché sur un enregistreur, transforme les cris en sons audibles et permet d'identifier une espèce à partir de son spectrogramme : la fréquence, la durée et la forme du balayage diffèrent d'une espèce à l'autre. Des logiciels comparent ces signatures à des bibliothèques de référence, ce qui permet de suivre la fréquentation d'un site sans capturer un seul animal.\n\nCette diversité de formes explique en partie la difficulté à protéger le groupe : un gîte favorable à une espèce arboricole n'a rien à voir avec une cave humide recherchée par une autre, et les mesures prises pour l'une peuvent nuire à la seconde.\n\nCe fragile équilibre est aujourd'hui menacé. Un champignon apparu dans des grottes d'Amérique du Nord attaque la peau des animaux pendant leur sommeil et a fait périr des millions d'individus. La perte des gîtes, l'éclairage des villages et les pesticides ajoutent leurs effets, alors que l'utilité de ces prédateurs nocturnes est difficile à remplacer.\n\nLes solutions existent, mais restent partielles. La fermeture des grottes aux visiteurs limite la propagation ; des traitements fongiques sont testés ; des abris artificiels remplacent parfois les gîtes détruits. À Austin, au Texas, une colonie installée sous un pont est devenue une attraction suivie par des milliers de curieux, preuve que la cohabitation est possible quand les lieux sont connus et respectés. Le guano, longtemps exploité comme engrais, rappelle enfin que ces animaux ont marqué l'économie de certaines régions avant d'être protégés.",
  "q": [
   {
    "q": "Pourquoi n'entend-on pas le cri des chauves-souris ?",
    "o": [
     "Parce qu'il s'agit d'ultrasons hors de portée de l'oreille humaine",
     "Parce qu'elles crient dans un gaz inaudible",
     "Parce que leur bouche reste fermée en vol"
    ],
    "r": 0,
    "e": "Le texte indique que la fréquence dépasse les limites de l'audition humaine."
   },
   {
    "q": "Combien d'espèces de chauves-souris le texte mentionne-t-il ?",
    "o": [
     "Plus de mille quatre cents",
     "Environ deux cents",
     "Plus de dix mille"
    ],
    "r": 0,
    "e": "Le texte donne plus de mille quatre cents espèces décrites."
   },
   {
    "q": "Quel ordre de mammifères les dépasse en nombre d'espèces ?",
    "o": [
     "Les rongeurs",
     "Les carnivores",
     "Les primates"
    ],
    "r": 0,
    "e": "Le texte les place juste derrière les rongeurs."
   },
   {
    "q": "Quel organe produit le son ?",
    "o": [
     "Le larynx",
     "Les ailes",
     "La langue"
    ],
    "r": 0,
    "e": "Le cri est produit par le larynx."
   },
   {
    "q": "Par où le son peut-il être émis selon les familles ?",
    "o": [
     "Par la bouche ou par le nez",
     "Par les oreilles",
     "Par les glandes de la face"
    ],
    "r": 0,
    "e": "Le texte mentionne ces deux voies d'émission."
   },
   {
    "q": "Que fait une chauve-souris qui approche d'un mur ?",
    "o": [
     "Elle modifie la fréquence de son cri pour compenser son vol",
     "Elle cesse d'émettre et écoute seulement",
     "Elle augmente la puissance de son cri au maximum"
    ],
    "r": 0,
    "e": "Cette compensation rappelle un instrument que l'on accorde."
   },
   {
    "q": "Combien de cris par seconde certaines espèces produisent-elles en fin de chasse ?",
    "o": [
     "Jusqu'à deux cents",
     "Jusqu'à vingt",
     "Jusqu'à deux mille"
    ],
    "r": 0,
    "e": "Le texte cite jusqu'à deux cents cris par seconde."
   },
   {
    "q": "Quelle quantité d'insectes un individu peut-il consommer en une nuit ?",
    "o": [
     "Plusieurs centaines, parfois la moitié de son poids",
     "Une dizaine, rarement plus",
     "Plusieurs milliers, toujours son poids entier"
    ],
    "r": 0,
    "e": "Le texte donne cette estimation qualitative."
   },
   {
    "q": "Quel service les colonies rendent-elles aux cultures ?",
    "o": [
     "Elles réduisent les populations de ravageurs",
     "Elles pollinisent les céréales",
     "Elles aèrent le sol des champs"
    ],
    "r": 0,
    "e": "Leur consommation d'insectes limite les ravageurs."
   },
   {
    "q": "Quel type de proie certaines espèces capturent-elles sur les feuilles ?",
    "o": [
     "Des insectes posés sur le feuillage",
     "Des fruits tombés au sol",
     "De petits oiseaux endormis"
    ],
    "r": 0,
    "e": "Le texte distingue plusieurs techniques de chasse."
   },
   {
    "q": "Quelles plantes tropicales bénéficient de leur pollinisation ?",
    "o": [
     "Certains agaves",
     "Les bananiers",
     "Les caféiers"
    ],
    "r": 0,
    "e": "Les agaves sont cités comme exemple."
   },
   {
    "q": "Que font les chauves-souris frugivores ?",
    "o": [
     "Elles dispersent des graines sur de longues distances",
     "Elles creusent des terriers pour l'hiver",
     "Elles migrent uniquement vers le nord"
    ],
    "r": 0,
    "e": "Le texte souligne des distances supérieures à celles de nombreux oiseaux."
   },
   {
    "q": "Que se passe-t-il pendant la torpeur hivernale ?",
    "o": [
     "La température corporelle baisse et le cœur ralentit",
     "Le métabolisme s'accélère pour produire de la chaleur",
     "L'animal cesse de respirer complètement"
    ],
    "r": 0,
    "e": "Le texte décrit une température proche de celle de la cavité et quelques battements par minute."
   },
   {
    "q": "Pourquoi un réveil en pleine hibernation est-il dangereux ?",
    "o": [
     "Parce qu'il consume l'énergie prévue pour des semaines",
     "Parce qu'il provoque une mue immédiate",
     "Parce qu'il attire les prédateurs"
    ],
    "r": 0,
    "e": "Les réserves sont calculées pour toute la durée de la torpeur."
   },
   {
    "q": "Quel agent menace les colonies d'Amérique du Nord ?",
    "o": [
     "Un champignon qui attaque la peau",
     "Un virus transmis par les insectes",
     "Un acarien logé dans les ailes"
    ],
    "r": 0,
    "e": "Le texte décrit un champignon actif pendant le sommeil des animaux."
   },
   {
    "q": "Combien d'individus ce fléau a-t-il fait périr ?",
    "o": [
     "Des millions",
     "Quelques dizaines",
     "Plus d'un milliard"
    ],
    "r": 0,
    "e": "Le texte parle de millions d'individus."
   },
   {
    "q": "Pourquoi l'écholocation exige-t-elle un cerveau rapide ?",
    "o": [
     "Parce qu'une espèce peut produire jusqu'à deux cents cris par seconde",
     "Parce que les échos reviennent presque instantanément",
     "Parce que les ultrasons sont inaudibles pour l'homme"
    ],
    "r": 0,
    "e": "Le texte relie la rapidité du traitement au nombre de cris par seconde, jusqu'à deux cents pendant la phase finale de la chasse."
   },
   {
    "q": "Pourquoi la disparition des chauves-souris serait-elle coûteuse ?",
    "o": [
     "Parce que leur rôle de prédateur nocturne est difficile à remplacer",
     "Parce qu'elles produisent un engrais très recherché",
     "Parce qu'elles régulent le niveau des nappes"
    ],
    "r": 0,
    "e": "La conclusion souligne l'utilité de ces prédateurs."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Le vol, la chasse et la fragilité des chauves-souris",
     "La classification des mammifères volants",
     "Les maladies des animaux cavernicoles"
    ],
    "r": 0,
    "e": "Le texte décrit l'écholocation, le régime et les menaces."
   },
   {
    "q": "Pourquoi l'auteur commence-t-il par une scène de crépuscule ?",
    "o": [
     "Pour faire percevoir un phénomène invisible à l'oreille humaine",
     "Pour dater précisément l'observation",
     "Pour décrire un paysage de campagne"
    ],
    "r": 0,
    "e": "La scène rend sensible ce que l'on ne peut ni voir ni entendre."
   },
   {
    "q": "Qu'est-ce qui distingue l'aile d'une chauve-souris ?",
    "o": [
     "C'est une main dont les doigts sont reliés par une membrane",
     "C'est un plumage modifié en surface portante",
     "C'est une nageoire adaptée au vol"
    ],
    "r": 0,
    "e": "Les doigts allongés soutiennent la membrane, le pouce restant libre."
   },
   {
    "q": "À quoi sert le pouce libre muni d'un ongle ?",
    "o": [
     "À s'accrocher aux parois",
     "À diriger le vol",
     "À produire les ultrasons"
    ],
    "r": 0,
    "e": "Le texte le décrit comme un crochet pour se fixer."
   },
   {
    "q": "Pourquoi certaines espèces émettent-elles un cri de fréquence presque constante ?",
    "o": [
     "Parce qu'il révèle le moindre décalage dû au mouvement de la proie",
     "Parce qu'il porte plus loin en forêt",
     "Parce qu'il économise l'énergie du larynx"
    ],
    "r": 0,
    "e": "La fréquence stable rend sensible l'effet Doppler de la cible."
   },
   {
    "q": "Comment certains papillons de nuit se défendent-ils ?",
    "o": [
     "Ils perçoivent les ultrasons et produisent des clics brouilleurs",
     "Ils deviennent toxiques pour les chauves-souris",
     "Ils volent uniquement en plein jour"
    ],
    "r": 0,
    "e": "Le texte décrit l'écoute des ultrasons et le brouillage de l'écho."
   },
   {
    "q": "Combien d'espèces se nourrissent de sang ?",
    "o": [
     "Trois espèces d'Amérique latine",
     "Une seule espèce africaine",
     "Une dizaine d'espèces asiatiques"
    ],
    "r": 0,
    "e": "Le texte parle de trois vampires latino-américains."
   },
   {
    "q": "Pourquoi la reproduction rend-elle les populations fragiles ?",
    "o": [
     "Parce que la plupart des espèces n'ont qu'un petit par an",
     "Parce que les petits naissent aveugles et sourds",
     "Parce que les femelles changent de gîte chaque nuit"
    ],
    "r": 0,
    "e": "Un dérangement en colonie de mise-bas coûte une année entière."
   },
   {
    "q": "Comment identifie-t-on une espèce à partir d'un enregistrement ?",
    "o": [
     "Par la fréquence, la durée et la forme de son cri",
     "Par le nombre d'individus dans la colonie",
     "Par la température de la cavité"
    ],
    "r": 0,
    "e": "Le spectrogramme donne une signature propre à chaque espèce."
   }
  ]
 },
 {
  "id": "d18",
  "theme": "nature",
  "niveau": 5,
  "titre": "Les forêts qui boivent les nuages",
  "corps": "Sur les flancs des montagnes tropicales, entre mille et trois mille mètres d'altitude, existe un milieu qui ne ressemble à aucune autre forêt : les arbres y sont tordus, couverts de mousses, de fougères et d'orchidées, et le brouillard y stagne une grande partie de l'année. Les botanistes parlent de forêt de nuages, ou forêt ombrophile de montagne.\n\nSa formation tient à la rencontre de deux phénomènes. L'air chaud et humide venu des plaines est poussé contre le relief ; en s'élevant, il se refroidit, et la vapeur d'eau se condense en gouttelettes. La base des nuages se stabilise à une altitude déterminée, souvent appelée niveau de condensation, et la végétation qui occupe cette zone se trouve plongée dans un brouillard permanent. Plus haut, l'air redevient plus sec ; plus bas, la température monte et le nuage se dissipe.\n\nL'eau ne tombe donc pas seulement du ciel. Les feuilles, les aiguilles, les poils des fougères et les rosettes des broméliacées interceptent les gouttelettes du brouillard, qui s'y déposent et ruissellent jusqu'au sol. Cette précipitation horizontale, distincte de la pluie, peut représenter une part importante de l'eau reçue par la forêt, surtout en saison sèche. Les mousses agissent comme des éponges : elles retiennent l'eau, la libèrent lentement, et alimentent des sources qui coulent plus bas.\n\nLa structure de la forêt découle de ces conditions. Les arbres sont plus bas que dans la plaine, leurs feuilles plus petites et plus coriaces, leurs troncs couverts d'épiphytes — ces plantes qui poussent sur d'autres plantes sans les parasiter. Une seule branche peut porter des dizaines d'espèces différentes. L'humidité constante favorise les fougères arborescentes, les lichens et une faune d'amphibiens qui ne supporte pas la dessiccation.\n\nLa biodiversité y est remarquable, et souvent endémique : des espèces ne vivent que sur une crête, parfois sur quelques kilomètres carrés. Certains oiseaux emblématiques, comme le quetzal en Amérique centrale, dépendent de ces forêts pour nicher. Les colibris y trouvent des fleurs toute l'année, et les grenouilles à développement direct y pondent hors de l'eau, dans l'humus détrempé.\n\nLe rôle hydrologique est tout aussi important. Les forêts de nuages coiffent des bassins versants qui alimentent en eau des villes et des centrales hydroélectriques. En interceptant le brouillard et en ralentissant le ruissellement, elles régulent le débit des rivières et limitent l'érosion. Leur disparition se traduit souvent, en aval, par des sources plus faibles en saison sèche et des crues plus brutales en saison des pluies.\n\nOr ce milieu est étroit. Il n'occupe qu'une bande d'altitude assez mince, et il suffit d'un réchauffement modéré pour que la base des nuages remonte. Les espèces doivent alors migrer vers le haut, sur un versant qui se rétrécit à mesure que l'on s'élève, jusqu'à buter sur un sommet. La déforestation aggrave le phénomène : une fois les arbres coupés, le brouillard n'est plus intercepté, le sol s'assèche, et la forêt ne se réinstalle pas.\n\nLa démonstration la plus célèbre vient d'Amérique centrale. À Monteverde, au Costa Rica, les observations ont montré une remontée de la base des nuages et une diminution des jours de brouillard, corrélées à la disparition locale de certaines espèces de grenouilles et d'oiseaux de haute altitude. Le lien n'est pas simple à établir, car les maladies et la fragmentation du milieu jouent aussi leur rôle, mais la tendance a marqué les esprits.\n\nLes solutions passent par la protection de corridors. Plutôt que de réserver des îlots, les gestionnaires cherchent à maintenir des bandes continues de forêt le long des gradients d'altitude, afin que les espèces puissent se déplacer. Certains pays rémunèrent les propriétaires pour conserver leurs arbres, d'autres restaurent des pâturages abandonnés en replantant des essences locales. Ces mesures coûtent, mais elles protègent un service que l'on ne peut pas importer : l'eau du robinet de plusieurs villes andines vient de ces forêts de brouillard.",
  "q": [
   {
    "q": "Entre quelles altitudes le texte situe-t-il ces forêts ?",
    "o": [
     "Entre mille et trois mille mètres",
     "Entre cent et cinq cents mètres",
     "Entre quatre mille et six mille mètres"
    ],
    "r": 0,
    "e": "Le texte donne cette plage d'altitude en ouverture."
   },
   {
    "q": "Pourquoi l'air venu des plaines se refroidit-il ?",
    "o": [
     "Parce qu'il s'élève le long du relief",
     "Parce qu'il rencontre un courant polaire",
     "Parce qu'il traverse une forêt dense"
    ],
    "r": 0,
    "e": "L'ascension forcée provoque la condensation de la vapeur."
   },
   {
    "q": "Quel nom porte l'altitude où se stabilise la base des nuages ?",
    "o": [
     "Le niveau de condensation",
     "Le niveau de saturation sèche",
     "La ligne de givre"
    ],
    "r": 0,
    "e": "Le texte emploie ce terme pour décrire le plancher nuageux."
   },
   {
    "q": "Comment l'eau du brouillard atteint-elle le sol ?",
    "o": [
     "Elle est interceptée par les feuilles et ruisselle",
     "Elle gèle sur les branches puis fond",
     "Elle est absorbée directement par les racines aériennes"
    ],
    "r": 0,
    "e": "Les surfaces végétales captent les gouttelettes qui s'écoulent."
   },
   {
    "q": "Comment appelle-t-on cette eau distincte de la pluie ?",
    "o": [
     "La précipitation horizontale",
     "La rosée de crête",
     "Le ruissellement occulté"
    ],
    "r": 0,
    "e": "Le texte oppose cette captation à la pluie verticale."
   },
   {
    "q": "Quel rôle jouent les mousses ?",
    "o": [
     "Elles retiennent l'eau et la libèrent lentement",
     "Elles empêchent les arbres de pousser",
     "Elles acidifient le sol pour les orchidées"
    ],
    "r": 0,
    "e": "Le texte les compare à des éponges alimentant les sources."
   },
   {
    "q": "Qu'est-ce qu'une plante épiphyte ?",
    "o": [
     "Une plante qui pousse sur une autre sans la parasiter",
     "Une plante qui parasite son support",
     "Une plante fixée directement au rocher"
    ],
    "r": 0,
    "e": "Le texte précise leur abondance sur les branches."
   },
   {
    "q": "Comment sont les feuilles des arbres de ces forêts ?",
    "o": [
     "Plus petites et plus coriaces qu'en plaine",
     "Plus grandes et plus molles qu'en plaine",
     "Absentes pendant la saison des pluies"
    ],
    "r": 0,
    "e": "Le texte décrit une adaptation à l'humidité et au vent."
   },
   {
    "q": "Quel oiseau emblématique dépend de ces forêts ?",
    "o": [
     "Le quetzal",
     "Le toucan à bec rouge",
     "Le condor des Andes"
    ],
    "r": 0,
    "e": "Le texte cite le quetzal en Amérique centrale."
   },
   {
    "q": "Quel service hydrologique ces forêts rendent-elles ?",
    "o": [
     "Elles régulent le débit des rivières et limitent l'érosion",
     "Elles refroidissent l'air des villes voisines",
     "Elles empêchent les séismes de surface"
    ],
    "r": 0,
    "e": "Le texte mentionne l'alimentation des villes et des centrales."
   },
   {
    "q": "Pourquoi cette forêt est-elle vulnérable au réchauffement ?",
    "o": [
     "Parce que la base des nuages remonte et la bande se rétrécit",
     "Parce que les arbres ne supportent pas plus de chaleur",
     "Parce que les pluies deviennent trop abondantes"
    ],
    "r": 0,
    "e": "Les espèces doivent migrer vers un sommet qui les limite."
   },
   {
    "q": "Que se passe-t-il après une coupe à blanc ?",
    "o": [
     "Le brouillard n'est plus intercepté et le sol s'assèche",
     "Les mousses se multiplient et reforment un tapis",
     "Les arbres repoussent plus vite qu'en plaine"
    ],
    "r": 0,
    "e": "Le texte décrit un milieu qui ne se réinstalle pas."
   },
   {
    "q": "Où les observations les plus célèbres ont-elles été faites ?",
    "o": [
     "À Monteverde, au Costa Rica",
     "À Quito, en Équateur",
     "Dans le Chiapas, au Mexique"
    ],
    "r": 0,
    "e": "Le texte cite Monteverde et la remontée de la base des nuages."
   },
   {
    "q": "Quel type de dispositif les gestionnaires privilégient-ils ?",
    "o": [
     "Des corridors continus le long des gradients d'altitude",
     "Des îlots réservés autour des sommets",
     "Des clôtures empêchant le bétail de monter"
    ],
    "r": 0,
    "e": "Les bandes continues permettent aux espèces de se déplacer."
   },
   {
    "q": "Comment certains pays encouragent-ils la conservation ?",
    "o": [
     "En rémunérant les propriétaires qui gardent leurs arbres",
     "En nationalisant les terres forestières",
     "En interdisant toute activité agricole en montagne"
    ],
    "r": 0,
    "e": "Le texte évoque ces paiements pour services rendus."
   },
   {
    "q": "Pourquoi le lien entre brouillard et disparition d'espèces reste-t-il discuté ?",
    "o": [
     "Parce que maladies et fragmentation jouent aussi un rôle",
     "Parce que les observations sont trop récentes",
     "Parce que les espèces concernées sont migratrices"
    ],
    "r": 0,
    "e": "Le texte reconnaît la complexité des causes."
   },
   {
    "q": "Pourquoi la forêt de nuages ne peut-elle pas être déplacée ?",
    "o": [
     "Parce que son existence dépend d'une altitude précise",
     "Parce que ses sols sont protégés par la loi",
     "Parce que les graines ne germent qu'en plaine"
    ],
    "r": 0,
    "e": "La bande d'altitude qui la définit ne peut être transposée."
   },
   {
    "q": "Pourquoi l'eau des villes andines dépend-elle de ces forêts ?",
    "o": [
     "Parce qu'elles coiffent les bassins versants qui les alimentent",
     "Parce qu'elles stockent l'eau dans des lacs artificiels",
     "Parce qu'elles pompent l'eau des nuages"
    ],
    "r": 0,
    "e": "Le texte relie ces forêts aux bassins versants exploités en aval."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Le fonctionnement et la fragilité des forêts de nuages",
     "La classification des forêts tropicales",
     "Les techniques de reboisement en montagne"
    ],
    "r": 0,
    "e": "Le texte décrit le milieu, son rôle et ses menaces."
   },
   {
    "q": "Pourquoi l'auteur parle-t-il de forêts qui « boivent » les nuages ?",
    "o": [
     "Pour résumer la captation de l'eau du brouillard par la végétation",
     "Pour expliquer que les arbres transpirent beaucoup",
     "Pour désigner les nuages qui se forment au-dessus des cimes"
    ],
    "r": 0,
    "e": "Le titre image l'interception des gouttelettes par les feuilles."
   },
   {
    "q": "Pourquoi l'auteur décrit-il la bande d'altitude comme étroite ?",
    "o": [
     "Pour expliquer que le milieu n'a pas de refuge vers le haut",
     "Pour justifier la rareté des espèces endémiques",
     "Pour montrer que la forêt tient en quelques hectares"
    ],
    "r": 0,
    "e": "Le rétrécissement du versant limite toute migration."
   },
   {
    "q": "Quelle intention guide le dernier paragraphe ?",
    "o": [
     "Montrer que la protection a un coût mais rend un service concret",
     "Dénoncer les reboisements industriels",
     "Expliquer le financement international de la recherche"
    ],
    "r": 0,
    "e": "L'auteur relie la conservation à l'eau consommée en aval."
   }
  ]
 },
 {
  "id": "d23",
  "theme": "nature",
  "niveau": 5,
  "titre": "Un récif est bâti par des animaux de la taille d'un grain de riz",
  "corps": "Vu du ciel, un récif corallien dessine des taches turquoise au milieu d'un océan bleu sombre. Vu de près, c'est une ville : des branches, des plaques, des boules couvertes de sillons, entre lesquelles circulent des poissons par centaines. L'architecte de cet ensemble est un animal minuscule, le polype, proche des anémones de mer, qui construit autour de lui un squelette de carbonate de calcium.\n\nUn polype ressemble à un petit sac muni de tentacules et d'une bouche unique. Il extrait du calcium et des carbonates dissous dans l'eau et les dépose sous forme d'aragonite, un cristal de carbonate de calcium. En se divisant, il donne des individus génétiquement identiques, qui restent liés et partagent la même structure. Le récif n'est donc pas un édifice mort : c'est l'accumulation, sur des milliers d'années, de squelettes superposés, recouverts par une fine pellicule vivante.\n\nCette construction serait impossible sans une association. Les tissus du polype abritent des algues microscopiques, les zooxanthelles, qui réalisent la photosynthèse et fournissent à leur hôte une grande partie de son énergie, sous forme de sucres. En échange, elles reçoivent un abri et des nutriments issus de l'excrétion de l'animal. Cette symbiose explique pourquoi les coraux constructeurs vivent dans des eaux claires et peu profondes : les algues ont besoin de lumière.\n\nLes exigences du milieu sont précises. La température doit rester comprise entre environ dix-huit et trente degrés, la salinité être stable, l'eau pauvre en nutriments et agitée par la houle, qui apporte de l'oxygène et évacue les sédiments. Au-delà de cinquante mètres de profondeur, la lumière manque ; près des estuaires, l'eau douce et les particules les tuent. C'est pourquoi les récifs se concentrent dans une bande tropicale, entre les deux tropiques.\n\nLa croissance est lente. Les coraux massifs gagnent un à deux centimètres par an, les formes branchues davantage, mais un récif de plusieurs mètres d'épaisseur représente des siècles, parfois des millénaires. La Grande Barrière, au large de l'Australie, s'étend sur plus de deux mille kilomètres et compte des milliers d'édifices distincts ; elle est visible depuis l'espace, mais l'essentiel de sa masse est mort et recouvert de sable.\n\nLa diversité qu'elle abrite dépasse de loin celle de la forêt tropicale en nombre de groupes animaux. Un récif sert de nursery : de nombreuses espèces de poissons y passent leurs premiers mois avant de gagner le large, et les crevettes, crabes, mollusques et échinodermes y trouvent des abris. Cette densité tient à la complexité du relief, qui multiplie les cachettes et les sources de nourriture.\n\nLe blanchissement est le symptôme le plus visible du stress thermique. Lorsque l'eau dépasse durablement la température habituelle, même de un ou deux degrés, le corail expulse ses algues symbiotiques. Il devient blanc, car le squelette apparaît à travers des tissus devenus transparents. Il peut survivre quelques semaines et récupérer si l'eau se refroidit, mais une exposition prolongée le tue. Les épisodes de 1998 et de 2016 ont touché des portions entières de récifs dans plusieurs océans.\n\nD'autres pressions s'ajoutent. L'acidification de l'océan, causée par l'absorption du dioxyde de carbone, rend la construction du squelette plus difficile ; les cyclones brisent les branches ; l'étoile de mer dévoreuse, dont les populations explosent quand ses prédateurs disparaissent, ronge des surfaces entières ; le ruissellement agricole apporte des sédiments et des engrais qui favorisent les algues au détriment des coraux.\n\nLes restaurateurs tentent d'intervenir. Ils fragmentent des coraux sains, les fixent sur des supports en pépinière, puis les replantent sur le récif ; certains collectent des gamètes et les élèvent en laboratoire pour les réintroduire. Ces méthodes fonctionnent à l'échelle d'un site, pas d'une barrière de deux mille kilomètres, et elles ne compensent pas un réchauffement continu.\n\nLa protection passe donc d'abord par la réduction des causes. Les aires marines protégées limitent la pêche et le piétinement ; les gestionnaires restaurent les mangroves en amont, qui filtrent les sédiments ; les scientifiques sélectionnent des souches plus tolérantes à la chaleur, avec l'espoir — incertain — de les voir se propager. Un récif reste néanmoins un milieu lent : ce qui est détruit en une saison met des décennies à se reconstruire.",
  "q": [
   {
    "q": "Quel animal construit le récif ?",
    "o": [
     "Le polype, proche des anémones de mer",
     "Le corail rouge, une algue calcaire",
     "Le bénitier, un grand mollusque"
    ],
    "r": 0,
    "e": "Le texte décrit un animal minuscule, parent des anémones."
   },
   {
    "q": "De quoi est fait le squelette du corail ?",
    "o": [
     "De carbonate de calcium, sous forme d'aragonite",
     "De silice dissoute",
     "De phosphate de magnésium"
    ],
    "r": 0,
    "e": "Le polype dépose de l'aragonite à partir du calcium et des carbonates."
   },
   {
    "q": "Comment s'appellent les algues hébergées par le corail ?",
    "o": [
     "Les zooxanthelles",
     "Les diatomées",
     "Les ulves"
    ],
    "r": 0,
    "e": "Ces algues microscopiques réalisent la photosynthèse."
   },
   {
    "q": "Que fournissent ces algues à leur hôte ?",
    "o": [
     "Une grande partie de son énergie sous forme de sucres",
     "Le calcium nécessaire au squelette",
     "L'oxygène de ses tentacules"
    ],
    "r": 0,
    "e": "La symbiose apporte des sucres et, en échange, un abri."
   },
   {
    "q": "Quelle est la plage de température favorable aux coraux constructeurs ?",
    "o": [
     "Environ dix-huit à trente degrés",
     "Environ cinq à quinze degrés",
     "Environ trente-cinq à quarante degrés"
    ],
    "r": 0,
    "e": "Le texte donne cette fourchette."
   },
   {
    "q": "Pourquoi la lumière limite-t-elle la profondeur des récifs ?",
    "o": [
     "Parce que les algues symbiotiques en ont besoin",
     "Parce que le squelette fond dans l'obscurité",
     "Parce que les poissons fuient le noir"
    ],
    "r": 0,
    "e": "Au-delà d'une cinquantaine de mètres, la photosynthèse devient impossible."
   },
   {
    "q": "De combien les coraux massifs grandissent-ils par an ?",
    "o": [
     "Un à deux centimètres",
     "Un à deux millimètres",
     "Un à deux décimètres"
    ],
    "r": 0,
    "e": "Le texte parle de un à deux centimètres par an."
   },
   {
    "q": "Sur quelle longueur la Grande Barrière s'étend-elle ?",
    "o": [
     "Plus de deux mille kilomètres",
     "Plus de deux cents kilomètres",
     "Plus de vingt mille kilomètres"
    ],
    "r": 0,
    "e": "Le texte donne plus de deux mille kilomètres."
   },
   {
    "q": "Que devient l'essentiel de la masse d'un récif ?",
    "o": [
     "Il est mort et recouvert de sable",
     "Il reste vivant sur toute son épaisseur",
     "Il se transforme en calcaire dur et stérile"
    ],
    "r": 0,
    "e": "Seule une fine pellicule périphérique est vivante."
   },
   {
    "q": "Quel rôle joue le récif pour les poissons ?",
    "o": [
     "Il sert de nurserie pour leurs premiers mois",
     "Il fournit l'eau douce nécessaire à leur reproduction",
     "Il les protège des courants froids"
    ],
    "r": 0,
    "e": "Le texte décrit ce rôle de refuge et d'élevage."
   },
   {
    "q": "Comment se manifeste le blanchissement ?",
    "o": [
     "Le corail expulse ses algues et laisse voir son squelette",
     "Le corail se couvre d'une pellicule blanche de sel",
     "Les polypes se multiplient et pâlissent"
    ],
    "r": 0,
    "e": "Les tissus deviennent transparents et le squelette apparaît."
   },
   {
    "q": "Quels épisodes de blanchissement le texte cite-t-il ?",
    "o": [
     "1998 et 2016",
     "1958 et 1976",
     "2005 et 2020 seulement"
    ],
    "r": 0,
    "e": "Ces deux années sont données en exemple."
   },
   {
    "q": "Quel effet l'acidification produit-elle ?",
    "o": [
     "Elle rend la construction du squelette plus difficile",
     "Elle colore le corail en blanc",
     "Elle accélère la photosynthèse"
    ],
    "r": 0,
    "e": "L'absorption du dioxyde de carbone modifie la chimie de l'eau."
   },
   {
    "q": "Quel prédateur prolifère quand ses ennemis disparaissent ?",
    "o": [
     "L'étoile de mer dévoreuse de coraux",
     "Le poisson-perroquet",
     "L'oursin noir"
    ],
    "r": 0,
    "e": "Le texte cite cette étoile de mer et ses explosions de population."
   },
   {
    "q": "Comment fonctionnent les pépinières de corail ?",
    "o": [
     "On fragmente des coraux sains puis on les replante",
     "On élève des polypes dans des aquariums fermés",
     "On coule du béton pour remplacer le squelette"
    ],
    "r": 0,
    "e": "Le texte décrit la fragmentation, la fixation et la replantation."
   },
   {
    "q": "Pourquoi ces restaurations restent-elles insuffisantes ?",
    "o": [
     "Parce qu'elles n'agissent qu'à l'échelle d'un site",
     "Parce qu'elles coûtent plus cher que la pêche",
     "Parce qu'elles tuent les poissons alentour"
    ],
    "r": 0,
    "e": "Elles ne compensent pas un réchauffement continu."
   },
   {
    "q": "Pourquoi protéger les mangroves aide-t-il les récifs ?",
    "o": [
     "Parce qu'elles filtrent les sédiments avant qu'ils n'atteignent la mer",
     "Parce qu'elles abritent les mêmes polypes",
     "Parce qu'elles refroidissent l'eau côtière"
    ],
    "r": 0,
    "e": "Le ruissellement chargé de sédiments étouffe les coraux."
   },
   {
    "q": "Pourquoi la reconstruction d'un récif est-elle lente ?",
    "o": [
     "Parce que la croissance des coraux se compte en centimètres par an",
     "Parce que les polypes ne se reproduisent qu'une fois par siècle",
     "Parce que le carbonate se dissout en surface"
    ],
    "r": 0,
    "e": "Ce qui est détruit en une saison demande des décennies."
   },
   {
    "q": "Pourquoi le corail peut-il survivre à un blanchissement ?",
    "o": [
     "Parce qu'il peut récupérer si l'eau se refroidit à temps",
     "Parce que ses algues se reproduisent pendant l'expulsion",
     "Parce que le squelette continue à croître sans algues"
    ],
    "r": 0,
    "e": "Une exposition prolongée, en revanche, le tue."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "La construction, la richesse et la fragilité des récifs coralliens",
     "La classification des poissons tropicaux",
     "Les techniques de plongée scientifique"
    ],
    "r": 0,
    "e": "Le texte décrit l'animal bâtisseur, son milieu et ses menaces."
   },
   {
    "q": "Pourquoi l'auteur compare-t-il le récif à une ville ?",
    "o": [
     "Pour faire imaginer un relief dense et habité",
     "Pour expliquer l'urbanisation des côtes tropicales",
     "Pour désigner les constructions humaines sur le récif"
    ],
    "r": 0,
    "e": "La comparaison rend sensible la complexité de l'édifice."
   },
   {
    "q": "Quelle intention guide le dernier paragraphe ?",
    "o": [
     "Montrer que la restauration ne remplace pas la protection des causes",
     "Décrire les métiers de la plongée scientifique",
     "Comparer les récifs de plusieurs océans"
    ],
    "r": 0,
    "e": "L'auteur insiste sur la réduction des pressions à leur source."
   }
  ]
 },
 {
  "id": "d11",
  "theme": "technologie",
  "niveau": 5,
  "titre": "Une pointe si fine qu'elle lit les atomes",
  "corps": "En 1986, trois physiciens travaillant aux États-Unis, Gerd Binnig, Calvin Quate et Christoph Gerber, présentent un appareil d'apparence modeste : une pointe métallique fixée à l'extrémité d'un bras flexible, le levier, que l'on approche d'une surface jusqu'à quelques nanomètres, sans jamais la toucher. La même année, Binnig recevait avec Heinrich Rohrer le prix Nobel de physique pour le microscope à effet tunnel, construit cinq ans plus tôt à Zurich. Le nouvel instrument, lui, ne mesurait pas un courant électrique mais une force.\n\nLe principe repose sur une interaction infime. Entre la pointe et l'échantillon s'exercent des forces attractives à distance, puis des forces répulsives dès que les nuages d'électrons se rapprochent, et ces forces varient très vite avec l'écart. Un faisceau laser réfléchi sur le dos du levier mesure sa déflexion : un déplacement de quelques dixièmes de nanomètre suffit à décaler le spot lumineux sur un détecteur divisé en plusieurs secteurs. Une boucle de régulation maintient cette déflexion constante en déplaçant l'échantillon verticalement, grâce à des céramiques piézoélectriques qui se déforment de façon contrôlée sous tension.\n\nEn balayant la surface ligne par ligne, l'appareil reconstitue une carte du relief, et la résolution atteint l'échelle atomique : on distingue des marches d'un seul diamètre d'atome, des défauts dans un cristal, des molécules isolées, parfois des liaisons chimiques individuelles.\n\nLa difficulté principale est la propreté. Une poussière, une simple couche d'eau adsorbée, et la pointe s'émousse ou colle au support. Les expériences se font donc sous vide poussé, ou dans un liquide qui protège l'échantillon de l'air. Il faut encore isoler l'instrument des vibrations : un camion passant dans la rue, un pas dans le couloir, suffisent à brouiller une image qui demande plusieurs minutes d'acquisition.\n\nCette pointe ne se contente pas de regarder. En mode contact, elle peut pousser un atome, le déplacer, tracer un motif ; des chercheurs ont ainsi écrit des lettres avec des atomes de xénon disposés sur un cristal. On mesure aussi la dureté, l'élasticité ou l'aimantation locale d'une surface.\n\nPour mesurer l'importance de cet instrument, il faut rappeler ce que la lumière ne peut pas faire. Au XVIIe siècle, Antoni van Leeuwenhoek, marchand de drap hollandais devenu observateur, taillait lui-même des lentilles presque sphériques et décrivait des animalcules invisibles à l'œil nu. Deux siècles plus tard, les microscopes composés progressent, mais un obstacle demeure : la diffraction. Lorsque la lumière traverse une ouverture, elle s'étale, et deux points plus rapprochés qu'environ la moitié de la longueur d'onde ne peuvent plus être distingués. Pour la lumière visible, cela fixe une limite autour de deux cents nanomètres, soit cinq cents fois moins que l'épaisseur d'un cheveu.\n\nLes années 1930 franchissent cette barrière par un autre moyen : au lieu de photons, on utilise des électrons, dont la longueur d'onde est bien plus courte. Le microscope électronique, construit par Ernst Ruska en 1931, révèle des organites, puis des virus, puis des rangées d'atomes dans certains cristaux. Mais il exige des échantillons minces, placés sous vide, et traversés par un faisceau qui les abîme. Un objet massif, isolant, vivant, reste hors de portée. C'est précisément cet angle mort que vient occuper la microscopie à sonde locale.\n\nLe microscope à effet tunnel, construit en 1981 par Binnig et Rohrer, apporte une première réponse. Une pointe métallique très fine est approchée à moins d'un nanomètre d'une surface conductrice : sous l'effet d'une tension faible, des électrons traversent le vide par effet tunnel, et le courant varie d'un facteur dix pour chaque dixième de nanomètre d'écart. Cette sensibilité extrême permet de suivre le relief atome par atome. Mais il faut un matériau qui conduise l'électricité, ce qui exclut le verre, la plupart des polymères et les cellules vivantes.\n\nD'où l'idée de remplacer le courant par une force. En 1986, Binnig, Quate et Gerber fixent une pointe sur un microlevier et mesurent sa déflexion : l'instrument fonctionne alors sur des isolants, dans l'air, dans l'eau, à température ambiante. Le prix Nobel de physique de la même année récompense d'ailleurs Ruska, Binnig et Rohrer, consacrant une filiation : l'électron, le tunnel, puis la force.\n\nLes modes d'utilisation se sont multipliés. En mode contact, la pointe appuie légèrement et suit le relief, ce qui convient aux surfaces dures. Mais le frottement use la pointe et peut déplacer les objets mous. Au début des années 1990, un mode intermittent s'impose : le levier oscille à sa fréquence de résonance, la pointe ne touche la surface qu'une fraction de chaque cycle, et l'on enregistre la variation d'amplitude. Les molécules fragiles, l'ADN, les membranes biologiques deviennent observables sans être détruits.\n\nChaque mode donne accès à une grandeur différente. En enregistrant la force en fonction de la distance, on obtient une courbe qui renseigne sur l'élasticité locale, l'adhérence, la présence d'un film liquide. En faisant vibrer la pointe au voisinage de sa résonance, on détecte des variations infimes de masse, ce qui a permis de peser des particules uniques. Certains appareils chauffent la pointe pour creuser ou pour écrire, d'autres la recouvrent d'une molécule sensible qui reconnaît une cible biologique.\n\nLes applications industrielles se sont imposées sans bruit. Dans la fabrication des puces, l'épaisseur des couches déposées, la largeur des gravures et la rugosité des surfaces se contrôlent à l'échelle du nanomètre, et les appareils à sonde locale servent d'étalons. Dans les laboratoires pharmaceutiques, on observe l'effet d'un principe actif sur une membrane. Dans la recherche sur les matériaux, on suit la croissance d'un film couche par couche.\n\nL'instrument a pourtant ses pièges. Une pointe n'est jamais parfaite : si elle présente deux aspérités, l'image montre deux fois le même objet décalé, et l'on photographie parfois la pointe autant que l'échantillon. Les céramiques piézoélectriques se dilatent avec la température, ce qui dérive lentement l'image ; un balayage complet peut demander plusieurs minutes, et une vibration suffit à la ruiner. Les publications sérieuses montrent donc des images obtenues avec plusieurs pointes différentes, et comparent les mesures à d'autres méthodes.\n\nReste une conséquence philosophique discrète. Pendant trois siècles, observer signifiait éclairer : on voyait ce que la lumière révélait. Avec la sonde locale, observer devient toucher, à quelques atomes de distance, et parfois déplacer. Le geste du microscopiste ressemble alors à celui du sculpteur, ce qui explique la fascination durable exercée par ces images en noir et blanc, où des rangées de points réguliers ressemblent à une foule vue de très haut.\n\nCette polyvalence explique sa présence dans les laboratoires de biologie, de science des matériaux et de microélectronique. Le contrôle des puces, l'étude des protéines membranaires et l'analyse des couches minces reposent aujourd'hui sur des appareils hérités de ce levier minuscule, dont on suit les mouvements avec un simple rayon de lumière.",
  "q": [
   {
    "q": "En quelle année l'instrument décrit est-il présenté ?",
    "o": [
     "En 1986",
     "En 1981",
     "En 1996"
    ],
    "r": 0,
    "e": "Le texte situe cette présentation en 1986."
   },
   {
    "q": "Quels chercheurs sont associés à cet appareil ?",
    "o": [
     "Binnig, Quate et Gerber",
     "Binnig et Rohrer seuls",
     "Quate et Rohrer"
    ],
    "r": 0,
    "e": "Les trois noms figurent dans la première phrase."
   },
   {
    "q": "Quel prix Binnig reçoit-il la même année ?",
    "o": [
     "Le prix Nobel de physique",
     "Le prix Nobel de chimie",
     "La médaille Fields"
    ],
    "r": 0,
    "e": "Le texte précise le prix Nobel de physique, partagé avec Rohrer."
   },
   {
    "q": "Pour quel instrument ce prix est-il décerné ?",
    "o": [
     "Le microscope à effet tunnel",
     "Le microscope à force atomique",
     "Le microscope électronique en transmission"
    ],
    "r": 0,
    "e": "Le Nobel récompense le microscope à effet tunnel de 1981."
   },
   {
    "q": "Où le microscope à effet tunnel a-t-il été construit ?",
    "o": [
     "À Zurich",
     "À Chicago",
     "À Tokyo"
    ],
    "r": 0,
    "e": "Le texte le situe à Zurich."
   },
   {
    "q": "Quelle grandeur l'appareil de 1986 mesure-t-il ?",
    "o": [
     "Une force",
     "Un courant électrique",
     "Une température"
    ],
    "r": 0,
    "e": "Le texte oppose explicitement la force au courant du microscope à effet tunnel."
   },
   {
    "q": "Comment mesure-t-on la déflexion du levier ?",
    "o": [
     "Par un faisceau laser réfléchi sur son dos",
     "Par un courant traversant la pointe",
     "Par une caméra filmant la pointe"
    ],
    "r": 0,
    "e": "Le laser réfléchi décale un spot sur un détecteur."
   },
   {
    "q": "De quel ordre est le déplacement détectable du levier ?",
    "o": [
     "Quelques dixièmes de nanomètre",
     "Quelques dixièmes de millimètre",
     "Quelques centimètres"
    ],
    "r": 0,
    "e": "Le texte parle de quelques dixièmes de nanomètre."
   },
   {
    "q": "Quel type de matériau déplace l'échantillon verticalement ?",
    "o": [
     "Des céramiques piézoélectriques",
     "Des ressorts en acier",
     "Des aimants permanents"
    ],
    "r": 0,
    "e": "Ces céramiques se déforment sous tension."
   },
   {
    "q": "Quelle résolution l'appareil atteint-il ?",
    "o": [
     "L'échelle atomique",
     "L'échelle du millimètre",
     "L'échelle du micron seulement"
    ],
    "r": 0,
    "e": "Le texte parle de marches d'un seul diamètre d'atome."
   },
   {
    "q": "Pourquoi les expériences se font-elles sous vide ou en liquide ?",
    "o": [
     "Parce qu'une couche d'eau ou de poussière altère la pointe",
     "Parce que la lumière du jour abîme l'échantillon",
     "Parce que l'air ralentit le balayage"
    ],
    "r": 0,
    "e": "La propreté de la pointe conditionne la qualité de la mesure."
   },
   {
    "q": "Quel exemple d'écriture atomique le texte cite-t-il ?",
    "o": [
     "Des lettres tracées avec des atomes de xénon",
     "Des chiffres gravés au laser",
     "Un motif obtenu avec des molécules d'eau"
    ],
    "r": 0,
    "e": "Le déplacement d'atomes de xénon est donné en exemple."
   },
   {
    "q": "Quelles propriétés peut-on mesurer en plus du relief ?",
    "o": [
     "La dureté, l'élasticité et l'aimantation locale",
     "La température et la pression",
     "La conductivité thermique et la radioactivité"
    ],
    "r": 0,
    "e": "Ces trois propriétés sont citées au cinquième paragraphe."
   },
   {
    "q": "Pourquoi faut-il isoler l'appareil des vibrations ?",
    "o": [
     "Parce qu'une image demande plusieurs minutes d'acquisition",
     "Parce que le laser perd sa puissance",
     "Parce que la pointe fond à température ambiante"
    ],
    "r": 0,
    "e": "Un mouvement parasite brouille une acquisition lente."
   },
   {
    "q": "Pourquoi la pointe ne touche-t-elle pas la surface ?",
    "o": [
     "Parce que les forces répulsives deviennent trop fortes de très près",
     "Parce qu'un film d'huile l'en empêche",
     "Parce que le levier est aimanté vers le haut"
    ],
    "r": 0,
    "e": "L'appareil travaille dans une zone où les forces varient fortement avec la distance."
   },
   {
    "q": "Pourquoi le même levier peut-il à la fois observer et modifier la surface ?",
    "o": [
     "Parce que sa pointe exerce une force sur les atomes rencontrés",
     "Parce qu'il chauffe localement l'échantillon",
     "Parce qu'il projette des électrons"
    ],
    "r": 0,
    "e": "Le mode contact permet de pousser et déplacer les atomes."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "Le fonctionnement et les usages du microscope à force atomique",
     "La rivalité entre deux laboratoires américains",
     "L'histoire des prix Nobel de physique"
    ],
    "r": 0,
    "e": "Le texte décrit l'instrument, son principe et ses applications."
   },
   {
    "q": "Pourquoi l'auteur souligne-t-il la simplicité de l'appareil ?",
    "o": [
     "Pour mieux surprendre par la finesse de ses résultats",
     "Pour expliquer qu'il est bon marché à produire",
     "Pour montrer qu'il remplace tous les autres microscopes"
    ],
    "r": 0,
    "e": "Le contraste entre moyens modestes et résolution atomique structure le texte."
   },
   {
    "q": "Que déduit-on de la présence de cet appareil en biologie ?",
    "o": [
     "Qu'il peut observer des objets mous dans un liquide",
     "Qu'il ne fonctionne que sous vide",
     "Qu'il détruit les échantillons vivants"
    ],
    "r": 0,
    "e": "La possibilité de travailler en milieu liquide ouvre ce champ d'application."
   },
   {
    "q": "Quelle limite la diffraction impose-t-elle au microscope optique ?",
    "o": [
     "Environ deux cents nanomètres",
     "Environ deux nanomètres",
     "Environ deux millimètres"
    ],
    "r": 0,
    "e": "Le texte situe cette limite autour de la moitié de la longueur d'onde visible."
   },
   {
    "q": "Qui a décrit des animalcules grâce à des lentilles taillées par lui-même ?",
    "o": [
     "Antoni van Leeuwenhoek",
     "Ernst Ruska",
     "Christoph Gerber"
    ],
    "r": 0,
    "e": "Ce marchand hollandais fabriquait ses propres lentilles au XVIIe siècle."
   },
   {
    "q": "Quel microscope Ruska construit-il en 1931 ?",
    "o": [
     "Le microscope électronique",
     "Le microscope à effet tunnel",
     "Le microscope à force atomique"
    ],
    "r": 0,
    "e": "Le texte attribue à Ruska le microscope électronique."
   },
   {
    "q": "Pourquoi le microscope à effet tunnel ne convient-il pas à tous les objets ?",
    "o": [
     "Parce qu'il exige une surface conductrice",
     "Parce qu'il travaille uniquement dans l'eau",
     "Parce qu'il chauffe l'échantillon à 300 degrés"
    ],
    "r": 0,
    "e": "Le courant tunnel suppose un matériau qui conduise l'électricité."
   },
   {
    "q": "Comment varie le courant tunnel quand la distance change d'un dixième de nanomètre ?",
    "o": [
     "D'un facteur dix",
     "D'un facteur deux",
     "D'un facteur cent"
    ],
    "r": 0,
    "e": "Cette variation très forte explique la sensibilité de l'appareil."
   },
   {
    "q": "Quel mode évite d'user la pointe sur les objets mous ?",
    "o": [
     "Le mode intermittent, où le levier oscille",
     "Le mode contact permanent",
     "Le mode vide poussé"
    ],
    "r": 0,
    "e": "La pointe ne touche la surface qu'une fraction de chaque cycle."
   },
   {
    "q": "Pourquoi les images sont-elles parfois celles de la pointe ?",
    "o": [
     "Parce qu'une pointe à deux aspérités duplique l'objet observé",
     "Parce que le laser se réfléchit sur le levier",
     "Parce que l'échantillon est trop mince"
    ],
    "r": 0,
    "e": "Un défaut de pointe se retrouve dans chaque image comme un motif répété."
   }
  ]
 },
 {
  "id": "d16",
  "theme": "technologie",
  "niveau": 5,
  "titre": "Internet passe par le fond des océans",
  "corps": "Quand on envoie un message à l'autre bout du monde, on imagine volontiers qu'il rebondit de satellite en satellite. La réalité est plus prosaïque : la grande majorité du trafic intercontinental circule par des câbles posés sur le fond des océans. Ces longs tubes de la taille d'un tuyau d'arrosage relient les continents depuis plus d'un siècle et demi, et ce sont eux, bien plus que l'espace, qui portent la mondialisation des données.\n\nL'histoire commence par le télégraphe. En 1850, un câble est posé entre Douvres et Calais ; il ne fonctionne qu'un jour avant de rompre. Huit ans plus tard, un câble transatlantique relie l'Irlande à Terre-Neuve : il transmet quelques messages, puis se dégrade. Le succès vient en 1866, grâce au navire Great Eastern, qui pose un câble fabriqué avec soin et le répare ensuite après une première rupture. L'isolation repose sur la gutta-percha, une sève d'arbre malaisienne qui durcit au contact de l'air et résiste à l'eau de mer.\n\nLes câbles télégraphiques ont dessiné une géographie nouvelle. Des navires spécialisés, équipés de treuils et de réservoirs, ont sillonné les océans pour les poser, et des stations relais se sont installées sur des îles stratégiques. Le Royaume-Uni, premier utilisateur, a longtemps contrôlé une part importante de ce réseau. Un message qui mettait des semaines à traverser l'Atlantique par bateau circulait en quelques minutes.\n\nLe téléphone impose une autre échelle. En 1956, le câble TAT-1 relie l'Écosse à Terre-Neuve et transporte une trentaine de conversations simultanées. Techniquement, il s'agit d'un câble coaxial : un conducteur central entouré d'un blindage, avec des répéteurs électroniques placés tous les soixante kilomètres environ pour redresser le signal affaibli. Ces répéteurs sont alimentés par le câble lui-même, en courant continu, sur des milliers de kilomètres.\n\nLa fibre optique bouleverse le système. Un fil de verre de quelques dizaines de micromètres conduit la lumière, qui s'y propage en rebondissant sur les parois, sans fuir. Le premier câble transatlantique à fibre, TAT-8, entre en service en 1988. Rapidement, les amplificateurs à fibre dopée à l'erbium remplacent les répéteurs électroniques, et le multiplexage en longueur d'onde permet de faire cohabiter des dizaines de couleurs, donc des dizaines de flux, dans le même fil.\n\nUn câble moderne contient plusieurs paires de fibres, parfois une douzaine. Les répéteurs, logés dans des boîtiers cylindriques, sont espacés de cinquante à quatre-vingts kilomètres et alimentés en série. Aux extrémités, les fibres aboutissent dans des stations d'atterrissement, où elles sont raccordées aux réseaux terrestres. Entre deux zones desservies, un câble peut se diviser grâce à un boîtier de branchement posé sur le fond, ce qui permet de raccorder plusieurs pays sur un même trajet.\n\nL'ensemble forme une infrastructure considérable : on compte aujourd'hui plusieurs centaines de câbles en service, représentant environ un million quatre cent mille kilomètres, soit plusieurs fois le tour de la Terre. Un câble récent peut transporter plusieurs dizaines de térabits par seconde, assez pour des millions de conversations simultanées.\n\nLa fragilité surprend toujours. Un câble posé par trois mille mètres de fond n'est pas à l'abri : les ancres des navires, les chaluts de pêche, les séismes sous-marins et les glissements de terrain le sectionnent régulièrement. On dénombre chaque année des dizaines de ruptures, souvent sur les plateaux continentaux peu profonds, là où l'activité humaine est intense. La coupure ne se voit pas, mais elle ralentit un pays entier.\n\nLa réparation mobilise une flotte spécialisée. Un navire câblier localise le défaut par des mesures électriques ou optiques, saisit le câble avec un grappin, le remonte à bord, coupe la partie endommagée et soude les fibres une à une, dans une chambre propre. L'opération prend des jours, parfois des semaines si la météo s'en mêle. Les opérateurs entretiennent donc des routes redondantes : si un câble casse, le trafic bascule sur un autre, ce qui explique qu'une rupture passe souvent inaperçue.\n\nLa concentration des points d'atterrissement pose une question de sécurité. Dans certaines régions, des dizaines de câbles aboutissent sur quelques kilomètres de côte, ce qui crée un point unique de vulnérabilité. Les États ont institué des zones interdites au mouillage et des règles de protection, et des patrouilles surveillent les trajets les plus exposés. La pose d'un câble est aussi un acte diplomatique : il faut obtenir des autorisations, trouver un emplacement, et choisir un fournisseur accepté par les deux rives.\n\nLa latence explique cette suprématie. Dans la fibre, la lumière avance d'environ deux cents kilomètres par milliseconde : un trajet Paris-New York, long de près de six mille kilomètres de câble, impose donc une trentaine de millisecondes à l'aller. Un satellite géostationnaire, perché à trente-six mille kilomètres, ajoute un aller-retour de plusieurs centaines de millisecondes. Pour une visioconférence, un jeu en ligne ou une transaction boursière, l'écart est décisif.\n\nLe financement de ces ouvrages relève de consortiums. Un câble neuf coûte cher, et aucun opérateur ne le supporte seul : les groupes de télécommunications, les grands fournisseurs de services en ligne et parfois des États se répartissent les capacités avant même la pose. L'atterrissement, lui, se négocie localement : il faut un permis, un terrain, une chambre technique enterrée sur la plage où les fibres sont raccordées au réseau terrestre.\n\nLes systèmes de mesure ont beaucoup gagné. Des réflectomètres optiques envoient une impulsion dans la fibre et chronomètrent son écho : la distance du défaut se déduit du temps de retour, à quelques mètres près. Sur un câble de plusieurs milliers de kilomètres, cette précision évite de draguer au hasard.\n\nLe coût des incidents reste modeste à l'échelle des opérateurs, mais il justifie des protections : enfouissement dans les zones de pêche, blindage renforcé près des côtes, cartographie des risques. Certains trajets sont désormais doublés, sur des itinéraires distincts, pour qu'aucune coupure ne prive une région entière de connexion.\n\nLes limites physiques ne sont pas atteintes. Les chercheurs travaillent sur des fibres à plusieurs cœurs, sur des amplificateurs plus larges en bande et sur des câbles répéteurs moins gourmands en énergie. Mais le rythme des besoins pose une autre question : chaque nouvelle génération de câbles doit être posée par les mêmes navires, sur les mêmes routes maritimes, avec les mêmes contraintes de fond. La carte des câbles ressemble ainsi à celle des empires commerciaux, avec ses passages obligés et ses détroits surveillés.",
  "q": [
   {
    "q": "Pourquoi le câble est-il préféré au satellite pour les usages interactifs ?",
    "o": [
     "Parce que la fibre impose une latence bien plus faible",
     "Parce que les satellites sont saturés la nuit",
     "Parce que le câble coûte moins cher à l'usage"
    ],
    "r": 0,
    "e": "La distance plus courte réduit le délai de transmission."
   },
   {
    "q": "Qui finance la pose d'un câble neuf ?",
    "o": [
     "Un consortium d'opérateurs et de fournisseurs de services",
     "Un seul opérateur public",
     "Les États riverains à parts égales"
    ],
    "r": 0,
    "e": "Les capacités sont réparties avant la pose entre les partenaires."
   },
   {
    "q": "Comment localise-t-on un défaut dans la fibre ?",
    "o": [
     "Par un réflectomètre qui chronomètre l'écho d'une impulsion",
     "En envoyant un plongeur suivre le câble",
     "En mesurant la température de l'eau"
    ],
    "r": 0,
    "e": "Le temps de retour donne la distance du défaut à quelques mètres près."
   },
   {
    "q": "Quelle part du trafic intercontinental passe par les câbles sous-marins ?",
    "o": [
     "La grande majorité",
     "Environ la moitié",
     "Moins d'un dixième"
    ],
    "r": 0,
    "e": "Le texte oppose cette réalité à l'image des satellites."
   },
   {
    "q": "Combien de temps le câble de 1850 a-t-il fonctionné ?",
    "o": [
     "Un jour",
     "Un an",
     "Quelques minutes"
    ],
    "r": 0,
    "e": "Il reliait Douvres à Calais et rompit rapidement."
   },
   {
    "q": "Quel navire a posé le câble transatlantique réussi de 1866 ?",
    "o": [
     "Le Great Eastern",
     "Le Great Britain",
     "Le Morning Star"
    ],
    "r": 0,
    "e": "Le texte attribue la pose de 1866 au Great Eastern."
   },
   {
    "q": "Quel matériau isolait les premiers câbles ?",
    "o": [
     "La gutta-percha",
     "Le caoutchouc vulcanisé",
     "Le cuivre verni"
    ],
    "r": 0,
    "e": "Cette sève durcit à l'air et résiste à l'eau de mer."
   },
   {
    "q": "En quelle année le câble TAT-1 est-il mis en service ?",
    "o": [
     "En 1956",
     "En 1946",
     "En 1966"
    ],
    "r": 0,
    "e": "Le texte date TAT-1 de 1956."
   },
   {
    "q": "Combien de conversations le TAT-1 transportait-il ?",
    "o": [
     "Une trentaine",
     "Une centaine",
     "Trois"
    ],
    "r": 0,
    "e": "Le texte parle d'une trentaine de conversations simultanées."
   },
   {
    "q": "Tous les combien étaient placés les répéteurs du câble coaxial ?",
    "o": [
     "Tous les soixante kilomètres environ",
     "Tous les six cents kilomètres",
     "Tous les six kilomètres"
    ],
    "r": 0,
    "e": "Le texte donne environ soixante kilomètres."
   },
   {
    "q": "Quel câble est le premier transatlantique à fibre optique ?",
    "o": [
     "TAT-8",
     "TAT-1",
     "TAT-12"
    ],
    "r": 0,
    "e": "TAT-8 entre en service en 1988."
   },
   {
    "q": "Quel type d'amplificateur remplace les répéteurs électroniques ?",
    "o": [
     "L'amplificateur à fibre dopée à l'erbium",
     "Le répéteur à tube à vide",
     "Le relais à micro-ondes"
    ],
    "r": 0,
    "e": "Le texte cite la fibre dopée à l'erbium et le multiplexage en longueur d'onde."
   },
   {
    "q": "Quel est l'espacement des répéteurs optiques ?",
    "o": [
     "De cinquante à quatre-vingts kilomètres",
     "De cinq à huit kilomètres",
     "De cinq cents à huit cents kilomètres"
    ],
    "r": 0,
    "e": "Ces boîtiers cylindriques sont alimentés en série par le câble."
   },
   {
    "q": "Quelle longueur totale représente le réseau mondial de câbles ?",
    "o": [
     "Environ un million quatre cent mille kilomètres",
     "Environ cent quarante mille kilomètres",
     "Environ quatorze millions de kilomètres"
    ],
    "r": 0,
    "e": "Le texte donne cet ordre de grandeur pour plusieurs centaines de câbles."
   },
   {
    "q": "Quelles causes de rupture le texte cite-t-il ?",
    "o": [
     "Ancres, chaluts, séismes et glissements de terrain",
     "Tempêtes solaires et marées noires",
     "Corrosion par le sel uniquement"
    ],
    "r": 0,
    "e": "Ces quatre causes sont énumérées dans le paragraphe sur la fragilité."
   },
   {
    "q": "Comment un navire câblier remonte-t-il le câble ?",
    "o": [
     "Avec un grappin qui le saisit sur le fond",
     "Avec un filet traîné par deux navires",
     "En envoyant un sous-marin habité"
    ],
    "r": 0,
    "e": "Le câble est saisi, remonté, puis les fibres sont soudées à bord."
   },
   {
    "q": "Combien de temps dure une réparation ?",
    "o": [
     "Des jours, parfois des semaines",
     "Quelques heures",
     "Plusieurs années"
    ],
    "r": 0,
    "e": "La météo peut allonger considérablement le délai."
   },
   {
    "q": "Pourquoi une rupture passe-t-elle souvent inaperçue ?",
    "o": [
     "Parce que le trafic bascule sur une route redondante",
     "Parce que les opérateurs cachent l'information",
     "Parce que la coupure ne touche que la voix"
    ],
    "r": 0,
    "e": "Les routes de secours prennent le relais automatiquement."
   },
   {
    "q": "Pourquoi la fibre transporte-t-elle beaucoup plus d'informations que le coaxial ?",
    "o": [
     "Parce qu'elle conduit la lumière et plusieurs couleurs à la fois",
     "Parce qu'elle est plus épaisse que le cuivre",
     "Parce qu'elle supprime les répéteurs"
    ],
    "r": 0,
    "e": "Le multiplexage en longueur d'onde fait cohabiter plusieurs flux."
   },
   {
    "q": "Pourquoi les ruptures sont-elles plus fréquentes près des côtes ?",
    "o": [
     "Parce que l'activité humaine y est intense en eau peu profonde",
     "Parce que le câble y est plus fin",
     "Parce que les courants y sont plus froids"
    ],
    "r": 0,
    "e": "Ancres et chaluts opèrent sur les plateaux continentaux."
   },
   {
    "q": "Pourquoi la concentration des points d'atterrissement inquiète-t-elle ?",
    "o": [
     "Parce qu'elle crée un point unique de vulnérabilité",
     "Parce qu'elle augmente la latence du réseau",
     "Parce qu'elle empêche la pose de nouveaux câbles"
    ],
    "r": 0,
    "e": "Plusieurs dizaines de câbles peuvent aboutir sur quelques kilomètres."
   },
   {
    "q": "Pourquoi la pose d'un câble est-elle aussi un acte diplomatique ?",
    "o": [
     "Parce qu'il faut des autorisations et un fournisseur accepté",
     "Parce que le câble appartient à l'ONU",
     "Parce que la mer est propriété commune des opérateurs"
    ],
    "r": 0,
    "e": "Permis, terrain et choix industriel engagent les États."
   },
   {
    "q": "Pourquoi certains trajets sont-ils doublés sur des itinéraires distincts ?",
    "o": [
     "Pour qu'une coupure ne prive pas une région de connexion",
     "Pour augmenter la vitesse de transmission",
     "Pour éviter de payer des droits de passage"
    ],
    "r": 0,
    "e": "La redondance géographique protège l'accès."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "L'histoire et le fonctionnement des câbles sous-marins",
     "Les satellites de télécommunication",
     "La fabrication des fibres optiques"
    ],
    "r": 0,
    "e": "Le texte suit l'évolution technique et décrit l'infrastructure actuelle."
   },
   {
    "q": "Pourquoi l'auteur commence-t-il par corriger une idée reçue ?",
    "o": [
     "Pour montrer que l'essentiel du trafic passe sous la mer",
     "Pour expliquer le fonctionnement des satellites",
     "Pour dénoncer le coût des lancements spatiaux"
    ],
    "r": 0,
    "e": "La première phrase oppose l'imaginaire spatial à la réalité sous-marine."
   },
   {
    "q": "Pourquoi l'auteur compare-t-il la carte des câbles à celle des empires commerciaux ?",
    "o": [
     "Parce qu'elle dessine des passages obligés et des points de contrôle",
     "Parce que les câbles appartiennent aux anciennes colonies",
     "Parce que les routes maritimes datent de l'Antiquité"
    ],
    "r": 0,
    "e": "La conclusion souligne la dimension stratégique du tracé."
   },
   {
    "q": "Que déduit-on du fait que la réparation se fait « dans une chambre propre » ?",
    "o": [
     "Que la soudure des fibres exige un environnement sans poussière",
     "Que les câbles sont nettoyés avant d'être remis à l'eau",
     "Que le personnel doit porter un uniforme"
    ],
    "r": 0,
    "e": "La poussière dégraderait la jonction entre deux fibres."
   }
  ]
 },
 {
  "id": "d21",
  "theme": "technologie",
  "niveau": 5,
  "titre": "Un petit caillou qui a remplacé des lampes",
  "corps": "En décembre 1947, dans un laboratoire de la compagnie Bell, aux États-Unis, deux physiciens pressent deux pointes métalliques sur un fragment de germanium et obtiennent un effet inattendu : le signal de sortie est plus fort que celui d'entrée. John Bardeen et Walter Brattain viennent de réaliser le premier transistor. Leur collègue William Shockley, qui dirige l'équipe, comprend l'intérêt du dispositif et met au point, quelques mois plus tard, une version plus robuste et plus facile à fabriquer.\n\nLe contexte explique l'urgence. Les appareils électroniques de l'époque reposent sur des tubes à vide, ces ampoules de verre où circulent des électrons dans le vide. Ils chauffent, consomment beaucoup, cassent au moindre choc et occupent un volume considérable. Les calculateurs en contiennent des milliers, et l'on imagine mal un ordinateur domestique. Les recherches menées pendant la guerre sur les radars avaient par ailleurs montré que certains cristaux pouvaient redresser un courant, ce qui orientait les laboratoires vers les semi-conducteurs.\n\nLe fonctionnement repose sur une propriété particulière du silicium et du germanium. Ces matériaux conduisent mal l'électricité, mais on peut y introduire des impuretés en quantité infime : de l'arsenic ou du phosphore, qui libèrent des électrons, ou du bore, qui en acceptent. On obtient ainsi des zones dites de type n, riches en porteurs négatifs, et des zones de type p, riches en lacunes appelées trous. En superposant ces zones, on crée une barrière que l'on peut franchir ou bloquer selon la tension appliquée : un petit courant de commande contrôle un courant beaucoup plus important.\n\nLe mot transistor résume cette fonction : transfer resistor, résistance de transfert. Dans un transistor dit bipolaire, les électrons injectés traversent une base très mince ; une faible variation du courant de base modifie fortement le courant collecté, d'où l'amplification. Un autre type, à effet de champ, commande la conductivité d'un canal par un champ électrique appliqué sur une grille, sans contact direct : c'est cette famille qui dominera l'électronique moderne, car elle consomme moins et se prête à la miniaturisation.\n\nLa fabrication a dû résoudre un problème de pureté. Un cristal doit contenir moins d'un atome étranger pour un milliard d'atomes de silicium, sans quoi les propriétés espérées disparaissent. Les ingénieurs ont donc développé des techniques de purification par fusion de zone, puis la croissance de lingots monocristallins que l'on débite en fines tranches. Chaque étape exige des salles propres, où la poussière est filtrée et les opérateurs portent des combinaisons.\n\nL'intégration change l'échelle. En 1958, Jack Kilby assemble plusieurs composants sur une même plaquette de germanium ; l'année suivante, Robert Noyce propose une méthode compatible avec le silicium, utilisant une couche d'oxyde comme isolant et des pistes métalliques déposées. Le circuit intégré est né : au lieu de souder des transistors un à un, on les fabrique ensemble, sur la même surface, par des opérations de masquage et de gravure.\n\nLa loi de Moore n'est pas une loi physique, mais une observation économique. En 1965, Gordon Moore remarque que le nombre de composants par circuit double à intervalle régulier, et il prédit que cette progression se poursuivra. Elle durera plusieurs décennies, rythmée par les progrès de la photolithographie : on dessine les motifs avec une lumière de plus en plus courte longueur d'onde, ce qui permet des traits toujours plus fins.\n\nLes conséquences ont dépassé les laboratoires. Le transistor a rendu possibles la radio portable, la calculatrice de poche, l'ordinateur personnel et le téléphone mobile. Il a équipé les missions spatiales, les prothèses auditives, les chaînes de production. Un microprocesseur de 1971 comptait quelques milliers de transistors ; les processeurs actuels en comptent des dizaines de milliards sur une surface de quelques centimètres carrés.\n\nLes limites physiques se rapprochent. Un transistor trop petit laisse fuir des électrons par effet tunnel, et dissiper la chaleur devient aussi difficile que graver les motifs. Les fabricants ont donc changé d'architecture : grilles enveloppantes, tranchées profondes, empilement de couches. Plutôt que d'accélérer une seule horloge, on multiplie les cœurs et l'on spécialise les circuits pour des tâches précises, comme le calcul graphique ou l'intelligence artificielle.\n\nLe composant a d'abord conquis les objets nomades. En 1955, une petite entreprise japonaise commercialise une radio à transistors qui tient dans une poche ; le succès est immédiat, et la production mondiale explose. Les auditeurs découvrent qu'un appareil peut fonctionner avec une pile plate pendant des semaines, sans chauffer, sans grésiller au moindre choc. Les constructeurs européens, attachés aux lampes, perdent en quelques années un marché qu'ils dominaient.\n\nLa production s'est ensuite organisée en chaîne mondiale. Un circuit moderne demande plusieurs centaines d'étapes : dépôt de couches minces, gravure, implantation d'ions, nettoyage, contrôle. Les usines coûtent des milliards et ne sont rentables qu'à pleine charge, ce qui a concentré la fabrication chez quelques industriels. Les machines de photolithographie les plus fines, capables de dessiner des traits de quelques nanomètres avec une lumière ultraviolette extrême, proviennent d'un très petit nombre de fournisseurs.\n\nCette concentration crée une vulnérabilité nouvelle. Une sécheresse, un séisme ou un conflit dans une région où se trouve une usine suffit à perturber la production mondiale d'automobiles ou de téléphones, car un véhicule contient aujourd'hui des centaines de puces, souvent issues de plusieurs pays. Les États cherchent donc à relocaliser une partie de la fabrication, sans pouvoir reproduire du jour au lendemain un écosystème bâti sur des décennies.\n\nUn détail de vocabulaire dit l'ampleur du changement : les premiers transistors étaient vendus à l'unité, dans de petites boîtes, et les amateurs les soudaient eux-mêmes sur des plaques de circuit. Aujourd'hui, personne ne voit plus le composant : il est enfoui dans une puce scellée, et seul son effet demeure.\n\nL'histoire garde une ironie. Les trois hommes de 1947 travaillaient sur un phénomène de surface mal compris, avec des moyens modestes. Leur dispositif était fragile, difficile à produire, et l'un de ses inventeurs a dû batailler pour imposer une version industrielle. Pourtant, ce composant minuscule a transformé l'économie mondiale plus vite que la machine à vapeur, et il continue de tenir, dans nos poches, la place qu'occupaient autrefois des armoires de lampes chauffantes.",
  "q": [
   {
    "q": "Qui réalise le premier transistor en décembre 1947 ?",
    "o": [
     "Bardeen et Brattain",
     "Shockley et Kilby",
     "Noyce et Moore"
    ],
    "r": 0,
    "e": "Le texte attribue cette réalisation à John Bardeen et Walter Brattain."
   },
   {
    "q": "Quel matériau utilise ce premier dispositif ?",
    "o": [
     "Le germanium",
     "Le silicium pur",
     "Le cuivre oxydé"
    ],
    "r": 0,
    "e": "Le fragment initial était du germanium."
   },
   {
    "q": "Quel défaut des tubes à vide est mis en avant ?",
    "o": [
     "Ils chauffent, cassent et occupent beaucoup de place",
     "Ils ne fonctionnent qu'en courant alternatif",
     "Ils coûtent plus cher que l'or"
    ],
    "r": 0,
    "e": "Le texte énumère ces inconvénients."
   },
   {
    "q": "Quelle technologie militaire a orienté les recherches ?",
    "o": [
     "Les radars",
     "Les sonars",
     "Les fusées"
    ],
    "r": 0,
    "e": "Les travaux sur les radars avaient montré le rôle de certains cristaux."
   },
   {
    "q": "Quelles impuretés donnent un semi-conducteur de type n ?",
    "o": [
     "L'arsenic ou le phosphore",
     "Le bore ou l'aluminium",
     "Le carbone ou l'oxygène"
    ],
    "r": 0,
    "e": "Ces atomes libèrent des électrons."
   },
   {
    "q": "Quelles impuretés donnent un type p ?",
    "o": [
     "Le bore",
     "Le phosphore",
     "L'antimoine"
    ],
    "r": 0,
    "e": "Le bore accepte des électrons et crée des trous."
   },
   {
    "q": "Que signifie le mot transistor ?",
    "o": [
     "Résistance de transfert",
     "Transmission solide",
     "Transformateur à cristal"
    ],
    "r": 0,
    "e": "Le texte traduit l'anglais transfer resistor."
   },
   {
    "q": "Combien d'atomes étrangers pour un milliard sont tolérés dans le cristal ?",
    "o": [
     "Moins d'un",
     "Environ mille",
     "Environ un million"
    ],
    "r": 0,
    "e": "Cette exigence de pureté conditionne les propriétés du matériau."
   },
   {
    "q": "Quelle technique purifie le silicium par fusion locale ?",
    "o": [
     "La fusion de zone",
     "La distillation fractionnée",
     "L'électrolyse"
    ],
    "r": 0,
    "e": "Le texte cite la fusion de zone puis la croissance de lingots."
   },
   {
    "q": "Qui assemble plusieurs composants sur une plaquette en 1958 ?",
    "o": [
     "Jack Kilby",
     "Robert Noyce",
     "Gordon Moore"
    ],
    "r": 0,
    "e": "Kilby réalise ce montage sur germanium en 1958."
   },
   {
    "q": "Quelle méthode Noyce propose-t-il l'année suivante ?",
    "o": [
     "Une méthode compatible avec le silicium, à oxyde isolant",
     "Un transistor à pointes de contact",
     "Un circuit en céramique imprimée"
    ],
    "r": 0,
    "e": "L'oxyde sert d'isolant et des pistes métalliques relient les éléments."
   },
   {
    "q": "Que remarque Gordon Moore en 1965 ?",
    "o": [
     "Le nombre de composants par circuit double à intervalle régulier",
     "Le prix des transistors augmente chaque année",
     "Les circuits deviennent plus lents en vieillissant"
    ],
    "r": 0,
    "e": "Cette observation, prolongée, deviendra la loi de Moore."
   },
   {
    "q": "Quel procédé permet de dessiner des motifs toujours plus fins ?",
    "o": [
     "La photolithographie",
     "La soudure par ultrasons",
     "Le moulage sous pression"
    ],
    "r": 0,
    "e": "On emploie une lumière de longueur d'onde plus courte."
   },
   {
    "q": "Combien de transistors comptait un microprocesseur de 1971 ?",
    "o": [
     "Quelques milliers",
     "Quelques dizaines de milliards",
     "Quelques millions"
    ],
    "r": 0,
    "e": "Le texte parle de quelques milliers, contre des dizaines de milliards aujourd'hui."
   },
   {
    "q": "Quel effet limite la miniaturisation ?",
    "o": [
     "La fuite des électrons par effet tunnel",
     "La dilatation du silicium à froid",
     "L'aimantation des pistes métalliques"
    ],
    "r": 0,
    "e": "Ce phénomène s'ajoute aux difficultés de dissipation thermique."
   },
   {
    "q": "Pourquoi l'équipe de Bell a-t-elle obtenu un effet inattendu ?",
    "o": [
     "Parce que les phénomènes de surface du semi-conducteur étaient mal compris",
     "Parce qu'ils utilisaient un métal inadapté",
     "Parce qu'ils cherchaient à fabriquer un laser"
    ],
    "r": 0,
    "e": "Le texte insiste sur la méconnaissance des surfaces."
   },
   {
    "q": "Pourquoi la version de Shockley s'est-elle imposée ?",
    "o": [
     "Parce qu'elle était plus robuste et plus facile à fabriquer",
     "Parce qu'elle consommait moins que les tubes",
     "Parce qu'elle utilisait du silicium dès 1948"
    ],
    "r": 0,
    "e": "Le texte souligne ces deux avantages industriels."
   },
   {
    "q": "Pourquoi les transistors à effet de champ dominent-ils aujourd'hui ?",
    "o": [
     "Parce qu'ils consomment moins et se miniaturisent mieux",
     "Parce qu'ils sont les seuls à amplifier",
     "Parce qu'ils fonctionnent sans grille"
    ],
    "r": 0,
    "e": "Leur commande par champ, sans contact, favorise l'intégration."
   },
   {
    "q": "Pourquoi les fabricants multiplient-ils les cœurs ?",
    "o": [
     "Parce qu'accélérer l'horloge unique devient trop coûteux en chaleur",
     "Parce que les logiciels exigent plusieurs processeurs",
     "Parce que la loi de Moore l'impose"
    ],
    "r": 0,
    "e": "Le texte décrit ce changement d'architecture."
   },
   {
    "q": "Pourquoi les salles propres sont-elles nécessaires ?",
    "o": [
     "Parce qu'une poussière suffit à ruiner un circuit",
     "Parce que les produits chimiques sont toxiques",
     "Parce que l'humidité empêche la gravure"
    ],
    "r": 0,
    "e": "La pureté exigée est extrême à chaque étape."
   },
   {
    "q": "Quel est le sujet principal du texte ?",
    "o": [
     "L'invention du transistor et la révolution qu'elle a permise",
     "La biographie de William Shockley",
     "L'histoire des ordinateurs personnels"
    ],
    "r": 0,
    "e": "Le texte suit le composant, de sa mise au point à ses limites actuelles."
   },
   {
    "q": "Pourquoi l'auteur commence-t-il par la scène de laboratoire de 1947 ?",
    "o": [
     "Pour montrer que l'invention est née d'un geste expérimental simple",
     "Pour dater la fondation de la société Bell",
     "Pour décrire le matériel de l'époque"
    ],
    "r": 0,
    "e": "Le contraste entre moyens modestes et conséquences immenses structure le récit."
   },
   {
    "q": "Pourquoi l'auteur qualifie-t-il la loi de Moore d'observation économique ?",
    "o": [
     "Parce qu'elle décrit une tendance industrielle, non une loi physique",
     "Parce qu'elle a été votée par les fabricants",
     "Parce qu'elle fixe le prix des composants"
    ],
    "r": 0,
    "e": "La progression dépendait des investissements et des procédés."
   },
   {
    "q": "Quelle ironie l'auteur souligne-t-il en conclusion ?",
    "o": [
     "Un dispositif fragile et mal compris a transformé l'économie mondiale",
     "Les tubes à vide sont revenus à la mode",
     "Les inventeurs n'ont jamais été reconnus"
    ],
    "r": 0,
    "e": "La dernière phrase compare le composant aux armoires de lampes."
   },
   {
    "q": "Que déduit-on du fait que le transistor consomme peu ?",
    "o": [
     "Qu'il rend possible des appareils portables sur batterie",
     "Qu'il ne produit aucune chaleur",
     "Qu'il fonctionne sans alimentation"
    ],
    "r": 0,
    "e": "La faible consommation conditionne l'autonomie des objets nomades."
   },
   {
    "q": "Pourquoi le dopage du silicium doit-il rester infime ?",
    "o": [
     "Parce que les propriétés électriques dépendent de très faibles concentrations",
     "Parce qu'un excès rend le cristal radioactif",
     "Parce que le matériau deviendrait trop conducteur pour être gravé"
    ],
    "r": 0,
    "e": "Quelques atomes par milliard suffisent à modifier le comportement."
   },
   {
    "q": "Pourquoi le succès de la radio à transistors a-t-il été immédiat ?",
    "o": [
     "Parce qu'elle tenait dans une poche et fonctionnait sur pile",
     "Parce qu'elle recevait plus de stations que les autres",
     "Parce qu'elle était vendue moins cher qu'une lampe"
    ],
    "r": 0,
    "e": "Le texte décrit un appareil portable, sans chaleur ni fragilité."
   }
  ]
 }
];
