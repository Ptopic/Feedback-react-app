function Header({ text, bgColor, textColor }) {
                // or props
const headerStyles = {
    backgroundColor: bgColor,
    color: textColor
}
  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>{text}</h2>
             {/* Or props.text */}
        </div>
    </header>
  )
}

// Default props values
Header.defaultProps = {
    text: "Feadback UI",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95",
}

// Specify props type
Header.propTypes = {
    // text: PropTypes.string,
}

export default Header