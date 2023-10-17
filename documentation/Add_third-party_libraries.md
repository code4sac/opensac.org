# How to add third-party libraries to the Open Sacramento Website
This document describes how to add external backend and frontend libraries.

## Add to eleventy config
To use frontend libraries installed with NPM, add a new pass-through copy rule to the Eleventy configuration.
```js
eleventyConfig.addPassthroughCopy('./node_modules/bootstrap/dist/css/')
```
See: [Eleventy config documentation](/documentation/eleventy-configuration.md)

## Frontend
To add a new CSS or JS library, add it to the head block in the layout.
```liquid
{%block head%}
<link rel="stylesheet" href="/public/css/my-style.css">
<script src="/public/js/my-script.js"></script>
{%endblock%}
```