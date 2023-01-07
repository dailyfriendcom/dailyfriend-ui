declare class Assets {
    assets: {
        [key: string]: any;
    };
    loadAssetsGroup(groupName: string, assets: object): this;
    getAsset(assetName: string, groupName?: string): any;
    getAssets(): {
        [key: string]: any;
    };
}
declare const _default: Assets;
export default _default;
//# sourceMappingURL=index.d.ts.map