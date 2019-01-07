import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import { RichText } from '@wordpress/editor'
import { omit } from 'lodash'

export const deprecatedSchema_1_5 = {
	href: {
		type: 'url',
	},
	hrefTwo: {
		type: 'url',
	},
	hrefThree: {
		type: 'url',
	},
	mediaID: {
		type: 'number',
	},
	mediaIDTwo: {
		type: 'number',
	},
	mediaIDThree: {
		type: 'number',
	},
	mediaURL: {
		type: 'string',
		source: 'attribute',
		selector: '.ugb-team-member-column-one .team-member-image',
		attribute: 'data-src',
	},
	mediaURLTwo: {
		type: 'string',
		source: 'attribute',
		selector: '.ugb-team-member-column-two .team-member-image',
		attribute: 'data-src',
	},
	mediaURLThree: {
		type: 'string',
		source: 'attribute',
		selector: '.ugb-team-member-column-three .team-member-image',
		attribute: 'data-src',
	},
	name: {
		source: 'html',
		selector: '.ugb-team-member-column-one h4',
		default: __( 'Ben Adams' ),
	},
	nameTwo: {
		source: 'html',
		selector: '.ugb-team-member-column-two h4',
		default: __( 'Alex Johnson' ),
	},
	nameThree: {
		source: 'html',
		selector: '.ugb-team-member-column-three h4',
		default: __( 'Sammy Simpson' ),
	},
	position: {
		source: 'html',
		selector: '.ugb-team-member-column-one .ugb-team-member-position',
		default: __( 'Founder' ),
	},
	positionTwo: {
		source: 'html',
		selector: '.ugb-team-member-column-two .ugb-team-member-position',
		default: __( 'Editor' ),
	},
	positionThree: {
		source: 'html',
		selector: '.ugb-team-member-column-three .ugb-team-member-position',
		default: __( 'Programmer' ),
	},
	des: {
		source: 'html',
		selector: '.ugb-team-member-des',
		default: __( 'Ben is the head of our small team. He loves walking his dog, Walter, when he has some free time.' ),
	},
	desTwo: {
		source: 'html',
		selector: '.ugb-team-member-des-two',
		default: __( 'Alex handles all written content. She enjoys painting and playing softball on the weekends.' ),
	},
	desThree: {
		source: 'html',
		selector: '.ugb-team-member-des-three',
		default: __( 'Sammy is our programmer. You\'ll usually find her nose in a book. She has a cat named Skitty.' ),
	},
	nameColor: {
		type: 'string',
	},
	posColor: {
		type: 'string',
	},
	desColor: {
		type: 'string',
	},
	iconColor: {
		type: 'string',
	},
	columns: {
		type: 'number',
		default: 1,
	},
	shapes: {
		type: 'string',
		default: 'square',
	},
}

export const deprecatedSave_1_5 = props => {
	const { className } = props
	const {
		name,
		nameTwo,
		nameThree,
		shapes,
		des,
		desTwo,
		desThree,
		position,
		positionTwo,
		positionThree,
		mediaURL,
		mediaURLTwo,
		mediaURLThree,
		nameColor,
		posColor,
		desColor,
		columns,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-team-member',
		`column-${ columns }`,
		`image-${ shapes }`,
	] )

	return (
		<div className={ mainClasses }>
			<div className={ 'ugb-team-member-column-one' }>
				{ mediaURL && <div className="team-member-image" style={ { backgroundImage: `url(${ mediaURL })` } } data-src={ mediaURL }></div> }
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
				{ ! RichText.isEmpty( des ) && (
					<RichText.Content
						tagName="p"
						className="ugb-team-member-des"
						style={ { color: desColor } }
						value={ des }
					/>
				) }
			</div>
			{ columns > 1 && (
				<div className={ 'ugb-team-member-column-two' }>
					{ mediaURLTwo && <div className="team-member-image" style={ { backgroundImage: `url(${ mediaURLTwo })` } } data-src={ mediaURLTwo }></div> }
					{ ! RichText.isEmpty( nameTwo ) && (
						<RichText.Content
							tagName="h4"
							style={ { color: nameColor } }
							value={ nameTwo }
						/>
					) }
					{ ! RichText.isEmpty( positionTwo ) && (
						<RichText.Content
							tagName="p"
							className="ugb-team-member-position"
							style={ { color: posColor } }
							value={ positionTwo }
						/>
					) }
					{ ! RichText.isEmpty( desTwo ) && (
						<RichText.Content
							tagName="p"
							className="ugb-team-member-des-two"
							style={ { color: desColor } }
							value={ desTwo }
						/>
					) }
				</div>
			) }
			{ columns > 2 && (
				<div className={ 'ugb-team-member-column-three' }>
					{ mediaURLThree && <div className="team-member-image" style={ { backgroundImage: `url(${ mediaURLThree })` } } data-src={ mediaURLThree }></div> }
					{ ! RichText.isEmpty( nameThree ) && (
						<RichText.Content
							tagName="h4"
							style={ { color: nameColor } }
							value={ nameThree }
						/>
					) }
					{ ! RichText.isEmpty( positionThree ) && (
						<RichText.Content
							tagName="p"
							className="ugb-team-member-position"
							style={ { color: posColor } }
							value={ positionThree }
						/>
					) }
					{ ! RichText.isEmpty( desThree ) && (
						<RichText.Content
							tagName="p"
							className="ugb-team-member-des-three"
							style={ { color: desColor } }
							value={ desThree }
						/>
					) }
				</div>
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
				columns: attributes.columns ? attributes.columns : 1,
				href1: attributes.href,
				href2: attributes.hrefTwo,
				href3: attributes.hrefThree,
				mediaID1: attributes.mediaID,
				mediaID2: attributes.mediaIDTwo,
				mediaID3: attributes.mediaIDThree,
				mediaURL1: attributes.mediaURL,
				mediaURL2: attributes.mediaURLTwo,
				mediaURL3: attributes.mediaURLThree,
				name1: attributes.name,
				name2: attributes.nameTwo,
				name3: attributes.nameThree,
				position1: attributes.position,
				position2: attributes.positionTwo,
				position3: attributes.positionThree,
				description1: attributes.des,
				description2: attributes.desTwo,
				description3: attributes.desThree,
			}, [
				'href', 'hrefTwo', 'hrefThree',
				'mediaID', 'mediaIDTwo', 'mediaIDThree',
				'mediaURL', 'mediaURLTwo', 'mediaURLThree',
				'name', 'nameTwo', 'nameThree',
				'postion', 'positionTwo', 'positionThree',
				'des', 'desTwo', 'desThree',
			] )
		},
	},
]

export default deprecated
