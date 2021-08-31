import styles from "./headerMobile.module.css"

const HeaderMobile = ({ totalItems, toggle }) => {
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
          <button onClick={() => toggle()} className={styles.buttonCart}>
            {totalItems ? `CART (${totalItems}) ` : "CART (0)"}
          </button>
        </div>
      </div>
    </>
  )
}

export default HeaderMobile
