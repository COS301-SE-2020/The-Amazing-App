import  React, {useState,  useEffect} from 'react';
import Api from '../Api/Api'

export default ()=>{
    const [results,setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState('');

    const searchApi = async term =>{
        try{
            const response = await Api.get('/search',{
                params:{
                    limit:10,
                    term,
                    location:'Pretoria'
                }
            });
            setResults(response.data.businesses);
        }
        catch(error){
            setErrorMessage('Something went wrong')
        }
    } 

    useEffect(()=>{
         searchApi('id ');
    },[]);
    return [searchApi,results,errorMessage];
};