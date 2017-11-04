import Sequelize from "sequelize";

const sequelize = new Sequelize("pipeout", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false
  }
});

const db = {
  Casing: sequelize.import("./casing")
};

Object.keys(db).forEach(modelName => {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

export default db;
