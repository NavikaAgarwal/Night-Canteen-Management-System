import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST DISHES IN THE CAMPUS! </h1>
      <p className={styles.desc}>
        Get delicious veg and non-veg dishes!<br />
        Have a sip of various cold and hot beverages!<br />
        Enjoy delicious desserts!<br />
        Quality food at affordable prices!
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
