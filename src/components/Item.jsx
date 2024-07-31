import styles from "./Item.module.css";

const Item = ({ foodItem, handleBuyButton, bought }) => {


  return (
    <li className={`list-group-item ${bought && "active"}`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-success`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
