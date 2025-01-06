# FakeOS

## Demo & Snippets

-   N/A

## Requirements / Purpose

-   Outline
An approach to replicate an older iPhone version. Realistic look, but minimal 
functionality. The time will be working and the Weather app will be showing a modal with
the curent weather data for local city of Sydney.

-  MVP
HTML/SCSS
Wallpaper scales to fit the viewport
Minimum 1 icons on desktop
The menu is positioned in the appropriate place (bottom left on windows, top of the screen on android)
"App" looks consistent
Menu contains a flex with content inside it
"App" should use an external API
JavaScript
Put your js code into separate files
Your icons and menu should add event listener for the click event, don't use the html onclick attribute
Give your functions and variables good names
Use the arrow syntax to declare functions
Github
Create a repo on github with a README
Clone Repo
Create and checkout develop branch
Push all changes to your develop branch
When submitting create a pull request from develop into main for review
Add coach as a reviewer
Hints
Split your js logic/data modules from your js DOM modules
Look at the position css property, specifically fixed and absolute
Pay attention to your hierarchy of elements in your html
Create your modals using JS and DOM interaction
Make your life easy! You don't need to recreate everything, just do the features and mvp mentioned above
Useful Resources:
Cutting a Monster Project Down to a Manageable Size

Is Your Code DRY or WET?

What are Pure Functions and Side Effects in JavaScript?

## Build Steps

-   N/A

## Design Goals / Approach

-   structured the layout of the html and the scss
-   implemented the modal for the weather app
-   fetched the data from API
-   implemented current time feature

## Features

-   SPA (Single Page Application)
-   Weather app displays current weather data 
-   Displays current time

## Known issues

-   not fully functional, only current tiem and weather app fetching data from external API
-   API: https://www.weatherapi.com

## Future Goals

-   none at present

## Change logs

-   From 19.12.2024 - 27.12.2024

## What did you struggle with?

-   suprisingly the biggest problem was the index.html layout and keeping the width of the body and the modal to stay withing the  required dimensions.
-   also bit of struggle was to get the current time going on the loop without interfiring with the modal
-   had a git merge problem in the middle of the project flow after discovering modal feature stopped working

## Licensing Details

-   Free

## Further details, related projects, reimplementations

-   This is a school challenge project

