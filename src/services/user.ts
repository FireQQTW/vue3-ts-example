import { Fake } from '@/libs'
import * as userType from '@/types/user'

import * as FAKE_DATA from './_fakeData'

export interface Paginator {
  page_size: number
  page: number
}

export interface Pagination {
  total: number
  total_page: number
}
export interface StoreRes {
  pagination: Pagination
  item: userType.ItemInfo[]
}

export interface MyItemRes {
  pagination: Pagination
  item: userType.MyItem[]
}

enum UseItemResult {
  RESULT_TYPE_NONE,
  RESULT_TYPE_SUCCESS,
  RESULT_TYPE_FAIL,
}

export interface UseItemRes {
  result_type: UseItemResult
  item: userType.ItemInfo[]
  effect_id: string[]
  alert_text: string
}

// TODO: Fake
export const getStoreItemAll = ({ page_size, page }: Paginator): Promise<Fake.FackGRPCres<StoreRes>> => Promise.resolve(
  new Fake.FackGRPCres<StoreRes>(
    FAKE_DATA.GenStoreItemAll(
      page * page_size > FAKE_DATA.ItemAllCount
      ? 0
      : page_size
    )
  )
)

// TODO: Fake
export const getMyItemAll = ({ page_size, page }: Paginator): Promise<Fake.FackGRPCres<MyItemRes>> => Promise.resolve(
  new Fake.FackGRPCres<MyItemRes>(
    FAKE_DATA.GenMyItemAll(
      page * page_size > FAKE_DATA.ItemAllCount
      ? 0
      : page_size
    )
  )
)

// TODO: Fake
export const useItem = (id: string): Promise<void> => Promise.resolve()