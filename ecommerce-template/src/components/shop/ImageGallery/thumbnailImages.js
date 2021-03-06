import PropTypes from "prop-types";

function ThumbnailImages(props) {
    const imageArray = props.images;

    let isActive = props.activeThumb;
    let className="border-solid rounded-lg py-2 px-4 mr-2 hover:border-gray-700";
    let activeClass = "border-gray-200 border";

    function thumbnailSelect(index) {
        return (isActive === index ? activeClass = 'border-gray-700 border-2' : activeClass = 'border-gray-200 border');
    }
 
    return (
        <div>
            <ul className="flex">
                {imageArray.map((image, index) => (
                    <li key={index}>
                            <button 
                                label={ thumbnailSelect(index) } 
                                onClick={ () => props.click(index) } 
                                className={className + " " + activeClass
                            }>
                            <img src={image} alt={"thumbnail_" + index}/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )   
}
  
ThumbnailImages.propTypes = 
{
    activeThumb: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default ThumbnailImages;
  