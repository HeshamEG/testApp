import styledComponents from 'styled-components';
import styledComponentsTS from 'styled-components-ts';

// Create an interface for the component
export interface FormProps {

}

const FormWrapper = styledComponentsTS<FormProps>(styledComponents.form)`
    padding-bottom: 2rem;
    height: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: start;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: start;
    border-bottom: 1px solid;
    border-top: 1px solid;
    margin-bottom: 1rem;
    flex-direction: column;

`
const InputWrapper=styledComponentsTS<FormProps>(styledComponents.span)`
    display: flex;
    justify-content: space-between;
    width: 14rem;
    padding: 1rem;
`

export { FormWrapper ,InputWrapper};
