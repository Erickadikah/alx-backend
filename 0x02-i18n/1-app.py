#!/usr/bin/env python3
"""
"""
from flask import request
from flask import Flask, render_template
from flask_babel import Babel

app = Flask(__name__)
babel = Babel(app)
@app.route('/', strict_slashes=False)
def language_conf() -> str:
    """
    """
    return render_template('1-index.html')

class Config(object):
    """Babel instance to configure available
        and a selector
        Languages ["en", "fr"]
    """
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"

if __name__ == ('__main__'):
    app.run()