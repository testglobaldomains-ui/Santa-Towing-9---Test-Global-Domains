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
  
  // We want to replace rounded-md, rounded-lg, rounded-xl, rounded-2xl, rounded-3xl with rounded-[1px]
  // BUT only on card-like elements. Card-like indicators:
  // - Contains 'shadow' OR 'border' OR 'bg-'
  // - Usually has 'p-' or 'overflow-hidden'
  // Let's match className="..."
  content = content.replace(/className="([^"]+)"/g, (match, classNames) => {
    // Determine if this is a card or card-like container
    const isCardLike = (
      (classNames.includes('shadow') || classNames.includes('border') || classNames.includes('bg-')) &&
      (!classNames.includes('rounded-full')) && 
      (!classNames.includes('rounded-[50px]')) // Exclude pills/buttons
    );
    
    // Some buttons have 'bg-primary' and 'rounded-md', we shouldn't change them if they are clearly buttons.
    const isButton = classNames.includes('hover:bg-') && (classNames.includes('px-') || classNames.includes('py-')) && !classNames.includes('shadow-xl') && classNames.includes('text-white') && !classNames.includes('group');
    
    // Also skip icons containers usually w-10 h-10, w-12 h-12, w-14 h-14, w-16 h-16
    const isIconContainer = /\bw-1[0-6]\b/.test(classNames) && /\bh-1[0-6]\b/.test(classNames);
    
    // Also skip form inputs
    const isInput = classNames.includes('focus:ring') || classNames.includes('focus:border');
    
    // Also skip badges
    const isBadge = classNames.includes('text-xs') && classNames.includes('uppercase') && classNames.includes('tracking-wider');

    if (isCardLike && !isButton && !isIconContainer && !isInput && !isBadge) {
      let newClassNames = classNames.replace(/\brounded-(sm|md|lg|xl|2xl|3xl|t-2xl|b-2xl|t-xl|b-xl)\b/g, 'rounded-[1px]');
      return `className="${newClassNames}"`;
    }
    
    return match;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
  }
});
console.log('Done');
