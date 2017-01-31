import React from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'


const FormView = (props) => (
  <div>
    {props.children.length &&
      props.children.map((child, key) =>
        <div>
          {child.props.text &&
            <TextField
              field={child.props.name}
              floatingLabelText={child.props.label}
              onChange={props.onChange}
              {...child.props.rest}
            />
          }
        </div>
    )}
  </div>
)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormView)
