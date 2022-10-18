let globalData = {}

// 获取全局数据
export function getGlobalData(key) {
  return key ? globalData[key] : globalData
}

export function setGlobal(key, value) {
  if (key === undefined || value === undefined) {
    return
  }
  globalData = { ...globalData, [key]: value }
  return globalData
}

export function clearGlobalData(key) {
  if (key === undefined) {
    globalData = {}
  } else {
    delete globalData[key]
  }
  return globalData
}