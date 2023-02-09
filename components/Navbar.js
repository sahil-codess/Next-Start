import Link from "next/link";
import { signIn, signOut, useSession } from 'next-auth/react'

const Navbar = () => {
    const { data: session, loading } = useSession()
    console.log({ session, loading });
    return (
        <nav className="nav navbar-expand navbar-light bg-light">
            <h1 className=""><Link href='/' className="nav-link">NextAuth</Link></h1>
            <ul className="navbar mr-auto nav-pills nav-fill nav-tabs">
                <li className="nav-item ">
                    <Link href='/' className="nav-link navbar-brand">Home</Link>
                </li>
                <li className="nav-item ">
                    <Link href='/dashboard' className="nav-link">Dashboard</Link>
                </li >
                <li className="nav-item ">
                    <Link href='/blog' className="nav-link">Blog</Link>
                </li>
                {
                    !loading && !session && (<li className="nav-item ">
                        <Link href='/api/auth/signin' onClick={e => {
                            e.preventDefault()
                            signIn('github')
                        }} className="nav-link">Sign In</Link>
                    </li>)
                }
                {
                    session && (<li className="nav-item ">
                        <Link href='/api/auth/signout' onClick={e => {
                            e.preventDefault()
                            signOut()
                        }} className="nav-link">Sign Out</Link>
                    </li>)
                }

            </ul>
        </nav>
    )
}

export default Navbar