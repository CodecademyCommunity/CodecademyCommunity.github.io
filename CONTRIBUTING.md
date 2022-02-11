# How to Contribute to the Codecademy Community website

All contributions are welcome! Below are some of the basic steps to contribute to our site. Please read them in their entirety to ensure you stay consistent with everyone else.

Please review the [issues](https://github.com/CodecademyCommunity/CodecademyCommunity.github.io/issues) tag and self-assign one if you would like to work on it. If you are not a member of our team and therefore cannot self-assign feel free to leave a comment requesting to be assigned. This keeps the efforts tidy and helps us know who is working on what.

This project is still in its (fairly) early stages and we need designers, developers and PMs, feel free to reach out to server staff on Discord (via ModMail) if you would like to get involved.

## Initial Setup

This assumes you have Git installed and set up, if you do not please download and install it from [here](https://git-scm.com/). Note MacOS and Linux devices often come with Git preinstalled.

### Clone This Repo

1. In the main page of the repo, notice the big green button that says "Code". Click it.
2. If you are using HTTPS, copy the URL and using Git Bash/a terminal, navigate to the folder where you want this repo to be located in your machine and use:

```
$ git clone pasteURLYouJustCopied
```

4. If you are using SSH, follow [this](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) GitHub tutorial.

### Node.js and npm

5. Install Node.js; it can be downloaded from [here](https://nodejs.org/en/).
6. On the command line, navigate to the cloned repo.
7. Use the following command to install all necessary packages:

```
$ npm install
```

To start the React project, which will launch the site inside your default browser, you can now run:

```
npm start
```

## Git Workflow

You now have a local copy of our site set up and can edit, congrats! You can now assign yourself to, and work on, any issues you wish from our issues tab!

Our basic Git workflow is as follows:

1. Create (or assign yourself to) an issue.
2. Create a branch locally for your changes.
3. Make the required changes.
4. Push the branch (and your changes) to `origin` (the copy of the repo hosted on GitHub).
5. Create a Pull Request (PR) requesting to merge your branch into `main`, which will either be approved and merged or have changes requested before that takes place.
6. Once the PR is merged, delete the branch you created.

The workflow is explained in more detail in our Wiki - [here](https://github.com/CodecademyCommunity/CodecademyCommunity.github.io/wiki/Git-Workflow).
