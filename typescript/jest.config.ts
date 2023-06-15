import type { JestConfigWithTsJest } from 'ts-jest'
// import { compilerOptions } from 'tsconfig'

const jestConfig: JestConfigWithTsJest = {
  // [...]
  // Replace `ts-jest` with the preset you want to use
  // from the above list
  preset: 'ts-jest',
  modulePaths: ['./'], // <-- This will be set to 'baseUrl' value
}

export default jestConfig