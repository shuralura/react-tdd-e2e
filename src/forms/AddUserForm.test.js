import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import AddUserForm from './AddUserForm';

describe('<AddUserForm />', () => {
    let getByTestId;

    afterEach(cleanup);

    describe('clicking the add button', () => {
        let addUser;

        beforeEach(() => {
            addUser = jest.fn();

            ({ getByTestId } = render(<AddUserForm addUser={addUser} />));

            fireEvent.change(
                getByTestId('addNameText'),
                {
                    target: {
                        value: "name",
                    },
                },
            );

            fireEvent.change(
                getByTestId('addUsernameText'),
                {
                    target: {
                        value: 'username',
                    },
                },
            );

            fireEvent.click(getByTestId('addNewUserButton'));
        });

        it('clears the name text field', () => {
            expect(getByTestId('addNameText').value).toEqual('');
        });
        
        it('clears the username text field', () => {
            expect(getByTestId('addUsernameText').value).toEqual('');
        });

        it('calls the send handler', () => {
            expect(addUser).toHaveBeenCalledWith({"id": null, "name":"name", "username": "username"});
        });
    });

describe('clicking the add button', () => {
        let addUser;

        beforeEach(() => {
            addUser = jest.fn();

            ({ getByTestId } = render(<AddUserForm addUser={addUser} />));

            fireEvent.click(getByTestId('addNewUserButton'));
        });

        it('calls the send handler', () => {
            expect(addUser).toHaveBeenCalledTimes(0);
        });
    });

});