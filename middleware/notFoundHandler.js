const notFoundHandler = (req, res, next) => {
  try {
    return res.this
      .status(404)
      .json({ error: `${req.originalURL} does not exist` });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = notFoundHandler;
