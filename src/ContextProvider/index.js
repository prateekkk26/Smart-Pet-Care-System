import React, { Component } from 'react'
import { Modal } from '../common/Modal';

const Context = React.createContext()
const { Provider, Consumer } = Context;
export { Context, Provider, Consumer }

class ContextProvider extends Component {
    state = {
        path: '/',
        title: 'Login',
        modalOpen: false
    }

    componentDidMount() {
        this.trackModal();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.path !== this.state.path) {
            let title = '';
            switch(this.state.path) {
                case '/': {
                    title = 'Login';
                    break;
                }
                case '/signup': {
                    title = 'Signup';
                    break;
                }
                case '/dashboard': {
                    title = 'Dashboard';
                    break;
                }
                case '/pet/add': {
                    title = 'Pet Details';
                    break;
                }
                default: {}
            }
            this.contextOnChange('title', title);
        }
    }

    trackModal = () => {
        // Show modal after every 5 hours
        var timer; // variable persisted here
        window.clearTimeout(timer);
        let time = 18000000; // 5 hours
        timer = window.setTimeout(() => {
            this.contextOnChange('modalOpen', true);
            window.clearTimeout(timer);
        },time);
    }

    contextOnChange =  (type, value) => {
        this.setState({ [type]: value })
    }

    closeModal = () => {
        this.contextOnChange('modalOpen', false);
        this.trackModal();
    }

    render() {
        const { state, contextOnChange } = this;
        const { path, title, modalOpen } = state;

        let data = {
            title, 
            path,
            contextOnChange
        }

        return (
            <Provider value={data}>
                {this.props.children}
                <Modal 
                    open={modalOpen}
                    type="feedPet"
                    title="Feed Pet"
                    close={this.closeModal}
                />
            </Provider>
        )
    }
}

export default ContextProvider
