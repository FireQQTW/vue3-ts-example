import faker from 'faker'
import type { StoreRes, MyItemRes } from './user'
import * as userType from '@/types/user'
faker.locale = 'zh_TW';

export const ItemAllCount = 300;

export const genItem = (): userType.ItemInfo => ({
  id: faker.datatype.uuid(),
  display_name: faker.company.companyName(),
  desc: faker.commerce.productDescription(),
  img: faker.image.imageUrl(100, 100),
  credit_value: faker.datatype.number({ min: 50, max: 400 }),
  category: faker.datatype.number({ min: 1, max: 4 }),
  weight: faker.datatype.number({ min: 120, max: 400 }),
})

export const GenStoreItemAll = (count: number): StoreRes => ({
  pagination: {
    total: ItemAllCount,
    total_page: Math.ceil(ItemAllCount / count),
  },
  item: [...new Array(count)].map(genItem)
})

export const GenMyItemAll = (count: number): MyItemRes => ({
  pagination: {
    total: ItemAllCount,
    total_page: Math.ceil(ItemAllCount / count),
  },
  item: [...new Array(count)].map(() => ({
    item: genItem(),
    count: Math.floor(Math.random()*99)+1
  }))
})