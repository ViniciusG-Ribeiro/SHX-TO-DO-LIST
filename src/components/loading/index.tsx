import { ActivityIndicator } from "react-native";

import {s} from "./styles"
import { colors } from "@/src/styles/colors";

export function Loading(){
    return <ActivityIndicator color={colors.green[500]} style={s.container}/>
};
