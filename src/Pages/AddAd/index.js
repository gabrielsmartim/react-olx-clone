import React, {useRef, useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import { PageArea } from './styled';
import { PageContainer, PageTitle, ErrorMensage } from '../../components/MainComponents'
import useApi from '../../helpers/olxAPI' ;
import { createNumberMask } from "text-mask-addons";
import MaskedInput from 'react-text-mask'


const Page = () => {

    const api = useApi();

    const [title , setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [priceNegotiable, setPriceNegotiable] = useState(false);
    const [desc, setDesc] = useState('');

    const fileField = useRef();
    const [categories, setCategories] = useState([]);
    const history = useHistory();

    const [disabled, setDisable] = useState(false);
    const [error, setError] = useState('');

    useEffect(()=>{
        const getCategories = async ()=> {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    });
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable(true);
        setError('');
        let errors = [];

        if(!title.trim()) {
            errors.push('Sem título')
        }

        if(!category) {
            errors.push('Sem categoria')
        }

        if(errors.length === 0) {

            const fData = new FormData();
            fData.append('title', title);
            fData.append('price', price);
            fData.append('priceneg', priceNegotiable);
            fData.append('desc', desc);
            fData.append('cat', category);

            if(fileField.current.files.length > 0) {
                for(let i=0; i<fileField.current.files.length;i++)
                fData.append('img', fileField.current.files[i]);
            }

            const json = await api.addAd(fData);
            if(!json.error) {
                history.push(`/ad/${json.id}`);
                return;
            } else {
                setError(json.error);
            }




        } else {
            setError(errors.join("\n"));
        }

        setDisable(false);   

    
    }

    const priceMask = createNumberMask({
        prefix:'R$ ',
        includeThousandsSeparator:true,
        thousandsSeparatorSymbol:'.',
        allowDecimal:true,
        decimalSymbol:','
    });

return (
    <PageContainer>
        <PageTitle>Postar um anúncio</PageTitle>
        <PageArea>
            {error &&
                <ErrorMensage>{error}</ErrorMensage>
            }
            <form onSubmit={handleSubmit}>
                <label className='area'>
                    <div className='area-title'>Titulo</div>
                    <div className="area-input">
                        <input
                            type="text" disabled={disabled} value={title}
                            required
                            onChange={e=>setTitle(e.target.value)}
                        />
                    </div>
                </label>
                <label className='area'>
                    <div className='area-title'>Categoria</div>
                    <div className="area-input">
                        <select 
                        disabled={disabled}
                        onChange={e=>setCategory(e.target.value)}
                        required
                        >
                            <option value=""></option>
                            {categories && categories.map(i=>
                                <option key={i._id} value={i._id}>{i.name}</option>    
                            )}


                        </select>
                    </div>
                </label>
                <label className='area'>
                    <div className='area-title'>Preço</div>
                    <div className="area-input">
                        <MaskedInput
                            mask={priceMask}
                            placeholder='R$ '
                            disabled={disabled || priceNegotiable}
                            value={price}
                            onChange={e=>setPrice(e.target.value)}
                        />
                           
                    </div>
                </label>
                <label className='area'>
                    <div className='area-title'>Preço Negociável</div>
                    <div className="area-input">
                        <input className='checkbox' type="checkbox" disabled={disabled} checked={priceNegotiable}
                         onChange={e=>setPriceNegotiable(!priceNegotiable)}
                         />
                    </div>
                </label>
                <label className='area'>
                    <div className='area-title'>Descrição</div>
                    <div className="area-input">
                        <textarea
                        disabled={disabled}
                        value={desc}
                        onChange={e=>setDesc(e.target.value)}
                        ></textarea>
                    </div>
                </label>
                <label className='area'>
                    <div className='area-title'>Imagens (1 ou mais)</div>
                    <div className="area-input">
                        <input type="file" disabled={disabled} multiple ref={fileField} />
                    </div>
                </label>
                <label className='area'>
                    <div className='area-title'></div>
                    <div className="area-input">
                        <button disabled={disabled}>Adicionar Anúncio</button>
                    </div>
                </label>
            </form>
        </PageArea>
    </PageContainer>

    
);
}   

export default Page;