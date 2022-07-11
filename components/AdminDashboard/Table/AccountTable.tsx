import React from 'react'
import { Role } from '../../../typings'


interface Props {
    tableData: {
        _id: Object
        name: string,
        email: string,
        image: string,
        role: Role,
        banned: false,
        emailVerified: null
    }[]
}


function Table({ tableData }: Props) {
    console.log(tableData);

    return (
        <div className="max-w-5xl mx-auto flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="border-b border-txt-dark/20 dark:border-txt-light/20">
                                {/* Table header */}
                                <tr className='text-txt-dark dark:text-txt-light'>
                                    <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                        #
                                    </th>
                                    <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                        Nutzername
                                    </th>
                                    <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                        E-Mail
                                    </th>
                                    <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                        Rolle
                                    </th>
                                    <th scope="col" className="text-sm font-medium px-6 py-4 text-left">
                                        gebannt
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='text-txt-dark/70 dark:text-txt-light/70'>
                                {tableData.map((user, idx) => (
                                    <tr className="border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{idx + 1}</td>
                                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                            {user.name}
                                        </td>
                                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                            {user.email}
                                        </td>
                                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                            {user.role}
                                        </td>
                                        <td className={`text-sm font-light px-6 py-4 whitespace-nowrap  ${user.banned ? 'text-red-500' : 'text-green-500'}`}>
                                            {user.banned ? 'ja' : 'nein'}
                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table