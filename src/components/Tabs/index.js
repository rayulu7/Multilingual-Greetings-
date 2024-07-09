import './index.css'

const Tabs = props => {
  const {listDetails, onChangeTab, isActive} = props
  const {id, buttonText} = listDetails

  const onTab = () => {
    onChangeTab(id)
  }

  const activeTabClassName = isActive ? 'active-tab-special-style' : ''

  return (
    <li>
      <button
        type="button"
        onClick={onTab}
        className={`tab-button ${activeTabClassName}`}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default Tabs
