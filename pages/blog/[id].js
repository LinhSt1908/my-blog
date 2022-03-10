import Link from "next/link"
import { useRouter } from "next/router";

export default function Test() {
    const router = useRouter();
    const { id } = router.query;
    
    return (

        <Link href={'/'}>
            <a>Let´s go back
            <h1>example 1</h1>
            </a>
        </Link>
    );
};


    