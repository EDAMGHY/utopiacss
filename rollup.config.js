import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';
import pkg from './package.json';

export default {
  input: 'src/js/index.js',
  plugins: [
    terser(),
    scss({
      output: 'dist/utopia.min.css',
      outputStyle: 'compressed',
    }),
  ],
  output: [
    {
      name: 'utopia',
      file: pkg.browser,
      format: 'umd',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
};
