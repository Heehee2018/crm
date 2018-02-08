var store = {
    debug: true,
    state: {
        showCallDetail: false
    },
    setCallDetailAction (newValue) {
        //if (this.debug) console.log('setMessageAction triggered with', newValue)
        this.state.showCallDetail = newValue
    },
    clearMessageAction () {
        if (this.debug) console.log('clearMessageAction triggered')
        this.state.message = ''
    }
}