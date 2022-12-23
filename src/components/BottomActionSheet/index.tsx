import { registerSheet } from 'react-native-actions-sheet';

import { BusinessDetailsBottomActionSheet } from './Instances';

enum BOTTON_ACTION_SHEETS {
  BUSINESS_DETAILS = 'Business Details'
}

registerSheet(BOTTON_ACTION_SHEETS.BUSINESS_DETAILS, BusinessDetailsBottomActionSheet);

export { BOTTON_ACTION_SHEETS };
