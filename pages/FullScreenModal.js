import {renderComponent} from "./renderComponent.js"
import styles from '../styles/FullScreenModal.module.css'

const FullScreenModal = ({Data}) => {
	return (
	<>
	<div className={styles.background}>
	<div className={styles.componentView}>
	{renderComponent(Data.component)}
	</div>
	<div className={styles.sideBar}>
	<h1>{Data.name}</h1>
	<h3>{Data.description}</h3>
	<p className={styles.sideBarFooter}>🧑‍🔧 You are in Development Mode. Refresh to Exit.</p>
	</div>
	</div>
	</>
	)
}

export default FullScreenModal