/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router.js'


describe('settings page', () => {
    test('goes to the settings page', () => {
        expect(pushToHistory('settings', 0).state.page).toBe('settings');
    });

    test('checks the length of the stack', () => {
        expect(pushToHistory('settings', 0).length).toBe(3);
    });
});

describe('entry page', () => {
    test('goes to the entry page', () => {
        expect(pushToHistory('entry', 2).state.page).toBe('entry2');
    });

    test('checks the length of the stack', () => {
        expect(pushToHistory('entry', 0).length).toBe(5);
    });
});

describe('default page', () => {
    test('goes to the default page', () => {
        expect(pushToHistory('', 2).state).toStrictEqual({});
    });

    test('is default page', () => {
        expect(pushToHistory('', 2).state.page).not.toBe('settings');
    });

});

 