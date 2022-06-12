/*
 * @Author: dahuayuan
 * @Date: 2022-05-02 12:58:16
 * @LastEditors: dahuayuan
 * @LastEditTime: 2022-05-02 12:58:17
 * @Description: 数据字典
 */
class Dictionary {
  constructor() {
    this.dictionaries = []
  }

  /**
   * @description: value en cn 相互转换
   * @param {String | Number} value 要转换的字段值
   * @param {String} name 要转换的字段名称
   * @return {String | Number} 转换后的字段名
   */
  _transField(value, name) {
    for (const item of this.dictionaries) {
      for (const k in item) {
        if (item[k] === value) {
          return item[name]
        }
      }
    }
  }

  /**
   * @description: 添加字段解释
   * @param {Number | String} value 后端枚举类型
   * @param {String} ENStr 字段对应的英文枚举
   * @param {String} CNStr 字段对应的中文意思
   */
  add(value, ENStr, CNStr) {
    this.dictionaries.push({
      value,
      en: ENStr,
      cn: CNStr
    })
  }

  // 获取字典的value值
  get(value) {
    return this._transField(value, 'value')
  }

  // 获取字典的英文值
  getEN(value) {
    return this._transField(value, 'en')
  }

  // 获取字典的中文值
  getCN(value) {
    return this._transField(value, 'cn')
  }
}

export default Dictionary
