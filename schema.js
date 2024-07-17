const Joi= require("joi");

module.exports.listingSchema= Joi.object({
    listing : Joi.object({
        name: Joi.string().required(),
        age: Joi.number().required().min(0),
         phone: Joi.number().required(),
         location: Joi.string().required(),
         country: Joi.string().required(),
         image: Joi.string().allow("", null),
    }).required()
});