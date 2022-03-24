import './index.css'

const Thumbnail = (props) => {
    const {imagesData, isActive, onClickThumbnailImage} = props
    const {thumbnailUrl, thumbnailAltText} = imagesData

    const opacityStytle = isActive ? "" : 'thumbnail-opacity'

    const onClickImage = () => {
        onClickThumbnailImage(imagesData)
    }

    
    return (
        <li>
           <img onClick={onClickImage} className={`thumbnail-style ${opacityStytle}`} src={thumbnailUrl} alt={thumbnailAltText} />
        </li>
    )
}
export default Thumbnail