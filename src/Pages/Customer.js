import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { FETCH_CUSTOMER_QUERY } from '../util/graphqlQuery';

import AddIcon from '@material-ui/icons/Add';
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';

import CustomerPageDialog from '../Components/CustomerPageDialog';

const columns = [
    { field: 'id', headerName: 'ID', width: 300, sortable: false },
    { field: 'name', headerName: 'Name', width: 130, sortable: false }
];

const Customer = () => {
    const [click, setClick] = useState();
    const [dialog, setDialog] = useState(false);
    // const [newCustomer, setNewCustomer] = useState('');
    let customers = '';
    const { data, loading } = useQuery(FETCH_CUSTOMER_QUERY);

    if (data) {
        customers = { data: data.getCustomers };
    }

    console.log(click);

    const openDialogHandler = () => {
        setDialog(true);
    };

    const closeDialogHandler = () => {
        setDialog(false);
    };

    const addNewCustomerHandler = (data) => {
        console.log(data);
    };

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
            <CustomerPageDialog
                openDialog={dialog}
                handleClose={closeDialogHandler}
                addNewCustomer={addNewCustomerHandler}
            />
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
