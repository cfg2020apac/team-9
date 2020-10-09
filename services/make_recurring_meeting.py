import logging
import json
import os
import requests
import base64
import datetime
from flask_cors import CORS

from flask import Flask, request, jsonify;

app = Flask(__name__)
CORS(app)
logger = logging.getLogger(__name__)

@app.route('/make-recurring-meeting', methods=['POST'])
def evaluate():
    data = request.get_json()
    access_token = data.get("access_token")
    email = data.get("email")
    headers = {
        "Content-Type" :"application/json",
        "Authorization" : "Bearer {}".format(access_token)
    }


    request_body = {
        "topic": "For JA meeting",
        "type": 3,
        "start_time": "{}".format(datetime.datetime.now()),
        "duration": 60,
        # "schedule_for": "string",
        "timezone": "Asia/Hong_Kong",
        # "password": "string",
        # "agenda": "string",
        "recurrence": {
            "type": 2, #weekly
            "repeat_interval": 2, # every 2 weeks
            "weekly_days": "1", # set to monday
            "end_times": 8, # recur 8 times
        },
        "settings": {
            "host_video": False,
            "participant_video": False,
            "cn_meeting": False,
            "in_meeting": False,
            "join_before_host": False,
            "mute_upon_entry": True,
            "watermark": False,
            "use_pmi": False,
            "approval_type": 0,
            "registration_type": 1,
            "audio": "voip",
            "registrants_email_notification": True
        }
    }

    url = "https://api.zoom.us/v2/users/{}/meetings".format(email)
    resp = requests.post(url, headers=headers).json()

    result = {
        "start_url" :resp.get("start_url"),
        "join_url" : resp.get("join_url")
    }
    return jsonify(result)





if __name__ == "__main__":
    app.run(port=5000, debug=True)



