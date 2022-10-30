var surveys = require("./api/surveys.json");
var dashboard = require("./api/dasboard.json");

module.exports = function () {
  return {
    surveys,
    dashboard,
  };
};
