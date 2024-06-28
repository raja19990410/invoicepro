import React from "react"
import TotalTax from "./TotalTax"
import TotalAmount from "./TotalAmount"
import Words from "./Words"

export default function Table({setimage,placesupply,placedelivery,sellername,netamount,taxrate,taxtype,taxamount,totalamount,list}) {
    let a=0
    if(placesupply===placedelivery){
        a=0.77
    }else{
        a=2.78
    }
    return (
        <>
            <table width="80%" className="tab" border="1px" cellSpacing="0px" align="center">
                <thead>
                    <tr className="tabcol">
                        <td>SI.No</td>
                        <td>Description</td>
                        <td>Unit Price</td>
                        <td>Qty</td>
                        <td>Net Amount</td>
                        <td>Tax Rate</td>
                        <td>Tax Type</td>
                        <td>Tax Amount</td>
                        <td>Total Amount</td>
                    </tr>
                </thead>

                {list.map(({id,sino,description,unitprice,quantity,netamount,taxrate,taxtype,taxamount,totalamount})=>(
                    <React.Fragment key={id}>
                        <tbody>
                            <tr>
                                <td>{sino}</td>
                                <td>{description}</td>
                                <td>₹{unitprice}</td>
                                <td>{quantity}</td>
                                <td>₹{netamount}</td>
                                <td>{taxrate}</td>
                                <td>{taxtype}</td>
                                <td>{placesupply===placedelivery ? (
                                    <div>₹{taxamount}<br/>₹{taxamount}</div>
                                ):(<div>₹{taxamount}</div>)}</td>
                                <td>₹{totalamount}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>Shipping Charges</td>
                                <td>₹30.96</td>
                                <td></td>
                                <td>₹30.96</td>
                                <td>{taxrate}</td>
                                <td>{taxtype}</td>
                                <td>{a===0.77 ? (
                                    <div>
                                        ₹{a}<br/>₹{a}
                                    </div>
                                ):(<div>
                                    ₹{a}
                                </div>)
                                }</td>
                                <td>{a===0.77 ? (
                                    <div>32.50</div>
                                ):(<div>33.74</div>)
                                }</td>
                            </tr>
                        </tbody>
                    </React.Fragment>
                ))}
                <tbody>
                    <tr>
                        <td colSpan={7} align="start">TOTAL:</td>
                        <td>{<TotalTax list={list} placesupply={placesupply} placedelivery={placedelivery}/>}</td>
                        <td>{<TotalAmount list={list} placesupply={placesupply} placedelivery={placedelivery}/>}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td colSpan={9} align="start">Amount in words:{<Words list={list} placesupply={placesupply} placedelivery={placedelivery}/>}</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td colSpan={9} align="end" ><div>For {sellername}:</div><br/><div>{<img src={setimage} alt="img" className="img1" style={{ border: '3px solid black', marginTop: '10px'}}/>}</div><br/><div>Authorized Signatory </div></td>
                    </tr>
                </tbody>``
            </table>
        </>
    )
}