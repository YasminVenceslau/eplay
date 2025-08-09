import { TagContainer } from './styles'
import React from 'react' // importe React para usar React.ReactNode

export type Props = {
  size?: 'small' | 'big'
  children?: React.ReactNode // aceita string, JSX, fragmentos, arrays, etc.
}

const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
