# Flask App Setup Guide

Follow these steps to get the Flask app running on a new Ubuntu server:

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Update the Package List**:
    ```sh
    sudo apt-get update
    ```

3. **Install Python Virtual Environment**:
    ```sh
    sudo apt install python3-venv
    ```

4. **Create and Activate Virtual Environment**:
    ```sh
    python3 -m venv linuxenv
    source linuxenv/bin/activate
    ```

5. **Install Requirements**:
    ```sh
    pip install -r requirements.txt
    ```

6. **Run the Flask App**:
    ```sh
    python3 app.py
    ```

Your Flask app should now be running! Access it at `http://127.0.0.1:5000` or your server's IP address.

---

Happy coding! 🚀
