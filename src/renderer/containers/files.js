import { connect } from 'react-redux'
import { START_UPLOAD } from '../constants/renter.js'
import FilesView from '../components/files.js'

const mapStateToProps = (state) => ({
	files: state.files,
})
const mapDispatchToProps = (dispatch) => ({
	handleUpload: (file) => {
		dispatch({type: START_UPLOAD})
	},
})

const Files = connect(mapStateToProps, mapDispatchToProps)(FilesView)
export default Files
