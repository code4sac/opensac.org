const yaml = require('js-yaml')

/**
 * Configuration for Eleventy.
 *
 * **Note:** See webpack more information about building the public/ folder.
 *
 * Supports:
 * - Yaml data files
 *
 * Example return object:
 * ```js
 * {
 * dir: {
 *   // includes: '_includes',
 *   // layouts: '_includes/layouts'
 * },
 * // If your site deploys to a subdirectory, change `pathPrefix`.
 * // Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix
 *
 * // When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
 * // it will transform any absolute URLs in your HTML to include this
 * // folder name and does **not** affect where things go in the output folder.
 * pathPrefix: '/'
 * }
 * ```
 *
 * Example adding node_module libraries:
 * ```js
 * addPassthroughCopy({
 * './node_modules/prismjs/themes/prism-okaidia.css': '/css/prism-okaidia.css'
 * })
 * ```
 *
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
