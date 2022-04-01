const { check, validationResult } = require("express-validator");

const generateValidators = () => [
    check("title")
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage("Title can not be empty!"),
    
    check("desc")
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage("Description can not be empty!")
        .isLength({min: 20})
        .withMessage("Minimum 20 characters required!"),
    
    check("url")
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage("Url can not be empty!")
        .isURL()
        .withMessage("Invalid url!")
];

const reporter = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(422).json({errors: errors.array()});
    next();
};

module.exports = {
    addAndUpdate: [
        generateValidators(),
        reporter
    ]
};
