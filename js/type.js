function typeIs(basic){
  let type = Object.prototype.toString.call(basic).slice(8,-1).toLowerCase()
  return type
}

export default typeIs