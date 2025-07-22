import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./scripts/generateComponent.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  minify: true,
  sourcemap: false,
  clean: true,
  bundle: true
})
