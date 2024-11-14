import { Text, Alert } from "react-native";
import { useState , useEffect} from 'react';

import { Container } from "./styles";
import Header from "../components/Header";
import Guias from "../components/Guia_app";
import { guia } from '../mocks/guia';
import AddButton from '../components/AddButton';
import NewGuiaModal from '../components/NewGuiaModal';
import EditGuiaModal from '../components/EditGuiaModal';
import DeleteConfirmModal from '../components/DeleteConfirmModal';

export default function Main() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isNewGuiaModalVisible, setIsNewGuiaModalVisible] = useState(false);
  const [isEditGuiaModalVisible, setIsEditGuiaModalVisible] = useState(false);
  const [guiaBeingEdit, setGuiaBeingEdit] = useState(null);

// Função de edição de guia
function handleEditGuia(guia) {
  console.log("Antes de alterar:", guia);  // Verifica o guia antes de alterá-lo
  setGuiaBeingEdit(guia);  // Atualiza o estado

  // Não precisa acessar o estado imediatamente após a atualização
  // O estado será atualizado na próxima renderização do componente
  setIsEditGuiaModalVisible(true);
}

  // UseEffect para monitorar mudanças no estado guiaBeingEdit
  useEffect(() => {
    console.log("state atualizado:", guiaBeingEdit);
  }, [guiaBeingEdit]);

  // Função para salvar edição da guia
  function handleSaveEditGuia(updatedGuia) {
    if (updatedGuia.title) {
      console.log("Após edição:", updatedGuia);  // Verifica o guia após a edição
      console.log(`titulo: ${updatedGuia.title}\nDescrição: ${updatedGuia.description}`);
      setIsEditGuiaModalVisible(false);
    } else {
      console.error("Guia inválida");
    }
  }


  // Função para confirmar a exclusão da guia
  function handleConfirmDeleteGuia(guia) {
    setIsDeleteModalVisible(true);
  }

  // Função para confirmar a exclusão
  function handleDeleteGuia() {
    setIsDeleteModalVisible(false);
  }

  // Função para criar nova guia
  function handleCreateGuia(guia) {
    setIsNewGuiaModalVisible(false);
  }



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
