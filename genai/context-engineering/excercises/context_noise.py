import os
from openai import OpenAI
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def test_context(noise_blocks=0):
    noise = "blah " * 100 * noise_blocks
    prompt = f"{noise}\nPlease list 5 steps to make a cup of coffee."
    response = client.chat.completions.create(
        model="gpt-5",
        messages=[{"role": "user", "content": prompt}],
    )
    return response.choices[0].message.content

for n in [0, 5, 10, 20, 40]:
    print(f"Noise blocks: {n}")
    print(test_context(n))
    print("---")