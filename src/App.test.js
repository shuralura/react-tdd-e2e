import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('<App/>', () => {
    let updateUser, container;
describe('delete user', () => {
    afterEach(cleanup);

        beforeEach(() => {
            updateUser = jest.fn();
            ({ container } = render(<App />));

            fireEvent.click(container.querySelector(`[data-test-delete="${'Moshekot'}"]`));
            fireEvent.click(container.querySelector(`[data-test-delete="${'forSetUserBranchTest'}"]`));

        });

        it("should removed moshekot user", () => {
            expect(container.querySelector(`[data-testid="${'emptyUserList'}"]`)).toBeTruthy();
        });
    
});
    describe('clicking the edit button', () => {
        beforeEach(() => {
         ({ container } = render(<App />));

            fireEvent.click(container.querySelector(`[data-test-edit="${'Moshekot'}"]`));

            fireEvent.change(
                container.querySelector(`[data-testid="${'editNameText'}"]`),
                {
                    target: {
                        value: "newname",
                    },
                },
            );

        fireEvent.change(
                container.querySelector(`[data-testid="${'editUsernameText'}"]`),
                {
                    target: {
                        value: 'newusername',
                    },
                },
            );

            fireEvent.click(container.querySelector(`[data-testid="${'editUserButton'}"]`));
        });

        it('changes the name text field', () => {
            expect(container.querySelector(`[data-testid="${'addNameText'}"]`).value).toBe('');
        });
        
        it('changes the username text field', () => {
            expect(container.querySelector(`[data-testid="${'addUsernameText'}"]`).value).toBe('');
        });
    });

    describe('adding user', () => {
        beforeEach(() => {
         ({ container } = render(<App />));

            fireEvent.change(
                container.querySelector(`[data-testid="${'addNameText'}"]`),
                {
                    target: {
                        value: "newname",
                    },
                },
            );

        fireEvent.change(
                container.querySelector(`[data-testid="${'addUsernameText'}"]`),
                {
                    target: {
                        value: 'newusername',
                    },
                },
            );

            fireEvent.click(container.querySelector(`[data-testid="${'addNewUserButton'}"]`));
        });

        it('changes the name text field', () => {
            expect(container.querySelector(`[data-testid="${'addNameText'}"]`).value).toBe('');
        });
        
        it('changes the username text field', () => {
            expect(container.querySelector(`[data-testid="${'addUsernameText'}"]`).value).toBe('');
        });

    });
    
  });