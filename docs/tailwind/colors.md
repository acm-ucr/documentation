---
sidebar_position: 3
---


# Colors

> 💡 You can find color theme styles in the repo's `tailwind.config.js` file

> ❗ Do not use default Tailwind color styles like `red-500` or `black`. always use the colors defined in `tailwind.config.js`


Every ACM website has a personal Tailwind theme in `tailwind.config.js` based on its design doc that has custom colors. This is to avoid hardcoded and inconsistent color usage.

## Solid colors

The color style names are prefaced by the name of the website (e.g. `acm-blue-100`, `hackathon-red`, etc.).

You can directly attach these color styles to Tailwind utility classes.

In the R-Tools repo, for example, you could color the background of a container teal with the `bg-rtools-teal-100` class

```html
<button className="bg-rtools-teal-100 px-12 py-1 border border-solid border-black rounded-full">
  JOIN US
</button>
```

![Alt text](join-us-button-color.png)


## Gradient colors

> 💡  For more color gradient variations see the [Tailwind docs](https://tailwindcss.com/docs/gradient-color-stops)

To add a left-to-right background gradient, apply the `bg-gradient-to-r` class, pick the left color with `from-{color}` and the right color with `to-{color}`.

```html
<button className="bg-gradient-to-r from-rtools-teal-100 to-rtools-purple-200 px-12 py-1 border border-solid border-black rounded-full">
  JOIN US
</button>
```

![Alt text](join-us-button-gradient.png)
