
import Joi from 'joi'

export const UserSchema= Joi.object({
    email:Joi.string().required().email(),
    password:Joi.string().required().min(8)
})