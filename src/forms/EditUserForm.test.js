import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import EditUserForm from './EditUserForm';

describe('<EditUserForm />', () => {
  let getByTestId;
  let currentUser = { "id": "1", "name": 'currentname', "username": 'currentusername' };

    afterEach(cleanup);

    describe('clicking the edit button', () => {
      let updateUser, setEditing, editing;

        beforeEach(() => {
            updateUser = jest.fn();
            setEditing = jest.fn();

          ({ getByTestId } = render(<EditUserForm  editing={editing} setEditing={setEditing} updateUser={updateUser} currentUser={currentUser}/>));

            fireEvent.change(
                getByTestId('editNameText'),
                {
                    target: {
                        value: "newname",
                    },
                },
            );

            fireEvent.change(
                getByTestId('editUsernameText'),
                {
                    target: {
                        value: 'newusername',
                    },
                },
            );

            fireEvent.click(getByTestId('editUserButton'));
        });

        it('changes the name text field', () => {
            expect(getByTestId('editNameText').value).toEqual('newname');
        });
        
        it('changes the username text field', () => {
            expect(getByTestId('editUsernameText').value).toEqual('newusername');
        });

        it('calls the edit handler', () => {
          expect(updateUser).toHaveBeenCalledWith("1", {"id": "1", "name": "newname", "username": "newusername"});

        });
    });
  
  describe('clicking the updateUser button with no change', () => {
        let updateUser;

        beforeEach(() => {
            updateUser = jest.fn();

            ({ getByTestId } = render(<EditUserForm updateUser={updateUser} currentUser={currentUser} />));

            fireEvent.click(getByTestId('editUserButton'));
        });

        it('calls the edit handler with no change', () => {
          expect(updateUser).toHaveBeenCalledTimes(0);
        });
    
  });

  describe('clicking the cancel button with no change', () => {
    let updateUser, setEditing;

        beforeEach(() => {
          updateUser = jest.fn();
          setEditing = jest.fn();

          ({ getByTestId } = render(<EditUserForm updateUser={updateUser} currentUser={currentUser} setEditing={setEditing}/>));

            fireEvent.click(getByTestId('cancelEditButton'));
        });
    
        it('no calls to the edit handler', () => {
          expect(updateUser).toHaveBeenCalledTimes(0);
        });
    
        it('calls to the cancel handler', () => {
          expect(setEditing).toHaveBeenCalledWith(false);
        });
    
    });
});

