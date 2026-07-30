import * as generationService from '../services/generation.service.js';

export const generateCode = async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const { prompt } = req.body;

    if (!prompt || !prompt.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Please describe what you want to build.',
      });
    }

    const result = await generationService.generateCode(projectId, req.user._id, prompt.trim());
    return res.json({ success: true, data: result });
  } catch (error) {
    if (error.statusCode) return res.status(error.statusCode).json({ success: false, message: error.message });
    next(error);
  }
};