---
sidebar_position: 3
---

# Image

In order to display images, HTML provides an inbuilt `<img>` tag to use, however, there are some benefits to using `<Image>` provided by Next.js. In SSR applications, it will optimize the images using an inbuilt service, and with SSG applications we can use external loaders to optimize images. Providing a `src` attribute is required which can be in the form of `base64` or an image type (ie. png, jpeg, jpg). In most cases you will be using an image stored in the public folder, which should be imported and then used.

## Using `<Image>`

### Imported Image

```jsx
import Image from "next/Image";
import profile from "@/public/profile.png";

const Component = () => {
  return (
    <>
      <Image src={profile} />
    </>
  );
};
```

### Base64 Image

```jsx
import Image from "next/Image";

const Component = () => {
  return (
    <>
      <Image src="data:image/png;base64,ABCD..." />
    </>
  );
};
```

### Not Imported Image

```jsx
import Image from "next/Image";

const Component = () => {
  return (
    <>
      <Image src="/profile" />
    </>
  );
};
```
