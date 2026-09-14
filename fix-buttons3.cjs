const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // First, completely strip ` rounded-[50px]` and `rounded-[50px]` that was added previously by my script.
  // Wait, I can't just strip it everywhere because some original buttons might have been 50px.
  // But wait, the previous prompt was about 1px.
  
  // Let's just fix the conflicts:
  // If we have `rounded-[1px]` AND `rounded-[50px]` in the same className, we need to decide.
  content = content.replace(/className="([^"]+)"/g, (match, classNames) => {
    
    // Check if it's an actual CTA button.
    const isPrimaryCTA = (classNames.includes('bg-primary') || classNames.includes('bg-accent') || classNames.includes('bg-dark')) && 
                         (classNames.includes('hover:bg-') || classNames.includes('hover:text-')) && 
                         (classNames.includes('px-') || classNames.includes('py-') || classNames.includes('p-')) &&
                         classNames.includes('text-white') && !classNames.includes('group-hover') && !classNames.includes('aspect-');
                         
    const isSecondaryCTA = classNames.includes('border') && classNames.includes('hover:bg-') && classNames.includes('px-');
    
    const isIconButton = classNames.match(/\bw-[0-9]+\bh-[0-9]+/) && classNames.includes('hover:') && (classNames.includes('p-') || classNames.includes('flex items-center'));

    // Wait, let's just make sure EVERYTHING that is a `<button>` gets rounded-[50px].
    // And any `<a>` or `<Link>` that looks like a button gets it.
    
    return match;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
  }
});
