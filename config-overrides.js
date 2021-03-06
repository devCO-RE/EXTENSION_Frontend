const {
    override,
    overrideDevServer,
    addWebpackPlugin
    } = require("customize-cra");
    const CopyPlugin = require('copy-webpack-plugin');
    const RewireMultipleEntry = require('react-app-rewire-multiple-entry');
    const multipleEntry = RewireMultipleEntry([
    {
    entry: 'src/index.tsx',
    template: 'public/index.html',
    outPath: '/index.html'
    }
    ]);
    const devServerConfig = () => config => {
    return {
    ...config,
    writeToDisk: true
    }
    }
    const copyPlugin = new CopyPlugin({
    patterns: [
    { from: 'public', to: '' },
    { from: 'src/background.js', to: '' },
    { from: 'src/content.js', to: '' },
    { from: 'src/inner-script.js', to: '' },
    { from: 'src/main.js', to: '' },
    { from: 'src/modules/html2canvas.js', to: 'modules' },
    { from: 'src/modules/jspdf.min.js', to: 'modules' },

    ]
    })
    module.exports = {
    webpack: override(
    addWebpackPlugin(
    copyPlugin
    ),
    multipleEntry.addMultiEntry,
    ),
    devServer: overrideDevServer(
    devServerConfig()
    ),
    };
    