//example names object for current attendees
//const names = {
//   0: 'Malinda',
//   1: 'Sonia',
//   2: 'Sooin',
//   3: 'Hilary',
//   4: 'Jasmin',
//   5: 'Esther',
//   6: 'Isabel',
//   7: 'Stephanie'
//   8: 'Carrie',
//   9: 'Sasha',
//   10: 'Beth',
//   11: 'Shay',
//   12: 'Nikki',
//   13: 'Yumiko',
//   14: 'Karen',
//   15: 'Ayse',
//   16: 'Grace',
//   17: 'Carmen',
//   18: 'Laura',
//   19: 'Danielle',
//   20: 'Nuria'
// }




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
