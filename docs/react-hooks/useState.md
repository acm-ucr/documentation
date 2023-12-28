---
sidebar_position: 1
---

# useState

Allows React applications to "remember" information in the form of state variables. Keeps track of information regardless of rerenders.

The `setState` operation is not an `O(1)` operation which may result in discrepancies explained further. It is more accurately described as an `async` operation.

## Initializing and Using a State Variable

```jsx
"use client";
import { useState } from "react";

const Component = () => {
  const [data, setData] = useState("Hello World");

  return <>{data}</>;
};
```

Let's walk through the code understanding each segment.

```jsx
"use client";
```

This is required whenever using React Hooks, it converts the given component/file from a React Server Component (RSC) to a React Client Component (RCC). This feature was introduced in React 18 and provides major performance benefits. However, when using RSC we are not able to take advantage of that performance boost at the cost of storing information.

```jsx
import { useState } from "react";
```

`useState` is not automatically provided to us and we must import it from React. There are multiple ways to import `useState`, however, the above method is the recommended manner.

```jsx
const [data, setData] = useState("Hello World");
```

This is the core of the `useState` hook. We define an array with 2 elements: a value and a function to change that value. In the scenario above we have the value `data` and a function `setData` which allows us to change the value of `data`. The value inside the `useState()` is the default value for when the component initially loads. Hence, when the above component initially loads, it will render `Hello World`.

```jsx
return <>{data}</>;
```

In order to use the `data` variable, we can use curly braces to escape the HTML and insert Javascript which will render the value of `data`.

## Async Operation

As mentioned before, `useState` is not a synchronous operation, but rather an asynchronous operation, which impacts the way information updates and is displayed. Consider the following example:

```jsx
const [counter, setCounter] = useState(0);

const handleClick = () => {
  setCounter(counter + 1);
  setCounter(counter + 1);
};
```

After the `handleClick` function is ran, we expect the value of `counter` to be 2, since we are adding 1 twice. However, in reality, it will set the value of `counter` to 1. This happens since when both function calls are fired, the value of counter is still 0 at the time, and when they both finish at relatively the same time, they update counter to be 1.

One improvement to the above function would be to utilize the previous value and increment based off of that, ensuring we always have the most up to date information.

```jsx
const [counter, setCounter] = useState(0);

const handleClick = () => {
  setCounter((prev) => prev + 1);
  setCounter((prev) => prev + 1);
};
```

When running `handleClick` now, we will get the expected value of 2, as it takes in the previous value and utilizes that. This is a very simple example and some refactoring can easily make this much better. In most cases, we will not need to use such syntax, instead we can do something of the following:

```jsx
const [counter, setCounter] = useState(0);

const handleClick = () => {
  setCounter(counter + 2);
};
```

This refactored version solves our problem and ensure we do not run into unnecessary overwrites. However, we still may run into situations where we need that updated value to run some other computation. Such as the following:

```jsx
const [counter, setCounter] = useState(0);

const handleClick = () => {
  setCounter(counter + 2);

  console.log(counter);
};
```

Here, we expect counter to have the updated value when we `console.log()` the value, however, we will see an outdated value. To counter this, we can refactor our code to the following:

```jsx
const [counter, setCounter] = useState(0);

const handleClick = () => {
  const updated = counter + 2;
  setCounter(updated);

  console.log(updated);
};
```

The refactored version now provides both operations the most updated value of counter as creating a regular Javascript variable is still a `O(1)` operation.
