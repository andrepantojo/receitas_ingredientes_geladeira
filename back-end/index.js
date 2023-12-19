require('dotenv').config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const { OpenAI } = require('openai');
const openai = new OpenAI(OPENAI_API_KEY);

const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

app.post('/pergunte-ao-chatgpt', async (req, res) => {
    console.log(req.body)
    const { prompt } = req.body;
    console.log(prompt)
    const model = 'gpt-3.5-turbo';
    const role = 'user';
    const max_tokens = 500;
    const completion = await openai.chat.completions.create({
        messages: [{ role: role, content: prompt }],
        model: model,
        //temperature: 0.7,
        max_tokens: max_tokens
    });
    console.log(completion.choices[0].message.content);
    res.json({ completion: completion.choices[0].message.content });
});

app.listen(4000, () => console.log('ChatGPT_Backend em execução na porta 4000'));