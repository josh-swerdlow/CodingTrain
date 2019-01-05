# Data and APIs in p5.js

## Introduction

This folder contains the relevant files for [The Coding Train's][codingTrain] [Introduction to Data and APIs in p5][apis] series.

I will largely focus on different data format options (JSON, CSV, etc) and how to interact with Application Program Interfaces (APIs).

## Notes

### Working with JSON

#### Loading from JSON Files
JSON standards for Java Script Object Notation. It uses very similar syntax that is used by javascript to declare and create objects. JSON files can be saved as seperate files using the file extension *.json*. For example

```
{
    "name": "sunflower",
    "red": 255,
    "green": 200,
    "blue": 0
}
```

One can then load the data in the JSON file using the `loadJSON()` p5 library function. Be warned through, Javascript is always executed asynchronously. So one should always ensure the data has been properly loaded before trying to access it.

#### Loading from URLs

In this situation, the user most likely is querying to get data continuously. Meaning the data must be loaded whenever the user requires it; however, as we saw before the asynchronous nature of JS will make it so the rest of the program will continue even if the data isn't loaded. Again we will use the `loadJSON()` p5 library function, but instead of just giving it the file name we will also give it a callback function as shown.

```
loadJSON(path_to_data, callback_fun, 'jsonp');
```

In this example we are loading the data from the path and giving the `loadJSON` function a callback function. This callback function will be executed once the data has been successfully loaded, for example.

```
function callback_fun(data) {
    visualize(data);
}
```

*Note*: Sometimes when accessing url data the server may not allow you to access the data for security purposes. In this case the optional argument 'jsonp' can be added. I don't quite know how or why this works.

#### Loading from APIs

##### URL Query Strings
URL query strings are the strings that come after the '/' at the end of a url. For example

```
https://www.youtube.com/watch?v=ecT42O6I_WI&index=5&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r
```

Most query strings will start with a '?' and be followed by consequtive other queries using the '&' symbol to join. So in the above example we are querying for 'v=ecT42O6I_WI' and 'index=5' and 'list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r'. These together search through youtubes server to bring me to the current video.

> *Sidenote*: Something interesting that I thought to try was to remove the 'list' query. When this is done, we are still brought to the same video, but we don't get the entire playlist on the page. Then I thought, 'What is the 'index' query for?'. It is most likely to index into the list and when I removed it nothing changed about the page I was brought to. Finally, I added the 'list' query, but kept the 'index' query removed. This only added the list of videos in the playlist. So perhaps my theory on the purpose of index is not correct.

##### Continuous API Queries

Use the `setInterval` javascript function to perform some function very number of milliseconds. See ISS location app for an example.

## Fun Coding Ideas

Find some fun APIs online and visualize the data!


[codingTrain]: https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw
[apis]: https://www.youtube.com/watch?v=rJaXOFfwGVw&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r


