import * as Haptics from 'expo-haptics';


export const HandleHaptic = () => {

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
}
