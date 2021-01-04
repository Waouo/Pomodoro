import { useDispatch, useSelector } from 'react-redux'
import {
  SCREEN_HOME,
  SCREEN_TODO_LIST,
  SCREEN_ANALYTICS,
  SCREEN_MUSIC,
} from '../constant/constants'

const Sidenav = () => {
  const mode = useSelector((state) => state.mode)

  const dispatch = useDispatch()

  const background =
    mode === 'work'
      ? 'transparent linear-gradient(180deg, #FF6F61 0%, #FF4040 100%) 0% 0% no-repeat padding-box'
      : 'transparent linear-gradient(180deg, #0AB6A2 0%, #009987 100%) 0% 0% no-repeat padding-box'

  return (
    <nav id="sidenav" style={{ background }}>
      <h1 className="title text-light rotate-left-90">POMODORO</h1>
      <button
        onClick={() => dispatch({ type: SCREEN_HOME })}
        className=" sidenav-btn btn-schedule icon-schedule btn-lg bg-transparent"
      />
      <button
        onClick={() => dispatch({ type: SCREEN_TODO_LIST })}
        className="sidenav-btn btn-list icon-list btn-lg bg-transparent"
      />
      <button
        onClick={() => dispatch({ type: SCREEN_ANALYTICS })}
        className="sidenav-btn btn-assessment icon-assessment  btn-lg bg-transparent"
      />
      <button
        onClick={() => dispatch({ type: SCREEN_MUSIC })}
        className="sidenav-btn btn-music icon-music btn-lg bg-transparent"
      />
    </nav>
  )
}

export default Sidenav
