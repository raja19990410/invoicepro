export default function Shipping({shippingname,shippingaddress,shippingstateut,placesupply,placedelivery}) {
    return (
        <>
            <section className="details2">
                <div>
                    <h1 className="head2">Shipping Address:</h1>
                    <p>{shippingname}</p>
                    <p>{shippingaddress}</p>
                    <p><span className="textbol">State/UT Code:</span>{shippingstateut}</p>
                    <p><span className="textbol">place of supply:</span>{placesupply}</p>
                    <p><span className="textbol">place of delivery:</span>{placedelivery}</p>
                </div>
            </section>
        </>
    )
}