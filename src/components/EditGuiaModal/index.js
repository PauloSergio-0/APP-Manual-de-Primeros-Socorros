import { Image, TouchableOpacity } from 'react-native';

import { Text } from '../Text';

import CustomModal from '../CustomModal';
import GuiaForm from '../GuiaForm';

import { Header } from './styles';

import close from '../../assets/images/close.png';

export default function EditGuiaModal({ visible, onClose, onSave, guia }) {
  return (
    <CustomModal visible={visible}>
      <Header>
        <Text style={{ fontWeight: '600', color: '#010409' }}>Editar Guia</Text>

        <TouchableOpacity onPress={onClose}>
          <Image source={close} />
        </TouchableOpacity>
      </Header>

      <GuiaForm onSave={onSave} guia={guia} buttonLabel="Alterar" />
    </CustomModal>
  );
}