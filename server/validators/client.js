import Joi from 'joi';

import { baseReqBodyValidator, baseReqParamsValidator } from './index';

export const newBooking = (req, res, next) => {
  const schema = Joi.object({
    userId: Joi.any().required(),
    agentId: Joi.any().required(),
    startAt: Joi.string().required(),
    finishAt: Joi.string().required()
  });

  baseReqBodyValidator(schema, req, res, next);
};

export const bookingId = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.number().integer().required()
  });

  baseReqParamsValidator(schema, req, res, next);
};
