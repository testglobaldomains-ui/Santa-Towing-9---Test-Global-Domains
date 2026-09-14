const fs = require('fs');

const path = 'src/pages/ServiceAreaDetails.tsx';
let content = fs.readFileSync(path, 'utf8');

const insertNavStr = `
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-8 mb-12 border-t border-dark/10">
          {(() => {
            const allAdverts = Array.from(new Set(TOWING_ADVERTS.map(ad => ad.district))).sort();
            const currentIndex = allAdverts.findIndex(d => d === district);
            const prevDistrict = currentIndex > 0 ? allAdverts[currentIndex - 1] : null;
            const nextDistrict = currentIndex < allAdverts.length - 1 ? allAdverts[currentIndex + 1] : null;
            
            const toSlug = (name) => name.toLowerCase().replace(/ /g, '-');

            return (
              <>
                <div className="w-full sm:w-1/2 flex justify-start">
                  {prevDistrict ? (
                    <Link to={\`/service-areas/\${toSlug(prevDistrict)}\`} className="group flex items-center gap-3 hover:bg-white p-3 rounded-[1px] transition-colors max-w-full">
                      <div className="w-10 h-10 shrink-0 bg-white shadow-sm flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                        <ChevronRight className="w-5 h-5 rotate-180" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">Previous Area</div>
                        <div className="text-sm font-bold text-dark group-hover:text-accent truncate">{prevDistrict}</div>
                      </div>
                    </Link>
                  ) : (
                    <Link to="/service-areas" className="group flex items-center gap-3 hover:bg-white p-3 rounded-[1px] transition-colors max-w-full">
                      <div className="w-10 h-10 shrink-0 bg-white shadow-sm flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                        <ChevronRight className="w-5 h-5 rotate-180" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">Back</div>
                        <div className="text-sm font-bold text-dark group-hover:text-accent truncate">All Areas</div>
                      </div>
                    </Link>
                  )}
                </div>
                <div className="w-full sm:w-1/2 flex justify-end">
                  {nextDistrict && (
                    <Link to={\`/service-areas/\${toSlug(nextDistrict)}\`} className="group flex items-center gap-3 hover:bg-white p-3 rounded-[1px] transition-colors max-w-full text-right">
                      <div className="overflow-hidden">
                        <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">Next Area</div>
                        <div className="text-sm font-bold text-dark group-hover:text-accent truncate">{nextDistrict}</div>
                      </div>
                      <div className="w-10 h-10 shrink-0 bg-white shadow-sm flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </Link>
                  )}
                </div>
              </>
            );
          })()}
        </div>
`;

if (!content.includes('Previous Area')) {
  // Insert at the bottom of the page, right before the generic content section
  content = content.replace('        {/* Generic Content Section */}', insertNavStr + '\n        {/* Generic Content Section */}');
  
  if (!content.includes('ChevronRight')) {
    content = content.replace('MapPin', 'MapPin, ChevronRight');
  }

  fs.writeFileSync(path, content);
  console.log("Updated ServiceAreaDetails.tsx");
}
