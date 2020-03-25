import React  from 'react'; // literally anything, don't even have to use it

interface Props {
    src: string
}

const Img: React.FC<Props> = ({
    src
}) => {
    return (
        <img src={src} alt="logo"/>
    );
};

export default Img;
