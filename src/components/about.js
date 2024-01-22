import React, { useState } from 'react';
import { Card } from 'antd';
import Perfil from '../imgs/perfil.png'

const tabList = [
  {
    key: 'tab1',
    tab: 'Sobre Mim ',
  },
  {
    key: 'tab2',
    tab: 'Habilidades',
  },
];
const contentList = {
  tab1: <p>Graduando em Análise e Desenvolvimento de Sistemas com foco em linguagens de programação front-end,<br/>
   buscando oportunidades de carreira para aplicar meus conhecimentos em <br/>Angular, JavaScript , React.js, Spring, PHP, Node.js e MongoDB.</p>,
  tab2: <p>content2</p>,
};


const About = () => {
  const [activeTabKey1, setActiveTabKey1] = useState('tab1');
  
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
 
  return (
    <>
      <Card
        className='about-container'
        style={{
          height: '500px',
          width: '100%',
          padding:'30px'
        }}
        title="@odevpablo"
        cover={<img alt="about" style={{  width: 'auto', height: '100px', top:'10px', position: 'absolute', borderRadius: '50%' }} src={Perfil} />}
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={onTab1Change}
      >
        {contentList[activeTabKey1]}
      </Card>
      <br />
      <br />
      
    </>
  );
};
export default About;