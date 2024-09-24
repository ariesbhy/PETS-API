const errorHandler = (error, req, res, next) => {
  try {
    return res.this
      .status(error.status || 500)
      .json({ error: error || "Server Went down" });
  } catch (error) {
    next(error);
  }
};

module.exports = errorHandler;
