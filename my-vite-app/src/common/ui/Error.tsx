// src/components/ErrorAlert.tsx
import React from "react";
import { Alert } from "antd";

interface ErrorAlertProps {
    message: string;
    onClose?: () => void;
}

export const ErrorSuccess: React.FC<ErrorAlertProps> = ({ message, onClose }) => {
    return (
        <>
            <Alert
                message={message}
                type="success"
                showIcon
                closable
                onClose={onClose}
            />
        </>
    );
};



export const ErrorAlert: React.FC<ErrorAlertProps> = ({ message, onClose }) => {
    return (
        <>
            <Alert
                message={message}
                type="error"
                showIcon
                closable
                onClose={onClose}
            />
        </>
    );
};


