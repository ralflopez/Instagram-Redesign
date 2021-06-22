import joi from 'joi'

export const signUpSchema = joi.object({
    displayName: joi.string().min(4),
    email: joi.string().min(3).email().required(),
    username: joi.string().min(4).required(),
    password: joi.string().min(8).required()
})