# portfolio_site/api.py (example)
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

featured_posts = []

@app.route("/api/featured", methods=["POST"])
def add_featured():
    content = request.json.get("content")
    featured_posts.append(content)
    return jsonify({"message": "Content added to featured list"}), 200

@app.route("/api/featured", methods=["GET"])
def get_featured():
    return jsonify(featured_posts), 200

if __name__ == "__main__":
    app.run(port=5001)
