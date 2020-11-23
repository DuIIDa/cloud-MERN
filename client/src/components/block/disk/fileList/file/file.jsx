import React from "react"
import { useDispatch, useSelector } from "react-redux"

import dirLogo from "../../../../../assets/img/dir.svg"
import fileLogo from "../../../../../assets/img/file.svg"

import { setCurrentDir, pushToStack } from "../../../../../actions/index"

import {
    ImgList,
    FileBoxList,
    FileDate,
    FileSize,
    FileBoxPlate,
    ImgPlate,
    NameBlock,
} from "./fileStyle"

import {
    ButtonDownload,
    ButtonDeleted,
} from "../../../../controls/buttons/btnFile/index"

import { formatSize, fileNameFormat } from "./fileFormat"

const File = ({ file }) => {
    const dispatch = useDispatch()
    const currentDir = useSelector((state) => state.files.currentDir)
    const fileView = useSelector((state) => state.files.view)

    const openDirHandler = () => {
        dispatch(pushToStack(currentDir))
        dispatch(
            setCurrentDir({
                id: file._id,
                path: file.path,
            })
        )
    }

    const fileName = fileNameFormat(file.name)

    // ПОКАЗ ФАЙЛОВ
    if (fileView === "list") {
        return (
            <FileBoxList
                className="file"
                onTouchEnd={file.type === "dir" ? () => openDirHandler() : null}
                onDoubleClick={
                    file.type === "dir" ? () => openDirHandler() : null
                }
            >
                <ImgList
                    src={file.type === "dir" ? dirLogo : fileLogo}
                ></ImgList>
                <NameBlock className="list">
                    {fileName.name}
                    {fileName.format}
                </NameBlock>

                <FileDate>{file.date.slice(0, 10)}</FileDate>
                {file.type !== "dir" && (
                    <FileSize>{formatSize(file.size)}</FileSize>
                )}

                <div className="box-list-button">
                    {file.type !== "dir" && (
                        <ButtonDownload file={file}></ButtonDownload>
                    )}

                    <ButtonDeleted file={file}></ButtonDeleted>
                </div>
            </FileBoxList>
        )
    } else if (fileView === "plate") {
        return (
            <FileBoxPlate
                className="file"
                onTouchEnd={file.type === "dir" ? () => openDirHandler() : null}
                onDoubleClick={
                    file.type === "dir" ? () => openDirHandler() : null
                }
            >
                <ImgPlate
                    src={file.type === "dir" ? dirLogo : fileLogo}
                ></ImgPlate>
                <NameBlock className="plate">
                    <p className="file-name-plate">{fileName.name}</p>
                    <p>{fileName.format}</p>
                </NameBlock>

                <div className="box-plate-button">
                    {file.type !== "dir" && (
                        <ButtonDownload file={file}></ButtonDownload>
                    )}

                    <ButtonDeleted
                        file={file}
                        blockStyle="flex"
                    ></ButtonDeleted>
                </div>
            </FileBoxPlate>
        )
    }
}

export default File
