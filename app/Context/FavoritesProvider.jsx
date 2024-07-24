"use client";
import React, { useState } from "react";
import { FavoritesContext } from "./FavoritesContext";

const FavoritesProvider = ({ children }) => {
  const [favoriteCars, setFavoriteCars] = useState([]);

  const addFavoriteCars = (car) => {
    setFavoriteCars((previousCars) => [...previousCars, car]);
  };

  const removeFavoriteCars = (carId) => {
    setFavoriteCars((previousCars) =>
      previousCars.filter((car) => car.id !== carId)
    );
  };

  const isFavorite = (carId) => {
    return favoriteCars.some((car) => car.id === carId);
  };

  const countFavorite = () => {
    return favoriteCars.length;
  };

  return (
    <div>
      <FavoritesContext.Provider
        value={{
          favoriteCars,
          setFavoriteCars,
          addFavoriteCars,
          removeFavoriteCars,
          isFavorite,
          countFavorite,
        }}
      >
        {children}
      </FavoritesContext.Provider>
    </div>
  );
};

export default FavoritesProvider;
