import React from 'react'

export default {
    name: 'landing-page-alert',
    title: 'Landing Page Alert',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'text',
            title: 'Text',
            type: 'string',
        },
        {
            name: 'color',
            title: 'Farbe',
            type: 'color'
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string'
        },
        {
            name: 'linkText',
            title: 'Link Text',
            type: 'string'
        },
        {
            name: 'aktiv',
            title: 'aktiv',
            type: 'boolean'
        }
    ],
    preview: {
        select: {
            title: 'title',
            aktiv: 'aktiv',
        },
        prepare({ name, aktiv }) {
            return {
                title: name,
                media: <div style={{ width: '50px', height: '35px', backgroundColor: aktiv ? 'green' : 'red', borderRadius: '5px' }}> </div>
            }
        }
    }
}
