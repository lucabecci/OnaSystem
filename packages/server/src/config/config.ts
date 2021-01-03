export interface iConfig {
  MONGO_URI: string;
  PORT: string | number;
  JWT_TOKEN: string;
  MORGAN_WORKING: string;
}

export default {
  MONGO_URI: process.env.DB_URI || "mongodb://localhost/ona_system",
  PORT: process.env.PORT || 4000,
  JWT_TOKEN: process.env.JWT_TOKEN || "sometoken",
  MORGAN_WORKING: process.env.MORGAN_WORKING || "dev",
};
