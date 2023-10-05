import { useState } from "react";
import Button from "../components/Button";
import Select from "../components/Select";
import styles from "./form.module.css";

function Form({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");

  const arr = [1, 2, 3, 4, 5];

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleForm = function (e) {
    e.preventDefault();

    if (!name) {
      alert("Please enter some value first!");
      return;
    }

    const data = {
      quantity,
      name: name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase(),
      id: crypto.randomUUID(),
      packed: false,
    };

    onAddItem(data);

    setQuantity(1);
    setName("");
  };

  return (
    <div className={styles.formContainer}>
      <p className={styles.formTitle}>What do you need for your 😍 trip?</p>

      <form onSubmit={handleForm} className={styles.form}>
        <Select
          arr={arr}
          value={quantity}
          className={styles.formSelect}
          onChange={handleNumber}
        />

        <input
          type="text"
          className={styles.formInput}
          placeholder="Item..."
          value={name}
          onChange={handleName}
        />
        <Button className={styles.btn} type="submit">
          Add
        </Button>
      </form>
    </div>
  );
}

export default Form;
