import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import { RichText } from '@wordpress/editor'
import { omit } from 'lodash'

export const deprecatedSave_1_5 = props => {
	const { className } = props
	const {
		url,
		href,
		title,
		titleColor,
		subtitle,
		subtitleColor,
		overlayColor,
		height,
		width,
		verticalAlign,
		horizontalAlign,
		full,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-image-box',
	], {
		'has-image': url,
		'full-width': full,
		'has-no-content': ! title && ! subtitle,
		'has-content': title || subtitle,
	} )

	return (
		<div className={ mainClasses }
			data-url={ url }
			style={ {
				width: width + 'px',
				height: height + 'px',
				backgroundImage: `url(${ url })`,
				alignItems: horizontalAlign,
				justifyContent: verticalAlign,
			} }
		>
			{ /* eslint-disable-next-line */ }
			<a href={ href } style={ { backgroundColor: overlayColor } } />
			{ ! RichText.isEmpty( title ) && (
				<RichText.Content
					tagName="h4"
					style={ { color: titleColor } }
					value={ title }
				/>
			) }
			{ ! RichText.isEmpty( subtitle ) && (
				<RichText.Content
					tagName="p"
					style={ { color: subtitleColor } }
					value={ subtitle }
				/>
			) }
		</div>
	)
}

export const deprecatedSchema_1_5 = {
	title: {
		source: 'html',
		selector: 'h4',
		default: __( 'Title' ),
	},
	subtitle: {
		source: 'html',
		selector: 'p',
		default: __( 'Subtitle goes here' ),
	},
	url: {
		type: 'string',
		source: 'attribute',
		selector: '.ugb-image-box',
		attribute: 'data-url',
	},
	href: {
		type: 'string',
		source: 'attribute',
		selector: 'a',
		attribute: 'href',
	},
	titleColor: {
		type: 'string',
		default: '#ffffff',
	},
	subtitleColor: {
		type: 'string',
		default: '#ffffff',
	},
	overlayColor: {
		type: 'string',
		default: '#42b078',
	},
	id: {
		type: 'number',
	},
	width: {
		type: 'number',
		default: '400',
	},
	height: {
		type: 'number',
		default: '400',
	},
	verticalAlign: {
		type: 'string',
		default: 'center',
	},
	horizontalAlign: {
		type: 'string',
		default: 'center',
	},
	full: {
		type: 'boolean',
		default: false,
	},
}

export const deprecatedSchema_1_1_2 = {
	title: {
		type: 'array',
		source: 'children',
		selector: 'h4',
		default: __( 'Title' ),
	},
	subtitle: {
		type: 'array',
		source: 'children',
		selector: 'p',
		default: __( 'Subtitle goes here' ),
	},
	url: {
		type: 'string',
		source: 'attribute',
		selector: '.ugb-image-box',
		attribute: 'data-url',
	},
	titleColor: {
		type: 'string',
		default: '#ffffff',
	},
	subtitleColor: {
		type: 'string',
		default: '#ffffff',
	},
	overlayColor: {
		type: 'string',
		default: '#42b078',
	},
	id: {
		type: 'number',
	},
	width: {
		type: 'number',
		default: '400',
	},
	height: {
		type: 'number',
		default: '400',
	},
	verticalAlign: {
		type: 'string',
		default: 'center',
	},
	horizontalAlign: {
		type: 'string',
		default: 'center',
	},
	full: {
		type: 'boolean',
		default: false,
	},
}

export const deprecatedSave_1_1_2 = props => {
	const {
		url,
		title,
		titleColor,
		subtitle,
		subtitleColor,
		overlayColor,
		height,
		width,
		verticalAlign,
		horizontalAlign,
		full,
	} = props.attributes

	const imageClass = url ? 'has-image' : ''

	const fullWidth = full ? 'full-width' : ''

	const displayNone = ( ! title.length && ! subtitle.length ) ? 'has-no-content' : 'has-content'

	return (
		<div className={ `ugb-image-box ${ imageClass } ${ displayNone } ${ fullWidth }` }
			data-url={ url }
			style={ {
				width: width + 'px',
				height: height + 'px',
				backgroundImage: `url(${ url })`,
				alignItems: horizontalAlign,
				justifyContent: verticalAlign,
			} }
		>
			{ /* eslint-disable-next-line */ }
			<a href="#" style={ { backgroundColor: overlayColor } } />
			{ ! RichText.isEmpty( title ) && (
				<RichText.Content
					tagName="h4"
					style={ { color: titleColor } }
					value={ title }
				/>
			) }
			{ ! RichText.isEmpty( subtitle ) && (
				<RichText.Content
					tagName="p"
					style={ { color: subtitleColor } }
					value={ subtitle }
				/>
			) }
		</div>
	)
}

const deprecated = [
	{
		attributes: deprecatedSchema_1_5,
		save: deprecatedSave_1_5,
		migrate: attributes => {
			return omit( {
				...attributes,
				columns: 1,
				horizontalAlign: attributes.horizontalAlign === 'flex-end' ? 'right' :
					attributes.horizontalAlign === 'flex-start' ? 'left' :
						attributes.horizontalAlign,
				align: attributes.full ? 'wide' : '',
				title1: attributes.title,
				description1: attributes.subtitle,
				link1: attributes.href,
				imageURL1: attributes.url,
				imageID1: attributes.id,
			}, [
				'full', 'title', 'subtitle', 'href', 'url', 'id',
			] )
		},
	},
	{
		attributes: deprecatedSchema_1_1_2,
		save: deprecatedSave_1_1_2,
	},
]

export default deprecated
