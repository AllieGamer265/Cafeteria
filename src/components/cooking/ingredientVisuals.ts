import { ingredientById } from '../../data/ingredients'
import type { IngredientKind } from '../../types'
import type { IconName } from '../Icon'

export interface IngredientVisual {
  icon: IconName
  color: string
  kind: IngredientKind
}

const fallback: IngredientVisual = { icon: 'sparkle', color: '#E85D75', kind: 'solid' }

export function getIngredientVisual(id: string): IngredientVisual {
  const ingredient = ingredientById(id)
  if (!ingredient) return fallback
  return {
    icon: ingredient.icon as IconName,
    color: ingredient.color,
    kind: ingredient.kind,
  }
}

export function isDough(id: string): boolean {
  return ingredientById(id)?.kind === 'dough'
}
