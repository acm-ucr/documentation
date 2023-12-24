---
sidebar_position: 2
---

# Flexbox

## Centering a child div inside parent div using Flexbox
> 💡 Flexbox in Tailwind [explanation + visualization](https://tailwindcss.com/docs/flex)



Here is how you would add utility classes to a **parent div** to center its **child div**

```html
<div className="flex items-center justify-center">
  <div>child container</div>
</div>
```

The `flex` class applies flexbox to the container. Flexbox allows containers to stretch and change order and orientation of their child containers. See [this link](https://tailwindcss.com/docs/flex) for a visualization of flexbox in Tailwind. The other two classes **only work when flex is applied**. 

`items-center` centers the child div within the parent div **vertically**.

  `justify-center` centers the child div within the parent div **horizontally**

## Adding spacing around a container

For the most part, use Flexbox instead of margins and paddings spacing elements. Choose margins and paddings for basic spacing needs within or around elements, ideal for simpler layout adjustments.

If you need a button to have more space around its inner text, for example, you can add padding around the text like so:

```html
<button className="px-12 py-1 border border-solid border-black rounded-full">
  JOIN US
</button>
```

![Join us button](join-us-button.png)

The `px-12` class adds horizontal padding and the `py-1` class adds vertical padding.

## Nesting containers inside each other

> 💡 Difference between [flex-col and flex-row](https://tailwindcss.com/docs/flex-direction)

Flexbox can organize align child containers on top of each other (`flex-col`) or next to each other (applied by default or with `flex-row`).

You can nest Flexbox containers to create more dynamic layouts.

```html
import { FaDiscord } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

<div className="flex flex-col p-2 rounded-lg border border-solid border-black">
  <div>Staff Member</div>
  <div className="flex gap-1 justify-center">
    <button className="py-1 px-4 border border-solid border-black rounded-full">discord</button>
    <button className="py-1 px-4 border border-solid border-black rounded-full">instagram</button>
  </div>
</div>
```
![Staff member container](staff-member-component.png)
Notice how there is an outer `flex-col` container that only applies flex to its direct children and displays a column of the name and the group of buttons. The inner `flex-row` container (same thing as omitting `flex-row`) only applies flex to its direct children and displays a row of two buttons. See [here](https://tailwindcss.com/docs/flex-direction) a visualization of flex-row and flex-col



