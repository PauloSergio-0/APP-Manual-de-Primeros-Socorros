import { Text } from '../Text';
import CustomModal from '../CustomModal';
import { Button } from '../Button';
import { Actions } from './styles';

export default function DeleteConfirmModal({ visible, onClose, onConfirm }) {
  return (
    <CustomModal visible={visible}>
      <Text style={{ fontSize: 18, fontWeight: '600', color: '#010409' }}>
        Tem certeza que deseja remover o Guia?
      </Text>

      <Text style={{ opacity: 0.7, marginTop: 4 , color: '#010409'}}>
        Essa ação não pode ser desfeita
      </Text>

      <Actions>
        <Button primary={false} onPress={onClose}>
          Cancelar
        </Button>

        <Button onPress={onConfirm}>
          Confirmar
        </Button>
      </Actions>
    </CustomModal>
  );
}
