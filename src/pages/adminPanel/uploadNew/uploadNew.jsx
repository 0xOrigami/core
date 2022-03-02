import React, { useState, useEffect } from "react";
import "./uploadNew.scss";
import Dropzone from "../../../components/dropzone";
import { useSelector } from "react-redux";
import Progress from "react-progressbar";
import UploadCID from "../../../components/uploadCID/UploadCID";

import { sign_message, execute_transaction, uploadFile, uploadFolder } from "../../../utils/services/filedeploy";
import { notify } from "../../../utils/services/notification";
import UploadFile from "../../../components/uploadFile/UploadFile";




function UploadNew() {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [uploadedFolder, setUploadedFolder] = useState([]);
    const [fileUploadProgress, setUploadProgress] = useState(0);
    const _authDetails = useSelector((store) => store.auth);

    useEffect(() => {
        if (uploadedFiles?.target?.files.length > 0) {
            setUploadProgress(5);
            uploadFile(uploadedFiles, setUploadProgress, _authDetails);
        }
    }, [uploadedFiles])

    useEffect(() => {
        if (uploadedFolder?.target?.files.length > 0) {
            setUploadProgress(5);
            uploadFolder(uploadedFolder, setUploadProgress, _authDetails);
        }
    }, [uploadedFolder])




    return (
        <div className="uploadNew">
            <div className="uploadNew__top">
                <div className="uploadNew__title">
                    <p>Upload New</p>
                </div>
                <div className="uploadNew__content">
                    <UploadCID setUploadProgress={setUploadProgress} sign_message={sign_message} execute_transaction={execute_transaction} notify={notify} />
                    <hr />
                    <div className="upload_file">
                        <UploadFile setUploadedFiles={setUploadedFiles} setUploadedFolder={setUploadedFolder} />
                    </div>
                </div>

            </div>

            {(fileUploadProgress > 0) && (
                <div className="uploadNew__progressContainer">
                    <div className="information">
                        <p>{uploadedFiles?.target?.files[0]?.name}</p>
                        <p>{(uploadedFiles?.target?.files[0]?.size / 1024).toFixed(1)} Kb</p>
                    </div>
                    <Progress completed={fileUploadProgress} />
                </div>
            )}
        </div>
    );
}

export default UploadNew;