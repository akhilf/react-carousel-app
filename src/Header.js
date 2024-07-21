import { useCallback, useState } from 'react';
const Header = (props) => {
    const [title, setTitle] = useState('Welcome to React carousel');
    return (
    <div className='py-10'> 
       <h1 className='font-black'>{title} from {props.author} </h1>
    </div>
    );
} 

export default Header;