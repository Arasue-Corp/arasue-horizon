import fs from 'fs';
import path from 'path';

const filesToFix = [
  'src/app/[lang]/(labs)/labs/contact/page.tsx',
  'src/app/[lang]/(labs)/labs/shop/page.tsx',
  'src/app/[lang]/(labs)/labs/story/page.tsx',
  'src/app/[lang]/(media)/media/contact/page.tsx',
  'src/app/[lang]/(media)/media/creators/page.tsx',
  'src/app/[lang]/(media)/media/work/page.tsx'
];

for (const file of filesToFix) {
  const absolutePath = path.join(process.cwd(), file);
  if (fs.existsSync(absolutePath)) {
    let content = fs.readFileSync(absolutePath, 'utf8');
    content = content.replace(/\|\| dict\.[a-z_]+\.[a-z_]+\.content/g, '');
    fs.writeFileSync(absolutePath, content);
    console.log(`Fixed ${file}`);
  }
}
