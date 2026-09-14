const fs = require('fs');

const path = 'src/pages/PartDetails.tsx';
let content = fs.readFileSync(path, 'utf8');

const productsStr = `
const PARTS = [
  { id: 1, name: 'Premium Heavy Duty Battery 70Ah' },
  { id: 2, name: 'Synthetic Motor Oil 5W-30 (5L)' },
  { id: 3, name: 'Ceramic Brake Pads (Front)' },
  { id: 4, name: 'All-Season Tire 205/55R16' },
  { id: 5, name: 'Engine Air Filter' },
  { id: 6, name: 'LED Headlight Bulbs H7 (Pair)' },
];
`;

content = content.replace('// Mock Product Data', productsStr + '\n// Mock Product Data');

fs.writeFileSync(path, content);
console.log("Fixed PartDetails.tsx");
