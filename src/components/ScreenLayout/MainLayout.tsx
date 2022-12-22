import { FC, ReactNode } from "react";
import { ScrollView, useWindowDimensions } from "react-native";

type Props = {
  children: ReactNode,
  horizontalPadding?: number
}

const MainLayout: FC<Props> = ({ children, horizontalPadding = 0.05 }) => {
  const { width, height } = useWindowDimensions();
  return (
    <ScrollView style={{ paddingHorizontal: width * horizontalPadding }}>
      { children }
    </ScrollView>
  )
}

export default MainLayout;