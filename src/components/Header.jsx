import airbnbLogo from './../assets/airbnb-logo.png' 

const Header = () => {
    return (
        <div className='px-3 py-5 shadow-md'>
            <img src={airbnbLogo} alt="airbnb logo" className='w-20' />
        </div>
    )
}

export default Header