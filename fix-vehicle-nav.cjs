const fs = require('fs');

const path = 'src/pages/VehicleDetails.tsx';
let content = fs.readFileSync(path, 'utf8');

const insertNavStr = `
            {/* Previous / Next Vehicle Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 mt-12 border-t border-dark/10">
              {(() => {
                const currentId = Number(id) || 1;
                const prevId = currentId > 1 ? currentId - 1 : null;
                const nextId = currentId < 8 ? currentId + 1 : null; // Assuming 8 vehicles based on mock data length
                
                return (
                  <>
                    <div className="w-full sm:w-1/2 flex justify-start">
                      {prevId && (
                        <Link to={\`/sales/\${prevId}\`} className="group flex items-center gap-3 hover:bg-slate-50 p-3 rounded-[1px] transition-colors max-w-full">
                          <div className="w-10 h-10 shrink-0 bg-slate-100 flex items-center justify-center rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                            <ChevronRight className="w-5 h-5 rotate-180" />
                          </div>
                          <div className="overflow-hidden">
                            <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">Previous Vehicle</div>
                            <div className="text-sm font-bold text-dark group-hover:text-accent truncate">View Listing #{prevId}</div>
                          </div>
                        </Link>
                      )}
                    </div>
                    <div className="w-full sm:w-1/2 flex justify-end">
                      {nextId && (
                        <Link to={\`/sales/\${nextId}\`} className="group flex items-center gap-3 hover:bg-slate-50 p-3 rounded-[1px] transition-colors max-w-full text-right">
                          <div className="overflow-hidden">
                            <div className="text-xs text-dark/50 font-bold uppercase tracking-wider mb-0.5">Next Vehicle</div>
                            <div className="text-sm font-bold text-dark group-hover:text-accent truncate">View Listing #{nextId}</div>
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

if (!content.includes('Previous Vehicle')) {
  content = content.replace('          {/* 3. Vehicle Summary Panel (Sticky Sidebar) */}', insertNavStr + '\n          {/* 3. Vehicle Summary Panel (Sticky Sidebar) */}');
  fs.writeFileSync(path, content);
  console.log("Updated VehicleDetails.tsx");
}
