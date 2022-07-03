import { motion } from "framer-motion";
import { MouseEventHandler } from "react";
import Button from "../Button";
import Backdrop from "./Backdrop";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

interface Props {
    children: JSX.Element;
    handleClose: MouseEventHandler;
    modalOpen: boolean;
    className?: string;
}

const Modal = ({ handleClose, children, className }: Props) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className={`z-50 relative overflow-auto bg-light-container dark:bg-dark-container text-txt-dark dark:text-txt-light mx-auto py-8 rounded-lg w-full max-w-4xl  max-h-3/4`}
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Button buttonStyle="none" callback={handleClose} type="button" className="absolute right-1 top-1">
                    <svg className="fill-txt-dark dark:fill-txt-light" width="12" height="12" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5301 1.53032C17.823 1.23743 17.823 0.762556 17.5301 0.469662C17.2372 0.176769 16.7623 0.176769 16.4694 0.469662L8.99975 7.93934L1.53009 0.469668C1.23719 0.176775 0.76232 0.176775 0.469427 0.469668C0.176534 0.762561 0.176534 1.23743 0.469427 1.53033L7.93909 9L0.469426 16.4697C0.176533 16.7626 0.176532 17.2374 0.469426 17.5303C0.762319 17.8232 1.23719 17.8232 1.53009 17.5303L8.99975 10.0607L16.4694 17.5303C16.7623 17.8232 17.2372 17.8232 17.5301 17.5303C17.823 17.2374 17.823 16.7626 17.5301 16.4697L10.0604 9L17.5301 1.53032Z" />
                    </svg>
                </Button>
                <div className="relative px-10 w-full h-full">
                    {children}
                </div>
            </motion.div>
        </Backdrop >
    );
};


export default Modal;
