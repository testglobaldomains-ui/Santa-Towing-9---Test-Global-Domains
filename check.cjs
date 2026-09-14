const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
};

const files = walk('./src');
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  for(let j=0; j<lines.length; j++) {
    if((lines[j].includes('rounded-full') || lines[j].includes('rounded-[50px]') || lines[j].includes('rounded-xl') || lines[j].includes('rounded-lg')) && 
       lines[j].includes('flex items-center justify-center') &&
       !lines[j].includes('bg-[#192C2C]') && !lines[j].includes('bg-transparent')) {
       
       let iconText = "";
       for(let k = j; k <= j+3 && k < lines.length; k++) {
         if (lines[k].match(/<([A-Z][a-zA-Z0-9]*) /) && !lines[k].includes('<div') && !lines[k].includes('<button') && !lines[k].includes('<a') && !lines[k].includes('<Link') && !lines[k].includes('text-white') && !lines[k].includes('text-[#192C2C]')) {
           iconText = lines[k].trim();
           break;
         }
       }
       if (iconText) {
         console.log(file, j+1, lines[j].trim());
       }
    }
  }
});
