import { useSelector } from 'react-redux'

const Sidenav = () => {
  const timerState = useSelector((state) => state.timerState)

  const background =
    timerState === 'work'
      ? 'transparent linear-gradient(180deg, #FF6F61 0%, #FF4040 100%) 0% 0% no-repeat padding-box'
      : 'transparent linear-gradient(180deg, #0AB6A2 0%, #009987 100%) 0% 0% no-repeat padding-box'

  return (
    <nav id="sidenav" style={{ background }}>
      <h1 className="title text-light rotate-left-90">POMODORO</h1>
      <button className=" sidenav-btn btn-schedule icon-schedule btn-lg bg-transparent"></button>
      <button className="sidenav-btn btn-list icon-list btn-lg bg-transparent"></button>
      <button className="sidenav-btn btn-assessment icon-assessment  btn-lg bg-transparent"></button>
      <button className="sidenav-btn btn-music icon-music btn-lg bg-transparent"></button>
    </nav>
  )
}

export default Sidenav
