import os

import openai

PROMPT = "A friendly & happy mascot, who should have some resemblance with Amul girl and will be used in ads" \
         "to explain things. Show different variants of this character."

openai.api_key = os.getenv("OPENAI_API_KEY")

response = openai.Image.create(
    prompt=PROMPT,
    n=1,
    size="512x512",
)

print(response["data"][0]["url"])
