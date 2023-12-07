import nextJest from 'next/jest.js'
/**
 * Add more setup options before each test is run
 * setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
 * Add any custom config to be passed to Jest 
 * @type {import('jest').Config}
 */
const config = {
  testEnvironment: 'jest-environment-jsdom',
}

/**
 * Provide the path to your Next.js app to load next.config.js and .env files in your test environment
 * @returns {{}} jestConfig Configuration for Jest.
 */
const createJestConfig = nextJest({
  dir: './',
})

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)