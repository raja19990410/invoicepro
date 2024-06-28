export default function Invoice({orderno,orderdate}) {
    return (
        <>
            <section className="details1">
                <div>
                    <p><span className="textbol">Order Number:</span>{orderno}</p>
                    <p><span className="textbol">Order Date:</span>{orderdate}</p>
                </div>
            </section>
        </>
    )
}