import React, { forwardRef, useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BottomSheetModal, BottomSheetView  } from '@gorhom/bottom-sheet'

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ['50%'], [])
  return (
    <BottomSheetModal ref={ref} snapPoints={snapPoints}>
      <BottomSheetView style={styles.contentContainer}>
      <View>
        <Text>BottomSheet</Text>
      </View>
      </BottomSheetView>
    </BottomSheetModal>
  )
});

export default BottomSheet

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    height: '100%',
  },
})