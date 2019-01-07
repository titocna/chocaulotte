import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import { RichText } from '@wordpress/editor'
import { omit, merge } from 'lodash'

export const deprecatedSchema_1_4 = {
	text: {
		source: 'html',
		selector: 'p',
		default: __( 'It\'s okay to acknowledge that life can get complicated, but we musn\'t forget the beauty in its simplicity, too. From the multitude of stars above, to freshly mowed grass in the morning, life is simply wonderful.' ),
	},
	color: {
		type: 'string',
		default: '',
	},
	quoteColor: {
		type: 'string',
		default: '',
	},
}

export const deprecatedSave_1_4 = props => {
	const { className } = props
	const {
		color, text, quoteColor,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-blockquote',
	] )

	return (
		<blockquote
			className={ mainClasses }
			style={ { '--quote-color': quoteColor } }>
			<RichText.Content
				tagName="p"
				style={ { color } }
				value={ text }
			/>
		</blockquote>
	)
}

export const deprecatedSchema_0_7 = {
	text: {
		type: 'array',
		source: 'children',
		selector: 'p',
		default: __( 'It\'s okay to acknowledge that life can get complicated, but we musn\'t forget the beauty in its simplicity, too. From the multitude of stars above, to freshly mowed grass in the morning, life is simply wonderful.' ),
	},
	color: {
		type: 'string',
		default: '#424242',
	},
	borderColor: {
		type: 'string',
		default: '#2091e1',
	},
}

export const deprecatedSave_0_7 = props => {
	const {
		color, text, borderColor,
	} = props.attributes

	return (
		<blockquote
			className={ 'ugb-blockquote' }
			style={ {
				borderLeftColor: borderColor,
			} }>
			<p style={ { color: color } }>{ text }</p>
		</blockquote>
	)
}

const deprecated = [
	{
		attributes: deprecatedSchema_1_4,
		save: deprecatedSave_1_4,
	},
	{
		attributes: deprecatedSchema_0_7,
		migrate: attributes => {
			return omit( merge( attributes, { quoteColor: attributes.borderColor } ), [ 'borderColor' ] )
		},
		save: deprecatedSave_0_7,
	},
]

export default deprecated
