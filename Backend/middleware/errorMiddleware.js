const isDevelopment = true; // Set to false for production

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
    error: isDevelopment ? err : {}, // Show full error details only in development mode
  });
};

export default errorHandler;
