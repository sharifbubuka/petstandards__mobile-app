import { registerSheet } from 'react-native-actions-sheet';

import BusinessDetailsSheet from './BusinessDetailsSheet';

enum BOTTON_ACTION_SHEETS {
  BUSINESS_DETAILS = 'Business Details'
}

registerSheet(BOTTON_ACTION_SHEETS.BUSINESS_DETAILS, BusinessDetailsSheet);

export { BOTTON_ACTION_SHEETS };
