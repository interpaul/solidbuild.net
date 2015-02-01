---
layout: posts
kind: blogpost
title: Release note - Jan 2015
blogExcerpt: "Updates and news"
menuItem: "blog"
blogDate: 2015-02-01 21:37
---
#### Build steps
Added 4 new steps for managing [Octopus Deploy](https://octopusdeploy.com/) projects:
* Push packages to Octopus
* Create Octopus release
* Deploy Octopus release
* Promote Octopus release

Each of these steps accepts ApiKey and Octopus URL. Octopus server should be accessible from build agent machine.

In current implementation Deploy and Promote steps wait until the end of deployment.

Cheers