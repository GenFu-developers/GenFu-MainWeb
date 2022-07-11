import { useSession } from 'next-auth/react'
import React from 'react'
import Layout from '../../components/AdminDashboard/Layout/index'
import { BasicLoader } from '../../components/Loading'

export default function AdminDashboard() {
    const { data: session, status } = useSession()
    return (
        <Layout session={session}>
            <div>Postfach</div>
        </Layout>
    )
}

AdminDashboard.auth = {
    role: "staff",
    loading: <BasicLoader />,
    unauthorized: "/", // redirect to this url
}