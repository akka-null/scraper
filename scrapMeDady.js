// NOTE: i could write it better than this ( for a reason it's like this)
import puppeteer from "puppeteer";
import fs from "fs";
const link = process.argv[2];
const pages = process.argv[3];
let start = performance.now();
let urls = [];
let data = [];

// NOTE: to lazy to add this
// to get number of pages 
// Math.max(...Array.from(document.querySelectorAll("#AnnounBrowser-0 > div > div.__inner > div > div > div.text-center.mt-4 > nav > ul > li > button.v-pagination__item")).map(e=> parseInt(e.innerText)))

// NOTE:  the links look like this in ouedkniss
// https://www.ouedkniss.com/store/2236/microland-informatique-oran/accueil?page=1
// https://www.ouedkniss.com/store/2236/microland-informatique-oran/accueil?category=informatique-pieces-pc-fixe-carte-graphique&page=1
// we mush provide the link=pages
// "link" NumberOfPages
// "https://www.ouedkniss.com/store/2236/microland-informatique-oran/accueil?category=informatique-pieces-pc-fixe-carte-graphique&page=" 1

const scrapMeDaddy = async () => {
    let i = 1;
    do {
        // getting each url for each product
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();

        await page.goto(`${link}${i}`, { waitUntil: 'networkidle0' })
        console.log(`# page ${i}: ${link}${i}`);
        const url = await page.evaluate(() => Array.from(document.querySelectorAll("div.d-flex > a")).map(prod => prod.href));

        urls.push(...url);
        await browser.close();
        i++;
    }
    while (i <= pages);
    // looping trhough the urls and getting the data
    let j = 0;
    do {
        const browser = await puppeteer.launch({ headless: 'new' }); // this will open the browser 
        const page = await browser.newPage(); // it should be named window like in the browser
        console.log(urls[j]);
        await page.goto(urls[j], { waitUntil: 'networkidle0' });

        const dat = await page.evaluate(() =>
            Array.from(document.querySelectorAll("#ProductsShow-0 > div > div.__inner > div > div")).map(e => ({
                title: e.querySelector("header > h1")?.innerText || ' ',
                type: Array.from(document.querySelectorAll("#sidebar-layout > div > div.o-show-categories > ul > a"))[1]?.innerText || ' ',
                category: Array.from(document.querySelectorAll("#sidebar-layout > div > div.o-show-categories > ul > a"))[2]?.innerText || ' ',
                price: parseInt((e.querySelector("span > span > span")?.innerText || '0').replace(/\s/g, '')),
                images: Array.from(document.querySelectorAll("#sidebar-layout > div > div.theater-box.mt-2, div.full-h")).map(e => e.querySelector("img")?.src || ' '),
                condition: e.querySelector("span.mr-1")?.innerText || ' ',
                description: e.querySelector("div.align-left, div.align-right")?.innerText || ' '
            }))
        );
        await browser.close();
        data.push(...dat);
        j++;
    }
    while (j < urls.length);
    let end = performance.now();
    console.log(`scraper took: ${end - start} ms || ${(end - start) / 60000} m  to finsih`);

    fs.writeFile('data.js', JSON.stringify(data), (error) => {
        if (error) console.log(error);
        console.log('data been saved');

    });

};


if (link && pages) {
    scrapMeDaddy();
}
else {
    console.log('forget the URL or the number of pages the store has :/');
}

