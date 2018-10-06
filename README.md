# time-now-custom-element
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![license](https://img.shields.io/github/license/marinko-peso/time-now-custom-element.svg)](https://github.com/marinko-peso/time-now-custom-element/blob/master/LICENSE)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard)

Show updated current time in an html element. Date and time will automatically refresh every second.



## Usage

Include the ```now-element.js``` in your html page and simply add ```<x-time-now></x-time-now>``` element.
```format``` propery is optional with following rules:
- ```Y```: year number (example: 2018)
- ```M```: month number (example: 09)
- ```B```: month name (example: September)
- ```D```: day number (example: 2)
- ```C```: day name (example: Tuesday)
- ```h```: hours number (example: 23)
- ```m```: minutes number (example: 55)
- ```s```: seconds number (example:12)

Default format: ```Y-M-D h:m:s``` which yields: ```2018-09-07-Sunday 01:42:34```


## License

MIT.
