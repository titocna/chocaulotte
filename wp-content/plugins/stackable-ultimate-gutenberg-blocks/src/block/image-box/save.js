import classnames from 'classnames'
import { range } from '@stackable/util'
import { RichText } from '@wordpress/editor'

const save = props => {
	const { className, attributes } = props
	const {
		titleColor,
		subtitleColor,
		overlayColor,
		height,
		width,
		verticalAlign,
		horizontalAlign,
		align,
		columns,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-image-box-wrapper',
		'ugb-image-box-v2',
		`columns-${ columns }`,
	] )

	const mainStyles = {
		textAlign: horizontalAlign ? horizontalAlign : undefined,
		'--overlay-color': overlayColor,
	}

	return (
		<div className={ mainClasses } style={ mainStyles }>
			{ range( 1, columns + 1 ).map( i => {
				const imageURL = attributes[ `imageURL${ i }` ]
				const title = attributes[ `title${ i }` ]
				const description = attributes[ `description${ i }` ]
				const link = attributes[ `link${ i }` ]
				const boxStyles = {
					backgroundImage: imageURL ? `url(${ imageURL })` : undefined,
					maxWidth: align !== 'wide' && align !== 'full' && columns === 1 ? width : undefined,
					height: height,
					textAlign: horizontalAlign,
					justifyContent: verticalAlign,
				}
				return (
					<div className="ugb-image-box" style={ boxStyles } key={ i }>
						{ /* eslint-disable-next-line */ }
						<a href={ link } />
						{ ! RichText.isEmpty( title ) && (
							<RichText.Content
								tagName="h4"
								style={ { color: titleColor } }
								value={ title }
							/>
						) }
						{ ! RichText.isEmpty( description ) && (
							<RichText.Content
								tagName="p"
								style={ { color: subtitleColor } }
								value={ description }
							/>
						) }
					</div>
				)
			} ) }
		</div>
	)
}

export default save
