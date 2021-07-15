import autoprefixer from 'autoprefixer';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from 'tailwindcss';

export default[ {
  input: 'src/tailwindcss.js',
  output: {
    file: 'lib/tailwindcss.js',
    format: 'esm'
  },
  plugins: [
    babel({
      "exclude": 'node_modules/**',
      "babelHelpers": "bundled",
      "presets": [
        [
          "@babel/preset-react", {
            "runtime": "automatic"
          }
        ],
        "@babel/preset-env"
      ]
    }),
    postcss({
      minimize: true,
      plugins: [
        tailwindcss,
        autoprefixer,
      ]
    }),
    terser()
  ],
  external: [
    'react',
    'react-dom'
  ]
} ];
