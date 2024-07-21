/* eslint-disable react/jsx-props-no-spreading */

import axios from "axios";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginPage.css";

export default function LoginPage() {
  const { setCurrentUser } = useOutletContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios
        .post(`${import.meta.env.VITE_API_URL}/api/auth/login`, data, {
          withCredentials: true,
        })
        .finally(() => navigate("/"));
      setCurrentUser(response.data.user);
      toast.success("Vous êtes bien connecté!");
    } catch (e) {
      console.error(e.response.data);
      toast.error("Une erreur est survenue, veuillez réessayer");
    }
  };

  return (
    <main className="loginContainer">
      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="loginInputContainer">
          <input
            type="email"
            className="loginInput"
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
            type="password"
            className="loginInput"
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
        </div>
        <div className="loginBottomContainer">
          <button type="submit" className="loginButton">
            Se connecter
          </button>
          <p className="loginBottomText">Vous n'avez pas encore de compte?</p>
          <NavLink to="/register" className="registerRedirect">
            Inscrivez-vous
          </NavLink>
        </div>
      </form>
    </main>
  );
}
