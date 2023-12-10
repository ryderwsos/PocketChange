import puppeteer from "puppeteer";

const getAmazon = async (inputName) => {
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto(`https://www.amazon.ca/s?k=${inputName}&i=aps&ref=nb_sb_ss_recent_4_0_recent&crid=3EZQGTQ53WV47&sprefix=%2Caps%2C278`, {
    waitUntil: "domcontentloaded",
  });

  const item = await page.evaluate(() => {
    const name = document.querySelector(".a-size-base-plus.a-color-base.a-text-normal").innerText;
    const price = document.querySelector(".a-offscreen").innerText;
    


    return { from: 'Amazon', name, price };
  });

  await browser.close();

  return(item)
};


const getCaComputers = async (inputName) => {
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto(`https://www.canadacomputers.com/search/results_details.php?language=en&keywords=${inputName}`, {
    waitUntil: "domcontentloaded",
  });

  //await page.waitForSelector(".productItemRow_hyNOs.row_1mOdd")

  const item = await page.evaluate(() => {
    const name = document.querySelector(".text-dark.text-truncate_3").innerText;
    const price = document.querySelector(".d-block.mb-0.pq-hdr-product_price.line-height").innerText;

    return { from: 'Canada Computers', name, price };
  });

  await browser.close();

};



export default getAmazon;