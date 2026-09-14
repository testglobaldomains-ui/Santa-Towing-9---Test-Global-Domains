const fs = require('fs');
let content = fs.readFileSync('src/pages/Services.tsx', 'utf8');

// Remove Body Works & Spray Painting
content = content.replace(/\s*\{\s*id:\s*7,\s*title:\s*'Body Works & Spray Painting'[\s\S]*?\},/, '');

// Change Auto Parts & Batteries to just Genuine Auto Parts or Auto Parts
content = content.replace(/'Auto Parts & Batteries'/, "'Genuine Auto Parts'");
content = content.replace(/genuine OEM replacement parts, premium batteries,/i, 'Genuine OEM replacement parts');

fs.writeFileSync('src/pages/Services.tsx', content);
console.log('Updated Services.tsx');
