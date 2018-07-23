const fs = require('fs')
const { csvParse, csvParseRows, csvFormat, csvFormatRows } = require('d3-dsv')

const parse = (path) => csvParse(fs.readFileSync(path, 'utf8'))

const parseRows = (path) => csvParseRows(fs.readFileSync(path, 'utf8'))

const format = (path, data) => fs.writeFileSync(path, csvFormat(data))

const formatRows = (path, data) => fs.writeFileSync(path, csvFormatRows(data))

module.exports = { parse, parseRows, format, formatRows }
