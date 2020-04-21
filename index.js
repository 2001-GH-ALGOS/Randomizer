function randomizer(names){
  const keys = Object.keys(names)
  //shuffles array
  keys.sort(()=> Math.random() - 0.5)

  let pairs = []
  let pair

//for more randomization
  let randomNumber = 2
  while(keys.length){
  
    let i = randomNumber
  // if i gets larger than keys.length, set default value of i to 0
    if(i >= keys.length){
      i = 0
    }
    pair = keys.splice(i,2)
   
    pairs.push(pair)
  }
  return pairs
}
