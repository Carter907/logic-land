import fs from 'fs'
import path from 'path';

export async function getSource(url: { pathname: string }) {

  const filePath = path.join("src/markdown-pages", `${url.pathname}.md`);
  const contents = fs.readFileSync(filePath, 'utf-8');

  return {
    source: contents,
  }
}
