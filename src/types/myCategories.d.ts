export interface MyCategory {
  id: number
  name: string
  color: string
  subCategories: MyCategorySubCategory[]
}

export interface MyCategorySubCategory {
  id: number
  name: string
  tag: string
  showItems?: boolean
  items?: MyCategorySubCategoryItem[]
  href?: string
  active?: boolean
}

export interface MyCategorySubCategoryItem {
  id: number
  name: string
  href: string
  active: boolean
}
