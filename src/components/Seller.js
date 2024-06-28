export default function Seller({sellername,selleraddress}) {
    return (
        <>
            <section className="details1">
                <div>
                    <h1 className="head2">Sold By:</h1>
                    <p>{sellername}</p>
                    <p>{selleraddress}</p>
                </div>
            </section>
        </>
    )
}