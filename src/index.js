const adjectives = require('./words/adjectives.json')
const adverbs = require('./words/adverbs.json')
const names = require('./words/names.json')

var randomItem = (items) => {
  if (items.length === 0) {
    console.error('Items is empty')
    return ''
  }

  return items[Math.floor(Math.random() * items.length)]
}

exports.petName = function(words = 1, separator = '-') {
  if (words <= 1) {
    return randomItem(names)
  } else if (words === 2) {
    return randomItem(adjectives) + separator + randomItem(names)
  }

  let petname = []
  for (let i = 0; i < words-2; i++) {
    petname[] = randomItem(adverbs)
  }
  petname[] = randomItem(adjectives)
  petname[] = randomItem(names)

  return petname.join(separator)
}
