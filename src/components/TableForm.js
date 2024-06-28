import React, {useEffect } from "react"
import {v4 as uuidv4} from "uuid"
export default function TableForm({sino,setSiNo,description,setDescription,unitprice,setUnitPrice,quantity,setQuantity,netamount,setNetAmount,taxrate,setTaxRate,taxtype,setTaxType,taxamount,setTaxAmount,totalamount,setTotalAmount,placesupply,placedelivery,list,setList}) {
    const handleSubmit=(e)=>{
        e.preventDefault()

        const newItems = {
            id:uuidv4(),
            sino,
            description,
            unitprice,
            quantity,
            netamount,
            taxrate,
            taxtype,
            taxamount,
            totalamount,
        }
        setSiNo("")
        setDescription("")
        setUnitPrice("")
        setQuantity("")
        setNetAmount("")
        setTaxRate("")
        setTaxType("")
        setTaxAmount("")
        setTotalAmount("")
        setList([...list, newItems])
    }
    useEffect(()=>{
        const calculatenetAmount=(netamount)=>{
            setNetAmount(unitprice*quantity)
        }
        calculatenetAmount(netamount)
    },[netamount,unitprice,quantity,setNetAmount])


    if (placesupply===placedelivery){
        setTaxType("CGST SGST")
        setTaxRate("2.5% 2.5%")
        const a=parseFloat(netamount*2.5/100).toFixed(2)
        setTaxAmount(a)
        const b=parseFloat(netamount+parseFloat(a)+parseFloat(a)).toFixed(2)
        setTotalAmount(b)
    }else{
        setTaxType("IGST")
        setTaxRate("9%")
        const a=parseFloat(netamount*9/100).toFixed(2)
        setTaxAmount(a)
        const b=parseFloat(netamount+parseFloat(a)+parseFloat(a)).toFixed(2)
        setTotalAmount(b)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <article className="infodata">
            <div>
                <label htmlFor="sino">Enter Serial.no</label>
                <input 
                    type="text" 
                    name="sino" 
                    id="sino" 
                    placeholder="Enter Serial.no" 
                    autoComplete="off" 
                    value={sino} 
                    onChange={(event)=>setSiNo(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Enter description</label>
                <input 
                    type="text" 
                    name="description" 
                    id="description" 
                    placeholder="Enter description" 
                    autoComplete="off" 
                    value={description} 
                    onChange={(event)=>setDescription(event.target.value)}
                />
            </div>
            </article>
            <article className="infodata">
            <div>
                <label htmlFor="unitprice">Enter unitprice</label>
                <input 
                    type="text" 
                    name="unitprice" 
                    id="unitprice" 
                    placeholder="Enter unitprice" 
                    autoComplete="off" 
                    value={unitprice} 
                    onChange={(event)=>setUnitPrice(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="quantity">Enter quantity</label>
                <input 
                    type="text" 
                    name="quantity" 
                    id="quantity" 
                    placeholder="Enter quantity" 
                    autoComplete="off" 
                    value={quantity} 
                    onChange={(event)=>setQuantity(event.target.value)}
                />
            </div>
            </article>
            <article className="infodatavalue">
            <div>
                <label htmlFor="netamount">Netamount</label>
                <p>{netamount}</p>
            </div>
            <div>
                <label htmlFor="taxrate">Taxrate</label>
                <p>{taxrate}</p>
            </div>

            <div>
                <label htmlFor="taxtype">Taxtype</label>
                <p>{taxtype}</p>
            </div>
            <div>
                <label htmlFor="taxamount">Taxamount</label>
                <p>{taxamount}</p>
            </div>
            <div>
                <label htmlFor="totalamount">Totalamount</label>
                <p>{totalamount}</p>
            </div>
            </article>
            <button type="submit" class="button-59">Add item</button>
            </form>   

            <table width="100%">
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
                        <td>Total mount</td>
                    </tr>
                </thead>
                {list.map(({id,sino,description,unitprice,quantity,netamount,taxrate,taxtype,taxamount,totalamount})=>(
                    <React.Fragment key={id}>
                        <tbody>
                            <tr>
                                <td>{sino}</td>
                                <td>{description}</td>
                                <td>{unitprice}</td>
                                <td>{quantity}</td>
                                <td>{netamount}</td>
                                <td>{taxrate}</td>
                                <td>{taxtype}</td>
                                <td>{placesupply===placedelivery ? (
                                    <div>{taxamount}<br/>{taxamount}</div>
                                ):(<div>{taxamount}</div>)}</td>
                                <td>{totalamount}</td>
                            </tr>
                        </tbody>
                    </React.Fragment>
                ))}    
            </table>    
        </>
    )
}