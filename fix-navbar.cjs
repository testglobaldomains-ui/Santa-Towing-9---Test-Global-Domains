const fs = require('fs');

const path = 'src/components/layout/NavBar.tsx';
let content = fs.readFileSync(path, 'utf8');

// The desktop links are right after:
// <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
// <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>

if (!content.includes('to="/sitemap" className="hover:text-accent transition-colors"')) {
  content = content.replace(
    '<Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>',
    '<Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>\n          <Link to="/sitemap" className="hover:text-accent transition-colors">Sitemap</Link>'
  );
  content = content.replace(
    '<Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>',
    '<Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>\n          <Link to="/sitemap" className="hover:text-accent transition-colors">Sitemap</Link>'
  ); // For sticky and non-sticky navs (if they are duplicated)
  
  fs.writeFileSync(path, content);
  console.log("Updated NavBar.tsx");
}
