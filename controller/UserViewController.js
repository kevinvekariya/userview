const UserViewService = require('../Service/UserViewService');

module.exports = (app) => {
   // Get Report
   app.get('/report', (req, res, next) => {

    UserViewService.getReport(req, res, (err) => {
      if(err) {
        return next(err);
      }

      return next();
    });
  })
};