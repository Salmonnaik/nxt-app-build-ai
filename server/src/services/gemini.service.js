import { generateContent } from '../config/gemini.config.js';

export const askGemini = async (prompt) => {
  try {
    const response = await generateContent(prompt);

    if (!response) {
      throw new Error('Gemini returned an empty response');
    }

    return response;
  } catch (error) {
    throw new Error('The AI service is currently unavailable. Please try again later.');
  }
};