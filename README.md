[![Build Status](https://travis-ci.org/blugavere/brocode.svg?branch=master)](https://travis-ci.org/blugavere/brocode)

# Brocode

To get started:

1. Install [node.js,](https://nodejs.org/en/)
2. [Fork](https://github.com/blugavere/arkapp#fork-destination-box) the [repository](https://github.com/blugavere/arkapp) and then clone the repository or download it as a zip file and extract it into a folder.
3. Open up a terminal session in the directory and type the below commands:

```bash
# create a reference to the original shared repository
git remote add upstream git://github.com/blugavere/arkapp.git

# this will install a bunch of stuff (dependencies) that you'll need
npm install

# Create a branch to track your changes independently
git checkout -b [YOUR NAME HERE]

# this will start up the web server
npm run dev

```

4. Navigate in a browser to view the website at [http://localhost:3000](http://localhost:3000)


## Keeping in Sync

```bash

# to pull down the latest updates to the master repository
git fetch upstream

# to replay your changes onto the updated master repository
git rebase upstream/master

```

## Resources

### Git
- [Getting started with github](https://guides.github.com/activities/hello-world/)
- [Forking](https://guides.github.com/activities/forking/)
