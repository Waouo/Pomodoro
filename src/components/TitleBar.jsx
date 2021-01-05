import PropTypes from 'prop-types'

const TitleBar = ({ title, isCollapsedBtn = false, handleCollapse }) => {
  return (
    <div
      className="text-light d-flex justify-content-sb align-items-center"
      style={{
        background: '#FF6F61 0% 0% no-repeat padding-box',
        width: '100 %',
        marginTop: '1em',
        padding: '0.5em 0 0.5em 2em',
        lineHeight: '2em',
      }}
    >
      <p>{title}</p>
      {isCollapsedBtn && (
        <button className="icon-expand btn-md" onClick={handleCollapse} />
      )}
    </div>
  )
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  isCollapsedBtn: PropTypes.bool,
  handleCollapse: PropTypes.func,
}

export default TitleBar
