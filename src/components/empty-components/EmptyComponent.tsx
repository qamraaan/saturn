import React from 'react';
import { View } from 'react-native';
import CustomText from '../typography/CustomText';
import { AppFonts } from '@src/assets/AppFonts';
export const EmptyComponent = () => (
  <View style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }}>
      <CustomText
        textAlign={'center'}
        fontFamily={AppFonts.SourceSansRegular}
>        You haven’t added any employees yet.
      </CustomText>
  </View>
);
