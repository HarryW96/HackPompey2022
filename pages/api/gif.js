const apiKey = process.env.GIPHY_API_KEY;

export default async function handler(req,res) {
  const params = req.params;

  const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${params?.q}&api_key=${apiKey}`);

  res.send(response.body)
}
