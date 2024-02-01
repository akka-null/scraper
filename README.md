# ScrapMeDaddy (don't take the name sriously)
* it's a script to web scrape [ouedkniss]('https://www.ouedkniss.com') store page built using [puppeteer]('https://pptr.dev/')

## i needed to get data for my seeding script for [Microland](https://github.com/akka-null/Microland)

# description ( i got you future Akka)
* this script will take a link to a store page and retrieve all the data: 
```bash
{
    {
    "title": "ASUS GeForce RTX 2060 DUAL OC 6G Neuf",
    "price": 59000,
    "type":"Desktop Computer Parts", 
    "category": "Graphic Card",
    "images": [
      "https://cdn9.ouedkniss.com/1600/medias/announcements/images/rk6p6/sJxNYR6aK4qWjHo0uZUzcXBzqYYHyFeKY4D7j9kB.jpg"
    ],
    "condition": "Neuf jamais utilisé",
    "description": "Page Facebook : Microland informatique\n\n\n\n\nMagasin Microland informatique\nCentre commercial El Anik (Place Hoche) 1er étage\nde 10h30 a 18h00\n\nwww.microlandinfo-dz-oran.com\n\n\nWhatsApp/ : 077 8 // 450. 602"
  },
  ...

}
```
* the fields "type", "category", and "condition" are sometimes inconsistent so i need to wrap it in a switch case
* in my db i only accept: 
```bash
    "type": "Computer" | "Part" | "Peripheral",
    "category": "Gpu" | "Cpu" | "Mouse" | ...,
    "condition": "used" | "new",
```
## get started
``` bash
git clone  
cd 
npm i
```

# usage
```bash
npm start STORE_LINK NUMBER_OF_PAGES

```
