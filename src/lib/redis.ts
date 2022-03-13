import { config } from "dotenv";

config();

import * as RedisPKG from "ioredis";

export default new RedisPKG.default(process.env.DATABASE_URL);
