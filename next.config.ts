import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

const nextConfig: NextConfig = {
  output: 'standalone',
  /**
   * sharp's native addon dlopens libvips at runtime, so file tracing cannot see it by
   * static analysis. Tracing happened to pick it up before sharp 0.35 moved its prebuilt
   * binaries to static paths; without this the standalone build ships the `.node` addon
   * but not `libvips-cpp.so`, and every image request fails with ERR_DLOPEN_FAILED.
   */
  outputFileTracingIncludes: {
    '/**': ['./node_modules/@img/**/*'],
  },
  images: {
    localPatterns: [
      {
        pathname: '/api/media/file/**',
      },
    ],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  turbopack: {
    root: path.resolve(dirname),
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
