class Machine extends React.Component {
    s1 = "🍓"
    s2 ="🍉"
    s3="🍑"
    render() {
        const { s1, s2, s3 } = this.props;
        const winner = (s1 === s2) && (s2 === s3);

        return (
            <div>
                <p>{s1} {s2} {s3}</p>
                <p>{winner ? 'Winner!' : 'Loser!'}</p>
            </div>
        )
    }
}

export default Machine