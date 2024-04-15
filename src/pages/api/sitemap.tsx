// pages/api/sitemap.tsx

import type { NextApiRequest, NextApiResponse } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

const generateSitemapXml = async (): Promise<string> => {
  const smStream = new SitemapStream({
    hostname: 'https://royalkidsschool.com',
  });

  // Add static pages
  smStream.write({ url: '/', changefreq: 'weekly', priority: 0.9 });

  // Add dynamic pages
  // Example: fetching dynamic URLs from an API or database
  // const dynamicUrls = await fetchDynamicUrls();
  // dynamicUrls.forEach(url => smStream.write({ url }));

  smStream.end();

  const sitemapXml = await streamToPromise(Readable.from(smStream)).then(
    (data) => data.toString(),
  );
  return sitemapXml;
};

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const sitemapXml = await generateSitemapXml();
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemapXml);
    res.end();
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).end();
  }
}
