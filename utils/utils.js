const ERROR_CODE = 400;
const ERROR_NOT_FOUND = 404;
const ERROR_INTERNAL_SERVER = 500;

const errorsHandler = (err, res) => {
  if (err.name === 'SomeErrorName') {
    return res
      .status(ERROR_CODE)
      .send({ message: `Ошибка ${ERROR_CODE}.` });
  }
  if (err.name === 'ValidationError') {
    return res
      .status(ERROR_CODE)
      .send({ message: 'Переданы некорректные данные.' });
  }

  return res
    .status(ERROR_INTERNAL_SERVER)
    .send({ message: `Ошибка сервера ${ERROR_INTERNAL_SERVER}` });
};

module.exports = {
  ERROR_CODE, ERROR_NOT_FOUND, ERROR_INTERNAL_SERVER, errorsHandler,
};
