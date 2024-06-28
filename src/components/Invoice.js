export default function Invoice({invoiceno,invoicedetails,invoicedate}) {
    return (
        <>
            <div>
                <p><span className="textbol">Invoice Number:</span>{invoiceno}</p>
                <p><span className="textbol">Invoice details:</span>{invoicedetails}</p>
                <p><span className="textbol">Invoice Date:</span>{invoicedate}</p>
            </div>
        </>
    )
}