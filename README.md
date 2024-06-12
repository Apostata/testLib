# Simple Test Library

This is a simple test library to test UMD modules exporting components using tailwindcss.\
In this test the webpack configuration was very easy to setup.\
I still don't understand why people don't like webpack. It's a very powerful tool to bundle the code and you can do a lot of things with it.

## Installation
 Suposing that I have uploaded this npm package called testLib:
```bash
npm install testLib
```

## Devolopment
To develop this lib, I used webpack to bundle the code with the js and css files merged.

### Dev dependencies:

#### to Bundle the code:
- Webpack 
- Webpack-cli

#### to run a dev server to test the bundle:
- webpack-dev-server
- html-webpack-plugin

#### to enable tailwindcss:
- postcss
- postcss-nesting
- autoprefixer
  
#### to compile the css:
- style-loader
- css-loader
- postcss-loader

#### to compile the typescript files:
- ts-loader

#### to code:
- typescript
- tailwindcss
- react
- react-dom

#### To install and initialize storybook:
`npx storybook@latest init`

this command will install the storybook dependencies and create the storybook configuration files.
