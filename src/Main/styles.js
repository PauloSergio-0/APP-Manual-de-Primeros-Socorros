import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";


const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
    flex: 1;
    padding-top: ${isAndroid && StatusBar.currentHeight ? `${StatusBar.currentHeight}px` : '0px'};
    align-items: center;
`;
