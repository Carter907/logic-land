
export async function getSource(fetch, url: { pathname: string }) {

  const response = await fetch(`/markdown-pages${url.pathname}.md`);
  const contents = await response.text();



  return {
    source: contents,
  }
}
