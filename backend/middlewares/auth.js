module.exports = {
  // authentication
  loginCheckMiddleware: function (req, res, next) {
    // 要登入後才可以看
    console.log("session", req.session.member);
    if (!req.session.member) {
      // session 裡面沒有 member --> 還沒登入
      return next({
        status: 401,
        message: "登入會員後才可以用喔",
      });
    } else {
      // 如果 session 裡面是有 member 的
      next();
    }
  }
}; 