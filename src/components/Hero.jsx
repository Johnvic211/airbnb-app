import photoGrid from './../assets/photo-grid.png'

const Hero = () => {
    return (
        <section className='flex flex-col'>
            <img src={photoGrid} alt="Photo Grid" className='max-w-md self-center mt-6' />
            <div className='py-9 mx-auto'>
                <h1>Online Experiences</h1>
                <p className='mt-4 text-lg leading-tight'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
            </div>
        </section>
    )
} 

export default Hero