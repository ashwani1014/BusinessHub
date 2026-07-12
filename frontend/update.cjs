const fs = require('fs');
const filesToUpdate = [
  { path: 'src/pages/AddBusiness.jsx', needsImport: false },
  { path: 'src/pages/BusinessDetails.jsx', needsImport: false },
  { path: 'src/pages/Directory.jsx', needsImport: false },
  { path: 'src/pages/EditBusiness.jsx', needsImport: false },
  { path: 'src/pages/Categories.jsx', needsImport: true },
  { path: 'src/pages/Home.jsx', needsImport: true },
  { path: 'src/components/AdBanner.jsx', needsImport: true, importPath: '../utils/api' }
];

filesToUpdate.forEach(f => {
  let content = fs.readFileSync(f.path, 'utf8');
  content = content.replace(/fetch\(/g, 'fetchApi(');
  if (f.needsImport) {
    const importStr = f.importPath ? `import { fetchApi } from '${f.importPath}';\n` : `import { fetchApi } from '../utils/api';\n`;
    content = importStr + content;
  }
  fs.writeFileSync(f.path, content);
  console.log('Updated ' + f.path);
});
