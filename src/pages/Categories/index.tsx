import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'

import { Game } from '../Home'

import {
  useGetActionGamesQuery,
  useGetRPGGamesQuery,
  useGetSportGamesQuery,
  useGetsLutaGamesQuery,
  useGetSimulacaoGamesQuery
} from '../../Services/api'

const promocoes: Game[] = []

const emBreve: Game[] = []

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: figthGames } = useGetsLutaGamesQuery()
  const { data: rpgGames } = useGetRPGGamesQuery()
  const { data: simulacaoGames } = useGetSimulacaoGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && figthGames && rpgGames && simulacaoGames && sportGames) {
    return (
      <>
        <ProductsList games={actionGames} title="acao" background="black" />
        <ProductsList games={sportGames} title="esportes" background="gray" />
        <ProductsList games={figthGames} title="luta" background="black" />
        <ProductsList games={rpgGames} title="rpg" background="gray" />
        <ProductsList
          games={simulacaoGames}
          title="simulacao"
          background="black"
        />
      </>
    )
  }
  return <h4>Careregando...</h4>
}

export default Categories
