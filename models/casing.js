export default (sequelize, DataTypes) => {
  const Casing = sequelize.define("casing", {
    size: DataTypes.DOUBLE,
    weight: DataTypes.DOUBLE,
    nominalId: {
      type: DataTypes.DOUBLE,
      field: "nominal_id"
    },
    driftId: {
      type: DataTypes.DOUBLE,
      field: "drift_id"
    }
  });

  return Casing;
};
