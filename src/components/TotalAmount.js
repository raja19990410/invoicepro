import React from "react"
export default function TotalAmount({list,placesupply,placedelivery}) {
    let sum = 0;
    if (placesupply===placedelivery){
        list.forEach(item => {
        sum += parseFloat(item.totalamount)+32.50; // Convert taxamount to float and add to sum
        });
    }else{
        list.forEach(item => {
            sum += parseFloat(item.totalamount)+33.74 // Convert taxamount to float and add to sum
            });
    }
    let result=sum.toFixed(2)
    return (
        <>
            <p>₹{result}</p>
        </>
    )
}