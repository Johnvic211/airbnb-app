import starImg from './../assets/star.png'
import PropTypes from 'prop-types'

const Card = ({ data }) => {
  return (
    <div className='flex-shrink-0 w-44'>
        <div className="relative inline-block">
            {data.itemStatus && (
                <div className="absolute top-1.5 left-1.5 bg-white rounded-sm text-[9px] px-2 py-1 uppercase z-10 w-[62px] text-center">
                    {data.itemStatus}
                </div>
            )}
            <img src={data.src} alt={data.alt} className="rounded-xl w-full h-auto" />
        </div>


        <section className='flex flex-col text-[12px] leading-relaxed'>
            <p className='flex'>
                <img src={starImg} alt="Star Icon" className='w-2.5 h-2.5 mt-[0.165rem] mr-1' />
                {data.star} ({data.reviewCount}) &#x2022; {data.location}
            </p>
            <p>{data.description}</p>
            <p>
                <b>From {data.currency}{data.price} </b>
                / person
            </p>
        </section>
    </div>
  )
}

Card.propTypes = {
    data: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
        itemStatus: PropTypes.string,
        star: PropTypes.number.isRequired,
        reviewCount: PropTypes.number.isRequired,
        location: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default Card