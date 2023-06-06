import { ExecutionContext, Logger, createParamDecorator } from "@nestjs/common";

export const GetCurrentUser = createParamDecorator(
  (data: any | undefined, context: ExecutionContext) => {
    // Logger.log("GetCurrentUser", context);
    const request = context.switchToHttp().getRequest();
    Logger.log(request)
    if(!data) return request.user;
    Logger.log(request.user[data]);
    return request.user[data];
  },
)