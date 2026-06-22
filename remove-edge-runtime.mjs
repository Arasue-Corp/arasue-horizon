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

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace("export const runtime = 'edge';\n", "");
  fs.writeFileSync(f, c, 'utf8');
});
