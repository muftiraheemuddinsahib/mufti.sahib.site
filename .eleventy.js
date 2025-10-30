module.exports = function (eleventyConfig) {
  // copy static files (fonts, PDFs)
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("admin");
  // basic template formats
  eleventyConfig.setTemplateFormats(["md", "njk", "html"]);
  return {
    dir: {
      input: "content",
      includes: "../_includes",
      output: "dist"   // Cloudflare Pages publish directory
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
