
import Link from "next/link"

const ProductList = () => {
    return (
        <>
        <Link href='/'><button>Home</button></Link>
            <h2><Link href='/products/1'>Product 1</Link></h2>
            <h2><Link href='/products/2'>Product 2</Link></h2>
            <h2><Link href='/products/3'>Product 3</Link></h2>
        </>
    )
}

export default ProductList