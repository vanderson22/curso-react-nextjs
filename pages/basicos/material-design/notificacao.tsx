
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import React, { useState } from 'react';


function MinhaNotificacao() {
    const [aberto, setAberto] = useState(false);

    const abrirSnackbar = () => setAberto(true);
    const fecharSnackbar = () => setAberto(false);

    return (
        <div>
            <Button onClick={abrirSnackbar}>Mostrar Notificação</Button>
            <Snackbar
                open={aberto}
                message="Notificação!"
                autoHideDuration={6000}
                anchorOrigin={{vertical : "bottom" , horizontal: "center"}}
                onClose={fecharSnackbar}
            />
        </div>
    );
}

export default MinhaNotificacao;
