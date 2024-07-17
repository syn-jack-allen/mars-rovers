module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  // setupFiles: ['dotenv/config'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
