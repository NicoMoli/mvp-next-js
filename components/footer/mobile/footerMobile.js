import Image from "next/image"
import styles from "./footerMobile.module.css"

const FooterMobile = () => {
  return (
    <>
      <div className={styles.container}>
        <Image src={"/footer.svg"} width={343} height={128}></Image>
      </div>
    </>
  )
}

export default FooterMobile
