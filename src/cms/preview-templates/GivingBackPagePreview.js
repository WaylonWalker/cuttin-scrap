import React from 'react'
import PropTypes from 'prop-types'
import { GivingBackPageTemplate } from '../../templates/giving-back-page'

const GivingBackPagePreview = ({ entry, widgetFor }) => (
  <GivingBackPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

GivingBackPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default GivingBackPagePreview
