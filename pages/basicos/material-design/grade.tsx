

import { Icon } from '@mui/material';
import Grid from '@mui/material/Grid';
import AcUnitIcon from '@mui/icons-material/AcUnit';

function MeuLayout() {
    return (
        <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
                <div> GET /basicos/material-design/estilizar-textos 200 in 12ms</div>
                <div> GET /basicos/material-design/estilizar-textos 200 in 12ms</div>
                <div> GET /basicos/material-design/estilizar-textos 200 in 12ms</div>
            </Grid>
            <Grid item xs={12} md={6}>
                <div>Item 2</div>
            </Grid>

            <Grid item xs={12} md={6}>
            </Grid>

            <Grid item xs={12} md={6}>
                <div> GET /basicos/material-design/estilizar-textos 200 in 16ms</div>
            </Grid>
        </Grid>
    );
}

export default MeuLayout;
