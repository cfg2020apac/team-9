import logging
import json
import os
import requests
import base64
import datetime

from flask import Flask, request, jsonify;

app = Flask(__name__)

logger = logging.getLogger(__name__)

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

    headers = {
        "Content-Type" : "application/json",
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
            "type": 2,
            "repeat_interval": 2,
            "weekly_days": "string",
            "monthly_day": "integer",
            "monthly_week": "integer",
            "monthly_week_day": "integer",
            "end_times": "integer",
            "end_date_time": "string [date-time]"
        },
        "settings": {
            "host_video": "boolean",
            "participant_video": "boolean",
            "cn_meeting": "boolean",
            "in_meeting": "boolean",
            "join_before_host": "boolean",
            "mute_upon_entry": "boolean",
            "watermark": "boolean",
            "use_pmi": "boolean",
            "approval_type": "integer",
            "registration_type": "integer",
            "audio": "string",
            "auto_recording": "string",
            "enforce_login": "boolean",
            "enforce_login_domains": "string",
            "alternative_hosts": "string",
            "global_dial_in_countries": [
            "string"
            ],
            "registrants_email_notification": "boolean"
        }
}


    # inputValue = data.get("input");
    # result = inputValue * inputValue
    # logging.info("My result :{}".format(result))
    return json.dumps(os.environ.get("ZOOM_JWT"));


if __name__ == "__main__":
    app.run(port=5000, debug=True)



