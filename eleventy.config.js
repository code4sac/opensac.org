const yaml = require('js-yaml')
const sass = require("sass")
const path = require("node:path");

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
  config.addTemplateFormats("scss");
  config.addExtension("scss", {
    outputFileExtension: "css",
    compile: function (inputContent, inputPath) {
      let parsed = path.parse(inputPath);
      let result = sass.compileString(inputContent, {
        loadPaths: [
          parsed.dir || ".",
          this.config.dir.includes,
          ""
        ]
      })
      return (data) => {
        return result.css;
      }
    }
  })
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