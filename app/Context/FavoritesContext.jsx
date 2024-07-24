"use client";
import React, { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

const useFavorites = () => useContext(FavoritesContext);

export { FavoritesContext, useFavorites };
