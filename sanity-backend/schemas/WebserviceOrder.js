import statusArray from './statusArray'

export default {
    name: 'webserviceOrder',
    title: 'Webservice Bestellung',
    type: 'document',
    fieldsets: [
        { name: 'status', title: 'Status' },
        { name: 'customerData', title: 'Kundendaten' },
        { name: 'analysetermin', title: 'Analysetermin' },
        { name: 'creation', title: 'Erstellung' },
    ],
    fields: [
        /*===== Kundendaten Fieldset =====*/
        {
            name: 'customerName',
            title: 'Kunden-Name',
            type: 'string',
            fieldset: 'customerData',
        },
        {
            name: 'companyName',
            title: 'Firmen-Name',
            type: 'string',
            fieldset: 'customerData',
        },
        {
            name: 'telNumber',
            title: 'Kunden-Telefonnummer',
            type: 'string',
            fieldset: 'customerData',
        },
        {
            name: 'customeremailEmail',
            title: 'Kunden-Email',
            type: 'string',
            fieldset: 'customerData',
        },
        /*===== Status Fieldset =====*/
        {
            name: 'orderStatus',
            title: 'Bestell-Status',
            type: 'string',
            fieldset: 'status',
            options: {
                list: [
                    ...statusArray
                ]
            }
        },
        /*===== Analysetermin Fieldset =====*/
        {
            name: 'analyseterminDatetime',
            title: 'Datum & Uhrzeit',
            type: 'datetime',
            fieldset: 'analysetermin',
        },
        {
            name: 'customerNotion',
            title: 'Kundenvorstellungen',
            type: 'text',
            fieldset: 'analysetermin',
        },
        {
            name: 'analyseterminNotes',
            title: 'Analysetermin Notizen',
            type: 'text',
            fieldset: 'analysetermin',
        },
        /*===== Erstellungs Propzess =====*/
        {
            name: 'steps',
            title: 'Schritte',
            type: 'array',
            of: [
                {
                    name: 'content',
                    title: 'Inhalt',
                    type: 'object',
                    fields: [
                        {
                            title: 'Name',
                            name: 'name',
                            type: 'string'
                        },
                        {
                            name: 'Beschreibung',
                            title: 'description',
                            type: 'blockContent',
                        },
                        {
                            name: 'mainImage',
                            title: 'Main image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        }
                    ]
                }
            ],
            fieldset: 'creation',
        }
    ],
}