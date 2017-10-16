# Assignment 2
## Questions and Answers

### 1. What is the function of the following technologies in this assignment?

#### HTML

HTML determines the structure of each distinct page of my website.

#### CSS

CSS styles various elements of my website.

#### Javascript

Javascript specifically controls the behavior of the form on the Contact Us page. The allFieldsFilled function in script.js determines if a form submission is valid (i.e. all of the fields are filled).

#### Python

Python serves as the back-end programming language for the server. It is the language in which Flask operates.

#### Flask

Flask is a microframework that allows us to control the server's responses to GET and POST requests.

#### HTTP

HTTP is the protocol that the browser and server use to send data to each other.

#### GET and POST Requests

GET and POST requests are the specific requests that send data between the browser and the server. GET requests are sent to the server every time a new page is to be loaded, and a POST request is sent upon submission of the form in the Contact Us page.

### 2. How does HTML, CSS, and JavaScript work together in the browser for this assignment?

HTML sets the structure of each web page, displaying text and links in their proper order. CSS styles these elements in accordance with the rules set in the style sheet. Javascript controls the behavior of the contact form, ensuring valid form submissions.

### 3. How do Python and Flask work together in the server for this assignment?

Python is the back-end programming language on the server. Flask is used to handle server requests, and we can write Python code to be executed in response to these requests.

### 4. List all of the possible GET and POST requests that the server returns a response for and describes what happens for each GET and POST request.

#### GET

1. '/' and '/index': The server sends the Home page to the browser.
2. '/about': The server sends the About page to the browser.
3. '/contact': The server sends the Contact page to the browser.
4. '/blog/8-experiments-in-motivation': The server sends the first blog post to the browser.
5. '/blog/a-mindful-shift-of-focus': The server sends the second blog post to the browser.
6. '/blog/how-to-develop-an-awesome-sense-of-direction': The server sends the third blog post to the browser.
7. '/blog/training-to-be-a-good-writer': The server sends the fourth blog post to the browser.
8. '/blog/what-productivity-systems-wont-solve': The server sends the fifth blog post to the browser.

#### POST

1. '/contact/submit': The browser sends the form's data to the server. If the form data is a valid submission, the server takes the data and makes a POST request to Mailgun in order to send an email with the data to the recipient.




