const fs = require('fs');
let content = fs.readFileSync('src/pages/Repairs.tsx', 'utf8');

const additionalServices = `  { icon: ShieldCheck, title: 'Auto Body Works', desc: 'Collision repair, dent removal, and premium oven-baked spray painting to restore your vehicle to factory condition.', href: '/body-works' },
  { icon: Zap, title: 'Car Batteries', desc: 'Battery testing, replacement, and sales of premium battery brands for reliable starting power.', href: '/parts' },\n`;

// Insert them into REPAIR_SERVICES
if (!content.includes('Auto Body Works')) {
  content = content.replace(/const REPAIR_SERVICES = \[/, 'const REPAIR_SERVICES = [\n' + additionalServices);
}

fs.writeFileSync('src/pages/Repairs.tsx', content);
console.log('Updated Repairs.tsx');
