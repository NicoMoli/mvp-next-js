import styles from "./headerMobile.module.css"

const HeaderMobile = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img
            src="/logo-basement-mobile.svg"
            width="28.85"
            height="40"
            className={styles.logoBasement}
          ></img>
        </div>
        <div>
          <button className={styles.buttonCart}>CART (1)</button>
        </div>
      </div>
    </>
  )
}

export default HeaderMobile
