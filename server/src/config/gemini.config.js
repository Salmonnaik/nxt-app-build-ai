import { GoogleGenerativeAI } from "@google/generative-ai";

console.log("Gemini API Key:", process.env.GEMINI_API_KEY ? "Loaded" : "Not loaded");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const MODEL_NAME = "gemini-1.5-flash";

const generateContent = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error("Gemini API Error:", error.message);
    throw new Error(`Gemini API failed: ${error.message}`);
  }
};

export { generateContent };