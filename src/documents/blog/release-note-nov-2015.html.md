---
layout: posts
kind: blogpost
title: Release note - November 2015
blogExcerpt: "SolidBuild script file."
menuItem: "blog"
blogDate: 2015-11-15 18:11
---
#### SolidBuild script file
After 6 months of refactoring and developing I'm pleased to announce a new feature - SolidBuild script file.

The file is a json file which contains build script. Script below executes 6 steps:
- Runs PowerShell command
- Transforms web config file
- Deletes folders
- Deletes files
- Creates zip archive
- Uploads zip archive to the server

<script src="https://gist.github.com/solidbuild/a8252b28ecccffa4917a.js"></script>

#### How to create your first SolidBuild.json?
- Create SolidBuild.json file
- Copy content of a template to SolidBuild.json
<script src="https://gist.github.com/solidbuild/f4fc00c748b9297cfd3c.js"></script>
- Open SolidBuild.json in IDE with support of JSON schema, for example VisualStudio 2015
- Add build step "Run SolidBuild script" through the web ui