---
sidebar_position: 2
---

# useEffect

Allows React applications and components to exhibit various behaviors throughout the lifecycle of various variables and the overall component lifecycle.

## Initializing and Using an useEffect

`useEffect` is often used for API calls, setting timers and intervals and non-periodical changes. The hook follows the following base structure:

```jsx
"use client";
import { useEffect } from "react";

const Component = () => {
  useEffect(() => {
    console.log("Inside useEffect");
  }, []);

  return <>Hello World</>;
};
```

Let's walk through the code understanding each segment.

```jsx
"use client";
```

This is required whenever using React Hooks, it converts the given component/file from a React Server Component (RSC) to a React Client Component (RCC). This feature was introduced in React 18 and provides major performance benefits. However, when using RSC we are not able to take advantage of that performance boost at the cost of storing information.

```jsx
import { useEffect } from "react";
```

`useEffect` is not automatically provided to us and we must import it from React. There are multiple ways to import `useEffect`, however, the above method is the recommended manner.

```jsx
useEffect(() => {
  console.log("Inside useEffect");
}, []);
```

This is the core of the `useEffect` hook. We call the hook with 2 parameters: a function and an array dependency list.

The function is what runs when items in the array dependency list are changed. In the case of an empty array, the function only runs at the beginning when the component mounts. If there are variables inside such as `[counter]` then the function would run every time the `counter` variable is changed.

## Example Scenarios

### Calling an API

```jsx
"use client";
import { useEffect } from "react";

const Component = () => {
  useEffect(() => {
    fetch("/api/data", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <>Hello World</>;
};
```

### Setting an Interval

```jsx
"use client";
import { useEffect } from "react";

const Component = () => {
  useEffect(() => {
    const id = setInterval(() => console.log("A second has passed"), 1000);

    return () => clearInterval(id);
  }, []);

  return <>Hello World</>;
};
```
