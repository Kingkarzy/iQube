import { useEffect, useState } from "react";

const ReduxApi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://covidnigeria.herokuapp.com/api");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? <pre>{data.map((data, index) => {
        <li key={index}>{data}</li>
      })}</pre> : <p>Loading Data...</p>}
    </div>
  );
};

export default ReduxApi;
