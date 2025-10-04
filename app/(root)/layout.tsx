import React, {ReactNode} from "react";
import Header from "@/components/Header";

const Layout:({children}: {children: ReactNode}) => React.JSX.Element = ({children}: {children: React.ReactNode}) => {
    return (
        <main className="min-h-screen text-gray-400">
            <Header />
            <div className="container py-10">
                {children}
            </div>
        </main>
    )
}

export default Layout;