---
sidebar_position: 4
---

# Mapping and Filtering

If you have a list of data to render multiple times, you can use Javascript's `map` function to iterate through each data in an array or object. This prevents hard-coding data directly, and renders components more modularly (meaning we can add data without changing the code).

# Mapping

In the example below, we have a list of `PRODUCE` objects stored in the data folder.

```js title="/src/data/Produce.js"
export const PRODUCE = [
    {
        name: "Apple",
        type: "Fruit",
        price: 2,
    },
    {
        name: "Lettuce",
        type: "Vegetable",
        price: 3,
    },
] 
```

You can iterate through each produce objects using the `.map()` function. In the example below, we iterate and render each element in `PRODUCE`. The parameter of `map` method is a callback function taking in `(element, index)`. The function returns the code block displaying produce information. The parent tag of the map method must have a key attrbute.



```jsx title="/src/components/Grocery.jsx"
import { PRODUCE } from "@/data/Produce.js";

const Grocery = () => {
    return(
        <>
            {PRODUCE.map((produce, index) => (
                <div key={index}>
                    <p>Item: {produce.name}</p>
                    <p>Price: {produce.price}</p>
                </div>
            ))}
        </>
    );
}

export default Grocery;
```
## Filtering

The `filter` method is similar to the `map` method, however it will return a filtered list based on the given condition. The sample code below shows that `filter` will return a list of fruits. In order to render the items of fruits, you will need to map through the filtered `PRODUCE` list.

```jsx title="/src/components/Grocery.jsx"
const Grocery = () => {
    return(
        <>
            {PRODUCE
                .filter((produce) => produce.type === "Fruit")
                .map((produce, index) => (
                    <div key={index}>
                        <p>Item: {produce.name}</p>
                        <p>Price: {produce.price}</p>
                    </div>
            ))}
        </>
    );
}
```