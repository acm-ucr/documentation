---
sidebar_position: 1
---

# Utility classes

> 💡 The [Tailwind docs](https://tailwindcss.com/docs) have excellent explanations and diagrams on each utility class. 

## Centering a div with Tailwind utility classes

Utility classes follow the format `{property}-{modifier}`. You apply them inside the `className` attribute within a JSX container.

Here is how you would use utility classes center a div **contained within a larger div** 

```html
<div className="flex items-center justify-center">
  <div>Centered content</div>
</div>
```

The `flex` class applies [flexbox](https://tailwindcss.com/docs/flex) to the container. The other two classes **only work when flex is applied**. `items-center` centers the child div within the parent div **vertically**.  `justify-center` centers the child div within the parent div **horizontally**
