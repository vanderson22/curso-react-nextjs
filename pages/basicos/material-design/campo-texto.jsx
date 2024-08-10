
import React, { useState } from 'react'; 

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function MeuFormulario() {

    const [change, setChange] = useState(false)

    const update = () => {

        if(!change)
            setChange(true)
        else
           setChange(false)
    }

    return (
        <form noValidate autoComplete="off">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Meu Aplicativo
                    </Typography>
                </Toolbar>
            </AppBar>
            <TextField label="Nome" variant="outlined"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button variant="contained" onClick={update} color="primary">{change ? 'Ok' : 'Clique aqui'}</Button>
        </form>
    );
}

export default MeuFormulario;
