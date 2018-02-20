**Node Petname**
=========

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A utility to generate "pet names", consisting of a random combination of adverbs, an adjective, and an animal name.

Ported from: https://github.com/lcherone/php-petname

## Install

Require this package with npm using the following command:

``` bash
$ npm install node-petname --save
```

## Usage

```
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
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING) for details.


## Credits

- [Lawrence Cherone](https://github.com/lcherone)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.