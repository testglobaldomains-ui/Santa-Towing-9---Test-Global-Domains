const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');

// Footer links removal
content = content.replace(/\s*\{\s*name:\s*'Body Works & Spraying',\s*path:\s*'\/body-works'\s*\},/, '');

fs.writeFileSync('src/components/layout/Footer.tsx', content);
console.log('Updated Footer.tsx');
