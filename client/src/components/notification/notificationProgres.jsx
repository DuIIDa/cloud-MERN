import React from 'react';
import { useSelector } from 'react-redux';

export const Progress = ({fileId}) => {
    const files = useSelector(state=> state.upload.files)

    return (
        <div>
            {`${files.find(file => file.id === fileId ? true : false).progress}%`}
        </div>
    )
}
