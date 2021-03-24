import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,118,55,99)',
    },
    titleimage: {
        marginLeft: '15px',
    },
    mainContainer: {
        flexDirection: "column-reverse",
    },
    note: {
        borderRadius: 15,
    },
    link: {
        underline: 'none',
    },
    button: {
        marginTop: '5px',
    },
    text: {
        padding: '20px',
    },
    logoimage: {
        padding: '1pc',
        width: '10vw',
    }
}));