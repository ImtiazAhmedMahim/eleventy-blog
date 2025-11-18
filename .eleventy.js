const { DateTime } = require("luxon");
const readingTime = require("eleventy-plugin-reading-time");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/script.js");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // tag filter
  eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ["all", "finance", "post", "posts"].indexOf(tag) === -1
    );
  });
  eleventyConfig.addPlugin(readingTime);
  // post sorting
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").sort((a, b) => {
      return b.date - a.date; // Newest first
    });
  });
  // limiting description text
  eleventyConfig.addNunjucksFilter("trimText", function (text) {
    if (text.length >= 40) return text.substring(0, 40) + "...";
    else return text;
  });
  //limit filter
  eleventyConfig.addFilter("limit", function (array, limit) {
    return array.slice(0, limit);
  });
  eleventyConfig.addFilter("head", (array, n) => {
    if (!Array.isArray(array) || array.length === 0) {
      return [];
    }
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
// module.exports = function (eleventyConfig) {
//   // limit filter
//   eleventyConfig.addFilter("limit", function (array, limit) {
//     return array.slice(0, limit);
//   });
// };
