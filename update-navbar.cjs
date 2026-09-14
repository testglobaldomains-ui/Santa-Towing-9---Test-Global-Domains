const fs = require('fs');
let content = fs.readFileSync('src/components/layout/NavBar.tsx', 'utf8');

// Quick Links removal
content = content.replace(/'Body Works', /, '');

// Mobile menu removal
content = content.replace(/\s*<Link to="\/body-works".*?>Body Works<\/Link>/, '');

fs.writeFileSync('src/components/layout/NavBar.tsx', content);
console.log('Updated NavBar.tsx');
