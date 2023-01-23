import './WeatherWidget.css'

const WeatherWidget = (props) => {

    let temperature = props.celsius
    const isFarenheit = props.unit === 'F'

    if (isFarenheit) {
        temperature = props.celsius * 1.8 + 32
    }

    let icon = ''

    if (props.celsius < 0) {
        icon = "⛈️"
    } else if (props.celsius > 0 && props.celsius <6) {
        icon = "🌥️"
    } else if (props.celsius > 6 && props.celsius <20) {
        icon = "🌤️"
    } else {
        icon = '🟡'
    }




    return (
        <div className={"WeatherWidget " + props.theme}>

            <span>{icon}</span>
            <h3>{props.city}</h3>
            <h2>
                {temperature} º{props.unit}
            </h2>
        </div>
    )
}

export default WeatherWidget