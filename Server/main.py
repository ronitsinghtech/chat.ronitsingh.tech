from openai import OpenAI
import api_key
client = OpenAI(
    api_key=api_key.api_key
)
completion = client.chat.completions.create(
    model="gpt-4o",
    store=True,
    messages=[
        {"role": "user", "content": "write a haiku about ai"}
    ]
)
print(completion.choices[0].message.content)

