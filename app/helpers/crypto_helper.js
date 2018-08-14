import crypto from 'crypto'
import pako from 'pako'

// Wrap encryption methods in this module to abstract it from application.

/**
 * @param publicKey - PEM-encoded public key string
 * @param obj - an object of data
 */
// TODO: compress data before encrypting
// TODO: sign base64 string with something from the server so it can be authenticated?
const encryptMessage = (publicKey, obj) => {
  const jsonStr = JSON.stringify(obj)
  const compressedBuffer = pako.deflate(jsonStr) // return utf8-encoded buffer
  const encryptedBuffer = crypto.publicEncrypt({
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
  }, compressedBuffer)

  return encryptedBuffer.toString('base64')
}

/**
 * @param privateKey - PEM-encoded private key string
 * @param base64Str - base64-encoded string containing message encrypted using publicKey
 * @param passphrase - passphrase to decrypt encrypted string
 */
// TODO: decompress data before returning
// TODO: verify the signature matches?
const decryptMessage = (privateKey, base64Str, passphrase) => {
  const decryptedBuffer = crypto.privateDecrypt({
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING
  }, Buffer.from(base64Str, 'base64'))
  const decompressedBuffer = pako.inflate(decryptedBuffer, { to: 'string' })
  const jsonStr = decompressedBuffer.toString('utf8')

  return JSON.parse(jsonStr)
}

export {
  encryptMessage,
  decryptMessage
}
