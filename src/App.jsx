import { useState } from "react";
import style from "./App.module.css";
import Header from "./sections/Header";
import Statistics from "./sections/Statistics";
import View from "./sections/View";
import Form from "./sections/Form";

const ITEMS = [];

function App() {
  const [items, setItems] = useState(ITEMS);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handlePackedItem = (id, status) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          item.packed = status;
        }
        return item;
      })
    );
  };

  const handleClearItems = function () {
    setItems([]);
  };

  return (
    <div className={style.appContainer}>
      <Header />
      <Form onAddItem={handleAddItem} />
      <View
        items={items}
        onPackedItem={handlePackedItem}
        onDeleteItem={handleDeleteItem}
        onClearItems={handleClearItems}
      />
      <Statistics items={items} />
    </div>
  );
}

export default App;
