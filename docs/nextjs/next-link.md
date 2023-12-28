---
sidebar_position: 2
---

# Link

When linking to other pages, sections or external sites, a link tag is required. Next.js provides a `<Link>` component that we can use that extends off of the traditional `<a>` tag. As a result, we do not need to use `<a>` tags at all. `href` is a required attribute is required that will specify where the link will take the user.

## Using `<Link>`

### Internal Routes

```jsx
import Link from "next/link";

const Component = () => {
  return (
    <>
      <Link href="/dashboard">Dashboard</Link>
    </>
  );
};
```

### External Routes

```jsx
import Link from "next/link";

const Component = () => {
  return (
    <>
      <Link href="https://acm.cs.ucr.edu/">ACM Website</Link>
    </>
  );
};
```

### Opening the Link in a New Tab

```jsx
import Link from "next/link";

const Component = () => {
  return (
    <>
      <Link href="https://acm.cs.ucr.edu/" target="_blank">
        ACM Website
      </Link>
    </>
  );
};
```

### Applying styling

```jsx
import Link from "next/link";

const Component = () => {
  return (
    <>
      <Link href="https://acm.cs.ucr.edu/" className="bg-black text-white">
        ACM Website
      </Link>
    </>
  );
};
```
