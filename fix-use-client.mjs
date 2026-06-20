import fs from 'fs';
import path from 'path';

const DEMOS_DIR = path.join(process.cwd(), 'src/components/workshop-demos');

const files = fs.readdirSync(DEMOS_DIR).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(DEMOS_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  let changed = false;

  // Check if "use client" is present and not at the very top
  if (content.includes('"use client"') || content.includes("'use client'")) {
    const lines = content.split('\n');
    let useClientIndex = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('"use client"') || lines[i].includes("'use client'")) {
        useClientIndex = i;
        break;
      }
    }

    if (useClientIndex > 0) {
      // Remove it from current position and put it at the top
      const useClientLine = lines.splice(useClientIndex, 1)[0];
      lines.unshift(useClientLine);
      content = lines.join('\n');
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Moved use client to top in ${file}`);
  }
}
