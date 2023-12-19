import axios from "axios"
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const { OpenAI } = require('openai');
const openai = new OpenAI(OPENAI_API_KEY);

app.use(express.json());

export default axios.create({
    baseURL: 'https://api.openai.com/v1/models',
    headers: {
        Authorization: openai.apiKey
        prompt: this.state.busca
    }


    const { prompt } = req.body
    const model = 'gpt-3.5-turbo'
    const role = 'user'
    const max_tokens = 50
    const completion = openai.chat.completions.create({
        messages: [{ role: role, content: prompt }],
        model: model,
        max_tokens: max_tokens
    });
    res.json({ completion: completion.choices[0].message.content });
})