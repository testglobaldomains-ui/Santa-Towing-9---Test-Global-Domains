const fs = require('fs');
const path = require('path');

const dir = './src/components/sections';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).map(f => path.join(dir, f));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  let lines = content.split('\n');

  let modified = false;

  for(let i=0; i<lines.length; i++) {
    // Look for lines containing <h2 and font-extrabold
    // Or in Hero section, the h1 className contains font-extrabold
    if ((lines[i].includes('<h2') || lines[i].includes('<h1') || lines[i].includes('text-3xl') || lines[i].includes('text-4xl')) && lines[i].includes('font-extrabold')) {
        // Exclude lines that are clearly not main section titles if any, but looking at the grep, all h2s with font-extrabold are main section titles.
        // Wait, "text-2xl sm:text-3xl font-extrabold" is a h3 in PartsAndWhyUs.tsx. Is that a main section title?
        // "text-3xl sm:text-4xl lg:text-5xl font-extrabold" is the standard pattern.
        // Hero has "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold".

        if (lines[i].includes('text-4xl')) {
            lines[i] = lines[i].replace('font-extrabold', 'font-semibold');
            modified = true;
        }
    }
  }

  if (modified) {
    fs.writeFileSync(file, lines.join('\n'));
    console.log('Patched', file);
  }
});

