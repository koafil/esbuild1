const ESBuild = require('esbuild');
const path = require('path');
const pluginVue = require('esbuild-plugin-vue-next');

const config = require('./esbuild-config');

const PORT = process.env.PORT || 3000;

ESBuild.serve({
   servedir: config.outdir,
   port: PORT,
}, {
    ...config,
}).then(()=>{
    console.log('Server started on http://localhost:' + PORT);
}).catch(err=>{
    console.log(err);
});