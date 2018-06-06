import React, { Component } from 'react';

import styles from './Main.css';

import GroupContainer from '../../containers/GroupContainer';
import TodoContainer from '../../containers/TodoContainer';
import ModalManager from '../../containers/ModalManager';

class Main extends Component {
    render() {
        return (
            <div className={styles.main}>
                <GroupContainer />
                <TodoContainer />
                <ModalManager />
            </div>
        );
    }
}

export default Main;

//      {this.changeView(this.state.typeForm)}

// <div className={styles.main}>
// <GroupsList 
//     groups={this.state.groups} 
//     activeGroup={this.state.activeGroup} 
//     togglePopup={this.togglePopup} 
//     deleteGroup={this.deleteGroup}
    
//     filterNotes={this.filterNotes}/>
// <NotesList 
//     notes={this.state.filteredNotes || this.state.notes} 
//     activeNote={this.state.activeNote} 
//     togglePopup={this.togglePopup} 
//     setActiveNote={this.setActiveNote}/>
// <NotesItemDetail activeNote={this.state.activeNote || null}/>


 // state = {
    //     showPopup: null,
    //     groups: [],
    //     activeGroup: '',
    //     notes: [],
    //     activeNote: {},
    //     filteredNotes: null,
    //     typeForm: '',
    // }

    // togglePopup = (type) => {
    //     this.setState({
    //         showPopup: !this.state.showPopup,
    //         typeForm: type || null
    //     })
    // }

    // changeView = (type) => {
    //     switch (type) {
    //         case ('group'): 
    //             return <GroupCreate 
    //                     addGroup={this.addGroup} 
    //                     togglePopup={this.togglePopup}/>
    //         case ('note'):
    //             return <NoteCreate 
    //                     addNote={this.addNote} 
    //                     togglePopup={this.togglePopup}
    //                     groups={this.state.groups}/>
    //     }
    // }

    // addNote = (data) => {
    //     const groupID = data.group;
    //     const activeGroup = this.state.activeGroup;

    //     this.setState({
    //         showPopup: null,
    //         notes: [...this.state.notes, data]
    //     })
        
    //     if (groupID === activeGroup) this.filterNotes(groupID)
    // }

    // addGroup = (data) => {
    //     this.setState({
    //         showPopup: null,
    //         groups: [...this.state.groups, data]
    //     })
    // }

    // filterNotes = (id) => {
    //     this.setState({
    //         activeGroup: id,
    //         filteredNotes: id ? this.state.notes.filter(({group}) => group === id): null
    //     });
    // }
    
    // setActiveNote = (id) => {
    //     this.setState({
    //         activeNote: id ? this.state.notes.filter(item => item.id === id)[0]: null
    //     })
    // }

    // deleteGroup = (data) => {
    //     this.setState({
    //         groups: data
    //     })
    // }




// addNote = (data) => {
//     const groupID = data.group;
//     this.setState({
//         showPopup: null,
//         notes: [...this.state.notes, data]
//     })

//     this.filterNotes(groupID)
// }

// addGroup = (data) => {
//     this.setState({
//         showPopup: null,
//         groups: [...this.state.groups, data]
//     })
// }

// filterNotes = (id) => {
//     let activeGroup = this.state.activeGroup;

//     if (activeGroup && activeGroup === id) {
//         this.setState({
//             filteredNotes: this.state.notes.filter(({ group }) => group === id)
//         });
//     } else if (activeGroup && activeGroup !== id) {
//         this.setState({
//             activeGroup: id,
//             filteredNotes: this.state.notes.filter(({ group }) => group === id)
//         });
//     } else {
//         this.setState({
//             activeGroup: null,
//             filteredNotes: null
//         });
//     }
// }