import React from 'react'
import { connect } from 'react-redux'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'


const HomeView = (props) => (
  <div>
    {props.chords.map((chord, index) =>
      <Card key={index}>
        <CardHeader
          title={chord.chord}
          subtitle={chord.modf}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText>

        </CardText>
      </Card>
    )}
  </div>
)

const mapStateToProps = state => ({
  chords: state.chords
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView)
