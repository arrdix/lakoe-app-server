import * as dotenv from "dotenv";
dotenv.config();

const CONFIG = {
  SECRET_SAUCE: process.env.SECRET_SAUCE,
};

export default CONFIG;
