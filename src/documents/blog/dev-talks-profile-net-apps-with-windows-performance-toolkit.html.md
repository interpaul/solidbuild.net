---
layout: posts
kind: blogpost
title: "DevTalks: Profile .Net apps with Windows Performance Toolkit"
blogExcerpt: "DevTalks: In this article we show how to use Windows Performance Toolkit for analyzing .Net apps."
menuItem: "blog"
blogDate: 2014-06-11 9:45
---
From time to time any developer faces performance problems. There are 2 problems: how to find bottleneck and how to fix it. In this article I'll try to give an answer to the first question.

#### Introduction
Windows Performance Toolkit (WPT) is a set of tools for analyzing performance problems. It's built on top of [Event Trace for Windows](http://msdn.microsoft.com/en-us/library/windows/desktop/bb968803.aspx) (ETW). Basicly, ETW is an unified mecahnism for tracing on Windows platform which was introduced in Windows 2000. WPT helps us capture ETW events which was produced by ETW providers. All Windows components and apps have they own ETW providers. For instance [here](http://msdn.microsoft.com/en-us/library/dd264810.aspx) you can read about CLR ETW provider. You can download WPT [here](http://www.microsoft.com/en-us/download/details.aspx?id=30652).

##### Windows Performance Recorder
Windows Performance Recorder is GUI tool for capturing tracing events. These tracing events are stored in ETL tracing file. After installation you can find it here: C:\Program Files (x86)\Windows Kits\8.1\Windows Performance Toolkit\WPRUI.exe. This is default path on my Windows 8.1. Here how it looks like.

![Windows Performance Recorder](wprui.png "Windows Performance Recorder")

##### Windows Performance Analyzer
Windows Performance Analyzer is GUI tool for analyzing ETL trace files. After installation you can find WPA here: C:\Program Files (x86)\Windows Kits\8.1\Windows Performance Toolkit\WPA.exe.

![Windows Performance Analyzer](wpa.png "Windows Performance Analyzer")

'Graph explorer' panel contains hierarchy of predefined graphs which we can use for analyzing performance of the system. In Computation node you can find all CPU related graphs. On the screenshot above 'CPU Usage (Sampled)' was selected. This graph is build using sample profile interrupt. This interupt fires every millisecond and gather callstack from all CPUs.

#### Profiling
In order to find performance issues in an app we should follow this algorithm:
1. Run WPR and start tracing
2. Run the app
3. Analyze etl file in WPA.

##### Run WPR
Before pressing 'Start' button in WprUI we should choose which profiles we want to listen. We are interesting in CPU related problems this is why we shoul tick: 'First level triage' (common profile which enables basic ETW providers) and 'CPU usage' (enables CPU related providers). Now we can click 'Start' button.

##### Analyze etl file in WPA.
When the app is finished we can click 'Save' button in WPR. It takes some time for WPR to prepare etl file for analyzing. After that we can open etl file in WPA by click 'Open in WPA' button.

#### Example
Below you can see 'CPU Usage (Sampled)' graph which shows CpuTest app.

![CpuTest App](cputest.png "CpuTest App")

If you right click on the table header you will see a list of additional columns. Select Stack to see callstacks. Don't forget to load symbols first (Trace -> Load Symbols).

CpuTest app is very simple. It consists of 3 methods: Main, CalculateExpression and CreateUser. Main calls CalculateExpression and CreateUser. As you see on the screenshot most of the time we spent in CalculateExpression (23833 samples) compare to CreateUser (7933 samples). Now we know the method which consume most of the CPU and can start fixing it.

Cheers