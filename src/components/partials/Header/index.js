import React from "react";
import { HeaderArea } from './styled';
import { Link } from "react-router-dom";
import { isLogged, doLogout } from "../../../helpers/AuthHandler";


const Header = () => {

    let logged = isLogged();

    const handleLogout = () => {
        doLogout();
        window.location.href = '/';
    };

    return(
<HeaderArea>
    <div className="container">
        <div className="logo">
            <Link to='/'>
                <span className='logo-1'>O</span>
                <span className='logo-2'>L</span>
                <span className='logo-3'>X</span>
            </Link>
        </div>
        <nav> 
            {logged &&
            <>
                <ul>
                    <li>
                        <Link to='/my-account'>
                            Minha conta
                        </Link>
                    </li>
                    <li>
                        <button onClick={handleLogout}>Sair</button>
                    </li>
                    <li>
                        <Link to='/post-an-ad' className='button'>
                            Fazer um anúncio
                        </Link>
                    </li>
                </ul>
            </>
            }

            {!logged &&
            <>
                <ul>
                    <li>
                        <Link to='signin'>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to='/signup'>
                            Cadastrar-se
                        </Link>
                    </li>
                    <li>
                        <Link to='/signin' className='button'>
                            Fazer um anúncio
                        </Link>
                    </li>     
                </ul>
            </>
            }
        </nav>
    </div>
</HeaderArea>
    )
}

export default Header;