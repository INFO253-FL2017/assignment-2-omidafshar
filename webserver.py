"""
webserver.py

File that is the central location of code for your webserver.
"""

from flask import Flask, render_template

# Create application, and point static path (where static resources like images, css, and js files are stored) to the
# "static folder"
app = Flask(__name__,static_url_path="/static")

@app.route('/')
def hello_world():
    """
    If someone goes to the root of your website (i.e. http://localhost:5000/), run this function. The string that this
    returns will be sent to the browser
    """
    return render_template("index.html") # Render the template located in "templates/index.html"

@app.route('/index')
def home_page():
    """
    If someone goes to the root of your website (i.e. http://localhost:5000/index), run this function. The string that this
    returns will be sent to the browser
    """
    return render_template("index.html") # Render the template located in "templates/index.html" 

@app.route('/about')
def about_page():
   
    return render_template("about_us.html")


@app.route('/contact')
def contact_page():
    
    return render_template("contact_us.html")


@app.route('/blog/8-experiments-in-motivation')
def first_blog():

    return render_template("blog/Post1.html")


@app.route('/blog/a-mindful-shift-of-focus')
def second_blog():

    return render_template("blog/Post2.html")


@app.route('/blog/how-to-develop-an-awesome-sense-of-direction')
def third_blog():

    return render_template("blog/Post3.html")


@app.route('/blog/training-to-be-a-good-writer')
def fourth_blog():

    return render_template("blog/Post4.html")


@app.route('/blog/what-productivity-systems-wont-solve')
def fifth_blog():

    return render_template("blog/Post5.html")                                
