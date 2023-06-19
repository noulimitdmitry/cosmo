import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <img style={{height:"100px", display:"block"}} src="https://api.logo.com/api/v2/images?logo=logo_36c70714-603a-4010-89b8-2e791c8f8c8f&format=webp&margins=0&quality=60&width=500&background=transparent&u=1687115286" alt="" />
    </div>
  );
}

export default Header