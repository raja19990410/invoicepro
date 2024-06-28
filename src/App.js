import { useState} from "react";
import Billing from "./components/Billing";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Invoice from "./components/Invoice";
import Order from "./components/Order";
import Seller from "./components/Seller";
import Shipping from "./components/Shipping";
import Shop from "./components/Shop";
import Table from "./components/Table"
import TableForm from "./components/TableForm"
import Tax from "./components/Tax"
import SignaturePad from "./components/SignaturePad";

import "./App.css"
function App() {

  const [setInvoice,setShowInvoice]=useState(false)
  const [sellername,setSellerName]=useState("")
  const [selleraddress,setSellerAddress]=useState("")
  const [pan,setPan]=useState("")
  const [gst,setGST]=useState("")
  const [billingname,setBillingName]=useState("")
  const [billingaddress,setBillingAddress]=useState("")
  const [billingstateut,setBillingStateut]=useState("")
  const [shippingname,setShippingName]=useState("")
  const [shippingaddress,setShippingAddress]=useState("")
  const [shippingstateut,setShippingStateut]=useState("")
  const [placesupply,setPlaceSupply]=useState("")
  const [placedelivery,setPlaceDelivery]=useState("")
  const [orderno,setOrderno]=useState("")
  const [orderdate,setOrderDate]=useState("")
  const [invoiceno,setInvoiceNo]=useState("")
  const [invoicedetails,setInvoiceDetails]=useState("")
  const [invoicedate,setInvoiceDate]=useState("")
  const [sino,setSiNo]=useState("")
  const [description,setDescription]=useState("")
  const [unitprice,setUnitPrice]=useState("")
  const [quantity,setQuantity]=useState("")
  const [netamount,setNetAmount]=useState("")
  const [taxrate,setTaxRate]=useState("")
  const [taxtype,setTaxType]=useState("")
  const [taxamount,setTaxAmount]=useState("")
  const [totalamount,setTotalAmount]=useState("")
  const [tax,setTax]=useState("")
  const [setimage,setImagesign]=useState("")
  const [list,setList]=useState([])

  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:x-auto">
        {setInvoice ? <div>
          <Header/>

          <div className="info1">
          <Seller sellername={sellername} selleraddress={selleraddress}/>
          
          <Billing billingname={billingname} billingaddress={billingaddress} billingstateut={billingstateut}/>
          </div>

          <Shop pan={pan} gst={gst}/>

          <Shipping placesupply={placesupply} placedelivery={placedelivery} shippingname={shippingname} shippingaddress={shippingaddress} shippingstateut={shippingstateut}/>

          <div className="info2">
          <Order orderno={orderno} orderdate={orderdate}/>

          <Invoice invoiceno={invoiceno} invoicedetails={invoicedetails} invoicedate={invoicedate}/>
          </div>

          <Table setimage={setimage} placesupply={placesupply} placedelivery={placedelivery} sellername={sellername} description={description} sino={sino} unitprice={unitprice} quantity={quantity} netamount={netamount} taxrate={taxrate} taxtype={taxtype} taxamount={taxamount} totalamount={totalamount} list={list} setList={setList}/>
          
          <Tax tax={tax}/>

          <Footer />

        </div> : (
          <>
            <div className="flex flex-col justify-center">
            <h1>Seller Details</h1>
              <article className="infodata">
                <div>
                  <label htmlFor="sellername">Enter Seller Name</label>
                  <input 
                    type="text" 
                    name="sellername" 
                    id="sellername" 
                    placeholder="Enter seller name" 
                    autoComplete="off" 
                    value={sellername} 
                    onChange={(event)=>setSellerName(event.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="selleraddress">Enter Seller Address</label>
                  <input 
                    type="text" 
                    name="selleraddress" 
                    id="selleraddress" 
                    placeholder="Enter seller address" 
                    autoComplete="off" 
                    value={selleraddress} 
                    onChange={(event)=>setSellerAddress(event.target.value)}
                  />
                </div>
              </article>

              <article className="infodata">
              <div>
              <label htmlFor="pan">Enter PAN NO</label>
              <input 
                type="text" 
                name="pan" 
                id="pan" 
                placeholder="Enter PAN no" 
                autoComplete="off" 
                value={pan} 
                onChange={(event)=>setPan(event.target.value)}
              />
              </div>

              <div>
              <label htmlFor="gst">Enter GST Registration no</label>
              <input 
                type="text" 
                name="gst" 
                id="gst" 
                placeholder="Enter GST Registration no" 
                autoComplete="off" 
                value={gst} 
                onChange={(event)=>setGST(event.target.value)}
              />
              </div>
              </article>

              <h1>Billing Details</h1>

              <article className="infodata">
              <div>
              <label htmlFor="billingname">Enter Billing name</label>
              <input 
                type="text" 
                name="billingname" 
                id="billingname" 
                placeholder="Enter Billing name" 
                autoComplete="off" 
                value={billingname} 
                onChange={(event)=>setBillingName(event.target.value)}
              />
              </div>

              <div>
              <label htmlFor="billingaddress">Enter Billing address</label>
              <input 
                type="text" 
                name="billingaddress" 
                id="billingaddress" 
                placeholder="Enter Billing address " 
                autoComplete="off" 
                value={billingaddress} 
                onChange={(event)=>setBillingAddress(event.target.value)}
              />
              </div>

              <div>
              <label htmlFor="billingstateut">Enter Billing State/Ut code</label>
              <input 
                type="text" 
                name="billingstateut" 
                id="billingstateut" 
                placeholder="Enter Billing State/Ut code" 
                autoComplete="off" 
                value={billingstateut} 
                onChange={(event)=>setBillingStateut(event.target.value)}
              />
              </div>
              </article>

              <h1>Shipping Details</h1>

              <article className="infodata">
              <div>
              <label htmlFor="shippingname">Enter shipping name</label>
              <input 
                type="text" 
                name="shippingname" 
                id="shippingname" 
                placeholder="Enter shippingname" 
                autoComplete="off" 
                value={shippingname} 
                onChange={(event)=>setShippingName(event.target.value)}
              />
              </div>

              <div>
              <label htmlFor="shippingaddress">Enter Shipping address</label>
              <input 
                type="text" 
                name="shippingaddress" 
                id="shippingaddress" 
                placeholder="Enter shipping address" 
                autoComplete="off" 
                value={shippingaddress} 
                onChange={(event)=>setShippingAddress(event.target.value)}
              />
              </div>

              <div>
              <label htmlFor="shippingstateut">Enter Shipping state/Ut code</label>
              <input 
                type="text" 
                name="shippingstateut" 
                id="shippingstateut" 
                placeholder="Enter Shipping state/Ut code" 
                autoComplete="off" 
                value={shippingstateut} 
                onChange={(event)=>setShippingStateut(event.target.value)}
              />
              </div>
              </article>

              <article className="infodata">
              <div>
              <label htmlFor="placesupply">Enter place of supply</label>
              <input 
                type="text" 
                name="placesupply" 
                id="placesupply" 
                placeholder="Enter place of supply" 
                autoComplete="off" 
                value={placesupply} 
                onChange={(event)=>setPlaceSupply(event.target.value)}
              />
              </div>

              <div>
              <label htmlFor="placedelivery">Enter place of delivery</label>
              <input 
                type="text" 
                name="placedelivery" 
                id="placedelivery" 
                placeholder="Enter place of delivery" 
                autoComplete="off" 
                value={placedelivery} 
                onChange={(event)=>setPlaceDelivery(event.target.value)}
              />
              </div>
              </article>

              <h1>Order Details</h1>

              <article className="infodata">
              <div>
              <label htmlFor="orderno">Enter Order No</label>
              <input 
                type="text" 
                name="orderno" 
                id="orderno" 
                placeholder="Enter order no" 
                autoComplete="off" 
                value={orderno} 
                onChange={(event)=>setOrderno(event.target.value)}
              />
              </div>

              <div>
              <label htmlFor="orderdate">Enter Order Date</label>
              <input 
                type="date" 
                name="orderdate" 
                id="orderdate" 
                placeholder="Enter order date" 
                autoComplete="off" 
                value={orderdate} 
                onChange={(event)=>setOrderDate(event.target.value)}
              />
              </div>
              </article>

              <h1>Invoice Details</h1>

              <article className="infodata">
              <div>
              <label htmlFor="invoiceno">Enter Invoice No</label>
              <input 
                type="text" 
                name="invoiceno" 
                id="invoiceno" 
                placeholder="Enter invoice no" 
                autoComplete="off" 
                value={invoiceno} 
                onChange={(event)=>setInvoiceNo(event.target.value)}
              />
              </div>

              <div>
              <label htmlFor="invoicedetails">Enter Invoice Details</label>
              <input 
                type="text" 
                name="invoicedetails" 
                id="invoicedetails" 
                placeholder="Enter Invoice Details" 
                autoComplete="off" 
                value={invoicedetails} 
                onChange={(event)=>setInvoiceDetails(event.target.value)}
              />
              </div>

              <div>
              <label htmlFor="invoicedate">Enter Invoice Date</label>
              <input 
                type="date" 
                name="invoicedate" 
                id="invoicedate" 
                placeholder="Enter invoice date" 
                autoComplete="off" 
                value={invoicedate} 
                onChange={(event)=>setInvoiceDate(event.target.value)}
              />
              </div>
              </article>

              <h1>Product Details</h1>

              <article>
                <TableForm sino={sino} setSiNo={setSiNo} description={description} setDescription={setDescription} unitprice={unitprice} setUnitPrice={setUnitPrice} quantity={quantity} setQuantity={setQuantity} netamount={netamount} setNetAmount={setNetAmount} taxrate={taxrate} setTaxRate={setTaxRate} taxtype={taxtype} setTaxType={setTaxType} taxamount={taxamount} setTaxAmount={setTaxAmount} totalamount={totalamount} setTotalAmount={setTotalAmount} placesupply={placesupply} placedelivery={placedelivery} list={list} setList={setList}/>
              </article>

              <article className="infodata">
              <div>
              <label htmlFor="tax">Enter Tax payable</label>
              <input 
                type="text" 
                name="tax" 
                id="tax" 
                placeholder="Enter Tax payable" 
                autoComplete="off" 
                value={tax} 
                onChange={(event)=>setTax(event.target.value)}
              />
              </div>
              </article>

              <article>
                <SignaturePad setimage={setimage} setImagesign={setImagesign}/>
              </article>

              <button onClick={()=> setShowInvoice(true)} class="button-59">
                Invoice
              </button>
            </div>
          </>        
        )}
      </main>
    </>
  );
}

export default App;
