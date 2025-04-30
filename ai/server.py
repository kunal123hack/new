from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os


app = Flask(__name__)
CORS(app)  # Enable CORS

PAGE_ID = "590743120800247"
# ACCESS_TOKEN = "EAAanxPF3CZB4BO7sPMj8f67XgzLRX9cGw86dz93qWZBMYheG1JZAUgEKt6ZC9XG2oMtoDcrZCgc30yA0rFfprS4h4S6NIIAgbWpGKfubbUOjeWIQDMTbIQbZBDlS3gmgmoiylrcFUKHH4HpQiCWd2VKqhxdyE9lvl9ZADAzmdrzglZAi6xIAXA9NFdPaE0ZCxXkwaJ5AbnYhvZBZBO1AM2XLR0y"
ACCESS_TOKEN = "EAAanxPF3CZB4BO20DQZByi3lCGSSfjXc7HiapX7G3M2l2dK2I4eTNChPQCrgHGyZCQV7imirVRd0n3kXGZA0qL7OC6nrwZCZBXIXsJ2z2IiskIjCj0ZCwqX49MsO874sNZAXsc2qDwVopzBIlFXSZAZCZAH6g6wAJOMm1sS7QnLipXw9XeafyYOYZBLD7AVpRxo9Qtj5r4Fb9hhGzHugWli11bL3"

import google.generativeai as genai

# Replace with your API key
genai.configure(api_key="dljkf")

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
llm = genai.GenerativeModel('gemini-1.5-pro')

pr_samples = [ "A Star is Born! 🌟 Join us in welcoming the sensational [Actor's Name] to the world of cinema.",
    "Introducing the Next Big Thing! 🚀 [Actor's Name] is here to win hearts and light up the screens.",
    "A New Chapter Begins 📖✨ [Actor's Name] is our generation’s new star.",
    "Get Ready to Be Amazed! 🎥🌟 [Actor's Name] is ready to captivate audiences everywhere.",
    "Welcome the New Face of Cinema 🎬🌟 [Actor's Name] brings passion, grit, and excellence.",
    "The Countdown to Greatness Begins! ⏳🌟 Fresh, fearless, and fabulous — [Actor's Name] is here.",
    "Unveiling the Future of Entertainment! 🎉🌟 Meet [Actor's Name] — pure magic on screen.",
    "The Silver Screen's New Sensation! 🌟🎥 [Actor's Name] brings dreams to life.",
    "A New Legend in the Making 🌟 [Actor's Name] has arrived to win hearts and tell stories.",
    "A Journey of Dreams Begins 🌟🚀 Watch [Actor's Name] embark on an inspiring journey!"]  # Same examples list from Streamlit

def generate_post(actor, movie, highlights):
    examples = "\n".join(pr_samples)
    instruction = f"""
You are an expert PR writer.
{examples}
Write a new PR post for an actor launch.
Replace [Actor's Name] with '{actor}'.
Mention the movie '{movie}' and highlight: {highlights}.
Make it short (50-80 words), highly positive, and engaging for Facebook.
"""
    return llm.generate_content(instruction).text

@app.route("/generate", methods=["POST"])
def generate():
    data = request.json
    actor = data["actor"]
    movie = data["movie"]
    highlights = data.get("highlights", "")
    message = generate_post(actor, movie, highlights)
    return jsonify({"message": message})

@app.route("/post", methods=["POST"])
def post_content():
    data = request.json
    content = data["content"]

    # Post to Facebook
    fb_url = f"https://graph.facebook.com/{PAGE_ID}/feed"
    fb_payload = {"message": content, "access_token": ACCESS_TOKEN}
    fb_res = requests.post(fb_url, data=fb_payload)

    # Post to portfolio
    portfolio_res = requests.post("http://localhost:5001/api/featured", json={"content": content})

    if fb_res.status_code == 200 and portfolio_res.status_code == 200:
        return jsonify({"success": True})
    return jsonify({"success": False, "fb_status": fb_res.status_code, "portfolio_status": portfolio_res.status_code}), 500

if __name__ == "__main__":
    app.run(debug=True)
