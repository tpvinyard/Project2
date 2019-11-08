module.exports = function(sequelize, DataTypes) {
    var Meteorshower = sequelize.define("meteorshowers", {
        shower_name: DataTypes.STRING,
        shower_nickname: DataTypes.STRING,
        begin_date: DataTypes.DATE,
        end_date: DataTypes.DATE,
        max_date: DataTypes.DATE,
        max_rate_per_hour: DataTypes.INTEGER
    });
    return Meteorshower;
  };
