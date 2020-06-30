module.exports = {
  roots: ['<rootDir>/'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '\.(test|spec)\.ts$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'node'],
}