# Bandes sonores des thèmes — The Date

Chaque thème d'invitation est prévu pour jouer une **mélodie instrumentale** en fond,
déclenchée au moment où l'invité ouvre l'invitation (clic sur le sceau / la porte / etc.),
avec un bouton discret pour couper le son à tout moment.

Dépose ici les fichiers **MP3** suivants (idéalement 1–3 minutes, en boucle, volume doux,
~128kbps pour rester léger) :

| Fichier                       | Thème            | Ambiance recherchée                                              |
|-------------------------------|------------------|------------------------------------------------------------------|
| `conte-dore.mp3`              | Conte Doré       | Oud & qânûn, instrumental feutré, orientaliste luxueux          |
| `sidi-bou-said.mp3`           | Sidi Bou Saïd    | Mélodie instrumentale de "Café des Délices" (reprise douce)     |
| `jardin-andalou.mp3`          | Jardin Andalou   | Oud & flûte ney, sérénade de jardin andalou                     |
| `nuit-etoilee.mp3`            | Nuit Étoilée     | Cordes & carillons, nocturne orientale, ambiance feutrée        |
| `rose-poudree.mp3`            | Rose Poudrée     | Piano & cordes, douceur romantique, minimaliste                 |
| `corporate-silver.mp3`        | Corporate Silver | Piano minimaliste, ambiance professionnelle discrète            |
| `toge-et-sceau.mp3`           | Toge & Sceau     | Cordes solennelles, ambiance académique / cérémonie             |
| `petits-nuages.mp3`           | Petits Nuages    | Boîte à musique, douceur enfantine, ballons et confettis        |

Le composant `SoundToggle` (`components/invitation/SoundToggle.tsx`) charge automatiquement
le fichier déclaré dans `lib/invitationThemes.ts` (`theme.sound.src`). Si le fichier est
absent, le bouton reste affiché mais ne joue rien — aucune erreur côté utilisateur.

⚠️ Pensez à n'utiliser que des morceaux **libres de droits ou dont vous détenez les droits**
d'exploitation (banques de musique libre, compositions originales, versions instrumentales
arrangées par vos soins, etc.).
