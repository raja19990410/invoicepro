export default function Shop({pan,gst}) {
    return (
        <>
            <section className="details1">
                <div>
                    <p><span className="textbol">PAN NO:</span>{pan}</p>
                    <p><span className="textbol">GST Registration NO:</span>{gst}</p>
                </div>                
            </section>
        </>
    )
}