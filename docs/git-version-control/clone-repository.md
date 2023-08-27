---
sidebar_position: 2
---

# Clone a Repository

Navigate to a Github Repository, you should be greeted with a `README.md` that shows information regarding the repository. Click on the green `Code` button, which should show you options for `HTTPS`, `SSH`, `GitHub CLI`,

## Using HTTPS (Recommended)

Copy the `HTTPS` link and run the following command in terminal.

```bash
git clone HTTPS_LINK
```

If using the [Official ACM Website Repository](https://github.com/acm-ucr/acm-hydra/tree/dev), cloning the repository will look similiar to the following:

```
git clone https://github.com/acm-ucr/acm-hydra
```

## Using SSH

Prerequistes: Ensure you have an SSH key. You can configure one with [Generating a new SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

Copy the `SSH` link and run the following command in terminal.

```bash
git clone SSH_LINK
```

If using the [Official ACM Website Repository](https://github.com/acm-ucr/acm-hydra/tree/dev), cloning the repository will look similiar to the following:

```
git clone git@github.com:acm-ucr/acm-hydra.git
```
