import styles from "./footerDesktop.module.css"
import Image from "next/image"

const FooterDesktop = () => {
  return (
    <>
      <div className={styles.container}>
        <Image src={"/footer.svg"} width={1367} height={486}></Image>
      </div>
    </>
  )
}

export default FooterDesktop
