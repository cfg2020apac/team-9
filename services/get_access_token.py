import logging
import json
import os
import requests
import base64
import datetime

from flask import Flask, request, jsonify;

app = Flask(__name__)

logger = logging.getLogger(__name__)

@app.route('/get-access-token', methods=['POST'])
def evaluate():
    data = request.get_json();
    logging.info("data sent for evaluation {}".format(data))

    auth_code = data.get("auth_code")
    email = data.get("email") # may need to change to dummy 

    params = {
        "grant_type" : "authorization_code",
        "code" : "{}".format(auth_code),
        "redirect_uri" : "https://cfg-2020.web.app",
    }
    
    auth = "{}:{}".format(os.environ.get("CLIENT_ID"), os.environ.get("SECRET"))
    auth_encoded = base64.b64encode(auth.encode('ascii')).decode('ascii')
    
    
    headers = {
        "Authorization" : "Basic {}".format(auth_encoded)
    }

    resp = requests.post("https://zoom.us/oauth/token", params=params, headers=headers).json()
    
    return resp


if __name__ == "__main__":
    app.run(port=5000, debug=True)



