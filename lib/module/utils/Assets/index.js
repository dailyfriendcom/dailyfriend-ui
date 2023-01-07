function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function assignProperties(a, b) {
  if (a) {
    Object.keys(b).forEach(key => {
      // @ts-ignore
      Object.defineProperty(a, key, Object.getOwnPropertyDescriptor(b, key));
    });
  }
  return a;
}
function ensurePath(obj, path) {
  let pointer = obj;
  const pathArray = path.split('.');
  const n = pathArray.length;
  for (let i = 0; i < n; i++) {
    const segment = pathArray[i];
    if (pointer[segment]) {
      const descriptor = Object.getOwnPropertyDescriptor(pointer, segment);
      if (descriptor !== null && descriptor !== void 0 && descriptor.get) {
        Object.defineProperty(pointer, segment, descriptor);
      }
    } else {
      pointer[segment] = pointer[segment] || {};
    }
    pointer = pointer[segment];
  }
  return pointer;
}
class Assets {
  constructor() {
    _defineProperty(this, "assets", {});
  }
  loadAssetsGroup(groupName, assets) {
    // groupNAme is string
    if (typeof groupName !== 'string') {
      throw new Error('groupName should be a string');
    }

    //assets should be a hash map or a function (for lazy access)
    if (typeof assets !== 'object' && typeof assets !== 'function') {
      throw new Error('assets should be a hash map or a function');
    }
    if (groupName === '') {
      assignProperties(this.assets, assets);
    } else {
      assignProperties(ensurePath(this.assets, groupName), assets);
    }
    return this;
  }
  getAsset(assetName, groupName) {
    if (!groupName) {
      if (!this.assets[assetName]) {
        throw new Error(`Asset ${assetName} not found`);
      }
      return this.assets[assetName];
    }
    if (!this.assets[groupName] || !this.assets[groupName][assetName]) {
      throw new Error(`Asset ${assetName} not found in group ${groupName}`);
    }
    return this.assets[groupName][assetName];
  }
  getAssets() {
    return this.assets;
  }
}
export default new Assets();
//# sourceMappingURL=index.js.map