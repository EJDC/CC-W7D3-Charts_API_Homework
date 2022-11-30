const ChartEntry = ({entry, Top20Chart}) => {
    
    
    
    
    return (
            <>
            <li>{1 + Top20Chart.indexOf(entry)} {entry['im:name'].label} by {entry['im:artist'].label}</li>
            {/* <audio controls src={entry['link']['attributes'].href} type={entry['link']['attributes'].type}></audio> */}
            </>
    )

}

export default ChartEntry