import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../Button/Button'

const radialBg = 'bg-gradient-to-br from-indigo-200 via-indigo-300 to-indigo-200 dark:from-indigo-500 dark:via-indigo-600 dark:to-indigo-500'

const end = new Date("2022-08-14T19:21:37.997Z")

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;

var timer: ReturnType<typeof setInterval>;

function index() {
    const [timeDisplay, setTimeDisplay] = useState({
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    })

    function updateDisplay() {
        var now = new Date();
        // @ts-ignore
        var distance = end - now;
        if (distance < 0) {
            if (timer) clearInterval(timer)
            console.log('coundown abgelaufen!!');
            return;
        }
        setTimeDisplay({
            days: `${Math.floor(distance / _day)}`,
            hours: `${Math.floor((distance % _day) / _hour)}`,
            minutes: `${Math.floor((distance % _hour) / _minute)}`,
            seconds: `${Math.floor((distance % _minute) / _second)}`
        })
    }
    timer = setInterval(() => {
        updateDisplay()
    }, 1000)



    return (
        <div className="text-6xl text-center flex md:gap-4 w-full items-center justify-center text-txt-dark dark:text-txt-light scale-[50%] md:scale-100 cursor-default">
            <Button buttonStyle='none' type='button'>
                <motion.div
                    animate={{ scale: 1, opacity: 1 }} initial={{ scale: 0, opacity: 0 }} transition={{ delay: .5, type: 'spring' }}
                    className={`w-24 mx-1 p-2 ${radialBg} rounded-lg`}>
                    <div className="font-mono leading-none" x-text="days">{timeDisplay.days}</div>
                    <div className="font-mono uppercase text-sm leading-none text-txt-dark dark:text-txt-light">Tage</div>
                </motion.div>
            </Button>
            <Button type='button' buttonStyle='none'>
                <motion.div
                    animate={{ scale: 1, opacity: 1 }} initial={{ scale: 0, opacity: 0 }} transition={{ delay: .8, type: 'spring' }}
                    className={`w-24 mx-1 p-2 ${radialBg} rounded-lg`}>
                    <div className="font-mono leading-none" x-text="hours">{timeDisplay.hours}</div>
                    <div className="font-mono uppercase text-sm leading-none text-txt-dark dark:text-txt-light">Stunden</div>
                </motion.div>
            </Button>
            <Button type='button' buttonStyle='none'>

                <motion.div
                    animate={{ scale: 1, opacity: 1 }} initial={{ scale: 0, opacity: 0 }} transition={{ delay: 1.1, type: 'spring' }}
                    className={`w-24 mx-1 p-2 ${radialBg} rounded-lg`}>
                    <div className="font-mono leading-none" x-text="minutes">{timeDisplay.minutes}</div>
                    <div className="font-mono uppercase text-sm leading-none text-txt-dark dark:text-txt-light">Minuten</div>
                </motion.div>
            </Button>
            <Button type='button' buttonStyle='none'>

                <motion.div
                    animate={{ scale: 1, opacity: 1 }} initial={{ scale: 0, opacity: 0 }} transition={{ delay: 1.4, type: 'spring' }}
                    className={`w-24 mx-1 p-2 ${radialBg} rounded-lg`}>
                    <div className="font-mono leading-none" x-text="seconds">{timeDisplay.seconds}</div>
                    <div className="font-mono uppercase text-sm leading-none text-txt-dark dark:text-txt-light">Sekunden</div>
                </motion.div>
            </Button>
        </div>
    )
}

export default index