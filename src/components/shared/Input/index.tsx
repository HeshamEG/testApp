import React  from 'react'; // literally anything, don't even have to use it
import {InputWrapper} from './styled'
interface Props {
    type: string
    name:string
    onChange?:any
    ref:any
}

const FormInput: React.FC<Props> = ({
    type,
    onChange,
    name,
    ref,
    ...rest
}) => {
    return (
        <InputWrapper type={type} onChange={onChange} name={name} ref={ref} {...rest}/>
    );
};

export  {FormInput};
