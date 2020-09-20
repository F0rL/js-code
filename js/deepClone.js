function deepClone(data) {
  if (data instanceof RegExp) return new RegExp(data)
  if (data instanceof Date) return new Date(data)
  if (typeof data === 'function') return eval('data.toString()')
  if (data === null || typeof data !== 'object') return data
  let newDate = new data.constructor()
  for (let key in data) {
    let val = data[key]
    if (typeof val === 'function') {
      newDate[key] = eval('data.toString()')
    } else {
      newDate[key] = typeof val === 'object' ? deepClone(val) : val
    }
  }
  return newDate
}

const obj = {
  a: 1,
  b: true,
  c: /\s{4}/g,
  d: new Date(),
  e: [12, 22, 11, [2, 3]],
  f: {
    g: {
      h() {
        console.log('obj')
      }
    }
  }
}
console.log(typeof obj.d)

const newObj = deepClone(obj)
console.log(newObj.c === obj.c)
console.log(newObj.f === obj.f)
console.log(newObj.f.g.h === obj.f.g.h)
console.log(newObj)
