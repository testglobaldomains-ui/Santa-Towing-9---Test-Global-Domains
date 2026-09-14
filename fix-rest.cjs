const fs = require('fs');
const patches = [
  {
    file: 'src/pages/PrivacyPolicy.tsx',
    find: `<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">\n                        <MapPin className="w-5 h-5" />\n                      </div>`,
    repl: `<div className="w-10 h-10 rounded-xl bg-[#192C2C] flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#192C2C] transition-colors shrink-0">\n                        <MapPin className="w-5 h-5" />\n                      </div>`
  },
  {
    file: 'src/pages/VehicleDetails.tsx',
    find: `<div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0">\n                      <MapPin className="w-5 h-5 text-dark" />\n                    </div>`,
    repl: `<div className="w-10 h-10 bg-[#192C2C] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">\n                      <MapPin className="w-5 h-5 text-white group-hover:text-[#192C2C]" />\n                    </div>`
  },
  {
    file: 'src/pages/VehicleDetails.tsx',
    find: `<div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">\n                    <MapPin className="w-5 h-5 text-accent" />\n                  </div>`,
    repl: `<div className="w-10 h-10 bg-[#192C2C] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">\n                    <MapPin className="w-5 h-5 text-white group-hover:text-[#192C2C]" />\n                  </div>`
  }
];

patches.forEach(patch => {
  let content = fs.readFileSync(patch.file, 'utf8');
  if (content.includes(patch.find)) {
    content = content.replace(patch.find, patch.repl);
    fs.writeFileSync(patch.file, content);
    console.log('Patched', patch.file);
  }
});
