import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useWeather = (baseUrl, storageItem) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const fetchData = useCallback(
    (query) => {
      axios
        .get(query)
        .then((resp) => {
          setButtonDisabled(true);
          setTimeout(() => {
            setButtonDisabled(false);
          }, 500);
          if (resp.status === 200) {
            setError(false);
            return resp.data;
          }
        })
        .then((data) => {
          if (data.list) {
            setData({
              country: data.city.country,
              name: data.city.name,
              list: data.list,
            });
            localStorage.setItem(storageItem, data.city.name);
            return;
          }
          localStorage.setItem(storageItem, data.name);
          setData(data);
        })
        .catch(() => {
          setError(true);
        });
    },
    [storageItem]
  );

  useEffect(() => {
    if (!localStorage.getItem(storageItem) || !baseUrl) return;

    fetchData(`${baseUrl}${localStorage.getItem(storageItem)}`);
  }, [baseUrl, storageItem, fetchData]);

  return [data, fetchData, error, buttonDisabled];
};

export default useWeather;
