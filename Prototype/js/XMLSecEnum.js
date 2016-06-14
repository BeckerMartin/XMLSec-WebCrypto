// Generated by CoffeeScript 1.10.0
(function() {
  window.XMLSecEnum = (function() {

    /*
    The Namespace URIs
     */
    XMLSecEnum.namespaceURIs = {
      xmlSig: "http://www.w3.org/2000/09/xmldsig#",
      xmlEnc: "http://www.w3.org/2001/04/xmlenc#"
    };


    /*
    Maps the internal Identifier to the WebCryptoAPI Parameters
     */

    XMLSecEnum.WebCryptoAlgMapper = {
      RSASHA1: {
        kty: "RSA",
        alg: "RS1",
        name: "RSASSA-PKCS1-v1_5",
        hash: "SHA-1"
      },
      HMACSHA1: {
        name: "HMAC",
        hash: "SHA-1"
      },
      SHA1: "SHA-1",
      AESCBC: "AES-CBC",
      AESGCM: "AES-GCM",
      c14n: "c14n"
    };


    /*
    Maps a URI to the Internal Identifier. The URI is base64URL encoded
     */

    XMLSecEnum.URIMapper = {
      aHR0cDovL3d3dy53My5vcmcvdHIvMjAwMS9yZWMteG1sLWMxNG4tMjAwMTAzMTU: "c14n",
      aHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnI3JzYS1zaGEx: "RSASHA1",
      aHR0cDovL3d3dy53My5vcmcvMjAwMS8wNC94bWxlbmMjYWVzMTI4LWNiYw: "AESCBC",
      aHR0cDovL3d3dy53My5vcmcvMjAwMS8wNC94bWxlbmMjYWVzMTkyLWNiYw: "AESCBC",
      aHR0cDovL3d3dy53My5vcmcvMjAwMS8wNC94bWxlbmMjYWVzMjU2LWNiYw: "AESCBC",
      aHR0cDovL3d3dy53My5vcmcvMjAwOS94bWxlbmMjYWVzMTI4LWdjbQ: "AESGCM",
      aHR0cDovL3d3dy53My5vcmcvMjAwOS94bWxlbmMjYWVzMTkyLWdjbQ: "AESGCM",
      aHR0cDovL3d3dy53My5vcmcvMjAwOS94bWxlbmMjYWVzMjU2LWdjbQ: "AESGCM",
      aHR0cDovL3d3dy53My5vcmcvMjAwMS8wNC94bWxlbmMjZWxlbWVudA: "Element",
      aHR0cDovL3d3dy53My5vcmcvMjAwMS8wNC94bWxlbmMjY29udGVudA: "Content",
      aHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnI3NoYTE: "SHA1",
      aHR0cDovL3d3dy53My5vcmcvMjAwMC8wOS94bWxkc2lnI2htYWMtc2hhMQ: "HMACSHA1"
    };


    /*
    The Signature Types
     */

    XMLSecEnum.signatureTypesEnum = {
      Enveloped: "Enveloped",
      Detached: "Detached"
    };


    /*
    Maps the internal identifer to the URI
     */

    XMLSecEnum.AlgIdentifiers = {
      AESCBC128: "http://www.w3.org/2001/04/xmlenc#aes128-cbc",
      AESCBC192: "http://www.w3.org/2001/04/xmlenc#aes192-cbc",
      AESCBC256: "http://www.w3.org/2001/04/xmlenc#aes256-cbc",
      AESGCM128: "http://www.w3.org/2009/xmlenc#aes128-gcm",
      AESGCM192: "http://www.w3.org/2009/xmlenc#aes192-gcm",
      AESGCM256: "http://www.w3.org/2009/xmlenc#aes256-gcm",
      RSAOAEP: "http://www.w3.org/2001/04/xmlenc#rsa-oaep-mgf1p",
      RSASHA1: "http://www.w3.org/2000/09/xmldsig#rsa-sha1",
      c14n: "http://www.w3.org/TR/2001/REC-xml-c14n-20010315",
      envSig: "http://www.w3.org/2000/09/xmldsig#enveloped-signature",
      SHA1: "http://www.w3.org/2000/09/xmldsig#sha1",
      HMACSHA1: "http://www.w3.org/2000/09/xmldsig#hmac-sha1"
    };


    /*
    Is a content or an element encrypted
     */

    XMLSecEnum.Type = {
      Element: "Element",
      Content: "Content"
    };


    /*
    The different types of keys supported by the WebCryptoAPI
     */

    XMLSecEnum.KeyTypes = {
      Private: "private",
      Secret: "secret",
      Public: "public"
    };


    /*
    The names of the Nodes that are used for XML Security
     */

    XMLSecEnum.NodeNames = {
      encData: "EncryptedData",
      encMethod: "EncryptionMethod",
      encKey: "EncryptedKey",
      cipherValue: "CipherValue",
      digestMethod: "DigestMethod",
      digestValue: "DigestValue",
      transforms: "Transforms",
      transform: "Transform",
      signature: "Signature",
      signedInfo: "SignedInfo"
    };


    /*
    The names of the Attributes that are used for XML Security
     */

    XMLSecEnum.AttributeNames = {
      type: "Type",
      algorithm: "Algorithm"
    };


    /*
    xPathSelectors for extraction information from the Document
     */

    XMLSecEnum.xPathSelectors = {
      CanonicalisationAlg: ".//*[local-name(.)='CanonicalizationMethod']/@Algorithm",
      SignatureAlg: ".//*[local-name(.)='SignatureMethod']/@Algorithm",
      References: ".//*[local-name(.)='SignedInfo']/*[local-name(.)='Reference']",
      SingatureValue: ".//*[local-name(.)='SignatureValue']/text()",
      Modulus: ".//*[local-name(.)='Modulus']/text()",
      Exponent: ".//*[local-name(.)='Exponent']/text()",
      EncryptedData: "//*[local-name()='EncryptedData']",
      Signature: "//*[local-name()='Signature']",
      SignedInfo: "//*[local-name()='SignedInfo']"
    };

    XMLSecEnum.idAttributes = ["Id", "ID", "id"];

    function XMLSecEnum() {}

    return XMLSecEnum;

  })();

}).call(this);
