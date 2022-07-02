import React, { useState } from "react";

export default function Index() {
    const [show, setShow] = useState(false);

    return (
        <div className="dark:bg-dark-container bg-light-container fixed h-screen w-64 top-20">
            sidebar
        </div>
    );
}
