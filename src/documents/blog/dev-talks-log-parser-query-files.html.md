---
layout: posts
kind: blogpost
title: "DevTalks: LogParser query files"
blogExcerpt: "DevTalks: What is query files for LogParser and how to use them."
menuItem: "blog"
blogDate: 2013-08-25 18:38
---
From today I'm starting a new blog series in which we will be talking about technologies behind SolidBuild. I hope you enjoy reading these posts.

##LogParser
LogParser is a powerful tool for processing text-based files. If your website is built on top of ASP .Net you definitely know what are IIS log files. In order to automate the process of analyzing log files we use LogParser. [Here][1] you can find the most useful queries for parsing IIS log files.

##Query files
As you might guess using command line syntaxis with long queries can be uncomfortable. Fortunately LogParser supports special switch <code>file</code>. Let's consider examples.

###25 slowest requests
Suppose we have a query:
<pre>
	SELECT TOP 25  
	    TO_LOWERCASE(cs-uri-stem) as URL,
	    MAX(time-taken) As Max,  
	    MIN(time-taken) As Min,  
	    Avg(time-taken) As Average,
	    Count(*) As Total
	FROM %source%
	GROUP BY URL  
	ORDER By Total DESC
</pre>
This query returns 25 slowest requests from IIS logs. The query requires <code>%source%</code> parameter, which accepts path to the IIS logs. In order to run this query we should execute the following command:
<p>
	<code>
		logparser.exe -i:iisw3c file:Slowest25Urls.sql?source=\W3SVC1\*.log
	</code>
</p>
Before executing this command the query was saved to file Slowest25Urls.sql.
<p>
	As you see, we specified path to the log files as query parameter:<code>?source=\W3SVC1\*.log</code>. If you want to specify several source folders you should separate them by semicolumn: <code>?source=\W3SVC1\*.log;\W3SVC2\*.log</code>.
</p>

<h3>List specific URLs</h3>
Now we will try to specify 2 arguments and pass them via command line. Below is a query with 2 arguments <code>%source%</code> and <code>%url%</code>:

<pre>
	SELECT *
	FROM %source% 
	WHERE cs-uri-stem LIKE %url%
</pre>

In this case we should separate arguments by plus sign:
<p>
	<code>
		logparser.exe -i:iisw3c file:ListSpecificUrls.sql?source=\W3SVC1\*.log+url='login%'
	</code>
</p>

[1]: http://blogs.iis.net/carlosag/archive/2010/03/25/analyze-your-iis-log-files-favorite-log-parser-queries.aspx "Analyze your IIS Log Files - Favorite Log Parser Queries"