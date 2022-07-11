import React from 'react'
import { Alert } from '../../typings'
import AlertComponent from './index'
import Button from '../Button/Button'

interface Props {
    alert: Alert
}

const alertBackground = 'bg-[#0058ab]'
function LandingPageAlert({ alert }: Props) {
    // !alert.color?.hex ? alertColor = '#0058ab' : alertColor = alert.color.hex
    if (alert) return (
        <AlertComponent closeBtnColor='white' containerClassList={`z-40 ${alertBackground} absolute mt-20 `} >
            <div className='flex items-center gap-2 md:gap-5 flex-col md:flex-row'>
                <span className='text-txt-light'>
                    {alert.text}
                </span>
                {alert.link && alert.linkText &&
                    <Button type="link" href={alert.link} buttonStyle="outline" className="px-2 py-0 text-txt-light">
                        <span>{alert.linkText}</span>
                    </Button>
                }
            </div>
        </AlertComponent>
    )
    else {
        return null
    }
}


export default LandingPageAlert

