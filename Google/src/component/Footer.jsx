function Footer(){
  const year = new Date().getFullYear() ;
    return(
    <div className="text-center text-gray-600 p-10 mt-10 border-t dark:border-gray-700 border-gray-200">
          {year} Haisearch ©
    </div>
    )
}
export default Footer