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

## Importing

Since we have exported the `First` component from the previous example, we can then import that component elsewhere in our code using the `import` binding. The first two lines of the code below is one way of importing modules.

```jsx title="/src/components/Another.jsx"
import First from "@/components/Component.jsx";

const Second = () => {
	return (
		<div>
			<First />
		</div>
	);
}

export default Second;
```