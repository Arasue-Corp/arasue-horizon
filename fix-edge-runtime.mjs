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
    
    const lines = content.split('\n');
    let hasUseClient = false;
    let runtimeLineIndex = -1;
    let useClientLineIndex = -1;
    
    for (let i = 0; i < Math.min(10, lines.length); i++) {
        if (lines[i].includes('"use client"') || lines[i].includes("'use client'")) {
            hasUseClient = true;
            useClientLineIndex = i;
        }
        if (lines[i].includes("export const runtime = 'edge';")) {
            runtimeLineIndex = i;
        }
    }
    
    if (hasUseClient && runtimeLineIndex !== -1 && runtimeLineIndex < useClientLineIndex) {
        let newLines = lines.filter(line => !line.includes('"use client"') && !line.includes("'use client'") && !line.includes("export const runtime = 'edge';"));
        fs.writeFileSync(file, '"use client";\nexport const runtime = \'edge\';\n' + newLines.join('\n'), 'utf8');
        console.log(`Fixed ${file}`);
    }
});
