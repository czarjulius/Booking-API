class AppError extends Error {
  constructor({ message, code, data, status }) {
    super(message || '');
    this.name = 'App Error';
    this.data = data || null;
    this.status = status || null;
    this.code = code || 500;
  }
}
export { AppError };
