class BannerPlugin {
    apply(compiler) {
        const pluginName = BannerPlugin.name;

        // 绑定到 “thisCompilation” 钩子，
        // 以便进一步绑定到 compilation 过程更早期的阶段
        compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
            // 绑定到资源处理流水线(assets processing pipeline)
            compilation.hooks.processAssets.tap(
                {
                    name: pluginName,
                    stage: compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
                },
                (assets) => {
                    const source = assets['bundle.js'].source()

                    const newSource = `/*** 我是新加的页头 ***/\n${source}\n/*** 我是新加的页尾 ***/`
                    compilation.updateAsset('bundle.js', new compiler.webpack.sources.RawSource(newSource))
                }
            );
        });
    }
}

module.exports = BannerPlugin;