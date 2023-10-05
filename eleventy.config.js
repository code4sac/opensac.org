const yaml = require('js-yaml')
const eleventySass = require("eleventy-sass")

/**
 * Configuration for Eleventy.
 * See: /documentation/eleventy-configuration.md
 * Supports:
 * - Yaml data files
 * - SASS
 * @parameter config Eleventy config
 */
const eleventyConfig = config => {
  config.ignores.add('README.md')
  config.addPassthroughCopy('./public/')
  config.addPassthroughCopy('./node_modules/bootstrap/dist/css/')
  config.addPassthroughCopy('./node_modules/tailwindcss/')
  config.addDataExtension('yml', contents => yaml.load(contents))
  config.addPlugin(eleventySass)
  return {
    dir: {
      input: 'content',
      includes: '../_includes'
    }
  }
}

module.exports = eleventyConfig