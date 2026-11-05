import type { Ingredient } from '../types'

export const ingredients: Ingredient[] = [
  {
    id: 'masa',
    name: 'Masa',
    color: '#F2D6B3',
    icon: 'dough',
    kind: 'dough',
    unlockedByDefault: true,
  },
  {
    id: 'chocolate',
    name: 'Chocolate',
    color: '#6B4F3A',
    icon: 'chocolate',
    kind: 'sauce',
    unlockedByDefault: true,
  },
  {
    id: 'azucar',
    name: 'Azúcar',
    color: '#F2C14E',
    icon: 'sugar',
    kind: 'powder',
    unlockedByDefault: true,
  },
  {
    id: 'cafe',
    name: 'Café',
    color: '#9C7B60',
    icon: 'coffee',
    kind: 'liquid',
    unlockedByDefault: true,
  },
  {
    id: 'leche',
    name: 'Leche',
    color: '#E3ECF5',
    icon: 'milk',
    kind: 'liquid',
    unlockedByDefault: true,
  },
  {
    id: 'mantequilla',
    name: 'Mantequilla',
    color: '#F5D78E',
    icon: 'butter',
    kind: 'solid',
    unlockedByDefault: true,
  },
  {
    id: 'sakura',
    name: 'Sakura',
    color: '#FFB7C5',
    icon: 'sakura',
    kind: 'sprinkle',
    unlockedByDefault: false,
  },
  {
    id: 'canela',
    name: 'Canela',
    color: '#C97B4A',
    icon: 'cinnamon',
    kind: 'powder',
    unlockedByDefault: false,
  },
  {
    id: 'matcha',
    name: 'Matcha',
    color: '#A8C686',
    icon: 'matcha',
    kind: 'liquid',
    unlockedByDefault: false,
  },
  {
    id: 'te',
    name: 'Té',
    color: '#E85D75',
    icon: 'tea',
    kind: 'liquid',
    unlockedByDefault: false,
  },
  {
    id: 'fresa',
    name: 'Fresa',
    color: '#E85D75',
    icon: 'fruit',
    kind: 'sprinkle',
    unlockedByDefault: false,
  },
  {
    id: 'miel',
    name: 'Miel',
    color: '#F2C14E',
    icon: 'honey',
    kind: 'liquid',
    unlockedByDefault: false,
  },
  {
    id: 'nuez',
    name: 'Nuez',
    color: '#9C7B60',
    icon: 'nut',
    kind: 'sprinkle',
    unlockedByDefault: false,
  },
  {
    id: 'hierba',
    name: 'Hierba',
    color: '#6F8F55',
    icon: 'herb',
    kind: 'sprinkle',
    unlockedByDefault: false,
  },
  {
    id: 'agua',
    name: 'Agua',
    color: '#8FB8DE',
    icon: 'water',
    kind: 'liquid',
    unlockedByDefault: false,
  },
  {
    id: 'chispas',
    name: 'Chispas confitadas',
    color: '#E85D75',
    icon: 'sparkle',
    kind: 'sprinkle',
    unlockedByDefault: false,
  },
]

export const ingredientById = (id: string | null | undefined) =>
  ingredients.find((ingredient) => ingredient.id === id)

export const getIngredientName = (id: string) => ingredientById(id)?.name ?? id

export const getDefaultIngredientIds = () =>
  ingredients.filter((ingredient) => ingredient.unlockedByDefault).map((ingredient) => ingredient.id)

export const isDefaultIngredient = (id: string) =>
  Boolean(ingredientById(id)?.unlockedByDefault)
