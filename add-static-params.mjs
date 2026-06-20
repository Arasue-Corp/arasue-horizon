import fs from 'fs';
import path from 'path';

const APP_DIR = path.join(process.cwd(), 'src/app/[lang]');

const folders = fs.readdirSync(APP_DIR).filter(f => fs.statSync(path.join(APP_DIR, f)).isDirectory());

const generateFunc = `
export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}
`;

for (const folder of folders) {
  const layoutPath = path.join(APP_DIR, folder, 'layout.tsx');
  if (fs.existsSync(layoutPath)) {
    let content = fs.readFileSync(layoutPath, 'utf-8');
    if (!content.includes('generateStaticParams')) {
      content += '\n' + generateFunc;
      fs.writeFileSync(layoutPath, content);
      console.log(`Added generateStaticParams to ${folder}/layout.tsx`);
    }
  }
}
