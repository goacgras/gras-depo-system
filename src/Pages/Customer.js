import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { FETCH_CUSTOMER_QUERY } from '../util/graphqlQuery';

import AddIcon from '@material-ui/icons/Add';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import CustomerPageDialog from '../Components/CustomerPageDialog';

const columns = [
    { field: 'id', headerName: 'ID', width: 300, sortable: false },
    { field: 'name', headerName: 'Name', width: 130, sortable: false }
];

const Customer = () => {
    const [click, setClick] = useState();
    const [dialog, setDialog] = useState(false);
    const [newCustomer, setNewCustomer] = useState('');
    const [error, setError] = useState();
    let customers = '';
    const { data, loading } = useQuery(FETCH_CUSTOMER_QUERY);

    if (data) {
        customers = { data: data.getCustomers };
    }

    const openDialogHandler = () => {
        setDialog(true);
    };

    const closeDialogHandler = () => {
        setDialog(false);
    };

    const addNewCustomerHandler = () => {
        if (newCustomer.trim === '') {
            setError('must not empty');
        }
    };

    let dialogMarkup = (
        <CustomerPageDialog
            openDialog={dialog}
            handleClose={closeDialogHandler}
            addNewCustomer={addNewCustomerHandler}
        >
            <form>
                <TextField
                    autoFocus
                    margin="dense"
                    id="customerName"
                    label="Customer Name"
                    value={newCustomer}
                    fullWidth
                    error={error ? true : false}
                    helperText={error}
                    onChange={(e) => setNewCustomer(e.target.value)}
                />
            </form>
        </CustomerPageDialog>
    );

    return (
        <div>
            <h1>Customer Lists</h1>
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={openDialogHandler}
            >
                Add new Customer
            </Button>
            {dialogMarkup}
            {/* <CustomerPageDialog
                openDialog={dialog}
                handleClose={closeDialogHandler}
                addNewCustomer={addNewCustomerHandler}
            /> */}
            <hr />
            {loading ? (
                <p>Loading</p>
            ) : (
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={customers.data}
                        columns={columns}
                        pageSize={5}
                        checkboxSelection
                        onRowSelected={(e) => setClick(e.data)}
                    />
                </div>
            )}
        </div>
    );
};

export default Customer;
