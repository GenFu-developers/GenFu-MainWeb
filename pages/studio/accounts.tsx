import { useSession } from 'next-auth/react'
import React from 'react'
import Layout from '../../components/AdminDashboard/Layout/index'
import { BasicLoader } from '../../components/Loading'
import { MongoClient } from 'mongodb'
import Table from '../../components/AdminDashboard/Table/AccountTable'
import { User } from '../../typings'

interface Props {
    users: [User]
}

export default function AdminDashboard({ users }: Props) {
    const { data: session } = useSession()
    return (
        <Layout session={session}>
            <Table tableData={users} />
        </Layout>
    )
}

AdminDashboard.auth = {
    role: "admin",
    loading: <BasicLoader />,
    unauthorized: "/", // redirect to this url
}

export const getServerSideProps = async () => {
    const mongoClient = new MongoClient(`${process.env.MONGODB_URI}`);
    await mongoClient.connect();
    const db = mongoClient.db('test'); // test -> dbName
    const collection = db.collection('users'); // users -> collection name
    const rawUsers = await collection.find({})
    const users = await rawUsers.toArray()

    return {
        props: {
            users,
        }
    }
}