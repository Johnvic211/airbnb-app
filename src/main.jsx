import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import Header  from './components/Header'
import Hero  from './components/Hero'
import Carousel  from './components/Carousel'

const root = createRoot(document.getElementById('root'))

const items = [
	{
		src: '/src/assets/katie-zaferes.png',
		alt: 'katie-usa-swimming',
		itemStatus: 'Sold Out',
		star: 5.0,
		reviewCount: 6,
		location: 'USA',
		description: 'Life lessons with Katie Zaferes',
		currency: '$',
		price: 136,
	},
	{
		src: '/src/assets/katie-zaferes.png',
		alt: 'girl-in-wedding-dress',
		itemStatus: 'Online',
		star: 5.0,
		reviewCount: 30,
		location: 'USA',
		description: 'Learn wedding photography',
		currency: '$',
		price: 125,
	},
	{
		src: '/src/assets/katie-zaferes.png',
		alt: 'katie-usa-swimming',
		itemStatus: '',
		star: 4.8,
		reviewCount: 2,
		location: 'USA',
		description: 'Group Mountain Bikin',
		currency: '$',
		price: 50,
	},
	{
		src: '/src/assets/katie-zaferes.png',
		alt: 'katie-usa-swimming',
		itemStatus: '',
		star: 4.8,
		reviewCount: 2,
		location: 'USA',
		description: 'Group Mountain Bikin',
		currency: '$',
		price: 50,
	},
	{
		src: '/src/assets/katie-zaferes.png',
		alt: 'katie-usa-swimming',
		itemStatus: '',
		star: 4.8,
		reviewCount: 2,
		location: 'USA',
		description: 'Group Mountain Bikin',
		currency: '$',
		price: 50,
	},
	{
		src: '/src/assets/katie-zaferes.png',
		alt: 'katie-usa-swimming',
		itemStatus: '',
		star: 4.8,
		reviewCount: 2,
		location: 'USA',
		description: 'Group Mountain Bikin',
		currency: '$',
		price: 50,
	},
	{
		src: '/src/assets/katie-zaferes.png',
		alt: 'katie-usa-swimming',
		itemStatus: '',
		star: 4.8,
		reviewCount: 2,
		location: 'USA',
		description: 'Group Mountain Bikin',
		currency: '$',
		price: 50,
	},

]

// eslint-disable-next-line react-refresh/only-export-components
function App() {
    return (
		<main>
			<Header />
			<div className='justify-self-center w-[560px] px-9'>
				<Hero />
				<Carousel items={items} />
			</div>
		</main>
    )
}

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)