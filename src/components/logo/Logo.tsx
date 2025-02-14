import logo from '../../assents/images/logo.png'
import {Image} from "../imag/Image.tsx";

export const Logo = () => {
    return (
        <a href={''}>
            <Image src={logo} alt={'logo'} height={'79px'} width={'79px'} />
        </a>
    );
};


