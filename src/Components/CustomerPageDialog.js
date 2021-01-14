//CREATE MUTATION EITHER IN DIALOG OR CUSTOMER
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useForm } from '../util/useForm';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {
    ADD_CUSTOMER_MUTATION,
    FETCH_CUSTOMER_QUERY
} from '../util/graphqlQuery';

const CustomerPageDialog = ({ handleClose, openDialog }) => {
    const [formError, setFormError] = useState(null);
    const { onChangeHandler, onSubmitHandler, values } = useForm(
        addNewCustomerCallback,
        {
            name: ''
        }
    );

    const [addNewCustomer] = useMutation(ADD_CUSTOMER_MUTATION, {
        variables: values,
        update: (cache, { data }) => {
            const newCustomerFromResponse = data?.addCustomer;
            console.log(newCustomerFromResponse);
            const customerListsFromCache = cache.readQuery({
                query: FETCH_CUSTOMER_QUERY
            });

            cache.writeQuery({
                query: FETCH_CUSTOMER_QUERY,
                data: {
                    getCustomers: [
                        newCustomerFromResponse,
                        ...customerListsFromCache?.getCustomers
                    ]
                }
            });

            values.name = '';
        },
        onError: () => {}
    });

    function addNewCustomerCallback() {
        if (values.name.trim() === '') {
            setFormError('Must not empty');
        } else {
            addNewCustomer();
            setFormError(null);
            handleClose();
        }
    }

    return (
        <Dialog open={openDialog} onClose={handleClose} fullWidth maxWidth="sm">
            <form onSubmit={onSubmitHandler}>
                <DialogTitle>Add new customer</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter customer name
                    </DialogContentText>
                    {/* {children} */}

                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        // id="customerName"
                        label="Customer Name"
                        value={values.name}
                        fullWidth
                        error={formError ? true : false}
                        helperText={formError}
                        onChange={onChangeHandler}
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" type="submit">
                        Add
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default CustomerPageDialog;
