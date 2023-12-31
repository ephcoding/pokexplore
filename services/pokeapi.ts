import axios from "axios";

const pokemonClient = axios.create({ baseURL: "https://pokeapi.co/api/v2" });

export const getAllPokemon = async () => {
  try {
    // const response = await pokemonClient.get("/pokemon?limit=151&offset=30");
    const response = await pokemonClient.get("/pokemon?limit=200");
    return response.data.results;
  } catch (error) {
    console.log("PokeAPI ERROR >>\n", error);
  }
};

export const getSinglePokemon = async (name: string) => {
  try {
    const response = await pokemonClient.get(`/pokemon/${name}`);
    return response.data;
  } catch (error) {
    console.log("PokeAPI ERROR >>\n", error);
  }
};
