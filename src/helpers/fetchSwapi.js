const fetchData = async (getId) => {
  const response = await fetch(`https://swapi.py4e.com/api/people/${getId}`);
  const data = await response.json();
  return data;
};

export default fetchData;
