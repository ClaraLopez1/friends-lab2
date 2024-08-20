import { createTheme } from '@mui/material/styles';
import { PaperProps } from '@mui/material/Paper';

const theme = createTheme({
    palette: {
        primary: {
            main: '#001E8D',
        },
        secondary: {
            main: '#131e3a',
        },
    },
    typography: {
        fontFamily: 'sans-serif',
        h1: {
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        body1: {
            fontSize: '1rem',
        },
    },
    components: {
        MuiTableCell: {
            styleOverrides: {
                head: {
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    color: '#001E8D',
                },
                body: {
                    fontSize: '1rem',
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: '#dde4ee',
                    color: '#000000',
                    fontSize: '0.875rem',
                    fontFamily: 'sans-serif',
                },
            },
        },
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                    borderRadius: '8px',
                    marginTop: '16px',
                    width: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                },
            },
        },
        MuiPaper: {
            defaultProps: {
                elevation: 3,
            } as PaperProps,
        },
    },
});

export default theme;
