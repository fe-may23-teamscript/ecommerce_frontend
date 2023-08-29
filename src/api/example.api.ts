export const fetchExample = async () => {
  try {
    const phones = await fetch('pathToApi');

    return phones.json();
  } catch (e) {
    console.log(e);
  }
};
