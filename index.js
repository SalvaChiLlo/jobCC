const translate = require("translate");
const fs = require("fs");
const config = require('./config.json')

async function translateText() {
  console.log(config.DEEPL_API_KEY)
  translate.engine = "deepl";
  translate.key = config.DEEPL_API_KEY;

  console.log(process.argv[2])
  const text = await translate("Hello world this is the CC project", process.argv[2]);
  fs.mkdirSync("./output", { recursive: true })
  fs.writeFileSync('./output/TranslatedText', text);
}

translateText();
