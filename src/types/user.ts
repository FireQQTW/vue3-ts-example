export interface ItemInfo {
  id: string
  display_name: string
  desc: string
  img: string
  credit_value: number
  category: number
  weight: number
}

export interface MyItem {
  item: ItemInfo
  count: number  
}