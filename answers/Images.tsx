import pic1 from "../public/pictures/1.png"
import pic2 from "../public/pictures/2.png"
import pic3 from "../public/pictures/1.png"
import pic4 from "../public/pictures/4.jpg"
import pic5 from "../public/pictures/5.png"
import pic6 from "../public/pictures/6.png"
import pic7 from "../public/pictures/7.png"
import pic8 from "../public/pictures/8.png"
import pic9 from "../public/pictures/9.png"
import pic10 from "../public/pictures/10.png"
import Image from 'next/image'

interface ImageProps {
    id : number
}

var pics = [pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10]



export function Images({id}: ImageProps){
    return ( <div className="pic">
        <Image
        src={pics[id]}
        alt="Picture"
        width={100}
        height={100}
        priority
        />
        </div>
    )
}