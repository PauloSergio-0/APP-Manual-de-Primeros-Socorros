import { Text } from "react-native";
import { useState } from 'react';

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
  const [guiaBeingEdit, setGuiaBeingEdit] = useState('');

  function handleChangeStatus(guia) {
    alert("Alterar Status da Tarefa");
  }

  function handleEditGuia(guia) {
    setGuiaBeingEdit(guia);
    setIsEditGuiaModalVisible(true);
  }

  function handleConfirmDeleteGuia(guia) {
    setIsDeleteModalVisible(true);
  }

  function handleDeleteGuia() {
    setIsDeleteModalVisible(false);
  }

  function handleCreateGuia(guia) {
    setIsNewGuiaModalVisible(false);
  }

  function handleSaveEditGuia(guia) {
    setIsEditGuiaModalVisible(false);
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
        onClose={() => setIsNewGuiaModalVisible(false)}
        onSave={handleCreateGuia}
      />

      <EditGuiaModal
        visible={isEditGuiaModalVisible}
        onClose={() => setIsEditGuiaModalVisible(false)}
        onSave={handleSaveEditGuia}
        guia={guiaBeingEdit}
      />
    </Container>
  );
}
