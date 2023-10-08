import puppeteer from "puppeteer";
import fs from "fs";

const browser = await puppeteer.launch({
  headless: false,
  defaultViewport: null,
});

const page = await browser.newPage();

const data = [];

for (let i = 1; i <= 7; i++) {
  await page.goto(
    "https://data.cdc.gov/browse?category=Vaccinations&page=" + i
  );

  const links = await page.$$eval(".browse2-result-name a", (links) =>
    links.map((link) => link.href)
  );

  const titles = await page.$$eval(".browse2-result-name", (titles) =>
    titles.map((title) => title.textContent.trim())
  );

  const descriptions = await page.$$eval(
    ".browse2-result-description.collapsible-content div",
    (descriptions) => descriptions.map((description) => description.textContent)
  );

  for (let i = 0; i < links.length; i++) {
    data.push({
      title: titles[i],
      description: descriptions[i],
      link: links[i],
      category: "health",
      tags: ["api"],
    });
  }
}

// save to a json file
fs.writeFileSync("data8.json", JSON.stringify(data));

await browser.close();
