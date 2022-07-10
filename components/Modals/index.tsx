import React from 'react'
import Button from "../Button/Button";
import BasicModal from "../Modals/BasicModal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from '../Framer/useScroll';

interface Props {
    children: JSX.Element;
    buttonText: string;
    buttonClassName?: string
    buttonStyle?: 'outline' | 'primary' | 'secondary' | 'warning' | 'success' | 'none';
}

function index({ buttonStyle, buttonText, children, buttonClassName }: Props) {
    const [element, controls] = useScroll()
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    return (
        // @ts-ignore
        <motion.div ref={element} animate={controls}
            variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 }
            }}
            transition={{
                duration: .6,
                delay: 1
            }}
        >
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
        </motion.div>
    )
}

export default index