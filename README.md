# Discloser

Send text data to a server using a verifiable desktop runtime, public key, and
strong encryption.


## Protocol

1. create an account with username/password (only for users accepting submissions;
  submitters do so without an account)
2. generate new public/private RSA 512 key pair
3. a) display public key for sharing
3. b) encrypt private key with password using AES 256
3. c) display encrypted private key for local storage (requires password to use)
4. encrypt new message with public key and send to server
5. decrypt message using decrypted private key

Questions:

- is it safe to decrypt private key and store in memory while app is being used?
- is it better to decrypt on demand (would require storing password in memory anyway)
- is there are more effective method of storing keys and using them in a simple way?
- should a different, second, password be used solely for key storage?
- maybe integrate with something like keybase for key storage?
