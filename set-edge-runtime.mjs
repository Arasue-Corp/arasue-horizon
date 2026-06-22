import fs from 'fs';
import path from 'path';

function walkDir(dir) {
    let files = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            files = files.concat(walkDir(file));
        } else {
            if (file.endsWith('page.tsx') || file.endsWith('layout.tsx') || file.endsWith('route.ts')) {
                files.push(file);
            }
        }
    });
    return files;
}

const targetFiles = walkDir('./src/app');

targetFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('export const runtime')) {
        content = `export const runtime = 'edge';\n` + content;
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
