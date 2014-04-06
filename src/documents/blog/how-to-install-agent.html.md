---
layout: posts
kind: blogpost
title: How to install build agent for SolidBuild CI?
blogExcerpt: "In this article we show how to install build agent."
menuItem: "blog"
blogDate: 2013-08-15 22:34
---
In order to install your first agent you should accomplish 3 easy steps.
##Step 1: Download agent
In Agents tab you can see 'Create new agent' button. Please click the button.
<%-@partial('post-image.html.eco', { url: "how-to-install-agent/agents-tab.gif", title: "Agents tab" })%>
After you clicked the button you will be asked to save a zip archive with Agent. Please save the archive.
<%-@partial('post-image.html.eco', { url: "how-to-install-agent/start-download.gif", title: "Start download" })%>
When download is finished please unblock content in the property window. You can open property window by right clicking on the archive in Windows Explorer. Now you can extract archive to a folder where you would like to install agent. In this example we chose 'C:\SolidBuildAgent'.
##Step 2: Install agent
Open command prompt under Administrator account. Change current folder to 'C:\SolidBuildAgent'. Now type 'BuildAgentService.exe -install'. This command installs agent in the system. 
<%-@partial('post-image.html.eco', { url: "how-to-install-agent/install-agent.gif", title: "Install agent" })%>
Time to start service. This command starts agent - 'net start BuildAgentService'.
<%-@partial('post-image.html.eco', { url: "how-to-install-agent/start-agent-service.gif", title: "Start agent service" })%>
##Step 3: Test
At this moment you can open overview tab in the browser and see that your agent was installed successfully. The number in Agent menu shows number of connected agents.
<%-@partial('post-image.html.eco', { url: "how-to-install-agent/agent-connected.gif", title: "Agent connected" })%>

Solid Build Team