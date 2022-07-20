function DisplaySentences(props) {

    let elements = []
    
    if(props.lines.length > 0) {
        
        for(let i=0; i<100; i++) {
            elements.push(<li className="chalk" key={i}>{props.lines}</li>)
        }
            
    }

    return elements
}
        

export default DisplaySentences