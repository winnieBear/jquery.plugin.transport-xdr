// rollup.config.js
// import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: {
    format: 'iife',
    file: 'dist.js'
  },
  plugins: [
    // resolve(),
    babel({
      exclude: 'node_modules/**' // 仅仅转译我们的源码
    })
  ]
};