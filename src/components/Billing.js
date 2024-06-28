export default function Billing({billingname,billingaddress,billingstateut}) {
    return (
        <>
            <section className="details1">
                <div>
                    <h1 className="head2">Billing Address:</h1>
                    <p>{billingname}</p>
                    <p>{billingaddress}</p>
                    <p ><span className="textbol">State/UT Code:</span>{billingstateut}</p>
                </div>
            </section>
        </>
    )
}