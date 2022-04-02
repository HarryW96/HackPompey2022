import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req,res) {

    const body = JSON.parse(req.body)

    const response = await openai.createCompletion("text-davinci-002", {
      prompt: `${body.recipientName} is ${body.relationship}. Respond to the messages from ${body.recipientName} with a ${body.tone} tone: \n\n ${body.content}`,
      temperature: 0.9,
      max_tokens: 512,
      top_p: 1
    });

    res.send(response.data.choices[0])
}
