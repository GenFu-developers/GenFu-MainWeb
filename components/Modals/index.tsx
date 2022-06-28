import React from 'react'
import Button from "../Button";
import BasicModal from "../Modals/BasicModal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
    children: JSX.Element;
    buttonText: string;
    buttonClassName?: string
    buttonStyle?: 'outline' | 'primary' | 'secondary' | 'warning' | 'success' | 'none';
}

function index({ buttonStyle, buttonText, children, buttonClassName }: Props) {
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    return (
        <div>
            <Button buttonStyle={buttonStyle ? buttonStyle : 'primary'} type={'button'} callback={open} className={buttonClassName ? buttonClassName : ''} >
                <div>
                    {buttonText}
                </div>
            </Button>

            {/* {isModalOpen && <BasicModal text="sdasdsd" handleClose={closeModal} />} */}
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {modalOpen && <BasicModal modalOpen={modalOpen} handleClose={close} >
                    {children}
                </BasicModal>}
            </AnimatePresence>
        </div>
    )
}

export default index