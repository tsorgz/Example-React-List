'''
@Filename: simple_app.py
@Author: TJ Soregaroli

This class is used as the main class for the server containing our API.
The server will run on the localhost, port 5000, as by default.
'''

from app import create_app

app = create_app()

if __name__=="__main__":
    app.run()