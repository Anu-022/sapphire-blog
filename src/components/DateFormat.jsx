const DateFormat = ({time}) => {
   const timeStamp = new Date(time.seconds *1000).toLocaleDateString("en-US")

    return (
        <h6 className="date-format">Created: {timeStamp}</h6>
    )
}
export default DateFormat;