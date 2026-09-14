const fs = require('fs');
let content = fs.readFileSync('src/pages/Booking.tsx', 'utf8');

// Remove Body Works from ServiceType
content = content.replace(/ \| 'Body Works'/g, '');

// Remove Body Works from SERVICES
content = content.replace(/\s*\{\s*id:\s*'Body Works'.*?\},/g, '');

fs.writeFileSync('src/pages/Booking.tsx', content);
console.log('Updated Booking.tsx');
