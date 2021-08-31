import { useEffect, useState } from "react"
import HeaderMobile from "../header/mobile/headerMobile"
import HeaderDesktop from "../header/desktop/headerDesktop"

const Header = () => {
  const [countItems, setCountItems] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      let result = null
      let totalCountItems = null
      const itemsStorage = JSON.parse(window.localStorage.getItem("cart"))

      if (itemsStorage?.length > 0) {
        result = [
          ...itemsStorage
            .reduce((mp, item) => {
              if (!mp.has(item.id)) mp.set(item.id, { ...item, count: 0 })
              mp.get(item.id).count++
              return mp
            }, new Map())
            .values(),
        ]
      }
      result?.forEach((item) => {
        totalCountItems += item.count
      })
      setCountItems(totalCountItems)
    }
  }, [])

  return (
    <>
      <HeaderDesktop />
      <HeaderMobile totalItems={countItems} />
    </>
  )
}

export default Header
