import { Link } from 'react-router-dom';
import Search from './Search';

function Navbar({darkTheme , setDarktheme}){
   
          
        return( 
            <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-centers border-b border-gray-200">
                   <div className="flex justify-between items-center space-x-5 w-screen">
                         <Link to="/">
                                <p className=' p-2 m-1 rounded-sm text-2xl text-gray-600 dark:text-gray-100 border border-gray-600'>
                                    HaiSearch<i className="ri-search-line"></i>
                                </p>
                         </Link>
                         <button className='text-2xl text-gray-600 dark:text-gray-100 ' type='button' onClick={() => setDarktheme(!darkTheme) }>
                                    <i className={darkTheme ? 'ri-sun-fill text-2xl' : 'ri-moon-fill text-2xl'}></i>
                         </button>
                  </div>
                  <Search/>
            </div>
        )  

}
export default Navbar