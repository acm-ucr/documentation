---
sidebar_position: 2
---

# Importing and Exporting

## Exporting

You can use the component file elsewhere in the code by exporting it. If you need to export one component, you should use the `export default` binding. You can only use one `export default` per module.

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

For exporting multiple things in a file, use `export` instead.

```js title="/src/data/Data.js"
export const LIST1 = [/*...*/]
export const LIST2 = [/*...*/]
```

## Importing

Since we have exported the `First` component from the previous example, we can then import that component elsewhere in our code using the `import` binding. The first two lines of the code below is one way of importing modules. Anything exported with `export default` should not be wrapped in curly braces. Anything exported with `export` only should be wrapped in curly braces.

```jsx title="/src/components/Another.jsx"
import First from "@/components/Component.jsx";
import { LIST1, LIST2 } from "@/data/Data.js";

const Second = () => {
	return (
		<div>
			<First />
		</div>
	);
}

export default Second;
```