app.Use(async (ctx, next) =>
{
await next();
if (ctx.Response.StatusCode == 204)
{
ctx.Response.ContentLength = 0;
}
});