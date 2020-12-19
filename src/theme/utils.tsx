import { get } from 'lodash'
import Color from 'color'
import { theme } from './theme'

export const color = (type = 'primary', shade = 100, opacity = 1) =>
  Color(get(theme, ['colors', type, shade], type))
    .alpha(opacity)
    .string()

export const font = (type = 'primary') => get(theme, ['fonts', type])

export const media = (type = 'mobile') => get(theme, [`media`, type])
