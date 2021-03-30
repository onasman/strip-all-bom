# strip-all-bom

> This is a package that allows you to strip all UTF-8 [byte order marks](https://en.wikipedia.org/wiki/Byte_order_mark#UTF-8) (BOM) from a string.

## Usage

```ts
import stripAllBom from 'strip-all-bom';

stripAllBom('\uFEFF🙈\uFEFF🙉\uFEFF🙊');
//=> '🙈🙉🙊'
```

## Install

```
$ npm install strip-all-bom
```

## Why?

> I used a rich text editor which added ZWNBSP (Zero Width No-Break Space, BOM) on mentions which in turn messed up the tsvector search column in a postgres db. I created this package to strip all content from BOMs before saving.

From Wikipedia:

> The Unicode Standard permits the BOM in UTF-8, but does not require nor recommend its use. Byte order has no meaning in UTF-8.
