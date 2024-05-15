const path = require('path');
const Image = require('@11ty/eleventy-img');

async function imageWithClassShortcode(
  src,
  cls,
  alt,
  aria=true,
) {
  let pathPrefix = '';

  if (process.env.BASEURL) {
    pathPrefix = process.env.BASEURL
  }

  const ext = path.extname(src);
  const fileType = ext.replace('.', '');

  const metadata = await Image(src, {
    formats: [fileType],
    outputDir: './_site/img/',
  });

  const data = metadata[fileType] ? metadata[fileType][0] : metadata.jpeg[0];
  return `<img src="${pathPrefix}${data.url}" class="${cls}" alt="${alt}" aria-hidden="${aria}" loading="lazy" decoding="async">`;
};


async function imageShortcode(src, alt, aria) {
  return await imageWithClassShortcode(src, '', alt, aria)
};

module.exports = {
  imageWithClassShortcode,
  imageShortcode
}
