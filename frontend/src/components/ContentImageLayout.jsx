// // Layout for images in the body content



function ContentImageLayout(TYPE, POSITION, URL, CAPTION){
    console.log(CAPTION);
    switch(TYPE) {
    case 1: // Head Image
        return(
        <img 
        className="float-left w-1/4 h-max object-fit border-2 border-black mr-2 ml-2 hidden md:block" 
        src={URL} />
        )
        break;
    case 2: // Content Images
        if(POSITION=="LEFT")
        {
            return "<div className='grid grid-cols-1 w-full md:w-1/4 md:clear-left md:float-left md:mr-2 border-2 border-black divide-y divide-black  bg-orange-300 mt-2 mb-2 md:mt-2 md:mb-2'><div className='place-items-center bg-orange-100'><img className='h-full w-full object-fit' src='" +  URL + "' /></div><div className='text-wrap p-0.5 text-center'>" + CAPTION + "  </div></div> ";
        }
        else if(POSITION=="RIGHT")
        {
            return "<div className='grid grid-cols-1 w-full md:w-1/4 md:object-scale-down md:clear-right md:float-right md:ml-2 border-2 border-black divide-y divide-black bg-orange-300 mt-2 mb-2 md:mt-2 md:mb-2'><div className='place-items-center bg-orange-100'><img className='h-full w-full object-fit' src='" +  URL + "'/></div><div className='text-wrap p-0.5 text-center'>" + CAPTION + "</div></div>";
        }
        else if(POSITION=="FLEX")
        {
            return "<div className='grid grid-cols-1 mt-2 mb-2 md:mt-4 mt:mb-4 border-2 border-black divide-y-2 divide-black bg-orange-300'><div className='place-items-center bg-orange-100'><img className='h-full w-full object-fit'  src='" +  URL + "' /></div><div className='text-wrap p-0.5 text-center'>" + CAPTION + "</div></div>";
        }
        else
        {
            return(
                <p>Error Rendering Image</p>
            )
        }
        break;
    default:
        return(
            <p>Error Rendering Image</p>
        )
    }

}

export default ContentImageLayout

