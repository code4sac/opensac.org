const yaml = require('js-yaml')

/**
 * Configuration for Eleventy.
 * See: /documentation/eleventy-configuration.md
 * Supports:
 * - Yaml data files
 * - SASS
 *
 * @parameter config Eleventy config
 */
const eleventyConfig = config => {
  config.ignores.add('README.md')
  config.addPassthroughCopy('./public/')
  config.addPassthroughCopy('./node_modules/swiper/')
  config.addDataExtension('yml', contents => yaml.load(contents))
  config.addWatchTarget('./styles/')
  return {
    dir: {
      input: 'content',
      includes: '../_includes'
    },
    compileOptions: {
      cache: false
    }
  }
}

module.exports = eleventyConfig