import React from 'react'
import { connect } from 'react-redux'
import Infinite from 'react-infinite/build/react-infinite'
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card'
import SetMenuView from './SetMenuView'


const HomeView = (props) => (
  <Infinite containerHeight={800} elementHeight={72}>
    {props.chords.map((chord, index) =>
      <Card>
        <CardHeader key={index}
          title={chord.chord}
          subtitle={chord.modf}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          Pretty chord display
        </CardText>
        <CardActions expandable={true}>
          <SetMenuView
            chordIndex={index}
          />
        </CardActions>
      </Card>
    )}
  </Infinite>
)

const mapStateToProps = state => ({
  chords: state.chords
})

export default connect(
  mapStateToProps
)(HomeView)
