import styles from "./FormUser.module.css";

const newUsers = [
  {
    id: 3,
    follow: true,
    photoUrl:
      "https://dovidka.biz.ua/wp-content/uploads/2020/01/%D0%BC%D0%B0%D1%80%D1%81-%D0%B4%D1%96%D1%82%D1%8F%D0%BC.jpg",
    name: "Mars",
    message: "i am red",
    position: 4,
    system: "sun",
  },
  {
    id: 4,
    follow: false,
    photoUrl:
      "https://futurenow.com.ua/wp-content/uploads/2020/09/tsikavi-fakty-pro-saturn-suputnyky-planety-saturn-kiltsya-atmosfera.jpg",
    name: "Saturn",
    message: "i am windy",
    position: 5,
    system: "cirius",
  },
];

const FormUser = (props) => {
  const setUsers = () => {
    props.setUsers(newUsers);
  };
  return (
    <div className={styles.block}>
      <button className={styles.button} onClick={setUsers}>
        SET USER
      </button>
    </div>
  );
};

export default FormUser;
