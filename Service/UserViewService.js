
const moment = require('moment');
const lodash = require('lodash');

const UserViewModel = require('../models/UserView');

async function getReport(req, res, next) {

  let { startDate ,endDate  } = req.query;
   startDate = startDate ? new Date(startDate) : new Date('0');
   endDate =endDate ? new Date(endDate) : new Date();
  await UserViewModel.aggregate([

    { $match: { 'ViewDate': { $gte: startDate, $lt: endDate } } },
    {
      $group: { _id: '$ProductId', uniqueUsers: { $addToSet: "$UserId" }, users: { $push: "$UserId" } }
    }, {
      $addFields: { uniqueUserCount: { $size: '$uniqueUsers' }, totalUser: { $size: "$users" } }
    }
  ], function (err, result) {
    if (err) {
      const errorObj = {
        message: err.message,
        statusCode: 500
      };
      return next(errorObj);
    }

    res.setHeader('Content-type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(result));
  });

};

module.exports = {
  getReport
};

