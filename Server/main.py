from openai import OpenAI
from flask import Flask, jsonify
from flask_cors import CORS
import api_key
client = OpenAI(
    api_key=api_key.api_key
)

app = Flask(__name__)
cors = CORS(app, origin='*')

@app.route("/api/message", methods=['GET'])
def users():
    
    
    return jsonify(
        {
            "users": [
                'Ronit',
                'Ria',
                'Surbhi',
                'Raj'
            ]
        }
    )
# completion = client.chat.completions.create(
#     model="gpt-4o",
#     store=True,
#     messages=[
#         {"role": "user", "content": "write a haiku about ai"}
#     ]
# )
# print(completion.choices[0].message.content)

if __name__ == "__main__":
    app.run(debug=True, port=8080)