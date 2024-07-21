const { z } = require("zod");

const passwordRegex =
  /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,20}$/;

const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

const userSchema = z.object({
  firstname: z
    .string({
      invalid_type_error: "Votre prénom doit être une chaine de caractères",
    })
    .min(2, {
      message: "Votre prénom doit contenir au minimum 2 caractères",
    })
    .max(30, {
      message: "Votre prénom ne doit pas dépasser 30 caractères",
    }),

  lastname: z
    .string({
      invalid_type_error: "Votre nom doit être une chaine de caractères",
    })
    .min(2, {
      message: "Votre nom doit contenir au minimum 2 caractères",
    })
    .max(50, {
      message: "Votre nom ne doit pas dépasser 50 caractères",
    }),

  email: z.string().regex(emailRegex, {
    message: "Votre email n'a pas un format valide",
  }),

  password: z
    .string()
    .regex(passwordRegex, {
      message:
        "Votre mot de passe doit contenir un chiffre, une majuscule, une minuscule et un caractère spécial",
    })
    .min(8, {
      message: "Votre mot de passe doit contenir au minimum 8 caractères",
    })
    .max(20, {
      message: "Votre mot de passe ne doit pas dépasser 20 caractères",
    }),
});

const validateUserSchema = (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  const validate = userSchema.safeParse({
    firstname,
    lastname,
    email,
    password,
  });

  if (!validate.success) {
    const errors = validate.error.issues.reduce((acc, issue) => {
      acc[issue.path[0]] = issue.message;
      return acc;
    }, {});

    return res.status(403).json(errors);
  }
  return next();
};

module.exports = validateUserSchema;
