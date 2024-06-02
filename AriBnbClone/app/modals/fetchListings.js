export const fetchListings = async () => {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/Galaxies-dev/airbnb-clone-react-native/main/assets/data/airbnb-listings.json',
    );
    console.log({response});
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    return [];
  }
};
