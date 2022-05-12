class ApiErros extends Error {
  constructor(status, message) {
    super();
    this.message = message;
    this.status = status;
  }

  static badRequest(message) {
    return new ApiErros(404, message);
  }
  static internal(message) {
    return new ApiErros(500, message);
  }
  static forbidden(message) {
    return new ApiErros(403, message);
  }
}

module.exports = ApiErros;
