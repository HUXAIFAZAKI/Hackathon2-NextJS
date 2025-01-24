"use client"
import React from 'react'
import Link from 'next/link';
import { integralCF } from '@/style/fonts';
import styles from './Header.module.css'


const Header: React.FC = () => {
  return (
    <>
      <header className='w-screen bg-white'>  
      <div className='first-order flex justify-center items-center text-center bg-black text-white p-2 w-full duration-300'>
      <p>Sign up and get 20% off to your first order. <Link href="/" className='block md:inline underline font-[500]'>Sign Up Now</Link></p>
      <span className='cursor-pointer' onClick={() => {
         document.querySelector('.first-order')?.remove() 
      }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.o2000/svg" 
        className='relative left-[10px] md:left-[175px]'>
        <path d="M13.2882 11.9617C13.4644 12.1378 13.5633 12.3767 13.5633 12.6258C13.5633 12.8749 13.4644 13.1137 13.2882 13.2898C13.1121 13.466 12.8733 13.5649 12.6242 13.5649C12.3751 13.5649 12.1362 13.466 11.9601 13.2898L6.99997 8.32813L2.03825 13.2883C1.86213 13.4644 1.62326 13.5633 1.37418 13.5633C1.12511 13.5633 0.886243 13.4644 0.710122 13.2883C0.534002 13.1122 0.435059 12.8733 0.435059 12.6242C0.435059 12.3751 0.534002 12.1363 0.710122 11.9602L5.67184 7L0.711685 2.03828C0.535564 1.86216 0.436621 1.62329 0.436621 1.37422C0.436621 1.12515 0.535564 0.886277 0.711685 0.710157C0.887805 0.534036 1.12668 0.435093 1.37575 0.435093C1.62482 0.435093 1.86369 0.534036 2.03981 0.710157L6.99997 5.67188L11.9617 0.709375C12.1378 0.533255 12.3767 0.434312 12.6257 0.434312C12.8748 0.434312 13.1137 0.533255 13.2898 0.709375C13.4659 0.885496 13.5649 1.12437 13.5649 1.37344C13.5649 1.62251 13.4659 1.86138 13.2898 2.0375L8.32809 7L13.2882 11.9617Z" fill="white"/>
        </svg>
      </span>
    </div>
    <div className='flex justify-evenly items-center p-4'>
      
    <span className='block md:hidden cursor-pointer ' onClick={()=>{
        document.querySelector('.sidebar')?.classList.toggle(`${styles.hide}`)
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
        <path d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12ZM3.75 7.125H20.25C20.5484 7.125 20.8345 7.00647 21.0455 6.7955C21.2565 6.58452 21.375 6.29837 21.375 6C21.375 5.70163 21.2565 5.41548 21.0455 5.2045C20.8345 4.99353 20.5484 4.875 20.25 4.875H3.75C3.45163 4.875 3.16548 4.99353 2.9545 5.2045C2.74353 5.41548 2.625 5.70163 2.625 6C2.625 6.29837 2.74353 6.58452 2.9545 6.7955C3.16548 7.00647 3.45163 7.125 3.75 7.125ZM20.25 16.875H3.75C3.45163 16.875 3.16548 16.9935 2.9545 17.2045C2.74353 17.4155 2.625 17.7016 2.625 18C2.625 18.2984 2.74353 18.5845 2.9545 18.7955C3.16548 19.0065 3.45163 19.125 3.75 19.125H20.25C20.5484 19.125 20.8345 19.0065 21.0455 18.7955C21.2565 18.5845 21.375 18.2984 21.375 18C21.375 17.7016 21.2565 17.4155 21.0455 17.2045C20.8345 16.9935 20.5484 16.875 20.25 16.875Z" fill="black"/>
        </svg>
    </span>
      <h1 className={`${integralCF.className} font-bold text-4xl h-[50px]`}>
        <Link href={'/'}>SHOP.CO</Link>
      </h1>
      <ul className={`hidden md:flex style-none gap-4 select-none`}>
        <Link href='/products' className='cursor-pointer hover:border-b border-black transition-all duration-100'>Shop</Link>
        <Link href='/products' className='cursor-pointer hover:border-b border-black transition-all duration-100'>On Sale</Link>
        <li className='cursor-pointer hover:border-b border-black transition-all duration-100'><a href="#newArrival">New Arrivals</a></li>
        <li className='cursor-pointer hover:border-b border-black transition-all duration-100'><a href="#brands">Brands</a></li>
      </ul>
      <div 
      className='hidden md:flex justify-start items-center h-[40px] min-w-[200px] w-[30%] border-l-4 border-r-4 rounded-full bg-[#f0f0f0]'> 
        <span className='select-none p-4 cursor-pointer rounded-full'>
          <svg width="22" height="20" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.7959 18.7041L16.3437 14.25C17.6787 12.5104 18.3019 10.3282 18.087 8.14607C17.8722 5.9639 16.8353 3.94516 15.1867 2.49937C13.5382 1.05357 11.4014 0.288988 9.20984 0.360713C7.01829 0.432437 4.93607 1.3351 3.38558 2.88559C1.83509 4.43608 0.932429 6.5183 0.860705 8.70985C0.78898 10.9014 1.55356 13.0382 2.99936 14.6867C4.44515 16.3353 6.46389 17.3722 8.64606 17.587C10.8282 17.8019 13.0104 17.1787 14.75 15.8438L19.2059 20.3006C19.3106 20.4053 19.4348 20.4883 19.5715 20.5449C19.7083 20.6016 19.8548 20.6307 20.0028 20.6307C20.1508 20.6307 20.2973 20.6016 20.4341 20.5449C20.5708 20.4883 20.695 20.4053 20.7997 20.3006C20.9043 20.196 20.9873 20.0717 21.044 19.935C21.1006 19.7983 21.1298 19.6517 21.1298 19.5038C21.1298 19.3558 21.1006 19.2092 21.044 19.0725C20.9873 18.9358 20.9043 18.8115 20.7997 18.7069L20.7959 18.7041ZM3.12499 9C3.12499 7.73915 3.49888 6.5066 4.19938 5.45824C4.89987 4.40988 5.89551 3.59278 7.06039 3.11027C8.22527 2.62776 9.50707 2.50151 10.7437 2.7475C11.9803 2.99348 13.1162 3.60064 14.0078 4.4922C14.8994 5.38376 15.5065 6.51967 15.7525 7.7563C15.9985 8.99293 15.8722 10.2747 15.3897 11.4396C14.9072 12.6045 14.0901 13.6001 13.0418 14.3006C11.9934 15.0011 10.7608 15.375 9.49999 15.375C7.80977 15.3733 6.18927 14.7011 4.99411 13.5059C3.79894 12.3107 3.12673 10.6902 3.12499 9Z" fill="black" fillOpacity="0.4"/>
          </svg>
        </span>
        <input type="search" placeholder='Search for products...' 
        id="search"
        className='bg-[#f0f0f0] p-2 min-w-[80%] w-full flex-grow-1 text-left rounded-full focus:outline-none outline-none'/>
      </div>
      
      <div className='flex justify-center items-center gap-4'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        className='cursor-pointer block md:hidden'>
      <path d="M21.7959 20.2041L17.3437 15.75C18.6787 14.0104 19.3019 11.8282 19.087 9.64607C18.8722 7.4639 17.8353 5.44516 16.1867 3.99937C14.5382 2.55357 12.4014 1.78899 10.2098 1.86071C8.01829 1.93244 5.93607 2.8351 4.38558 4.38559C2.83509 5.93608 1.93243 8.0183 1.8607 10.2098C1.78898 12.4014 2.55356 14.5382 3.99936 16.1867C5.44515 17.8353 7.46389 18.8722 9.64606 19.087C11.8282 19.3019 14.0104 18.6787 15.75 17.3438L20.2059 21.8006C20.3106 21.9053 20.4348 21.9883 20.5715 22.0449C20.7083 22.1016 20.8548 22.1307 21.0028 22.1307C21.1508 22.1307 21.2973 22.1016 21.4341 22.0449C21.5708 21.9883 21.695 21.9053 21.7997 21.8006C21.9043 21.696 21.9873 21.5717 22.044 21.435C22.1006 21.2983 22.1298 21.1517 22.1298 21.0037C22.1298 20.8558 22.1006 20.7092 22.044 20.5725C21.9873 20.4358 21.9043 20.3115 21.7997 20.2069L21.7959 20.2041ZM4.12499 10.5C4.12499 9.23915 4.49888 8.0066 5.19938 6.95824C5.89987 5.90988 6.89551 5.09278 8.06039 4.61027C9.22527 4.12776 10.5071 4.00151 11.7437 4.2475C12.9803 4.49348 14.1162 5.10064 15.0078 5.9922C15.8994 6.88376 16.5065 8.01967 16.7525 9.2563C16.9985 10.4929 16.8722 11.7747 16.3897 12.9396C15.9072 14.1045 15.0901 15.1001 14.0418 15.8006C12.9934 16.5011 11.7608 16.875 10.5 16.875C8.80977 16.8733 7.18927 16.2011 5.99411 15.0059C4.79894 13.8107 4.12673 12.1902 4.12499 10.5Z" fill="black"/>
        </svg>
        <Link href="/cart">
        <svg width="25" height="25" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
        <path d="M9.375 18.75C9.375 19.1208 9.26503 19.4834 9.059 19.7917C8.85298 20.1 8.56014 20.3404 8.21753 20.4823C7.87492 20.6242 7.49792 20.6613 7.1342 20.589C6.77049 20.5166 6.4364 20.3381 6.17417 20.0758C5.91195 19.8136 5.73337 19.4795 5.66103 19.1158C5.58868 18.7521 5.62581 18.3751 5.76773 18.0325C5.90964 17.6899 6.14996 17.397 6.45831 17.191C6.76665 16.985 7.12916 16.875 7.5 16.875C7.99728 16.875 8.47419 17.0725 8.82582 17.4242C9.17746 17.7758 9.375 18.2527 9.375 18.75ZM17.25 16.875C16.8792 16.875 16.5166 16.985 16.2083 17.191C15.9 17.397 15.6596 17.6899 15.5177 18.0325C15.3758 18.3751 15.3387 18.7521 15.411 19.1158C15.4834 19.4795 15.6619 19.8136 15.9242 20.0758C16.1864 20.3381 16.5205 20.5166 16.8842 20.589C17.2479 20.6613 17.6249 20.6242 17.9675 20.4823C18.3101 20.3404 18.603 20.1 18.809 19.7917C19.015 19.4834 19.125 19.1208 19.125 18.75C19.125 18.2527 18.9275 17.7758 18.5758 17.4242C18.2242 17.0725 17.7473 16.875 17.25 16.875ZM22.0753 5.58094L19.5169 13.8966C19.3535 14.4343 19.0211 14.9051 18.569 15.239C18.1169 15.5729 17.5692 15.7521 17.0072 15.75H7.77469C7.2046 15.7482 6.65046 15.5616 6.1953 15.2183C5.74015 14.8751 5.40848 14.3936 5.25 13.8459L2.04469 2.625H1.125C0.826631 2.625 0.540483 2.50647 0.329505 2.2955C0.118526 2.08452 0 1.79837 0 1.5C0 1.20163 0.118526 0.915483 0.329505 0.704505C0.540483 0.493527 0.826631 0.375 1.125 0.375H2.32687C2.73407 0.376258 3.12988 0.509515 3.45493 0.754779C3.77998 1.00004 4.01674 1.34409 4.12969 1.73531L4.81312 4.125H21C21.1761 4.12499 21.3497 4.1663 21.5069 4.24561C21.664 4.32492 21.8004 4.44001 21.905 4.58164C22.0096 4.72326 22.0795 4.88746 22.1091 5.06102C22.1387 5.23458 22.1271 5.41266 22.0753 5.58094ZM19.4766 6.375H5.45531L7.41375 13.2281C7.43617 13.3065 7.48354 13.3755 7.54867 13.4245C7.6138 13.4736 7.69315 13.5001 7.77469 13.5H17.0072C17.0874 13.5002 17.1656 13.4746 17.2303 13.427C17.2949 13.3794 17.3426 13.3123 17.3662 13.2356L19.4766 6.375Z" fill="black"/>
        </svg>
        </Link>
        
        <svg width="25" height="25" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 0.375C8.99747 0.375 7.0399 0.968821 5.37486 2.08137C3.70981 3.19392 2.41206 4.77523 1.64572 6.62533C0.879387 8.47543 0.678878 10.5112 1.06955 12.4753C1.46023 14.4393 2.42454 16.2434 3.84055 17.6595C5.25656 19.0755 7.06066 20.0398 9.02471 20.4305C10.9888 20.8211 13.0246 20.6206 14.8747 19.8543C16.7248 19.0879 18.3061 17.7902 19.4186 16.1251C20.5312 14.4601 21.125 12.5025 21.125 10.5C21.122 7.8156 20.0543 5.24199 18.1562 3.34383C16.258 1.44567 13.6844 0.377978 11 0.375ZM6.45969 16.9284C6.98195 16.2143 7.66528 15.6335 8.45418 15.2331C9.24308 14.8327 10.1153 14.624 11 14.624C11.8847 14.624 12.7569 14.8327 13.5458 15.2331C14.3347 15.6335 15.0181 16.2143 15.5403 16.9284C14.2134 17.8695 12.6268 18.375 11 18.375C9.37323 18.375 7.78665 17.8695 6.45969 16.9284ZM8.375 9.75C8.375 9.23082 8.52896 8.72331 8.8174 8.29163C9.10584 7.85995 9.5158 7.5235 9.99546 7.32482C10.4751 7.12614 11.0029 7.07415 11.5121 7.17544C12.0213 7.27672 12.489 7.52673 12.8562 7.89384C13.2233 8.26096 13.4733 8.72869 13.5746 9.23789C13.6759 9.74709 13.6239 10.2749 13.4252 10.7545C13.2265 11.2342 12.8901 11.6442 12.4584 11.9326C12.0267 12.221 11.5192 12.375 11 12.375C10.3038 12.375 9.63613 12.0984 9.14385 11.6062C8.65157 11.1139 8.375 10.4462 8.375 9.75ZM17.1875 15.3694C16.4583 14.4419 15.5289 13.6914 14.4688 13.1737C15.1444 12.4896 15.6026 11.6208 15.7858 10.6769C15.9689 9.73288 15.8688 8.75583 15.498 7.86861C15.1273 6.9814 14.5024 6.22364 13.702 5.69068C12.9017 5.15771 11.9616 4.87334 11 4.87334C10.0384 4.87334 9.09833 5.15771 8.29797 5.69068C7.49762 6.22364 6.87275 6.9814 6.50198 7.86861C6.13121 8.75583 6.0311 9.73288 6.21424 10.6769C6.39739 11.6208 6.85561 12.4896 7.53125 13.1737C6.4711 13.6914 5.54168 14.4419 4.8125 15.3694C3.89661 14.2083 3.32614 12.8129 3.1664 11.3427C3.00665 9.87254 3.2641 8.38711 3.90925 7.05644C4.55441 5.72578 5.5612 4.60366 6.81439 3.81855C8.06757 3.03343 9.5165 2.61703 10.9953 2.61703C12.4741 2.61703 13.9231 3.03343 15.1762 3.81855C16.4294 4.60366 17.4362 5.72578 18.0814 7.05644C18.7265 8.38711 18.984 9.87254 18.8242 11.3427C18.6645 12.8129 18.094 14.2083 17.1781 15.3694H17.1875Z" fill="black"/>
        </svg>
      </div>
    </div>
    <hr className="relative top-1 mx-auto w-[90%] h-[4px] border-[#f0f0f0] select-none" />
    </header>
    <div className={`sidebar translate-x-[-100vw] z-[999] w-full h-screen fixed top-0 bg-white text-black duration-200 ease-in-out`}>
        {/* <svg width="14" height="14" viewBox="0 0 14 14" fill="black" xmlns="http://www.w3.o2000/svg" className='fixed right-0 text-black'>
        <path d="M13.2882 11.9617C13.4644 12.1378 13.5633 12.3767 13.5633 12.6258C13.5633 12.8749 13.4644 13.1137 13.2882 13.2898C13.1121 13.466 12.8733 13.5649 12.6242 13.5649C12.3751 13.5649 12.1362 13.466 11.9601 13.2898L6.99997 8.32813L2.03825 13.2883C1.86213 13.4644 1.62326 13.5633 1.37418 13.5633C1.12511 13.5633 0.886243 13.4644 0.710122 13.2883C0.534002 13.1122 0.435059 12.8733 0.435059 12.6242C0.435059 12.3751 0.534002 12.1363 0.710122 11.9602L5.67184 7L0.711685 2.03828C0.535564 1.86216 0.436621 1.62329 0.436621 1.37422C0.436621 1.12515 0.535564 0.886277 0.711685 0.710157C0.887805 0.534036 1.12668 0.435093 1.37575 0.435093C1.62482 0.435093 1.86369 0.534036 2.03981 0.710157L6.99997 5.67188L11.9617 0.709375C12.1378 0.533255 12.3767 0.434312 12.6257 0.434312C12.8748 0.434312 13.1137 0.533255 13.2898 0.709375C13.4659 0.885496 13.5649 1.12437 13.5649 1.37344C13.5649 1.62251 13.4659 1.86138 13.2898 2.0375L8.32809 7L13.2882 11.9617Z" fill="white"/>
        </svg> */}
        <div className='flex items-center fixed top-10 w-full'>
          <h1 className={`${integralCF.className} font-bold text-4xl h-[50px] w-full flex justify-center`}>
            <Link href={'/'}>SHOP.CO</Link>
          </h1>
          <svg width="18" height="18" viewBox="0 0 14 14" fill="black" xmlns="http://www.w3.o2000/svg" className='cursor-pointer fixed right-10 text-black' onClick={()=>{
            document.querySelector('.sidebar')?.classList.toggle(`${styles.hide}`)
          }}>
          <path d="M13.2882 11.9617C13.4644 12.1378 13.5633 12.3767 13.5633 12.6258C13.5633 12.8749 13.4644 13.1137 13.2882 13.2898C13.1121 13.466 12.8733 13.5649 12.6242 13.5649C12.3751 13.5649 12.1362 13.466 11.9601 13.2898L6.99997 8.32813L2.03825 13.2883C1.86213 13.4644 1.62326 13.5633 1.37418 13.5633C1.12511 13.5633 0.886243 13.4644 0.710122 13.2883C0.534002 13.1122 0.435059 12.8733 0.435059 12.6242C0.435059 12.3751 0.534002 12.1363 0.710122 11.9602L5.67184 7L0.711685 2.03828C0.535564 1.86216 0.436621 1.62329 0.436621 1.37422C0.436621 1.12515 0.535564 0.886277 0.711685 0.710157C0.887805 0.534036 1.12668 0.435093 1.37575 0.435093C1.62482 0.435093 1.86369 0.534036 2.03981 0.710157L6.99997 5.67188L11.9617 0.709375C12.1378 0.533255 12.3767 0.434312 12.6257 0.434312C12.8748 0.434312 13.1137 0.533255 13.2898 0.709375C13.4659 0.885496 13.5649 1.12437 13.5649 1.37344C13.5649 1.62251 13.4659 1.86138 13.2898 2.0375L8.32809 7L13.2882 11.9617Z" fill="black"/>
          </svg>
        </div>
        
    <ul className='flex flex-col justify-center items-center style-none gap-4 select-none h-full'>
        <Link href='/products' className='text-2xl cursor-pointer hover:border-b border-black transition-all duration-100' onClick={()=>{
          document.querySelector('.sidebar')?.classList.toggle(`${styles.hide}`)
        }}>Shop</Link>
        <li className='text-2xl cursor-pointer hover:border-b border-black transition-all duration-100' onClick={()=>{
          document.querySelector('.sidebar')?.classList.toggle(`${styles.hide}`)
        }}>On Sale</li>
        <li  className='text-2xl cursor-pointer hover:border-b border-black transition-all duration-100' onClick={()=>{
          document.querySelector('.sidebar')?.classList.toggle(`${styles.hide}`)
        }}><a href="#newArrival">New Arrivals</a></li>
        <li className='text-2xl cursor-pointer hover:border-b border-black transition-all duration-100' onClick={()=>{
          document.querySelector('.sidebar')?.classList.toggle(`${styles.hide}`)
        }}><a href="#brands">Brands</a></li>
      </ul>
      
    </div>
    </>
    
  )
}

export default Header