# ScrapMeDaddy (don't take the name seriously)
* a web-scraper for [ouedkniss](https://www.ouedkniss.com)'s store pages built using [puppeteer](https://pptr.dev/)
#### I needed to get data to seed when i was working on [Microland](https://github.com/akka-null/Microland) website


# description (akka ik ,I suck at documenting stuff deal with it)

* this script will take a **link** to a store page, and **pages** (number of pages), to retrieve all the data in an Array of objects: 
* chnaged **"type"**, **"category"**, **"condition"** fields to suit my use case with VIM magic, result in **products.js**

```json
{
    "title": "RTX 4070Ti ASUS ROG STRIX OC 12GB GDDR6 2HDMI 3DP",
    "type": "Pièces Pour PC Fixe",
    "category": "Carte Graphique",
    "price": 224900,
    "images": [
    "https://cdn7.ouedkniss.com/1600/medias/announcements/images/DRx85y/snyp8kW6KZd9H3V9USl6g4DhlUXHy7EMrUrFkWZz.jpg",
    "https://cdn7.ouedkniss.com/1600/medias/announcements/images/DRx85y/snyp8kW6KZd9H3V9USl6g4DhlUXHy7EMrUrFkWZz.jpg",
    "https://cdn7.ouedkniss.com/1600/medias/announcements/images/DRx85y/gYLO4S8xIAtxyNFiwzXb6PNByE1i6RAbpaCQ13ws.jpg",
    "https://cdn8.ouedkniss.com/1600/medias/announcements/images/DRx85y/kaChVi7zI4vZ819Y5nCdlo7EwCBGJ7zkSG0uSESN.jpg"
    ],
    "condition": "Neuf jamais utilisé",
    "description": "Des images réaliste en restant fluide !\n\nLa carte graphique NVIDIA GeForce RTX 4070 Ti est parfaite pour les joueurs sur PC qui cherchent à exploiter au maximum les moniteurs 1440p à taux de rafraichissement élevé qui sont largement disponibles à des prix intéressants et pour les éditeurs vidéo qui veulent réduire les temps de rendu avec les doubles encodeur AV1.\n\n\n\nJusqu’à 3 fois plus rapide que la GeForce RTX 3090 Ti, avec près de deux fois moins de consommation, grâce aux innovations de l’architecture NVIDIA Ada Lovelace et au NVIDIA DLSS 3.\nArchitecture NVIDIA Ada Lovelace\n\nJusqu’à 2 fois plus de performances et de rendement énergétique\nCÅ“urs Tensor de quatrième génération : Jusqu’à 2 fois plus de performances d’IA !\nCÅ“urs RT de 3ème génération : Jusqu’à 2 fois plus de performances de Ray Tracing\nNVIDIA Studio : Accélérez votre créativité\nNVIDIA DLSS 3.0 : Booster vos FPS\nNVIDIA Broadcast : Crée votre studio personnel en un clique\nEncodeur NVIDIA : Streamez sans perte de performance\n\nRay Tracing\n\nHyper-réaliste. Hyper-rapide. L’architecture Ada exploite tout la puissance du ray tracing, qui simule le comportement de la lumière dans le monde réel. Grâce à la puissance des GPU RTX série 40 et aux cÅ“urs RT de troisième génération, vous profitez de mondes virtuels plus détaillés que jamais !\nNVIDIA DLSS 3\n\nMultipliez vos performances grâce à l’IA. Innovation révolutionnaire dans le domaine du rendu graphique basé sur l’IA, le DLSS accélère grandement les performances de jeu. Optimisé par les cÅ“urs Tensor de quatrième génération et l’accélérateur de flux optiques des GPU Geforce série 4000, le DLSS 3 exploite l’IA pour générer des images additionnelles de haute qualités !\nNVIDIA Reflex\n\nLes GPU GeForce RTX Série 4000 et NVIDIA Reflex vous procurent la latence la plus faible et la meilleure réactivité pour vous garantir un avantage complétif ultime. Conçue pour optimiser et mesurer la latence de votre système, la technologie NVIDIA Reflex accélère l’acquisition des cibles, minimise les temps de rédaction et optimise la précision de vos tirs dans les jeux compétitifs.\nNVIDIA Broadcast\n\nVotre Studio personnel optimisé par l’IA. L’application NVIDIA Broadcast, qui transforme n’importe quelle pièce en véritable studio personnel, fait passer vos livestreams et vos appels visio au niveau supérieur grâce à de puissantes fonctionnalités d’IA incluant la réduction du bruit et de l’écho dans la pièce, un arrière-plan virtuel et bien plus encore !\nFiche technique\n\nDésignation\nASUS ROG Strix GeForce RTX 4070 Ti OC Edition 12GB\nMarque\nASUS\nModèle\nROG-STRIX-RTX4070TI-O12G-GAMING\nMarque du GPU\nNVIDIA\nChipset graphique\nNVIDIA GeForce RTX 4070 Ti\nFréquence du chipset\n2310 MHz\nFréquence boostée\n2790 MHz\nOverclockée\nOui\nNombre de GPU\n1\nBus\nPCI Express 4.0 16x\nTaille mémoire vidéo\n12 Go\nInterface mémoire\n192 bit(s)\nFréquence mémoire vidéo\n21000 MHz\nType de mémoire\nGDDR6X\nProcesseurs de flux\n7680\nSupport Direct X (version)\n12\nVR Ready (réalité virtuelle)\nOui\nCompatible VirtualLink\nNon\nType de refroidissement\nActif (fansink)\nFormat\nTriple Slot\nNombre de slots PCI\n3.25\nLow profile\nNon\nLED\nOui\nLED RGB\nOui\nNombre d’écran(s)\n4\nDVI Dual-Link\nNon\nConnecteur(s) alimentation\nPCI Express 16 Broches (12VHPWR)\nMulti-GPU\nAucun\nHD Ready\nOui\nRésolution(s) 4K UHD\nOui\nConsommation\n285 W\nUtilisation\nGamer NVIDIA RTX\nSorties vidéo (1)\nHDMI Femelle\nSorties vidéo (2)\nDisplayPort Femelle\nNorme HDMI\nHDMI 2.1\nNorme DisplayPort\nDisplayPort 1.4a\nReprise des produits usagés\nVoir les modalités\nLongueur\n336 mm\nLarghezza\n150 mm\nEpaisseur\n63 mm" 

},
```
## Show Case
https://github.com/akka-null/scraper/assets/45569717/803a1256-5907-47db-8436-e7991455e279


## usage
* scrapMeDaddy will take a **link** and **NumberOfPages** as command-lin argument
* it will loop through the store pages and get the products links, then it will proceed and get each product's information and output it in an array of objects and save it in **data.js** file

### examples: 
#### get all the products in a store: 
- provide **store-home-page-link** + **pages** that store has 
``` bash
# remove the number that comes after = in the link by default ouedkniss will put 1
npm start "https://www.ouedkniss.com/store/2236/microland-informatique-oran/accueil?page=" 5
```
#### get a category in a store:
- provide the **category-link** and how many pages that category has
``` bash
# getting GPUs 
npm start "https://www.ouedkniss.com/store/2236/microland-informatique-oran/accueil?category=informatique-pieces-pc-fixe-carte-graphique&page=" 1
# remove the number that comes after = in the link by default ouedkniss will put 1
```

* ouedkniss links comes in this format:
```bash
npm start STORE_LINK NUMBER_OF_PAGES
# NOTE:  the links look like this in ouedkniss
# https://www.ouedkniss.com/store/2236/microland-informatique-oran/accueil?page=1
# https://www.ouedkniss.com/store/2236/microland-informatique-oran/accueil?category=informatique-pieces-pc-fixe-carte-graphique&page=1
# we mush provide the "link?page=" NumberOfPages
# npm start "# https://www.ouedkniss.com/store/2236/microland-informatique-oran/accueil?page=" 1
# npm start "https://www.ouedkniss.com/store/2236/microland-informatique-oran/accueil?category=informatique-pieces-pc-fixe-carte-graphique&page=" 1

```
