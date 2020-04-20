from flask import Flask, render_template, url_for
app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template("home_page.html")

@app.route('/blog')
def blog():
    return render_template('blog.html', pageName='blog')

@app.route('/contact')
def contact():
    return render_template('contact.html', pageName='contact')

if __name__ == '__main__':
    app.run(debug=True)