const ESBuild = require('esbuild');
const path = require('path');
const pluginVue = require('esbuild-plugin-vue-next')

const mode  = process.env.MODE || 'development';
const isDev = mode === 'development';
const isProd = mode === 'production'

module.exports ={
    outdir: path.resolve(__dirname,'..','..','build'),
    entryPoints: [path.resolve(__dirname,'..','..','src','main.js')],
    entryNames: 'bundle',
    bundle: true,
    minify: isProd,
    plugins: [pluginVue()],
    sourcemap: isDev
}
