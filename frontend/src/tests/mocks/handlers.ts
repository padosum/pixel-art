import { rest } from "msw";
import { VALID_USER, VALID_TOKEN } from "../fixtures/auth";

import httpStatus from "../../constants/httpStatus";

const handlers = [
  rest.post("/api/auth/login", async (req, res, ctx) => {
    const { userId, password } = await req.json();

    if (userId === VALID_USER.userId && password === VALID_USER.password) {
      return res(
        ctx.status(httpStatus.OK),
        ctx.json({
          userId: VALID_USER.userId,
          accessToken: VALID_TOKEN,
          username: VALID_USER.username,
          current: VALID_USER.current,
          provider: VALID_USER.provider,
          expired: 180000,
        })
      );
    } else {
      return res(
        ctx.status(httpStatus.UNAUTHORIZED),
        ctx.json({ message: "Please verify your ID or password." })
      );
    }
  }),

  rest.post("/api/auth/logout", async (_, res, ctx) => {
    return res(ctx.status(httpStatus.OK));
  }),

  rest.post("/api/auth/refresh", async (_, res, ctx) => {
    return res(
      ctx.status(httpStatus.OK),
      ctx.json({
        userId: "",
        accessToken: "",
        username: "",
        current: "",
        provider: "",
        expired: 180000,
      })
    );
  }),
];

export { handlers };
