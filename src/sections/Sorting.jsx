import Button from "../components/Button";
import Select from "../components/Select";
import styles from "./Sorting.module.css";

function Sorting({ items, onClearItems }) {
  const arr = [
    "SORT BY INPUT ORDER",
    "SORT BY DESCRIPTION",
    "SORT BY PACKED STATUS",
  ];

  return (
    <form className={styles.sortForm}>
      {/* <Select
        className={styles.sortSelect}
        arr={arr}
      /> */}
      {items.length > 0 && (
        <Button
          className={styles.sortBtn}
          onClick={(e) => {
            e.preventDefault();
            onClearItems();
          }}
        >
          Clear List
        </Button>
      )}
    </form>
  );
}

export default Sorting;
