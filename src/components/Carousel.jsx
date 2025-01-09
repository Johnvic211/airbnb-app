import Card from "./Card"
import PropTypes from 'prop-types'

const Carousel = ({items}) => {
    return (
        <div className="flex flex-row overflow-x-scroll gap-4 w-[560px]">
            {items.map((data, index) => (
                <Card data={data} key={index} />
            ))}
        </div>
    )
}

Carousel.propTypes = {
  items: PropTypes.isRequired,
};

export default Carousel