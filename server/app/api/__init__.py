'''
@Filename: __init__.py
@Author: TJ Soregaroli


This file serves to initialize routes pertaining to the API.
Routes are seperated by function (As of 05/21/2020, only routes
related to list actions are implemented).
'''

from flask import Blueprint

bp = Blueprint('api', __name__)

from app.api import actions