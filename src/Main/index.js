import { Text, Alert } from "react-native";
import { useState , useEffect, useCallback} from 'react';

import { Container } from "./styles";
import Header from "../components/Header";
import Guias from "../components/Guia_app";
// import { guia } from '../mocks/guia';
import AddButton from '../components/AddButton';
import NewGuiaModal from '../components/NewGuiaModal';
import EditGuiaModal from '../components/EditGuiaModal';
import DeleteConfirmModal from '../components/DeleteConfirmModal';

import { createGuia,listGuias, deleteGuia, updateGuia, createTable } from "../services/GuiaService";

export default function Main() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isNewGuiaModalVisible, setIsNewGuiaModalVisible] = useState(false);
  const [isEditGuiaModalVisible, setIsEditGuiaModalVisible] = useState(false);
  const [guiaBeingEdit, setGuiaBeingEdit] = useState(null);
  const [guiaBeingDeleted, setGuiaBeingDeleted] = useState(null);
  const [guia, setGuias] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    createTable();
    loadGuias();
  }, []);
  
  const loadGuias = useCallback(async () => {
    setIsLoading(true);
    
    const guiaList = await listGuias();
    
    setGuias(guiaList);
    
    setIsLoading(false);
  });

  // Função para criar nova guia
  async function handleCreateGuia(guia) {
    await createGuia(guia);
    loadGuias();
    setIsNewGuiaModalVisible(false);
  }

  // Função para salvar edição da guia
  async function handleSaveEditGuia(guia) {
    console.log("guia teste guia")
    console.log(guia)

    await updateGuia({ ...guia, id: guiaBeingEdit.id });


    loadGuias()
    setIsEditGuiaModalVisible(false)
  }
  
  // Função de edição de guia
  function handleEditGuia(guia) {
    
   // Verifica o guia antes de alterá-lo
    setGuiaBeingEdit(guia);  // Atualiza o estado

    setIsEditGuiaModalVisible(true);
  }
  // Função para confirmar a exclusão da guia
  async function handleConfirmDeleteGuia(guia) {
    console.log("teste de guia exclusão")
    
    console.log(guia)
    console.log("teste de guia exclusãoasdasdasd")
    await deleteGuia(guia)
    console.log("teste de guia exclusão2222")
    console.log(guia)
    loadGuias()
    setIsDeleteModalVisible(true);
  }

  // Função para confirmar a exclusão
  function handleDeleteGuia(guia) {
    console.log("guia a ser deletada: ")
    console.log(guia.id)
    setGuiaBeingDeleted(guia)
    setIsDeleteModalVisible(false);
  }
  
  // UseEffect para monitorar mudanças no estado guiaBeingEdit
  useEffect(() => {
    console.log("state atualizado:", guiaBeingEdit);
  }, [guiaBeingEdit]);

  return (
    <Container>
      <Header />
      
      <Guias
        guia={guia}  // Passando os dados corretamente
        onEditGuia={handleEditGuia}
        onDeleteGuia={handleConfirmDeleteGuia}
        DeleteGuia={handleConfirmDeleteGuia}
      />

      <AddButton onPress={() => setIsNewGuiaModalVisible(true)} />
      
      <DeleteConfirmModal
          visible={isDeleteModalVisible}
          onClose={() => setIsDeleteModalVisible(false)}
          onConfirm={handleDeleteGuia}
        />
      
      <NewGuiaModal
        visible={isNewGuiaModalVisible}
        onSave={handleCreateGuia}
        onClose={() => setIsNewGuiaModalVisible(false)}
      />

      <EditGuiaModal
        visible={isEditGuiaModalVisible}
        onClose={() => setIsEditGuiaModalVisible(false)}
        onSave={handleSaveEditGuia}
        guia={guiaBeingEdit} // Passando o guia sendo editado
      />

    </Container>
  );
}
