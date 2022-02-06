# How to Contribute to CodecademyCommunity.github.io

All contributions are welcome! Below are some of the basic steps to contribute to our site. Please read them in their entirety to ensure you stay consistent with everyone else.

Please review the [issues](https://github.com/CodecademyCommunity/CodecademyCommunity.github.io/issues) tag and self-assign one if you would like to work on it. If you are not a member of our team and therefore cannot self-assign feel free to leave a comment requesting to be assigned. This keeps the efforts tidy and helps us know who is working on what.

This project is still in it's (fairly) early stages and we need designers, developers and PMs, feel free to reach out on Discord (via ModMail) if you would like to be a part of this.

## Initial setup

This assumes you have Git installed and setup, if you do not please download and install it from [here](https://git-scm.com/).

### Clone This Repo

1. In the main page of the repo, notice the big green button that says "Code". Click it.
2. Using the HTTPS or SSH option, copy the URL.
3. If you are using HTTPS, using Git Bash/Terminal/Bash, navigate to the folder where you want this repo to be located in your machine and use:

```
$ git clone pasteURLYouJustCopied
```

4. If you are using SSH, follow this GitHub tutorial.

### Node.js and npm

5. Install Node.js; it can be downloaded from here.
6. On the command line, navigate to the cloned repo.
7. Use the following command to install all necessary packages:

```
$ npm install
```

You can now run:

```
npm start
```

To start the React project, which will launch the site inside your default browser.

## Git Workflow

You now have a local copy of our site set up and can edit inside of it, congrats! You can now assign yourself to, and work on, any issues you wish from our issues tab!

Our basic Git Workflow is as follows:

1. Create (or assign yourself to) an issue.
2. Create a branch locally for your changes.
3. Make the required changes.
4. Push the branch (and your changes) to `origin` (the copy of the repo hosted on GitHub)
5. Create a Pull Request (PR) requesting to merge your branch into `main`, which will either be approved and merged or have changes requested before that takes place.
6. Once the PR is merged, delete the branch you created.

The workflow is explained in more detail in our Wiki - [here](https://github.com/CodecademyCommunity/CodecademyCommunity.github.io/wiki/Git-Workflow).
