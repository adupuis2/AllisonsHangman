export interface PageMap {
  root: string;
  leaf: string;
}

export const getPagesFromWindowHref = (window: Window): PageMap => {
  const pageRegex = /\/([\w\d]+)/gi;
  const matches = window.location.href.match(pageRegex);
  const pages: PageMap = {
    root: null,
    leaf: null,
  };

  matches.map((match: string, index: number) => {
    const sliced = match.slice(1);
    if (index === 1) {
      pages.root = sliced;
    } else if (index === 2) {
      pages.leaf = sliced;
    }
  });
  return pages;
};
