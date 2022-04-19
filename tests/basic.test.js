const { setup } = require('./helpers');
const { assertFails } = require('@firebase/rules-unit-testing');

describe('Database rules', () => {
    let testEnv;
    let ref;

    beforeAll(async () => {
        testEnv = await setup();

        const user = testEnv.authenticatedContext('user');
        ref = user.firestore().collection('default-collection-name');
    });

    test('fail when reading/writing to unauthorized collection', async () => {
        const failedRead = await assertFails(ref.get());
        expect(failedRead);
    });
});
