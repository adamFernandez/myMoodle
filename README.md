# How to create a new CSS file for a page

To begin you must have this repository either checked out or at the very least download the zip and then have a developer (Simon, Louise or Paul) help you at a later stage.

**Before you start you should consider how much of the page you want to update.** If it's only a few specific elements it's probably easier to do it directly on the page. You should only use this approach if you are creating a theme that you want to use across multiple courses or if you want to do something specific.

##Create a new folder with your page

Go inside the 'instances' folder and then create a new folder with the name of your course.

##Copy the frontend.html

Copy the frontend.html file into your project.

##Select all the features you want (requires developer)

List at all the features that you want for your webpage (header recolouring, custom icons etc.). Go into the HTML file and uncomment all the features you want and ensure that they have been configured correctly.

##Ensure that CSS is being loaded in locally

Inside the loadCSS() function at the top ensure that code is being loaded in locally. So for *Janek sandbox* set the location to be *Course_%20Janek%20sandbox_files/theme.css*.

## Add this code to the page

Inside a HTML block on the page paste in the code and press 'save'.

## Save the page locally

When you have returned to the homepage of the course; right click and press *Save As..* (may be different on PC). Save as *Webpage, Complete* in the location that you want to work on the files. If you were successful you will have a *course_[PROJECT NAME]* folder with a bunch of files and a single .htm file with the same name.

## Add in the CSS file

Go back to the original checked out folder and copy the *theme.css* file. Now add into the folder you just created.

## Open the .htm page

Go to the *.htm* you created and it should load the page (with lots of elements missing that have to be loaded in externally). However you should be able to use test all CSS you write on this page!

##Once you've finished

After you have finished writing your CSS ensure that the .html and .css file gets added to Github **Don't add the .htm file or the source folder.** Then go into the HTML file and link to the 'development' CSS for testing or 'production' if it's ready to go live. Now copy the .html code back into the webpage and your changes should be reflected.

#Explanation of files

##frontend.html 
Is the code that will be embedded into the webpage. It contains functions that will implement all the functionality that a designer requests per page. The purpose of this code is to either create new elements or hide elements that exist currently or to apply classes to exisiting elements. You should not use Javascript for any other purpose!

##theme.css
Is loaded in externally and is used to style up the classes that you applied in Javascript.

This decision was made to make the code a lot more readable and to ensure modularity so that we can load in specific functions as needed.

##functions.js
This contains all the functions that are useable within moodle. Link to this page and the functions will be imported for you to use. NOTE: for production ensure that this is included in the HTML instead of being loaded.

##lightbox.html
This code should be embedded in a seperate HTML block.

##Instances
Create instances of courses here e.g (Janek_sandbox). Within that folder add the 'Course_[your course]' html file and theme.css. 

##popup.html
Add to styles for popup/tooltip text.

**Don't add the other 'Course_[your course] _files' here as it will make the repo massive** - Just keep them on your own computer.

##assets
Store assets that will be used across courses here (images/icons)

###fonts
Store fonts that will be used across multiple courses here.

###icons
Store icons that will be used across multiple courses here.

###images
Store images that will be used across multiple courses here.

#Loading into Moodle
Files are loaded from this repository to our server every 15 minutes. You can then embed them in your moodle course using **http://git.iddkingsonline.com/path_to_file**. 
