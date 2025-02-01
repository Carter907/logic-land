import fs from 'fs'
import path from 'path';

export async function getSource(url: { pathname: string }) {

  fs.readdir(process.cwd(), (err, files) => {
    if (err) {
      return console.error('Unable to scan directory: ' + err);
    }

    console.log('Files in directory:');
    files.forEach((file) => {
      console.log(file);
    });
  });
  const filePath = path.join("/markdown-pages", `${url.pathname}.md`);
  const contents = fs.readFileSync(filePath, 'utf-8');

  return {
    source: contents,
  }
}
