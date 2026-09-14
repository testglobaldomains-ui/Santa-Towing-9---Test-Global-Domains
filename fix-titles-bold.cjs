const fs = require('fs');
const path = require('path');

const dir = './src/components/sections';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).map(f => path.join(dir, f));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let lines = content.split('\n');

  let modified = false;

  for(let i=0; i<lines.length; i++) {
    // Look for main section titles that have font-semibold
    if ((lines[i].includes('<h2') || lines[i].includes('<h1') || lines[i].includes('text-3xl') || lines[i].includes('text-4xl')) && lines[i].includes('font-semibold')) {
        if (lines[i].includes('text-4xl') || lines[i].includes('text-3xl')) {
            lines[i] = lines[i].replace('font-semibold', 'font-bold');
            modified = true;
        }
    }
  }

  if (modified) {
    fs.writeFileSync(file, lines.join('\n'));
    console.log('Patched', file);
  }
});
