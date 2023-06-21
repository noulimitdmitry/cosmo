import styles from "./Dialogs.module.css";

const Dialogs = () => {
  return (
      <div className={styles.dialogs}>
        <h2 className={`${styles.title} ${styles.titleDialogs}`}> Gialogs</h2>
        <li className={`${styles.item} ${styles.itemD}`}>Hey, have you ever wondered what it would be like to visit other planets in our solar system?</li>
        <li className={`${styles.item} ${styles.itemD}`}>Absolutely! I often dream about exploring the mysteries of our celestial neighbors. Which planet intrigues you the most?</li>
        <li className={`${styles.item} ${styles.itemD}`}>Well, being from Mars, I've always been curious about Earth. It's fascinating how it has such a diverse range of ecosystems and abundant water. What about you?</li>
        <li className={`${styles.item} ${styles.itemD}`}>As a Venutian, I'm naturally drawn to Venus. It's known for its extreme temperatures and thick atmosphere, but there's still so much we don't know about it. The idea of studying its unique conditions excites me.</li>
        <li className={`${styles.item} ${styles.itemD}`}>True, Venus is quite a mystery. But I've also heard that Jupiter, with its massive size and swirling storms, is a sight to behold. Imagine witnessing its iconic Great Red Spot up close!</li>
        <li className={`${styles.item} ${styles.itemD}`}>Absolutely! Jupiter's majestic presence and its many moons make it a captivating destination. And let's not forget about Saturn with its mesmerizing rings. It would be incredible to see them firsthand.</li>
        <li className={`${styles.item} ${styles.itemD}`}>Agreed! And what about the outermost planets, Uranus and Neptune? They're often overlooked, but their icy atmospheres and intriguing compositions make them intriguing candidates for exploration.</li>
        <li className={`${styles.item} ${styles.itemD}`}> You're right. The allure of the distant and enigmatic Uranus and Neptune cannot be ignored. The more we discover about our solar system, the more it becomes clear that there's so much left to explore and understand.</li>
        <li className={`${styles.item} ${styles.itemD}`}>Indeed, the wonders of our solar system are endless. It's a constant reminder of how vast and awe-inspiring the universe truly is. Let's keep dreaming and pushing the boundaries of knowledge together!</li>
        <li className={`${styles.item} ${styles.itemD}`}>Neptune</li>
      </div>
  );
};

export default Dialogs;