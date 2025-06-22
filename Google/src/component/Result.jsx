import { useEffect } from 'react' ;
import { useLocation } from 'react-router-dom';
import reactPlayer from 'react-player' ;
import  {useResultContext} from '../Context/ResultContextPovider';

export default function Result() {
  const {result , isLoading , getResult , searchTrem} = useResultContext();
  const location = useLocation();


  return (
    <div>Result</div>
  )
}
