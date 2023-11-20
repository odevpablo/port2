import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import iDisk from '../imgs/IDisk.png'
import Node from '../imgs/NODE JS.png'
import Cep from '../imgs/searchcep.png'
import { DiReact } from "react-icons/di";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
 
const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings} className="slider">
        <div className="slide-item">
          <h3>Plataforma iDisk</h3>
          <button className="slide-button">
          <img src={iDisk} width={285}/>
          <div className="elements">
            <p>A iDisk é minha plataforma onde os usuários podem acessar cursos
            voltados para a área de desenvolvimento web.</p>
            <FaGitAlt size={25} /> 
          </div>
          </button>
        </div>
        <div className="slide-item">
          <h3>CRUD Node.js</h3>
          <button className="slide-button">
          <img src={Node} width={285}/>
          <div className="elements">
            <p>Desenvolvi esta CRUD em Node.js com o intuito de revisar conceitos básicos do Node em uma API.</p>
            <FaGitAlt size={25}/> 
          </div>
          </button>
        </div>
        <div className="slide-item">
          <h3>Rastreador de CEP</h3>
          <button className="slide-button">
          <img src={Cep} width={285}/>
          <div className="elements">
            <p>Projeto desenvolvido em Angular no qual foi criada uma API que retorna o endereço do CEP procurado.</p>
            <FaGitAlt size={25}/> 
          </div>
          </button>
        </div>
      </Slider>
    );
};

export default Carousel;