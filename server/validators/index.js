export const baseReqBodyValidator = (schema, req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    next({
      code: 400,
      status: 'error',
      message: error.message
    });
  } else {
    next();
  }
};

export const baseReqParamsValidator = (schema, req, res, next) => {
  const { error } = schema.validate(req.params);
  if (error) {
    next({
      code: 400,
      status: 'error',
      message: error.message
    });
  } else {
    next();
  }
};
