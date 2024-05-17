import add from './add'

function main() {
  console.log('Hello, world!')
  console.log(add(1, 2))
}

declare let global: any
global.handler = main
