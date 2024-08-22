export default function Box(props) {
    return <div
        className="box"
        style={{
            background: props.background,
            color: 'white',
            width: 400,
            height: 400,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 50
        }}
    >
        {props.text}
    </div>
}