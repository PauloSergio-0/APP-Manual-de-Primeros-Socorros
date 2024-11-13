import { Text } from "../Text";
import { Container, Image_format } from "./styles";
import { View } from "react-native";
import logoSaude from "../../assets/images/saude_logo.png"; 

export default function() {
    return (
        <Container>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 0 }}>
                <Image_format source={logoSaude} />
                <Text size={24}>
                    Guia <Text size={24} weight="700">Primeiros Socorros</Text>
                </Text>
            </View>
            
            <Text opacity={0.8}>Guia de procedimentos de primeiros socorros</Text>
        </Container>
    );
}