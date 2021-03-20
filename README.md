# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Kyle**

Time spent: **8** hours spent in total

Link to project: https://glitch.com/edit/#!/rainbow-shining-ceratonykus

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Different difficulties that change the amount of levels needed to pass

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![x]<img src="http://g.recordit.co/tkudfAvJpS.gif" width = 300 px><br>
![x]<img src="http://g.recordit.co/eCT56pL1bP.gif" width = 300 px><br>
![x]<img src="http://g.recordit.co/SeohowDdMm.gif" width = 300 px><br>


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I used https://soundboard.com for the audio files and audacity to trim them.
I used https://www.w3schools.com to learn how to use certain new functions like setInterval and clearInterval
I got my pictures from https://www.models-resource.com and https://spongebob.fandom.com

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
Initially, to put the images on the buttons, I wrote an image element to be inside the button, and this created spacing issues. There was a large gap underneath the button with the image. I was very confused because the spacing was outside of the button element, and I was not sure how a child of a button could do this. First, I tried to change the size of the image inside the button, and this reduced the margin, but it was still there. At this point I realized that it would be faster to find another way instead of trying to fix this way. I googled my problem and the first result that came up was a stackoverflow post that said to use an input type image, but this would be much harder to implement because the image is only supposed to show up when im pressing the button. The next post in this thread mentioned creating a background image for the button in the css folder. I realized that this was perfect for my situation because it filled the button with the image without creating any new elements that might mess with the spacing of the website. Another upside is that I wouldn't need to hide or show any image elements, because I could apply the background only to the existing css rule that only applied to the buttons when they were pressed or lit. I tried this solution and it worked on the first try and was very easy to implement.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
After completing this tutorial, writing the optional features made me wonder how specific implementations are decided. For example, the 3 strikes feature didn't specify whether the pattern should be shown again after the mistake, and I made the decision to show again, but it made me wonder how this is handled in a real business setting. I would like to know how a web developer, when developing a website, decides to ask for specification from the employer, or to decide the best course of actions themselves. As an employer, I would like the website to be what I imagined, but I would also not liked to be flooded with meaningless questions when I have better things to do. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
I would like to add in some more features, such as a variable amount of buttons based on difficulty or maybe an endless mode to try to achieve a high score. I would also like to make the program more sturdy. I noticed that right out of the tutorial, you could click the buttons to guess as they were being shown, making the game extremely easy, and I fixed this while implementing the ticking clock, but there are still many ways to press buttons at the wrong time to mess up the game. I noticed while testing that sometimes clicking different buttons too quickly would cause multiple games to run at the same time, or multiple timers to run, making the game unplayable, and this is what I would seek to improve by writing a more streamlined flowchart of how the game should work to avoid states that should be impossible.



## License

    Copyright Kyle McRae

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.