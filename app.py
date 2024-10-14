from flask import Flask, render_template
import socket

app = Flask(__name__)

# Create a socket object to connect to the server
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Connect to the server
client_socket.connect(("localhost", 12345))

# Receive the stage number from the server
stage_number = client_socket.recv(1024).decode()

@app.route("/")
def index():
    return render_template("garden.html")
    # if stage_number == "1":
    #     return render_template("garden.html")
    # else:
    #     return "Invalid stage number"

@app.route("/butterfly")
def butterfly():
    # Add a butterfly sprite image to the garden background
    return render_template("butterfly.html")

if __name__ == "__main__":
    app.run(debug=True)