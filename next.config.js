/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

/** @type {import('next').NextConfig} */
const stylexPlugin = require("@stylexjs/nextjs-plugin");

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

module.exports = stylexPlugin({
  filename: "stylex-bundle.css",
  rootDir: __dirname,
})(nextConfig);
