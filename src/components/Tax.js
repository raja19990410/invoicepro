export default function Tax({tax}) {
    return (
        <>
            <section className="details1">
                <div>
                    <p><span className="textbol">Wheather tax is payable under reverse charge -</span>{tax}</p>
                </div>
            </section>
        </>
    )
}