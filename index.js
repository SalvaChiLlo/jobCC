const translate = require("translate");
const fs = require("fs");
const config = require('./config.json')

async function translateText() {
  if (config.DEEPL_API_KEY === undefined || config.SOURCE_TEXT === undefined) {
    throw new Error(`
USO:
    1. En el archivo config.json debes de indicar:
      1.1. DEEPL_API_KEY --> Que será la clave para poder habilitar la traducción.
      1.2. SOURCE_TEXT --> Texto que quieres traducir
    `)
  }

  if (process.argv[2] === undefined) {
    throw new Error(`
USO:
  ${process.argv[0].split('/').splice(-1)} ${process.argv[1].split('/').splice(-1)} <language-to-translate>
    `)
  }

  translate.engine = "deepl";
  translate.key = config.DEEPL_API_KEY;

  const text = await translate(config.SOURCE_TEXT, process.argv[2]);
  fs.mkdirSync("./output", { recursive: true })
  fs.writeFileSync('./output/TranslatedText', text);
}

translateText();
