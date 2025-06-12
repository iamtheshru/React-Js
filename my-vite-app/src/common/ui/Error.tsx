// src/components/ErrorAlert.tsx
import React from "react";
import { Alert, Button } from "antd";

interface ErrorAlertProps {
    message: string;
    onClose?: () => void;
    showmessege: boolean
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message, onClose, showmessege }) => {

    return (
        <>
            {showmessege == true ? (<Alert
                message={message}
                type="success"
                showIcon
                closable
                onClose={onClose}
            />) : (
                <Alert
                    message={message}
                    type="error"
                    showIcon
                    closable
                    onClose={onClose}
                />
            )
            }
        </>
    );
};

export default ErrorAlert;
