import fs from 'fs';
import path from 'path';

const filesToFix = [
  'src/components/workshop-demos/DashboardFacturas.tsx',
  'src/components/workshop-demos/Ecommerce.tsx'
];

for (const file of filesToFix) {
  const absolutePath = path.join(process.cwd(), file);
  if (fs.existsSync(absolutePath)) {
    let content = fs.readFileSync(absolutePath, 'utf8');
    content = content.replace(/const springConfig = \{ type: "spring", stiffness: 300, damping: 30 \}(\r?\n)/g, 'const springConfig = { type: "spring", stiffness: 300, damping: 30 } as const$1');
    fs.writeFileSync(absolutePath, content);
    console.log(`Fixed ${file}`);
  }
}
