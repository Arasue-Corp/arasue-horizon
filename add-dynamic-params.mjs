import fs from 'fs';

const files = [
  'src/app/[lang]/(forge)/layout.tsx',
  'src/app/[lang]/(holding)/layout.tsx',
  'src/app/[lang]/(labs)/layout.tsx',
  'src/app/[lang]/(media)/layout.tsx',
  'src/app/[lang]/(protection)/layout.tsx',
  'src/app/[lang]/(workshop)/layout.tsx',
  'src/app/[lang]/(workshop)/workshop/demo/[demoId]/page.tsx'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('export const dynamicParams = false;')) {
        content = "export const dynamicParams = false;\n" + content;
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Injected dynamicParams=false into ${file}`);
    }
});
