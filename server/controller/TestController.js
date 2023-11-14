class TestController {
  call(req, res) {
    res.json({
      name: "TEST CALL",
    });
  }
}

module.exports = TestController;
