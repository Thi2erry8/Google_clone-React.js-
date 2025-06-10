import React , { createContext, useContext , useState} from 'react'

const ResultContext = createcontext();
const baseUrl = 'https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures'
/* 'AIzaSyBZSZuOlBtgSB_QUcLhW8vWgOGWglVgdL0' */

export const ResultContextProvider = ({children}) => {
       const[results,setResults] = useState([]);
       const [isLoading,setIsLoading] = useState(false);
       const [searchTerm ,setSearchTerm] = useState("");

       const getResults = async (type) => {
           setIsLoading(true);

           const response = await fetch(`${baseUrl}${type}` ,{
            
           }
       }


}