import { useRouter } from "next/router";

const DetailPage = () => {
    const router = useRouter()
    console.log(router.query.id)
    return (
        <div>
            <h1>Detail page</h1>
        </div>
    );
}

export default DetailPage