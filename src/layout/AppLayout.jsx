import Footer from "./Footer";

export default function AppLayout({children}){

    return(
        <>
            {children}
            <Footer />
        </>

    )
}