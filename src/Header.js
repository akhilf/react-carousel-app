import { useCallback, useState } from 'react';
const Header = (props) => {
    const [title, setTitle] = useState('Welcome React carousel');
    return (
    <div> 
       <h1> Hello {title} from {props.author} </h1>
    </div>
    );
} 

export default Header;