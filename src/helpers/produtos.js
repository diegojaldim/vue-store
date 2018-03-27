import { HTTP } from '@/helpers/http-common'

export const categoriasLista = categorias => {
  let string = ''
  categorias.map(item => {
    string += `- ${item.nome}`
  })
  return string
}

export const add = data => {
  return HTTP.post('carts', {
    id: data.id,
    name: data.nome,
    price: data.preco,
    quantity: data.quantidade
  })
}