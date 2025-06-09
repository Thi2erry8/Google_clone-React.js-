function Footer(){
  const year = Date.getYear() ;
    return(
    <div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200">
          {year}
    </div>
    )
}
export default Footer