# Eleventy configuration for opensac.org
Opensac.org is run as a static site with [Eleventy (11ty)](https://www.11ty.dev/).

## Configuration
### Example adding node_module libraries:
```js
addPassthroughCopy({
'./node_modules/prismjs/themes/prism-okaidia.css': '/css/prism-okaidia.css'
})
```
### Example return object:
```js
{
  dir: {
    // includes: '_includes',
    // layouts: '_includes/layouts'
  },
  // If your site deploys to a subdirectory, change `pathPrefix`.
  // Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

  // When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
  // it will transform any absolute URLs in your HTML to include this
  // folder name and does **not** affect where things go in the output folder.
  pathPrefix: '/'
}
```
**Note:** See webpack for more information about building the public/ folder.

## Feature support
- YAML data files. The default data files are in JSON format. YAML files have features like comments. This support is provided with [js-yaml](https://github.com/nodeca/js-yaml) through an Eleventy data extension. See https://www.11ty.dev/docs/data-custom/.