from flask import Flask, render_template
import socket, random

app = Flask(__name__)

# # Create a socket object to connect to the server
# client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# # Connect to the server
# client_socket.connect(("localhost", 12345))

# # Receive the stage number from the server
# stage_number = client_socket.recv(1024).decode()

# @app.route("/")
# def index():
#     return render_template("garden.html")
#     # if stage_number == "1":
#     #     return render_template("garden.html")
#     # else:
#     #     return "Invalid stage number"

def add_butterfly(html_content):
    butterfly_html = '<img src="{{ url_for("static", filename="images/butterfly_sprite.png") }}" style="position: absolute; left: {}px; top: {}px;">'.format(random.randint(0, 800), random.randint(0, 600))
    return html_content.replace('</body>', butterfly_html + '</body>')

@app.route('/')
def home():
    html_content = render_template('garden.html')
    return add_butterfly(html_content)

if __name__ == "__main__":
    app.run(debug=True)