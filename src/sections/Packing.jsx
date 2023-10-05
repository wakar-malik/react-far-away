import Button from "../components/Button";
import styles from "./Packing.module.css";

function Packing({ items, onDeleteItem, onPackedItem }) {
  if (items.length === 0) {
    return <h1 className={styles.packingTitle}>Start adding some items!</h1>;
  }

  return (
    <ul className={styles.packingList}>
      {items.map((item, index) => (
        <li key={index} className={styles.listItem}>
          <input
            type="checkbox"
            className={styles.listCheckbox}
            onChange={(e) => onPackedItem(item.id, e.target.checked)}
          />
          <p
            className={styles.listItemText}
            style={{ textDecoration: item.packed ? "line-through" : "none" }}
          >
            {item.quantity} {item.name}
          </p>
          <Button
            className={styles.listBtn}
            onClick={() => onDeleteItem(item.id)}
          >
            ❌
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Packing;
