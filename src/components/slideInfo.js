import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import iDisk from '../imgs/IDisk.png'
import Node from '../imgs/NODE JS.png'
import Cep from '../imgs/searchcep.png'
import Model1 from '../imgs/Landing page.png'

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
        <div className="viewcarousel">
        <Slider {...settings} className="slider">
        <div className="slide-item">
          <h3>Plataforma iDisk</h3>
          <button className="slide-button">
         <a href="https://idisk.netlify.app/"><img src={iDisk} width={285}/></a>
          <div className="elements">
            <p>A iDisk é minha plataforma onde os usuários podem acessar cursos
            voltados para a área de desenvolvimento web.</p>
            <a href='https://github.com/odevpablo/idisk'><FaGitAlt size={25} /></a> 
          </div>
          </button>
        </div>
        <div className="slide-item">
          <h3>CRUD Node.js</h3>
          <button className="slide-button">
         <a href="https://github.com/odevpablo/reviewnodejs"><img src={Node} width={285}/></a>
          <div className="elements">
            <p>Desenvolvi esta CRUD em Node.js com o intuito de revisar conceitos básicos do Node em uma API.</p>
            <a href="https://github.com/odevpablo/reviewnodejs"><FaGitAlt size={25}/></a> 
          </div>
          </button>
        </div>
        <div className="slide-item">
          <h3>Rastreador de CEP</h3>
          <button className="slide-button">
          <a href="https://searchcep-odevpablo.netlify.app/"><img src={Cep} width={285}/></a>
          <div className="elements">
            <p>Projeto desenvolvido em Angular no qual foi criada uma API que retorna o endereço do CEP procurado.</p>
            <a href="https://github.com/odevpablo/searchcep"><FaGitAlt size={25}/></a> 
          </div>
          </button>
        </div>
        <div className="slide-item">
          <h3>Modelo landing page</h3>
          <button className="slide-button">
          <a href="https://mytemplateodevpablo.netlify.app/"><img src={Model1} width={285}/></a>
          <div className="elements">
            <p>Modelo de landing page escritório de advocacia</p>
            <a href="https://github.com/odevpablo/template1"><FaGitAlt size={25}/></a> 
          </div>
          </button>
        </div>
      </Slider>
      </div>
    );
};

export default Carousel;