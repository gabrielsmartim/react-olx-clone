import React, {useState} from "react";
import { PageArea } from './styled';
import { PageContainer, PageTitle, ErrorMensage } from '../../components/MainComponents'
import useApi from '../../helpers/olxAPI' 
import { doLogin } from "../../helpers/AuthHandler";



const Page = () => {

    const api = useApi();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [disabled, setDisable] = useState(false);
    const [error, setError] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable(true);
        setError('');
        
        const json = await api.login(email, password);
        if (json.error) {
            setError(json.error);
        } else {
            doLogin(json.token, rememberPassword);
            window.location.href = '/';
        }
        setDisable(false);
    }


return (
    <PageContainer>
        <PageTitle>Login</PageTitle>
        <PageArea>
            {error &&
                <ErrorMensage>{error}</ErrorMensage>
            }
            <form onSubmit={handleSubmit}>
                <label className='area'>
                    <div className='area-title'>E-mail:</div>
                    <div className="area-input">
                        <input
                            type="email" disabled={disabled} value={email}
                            required
                            onChange={e=>setEmail(e.target.value)}
                        />
                    </div>
                </label>
                <label className='area'>
                    <div className='area-title'>Senha:</div>
                    <div className="area-input">
                        <input type="password" disabled={disabled}
                        required
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        />
                    </div>
                </label>
                <label className='area'>
                    <div className='area-title'>Lembrar senha</div>
                    <div className="area-input">
                        <input type="checkbox" className='checkbox'
                            checked={rememberPassword}
                            onChange={e=>setRememberPassword(!rememberPassword)}
                        />
                    </div>
                </label>
                <label className='area'>
                    <div className='area-title'></div>
                    <div className="area-input">
                        <button disabled={disabled}>Fazer Login</button>
                    </div>
                </label>
            </form>
        </PageArea>
    </PageContainer>

    
);
}   

export default Page;