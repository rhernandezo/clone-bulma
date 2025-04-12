<template>
  <aside class="aside w-64 p-2 hidden md:block">
    <div v-for="category in categories" :key="`category-${category.id}`">
      <h2 class="text-cyan-500 font-bold">{{ category.name }}</h2>
      <ul
        v-for="subCategory in category.subCategories"
        :key="`sub-category-${subCategory.id}`"
        class="text-sm"
      >
        <li>
          <a
            class="flex items-center justify-between cursor-pointer rounded-lg px-4 py-1"
            @click="toggleSubCategory(subCategory)"
          >
            <span>{{ subCategory.name }}</span>
            <span
              class="text-primary font-extrabold text-xl"
              :class="[
                'transition-transform duration-300',
                subCategory.showItems ? 'rotate-90' : 'rotate-0',
              ]"
            >
              ﹥
            </span>
          </a>
          <ul
            :class="[
              'ml-4 transition-all duration-300 ease-in-out overflow-hidden',
              subCategory.showItems
                ? `opacity-100 max-h-[${subCategory.items.length * 40}px]`
                : 'opacity-0 max-h-0',
            ]"
          >
            <li v-for="item in subCategory.items" :key="`item-${item.id}`">
              <a
                class="rounded-lg px-4 py-1 font-light"
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
import { ref } from 'vue'
import type { SidebarCategory, SidebarCategorySubCategory } from '@/types'

const categories = ref<SidebarCategory[]>([
  {
    id: 1,
    name: 'CSS Library',
    class: 'text-green-500 font-bold',
    subCategories: [
      {
        id: 1,
        name: 'Elements',
        showItems: false,
        items: [
          { id: 1, name: 'Buttons', href: '#', active: false },
          { id: 2, name: 'Forms', href: '#', active: false },
          { id: 3, name: 'Navbar', href: '#', active: false },
          { id: 4, name: 'Pagination', href: '#', active: false },
          { id: 5, name: 'Tabs', href: '#', active: false },
          { id: 6, name: 'Tags', href: '#', active: false },
        ],
      },
      {
        id: 2,
        name: 'Otros',
        showItems: false,
        items: [{ id: 1, name: 'Blah blah blah', href: '#', active: false }],
      },
    ],
  },
])

const toggleSubCategory = (subCategory: SidebarCategorySubCategory) => {
  subCategory.showItems = !subCategory.showItems
}
</script>

<style scoped lang="scss">
.aside {
  background-color: var(--color-bg-aside);
  color: var(--color-text-sidebar);
}

a {
  @apply rounded-lg px-4 py-1;
  display: flex;

  &:hover {
    background-color: var(--color-text-sidebar-hover);
  }
}
</style>
