import fs from 'fs/promises';
import path from 'path';

const ignoredItems = ['__snapshots__', '.DS_Store', 'README.md'];

function getBaseName(fileName) {
  return fileName.replace(/\.(js|ts)$/, '').replace(/\.test$/, '');
}

async function generateMarkdownStructure(dir, prefix = '') {
  let result = '';
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = {};

  for (const entry of entries) {
    if (ignoredItems.includes(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative('.', fullPath);
    const markdownPath = relativePath.replace(/\\/g, '/');

    if (entry.isDirectory()) {
      result += `${prefix}- 📁 [${entry.name}](${markdownPath})\n`;
      result += await generateMarkdownStructure(fullPath, `${prefix}  `);
    } else {
      const baseName = getBaseName(entry.name);
      if (!files[baseName]) {
        files[baseName] = { main: null, test: null };
      }
      if (entry.name.endsWith('.test.js') || entry.name.endsWith('.test.ts')) {
        files[baseName].test = markdownPath;
      } else {
        files[baseName].main = markdownPath;
      }
    }
  }

  for (const [baseName, file] of Object.entries(files)) {
    if (file.main && file.test) {
      result += `${prefix}- [${baseName}${path.extname(file.main)}](${file.main}) + [tests](${file.test})\n`;
    } else if (file.main) {
      result += `${prefix}- [${baseName}${path.extname(file.main)}](${file.main})\n`;
    } else if (file.test) {
      result += `${prefix}- [${baseName}.test${path.extname(file.test)}](${file.test})\n`;
    }
  }

  return result;
}


async function main() {
  try {
    const markdown = await generateMarkdownStructure('./src');
    const template = await fs.readFile('README.template.md', 'utf-8');
    const newReadme = template.replace('<generated_list>', markdown);
    await fs.writeFile('README.md', newReadme);

    console.log('README.md has been updated with the new structure.');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
