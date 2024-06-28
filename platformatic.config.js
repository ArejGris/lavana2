module.exports={
  $schema: "https://platformatic.dev/schemas/v1.47.0/runtime",
  entrypoint: "dazzling-devotion",
  allowCycles: false,
  hotReload: true,
  autoload: {
    path: "services",
    exclude: [
      "docs"
    ]
  },
  server: {
    hostname: "{PLT_SERVER_HOSTNAME}",
    port: "{PORT}",
    logger: {
      level: "{PLT_SERVER_LOGGER_LEVEL}"
    }
  },
  managementApi: "{PLT_MANAGEMENT_API}"
}