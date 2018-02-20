/*
 +----------------------------------------------------------------------+
 | Node Petname
 +----------------------------------------------------------------------+
 | Copyright (c)2018 (https://github.com/lcherone/node-petname)
 +----------------------------------------------------------------------+
 | This source file is subject to MIT License
 | that is bundled with this package in the file LICENSE.
 |
 | If you did not receive a copy of the license and are unable to
 | obtain it through the world-wide-web, please send an email
 | to lawrence@cherone.co.uk so we can send you a copy immediately.
 +----------------------------------------------------------------------+
 | Authors:
 |   Lawrence Cherone <lawrence@cherone.co.uk>
 +----------------------------------------------------------------------+
 */

/**
 * Bring in arrays of adjectives, adverbs & names
 */
const adjectives = require('./words/adjectives.json')
const adverbs = require('./words/adverbs.json')
const names = require('./words/names.json')

/**
 * Pick random item from items array
 */
var randomItem = (items) => {
  if (items.length === 0) {
    console.error('Items is empty')
    return ''
  }
  return items[Math.floor(Math.random() * items.length)]
}

/**
 * Module - Generate generates and returns a random pet name.
 *
 * It takes two parameters:  the number of words in the name, and a separator token.
 * If a single word is requested, simply a Name() is returned.
 * If two words are requested, a Adjective() and a Name() are returned.
 * If three or more words are requested, a variable number of Adverb() and a Adjective and a Name() is returned.
 * The separator can be any charater, string, or the empty string.
 *
 * Usage:
   <code>
   var petname = require('node-petname')

   console.log('no params', petname())  // serval
   console.log('1', petname(1))         // mayfly
   console.log('2', petname(2))         // supreme gibbon
   console.log('NaN', petname('foo'))   // foo
   console.log('1, -', petname(1, '-')) // mammoth
   console.log('2, -', petname(2, '-')) // robust-cicada
   console.log('3, -', petname(3, '-')) // verbally-romantic-maggot
   console.log('4, -', petname(4, '-')) // simply-early-enabling-dodo
   console.log('5, -', petname(5, '-')) // daily-shortly-factually-close-aphid
   </code>
 *
 * @param: int    count
 * @param: string separator [default: ' ']
 * @return string
 */
module.exports = function (count = 1, separator = ' ') {
  if (isNaN(count)) {
    return count
  }

  if (count <= 1) {
    return randomItem(names)
  } else if (count === 2) {
    return randomItem(adjectives) + separator + randomItem(names)
  }

  let petname = []
  for (let i = 0; i < count-2; i++) {
    petname.push(randomItem(adverbs))
  }
  petname.push(randomItem(adjectives))
  petname.push(randomItem(names))

  return petname.join(separator)
}
