---
layout: posts
kind: blogpost
title: Windows 2008 support
blogExcerpt: "Added support of Windows 2008."
menuItem: "blog"
blogDate: 2013-08-06 00:01
---
From now you can install build agents on machines with Windows 7/2008 and earlier.

It took us some time to add this. The main problem was a lack of WebSockets support in .Net 4.5 on Windows 2008 and earlier.
After deep investigation we decided to use this open source implementation - [WebSocket-Sharp](https://github.com/sta/websocket-sharp).

Now we support all operating systems that are compatible with .Net 4.5.

Enjoy!