import typeIs from './type'

function typeIs(basic){
  let type = Object.prototype.toString.call(basic).slice(8,-1)
  return type.toLowerCase()
}

let obj = {},
    arr = [],
    rex = /\s/g,
    fun = function (){},
    time = new Date(),
    str = 'kuma',
    num = 12,
    bol = false,
    und = undefined,
    nul = null,
    sym = Symbol('a');

console.log(typeIs(obj) === 'object')
console.log(typeIs(arr) === 'array')
console.log(typeIs(rex) === 'regexp')
console.log(typeIs(fun) === 'function')
console.log(typeIs(time) === 'date')
console.log(typeIs(str) === 'string')
console.log(typeIs(num) === 'number')
console.log(typeIs(bol) === 'boolean')
console.log(typeIs(und) === 'undefined')
console.log(typeIs(nul) === 'null')
console.log(typeIs(sym) === 'symbol')