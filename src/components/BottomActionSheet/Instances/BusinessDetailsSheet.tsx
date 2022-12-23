import { useRef, FC } from 'react';
import { Text } from 'react-native';
import ActionSheet, { ActionSheetRef, SheetProps } from 'react-native-actions-sheet';

const BusinessDetailsBottomActionSheet: FC<any> = (props: SheetProps<{ value: string }>) => {
  // const actionSheetRef = useRef<ActionSheetRef>(null);

  return (
    <ActionSheet id={props.sheetId}>
        <Text>{props.payload?.value}</Text>
    </ActionSheet>
  )
}

export default BusinessDetailsBottomActionSheet;