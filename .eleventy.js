module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy('CNAME');
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/favicon.ico');

  return {
    dir: {
      input: 'src',
      output: 'docs'
    },
    markdownTemplateEngine: 'njk'
  };
};
