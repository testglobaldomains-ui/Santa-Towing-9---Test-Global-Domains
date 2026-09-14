const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
};

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Regex to match a div wrapping an icon, typically looking like:
  // <div className="... rounded-xl|rounded-full|rounded-lg|rounded-2xl|rounded-[50px] ... flex items-center justify-center ... group-hover:... ">
  //   <Icon className="... text-primary group-hover:text-white ..." />
  // </div>
  // This is a bit complex for a simple regex, let's use a replacer function for the whole file.

  // Let's replace the wrapper div classes:
  // Basically, if a div has `rounded-xl`, `rounded-full`, `rounded-lg`, `rounded-2xl`, `rounded-[50px]`, AND `flex items-center justify-center`, AND is immediately followed by an `<Icon...` or `<Wrench...` etc., we replace its bg classes.

  // A safer approach for the files we identified:
  const patches = [
    {
      file: 'src/pages/Fleet.tsx',
      find: `<div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-accent transition-colors">\n                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />\n                  </div>`,
      repl: `<div className="w-14 h-14 bg-[#192C2C] rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-white transition-colors">\n                    <Icon className="w-7 h-7 text-white group-hover:text-[#192C2C] transition-colors" />\n                  </div>`
    },
    {
      file: 'src/pages/Repairs.tsx',
      find: `<div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">\n                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />\n                  </div>`,
      repl: `<div className="w-14 h-14 bg-[#192C2C] rounded-xl flex items-center justify-center mb-6 group-hover:bg-white transition-colors">\n                    <Icon className="w-7 h-7 text-white group-hover:text-[#192C2C] transition-colors" />\n                  </div>`
    },
    {
      file: 'src/pages/ServiceAreaDetails.tsx',
      find: `<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">\n                  <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />\n                </div>`,
      repl: `<div className="w-12 h-12 rounded-lg bg-[#192C2C] flex items-center justify-center shrink-0 group-hover:bg-white transition-colors">\n                  <Icon className="w-6 h-6 text-white group-hover:text-[#192C2C] transition-colors" />\n                </div>`
    },
    {
      file: 'src/pages/ServiceAreaTowingService.tsx',
      find: `<div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 mb-6">\n              <Icon className="w-8 h-8 text-primary" />\n            </div>`,
      repl: `<div className="w-16 h-16 rounded-2xl bg-[#192C2C] flex items-center justify-center shrink-0 mb-6">\n              <Icon className="w-8 h-8 text-white" />\n            </div>`
    },
    {
      file: 'src/pages/Haulage.tsx',
      find: `<div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold">\n                    <Truck className="w-6 h-6" />\n                  </div>`,
      repl: `<div className="w-12 h-12 bg-[#192C2C] text-white rounded-xl flex items-center justify-center font-bold">\n                    <Truck className="w-6 h-6" />\n                  </div>`
    },
    {
      file: 'src/pages/Haulage.tsx',
      find: `<div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors shrink-0">\n                        <IconComponent className="w-5 h-5" />\n                      </div>`,
      repl: `<div className="w-10 h-10 rounded-xl bg-[#192C2C] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#192C2C] transition-colors shrink-0">\n                        <IconComponent className="w-5 h-5" />\n                      </div>`
    },
    {
      file: 'src/pages/Haulage.tsx',
      find: `<div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">\n                      <Icon className="w-4 h-4" />\n                    </div>`,
      repl: `<div className="w-8 h-8 rounded-lg bg-[#192C2C] text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#192C2C] transition-colors">\n                      <Icon className="w-4 h-4" />\n                    </div>`
    },
    {
      file: 'src/pages/Parts.tsx',
      find: `<div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-[1px] flex items-center justify-center text-white group-hover:bg-accent transition-colors">\n                        <Icon className="w-4 h-4" />\n                      </div>`,
      repl: `<div className="w-8 h-8 bg-[#192C2C] backdrop-blur-md rounded-[1px] flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#192C2C] transition-colors">\n                        <Icon className="w-4 h-4" />\n                      </div>`
    },
    {
      file: 'src/pages/Sitemap.tsx',
      find: `<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-900 text-accent flex items-center justify-center shrink-0 shadow-sm">\n                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />\n                      </div>`,
      repl: `<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#192C2C] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-white group-hover:text-[#192C2C] transition-colors">\n                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />\n                      </div>`
    },
    {
      file: 'src/pages/VehicleDetails.tsx',
      find: `<div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0">\n                  <MapPin className="w-5 h-5 text-dark" />\n                </div>`,
      repl: `<div className="w-10 h-10 bg-[#192C2C] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#192C2C] transition-colors text-white">\n                  <MapPin className="w-5 h-5" />\n                </div>`
    },
    {
      file: 'src/pages/VehicleDetails.tsx',
      find: `<div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">\n                  <MapPin className="w-5 h-5 text-accent" />\n                </div>`,
      repl: `<div className="w-10 h-10 bg-[#192C2C] text-white rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#192C2C] transition-colors">\n                  <MapPin className="w-5 h-5" />\n                </div>`
    }
  ];

  let modified = false;
  patches.forEach(patch => {
    if (file.endsWith(patch.file.split('/').pop())) {
      if (content.includes(patch.find)) {
        content = content.replace(patch.find, patch.repl);
        modified = true;
      }
    }
  });

  if (modified) {
    fs.writeFileSync(file, content);
    console.log('Patched', file);
  }
});
