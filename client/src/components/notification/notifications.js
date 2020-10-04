import React from 'react';
import { Progress } from './index'

const options = {
    insert: "top",
    container: "bottom-left",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
        duration: 5000,
        onScreen: true
    }  
};

export const defaultNotfication = (message) => ({
    ...options,
    title: `Error!`,
    message: message,
    type: "danger"
})

export const notificationError = (message) => ({
    ...options,
    title: `Error!`,
    message: message,
    type: "danger"
})

export const notificationSuccess = (message) => ({
    ...options,
    title: `Success`,
    message: message,
    type: "success",
})


export const notificationProgres = (uploadFile) => ({
    ...options,
    title: uploadFile.name,
    message: (<Progress fileId={uploadFile.id}></Progress>),
    type: "info",
    container: "top-right",
    dismiss: {
        duration: 0
    }
})
