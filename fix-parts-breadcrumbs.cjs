const fs = require('fs');

const path = 'src/pages/Parts.tsx';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('<Breadcrumbs')) {
  if (!content.includes('import Breadcrumbs')) {
    content = content.replace("import SEO from '@/components/seo/SEO';", "import SEO from '@/components/seo/SEO';\nimport Breadcrumbs from '@/components/ui/Breadcrumbs';");
  }

  content = content.replace(
    '<SEO title="Genuine Auto Parts & Accessories | Santa Towing" description="Shop high-quality OEM and aftermarket spare parts, batteries, tires, and accessories for all major vehicle makes and models." canonical="/parts" />',
    '<SEO title="Genuine Auto Parts & Accessories | Santa Towing" description="Shop high-quality OEM and aftermarket spare parts, batteries, tires, and accessories for all major vehicle makes and models." canonical="/parts" />\n\n      {/* Breadcrumb Navigation */}\n      <div className="bg-slate-50 border-b border-dark/10 py-4">\n        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n          <Breadcrumbs items={[{ label: \'Auto Parts\' }]} />\n        </div>\n      </div>'
  );
  
  fs.writeFileSync(path, content);
  console.log("Updated Parts.tsx");
}
