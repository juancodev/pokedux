const API =
  import.meta.env.VITE_APP_API;

const VERSION =
  import.meta.env.VITE_APP_VERSION;

const endPoint = {
  pokemon: {
    getPokemons: `${API}${VERSION}/pokemon?limit=151`,
  }
};

export default endPoint;