##Serverside Homework 3
#React Redux Courselist

The purpose of this homework is to create an application using, react, react-router, redux and react-router-redux. Our focus will not be on the user interface, but on client-server interaction, starting from initial serving of the pages to responding further to user-generated events on the client. The idea behind the application is to help a student store and access all his/her homework for multiple courses in one place.

__NOTE:__ _Italicised_ text means completed.

_When a user first contacts the server, it sends a page displaying the username (hardcoded for now) and a welcome message. It also shows a navigation bar to add a course, add a homework, view submitted homeworks, and view pending homeworks._


When a user clicks on “add a course”, it drops down a form that asks for course number, course title, semester and year. It also shows a submit button. When a user enters these data and clicks on the submit button, it verifies that the data are correct and sends the data to the server asynchronously. It then displays the server response to the user by updating the page (not by reloading).


When the user clicks on the “add homework” , it shows a dropdown list of all the courses it currently has (how will it know this information) and once the student chooses a course, it then displays a form that asks for: homework title, homework question, due date and when the student wants to start working on the homework. It also displays a submit button. When the student clicks the submit button, it verifies that the data is correct and submits to the server asynchronously and displays the server response without a page reload. A user can enter as many homework as he or she wants.


When a user clicks on view pending homework, it gets the list from the server and updates the page by displaying in a table format the data it obtained in the above paragraph. Each homework should also feature a submit button. For now, when a user click on the submit button, just display a “homework successfully submitted” message and update the server that it has been submitted.


We will improve this project further in future homeworks!


