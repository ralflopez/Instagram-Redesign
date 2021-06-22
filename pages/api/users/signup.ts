import { NextApiRequest, NextApiResponse } from "next";
import { signUpSchema } from "../../../lib/pg/functions/users/schema";
import joi from 'joi'
import bcrypt from 'bcrypt'
import { CREATE_USER } from '../../../lib/pg/functions/users'

// sign up route

const signUp = async (req: NextApiRequest, res: NextApiResponse) => {
    // validate input
    const { value }: joi.ValidationResult = signUpSchema.validate(req)

    if (!value)
        return res.status(400).send('Invalid Input')
    
    // hash password
    const salt: string = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(req.body.password, salt)

    // insert to db
    const user = await CREATE_USER({...req.body, hashedPass })

    return res.status(200).json(user)
}

export default signUp