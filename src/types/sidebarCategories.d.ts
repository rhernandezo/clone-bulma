export interface SidebarCategory {
  id: number
  name: string
  class: string
  subCategories: SidebarCategorySubCategory[]
}

export interface SidebarCategorySubCategory {
  id: number
  name: string
  showItems: boolean
  items: SidebarCategorySubCategoryItem[]
}

export interface SidebarCategorySubCategoryItem {
  id: number
  name: string
  href: string
  active: boolean
}
