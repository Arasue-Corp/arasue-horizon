import fs from 'fs';
import path from 'path';

const DEMOS_DIR = path.join(process.cwd(), 'src/components/workshop-demos');

const files = fs.readdirSync(DEMOS_DIR).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(DEMOS_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  let changed = false;

  // Add import Image from 'next/image' if not present
  if (content.includes('<img') && !content.includes("import Image from 'next/image'")) {
    content = `import Image from 'next/image'\n` + content;
    changed = true;
  }

  // Find all <img ... /> tags
  const imgRegex = /<img\s+src=(["'{`].*?["'`}])\s+alt=(["'{`].*?["'`}])\s+className=(["'{`].*?["'`}])\s*\/?>(<\/img>)?/g;
  
  content = content.replace(imgRegex, (match, src, alt, className) => {
    changed = true;
    
    // Remove w-full and h-full from className, as we use fill
    let newClass = className.replace(/w-full/g, '').replace(/h-full/g, '').replace(/\s+/g, ' ').trim();
    if (newClass.startsWith('" ')) newClass = newClass.replace('" ', '"');
    if (newClass.startsWith("' ")) newClass = newClass.replace("' ", "'");
    if (newClass.startsWith("` ")) newClass = newClass.replace("` ", "`");

    return `<div className="relative w-full h-full"><Image src=${src} alt=${alt} fill className=${newClass} /></div>`;
  });

  // Handle <img className="..." src="..." alt="..." /> if any
  const imgRegexAlt = /<img\s+className=(["'{`].*?["'`}])\s+src=(["'{`].*?["'`}])\s+alt=(["'{`].*?["'`}])\s*\/?>(<\/img>)?/g;
  content = content.replace(imgRegexAlt, (match, className, src, alt) => {
    changed = true;
    let newClass = className.replace(/w-full/g, '').replace(/h-full/g, '').replace(/\s+/g, ' ').trim();
    return `<div className="relative w-full h-full"><Image src=${src} alt=${alt} fill className=${newClass} /></div>`;
  });

  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed images in ${file}`);
  }
}
