// // Layout for images in the body content



{/* 
    <div class='grid grid-cols-1 border-2 border-black float-left w-1/2 md:w-1/4 bg-orange-300'>
    <div>Image</div>
    <div>Caption</div>
    </div> 


    // <div className='grid grid-cols-1 border-2 border-black float-left w-1/2 md:w-1/4 bg-orange-300'><div>I
    // </div><div>Caption</div></div> 
    // 

<div className='grid grid-cols-1 float-left mr-2 w-1/2 md:w-1/4 border-2 border-black divide-y divide-black  bg-orange-300'>
    <div>
        <img className='' src='" +  URL + "' />
    </div>
    <div> 
        <div className='flex-auto'>Captionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</div>  
    </div>
</div> 
*/}


function ContentImageLayout(TYPE, POSITION, URL, CAPTION){
    console.log(CAPTION);
    switch(TYPE) {
    case 1: // Head Image
        return(
        <img 
        className="float-left w-1/4 border-2 border-black mr-3 hidden md:block" 
        src={URL} />
        )
        break;
    case 2: // Content Images
        if(POSITION=="LEFT")
        {
            return "<div className='grid grid-cols-1 w-full md:float-left md:mr-2 md:w-1/4 border-2 border-black divide-y divide-black  bg-orange-300'><div><img className='' src='" +  URL + "' /></div><div className='text-wrap p-0.5 text-center'>" + CAPTION + "  </div></div> ";
        }
        else if(POSITION=="RIGHT")
        {
            return "<div className='grid grid-cols-1 w-full md:float-right md:ml-2 md:w-1/4 border-2 border-black divide-y divide-black  bg-orange-300'><div><img className='' src='" +  URL + "'/></div><div className='text-wrap p-0.5 text-center'>" + CAPTION + "</div></div>";
        }
        else if(POSITION=="FLEX")
        {
            return "<div className='grid grid-cols-1 border-2 border-black bg-orange-300'><div><img className=''  src='" +  URL + "' /></div><div className='text-wrap p-0.5 text-center'>" + CAPTION + "</div></div>";
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

