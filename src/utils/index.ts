export const getDataType = (data?: any) => Object.prototype.toString.call(data).slice(8, -1)

export const isType = (data: any, type: string): boolean => type === getDataType(data)
