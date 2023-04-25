#!/usr/bin/env python3
"""Basic flask app Module
    Function to parametize template
    IDs: home_title
    home_header (_): to mark translation
"""


from flask import request
from flask import Flask, render_template
from flask_babel import Babel

app = Flask(__name__)
babel = Babel(app)


@app.route('/', strict_slashes=False)
def Home() -> str:
    """Home Route render_template:
        3-index.htm
    """
    return render_template('3-index.html')


class Config(object):
    """Babel instance to configure available
        and a selector
        Languages ["en", "fr"]
        localeselector decorator:
            invoked for each request to select a
            language translation to use for that request
    """
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


# @babel.localeselector
def get_local():
    """request.accept_languages
        best match : LANGUAGES
        In timezone : "UTC"
    """
    return request.accept_languages.best_match(app.config['LANGUAGES'])


if __name__ == ('__main__'):
    app.run()
