---
sidebar_position: 4
---

# Pushing Changes

After the changes have been made, your changes need to be staged, then commited, and finally pushed to a branch.

## Staging Changes

The primary command is `git add`. It places the files in an intemediary stage, where they do not affect the git repository and currently lie in a staging area. They will not make any affects until they are committed.

### Add All Files (Recommended)

To add all files, you should use:

```bash
git add .
```

Where the `.` is a regular expression indicating all files within the current working directory. It is recommended to add all files to prevent any build issues that may occur.

### Add Some Files

It is also possible to add files individually, however, this is not recommended since you may miss particular files. For example, if you have a file named `package.json` that you need to stage, you can use the following:

```bash
git add package.json
```

## Committing Changes

Once staged, you will need to use `git commit` to commit the changes to the git repository. It is recommended to add a message flag to prevent complicated in-text editors. The message should indicate what changes were made. For example, if you worked on adding a new filter, then the message should indicate "added new filter" or something similar. The purpose is to indicate to the other developers, what changes were made.

```bash
git commit -m "message here"
```

Many times, there will be pre-commit hooks installed, which will run some checks prior to committing. If they are successful, then the changes will occur, otherwise it will send an error. Primarily for web applications, [Husky](https://typicode.github.io/husky/) will be used to run these pre-commit checks. The following shows a successful and failure message.

```bash
# Success message
[acm-hydra/dev 53b10a4] add filter attribute
1 file changed, 1 insertion(+)


# Failure Message
husky - pre-commit hook exited with code 1 (error)
```

If Husky fails, check the logs provided by Husky to see where the error lies. Once the changes are made, they have to be staged and committed again.

## Pushing to a Branch

Once the changes have successfully been staged and committed, then you can push to a remote branch via `git push`. Once you have created a branch, you can push via:

```bash
git push origin branch_name
```

For example, if your feature branch name is `acm-ucr/new_filter` then the push command would look like the following:

```bash
git push origin acm-ucr/new_filter
```

NOTE: it is not recommended to setup upstream origin or simply use `git push`, there is ambiguity in terms of what branch you will be pushing too and can lead to further problems.

Once your changes are pushed, you will be able to create a pull request.
