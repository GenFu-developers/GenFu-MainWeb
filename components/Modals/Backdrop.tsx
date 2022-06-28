import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

interface Props {
    children: JSX.Element;
    onClick: MouseEventHandler;

}

const Backdrop = ({ children, onClick }: Props) => {

    return (
        <motion.div
            onClick={onClick}
            className="fixed left-0 top-0 w-full h-full bg-black/50 flex items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
};

export default Backdrop;
