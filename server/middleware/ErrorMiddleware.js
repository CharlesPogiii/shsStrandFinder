class ErrorMiddleware {
  async erorr(err, req, res, next) {
    const { code } = err;

    switch (code) {
      case 11000:
        const email = err.keyValue.email;
        return res.json({
          error: `${email} was already exist! create an unique email.`,
        });
    }

    if (code == 11000) {
      const email = err.keyValue.email;
      return res.json({
        error: `${email} was already exist! create an unique email.`,
      });
    }

    return res.status(500).json({ error: err.message });
  }
}

module.exports = ErrorMiddleware;
