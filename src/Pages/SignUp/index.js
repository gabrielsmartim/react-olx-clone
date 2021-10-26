import React, {useState, useEffect} from "react";
import { PageArea } from './styled';
import { PageContainer, PageTitle, ErrorMensage } from '../../components/MainComponents'
import useApi from '../../helpers/olxAPI' 
import { doLogin } from "../../helpers/AuthHandler";



const Page = () => {

    const api = useApi();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [disabled, setDisable] = useState(false);
    const [error, setError] = useState('');
    const [stateLoc, setStateLoc] = useState('');
    const [stateList, setStateList] = useState([]);

    useEffect(()=> {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }   
        getStates();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable(true);
        setError('');

        if(password !== confirmPassword) {
            setError('Senhas não batem!');
            setDisable(false);
            return;
        }
        const json = await api.register(name, email, password, stateLoc);
        if (json.error) {
            setError(json.error);
        } else {
            doLogin(json.token);
            window.location.href = '/';
        }
        setDisable(false);
    }


return (
    <PageContainer>
        <PageTitle>Cadastro</PageTitle>
        <PageArea>
            {error &&
                <ErrorMensage>{error}</ErrorMensage>
            }
            <form onSubmit={handleSubmit}>
            <label className='area'>
                    <div className='area-title'>Nome Completo:</div>
                    <div className="area-input">
                        <input
                            type="text" disabled={disabled} value={name}required
                            onChange={e=>setName(e.target.value)}
                        />
                    </div>
                </label>
                <label className='area'>
                    <div className='area-title'>Estado:</div>
                    <div className="area-input">
                        <select required value={stateLoc} onChange={e=>setStateLoc(e.target.value)}>
                            <option></option>
                            {stateList.map((i, k)=>
                                <option key={k} value={i._id}>{i.name}</option>
                                )}
                        </select>
                    </div>
                </label>
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
                    <div className='area-title'>Confirmar Senha:</div>
                    <div className="area-input">
                        <input type="password" disabled={disabled}
                        required
                        value={confirmPassword}
                        onChange={e=>setConfirmPassword(e.target.value)}
                        />
                    </div>
                </label>

                <label className='area'>
                    <div className='area-title'></div>
                    <div className="area-input">
                        <button disabled={disabled}>Fazer Cadastro</button>
                    </div>
                </label>
            </form>
        </PageArea>
    </PageContainer>

    
);
}   

export default Page;