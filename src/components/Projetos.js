import React, { useState } from "react";
import { Button, Card, Modal } from 'antd';
import iDisk from '../imgs/IDisk.png';
import Crud from '../imgs/NODE JS.png';
import Searchcep from '../imgs/searchcep.png'; 
import Ladingpage from '../imgs/Landing page.png';
import { LinkOutlined } from "@ant-design/icons";

const { Meta } = Card;

const projetosData = [
  {
    id: 1,
    title: "PLATAFORMA IDISK",
    description: "A iDisk é minha plataforma onde os usuários podem acessar cursos voltados para a área de desenvolvimento web.",
    imageUrl: iDisk,
    link: "https://idisk.netlify.app/",
    link2: "https://github.com/odevpablo/idisk", 
  },
  {
    id: 2,
    title: "CRUD NODE.JS",
    description: "Desenvolvi esta CRUD em Node.js com o intuito de revisar conceitos básicos do Node em uma API.",
    imageUrl: Crud,
    link2: "https://github.com/odevpablo/reviewnodejs", 
  },
  {
    id: 3,
    title: "CONSULTAR CEP",
    description: "Projeto desenvolvido em Angular no qual foi criada uma API que retorna o endereço do CEP procurado.",
    imageUrl: Searchcep,
    link: "https://searchcep-odevpablo.netlify.app/",
    link2: "https://github.com/odevpablo/searchcep", 
  },
  {
    id: 4,
    title: "LADING PAGE",
    description: "Modelo de landing page escritório de advocacia",
    imageUrl: Ladingpage,
    link: "https://mytemplateodevpablo.netlify.app/",
    link2: "https://github.com/odevpablo/template1", 
  }
];

const Projetos = () => {
  const [modalVisible, setModalVisible] = useState(null);

  const showModal = (projectId) => {
    setModalVisible(projectId);
  };

  const handleCancel = () => {
    setModalVisible(null);
  };

  return (
    <div className="expo" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
    {projetosData.map((projeto) => (
      <Card
        key={projeto.id}
        hoverable
        style={{ width: 240, margin: 3 }}
        cover={<img alt={projeto.title} style={{ height: 150 }} src={projeto.imageUrl} />}
        onClick={() => showModal(projeto.id)}
      >
        <Meta title={projeto.title} description={projeto.description} />
      </Card>
    ))}

    {projetosData.map((projeto) => (
      <Modal
        key={projeto.id}
        title={projeto.title}
        visible={modalVisible === projeto.id}
        onCancel={handleCancel}
        footer={[
          <Button style={{backgroundColor: '#0a091e'}} key="link" type="primary">
            <a href={projeto.link} target="_blank" rel="noopener noreferrer">
              <LinkOutlined /> Deploy
            </a>
          </Button>,
           <Button style={{backgroundColor: '#0a091e'}} key="link" type="primary">
           <a href={projeto.link2} target="_blank" rel="noopener noreferrer">
             <LinkOutlined /> Repositório
           </a>
         </Button>
        ]}

      >
        <p>{projeto.description}</p>
      </Modal>
    ))}
  </div>
  );
};

export default Projetos;
