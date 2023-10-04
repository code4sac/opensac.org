# How to add third-party libraries
This document describes how to add external backend and frontend libraries.

## Add to eleventy config
To use frontend libraries installed with NPM, add a new pass-through copy rule to the Eleventy configuration.
```js
eleventyConfig.addPassthroughCopy('./node_modules/bootstrap/dist/css/')
```
See: [Eleventy config documentation](/documentation/eleventy-config.md)

## CSS
The application loads main.css in the [base layout](/_includes/layouts/base.html). All imports should be added to the CSS file instead of in the HTML <head> when possible.

## JS
The application loads app.js in the [base layout](/_includes/layouts/base.html). All imports should be added to the Javascript file instead of in the HTML <head> when possible.