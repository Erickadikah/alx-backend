#!/usr/bin/env python3
"""
"""


from flask import Flask, render_template, request
from flask_babel import Babel


app = Flask(__name__, instance_relative_config=True)
babel = Babel(app)


@app.route('/', strict_slashes=False)
def Home() -> str:
    """
    """
    return render_template('3-index.html')


class Config(object):
    """Babel instance to configure available
        and a selector
        Languages ["en", "fr"]
        @babel.localeselector()
        localeselector decorator: 
            invoked for each request to select a 
            language translation to use for that request
    """
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app.config.from_object(Config)

@babel.localeselector
def get_local() -> str:
    """
    """
    if request.args.get('locale'):
        lang = request.args.get('locale')
        if lang in app.config['LANGUAGES']:
            return lang
    else:
        return request.accept_languages.best_match(app.config['LANGUAGES'])


if __name__ == ('__main__'):
    app.run()
