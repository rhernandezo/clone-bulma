<template>
  <aside id="lirmi-sidebar" class="bg-aside w-64 p-2 hidden md:block">
    <div v-for="category in sidebarCategories" :key="`category-${category.id}`">
      <h2 class="font-bold" :class="category.color">{{ category.name }}</h2>
      <ul
        v-for="subCategory in category.subCategories"
        :key="`sub-category-${subCategory.id}`"
        class="text-sm"
      >
        <li>
          <a
            class="flex items-center justify-between cursor-pointer rounded-lg px-4 py-1"
            @click="handleSubCategoryClick(subCategory)"
          >
            <p>
              <span class="icon text-lg mr-1">
                <i class="fa-brands fa-elementor"></i>
              </span>
              {{ subCategory.name }}
            </p>
            <span
              v-if="subCategory.items"
              class="text-primary font-extrabold text-xl"
              :class="[
                'transition-transform duration-300',
                subCategory.showItems ? 'rotate-90' : 'rotate-0',
              ]"
            >
              <span class="icon text-sm">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </span>
          </a>
          <ul
            :class="[
              'ml-4 transition-all duration-300 ease-in-out overflow-hidden',
              subCategory.showItems
                ? `opacity-100 max-h-[${(subCategory.items ? subCategory.items?.length : 0) * 40}px]`
                : 'opacity-0 max-h-0',
            ]"
          >
            <li v-for="item in subCategory.items" :key="`item-${item.id}`">
              <a
                class="flex rounded-lg px-4 py-1 font-light"
                :class="item.active ? 'text-primary' : ''"
                :href="item.href"
                >{{ item.name }}</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'
import { categories, setCategories } from '@/composables/useMyCategories'
import type { MyCategory, MyCategorySubCategory, MyCategorySubCategoryItem } from '@/types'

const router = useRouter()

const sidebarCategories = ref<MyCategory[]>(categories.value)

onBeforeMount(() => {
  const rutaActual = window.location.pathname
  updateSidebarCategories(rutaActual)
})

function updateSidebarCategories(rutaActual: string) {
  sidebarCategories.value = categories.value.map((category: MyCategory) => {
    return {
      ...category,
      subCategories: category.subCategories.map((subCategory: MyCategorySubCategory) => {
        return {
          ...subCategory,
          items:
            subCategory.items && subCategory.items.length > 0
              ? subCategory.items.map((item: MyCategorySubCategoryItem) => {
                  return {
                    ...item,
                    active: item.href === rutaActual,
                  }
                })
              : undefined,
          active: subCategory.href ? subCategory.href === rutaActual : false,
          showItems:
            subCategory.items && subCategory.items.length > 0
              ? subCategory.items.some((item) => {
                  return item.href === rutaActual
                })
              : false,
        }
      }),
    }
  })

  setCategories(sidebarCategories.value)
}

const handleSubCategoryClick = (subCategory: MyCategorySubCategory) => {
  if (subCategory.items) {
    subCategory.showItems = !subCategory.showItems
  } else if (subCategory.href) {
    router.push(subCategory.href)
  }
}
</script>

<style scoped lang="scss"></style>
