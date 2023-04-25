#!/usr/bin/python3
"""
"""

from flask import Flask, render_template
app = Flask(__name__)


@app.route('/', strict_slashes=False)
def welcome_to_holberton() -> str:
    """
    """
    return render_template('0-index.html')


if __name__ == '__main__':
    app.run()
