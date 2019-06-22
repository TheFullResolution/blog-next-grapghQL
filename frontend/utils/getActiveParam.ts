export function getActiveParam<T>(...params: T[]): T | undefined {
    const active = params.filter(el => !!el)
  
    if (!active.length) return undefined
    return active[0]
  }