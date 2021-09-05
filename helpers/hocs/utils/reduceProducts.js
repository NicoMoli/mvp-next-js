const reduceProducts = (items) => {
  let totalCountItems = null
  const result = [
    ...items
      .reduce((mp, item) => {
        if (!mp.has(item.id)) mp.set(item.id, { ...item, count: 0 })
        mp.get(item.id).count++
        return mp
      }, new Map())
      .values(),
  ]
  result?.forEach((item) => {
    totalCountItems += item.count
  })
  return { items: result, totalCount: totalCountItems }
}

export default reduceProducts
