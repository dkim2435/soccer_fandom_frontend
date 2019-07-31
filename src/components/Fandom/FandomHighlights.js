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
        <CollapsibleItem header="Yeah, you do seem to have a little 'shit creek' ac…" icon="place">
          Yeah, you do seem to have a little 'shit creek' action going.
        </CollapsibleItem>
        <CollapsibleItem header="You know, FYI, you can buy a paddle. Did you not p…" icon="whatshot">
          You know, FYI, you can buy a paddle. Did you not plan for this contingency?
        </CollapsibleItem>
      </Collapsible>
    )
  }
}

export default connect()(FandomHighlights)