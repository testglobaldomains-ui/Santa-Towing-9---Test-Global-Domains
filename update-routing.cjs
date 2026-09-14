const fs = require('fs');
let content = fs.readFileSync('src/pages/Services.tsx', 'utf8');

content = content.replace(/service\.title === 'Auto Parts & Batteries'/g, "service.title === 'Genuine Auto Parts'");

fs.writeFileSync('src/pages/Services.tsx', content);
console.log('Updated Services.tsx routing');
