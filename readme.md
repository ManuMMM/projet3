#Application simulant la réservation de vélos dans Paris

## Description:

Ce dépôt GitHub contient le développement d'une application simulant la réservation de vélos (Velib') dans Paris. Elle est donc, par conséquent factice.


## Fonctionnement:

Les vélos sont répartis dans de nombreuses stations dans la ville. L'utilisateur doit pouvoir en réserver un depuis son navigateur (à condition qu'il reste des vélos disponibles à la station !). La réservation sera temporairement enregistrée sur le navigateur du visiteur.

## Développement:

### Cahier des charges:

L'application sera entièrement en JavaScript en affichant une carte à l'aide de l’API GoogleMaps avec la liste des stations de location de vélos disponibles dans la ville de Paris.

![Mockup de la page](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/reservation_velos.png "Mockup de la page")

#### Diaporama:

* Affiche un diaporama de photos et de textes expliquant le fonctionnement de l'application.
* Réagit au clavier avec les touches gauche et droite pour reculer et avancer manuellement

#### Carte des vélos:

* Une carte exploitant l'API GoogleMaps avec la localisation de toutes les stations de vélos, positionnées à l’aide de marqueurs.
* Un clic sur un marqueur affiche l’état de la station dans un panneau construit en HTML et
CSS à côté de la carte Google Maps.
* La localisation et l'état de chaque station (ouverte, en travaux, combien de vélos et de places sont disponibles, etc.) est fourni via une API OpenData de la ville de Paris. Les données doivent provenir de cette API.

#### Réservation d'un vélo:

* Possibilité de réserver un vélo disponible à la station sélectionnée en signant dans un champ libre implémenté à l’aide de l’API HTML5 Canvas. Une fois la signature validée, un vélo est marqué comme réservé à cette station.

* Les données de réservation seront stockées dans le navigateur à l’aide de l’API HTML5 Web Storage et affichées dans un pied de page en­-dessous du panneau.

* La réservation expire automatiquement au bout de 20 minutes et également lorsque le navigateur web se referme.

*Le pied de page affiche en permanence l’état de la réservation (s’il y en a une), avec un décompte dynamique du temps restant avant expiration de la réservation.

* Il ne peut y avoir qu'une réservation à la fois. Si une nouvelle réservation a lieu, elle remplace la précédente.

### Contraintes:

Le code (Html5/CSS/JavaScript):

* A la possibilité d'utiliser jQuery mais pas de plugins jQuery
* (JavaScript) doit être entièrement conçu en programmation orientée objet
* Doit exploiter les API Google Maps et les API Open Data de la ville de Paris. * Doit utiliser les API Web Storage et Canvas.