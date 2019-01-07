import classnames from 'classnames'
import { range } from '@stackable/util'
import { RichText } from '@wordpress/editor'

const save = props => {
	const { attributes, className } = props
	const {
		columns,
		imageSize,
		design,
	} = attributes

	const mainClasses = classnames( [
		className,
		'ugb-feature-grid',
		`columns-${ columns }`,
	], {
		[ `ugb-design-${ design }` ]: design && design !== 'basic',
	} )

	return (
		<div className={ mainClasses }>
			{ range( 1, columns + 1 ).map( i => {
				const imageUrl = attributes[ `imageUrl${ i }` ]
				const title = attributes[ `title${ i }` ]
				const description = attributes[ `description${ i }` ]
				const linkUrl = attributes[ `linkUrl${ i }` ]
				const linkText = attributes[ `linkText${ i }` ]
				return (
					<div className={ `ugb-feature-grid-item` } key={ i }>
						{ imageUrl && <img src={ imageUrl } style={ { width: `${ imageSize }%` } } alt={ title } /> }
						{ ! RichText.isEmpty( title ) && (
							<RichText.Content
								tagName="h5"
								className="ugb-fg-title"
								value={ title }
							/>
						) }
						{ ! RichText.isEmpty( description ) && (
							<RichText.Content
								tagName="p"
								className="ugb-fg-description"
								value={ description }
							/>
						) }
						{ ! RichText.isEmpty( linkText ) && (
							<p>
								<RichText.Content
									tagName="a"
									href={ linkUrl }
									value={ linkText }
									className="ugb-fg-link"
								/>
							</p>
						) }
					</div>
				)
			} ) }
		</div>
	)
}

export default save
