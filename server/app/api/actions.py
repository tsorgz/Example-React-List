'''
@Filename: actions.py
@Author: TJ Soregaroli

This file defines all the routes pertaining to the
actions that we would find in our list, including 
creating new entries, updating existing entries, 
deleting entries, and retireving the existing entries.
'''

from flask import jsonify, request, g
from app.api import bp

itemList = [] # itemList is used as a substitiute to using a database to store entries.

'''
@Route: localhost:5000/api/
@Method: GET

Used to retrieve the existing list of objects from itemList.
'''
@bp.route('/', methods=['GET'])
def get_list():
    return jsonify(itemList)

'''
@Route: localhost:5000/api/
@Method: POST

Used to add a new object to itemList.
'''
@bp.route('/', methods=['POST'])
def new_item():
    if not request.is_json:
        return jsonify({'success': False, 'msg': "Item Creation Failed"})
    item = request.get_json()
    itemList.append(item)
    return jsonify({'success': True, 'msg': "Item Successfully Created"})

'''
@Route: localhost:5000/api/<index>
@Method: PUT
@Param:
    index: The index of the targeted object.
Used to update an existing object from itemList.
'''
@bp.route('/<int:index>', methods=['PUT'])
def update_item(index):
    if index >= len(itemList):
        return jsonify({'success': False, 'msg': "Item With ID Does Not Exist"})
    if not request.is_json:
        return jsonify({'success': False, 'msg': "Item Creation Failed"})
    item = request.get_json()
    itemList[index] = item
    return jsonify({'success': True, 'msg': "Item Successfully Updated"})

'''
@Route: localhost:5000/api/<index>
@Method: DELETE
@Param:
    index: The index of the targeted object.
Used to remove an existing object from itemList.
'''
@bp.route('/<int:index>', methods=['DELETE'])
def remove_item(index):
    if index >= len(itemList):
        return jsonify({'success': False, 'msg': "Item With ID Does Not Exist"})
    del itemList[index]
    return jsonify({'success': True, 'msg': "Item Successfully Deleted"})
