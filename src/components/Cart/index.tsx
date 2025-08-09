import Button from '../Button'
import star from '../../assets/images/star_wars.png'

import {
  CartCOntainer,
  CartItem,
  Overlay,
  Price,
  Quantity,
  SideBAr
} from './styles'

import { close } from '../../store/reducers/Cart'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Item } from '../../pages/Categories/Gallery/styles'
import { formataPreco } from '../ProductsList'

export const Cart = () => {
  const { isOpen, itens } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }
  return (
    <CartCOntainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBAr>
        <ul>
          {itens.map((Item) => (
            <>
              <CartItem key={Item.id}>
                <img src={Item.media.thumbnail} alt={Item.name} />
                <div>
                  <h3>{Item.name}</h3>
                  <Tag>{Item.details.category} </Tag>
                  <Tag>{Item.details.system}</Tag>
                  <span>{formataPreco(Item.prices.current)}</span>
                </div>
                <button type="button" />
              </CartItem>
            </>
          ))}
        </ul>
        <Quantity>{itens.length} jogos no carrinho</Quantity>
        <Price>
          Total de R$ 250,00 <span>Em até 6x sem juros</span>
        </Price>
        <Button type="button" title="Clique aqui e continue">
          cosntinuar com a compra
        </Button>
      </SideBAr>
    </CartCOntainer>
  )
}
