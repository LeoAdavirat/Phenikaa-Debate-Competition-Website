from flask import Flask, render_template, url_for
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
    butterfly_url = url_for('static', filename='images/buttefly.gif')
    width = random.randint(20, 100)  # random width between 20px and 100px
    height = width  # keep the aspect ratio
    butterfly_html = '<img src="{}" style="position: absolute; left: {}px; top: {}px; width: {}px; height: {}px;">'.format(butterfly_url, random.randint(0, 800), random.randint(0, 600), width, height)
    return html_content.replace('</body>', butterfly_html + '</body>')

@app.route('/')
def home():
    html_content = render_template('garden.html')
    return add_butterfly(html_content)

if __name__ == "__main__":
    app.run(debug=True)