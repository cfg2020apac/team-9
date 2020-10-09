import logging
import json
import os
import requests
import base64
import datetime

from flask import Flask, request, jsonify;

app = Flask(__name__)

logger = logging.getLogger(__name__)

@app.route('/make-recurring-meeting', methods=['POST'])
def evaluate():
    data = request.get_json()
    access_token = data.get("access_token")
    meetingId = data.get("meetingId")
    
    params = {
        "page_count" : 30 
    }

    headers = {
        "Content-Type" :"application/json",
        "Authorization" : "Bearer {}".format(access_token)
    }


    url = "https://api.zoom.us/v2/report/meetings/{}/participants".format(meetingId)
    resp = requests.post(url, params=params, headers=headers).json()

    result = {
        "participants" : resp.get("participants")
    }
    return jsonify(result)




if __name__ == "__main__":
    app.run(port=5000, debug=True)



