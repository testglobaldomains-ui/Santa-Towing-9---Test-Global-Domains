const fs = require('fs');

const path = 'src/pages/Sales.tsx';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('<Breadcrumbs')) {
  if (!content.includes('import Breadcrumbs')) {
    content = content.replace("import SEO from '@/components/seo/SEO';", "import SEO from '@/components/seo/SEO';\nimport Breadcrumbs from '@/components/ui/Breadcrumbs';");
  }

  content = content.replace(
    '<SEO title="Cars for Sale | New & Pre-Owned Vehicles | Santa Towing" description="Browse our inventory of quality inspected, reliable new and pre-owned vehicles. Find your perfect car with trusted automotive experts." canonical="/sales" />',
    '<SEO title="Cars for Sale | New & Pre-Owned Vehicles | Santa Towing" description="Browse our inventory of quality inspected, reliable new and pre-owned vehicles. Find your perfect car with trusted automotive experts." canonical="/sales" />\n\n      {/* Breadcrumb Navigation */}\n      <div className="bg-white border-b border-dark/10 py-4">\n        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n          <Breadcrumbs items={[{ label: \'Vehicle Sales\' }]} />\n        </div>\n      </div>'
  );
  
  fs.writeFileSync(path, content);
  console.log("Updated Sales.tsx");
}
