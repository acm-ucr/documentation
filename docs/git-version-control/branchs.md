---
sidebar_position: 3
---

# Branches

## Creating a Branch

When working on an issue/ticket, it is important to create ONE branch per ONE issue. This ensures that changes are broken into their smallest pieces, making the pull request review process much easier. The primary way to create a new branch is `git branch`, however there is a shortcut using `git checkout`. The standard to create feature branches should follow the below format:

```bash
git checkout -b branch_name
```

If your username is `acm-ucr` and your feature is adding a new filter, you can create a branch as such:

```bash
git checkout -b acm-ucr/new-filter
```

The `-b` indicates to create a new branch and checkout to said branch. If you prefer using the individual commands, you can break them down into:

```bash
git branch new_branch_name
git checkout new_branch_name
```

## Fetching Remote Branches

If you need to fetch remote branches, you can use `git fetch` as

```bash
git fetch origin
```

NOTE: `git fetch` does not pull the changes into your current branch. If you need to pull the changes into your current branch, then refer to [pulling changes](./pull)

## Checking Out a Branch

If you need to checkout to another branch, either to create a new branch or checkout another developer's branch, you can use `git checkout`.

```bash
git checkout branch_name
```

If the desired branch is named `acm-ucr/new-filter`, then you can use:

```bash
git checkout acm-ucr/new-filter
```
