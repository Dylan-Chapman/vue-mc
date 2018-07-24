import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'
import resolve from 'rollup-plugin-node-resolve'

const BASE = {
    external: [
        'lodash',
        'vue',
        'axios',
    ],
    plugins: [
        resolve(),
        commonjs(),
        babel({
            babelrc: false,
            plugins: [
                ["@babel/plugin-transform-runtime", {
                    helpers: false,
                    moduleName: "@babel/runtime",
                    polyfill: false,
                    regenerator: true,
                    useESModules: true,
                }],
            ],
            presets: [['@babel/preset-env', {
                modules: false,
                targets: {
                    browsers: [
                        '>1%',
                        'not ie 10',
                        'not op_mini all',
                    ],
                },
            }]],
            exclude: [
                'node_modules/**',
            ],
        }),
    ],
}

const MAIN = Object.assign({}, BASE, {
    input: 'src/index.js',
    output: [
        { file: pkg.main,    format: 'cjs' },
        { file: pkg.module,  format: 'es' },
    ],
})

const VALIDATION = Object.assign({}, BASE, {
    input: 'src/Validation/index.js',
    output: [
        { file: 'validation/index.js', format: 'es' },
    ],
})

const LOCALES = Object.assign({}, BASE, {
    input: './src/Validation/locale.js',
    output: [
        { file: 'validation/locale.js', format: 'es' },
    ],
})

export default [
    MAIN,
    VALIDATION,
    LOCALES,
]
