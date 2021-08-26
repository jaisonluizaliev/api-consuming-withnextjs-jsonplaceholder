import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./ApiFetch.module.css";
import Button from "./Button/Button";


function ApiFetch() {
  let [data, setData] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          setData(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  console.log(Math.randon);

  return (
    <div className={styles.card}>
      {data.map((data, index) => {
        let randomUser = index < 1 ? "men" : "women";
        let randonNumber = index + 13;
        return (
          <div className={styles.cardChildren} key={index}>
            <img
              src={`https://randomuser.me/api/portraits/${randomUser}/${randonNumber}.jpg`}
              alt={data.name}
            />
            <p> name: {data.name} </p>
            <p> adress: {data.address.street}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ApiFetch;
