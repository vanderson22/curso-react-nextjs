


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function MeuCard() {
    return (
            <>
        <Card>
            <CardContent>
                <Typography variant="h5" component="div">
                    Título do Card
                </Typography>
                <Typography color="textSecondary">
                    Texto secundário
                </Typography>
            </CardContent>
        </Card>

        <br></br>
        <Card>
        <CardContent>
            <Typography variant="h5" component="div">
                Título do Card
            </Typography>
            <Typography color="textSecondary">
                Texto secundário
            </Typography>
        </CardContent>
        </Card>
            </>
    );
}

export default MeuCard;
