import styles from "./FoodInput.module.css";
const FoodInput = ({ handleOnKeyDown }) => {

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Food Items Here"
        className={styles.FoodInput}
        onKeyDown={handleOnKeyDown}
      />
    </div>
  );
};
export default FoodInput;
