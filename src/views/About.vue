<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="item, index in items" :key="index">
      {{ item.id }}
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { getStoreItemAll } from '@/services/user'
import type { ItemInfo } from '@/types/user'

export default defineComponent({
  name: 'About',
  setup() {
    const items = reactive<ItemInfo[]>([])
    onMounted(async () => {
      try {
        const res = await getStoreItemAll({
          page_size: 20,
          page: 1
        })

        const { pagination, item } = res.toObject()

        console.log(pagination)
        items.push(...item)
      } catch (e) {
        console.log(e)
      }
    })
    return {
      items
    }
  },
})
</script>
