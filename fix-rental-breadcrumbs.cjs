const fs = require('fs');

const path = 'src/pages/Rental.tsx';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('<Breadcrumbs')) {
  if (!content.includes('import Breadcrumbs')) {
    content = content.replace("import SEO from '@/components/seo/SEO';", "import SEO from '@/components/seo/SEO';\nimport Breadcrumbs from '@/components/ui/Breadcrumbs';");
  }

  content = content.replace(
    '<SEO title="Premium Car Rentals | Affordable Daily & Weekly Hire | Santa Towing" description="Rent top-quality SUVs, sedans, and economy cars for daily, weekly, or monthly use. Affordable rates and well-maintained vehicles." canonical="/rental" />',
    '<SEO title="Premium Car Rentals | Affordable Daily & Weekly Hire | Santa Towing" description="Rent top-quality SUVs, sedans, and economy cars for daily, weekly, or monthly use. Affordable rates and well-maintained vehicles." canonical="/rental" />\n\n      {/* Breadcrumb Navigation */}\n      <div className="bg-slate-50 border-b border-dark/10 py-4">\n        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n          <Breadcrumbs items={[{ label: \'Vehicle Rentals\' }]} />\n        </div>\n      </div>'
  );
  
  fs.writeFileSync(path, content);
  console.log("Updated Rental.tsx");
}
