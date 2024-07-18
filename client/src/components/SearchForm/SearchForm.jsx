/* eslint-disable react/jsx-props-no-spreading */

import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SearchForm.css";

export default function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (formData) => {
    const data = { ...formData };
    reset();
    try {
      await axios.get(`${import.meta.env.VITE_API_URL}/api/accomodation`, data);
    } catch (e) {
      console.error(e.response.data);
      toast.error("Aucun résultat ne correspond à votre recherche");
    }
  };

  return (
    <main className="searchContainer">
      <form className="searchForm" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="searchFormTitle">
          Vos vacances <br />
          vous attendent!
        </h1>
        <input
          type="text"
          className="searchInput"
          name="city"
          placeholder="Destination"
          {...register("city", {
            required: "Entrez le nom d'une ville",
            minLength: {
              value: 2,
              message: "La destination doit contenir au minimum 2 caractères",
            },
          })}
        />
        {errors.city && <span>{errors.city.message}</span>}
        <div className="searchDateContainer">
          <input
            type="date"
            className="searchDateInput"
            name="check_in_date"
            placeholder="Arrivée"
            {...register("check_in_date")}
          />
          {errors.check_in_date && <span>{errors.check_in_date.message}</span>}
          <input
            type="date"
            className="searchDateInput"
            name="check_out_date"
            placeholder="Arrivée"
            {...register("check_out_date")}
          />
          {errors.check_out_date && (
            <span>{errors.check_out_date.message}</span>
          )}
        </div>
        <input
          type="number"
          className="searchInput"
          name="max_adults"
          placeholder="Nombres de voyageurs"
          {...register("max_adults", {
            required: "Renseignez le nombre de voyageurs",
          })}
        />
        {errors.max_adults && <span>{errors.max_adults.message}</span>}
        <input
          type="number"
          className="searchInput"
          name="max_pets"
          placeholder="Nombres d'animaux"
          {...register("max_pets", {
            required: "Renseignez le nombre d'animaux",
          })}
        />
        {errors.max_pets && <span>{errors.max_pets.message}</span>}
        <input
          type="text"
          className="searchInput"
          name="category"
          placeholder="Type de logement"
          {...register("cateogry")}
        />
        {errors.category && <span>{errors.category.message}</span>}
        <div className="searchBottomContainer">
          <button type="submit" className="searchButton">
            Valider
          </button>
        </div>
      </form>
    </main>
  );
}
