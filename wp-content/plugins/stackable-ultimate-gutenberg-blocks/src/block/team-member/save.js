import classnames from 'classnames'
import { range } from '@stackable/util'
import { RichText } from '@wordpress/editor'

const save = props => {
	const { className, attributes } = props
	const {
		shapes,
		nameColor,
		posColor,
		desColor,
		columns = 2,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-team-member',
		`columns-${ columns }`,
		`image-${ shapes }`,
	] )

	return (
		<div className={ mainClasses }>
			{ range( 1, columns + 1 ).map( i => {
				// const href = attributes[ `href${i}` ]
				const mediaURL = attributes[ `mediaURL${ i }` ]
				const name = attributes[ `name${ i }` ]
				const position = attributes[ `position${ i }` ]
				const description = attributes[ `description${ i }` ]
				return (
					<div key={ i }>
						<div className="ugb-team-member-item">
							{ mediaURL && (
								<div className="team-member-image"
									style={ { backgroundImage: mediaURL ? `url(${ mediaURL })` : undefined } }
									data-src={ mediaURL ? mediaURL : undefined }
								/>
							) }
							{ ! RichText.isEmpty( name ) && (
								<RichText.Content
									tagName="h4"
									style={ { color: nameColor } }
									value={ name }
								/>
							) }
							{ ! RichText.isEmpty( position ) && (
								<RichText.Content
									tagName="p"
									className="ugb-team-member-position"
									style={ { color: posColor } }
									value={ position }
								/>
							) }
							{ ! RichText.isEmpty( description ) && (
								<RichText.Content
									tagName="p"
									className="ugb-team-member-desc"
									style={ { color: desColor } }
									value={ description }
								/>
							) }
						</div>
					</div>
				)
			} ) }
		</div>
	)
}

export default save
