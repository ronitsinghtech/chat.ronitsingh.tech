from openai import OpenAI
from flask import Flask, jsonify, request
from flask_cors import CORS
import api_key
client = OpenAI(
    api_key=api_key.api_key
)

import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = Flask(__name__)
cors = CORS(app, origins=["http://localhost:5173"])

@app.route("/api/chat", methods=['POST'])
def chat():
    data = request.get_json()
    if not data or "messages" not in data:
        return jsonify({"error": "No prompt provided"}), 400
    
    messages = data["messages"]

    try:
        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages
        )
        ai_response = completion.choices[0].message.content
        return jsonify({"response": ai_response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, port=8080)
