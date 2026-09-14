const fs = require('fs');
let content = fs.readFileSync('src/pages/VehicleDetails.tsx', 'utf8');

content = content.replace(
  /<div className="w-10 h-10 bg-accent\/10 rounded-xl flex items-center justify-center shrink-0">\s*<MapPin className="w-5 h-5 text-accent" \/>\s*<\/div>/g,
  `<div className="w-10 h-10 bg-[#192C2C] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">\n                      <MapPin className="w-5 h-5 text-white group-hover:text-[#192C2C]" />\n                    </div>`
);

content = content.replace(
  /<div className="w-10 h-10 bg-accent\/10 rounded-xl flex items-center justify-center shrink-0">\s*<Phone className="w-5 h-5 text-accent" \/>\s*<\/div>/g,
  `<div className="w-10 h-10 bg-[#192C2C] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">\n                      <Phone className="w-5 h-5 text-white group-hover:text-[#192C2C]" />\n                    </div>`
);

fs.writeFileSync('src/pages/VehicleDetails.tsx', content);
console.log('Fixed VehicleDetails.tsx');
