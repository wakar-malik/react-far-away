import Packing from "./Packing";
import Sorting from "./Sorting";
import styles from "./View.module.css";

function View({ items, onDeleteItem, onPackedItem, onClearItems }) {
  return (
    <div className={styles.viewContainer}>
      <Packing
        items={items}
        onDeleteItem={onDeleteItem}
        onPackedItem={onPackedItem}
        onClearItems={onClearItems}
      />
      <Sorting items={items} onClearItems={onClearItems} />
    </div>
  );
}

export default View;
