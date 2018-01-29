# gatsby-remark-encrypted-block

Adds an encrypted block to `MarkdownRemark` using [remark-encrypted-block](https://github.com/aynik/remark-encrypted-block).

## Install

`npm install --save gatsby-remark-encrypted-block`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-encrypted-block",
          options: {
            blocks: {
              key: '-----BEGIN RSA PUBLIC KEY-----${pubKey}-----END RSA PUBLIC KEY-----'
            },
          },
        },
      ],
    },
  },
];
```
