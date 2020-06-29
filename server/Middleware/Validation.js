const Joi = require('@hapi/joi');

const registerValidation = data =>{
    const register = Joi.object({
        username: Joi.string().min(6).max(30).required(),
        email: Joi.string().min(3).max(64).email().required(),
        password: Joi.string().min(8).required(),
        image: Joi.string()
    });
    return register.validate(data);
};

const LoginValidation = data =>{
    const Login = Joi.object({
        email: Joi.string().min(3).max(64).email().required(),
        password: Joi.string().min(8).required(),
    });
    return Login.validate(data);
};
module.exports.registerValidation = registerValidation;
module.exports.LoginValidation = LoginValidation;