/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
 const path = require('path');
 const fs = require('fs');
 
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  // page.matchPath is a special key that's used for matching pages
  if (page.path.match(/^\/cardpreview/)) {
    page.matchPath = "/cardpreview/**";

    // Update the page.
    createPage(page);
  }
};


