const fs = require('fs');

const path = 'src/pages/PartDetails.tsx';
let content = fs.readFileSync(path, 'utf8');

const insertNavStr = `
            {/* Previous / Next Part Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 mt-12 border-t border-dark/10">
              {(() => {
                const currentIndex = PARTS.findIndex(p => p.id === PRODUCT.id);
                const prevPart = currentIndex > 0 ? PARTS[currentIndex - 1] : null;
                const nextPart = currentIndex < PARTS.length - 1 ? PARTS[currentIndex + 1] : null;
                
                return (
                  <>
                    <div className="w-full sm:w-1/2 flex justify-start">
                      {prevPart && (
                        <Link to={\`/parts/\${prevPart.id}\`} className="group flex items-center gap-3 hover:bg-slate-50 p-3 rounded-[1px] transition-colors max-w-full">
                          <div className="w-10 h-10 shrink-0 bg-slate-100 flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                          </div>
                          <div className="overflow-hidden">
                            <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">Previous Part</div>
                            <div className="text-sm font-bold text-dark group-hover:text-accent truncate">{prevPart.name}</div>
                          </div>
                        </Link>
                      )}
                    </div>
                    <div className="w-full sm:w-1/2 flex justify-end">
                      {nextPart && (
                        <Link to={\`/parts/\${nextPart.id}\`} className="group flex items-center gap-3 hover:bg-slate-50 p-3 rounded-[1px] transition-colors max-w-full text-right">
                          <div className="overflow-hidden">
                            <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">Next Part</div>
                            <div className="text-sm font-bold text-dark group-hover:text-accent truncate">{nextPart.name}</div>
                          </div>
                          <div className="w-10 h-10 shrink-0 bg-slate-100 flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
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

if (!content.includes('Previous Part')) {
  content = content.replace('          {/* 3. Product Summary Panel', insertNavStr + '\n          {/* 3. Product Summary Panel');
  fs.writeFileSync(path, content);
  console.log("Updated PartDetails.tsx");
}
