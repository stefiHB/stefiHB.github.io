import {styled} from "@mui/material";
import {keyframes} from "@emotion/react";


const bounce = keyframes `
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY( var(--bounce-offset) );
    }
`

const StyledPlaceholder = styled('div')(() => ({

    width: '100%',
    height: '600px',
    display: 'flex',
    flexDirection: 'column',

    '.container' : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    '.bounce': {
        background: 'red',
        height: '50px',
        width: '50px',
        borderRadius: '50px',
        margin: '5px',

    },

    '.container:hover .bounce': {
        animation: `${bounce} 350ms alternate infinite cubic-bezier(.2, .65, .6, 1)`,



    },

    '.bounce.one': {
        '--bounce-offset': '-40px',
        animationDuration: '400ms'
    },
    '.bounce.two': {
        '--bounce-offset': '-40px',
        animationDuration: '500ms',
        animationDelay: '1700ms'

    },
    '.bounce.three': {
        '--bounce-offset': '-40px',
        animationDuration: '600ms',
        animationDelay: '200ms'
    },

}));

const Placeholder = () => {

    return <StyledPlaceholder>
        <h5>Placeholder</h5>
        <div className='container'>
            <div className='bounce one'></div>
            <div className='bounce two'></div>
            <div className='bounce three'></div>
        </div>
    </StyledPlaceholder>
}

export default Placeholder;
