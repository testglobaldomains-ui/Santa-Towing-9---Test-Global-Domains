const fs = require('fs');
let content = fs.readFileSync('src/pages/Repairs.tsx', 'utf8');

const replacement = `<Link to={service.href || "/booking"} className="flex-1 bg-primary hover:bg-black text-white text-center py-2 px-2.5 rounded-[50px] text-xs font-bold transition-all flex items-center justify-center">
                        <span>{service.href ? "Learn More" : "Book for Repair"}</span>
                      </Link>`;

content = content.replace(/<Link to="\/booking" className="flex-1 bg-primary hover:bg-black text-white text-center py-2 px-2\.5 rounded-\[50px\] text-xs font-bold transition-all flex items-center justify-center">\s*<span>Book for Repair<\/span>\s*<\/Link>/, replacement);

fs.writeFileSync('src/pages/Repairs.tsx', content);
console.log('Updated Repairs loop');
