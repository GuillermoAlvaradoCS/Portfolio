const { OpenAI } = require('openai')
const openai = new OpenAI({apiKey: "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"})

export async function sendMsgToOpenAI(message){
    const res = await openai.completions.create({
        model: 'text-davici-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presense_penalty: 0
    })
    return res.data.choices[0].text
}