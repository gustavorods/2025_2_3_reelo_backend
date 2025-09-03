require("dotenv").config();
const { GoogleGenAI } =  require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(instruction, text) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `Instrução: ${instruction} \n Texto: ${text}`,
  });
  
  return response.text
}

module.exports = main;
