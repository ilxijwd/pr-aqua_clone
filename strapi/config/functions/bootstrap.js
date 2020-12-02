"use strict";

const _ = require("lodash");

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

module.exports = async () => {
  const settings = await strapi.query("settings").findOne();

  if (settings === null)
    await strapi
      .query("settings")
      .create({ maintenanceMode: true, adminTelegramID: "1" });
  else
    await strapi
      .query("settings")
      .update({ id: settings.id }, { maintenanceMode: true });

  console.log("bootstrap function ended successfully");
  return;
};
