function SCard({currentSpeaker}){

    return(
        <article className="container">
            <h3>{currentSpeaker}</h3>
            <p>{currentSpeaker} she said .</p>
        </article>
    );
};

export default SCard;