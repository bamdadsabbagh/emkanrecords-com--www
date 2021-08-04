module.exports = {
    'setupFilesAfterEnv': ['./jest.setup.js'],
    'testRegex': '(test|spec)\\.(.*\\.)?[jt]sx?$',
    'moduleNameMapper': {
        '^.+.(scss)$': '<rootDir>/__mocks__/scss.js',
        'next/head': '<rootDir>/__mocks__/next-head.js',
        'next/router': '<rootDir>/__mocks__/next-router.js',
    },
    'testEnvironment': 'jsdom',
    'modulePathIgnorePatterns': [
        '<rootDir>/.next/',
    ],
    'coverageDirectory': './coverage/',
    'collectCoverageFrom': [
        '<rootDir>/src/**/*.js',
    ],
}