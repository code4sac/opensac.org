const yaml = require('js-yaml')

/**
 * Configuration for Eleventy.
 * See: /documentation/eleventy-config.md
 * Supports:
 * - Yaml data files
 * @parameter config Eleventy config
 */
const eleventyConfig = config => {
  config.ignores.add('README.md')
  config.addPassthroughCopy({
    './public/': '/'
  });
  config.addDataExtension('yml', contents => yaml.load(contents))
  return {
    dir: {
      input: 'content',
      includes: '../_includes'
    }
  }
}

module.exports = eleventyConfig