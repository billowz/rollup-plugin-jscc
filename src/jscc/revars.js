/**
 * @module regexlist
 */
export {
  MLCOMMS,
  SLCOMMS,
  STRINGS,
  DIVISOR,
  REGEXES,
  HTMLCOMMS,
  ISCOMMENT } from './../util/regexes'

// The constant values of this module

export const VARPAIR = /^\s*(__[0-9A-Z][_0-9A-Z]*)\s*=?(.*)/
export const VARNAME = /^__[0-9A-Z][_0-9A-Z]*$/

// var names inside expression
export const EVLVARS = /(^|[^$\w\.])(__[0-9A-Z][_0-9A-Z]*)\b(?=[^$\w]|$)/g

// var names inside the code
export const REPVARS = /(^|[^\w\.])(?!$\$)\$(__[0-9A-Z][_0-9A-Z]*)\b(?=[^$\w]|$)/g