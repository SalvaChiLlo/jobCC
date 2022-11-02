import fs from "fs";

process.argv.splice(0,2)
const content = JSON.stringify(process.argv);
console.log(content)
try {
  fs.mkdirSync("./output", {recursive: true})
  fs.writeFileSync('./output/ArgsToFile', content);
  // file written successfully
} catch (err) {
  console.error(err);
}
