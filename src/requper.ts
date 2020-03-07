export { default as fetch } from './hook/fetch'
export { default as xhr } from './hook/xhr'

class Lane {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

console.log(Lane)

const Lane2 = () => 1

console.log(Lane2())
