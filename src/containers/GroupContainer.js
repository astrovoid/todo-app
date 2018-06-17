import { connect } from 'react-redux';

import { editGroup } from '../actions/group';
import { openModal } from '../actions/modal';
import { filterByGroup } from '../actions/filter';

import GroupsList from '../components/GroupsList/GroupsList';

const mapStateToProps = (state) => {
    return {
        groups: state.groups,
        filter: state.filter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modalType, modalProps) => dispatch(openModal(modalType, modalProps)),
        editGroup: (data) => dispatch(editGroup(data)),
        filterByGroup: (id) => dispatch(filterByGroup(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupsList);