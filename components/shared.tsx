 import { Dimensions } from "react-native";
 import styled from "styled-components/native"
 import {colors} from "./colors";
 export const Container = styled.View`
    flex: 1;
    align-items:center;
    backgroud-color : #{colors.white};
 `

 export const screenWidth = Dimensions.get("screen").width;
 export const screenHeight = Dimensions.get("screen").height;