// Required for usage of ES6 with old versions
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { Client } from "@notionhq/client";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";

const csv = require("csvtojson");

// Config for __dirname usage with ES6
const __dirname = dirname(fileURLToPath(import.meta.url));
// Config .env data
const envPath = resolve(__dirname, "./config/.env");
config({ path: envPath });

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

function getCurrentYearCalendar(year) {
  var lastDay = new Date(year, 11, 31);
  var firstDay = new Date(year, 0, 1);

  var daysOfYear = [];
  for (var date = firstDay; date <= lastDay; date.setDate(date.getDate() + 1)) {
    daysOfYear.push(new Date(date));
  }
  return daysOfYear;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function addItem(content, date) {
  try {
    let contentType = content.type;

    const response = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Conteudo: {
          title: [
            {
              type: "text",
              text: {
                content: content.description,
              },
            },
          ],
        },
        Dia: {
          type: "date",
          date: { start: date },
        },
        Categoria: {
          rich_text: [
            {
              text: {
                content: contentType,
              },
            },
          ],
        },
      },
    });
    console.log(date + " OK");
  } catch (error) {
    console.log(date + " NOT OK");
  }
}

async function convertCsvToJson(path) {
  let result = [];
  await csv()
    .fromFile(path)
    .then((jsonObj) => {
      result = jsonObj;
    });
  return result;
}

async function main() {
  const dataPath = resolve(__dirname, "./data/contents.csv");
  let contentsData = await convertCsvToJson(dataPath);

  const daysOfYear = getCurrentYearCalendar(process.env.CURRENT_YEAR);

  daysOfYear.forEach((day) => {
    try {
      let contentId = getRandomNumber(1, contentsData.length - 1);
      let content = contentsData[contentId];
      addItem(content, day);
    } catch (error) {
      console.error(error);
    }
  });
}

main();
