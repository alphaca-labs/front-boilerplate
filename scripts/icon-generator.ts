import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const iconsJsonPath = path.resolve(
  __dirname,
  "..",
  "packages",
  "icons",
  "icons.json"
);

const outputDir = path.resolve(
  __dirname,
  "..",
  "packages",
  "icons",
  "src",
  "components",
  "icons"
);

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
import { ForwardedRef, forwardRef } from 'react';

const ${componentName} = forwardRef((props, ref: ForwardedRef<SVGSVGElement>) => (
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
