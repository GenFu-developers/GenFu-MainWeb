import React, { useState } from 'react'

interface Props {
    text: string;
    textLength?: number;
    textClassName?: string;
    buttonClassName?: string;
}

function ShortenText({ textLength, text, textClassName, buttonClassName }: Props) {
    const [longText, setLongText] = useState(false)
    !textLength ? textLength = 40 : null

    const ShortText = () => {
        const splittedText = text.split(' ')
        let shortenText = ''
        for (let i in Array.from(new Array(textLength).keys())) {
            shortenText += splittedText[i] + ' '
        }
        return <p className={textClassName}>{shortenText + ' ...'}</p>
    }
    return (
        <p className={textClassName}>
            {!longText ?
                <div className='flex flex-col'>
                    <ShortText />
                    <label
                        className={`cursor-pointer italic text-primary/60 ${buttonClassName} font-bold`}
                        onClick={() => { setLongText(true) }}
                    >
                        mehr...
                    </label>
                </div>
                :
                <p className='flex flex-col'>
                    {text}<label className={`cursor-pointer italic text-primary/60 ${buttonClassName} font-bold`}
                        onClick={() => { setLongText(false) }}
                    >weniger...</label>
                </p>
            }
        </p>
    )
}

export default ShortenText