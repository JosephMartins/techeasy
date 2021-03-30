import { useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import { useAuth } from '../../hooks/auth';


import { Container } from './styles';


export function NewToolsModal({isOpen, onRequestClose, createTools}){
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const { user } = useAuth();

  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  console.log();


  function tagFormatted(tag){
    const tagSeparated = tag.split(',');
    return tagSeparated;
  }


  async function handleCreateNewTransaction(event){
    event.preventDefault();
    const tagsFormat = tagFormatted(tags);
    await createTools({
      title,
      link,
      description,
      tags: tagsFormat,
      user_id: user.id,
    })
    setTitle('');
    setLink('');
    setDescription('');
    setTags([]);
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className="react-modal-content"
      ariaHideApp={false}
    >
      <button 
        type="button" 
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="fechar modal"/>
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transaçao</h2>

        <input 
          type="text" 
          placeholder="Titulo" 
          value={title} 
          onChange={event => setTitle(event.target.value)} 
        />

        <input 
          type="text" 
          placeholder="Link" 
          value={link} 
          onChange={event => setLink(event.target.value)} 
        />

        <input 
          type="text" 
          placeholder="Description" 
          value={description} 
          onChange={event => setDescription(event.target.value)} 
        />

        <input 
          type="text" 
          placeholder="Ex: jwt, rest, api" 
          value={tags}   
          onChange={event => setTags(event.target.value)} 
        />

       

       
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}


