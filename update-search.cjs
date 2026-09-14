const fs = require('fs');
let content = fs.readFileSync('src/pages/Search.tsx', 'utf8');

// Remove Body Works & Spray Painting entry
content = content.replace(/\s*\{\s*id:\s*4,\s*title:\s*'Body Works & Spray Painting'[\s\S]*?\},/g, '');

fs.writeFileSync('src/pages/Search.tsx', content);
console.log('Updated Search.tsx');
