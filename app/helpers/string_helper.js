
const MAX_TITLE_LENGTH = 40

const base64ToAscii = str => {
  const asciiString = Buffer.from(str, 'base64').toString('ascii')

  return asciiString
}

const cipherTitle = base64String => {
  const asciiString = base64ToAscii(base64String)
  const substringLength = Math.abs(MAX_TITLE_LENGTH)
  const endOfString = asciiString.substr(-substringLength)
  const reversedString = endOfString.split('').reverse().join('')

  return reversedString
}

export {
  base64ToAscii,
  cipherTitle
}
