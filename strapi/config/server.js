module.exports = ({ env }) => ({
  url: env("URL", "http://localhost:1337"),
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  proxy: { enabled: true },
  admin: {
    url: env("ADMIN_URL", "http://localhost:1337/admin"),
    auth: {
      secret: env("ADMIN_JWT_SECRET", "INSERT_PASSWORD_HERE"),
    },
  },
});
