import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "shared/styles")],
    additionalData: `@import "_vars.scss";`, // Или _variables.scss если includePaths указан
  },
};

export default nextConfig;