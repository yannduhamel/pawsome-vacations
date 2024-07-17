/* eslint-disable react/jsx-props-no-spreading */

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./RegisterPage.css";

export default function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formData = { ...data };
    delete formData.confirmpassword;
    reset();
    try {
      await axios
        .post(`${import.meta.env.VITE_API_URL}/api/user`, data)
        .finally(() => navigate("/"));
      toast.success("Votre compte a bien été créé !");
    } catch (e) {
      console.error(e.response.data);
      toast.error("Une erreur est survenue, veuillez réessayer");
    }
  };

  return (
    <main className="registerContainer">
      <form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="registerInput"
          name="firstname"
          placeholder="Prénom"
          {...register("firstname", {
            required: "Le prénom est obligatoire",
            minLength: {
              value: 2,
              message: "Votre prénom doit contenir au minimum 2 caractères",
            },
          })}
        />
        {errors.firstname && <span>{errors.firstname.message}</span>}
        <input
          type="text"
          className="registerInput"
          name="lastname"
          placeholder="Nom de famille"
          {...register("lastname", {
            required: "Le nom de famille est obligatoire",
            minLength: {
              value: 2,
              message: "Votre nom doit contenir au minimum 2 caractères",
            },
          })}
        />
        {errors.lastname && <span>{errors.lastname.message}</span>}
        <input
          type="email"
          className="registerInput"
          name="email"
          placeholder="Adresse email"
          {...register("email", {
            required: "L'adresse mail est obligatoire",
            pattern: {
              value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
              message: "L'adresse mail n'est pas valide",
            },
          })}
        />
        {errors.email && <span> {errors.email.message}</span>}
        <input
          type="tel"
          className="registerInput"
          name="phone_number"
          placeholder="Numéro de téléphone"
          {...register("phone_number", {
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Le numéro de téléphone doit contenir 10 chiffres",
            },
          })}
        />
        {errors.phone_number && <span>{errors.phone_number.message}</span>}
        <input
          type="password"
          className="registerInput"
          name="password"
          placeholder="Mot de passe"
          {...register("password", {
            required: "Le mot de passe est obligatoire",
            pattern: {
              value:
                /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,20}$/,
              message:
                "8 caractères dont une majuscule, une minuscule, un chiffre et un caractère spécial",
            },
          })}
        />
        {errors.password && <span> {errors.password.message}</span>}
        <input
          type="password"
          className="registerInput"
          name="confirmpassword"
          placeholder="Confirmez votre mot de passe"
          {...register("confirmpassword", {
            required: "La confirmation du mot de passe est obligatoire",
            pattern: {
              value:
                /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,20}$/,
            },
            validate: (value) =>
              value === watch("password") ||
              "Les mots de passe ne correspondent pas",
          })}
        />
        <button type="submit" className="registerButton">
          Valider
        </button>
      </form>
    </main>
  );
}
