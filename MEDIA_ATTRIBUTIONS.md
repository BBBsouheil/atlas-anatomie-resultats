# Attributions des captures et vidéos

Les médias historiques sont copiés sans retouche ; la révision décrite ci-dessous ajoute des recadrages vidéo et une nouvelle capture des états de dissection conservés. Les versions et transformations sont indiquées. Aucun examen personnel, annotation native ni poids de modèle n’est publié.

| Média | Origine | Statut de preuve |
| --- | --- | --- |
| `media/atlas-explorer.png` | Atlas Studio V5, explorateur 3D | Capture historique, pas nouveau test C183 |
| `media/atlas-quiz.png` | Atlas Studio V5, quiz et fiche | Capture historique, documentation partielle |
| `media/dissection-c173.png` | C173, scénario B sur le biceps gauche | Prototype fonctionnel, réalisme non validé |
| `media/dissection-c173.webm` | C173, parcours B, environ 3 min 55 | Accès et petite incision ; pas tout le corps |
| `media/scanner-c183.png` | C183, TotalSegmentator s0970 | Cas public connu de C182 ; fragments conservés |
| `media/scanner-c183.webm` | C183, lecteur CT, environ 12 s | Preuve logicielle, pas nouveau test externe |

## Révision : présentation propre et vues agrandies

- `media/dissection-clean-steps.webm` : **18,849 secondes**, montage de six états issus du parcours C173 conservé. Ils sont réaffichés par l’application C173 inchangée, avec `Afficher la physique` désactivé et le sang masqué. Les incisions, prises et poses sont reprises des preuves enregistrées ; aucune amélioration de géométrie, aucun nouveau parcours continu et aucun nouveau test de performance ne sont revendiqués. Les textes d’étape sont ajoutés sur la vidéo.
- `media/dissection-clean-c173.png` : capture de cette reprise, repères désactivés. Données anatomiques BodyParts3D et logiciels de référence : crédits et conditions ci-dessous.
- `media/scanner-overview-zoom.webm`, `scanner-sagittal-zoom.webm`, `scanner-coronal-zoom.webm`, `scanner-axial-zoom.webm`, `scanner-surface-zoom.webm` : cinq recadrages des **9,4 premières secondes du même replay C183**. Seul le cadrage vidéo et l’encodage changent ; le contenu CT, les prédictions, leur couleur et la vitesse sont conservés. La fenêtre 3D conserve les fragments. Il ne s’agit pas de cinq nouveaux examens.
- `media/scanner-initial-c183.png` et `scanner-fiche-c183.png` : captures existantes copiées sans retouche. Les aperçus de coupes sont agrandis par l’affichage de la page ; la source PNG complète est conservée.

Ces ajouts servent uniquement à rendre la présentation lisible. Ils n’installent aucun candidat, ne modifient aucun modèle et ne lancent aucune inférence.

## Modèles et documentation anatomiques

Les modèles de référence sont adaptés de **Z-Anatomy** et **BodyParts3D**, avec leurs crédits propres. Ils ne sont pas générés par les réseaux du projet.

- [Z-Anatomy](https://github.com/Z-Anatomy/Models-of-human-anatomy), Gauthier Kervyn et contributeurs — **CC BY-SA 4.0**, [texte de licence](https://creativecommons.org/licenses/by-sa/4.0/).
- [BodyParts3D](https://dbarchive.biosciencedbc.jp/en/bodyparts3d/lic.html), © The Database Center for Life Science, Kousaku Okubo. L’attribution historique du remix Z-Anatomy porte CC BY-SA 2.1 Japan ; la source BodyParts3D séparée est actuellement diffusée sous CC BY 4.0.
- [Notice Z-Anatomy originale conservée](notices/Z-ANATOMY.txt) : contributions distinctes, dont Brainder/White Matter et University of Dundee. Les contributions de l’oreille interne (CC BY-NC-SA 4.0) et du rein Lissie Cowley (CC BY-NC 4.0) gardent leurs restrictions ; aucune licence commerciale globale n’est affirmée.
- Les textes de fiches Z-Anatomy extraits de Wikipedia sont attribués **CC BY-SA 3.0**, avec références de l’article conservées lorsqu’elles sont visibles. [Texte de licence](https://creativecommons.org/licenses/by-sa/3.0/).

Les adaptations de scène et de tissus sont visibles dans les médias ; l’origine des données anatomiques reste tierce. Les conditions des adaptations, notamment partage à l’identique et restrictions des contributions concernées, restent applicables. Aucun maillage brut n’est distribué.

## Imagerie publique TotalSegmentator

**Wasserthal et al., TotalSegmentator**, dataset CT v2.0.1, [Zenodo, record 10047263](https://zenodo.org/records/10047263), **CC BY 4.0**. [Article](https://pubs.rsna.org/doi/10.1148/ryai.230024) · [Licence](https://creativecommons.org/licenses/by/4.0/).

Les médias C183 montrent des coupes du cas public **s0970**, avec les prédictions et éléments d’interface ajoutés par le projet. Il était déjà examiné dans C182. Les références ne sont pas affichées dans ce replay ; aucun CT brut, annotation ou export natif n’est fourni.

## Logiciel et graphiques

La base **[Human Atlas](https://github.com/slorksmo/Human-Atlas)** conserve son [avis MIT original](notices/HUMAN-ATLAS-MIT.txt). Cet avis ne remplace pas les licences des modèles, textes et images.

Les deux graphiques et agrégats rénaux proviennent des bilans déjà enregistrés. Aucun entraînement, score ou prédiction n’a été recalculé pour cette présentation. Voir le [bilan détaillé](RESULTATS_IA_DETAILS.md) et la [notice de droits](NOTICE_DONNEES_ET_DROITS.txt).
