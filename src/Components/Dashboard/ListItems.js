import { NavLink } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import AssignmentIcon from '@material-ui/icons/Assignment';

import './ListItems.css';

export const mainListItems = (
    <div className="dashboard__listitems">
        <NavLink to="/">
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>
        </NavLink>

        <NavLink to="/order">
            <ListItem button>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Orders" />
            </ListItem>
        </NavLink>

        <NavLink to="/customer">
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Customers" />
            </ListItem>
        </NavLink>

        <NavLink to="/product">
            <ListItem button>
                <ListItemIcon>
                    <LocalCafeIcon />
                </ListItemIcon>
                <ListItemText primary="Product" />
            </ListItem>
        </NavLink>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>
    </div>
);
