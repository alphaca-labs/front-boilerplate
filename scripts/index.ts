import fs from "fs";
import path from "path";

const outputDir = path.resolve(__dirname, "src", "components", "icons");
const indexPath = path.join(outputDir, "index.ts");

let indexContent = "";

fs.readdirSync(outputDir).forEach((file) => {
  if (file.endsWith(".tsx")) {
    const componentName = file.replace(".tsx", "");
    indexContent += `export { default as ${componentName} } from './${componentName}';\n`;
  }
});

fs.writeFileSync(indexPath, indexContent);

console.log("인덱스 파일 생성 완료!");
