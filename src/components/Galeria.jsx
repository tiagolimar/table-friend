/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { GridCards } from './GridCards';

export const Galeria = (props) => {
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(props.url);
      const photos = await response.json();
      setData(photos.slice(0,props.size));
    };
    fetchData();
  }, [props.url]);

  return data.length > 0 ? (
    <div className="container mt-4">
      <h2 className="text-center">Galeria de Fotos</h2>
      <GridCards data={data} />
    </div>
  ) : null;
};
