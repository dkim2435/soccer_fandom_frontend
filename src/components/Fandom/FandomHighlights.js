import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Collapsible, CollapsibleItem } from 'react-materialize'

class FandomHighlights extends Component {
  render() {
    return (
      <Collapsible popout>
        <CollapsibleItem header={this.props.h.title} icon="filter_drama">
          Better safe than sorry. That's my motto.
        </CollapsibleItem>
      </Collapsible>
    )
  }
}

export default connect()(FandomHighlights)