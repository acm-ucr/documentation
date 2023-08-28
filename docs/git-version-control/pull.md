---
sidebar_position: 5
---

# Pulling Changes

During development, you will need to pull the changes from the remote git repository via `git pull`. This occurs since other developers will also be pushing changes and you will need their changes to continue working. You can pull changes from a particular branch via:

```bash
git pull origin branch_name
```

If the branch name is `acm-ucr/new-filter`, you can pull the branch's changes into your current branch via

```bash
git pull origin acm-ucr/new-filter
```

NOTE: If you need to pull a remote branch, you will need to [fetch new branches](./branch#fetching-remote-branches)
