import fs from "fs";
import path from "path";

const iconsJsonPath = path.resolve(__dirname, "icons.json");
const outputDir = path.resolve(__dirname, "src", "components", "icons");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const icons = JSON.parse(fs.readFileSync(iconsJsonPath, "utf-8"));

const createComponent = (iconId: string, svgContent: string) => {
  const componentName = iconId
    .replace(/-([a-z])/g, (g) => g[1].toUpperCase())
    .replace(/^./, (str) => str.toUpperCase());

  svgContent = svgContent.replace(/stroke="black"/g, 'stroke="currentColor"');
  svgContent = svgContent.replace(/fill="none"/g, 'fill="currentColor"');

  const componentTemplate = `
import React, { forwardRef } from 'react';

const ${componentName} = forwardRef((props, ref) => (
  ${svgContent.replace("<svg", "<svg {...props} ref={ref}")}
));

export default ${componentName};
  `;

  fs.writeFileSync(
    path.join(outputDir, `${componentName}.tsx`),
    componentTemplate
  );
};

Object.entries(icons).forEach(([key, value]) => {
  createComponent(key, (value as any).svg);
});
