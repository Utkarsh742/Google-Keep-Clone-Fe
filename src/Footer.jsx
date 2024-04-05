import React from 'react'
import './App.css'

const Footer = () => {
    return (
        <footer className='w-full fixed bottom-0 bg-black text-white text-center p-2'>
            <div className='text-3xl'>
                <a href="https://www.instagram.com/ut_dwivedi/" target="_blank" rel='noreferrer'><i className="fab fa-instagram pl-5 pr-5 hover:text-instapurple"></i></a>
                <a href="https://www.linkedin.com/in/utkarshdwivedi742/" target="_blank rel='noreferrer"><i className="fab fa-linkedin pl-5 pr-5 hover:text-linkedinblue"></i></a>
                <a href="https://github.com/Utkarsh742" target="_blank rel='noreferrer"><i className="fab fa-github pl-5 pr-5 hover:text-githubgreen"></i></a>
            </div>
            <p className=' text-base font-cursive font-bold sm:text-xl'>Created with💗by <span className='text-yellow-400'>Utkarsh Dwivedi</span></p>
        </footer>
    )
}

export default Footer