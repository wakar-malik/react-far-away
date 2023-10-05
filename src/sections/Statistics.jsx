import styles from "./Statistics.module.css";

function Statistics({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed === true);
  const packedPercentage = Math.ceil((packedItems.length / totalItems) * 100);

  return (
    <div className={styles.statisticsContainer}>
      {items.length === 0 ? (
        <h1 className={styles.statisticsTitle}>
          Start adding some items to your packing list 🚀
        </h1>
      ) : (
        <h1 className={styles.statisticsTitle}>
          💼 You have {totalItems} items on your list, and you already packed{" "}
          {packedItems.length} ({packedPercentage}%)
        </h1>
      )}
    </div>
  );
}

export default Statistics;
