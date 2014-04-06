---
layout: posts
kind: blogpost
title: Added config transformations and zip archives
blogExcerpt: "I've just updated SolidBuild and here you can read what's new."
menuItem: "blog"
blogDate: 2013-09-17 23:01
---
In this release I added two new build steps: 'Transform config' and 'Create Zip archive'.

###Transform config

As you may guess from the name, it adds functionality for transforming .Net configs use transformation files.

![Transform config](transform-config.png "Optional title")

The image above shows options for this step.

###Create Zip archive

For Zip archive you can specify source files and destination location in the archive. <code>=></code> splits file path from destination in the archive. For instance, <code>/Services/Sender/**/*.* => Sender</code> means all files from <code>/Services/Sender/</code> folder should be placed in folder <code>Sender</code> inside the archive.

![Creat Zip archive](zip-archive.PNG "Optional title")

Cheers,  
Siarhei