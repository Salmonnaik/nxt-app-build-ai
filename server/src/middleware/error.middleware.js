// ============================================
// error.middleware.js - Global Error Handling
// ============================================
// Catches errors from anywhere in the app and
// sends a clean error response to the client.
//
// Express 5.x automatically catches async errors,
// so we don't need express-async-errors!
//
// Status codes we use:
//   404 = Not Found (route doesn't exist)
//   500 = Server Error (something broke)
// ============================================

/**
 * 404 Handler - When a route doesn't exist.
 * Example: GET /api/nonexistent → "Route not found"
 */
export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
};

/**
 * Global Error Handler - Catches all unhandled errors.
 *
 * Express knows this is an error handler because
 * it has 4 parameters: (err, req, res, next)
 */
export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.message);

  res.status(500).json({
    success: false,
    message: err.message || 'Something went wrong on the server.',
  });
};
