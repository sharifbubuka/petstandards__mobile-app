import { FC, ReactNode } from "react";
import { ScrollView, useWindowDimensions } from "react-native";

type Props = {
  children: ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  const { width, height } = useWindowDimensions();
  return (
    <ScrollView style={{ paddingHorizontal: width * 0.05 }}>
      { children }
    </ScrollView>
  )
}

export default MainLayout;