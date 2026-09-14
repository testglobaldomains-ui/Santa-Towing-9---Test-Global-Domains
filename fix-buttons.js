const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(file => {
        let filepath = path.join(dir, file);
        if (fs.statSync(filepath).isDirectory()) {
            walk(filepath, callback);
        } else if (filepath.endsWith('.tsx') || filepath.endsWith('.ts')) {
            callback(filepath);
        }
    });
}

function processFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf8');
    let original = content;

    // We want to find className="..." that contains button-like classes
    // and replace any rounded-.* with rounded-[50px]
    
    // Pattern to match className="..."
    content = content.replace(/className=(["'{][^"'}]+["'}])/g, (match, classStr) => {
        // Check if it looks like a CTA button
        // Has px- and py- and some background color or border styling that makes it a button
        if (
            classStr.includes('px-') &&
            classStr.includes('py-') &&
            (classStr.includes('bg-') || classStr.includes('border')) &&
            (classStr.includes('hover:') || classStr.includes('shadow-') || classStr.includes('font-bold') || classStr.includes('font-semibold')) &&
            // exclude pure structural cards/badges
            !classStr.includes('absolute top-') && 
            !classStr.includes('absolute right-') &&
            !(classStr.includes('text-xs') && classStr.includes('absolute'))
        ) {
            // It's likely a CTA button
            // Let's replace any rounded class with rounded-[50px]
            // Be careful to not replace rounded-full if it's already there? The prompt says "to 50px".
            
            // Regex for rounded classes
            let newClassStr = classStr.replace(/\brounded(?:-(?:none|sm|md|lg|xl|2xl|3xl|full|\[.*?\]))?\b/g, 'rounded-[50px]');
            
            // Only update if it actually changed
            if (newClassStr !== classStr) {
                // If the class contains something that implies it's a structural div like a card...
                // Quick check to avoid actual cards. Cards usually have flex-col, h-full, or something.
                if (classStr.includes('flex-col h-full bg-white')) {
                    return match; // Ignore the service cards
                }
                
                return `className=${newClassStr}`;
            }
        }
        return match;
    });

    if (original !== content) {
        console.log(`Updated ${filepath}`);
        fs.writeFileSync(filepath, content, 'utf8');
    }
}

walk('./src', processFile);
