import { Modal } from 'react-native';

import { Overlay, ModalBody } from './styles';

export default function CustomModal({ children, visible }) {
  return (
    <Modal
      transparent
      statusBarTranslucent
      animationType="fade"
      visible={visible}
    >
      <Overlay behavior="padding">
        <ModalBody>
          {children}
        </ModalBody>
      </Overlay>
    </Modal>
  );
}