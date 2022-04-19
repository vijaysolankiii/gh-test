/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require("path");
const fs = require("fs");

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path.match(/^\/cardpreview/)) {
    page.matchPath = "/cardpreview/**";
    createPage(page);
  }
};
