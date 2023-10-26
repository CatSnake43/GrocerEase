# GrocerEase

Meal prepping app that picks recipes for you, makes a grocery list, and helps you save favorite meals - based on your dedicated user profile.
Excalidraw: https://excalidraw.com/#room=dd3e59dc64626b5fe0c4,uFSQUn1gRVI2ioMQMLm_XQ

Features:
User sign-up
User login
Complete user signup page with allergens/preferences selection
Fully functional Search recipe page with query building logic base on third party API.
Search Engine are full working with different option for user to choose.

## Front End

React/Redux was used on the front-end. Fully functional state management using redux.
React router was used to route between user authentication page and main page.
Navigation bar for navigating between pages.

## Login/Auth Backend

When users attempted to sign up, they would first be routed to the createUser middleware inside the userController. It hashes the password and then stores the username, password and the dietary restrictions in our user database (MongoDB)

Next middleware starts a session based on the user id.

Last middleware checks to make sure the session has not expired yet and sets the user id as an ssid cookie in the browser..

Verify user middleware checks for the user in the database. If not found, reroutes user to sign up page.
If user was found, start a session, and reroute to the homepage.

## Blocks

Rerouting of the login page was not being sent to the homepage.
Bugs on session and cookie.

## Stretch Features

Creating a single grocery list based on the ingredients of all liked recipes or selected recipes so the user could print a list and take it to the grocery store.
