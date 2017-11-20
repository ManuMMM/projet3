#Application simulant la r�servation de v�los dans Paris

## Description:

Ce d�p�t GitHub contient le d�veloppement d'une application simulant la r�servation de v�los (Velib') dans Paris. Elle est donc, par cons�quent factice.


## Fonctionnement:

Les v�los sont r�partis dans de nombreuses stations dans la ville. L'utilisateur doit pouvoir en r�server un depuis son navigateur (� condition qu'il reste des v�los disponibles � la station !). La r�servation sera temporairement enregistr�e sur le navigateur du visiteur.

## D�veloppement:

### Cahier des charges:

L'application sera enti�rement en JavaScript en affichant une carte � l'aide de l�API GoogleMaps avec la liste des stations de location de v�los disponibles dans la ville de Paris.

![Mockup de la page](https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/reservation_velos.png "Mockup de la page")

#### Diaporama:

* Affiche un diaporama de photos et de textes expliquant le fonctionnement de l'application.
* R�agit au clavier avec les touches gauche et droite pour reculer et avancer manuellement

#### Carte des v�los:

* Une carte exploitant l'API GoogleMaps avec la localisation de toutes les stations de v�los, positionn�es � l�aide de marqueurs.
* Un clic sur un marqueur affiche l��tat de la station dans un panneau construit en HTML et
CSS � c�t� de la carte Google Maps.
* La localisation et l'�tat de chaque station (ouverte, en travaux, combien de v�los et de places sont disponibles, etc.) est fourni via une API OpenData de la ville de Paris. Les donn�es doivent provenir de cette API.

#### R�servation d'un v�lo:

* Possibilit� de r�server un v�lo disponible � la station s�lectionn�e en signant dans un champ libre impl�ment� � l�aide de l�API HTML5 Canvas. Une fois la signature valid�e, un v�lo est marqu� comme r�serv� � cette station.

* Les donn�es de r�servation seront stock�es dans le navigateur � l�aide de l�API HTML5 Web Storage et affich�es dans un pied de page en�-dessous du panneau.

* La r�servation expire automatiquement au bout de 20 minutes et �galement lorsque le navigateur web se referme.

*Le pied de page affiche en permanence l��tat de la r�servation (s�il y en a une), avec un d�compte dynamique du temps restant avant expiration de la r�servation.

* Il ne peut y avoir qu'une r�servation � la fois. Si une nouvelle r�servation a lieu, elle remplace la pr�c�dente.

### Contraintes:

Le code (Html5/CSS/JavaScript):

* A la possibilit� d'utiliser jQuery mais pas de plugins jQuery
* (JavaScript) doit �tre enti�rement con�u en programmation orient�e objet
* Doit exploiter les API Google Maps et les API Open Data de la ville de Paris. * Doit utiliser les API Web Storage et Canvas.