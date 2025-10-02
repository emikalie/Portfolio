# Regex Steps for Converting Movie Data From a tab-separated text file to XML

*Before beginning, think about how to do these assignments. It might be helpful to run a separate (free) Markdown editor to keep
your step recording in a different software window than oXygen, where you'll be writing your Find and Replace operations.
You want to be able to copy and paste your expressions into your markdown file to record them. 
I'm going to use Macdown (a nice markdown editor for Mac). Windows has Typora or reMarkable, etc.*


First step is ALWAYS to search for characters that will disrupt XML encoding: 
`&`, `<`, `>`. 
XML is not allowed to contain raw ampersand characters `&`. 
So I needed to find:

```
&
```
and replace with the special escape characters for ampersands:
```
&amp;
```
I searched for `<` and `>` and did not find them. 


Moving on, we can begin the "autotagging" find and replace process.
I wanted to wrap elements around whole lines. 

I used the following expression to find. 
I made sure that *dot matches all* was NOT set so that
the dot matches on any character but only inside each line. 
This expression matches on the beginning of each line, 
and *one ore more characters on that line*.

```
^.+
```
I set this to replace:
```
<movie>\0</movie>
```

Second step I matched this and set capturing groups so I could tag the titles:

Find: 
```
(<movie>)(.+?)(\t)
```



I set this to replace, so I could keep the first tag, and then add a new pair of tags for the title elements:
```
\1<title>\2</title>\3
```
At the very end of class, I manually set a root element around the entire document 
```
<xml>
   <movie>...</movie>
   <movie>....</movie>
    <!--yada yada yada more code -->   
</xml>
```

And I saved the file as movieData.xml.
And I closed it.
And I opened my new movieData.xml and saw that I had a green square in oXygen, indicating 
that the document is well-formed. Yay!

I can continue doing more regex find and replace operations to tag the dates, locations, and time durations inside each of these movie elements. 





my steps added on to these steps:



3. Identify the Structure
The source file contains movie data structured as follows:

```
title    year    country    runtime
Goodbye to All That    1930    UK    9 min
Murder!    1930    UK    92 min
...
```

Fields are tab-separated, with columns:
- Title
- Year
- Country
- Runtime (in minutes or "N/A")

The goal is to wrap each movie entry in appropriate XML tags.



4. Convert the First Row (Headers)

Find:
```regex
^title\tyear\tcountry\truntime$
```

Replace with:
```xml
<xml>
```

This removes the header row and initiates the XML document.



5. Wrap Each Movie Entry in `<movie>` Tags

Find:
```regex
^(.+?)\t(\d{4})\t(.+?)\t(\d+|N/A) min$
```

Replace with:
```xml
    <movie>
        <title>\1</title>
        <year>\2</year>
        <country>\3</country>
        <runTime unit="min">\4</runTime>
    </movie>
```

This transformation ensures each movie entry is structured properly with the necessary XML tags.



6. Close the XML Structure

Find:  
```regex
\z
```

Replace with:  
```xml
</xml>


