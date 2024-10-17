from flask import Flask, render_template, url_for, send_from_directory, request, jsonify
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
# def add_butterfly(html_content):
#     butterfly_url = url_for('static', filename='images/butterfly.gif')
#     width = random.randint(50, 70)  # random width between 20px and 100px
#     height = width  # keep the aspect ratio
#     initial_x = random.randint(0, 800)  # initial x position
#     initial_y = 600  # initial y position at the bottom of the screen
#     butterfly_html = '<img id="butterfly" src="{}" style="position: absolute; left: {}px; top: {}px; width: {}px; height: {}px;">'.format(butterfly_url, initial_x, initial_y, width, height)
#     html_content = html_content.replace('</body>', butterfly_html + '</body>')

#     # Add JavaScript code to make the butterfly fly up
#     script = '''
#         <script>
#             var butterfly = document.getElementById('butterfly');
#             var y = {};
#             var speed = 2;  // adjust the speed of the butterfly
#             function fly() {{
#                 y -= speed;
#                 butterfly.style.top = y + 'px';
#                 if (y <= 0) {{
#                     // despawn the butterfly when it reaches the top of the screen
#                     butterfly.remove();
#                 }} else {{
#                     setTimeout(fly, 16);  // 16ms = 60fps
#                 }}
#             }}
#             fly();
#         </script>
#     '''.format(initial_y)
#     html_content += script
#     return html_content

@app.route('/')
def home():
    # html_content = render_template('garden.html')
    # html_content = render_template('triggerPopup.html')
    html_content = render_template('flyingButter.html')
    return html_content

@app.route('/popup')
def popup():
    # html_content = render_template('garden.html')
    html_content = render_template('triggerPopup.html')
    # html_content = render_template('flyingButter.html')
    return html_content

@app.route('/presentation')
def presentation():
    return render_template('garden.html')


stage = 1
@app.route('/setstage')
def setstage():
    return render_template('setstage.html', stage=stage)

@app.route('/update_stage', methods=['POST'])
def update_stage():
    global stage
    stage = request.json['stage']
    return jsonify(success=True)

@app.route('/get_stage', methods=['GET'])
def get_stage():
    return jsonify(stage=stage)


if __name__ == "__main__":
    app.run(debug=True)


