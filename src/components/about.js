import React from "react";
import img from '../imgs/IMG_4864.jpg'
const About = () =>{
    return(
        <div className="about">
            <p>Olá, meu nome é Pablo, tenho 22 anos e sou estudante de Análise e Desenvolvimento de Sistemas.<br/>
             Sempre amei tecnologia e, ao longo dos anos, desenvolveu-se o desejo de trabalhar na área de desenvolvimento. <br/>
            Criei este portfólio como uma amostra das minhas habilidades. Estou aberto a oportunidades de emprego.</p>
            <img className="profile" src={img} width={300}/>
        </div>
    );
};

export default About;