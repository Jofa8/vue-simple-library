import { useNotification } from '@kyvg/vue3-notification'

const notification = useNotification()

export const success = (titleText, bodyText) => {
    notification.notify({
        title: titleText,
        text: bodyText,
        type: 'success',
    })
}

export const warning = (titleText, bodyText) => {
    notification.notify({
        title: titleText,
        text: bodyText,
        type: 'warning',
    })
}

export const error = (titleText, bodyText) => {
    notification.notify({
        title: titleText,
        text: bodyText,
        type: 'error',
    })
}
