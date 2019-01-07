import classnames from 'classnames'
import { range } from '@stackable/util'
import { RichText } from '@wordpress/editor'
import { getFontFamily } from './font'

const save = props => {
	const { className, attributes } = props
	const {
		columns,
		backgroundColor,
		backgroundImageURL,
		fixedBackground,
		backgroundOpacity = 5,
		textColor,
		countColor,
		countSize,
		contentWidth,
		design,
		align,
		borderRadius,
		shadow,
		countFont,
		countFontWeight,
	} = attributes

	const mainClasses = classnames( [
		className,
		'ugb-countup',
		'ugb-countup-v3', // For backward compatibility.
		`columns-${ columns }`,
		'ugb-has-background-opacity-' + ( 1 * Math.round( backgroundOpacity / 1 ) ),
	], {
		// 'ugb-has-background': backgroundColor || backgroundImageURL,
		'ugb-has-background-image': backgroundImageURL,
		[ `ugb-content-width` ]: align === 'full' && contentWidth,
		[ `ugb-design-${ design }` ]: design !== 'plain',
		[ `ugb-shadow-${ shadow }` ]: design !== 'plain' && shadow !== 3,
	} )

	const mainStyle = {
		backgroundColor: design !== 'plain' && backgroundColor ? backgroundColor : undefined,
		backgroundImage: design !== 'plain' && backgroundImageURL ? `url(${ backgroundImageURL })` : undefined,
		backgroundAttachment: fixedBackground ? 'fixed' : undefined,
		'--ugb-background-color': design !== 'plain' && backgroundImageURL ? backgroundColor : undefined,
		borderRadius: design !== 'plain' && borderRadius !== 12 ? borderRadius : undefined,
	}

	const countStyle = {
		color: countColor ? countColor : undefined,
		fontSize: countSize ? countSize + 'px' : undefined,
		// fontFamily: countFont && countFont !== 'theme' ? getFontFamily( countFont ) : undefined,
		fontWeight: countFontWeight ? countFontWeight : undefined,
	}
	if ( countFont && countFont !== 'theme' ) {
		countStyle.fontFamily = getFontFamily( countFont )
	}

	return (
		<div className={ mainClasses } style={ mainStyle }>
			<div className="ugb-content-wrapper">
				{ range( 1, columns + 1 ).map( i => {
					const title = attributes[ `title${ i }` ]
					const description = attributes[ `description${ i }` ]
					const countText = attributes[ `countText${ i }` ]
					return (
						<div className="ugb-countup-item" key={ i }>
							{ ! RichText.isEmpty( title ) && (
								<RichText.Content
									tagName="h4"
									style={ { color: textColor ? textColor : undefined } }
									value={ title }
								/>
							) }
							{ ! RichText.isEmpty( countText ) && (
								<RichText.Content
									tagName="div"
									className="ugb-counter"
									style={ countStyle }
									value={ countText }
									data-duration="1000"
									data-delay="16"
								/>
							) }
							{ ! RichText.isEmpty( description ) && (
								<RichText.Content
									tagName="p"
									style={ { color: textColor ? textColor : undefined } }
									value={ description }
								/>
							) }
						</div>
					)
				} ) }
			</div>
		</div>
	)
}

export default save
