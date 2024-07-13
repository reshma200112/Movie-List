import React, {  useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./Home.module.css";
const Home = () => {
  const { register, handleSubmit, reset } = useForm();
  const [movieList, setMovieList] = useState([]);
  const handleFormSubmit = (data) => {
    let newMovie = { ...data, id: Date.now() };
    setMovieList([...movieList, newMovie]);
    reset();
  };
  const handleRemove = (id) => {
    setMovieList(movieList.filter((movie) => movie.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1>Director and Movies</h1>
      <div className={styles.fullWidth}>
        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
          <div className={styles.wrpr}>
            <input
              type="text"
              {...register("director_name")}
              placeholder="Director name"
            />
            <input
              type="text"
              {...register("movie_name")}
              placeholder="Movie name"
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
      {movieList.map((movie) => {
        return (
          <div key={movie.id} className={styles.movieList}>
            <div className={styles.wrpr}>
              <p> {movie.director_name}</p>
              <p> {movie.movie_name}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                handleRemove(movie.id);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
