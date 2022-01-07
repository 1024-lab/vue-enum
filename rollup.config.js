import path from 'path'

const resolve = p => path.resolve(__dirname, p)
const pkg = require(resolve(`package.json`))

// rollup.config.js
export default {
  input: 'src/lib/index.js',
  output: [
    {
      file: `dist/${pkg.name}.umd.bundle.js`,
      format: 'umd',
      name: 'vue-enum'
    },
    {
      file: `dist/${pkg.name}.cjs.bundle.js`,
      format: 'cjs',
      name: 'vue-enum'
    },
  ]

};
