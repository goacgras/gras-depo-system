import { useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const CustomerPageDialog = ({ handleClose, addNewCustomer, openDialog }) => {
    const [text, setText] = useState('');
    return (
        <Dialog open={openDialog} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>Add new customer</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please enter customer name
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="customerName"
                    label="Customer Name"
                    fullWidth
                    onChange={(e) => setText(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button
                    onClick={addNewCustomer.bind(this, text)}
                    color="primary"
                >
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CustomerPageDialog;
