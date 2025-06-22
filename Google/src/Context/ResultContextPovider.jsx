import React , { createContext, useContext , useState} from 'react'

const ResultContext = createContext();
const baseUrl = 'https://google-search-api-fast.p.rapidapi.com'
/* '2c35bfe629b34237fa6142f19610f1faa101f50e968436ea08b0317ee7511b24' */

export default function ResultContextProvider  ({children}) {
       const[results,setResults] = useState([]);
       const [isLoading,setIsLoading] = useState(false);
       const [searchTerm ,setSearchTerm] = useState("");
       

       const getResults = async (type) => {
           setIsLoading(true);

           const response = await fetch(`${baseUrl}${type}` ,{
              method:'GET',
              headers: {
		              'x-rapidapi-key': '47a2ac3bcdmsh4fb0107a908323ep13c651jsn9301b5cf4956',
		              'x-rapidapi-host': 'google-search-api-fast.p.rapidapi.com'
	          }
           });

           const data = await response.json() ;

           setResults(data);
           setIsLoading(false);
       }
       return (
             <ResultContext.Provider value={{ getResults, results , searchTerm , setSearchTerm , isLoading}}>
                 {children}
            </ResultContext.Provider>
       )

}
export default function useResultContext () { useContext(ResultContext) };