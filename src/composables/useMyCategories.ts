import { ref } from 'vue'
import type { MyCategory, MyCategorySubCategory, MyCategorySubCategoryItem } from '@/types'

const categories = ref<MyCategory[]>([
  {
    id: 1,
    name: 'CSS Library',
    color: 'text-cyan-500',
    subCategories: [
      {
        id: 1,
        name: 'Elements',
        tag: 'elements',
        showItems: false,
        items: [
          { id: 1, name: 'Buttons', href: '/elements/buttons', active: false },
          { id: 2, name: 'Tabs', href: '/elements/tabs', active: false },
        ],
      },
      {
        id: 2,
        name: 'Components',
        tag: 'components',
        showItems: false,
        items: [
          { id: 1, name: 'Card', href: '/components/card', active: false },
          { id: 2, name: 'Dropdown', href: '/components/dropdown', active: false },
          { id: 3, name: 'Modal', href: '#', active: false },
          { id: 4, name: 'Navbar', href: '#', active: false },
          { id: 5, name: 'Pagination', href: '#', active: false },
          { id: 6, name: 'Tabs', href: '#', active: false },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'CSS Helpers',
    color: 'text-blue-500',
    subCategories: [
      {
        id: 1,
        name: 'Colors',
        tag: 'colors',
        href: '/colors',
        active: false,
      },
    ],
  },
])

const setCurrentView = (rutaActual: string) => {
  categories.value = categories.value.map((category: MyCategory) => {
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
              ? subCategory.items.some((item) => item.href === rutaActual)
              : false,
        }
      }),
    }
  })
}

export { categories, setCurrentView }
