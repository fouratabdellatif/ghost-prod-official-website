import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <>
        <Box
            sx={{
                backgroundColor: 'background.default',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'center'
            }}
        >
            <Container
                style={{
                    marginTop: '220px'
                }}
            >
                <Typography
                    align="center"
                    color="textPrimary"
                    variant="h1"
                    gutterBottom
                >
                    404: Page Not Found
                </Typography>
                {/* <Typography
                    align="center"
                    color="textPrimary"
                    variant="subtitle2"
                >
                    You either tried some shady route or you came here by mistake.
                    Whichever it is, try using the navigation
                </Typography> */}
                {/* <Box sx={{ textAlign: 'center' }}>
                    <img
                        alt="Under development"
                        src="/static/images/undraw_page_not_found_su7k.svg"
                        style={{
                            marginTop: 50,
                            display: 'inline-block',
                            maxWidth: '100%',
                            width: 560
                        }}
                    />
                </Box> */}
                <Link to='/'>
                    Back to Home Page
                </Link>
            </Container>
        </Box>
    </>
);

export default NotFound;