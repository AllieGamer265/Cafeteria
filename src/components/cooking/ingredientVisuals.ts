import type { IconName } from '../Icon'

export type IngredientKind = 'dough' | 'sauce' | 'powder' | 'sprinkle' | 'liquid' | 'solid'

export interface IngredientVisual {
  icon: IconName
  color: string
  kind: IngredientKind
}

function normalize(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

const visuals: Record<string, IngredientVisual> = {
  masa: { icon: 'dough', color: '#f2d6b3', kind: 'dough' },
  chocolate: { icon: 'chocolate', color: '#6b4f3a', kind: 'sauce' },
  azucar: { icon: 'sugar', color: '#f2c14e', kind: 'powder' },
  cafe: { icon: 'coffee', color: '#9c7b60', kind: 'liquid' },
  leche: { icon: 'milk', color: '#fffdf7', kind: 'liquid' },
  mantequilla: { icon: 'butter', color: '#f5d78e', kind: 'solid' },
  sakura: { icon: 'sakura', color: '#ffb7c5', kind: 'sprinkle' },
  canela: { icon: 'cinnamon', color: '#c97b4a', kind: 'powder' },
  matcha: { icon: 'matcha', color: '#a8c686', kind: 'liquid' },
  te: { icon: 'tea', color: '#e85d75', kind: 'liquid' },
  fruta: { icon: 'fruit', color: '#e85d75', kind: 'sprinkle' },
  miel: { icon: 'honey', color: '#f2c14e', kind: 'liquid' },
  nuez: { icon: 'nut', color: '#9c7b60', kind: 'sprinkle' },
  hierba: { icon: 'herb', color: '#6f8f55', kind: 'sprinkle' },
  agua: { icon: 'water', color: '#8fb8de', kind: 'liquid' },
}

const fallback: IngredientVisual = { icon: 'sparkle', color: '#e85d75', kind: 'solid' }

export function getIngredientVisual(name: string): IngredientVisual {
  return visuals[normalize(name)] ?? fallback
}

export function isDough(name: string): boolean {
  return normalize(name) === 'masa'
}
