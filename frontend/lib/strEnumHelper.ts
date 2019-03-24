export function strEnumHelper<T extends string>(listToProcess: Array<T>): { [K in T]: K } {
    return listToProcess.reduce((res, key) => {
      res[key] = key
      return res
    }, Object.create(null))
  }
  