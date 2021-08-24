import styles from "./headerMobile.module.css"

const HeaderMobile = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img
            src="/logo-basement.png"
            width="28.85"
            height="40"
            className={styles.logoBasement}
          ></img>
          <img src="/logo-basement-dot.png" width="8.05" height="8.37"></img>
        </div>
        <div>
          <button className={styles.buttonCart}>CART (1)</button>
        </div>
      </div>
    </>
  )
}

export default HeaderMobile
