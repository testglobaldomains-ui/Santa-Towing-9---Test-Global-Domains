const fs = require('fs');
let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

// Remove Auto Body Works and Car Batteries from SERVICES
content = content.replace(/\s*\{\s*id:\s*7,\s*title:\s*'Auto Body Works'.*?\},/, '');
content = content.replace(/\s*\{\s*id:\s*9,\s*title:\s*'Car Batteries'.*?\},/, '');

// If Spray Painting is separate, maybe we leave it? The prompt says "Remove Auto Body Works ... Remove Car Batteries". 
// But "Spray Painting" is id 8. If they are standalone, let's look at mockData.ts
fs.writeFileSync('src/data/mockData.ts', content);
console.log('Updated mockData.ts');
