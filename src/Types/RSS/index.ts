export type RSSItem = {
  title: string;
  link: string;
  pubDate: string;
  'content:encoded': string;
  'content:encodedSnippet': string;
  content: string;
  contentSnippet: string;
  guid: string;
  isoDate: string;
};

export type RSSResults = {
  items: Array<RSSItem>;
};
