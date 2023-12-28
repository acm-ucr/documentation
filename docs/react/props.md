---
sidebar_position: 3
---

# Props

Props in React is short for "properties". Props allow parent components to pass down information to child components.

## Reading Props

Components can read props by listing different properties and wrapped around curly brackets. In the example below, the properties passed in the Card component is `name`, `age`, and `state`. You can embed the props information using the curly brackets `{}`.

```jsx title="/src/components/Card.jsx"
const Card = ({ name, age, state }) => {
	return (
		<div>
			<p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>US State: {state}</p>
		</div>
	)
}

export default Card;
```

:::note
In some documentation or code, props can be declared like `(props)`. It is best to keep the props destructed like `({ prop1, prop2, ... })`, rather than passing in a single argument. This allows developers to quickly identify props in components without searching for them in the code.
:::

## Passing Down Props

You can pass down information to the child component in the same way you would write an `HTML` attribute.

```jsx title="/src/components/Profile.jsx"
import Card from "@/components/Card.jsx";

const Profile = () => {
	return (
		<div>
			<Card name="Alice" age={43} state="California" />
            <Card name="Bob" age={65} state="Texas" />
            <Card name="Charlie" age={32} state="New York"/>
		</div>
	)
}

export default Profile;
```