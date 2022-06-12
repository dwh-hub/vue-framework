/*
 * @Author: dahuayuan
 * @Date: 2022-05-02 12:58:55
 * @LastEditors: dahuayuan
 * @LastEditTime: 2022-05-02 12:58:56
 * @Description: 导出格式
 */
import Dictionary from './dictionary'

// 导出格式
const EXPORT_TYPE = new Dictionary()
EXPORT_TYPE.add('text/plain', 'txt')
EXPORT_TYPE.add('application/vnd.ms-excel', 'xls')
EXPORT_TYPE.add('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'xlsx')
EXPORT_TYPE.add('application/msword', 'doc')
EXPORT_TYPE.add('application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'docx')

export { EXPORT_TYPE }
