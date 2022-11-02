import fs from "fs";
import config from './config.json'

process.argv.splice(0,2)
const content = JSON.stringify(process.argv);
console.log(content)
console.log(JSON.stringify(config))
try {
  fs.mkdirSync("./output", {recursive: true})
  fs.writeFileSync('./output/ArgsToFile', JSON.stringify(config));
  // file written successfully
} catch (err) {
  console.error(err);
}
