const errorHandler = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  const status = err.statusCode || 500;
  const message = err.message || 'На сервере произошла ошибка.';

  res.status(status).send({
    err,
    message,
  });
  next();
};

module.exports = errorHandler;
