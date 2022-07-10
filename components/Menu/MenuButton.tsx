import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Button from "../Button/Button";

const path01Variants = {
    open: { d: "M3.06061 2.99999L21.0606 21" },
    closed: { d: "M0 9.5L24 9.5" }
};

const path02Variants = {
    open: { d: "M3.00006 21.0607L21 3.06064" },
    moving: { d: "M0 14.5L24 14.5" },
    closed: { d: "M0 14.5L15 14.5" }
};

interface Props {
    callback?: Function;
    className?: string;
}

export default ({ callback, className }: Props) => {
    const [isOpen, setOpen] = useState(false);
    const path01Controls = useAnimation();
    const path02Controls = useAnimation();

    const onClick = async () => {
        if (callback) callback();
        setOpen(!isOpen);
        if (!isOpen) {
            await path02Controls.start(path02Variants.moving);
            path01Controls.start(path01Variants.open);
            path02Controls.start(path02Variants.open);
        } else {
            path01Controls.start(path01Variants.closed);
            await path02Controls.start(path02Variants.moving);
            path02Controls.start(path02Variants.closed);
        }
    };

    return (
        <Button type="button" buttonStyle="none" callback={onClick} className={className}>
            <svg className="stroke-txt-dark stroke-2 dark:stroke-txt-light" width="24" height="24" viewBox="0 0 24 24">
                <motion.path
                    {...path01Variants.closed}
                    animate={path01Controls}
                    transition={{ duration: 0.2 }}
                />
                <motion.path
                    {...path02Variants.closed}
                    animate={path02Controls}
                    transition={{ duration: 0.2 }}
                />
            </svg>
        </Button>
    );
};
