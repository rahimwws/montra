import * as Haptics from 'expo-haptics';


export const HandleHaptic = () => {

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
}

export const HandleHapticLight = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
}

export const HandleHapticWarning = () => {
    Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Error
    )
}

