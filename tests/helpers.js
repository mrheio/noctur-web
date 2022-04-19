const { initializeTestEnvironment } = require('@firebase/rules-unit-testing');
const { readFileSync } = require('fs');

const setup = async () => {
    const PROJECT_ID = `rules-spec-${Date.now()}`;
    const firestoreConfig = {
        host: 'localhost',
        port: 5000,
        rules: readFileSync('firestore.rules', 'utf8'),
    };

    let testEnv = await initializeTestEnvironment({
        projectId: PROJECT_ID,
        firestore: firestoreConfig,
    });

    return testEnv;
};

module.exports = { setup };
