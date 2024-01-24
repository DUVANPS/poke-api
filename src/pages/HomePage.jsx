import React, { useRef } from 'react'
import {setTrainerG} from '../store/states/trainer.state'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../style/styleHome.css'

const HomePage = () => {
    const inputTrainer = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e =>{
        e.preventDefault()
        dispatch(setTrainerG(inputTrainer.current.value.trim()))
        navigate('/pokedex')
    }



return (
    <div>
        <div className='img-pokedex'>
                    <img className='flotar' src="https://th.bing.com/th/id/OIP.wx-kT9kg76eAnbesGwvkogAAAA?rs=1&pid=ImgDetMain" alt="" />

        </div>
        <div className='container-trainer'>
            <h2 className='title-trainer'>Hi trainer!</h2>
            <p className='parrafo-pokedex'>To start this app, give me your trainer name</p>


        </div>
        
        
        <div className='container-center'>
            <form className='form-style' onSubmit={handleSubmit} >
            <input className='input-pokedex' ref={inputTrainer} type="text" />
            <button className='button-style'> Start<span className='nave'>🚀</span> </button>
        </form>
        </div>
        
    </div>
)
}

export default HomePage