
import styledComponents from 'styled-components';
import styledComponentsTS from 'styled-components-ts';

// Create an interface for the component
export interface CardProps { }

const CardWrapper = styledComponentsTS<CardProps>(styledComponents.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px dotted;
    width: 63vw;
    height: 10vh;
    margin-bottom: 2vh;
    border-radius: 12px;
    padding: 0.5rem;
    justify-content: center;
    cursor: pointer;
    transition-property: width;
    transition-delay: 1s;
    transition: all 0.1s ease-in-out;
     &:hover{
        width:64vw;
           }
`



export { CardWrapper };
