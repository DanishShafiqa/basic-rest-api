import { NextFunction, Request, Response } from "express";
import Joi from "joi";

//create a schema/rule for add new medicine
const createScheme = Joi.object({
    name: Joi.string().required(),
    stock: Joi.number().min(0).required(),
    price: Joi.number().min(1).required(),
    exp_date: Joi.date().required(),
    type: Joi.string().valid("Syrup", "Tablet", "Powder").required()
})

const createValidation = (req: Request, res: Response, next: NextFunction) => {
    const validate = createScheme.validate(req.body)
    if (validate.error) {
        return res.status(400).json({
            message: validate.error.details.map(it => it.message).join()
        })
    }
    next()
}

const updateScheme = Joi.object({
    name: Joi.string().optional(),
    stock: Joi.number().min(0).optional(),
    price: Joi.number().min(1).optional(),
    exp_date: Joi.date().optional(),
    type: Joi.string().valid("Syrup", "Tablet", "Powder").optional()
})

const updateValidation = (req: Request, res: Response, next: NextFunction) => {
    const validate = updateScheme.validate(req.body)
    if (validate.error) {
        return res.status(400).json({
            message: validate.error.details.map(it => it.message).join()
        })
    }
    next()
}

export{createValidation, updateValidation}