import fs from "fs";

const pkg = fs.readFileSync("package.json", "utf-8");
console.log(pkg);

const info = {
  contenidoStr: pkg,
  contenidoObj: JSON.parse(pkg),
  size: fs.statSync("package.json").size,
};

console.log(info);

async function writeFile() {
  try {
    await fs.promises.writeFile("info.json", JSON.stringify(info));
    const infoJSON = JSON.parse(await fs.promises.readFile("info.json", "utf-8"));
    console.log(infoJSON);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

writeFile();
