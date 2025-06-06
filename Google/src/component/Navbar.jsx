import { Link } from 'react-router-dom';

function Navbar(){
   
          
        return( 
            <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-centers border-b border-gray-200">
                   <div className="flex justify-between items-center space-x-5 w-screen">
                         <Link to="/">
                                <p className='text-2xl'>
                                    HaiSearch<i className="ri-search-line"></i>
                                </p>
                         </Link>
                  </div>
            </div>
        )  

}
export default Navbar