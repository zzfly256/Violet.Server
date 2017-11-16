const crypto = require('crypto')
const rand = require('csprng')
const Captchapng = require('captchapng2')

exports.hash = value => {
  const hash = crypto.createHash('sha512')
  hash.update(value)
  return hash.digest('hex')
}

exports.rand = () => {
  return rand(260, 36)
}

exports.getVCode = async(value) => {
  let png = new Captchapng(80, 30, value)
  return 'data:image/png;base64,'.concat(png.getBase64())
}