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

front_end_url = "https://cfg-2020.web.app"

@app.route('/get-access-token', methods=['POST'])
def get_access_token():
    data = request.get_json();
    logging.info("data sent for evaluation {}".format(data))

    auth_code = data.get("auth_code")
    email = data.get("email") # may need to change to dummy 

    params = {
        "grant_type" : "authorization_code",
        "code" : "{}".format(auth_code),
        "redirect_uri" : front_end_url,
    }
    
    auth = "{}:{}".format(os.environ.get("CLIENT_ID"), os.environ.get("SECRET"))
    auth_encoded = base64.b64encode(auth.encode('ascii')).decode('ascii')
    
    
    headers = {
        "Authorization" : "Basic {}".format(auth_encoded)
    }

    resp = requests.post("https://zoom.us/oauth/token", params=params, headers=headers).json()
    
    return resp

@app.route('/make-recurring-meeting', methods=['POST'])
def make_recurring():
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
        "timezone": "Asia/Hong_Kong",
        "recurrence": {
            "type": 2, 
            "repeat_interval": 2, 
            "weekly_days": "1", 
            "end_times": 8, 
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
    resp = requests.post(url, data=json.dumps(request_body), headers=headers).json()

    result = {
        "start_url" :resp.get("start_url"),
        "join_url" : resp.get("join_url")
    }
    return jsonify(result)

@app.route('/get-attendance', methods=['POST'])
def get_attendance():
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
    resp = requests.post(url, params=params, headers=headers)
    
    print(resp.content)

    try:
        json = resp.json()
        result = {
            "participants" : resp.get("participants")
        }
        return jsonify(result)
    except:
        return jsonify({"message": "You need a pro account/ Error occurred"})



if __name__ == "__main__":
    app.run(port=5000, debug=True)