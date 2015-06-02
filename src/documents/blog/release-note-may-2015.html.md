---
layout: posts
kind: blogpost
title: Release note - May 2015
blogExcerpt: "Code coverage, regular expressions, https, docs and more."
menuItem: "blog"
blogDate: 2015-06-02 21:59
---
#### Code coverage
Added support of code coverage for all tests. It's built on top of [Open cover](https://github.com/OpenCover/opencover/).


#### Documentation
Documentation site has been created, which is available here - [http://docs.solidbuild.net](http://docs.solidbuild.net).

#### Regular expressions for file paths
Added ability to specify file paths as regular expressions. See more here - [http://docs.solidbuild.net/en/latest/concepts/file-path.html#regular-expressions](http://docs.solidbuild.net/en/latest/concepts/file-path.html#regular-expressions).

#### Security update
From today https is a default protocol for CI site.

#### New parameters
The following parameters were added:
- {Sys.BuildReason} - Returns build reason, which can be one of these: User, Timer, SourceControl or Trigger.
- {Sys.OwnerName} - Returns user name.
- {Sys.OwnerEmail} - Returns user email.