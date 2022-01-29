const isEmpty = (value: any) =>
  value == null || // From standard.js: Always use === - but obj == null is allowed to check null || undefined
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0)

export { isEmpty }
