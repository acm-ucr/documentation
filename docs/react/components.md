---
sidebar_position: 1
---

# Components

## Creating a Component

React components are written in `JSX` files. ACM @ UCR's naming convention requires `JSX` files to be in Pascal case. Components should also be named one word describing the component.

These component files are typically placed in `/src/components` in an ACM project.

```
acm-ucr-website # root folder
└── src
    ├── app
    ├── components
    │	└── Component.jsx
	└── data
```

React components are written similarly to Javascript functions. Every component must have exactly one parent tag to nest all `HTML`/`JSX` tags. The `return` holds any JSX elements. The component should be exported in order to use the component elsewhere in the code.

```jsx title="/src/components/Component.jsx"
const First = () => {
	return (
		<div>
			Hello World
		</div>
	);
}

export default First;
```