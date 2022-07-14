import React from 'react'
import Modal from '../Modals/index'

function DatenschutzModal() {
    return (
        <Modal buttonText='Datenschutz' buttonClassName='text-txt-dark/60 dark:text-txt-light/60' buttonStyle='none'>
            <div className='h-full w-full'>
                <p>
                    Zum Zweck der Übermittlung der von Ihnen aufgerufenen Webseite werden von Ihrem Browser typischerweise unter anderem folgende Informationen {'(im Rahmen von sogenannten HTTP-Requests)'} übersandt:
                    <br /><br />
                    <div className='flex flex-col gap-4 max-w-xl pl-10'>
                        <p>
                            Ihre IP-Adresse, eine Ziffernfolge, die Ihren derzeitigen Computeranschluss im Internet identifiziert.
                        </p>
                        <p>
                            Die von Ihnen aufgerufene URL {'(die Webseite und ggf. weitere Parameter)'},
                        </p>
                        <p>
                            Informationen zu dem von Ihnen verwendeten Browser und Betriebssystem, wie deren Name und Version
                        </p>
                        <p>
                            sowie – unter Umständen – die Seite, von der aus Sie zu uns gelangt sind {'(Referrer-Information)'}.
                        </p>
                    </div>
                </p>
            </div>
        </Modal>
    )
}

export default DatenschutzModal