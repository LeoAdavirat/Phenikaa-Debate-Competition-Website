import socket
import random
import time

# Create a socket object
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Bind the socket to a address and port
server_socket.bind(("localhost", 12345))

# Listen for incoming connections
server_socket.listen(1)

print("Server started. Waiting for connection...")

# Accept an incoming connection
connection, address = server_socket.accept()
print("Connected by", address)

# Send the stage number (1 in this case)
connection.send(b"1")

while True:
    # Send a random "butterfly" request every 10-20 seconds
    if random.randint(1, 20) == 1:
        connection.send(b"butterfly")
    time.sleep(1)

# Close the connection
connection.close()