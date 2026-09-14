const fs = require('fs');

const path = 'src/pages/ServiceAreaTowingService.tsx';
let content = fs.readFileSync(path, 'utf8');

const insertNavStr = `
        {/* Back to Area Overview */}
        <div className="mb-6 flex justify-start">
          <Link to={\`/service-areas/\${areaSlug}\`} className="inline-flex items-center gap-2 text-sm font-bold text-dark/60 hover:text-accent transition-colors bg-white px-4 py-2 border border-dark/10 rounded-[50px] shadow-sm">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to {district} Area
          </Link>
        </div>
`;

if (!content.includes('Back to {district} Area')) {
  // Insert at the top of the main content area, after Breadcrumbs
  content = content.replace('<div className="mt-6">', insertNavStr + '\n          <div className="mt-6">');
  fs.writeFileSync(path, content);
  console.log("Updated ServiceAreaTowingService.tsx");
}
