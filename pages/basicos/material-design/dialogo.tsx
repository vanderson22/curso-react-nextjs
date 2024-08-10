

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function MeuDialogo() {
    const [aberto, setAberto] = useState(false);

    const abrirDialogo = () => setAberto(true);
    const fecharDialogo = () => { setAberto(false)};

    return (
        <div>
            <Button variant="outlined" onClick={abrirDialogo}>
                Abrir Diálogo
            </Button>
            <Dialog open={aberto} onClose={fecharDialogo}>
                <DialogTitle>Aviso</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Esta é uma mensagem importante.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={fecharDialogo}>Cancelar</Button>
                    <Button onClick={fecharDialogo}>Confirmar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default MeuDialogo;
