#!/usr/bin/env python3
"""Basic flask app Module
"""

from flask import Flask, render_template
app = Flask(__name__)


@app.route('/', strict_slashes=False)
def welcome_to_holberton() -> str:
    """Return: Welcoe to Holbertom
    """
    return render_template('0-index.html')


if __name__ == '__main__':
    app.run()
