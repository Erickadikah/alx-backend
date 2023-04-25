#!/usr/bin/env python3
"""Basic flask app Module
    Get locale from request
    get_locale function with the babel.localeselector
"""


from flask import Flask, render_template, request
from flask_babel import Babel

app = Flask(__name__)
babel = Babel(app)


@app.route('/', strict_slashes=False)
def language_conf() -> str:
    """get_locale function with the
        babel.localeselector decorator
    """
    return render_template('2-index.html')


class Config(object):
    """Babel instance to configure available
        and a selector
        Languages ["en", "fr"]
        localeselector decorator:
            nvoked for each request to select a
            language translation to use for that request
    """
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"
    LANGUAGES = ["en", "fr"]


@babel.localeselector
def get_local():
    """babel.localeselector decorator. Uses
        request.accept_languages to
        determine the best match with our supported languages.
    """
    return request.accept_languages.best_match(app.config['LANGUAGES'])


if __name__ == ('__main__'):
    app.run()
