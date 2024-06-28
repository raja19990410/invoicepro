import React from "react"
export default function TotalTax({list,placesupply,placedelivery}) {
    let sum = 0;
    if (placesupply===placedelivery){
        list.forEach(item => {
        sum += parseFloat(item.taxamount)+parseFloat(item.taxamount)+1.54; // Convert taxamount to float and add to sum
        });
    }else{
        list.forEach(item => {
            sum += parseFloat(item.taxamount)+2.78; // Convert taxamount to float and add to sum
            });
    }
    let result=sum.toFixed(2)
    return (
        <>
            <p>₹{result}</p>
        </>
    )
}