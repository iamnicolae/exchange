import Logo from './Logo'
import './Loading.css'

function Loading() {
  return (
    <div className="loading">
      <Logo />
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="loading_text">Se încarcă</p>
    </div>
  )
}

export default Loading