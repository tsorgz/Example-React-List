'''
@Filename: __init__.py
@Author: TJ Soregaroli

This file serves as a container for our server application.
create_app will be called in our main class, and this will
initialize our application and it's settings and features.
'''

from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app) #CORS included to allow cross-origin request from client application

    from app.api import bp as api_bp 
    app.register_blueprint(api_bp, url_prefix='/api') #Blueprints used to seperate API routes from any additional routes in the future

    return app