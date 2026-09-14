const fs = require('fs');

const path = 'src/pages/Blog.tsx';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('<Breadcrumbs')) {
  // We need to import Breadcrumbs if not present
  if (!content.includes('import Breadcrumbs')) {
    content = content.replace("import SEO from '@/components/seo/SEO';", "import SEO from '@/components/seo/SEO';\nimport Breadcrumbs from '@/components/ui/Breadcrumbs';");
  }

  // Insert breadcrumbs right after the <SEO /> component in <main>
  content = content.replace(
    '<SEO title="Automotive Blog & News | Santa Towing Ghana" description="Read the latest automotive news, vehicle maintenance tips, and towing advice from the experts at Santa Towing." canonical="/blog" />',
    '<SEO title="Automotive Blog & News | Santa Towing Ghana" description="Read the latest automotive news, vehicle maintenance tips, and towing advice from the experts at Santa Towing." canonical="/blog" />\n\n      {/* Breadcrumb Navigation */}\n      <div className="bg-white border-b border-dark/10 py-4">\n        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n          <Breadcrumbs items={[{ label: \'Blog\' }]} />\n        </div>\n      </div>'
  );
  
  fs.writeFileSync(path, content);
  console.log("Updated Blog.tsx");
}
