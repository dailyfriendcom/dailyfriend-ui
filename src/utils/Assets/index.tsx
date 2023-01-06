interface CustomObject {
  [key: string]: any;
}

function assignProperties(a: CustomObject, b: { [key: string]: any }) {
  if (a) {
    Object.keys(b).forEach((key) => {
      // @ts-ignore
      Object.defineProperty(a, key, Object.getOwnPropertyDescriptor(b, key));
    });
  }

  return a;
}

function ensurePath(obj: CustomObject, path: string) {
  let pointer = obj;

  const pathArray = path.split('.');
  const n = pathArray.length;

  for (let i = 0; i < n; i++) {
    const segment: string = pathArray[i]!;

    if (pointer[segment]) {
      const descriptor = Object.getOwnPropertyDescriptor(pointer, segment);
      if (descriptor?.get) {
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
  public assets: { [key: string]: any } = {};

  loadAssetsGroup(groupName: string, assets: object) {
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

  getAsset(assetName: string, groupName?: string) {
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
