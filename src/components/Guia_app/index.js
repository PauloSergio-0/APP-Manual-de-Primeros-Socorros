import { TouchableOpacity, FlatList } from 'react-native';
import { Text } from '../Text';
import { guia } from '../../mocks/guia'; // Certifique-se de importar o dado corretamente

import pending from '../../assets/images/pending.png';
import done from '../../assets/images/done.png';
import excluir from '../../assets/images/delete.png';
import edit from '../../assets/images/edit.png';

import {
  Guia,
  GuiaHeader,
  GuiaDescription,
  GuiaFooter,
  GuiaActions,
  GuiaIcon
} from './styles';

export default function Guias({ guia, onEditGuia, onDeleteGuia }) {  // Use 'guia' com 'g' minúsculo
  return (
    <FlatList
      data={guia}  // Certifique-se de que 'guia' é passado corretamente como array
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Guia>
          <GuiaHeader>
            <Text size={18} weight="600">{item.title}</Text>
          </GuiaHeader>
          <GuiaDescription>
            <Text opacity={0.8}>{item.description}</Text>
          </GuiaDescription>
          
          <GuiaFooter>
            <GuiaActions>
              <TouchableOpacity onPress={() => onEditGuia(item)}>
                <GuiaIcon source={edit} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => onDeleteGuia(item)}>
                <GuiaIcon source={excluir} />
              </TouchableOpacity>
            </GuiaActions>
          </GuiaFooter>
        </Guia>
      )}
    />
  );
}
