"use strict"

const join = require( "path" ).join
const common = require( "./webpack.common.js" )
const exp = Object.assign({}, common, {
    entry: join( __dirname, 'src', 'index.js' ),
    module: {
      rules: [
        {
          test   : /\.js?$/,
          loader : "babel-loader",
          options: {
            root    : __dirname,
            rootMode: "upward-optional"
          }
        },
        {
          test: /\.scss?$/,
          use : [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            {
              loader: "postcss-loader", // process CSS with PostCSS
              options: {
                postcssOptions: {
                  plugins: [
                    "postcss-flexbugs-fixes",
                    [
                      "postcss-preset-env",
                      {
                        "autoprefixer": {
                          "flexbox": "no-2009",
                          "grid": "autoplace"
                        },
                        "stage": 3,
                        "features": {
                          "custom-properties": false
                        }
                      },
                    ],
                  ],
                },
              }
            },
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
          ]
        }
      ]
    }
  })
  module.exports = exp