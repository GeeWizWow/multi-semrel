module.exports = {
    branches: [
        { 
            name: 'main',
        },
        {
            name: 'develop',
            prerelease: true,
            channel: 'next',
        },
        {
            name: 'fix/*',
            prerelease: true,
            channel: 'experimental',
        }
    ],
};