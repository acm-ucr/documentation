---
sidebar_position: 2
---


# Theme

> 💡 You can find color theme styles in the repo's `tailwind.config.js` file

> ❗ Do not use default Tailwind color styles like `red-500` or `black`. always use the colors defined in `tailwind.config.js`


Every ACM website has a personal Tailwind theme in `tailwind.config.js` based on its design doc that has custom colors. This is to avoid hardcoded and inconsistent color usage.

### Colors

The color style names are prefaced by the name of the website (e.g. `acm-blue-100`, `hackathon-red`, etc.).

You can directly attach these color styles to Tailwind utility classes.
In the R-Tools repo, for example, you could color the background of a container teal with the following utility class

```html
<div className="bg-rtools-teal-100">
```



