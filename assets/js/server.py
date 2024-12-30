from flask import Flask, request
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = Flask(__name__)

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.json

    sender_email = "info@makhmali.net"
    sender_password = "Rastin.6301"
    receiver_email = "therealseyed@gmail.com"
    smtp_server = "mail.makhmali.net"
    smtp_port = 465

    # Create message container
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = receiver_email
    msg['Subject'] = "New Contact Form Submission"

    # Create the body of the message
    body = f"""
    نام: {data['name']}
    نام خانوادگی: {data['lastname']}
    شماره تلفن: {data['phone']}
    آدرس پست الکترونیکی: {data['email']}
    پیام: {data['message']}
    """
    msg.attach(MIMEText(body, 'plain'))

    # Send the message via local SMTP server
    try:
        server = smtplib.SMTP_SSL(smtp_server, smtp_port)
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, receiver_email, msg.as_string())
        server.quit()
        return {'status': 'success'}
    except Exception as e:
        print(f"Error: {e}")  # چاپ خطا در کنسول
        return {'status': 'error', 'message': str(e)}

if __name__ == '__main__':
    app.run(debug=True)
