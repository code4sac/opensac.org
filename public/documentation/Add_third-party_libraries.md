# How to add third-party libraries to the Open Sacramento Website

To use frontend libraries installed with NPM, first add a new pass-through copy rule to the Eleventy configuration. To use the library, you can chose one of two options. 

- Add to the [base layout](/_includes/layouts/base.html) HTML
- (or) import in [main.scss](/styles/main.scss) or [app.js](/public/js/app.js).

> Make sure to add /node_modules/ with a forward slash at the start or the URL.

### Add to eleventy config

```js
eleventyConfig.addPassthroughCopy('./node_modules/bootstrap/dist/css/')
```
See: [Eleventy config documentation](/documentation/eleventy-configuration.md)

### Add to HTML <head>

```liquid
<link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.css">
<script src="/node_modules/bootstrap/dist/js/bootstrap.js"></script>
```
### Import in Javascript

```javascript
import Bootstrap from '/node_modules/bootstrap/dist/js/bootstrap.mjs';
```

### Import in SASS

```sass
@import '/node_modules/bootstrap/dist/css/bootstrap.css';
```
