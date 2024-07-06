/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["./src"],
    prependData: `@import "~@styles/variable.scss";`,
  },
};

export default nextConfig;
