from datetime import datetime
import time

from flask import Flask, request, jsonify
from flask_cors import CORS

from mailjet_rest import Client
import os

app = Flask(__name__)

import os

# Returns the difference in minutes
def get_minutes_diff(meeting_datetime, current_datetime):
    diff = meeting_datetime - current_datetime
    seconds_in_day = 24 * 60 * 60
    minutes_seconds = divmod(diff.days * seconds_in_day + diff.seconds, 60)
    
    minutes = minutes_seconds[0]
    seconds = minutes_seconds[1]
    seconds_in_minutes = seconds/60
    total_minutes = minutes + seconds_in_minutes
    
    return total_minutes

# send out notification, use API
def send_notif(instructor_email, student_email):
    EMAIL_API_KEY = os.getenv('EMAIL_API_KEY')
    EMAIL_SECRET_KEY = os.getenv('EMAIL_SECRET_KEY')
    mailjet = Client(auth=(EMAIL_API_KEY, EMAIL_SECRET_KEY), version='v3.1')
    data = {
    'Messages': [
                    {
                            "From": {
                                    "Email": instructor_email,
                                    "Name": "No-Reply Meeting Reminder"
                            },
                            "To": [
                                    {
                                            "Email": student_email,
                                            "Name": "User"
                                    }
                            ],
                            "Subject": "Meeting Reminder",
                            "TextPart": "This is a reminder to attend a program you have registered." + "\n" + "Date: 26 April 2020" + "\n" + "Time: 3.30pm-4.30pm"
                    }
            ]
    }
    result = mailjet.send.create(data=data)
    print(result.status_code)
    print(result.json())


# auto-remind 24 hours and 1 hour before meeting time
@app.route("/remind/<int:year>/<int:month>/<int:date>/<int:minute>/<string:instructor_email>/<string:student_email>", methods=["GET"])
def remind(year, month, date, hour, minute, instructor_email, student_email):
    meeting_datetime = datetime(year, month, date, hour, minute)
    current_datetime = datetime.now()
    minutes = get_minutes_diff(meeting_datetime, current_datetime)

    # trigger email reminder 24 hours before meeting
    if minutes <= 1440:
        send_notif(instructor_email, student_email)
    
    # trigger email reminder 1 hour before meeting
    if minutes <= 60:
        send_notif(instructor_email, student_email)

    # for demo, test send email working
    # send_notif(instructor_email, student_email)

# remind when user (Admin/Volunteer) wants to remind
@app.route("/remind_now/<string:instructor_email>/<string:student_email>", methods=["GET"])
def remind_now(instructor_email, student_email):
    send_notif(instructor_email, student_email)
    return "200"

# Hardcoded meeting details
meeting_year = 2020
meeting_month = 10
meeting_date = 10
meeting_hour = 15
meeting_minute = 30

# Hardcoded emails for testing
instructor_email = os.getenv('INSTRUCTOR_EMAIL')
student_email = os.getenv('STUDENT_EMAIL')

# for testing
# remind(meeting_year, meeting_date, meeting_month, meeting_hour, meeting_minute, instructor_email, student_email)
remind_now(instructor_email, student_email)

if __name__ == "__main__":
	app.run(port=5001, debug=True)