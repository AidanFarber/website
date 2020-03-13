from flask import Flask, render_template, url_for
app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template("home_page.html")

@app.route('/blog')
def about():
    return render_template('blog.html', pageName='blog')

if __name__ == '__main__':
    app.run(debug=True)