


import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function MeuDrawer({ aberto, fecharDrawer }) {


    
    return (
        <Drawer anchor="left" open={aberto} onClose={fecharDrawer}>
            <List>
                <ListItem button>
                    <ListItemText primary="Item 1" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Item 2" />
                </ListItem>
            </List>
        </Drawer>
    );
}

export default MeuDrawer;
