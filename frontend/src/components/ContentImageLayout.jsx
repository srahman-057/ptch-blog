// // Layout for images in the body content

function ContentImageLayout(TYPE, POSITION, URL){
    switch(TYPE) {
    case 1: // Head Image
        return(
        <img className="float-left w-1/4 border-2 border-black mr-3 hidden md:block" src={URL} />
        )
        break;
    case 2: // Content Images
        if(POSITION=="LEFT")
        {
            return(
            <img className="float-left w-1/2 md:w-1/4 border-2 border-black mr-3" src={URL} />
            )
        }
        else if(POSITION="RIGHT")
        {
            return(
            <img className="float-right w-1/2 border-2 border-black" src={URL} />
            )
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
    // if(POSITION=="LEFT")
    // {
    //     return(
    //     <img className="float-left w-1/2 border-2 border-black mr-3" src={URL} />
    //     )
    // }
    // else if(POSITION="RIGHT")
    // {
    //     return(
    //     <img className="float-right w-1/2 border-2 border-black" src={URL} />
    //     )
    // }

    // else
    // {
        // return(
        //     <p>Error Rendering Image</p>
        // )
    // }
}

export default ContentImageLayout

